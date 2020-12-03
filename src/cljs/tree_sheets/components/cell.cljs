(ns tree-sheets.components.cell
  (:require
   [tree-sheets.components.border :refer [border]]
   [tree-sheets.utils :refer [focus-target-element]]
   [re-posh.core :as rp :refer [subscribe dispatch]]
   [reagent.core :as r])
  (:import [goog.async Debouncer]))

;; https://www.martinklepsch.org/posts/simple-debouncing-in-clojurescript.html
(defn debounce [f interval]
  (let [dbnc (Debouncer. f interval)]
    ;; We use apply here to support functions of various arities
    (fn [& args] (.apply (.-fire dbnc) dbnc (to-array args)))))

(defn set-cell-text [id text row col]
  (if id
    (dispatch [:set-cell-text id text])
    (dispatch [:create-cell text row col])))

(def set-cell-text-debounced
  (debounce set-cell-text 800))

(defn focus-parent-cell [node]
  (loop [curr-node node]
    (when (and curr-node (not= curr-node js/document))
      (if (.contains (.-classList curr-node) "cell")
        (.focus (.querySelector curr-node ".cell-inner"))
        (recur (.-parentNode curr-node))))))

(defn textarea-key-down [e refs cell-entity row col]
  (let [textarea (:textarea @refs)
        start (.-selectionStart textarea)
        end (.-selectionEnd textarea)
        text-length (.-length (.-value textarea))
        key (.-key e)]
    (cond
      (and (= key "ArrowUp") (zero? end))
      (focus-target-element (:top @refs))

      (and (= key "ArrowDown") (= start text-length))
      (focus-target-element (:bottom @refs))

      (and (= key "Enter") (.-shiftKey e))
      (if-let [child-grid (:child-grid @refs)]
        (when-let [first-child-cell (.querySelector child-grid ".cell-inner")]
          (focus-target-element first-child-cell))
        (if-let [cell-id (:db/id cell-entity)]
          (dispatch [:create-graph cell-id])
          (dispatch [:create-cell-with-child row col])))

      (= key "Escape")
      (focus-parent-cell (.. e -currentTarget)))))

(defn cell-key-down [e refs cell-entity row col]
  (when (not (.contains (.-classList (.-target e)) "textarea"))
    
    (let [key (.-key e)
          textarea (:textarea @refs)]
      (if (and (= key "Enter") (.-shiftKey e))
        (if-let [child-grid (:child-grid @refs)]
          (when-let [first-child-cell (.querySelector child-grid ".cell-inner")]
            (focus-target-element first-child-cell))
          (if-let [cell-id (:db/id cell-entity)]
            (dispatch [:create-graph cell-id])
            (dispatch [:create-cell-with-child row col])))

        (case key
          "Enter"
          (do
            (.preventDefault e)
            (.stopPropagation e)
            (focus-target-element textarea)
            (js/setTimeout
             #(.setSelectionRange textarea 0 999999)
             50))

          "Escape"
          (focus-parent-cell (.. e -currentTarget -parentNode -parentNode))

          "ArrowUp"
          (focus-target-element (:top @refs))

          "ArrowDown"
          (focus-target-element (:bottom @refs))

          "ArrowLeft"
          (focus-target-element (:left @refs))

          "ArrowRight"
          (focus-target-element (:right @refs))
          
          nil)))))

(defn overlay-mouse-down [e refs]
  (if (= js/document.activeElement (:inner @refs))
    (js/setTimeout #(focus-target-element (:textarea @refs)) 10)
    (focus-target-element (:inner @refs))))

(defn fix-textarea-height [textarea]
  (when textarea
    (set!
     (.. textarea -style -height)
     (str
      (.. textarea -scrollHeight)
      "px"))))

(defn cell [row col grid-id grid]
  (let [grid-entity (subscribe [:by-id grid-id])
        column-entity (subscribe [:by-id col])
        cell-entity (subscribe [:cell-by-row-col row col])
        refs (r/atom {})

        handle-cell-key-down #(cell-key-down % refs @cell-entity row col)
        handle-textarea-key-down #(textarea-key-down % refs @cell-entity row col)
        handle-textarea-input #(fix-textarea-height (:textarea @refs))
        handle-overlay-mouse-down #(overlay-mouse-down % refs)
        handle-textarea-change #(set-cell-text-debounced
                                 (:db/id @cell-entity)
                                 (.. % -target -value)
                                 row
                                 col)]
    
    (fn []
      (let [width (:col/width @column-entity)
            cell-id (:db/id @cell-entity)]
        [:div.cell {:class (str "loc-" row "-" col)
                    :ref #(swap! refs assoc :cell %)}
         [:div.cell-inner {:tab-index -1
                           :ref #(swap! refs assoc :inner %)
                           :on-key-down handle-cell-key-down}
          
          [:textarea.textarea {:ref #(do
                                       (swap! refs assoc :textarea %)
                                       (fix-textarea-height %))
                               :cols 10000
                               :style {:font-size (get @cell-entity :font-size "14px")
                                       :max-width (str (if (zero?
                                                            (* 8 (:col/width @column-entity)))
                                                         200 200) "px")}
                               :on-input handle-textarea-input
                               :spell-check "false"

                               :on-change handle-textarea-change
                               :default-value (or (:cell/text @cell-entity) "")

                               :on-key-down handle-textarea-key-down}]

          [:div.overlay {:on-mouse-down handle-overlay-mouse-down}]]

         (when-let [child-grid @(subscribe
                                 [:by-id [:grid/parent cell-id]])]
           [:div.child-grid {:ref #(swap! refs assoc :child-grid %)}
            [grid cell-id]])

         [border {:refs refs
                  :side :top
                  :grid-id (:db/id @grid-entity)
                  :row row
                  :col col}]
         [border {:refs refs
                  :side :left
                  :grid-id (:db/id @grid-entity)
                  :row row
                  :col col}]
         [border {:refs refs
                  :side :bottom
                  :grid-id (:db/id @grid-entity)
                  :row row
                  :col col}]
         [border {:refs refs
                  :side :right
                  :grid-id (:db/id @grid-entity)
                  :row row
                  :col col}]]))))
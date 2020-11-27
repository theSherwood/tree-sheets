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

(defn handle-textarea-keydown [e refs]
  (.stopPropagation e)
  (let [textarea (:textarea @refs)
        cursor-position (.-anchorOffset (.getSelection js/window))
        text-length (.-length (.-textContent textarea))
        key (.-key e)]
    (js/console.log e (.-key e) cursor-position text-length (.getSelection js/window))
    (cond
      (and (= key "ArrowUp") (zero? cursor-position))
      (focus-target-element (:top @refs))

      (and (= key "ArrowDown") (= cursor-position text-length))
      (focus-target-element (:bottom @refs)))))

(defn handle-cell-keydown [e refs cell-entity row col]
  (js/console.log "e" e cell-entity)
  (let [key (.-key e)
        textarea (:textarea @refs)]
    (cond
      (and (= key "Enter") (.-shiftKey e))
      (if-let [child-grid (:child-grid @refs)]
        (when-let [first-child-cell (.querySelector child-grid ".cell-inner")]
          (focus-target-element first-child-cell))
        (if-let [cell-id (:db/id cell-entity)]
          (dispatch [:create-graph cell-id])
          (dispatch [:create-cell-with-child row col])))

      (= key "Enter")
      (do
        (.preventDefault e)
        (.stopPropagation e)
        (focus-target-element textarea)
        (js/setTimeout
         #(.setSelectionRange textarea 0 999999)
         50))

      (= key "ArrowUp")
      (focus-target-element (:top @refs))

      (= key "ArrowDown")
      (focus-target-element (:bottom @refs))

      (= key "ArrowLeft")
      (focus-target-element (:left @refs))

      (= key "ArrowRight")
      (focus-target-element (:right @refs)))))

(defn cell [row col]
  (let [column-entity @(subscribe [:by-id col])
        width (:col/width column-entity)
        cell-entity @(subscribe [:cell-by-row-col row col])
        refs (r/atom {})]
    (js/console.log "render" row col)
    [:div.cell {:class (str row "-" col)
                :ref #(swap! refs assoc :cell %)}
     [:div.cell-inner {:tab-index -1
                       :ref #(swap! refs assoc :inner %)
                       :on-key-down #(handle-cell-keydown
                                      % refs cell-entity row col)}
      [:div.textarea {:content-editable true
                      :ref #(swap! refs assoc :textarea %)
                      :style {:font-size (get cell-entity :font-size "14px")
                              :max-width (str (* 8 width) "px")}
                      :on-change #(set-cell-text-debounced
                                   (:db/id cell-entity)
                                   (.. % -target -value)
                                   row
                                   col)
                      :on-key-down #(handle-textarea-keydown % refs)}
       (or (:cell/text cell-entity) "")]
      
      (when-let [child-grid @(subscribe 
                              [:by-id [:grid/parent (:db/id cell-entity)]])]
        "huzzah")

      [:div.overlay {:on-click #(focus-target-element (:inner @refs))}]]

     [border refs :top]
     [border refs :left]
     [border refs :right]
     [border refs :bottom]]))
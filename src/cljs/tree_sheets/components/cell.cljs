(ns tree-sheets.components.cell
  (:require
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

(defn focus-target-element [elem]
  (if (instance? js/HTMLElement elem)
    (.focus elem)
    (.focus (.-target elem))))

(defn handle-border-keydown [e direction]
  (js/console.log "here" e direction))

(defn navigate-down [refs])

(defn handle-textarea-keydown [e refs]
  (let [textarea (:textarea @refs)
        start (.-selectionStart textarea)
        end (.-selectionEnd textarea)
        text-length (.-length (.-value textarea))
        key (.-key e)]
    (js/console.log e (.-key e) start end text-length)
    (cond
      (and (= key "ArrowUp") (zero? start))
      (focus-target-element (:top @refs))

      (and (= key "ArrowDown") (= end text-length))
      (focus-target-element (:bottom @refs)))))

(defn cell [row col]
  (let [column-entity @(subscribe [:by-id col])
        width (:col/width column-entity)
        cell-entity @(subscribe [:cell-by-row-col row col])
        refs (r/atom {})]
    (js/console.log "cell-entity" cell-entity)
    [:div.cell {:ref #(swap! refs assoc :cell %)}
     [:textarea {:cols width
                 :ref #(swap! refs assoc :textarea %)
                 :style {:font-size "10px"}
                 :default-value (or (:cell/text cell-entity) "")
                 :on-change #(set-cell-text-debounced
                              (:db/id cell-entity)
                              (.. % -target -value)
                              row
                              col)
                 :on-key-down #(handle-textarea-keydown % refs)}]
     [:div.top.border {:ref #(swap! refs assoc :top %)
                       :on-click focus-target-element
                       :on-key-down #(handle-border-keydown % :top)
                       :tab-index -1}]
     [:div.left.border {:ref #(swap! refs assoc :left %)
                        :on-click focus-target-element
                        :on-key-down #(handle-border-keydown % :left)
                        :tab-index -1}]
     [:div.right.border {:ref #(swap! refs assoc :right %)
                         :on-click focus-target-element
                         :on-key-down #(handle-border-keydown % :right)
                         :tab-index -1}]
     [:div.bottom.border {:ref #(swap! refs assoc :bottom %)
                          :on-click focus-target-element
                          :on-key-down #(handle-border-keydown % :bottom)
                          :tab-index -1}]]))
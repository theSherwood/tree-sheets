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

(defn handle-keydown [e refs]
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
    [:div.cell {:ref #(swap! refs assoc :cell %)}
     [:div.cell-inner
      [:textarea {:cols width
                  :ref #(swap! refs assoc :textarea %)
                  :style {:font-size "10px"}
                  :default-value (or (:cell/text cell-entity) "")
                  :on-change #(set-cell-text-debounced
                               (:db/id cell-entity)
                               (.. % -target -value)
                               row
                               col)
                  :on-key-down #(handle-keydown % refs)}]

      [:div.focus-borders]]

     [border refs :top]
     [border refs :left]
     [border refs :right]
     [border refs :bottom]]))
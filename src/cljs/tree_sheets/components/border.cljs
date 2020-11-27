(ns tree-sheets.components.border
  (:require
   [re-posh.core :as rp :refer [subscribe dispatch]]
   [tree-sheets.utils :refer [focus-target-element]]))

(defn handle-keydown [e refs side]
  (js/console.log "here" e side)
  (let [key (.-key e)]
    (condp = side
          :top (cond
                 (= key "ArrowDown")
                 (focus-target-element (:inner @refs)))
          :left (cond
                  (= key "ArrowRight")
                  (focus-target-element (:inner @refs)))
          :right (cond
                   (= key "ArrowLeft")
                   (focus-target-element (:inner @refs)))
          :bottom (cond
                    (= key "ArrowUp")
                    (focus-target-element (:inner @refs))))))

(defn border [refs side]
  [:div.border {:class (name side)
                :ref #(swap! refs assoc side %)
                :on-click focus-target-element
                :on-key-down #(handle-keydown % refs side)
                :tab-index -1}])
(ns tree-sheets.components.border
  (:require
   [re-posh.core :as rp :refer [subscribe dispatch]]
   [tree-sheets.utils :refer [focus-target-element]]))

(defn handle-keydown [e side]
  (js/console.log "here" e side))

(defn border [refs side]
  [:div.border {:class (name side)
                :ref #(swap! refs assoc side %)
                :on-click focus-target-element
                :on-key-down #(handle-keydown % side)
                :tab-index -1}])
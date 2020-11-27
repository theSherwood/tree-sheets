(ns tree-sheets.components.grid
  (:require
   [re-posh.core :as rp :refer [subscribe dispatch]]
   [tree-sheets.subs]
   [tree-sheets.components.cell :refer [cell]]))

(defn grid [parent-id]
  (if (nil? parent-id)
    nil?
    (let [entity-data @(subscribe [:by-id [:grid/parent parent-id]])]
      [:div.grid 
       [:table
        [:tbody
         (doall
          (for [row (:grid/rows entity-data)]
            [:tr
             (doall
              (for [col (:grid/cols entity-data)]
              ;; Pass in grid component to avoid circular deps
                [:td [cell row col 
                      [:grid/parent parent-id] grid]]))]))]]])))
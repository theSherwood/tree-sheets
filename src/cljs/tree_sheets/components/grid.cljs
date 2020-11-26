(ns tree-sheets.components.grid
  (:require
   [re-posh.core :as rp :refer [subscribe dispatch]]
   [tree-sheets.subs]
   [tree-sheets.components.cell :refer [cell]]))

(defn grid [parent-id]
  (let [entity-data @(subscribe [:by-id [:grid/parent parent-id]])]
    (js/console.log entity-data )
    [:div.grid 
     [:table
      [:tbody
       (doall
        (for [row (:grid/rows entity-data)]
          [:tr
           (doall
            (for [col (:grid/cols entity-data)]
              [:td [cell row col]]))]))]]]))
(ns tree-sheets.components.grid
  (:require
   [re-posh.core :as rp :refer [subscribe dispatch]]
   [tree-sheets.subs]))

(defn grid [parent-id]
  ; (let [entity-data @(subscribe [:by-id [:grid/parent parent-id]])
  ;       ]
  ;   (js/console.log entity-data )
  (let [entity-data @(subscribe [:by-id [:grid/parent parent-id]])
        cell-ids @(subscribe [:cell-ids (:db/id entity-data)])]
    (js/console.log entity-data cell-ids)
    [:div.grid "hello there"]))
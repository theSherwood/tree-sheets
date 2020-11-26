(ns tree-sheets.components.cell
  (:require
   [re-posh.core :as rp :refer [subscribe dispatch]]))

(defn cell [row col]
  (let [column-entity @(subscribe [:by-id col])
        width (:col/width column-entity)
        cell-entity @(subscribe [:cell-by-row-col row col])]
    (js/console.log "cell-entity" cell-entity)
    [:div.cell
     [:textarea {:cols width
                 :style {:font-size "10px"}
                 :value (or (:cell/text cell-entity) "")}]
     [:div.top.border]
     [:div.left.border]
     [:div.right.border]
     [:div.bottom.border]]))
(ns tree-sheets.components.grid
  (:require
   [re-posh.core :as rp :refer [subscribe dispatch]]
   [tree-sheets.subs]
   [tree-sheets.components.cell :refer [cell]]))

(defn create-id-matrix [cell-coordinates]
  (let [max-x (apply max (map second cell-coordinates))
        max-y (apply max (map #(nth % 2) cell-coordinates))
        grouped-by-y (group-by #(nth % 2) cell-coordinates)]
    (for [row (range (inc max-y))]
      (doall
       (for [column (range (inc max-x))] 
         (first (flatten (filter
                          #(= column (second %))
                          (get grouped-by-y row)))))))))

(defn grid [parent-id]
  (let [entity-data @(subscribe [:by-id [:grid/parent parent-id]])
        cell-coordinates @(subscribe [:cell-coordinates (:db/id entity-data)])
        cell-id-matrix (create-id-matrix cell-coordinates)]
    (js/console.log entity-data cell-coordinates (create-id-matrix cell-coordinates))
    [:div.grid 
     (doall
      (for [row cell-id-matrix]
        [:div.row 
         (for [cell-id row]
           [cell cell-id])]))]))
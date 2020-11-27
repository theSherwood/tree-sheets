(ns tree-sheets.events
  (:require
   [re-posh.core :as rp :refer [reg-event-ds]]
   [tree-sheets.db :as db]))

(reg-event-ds
 ::initialize-db
 (fn [_ _]
   db/initial-db))

(reg-event-ds
 :set-cell-text
 (fn [_ [_ id text]]
   [[:db/add id :cell/text text]]))

(reg-event-ds
 :create-cell
 (fn [_ [_ text row col]]
   [[:db/add "temp" :app/type :type/cell]
    [:db/add "temp" :cell/col col]
    [:db/add "temp" :cell/row row]
    [:db/add "temp" :cell/text text]]))

(reg-event-ds
 :create-graph
 (fn [_ [_ cell-id]]
   (let [grid-id (rand-int 100000000)
         col-id (rand-int 100000000)
         row-id (rand-int 100000000)]
     [[:db/add grid-id :app/type :type/graph]
      [:db/add grid-id :grid/parent cell-id]
      [:db/add grid-id :grid/rows [row-id]]
      [:db/add grid-id :grid/cols [col-id]]
      [:db/add col-id :app/type :type/col]
      [:db/add col-id :col/width 55]
      [:db/add row-id :app/type :type/row]])))

(reg-event-ds
 :create-cell-with-child
 (fn [_ [_ row col]]
   (let [temp-cell (rand-int 1000000000)
         grid-id (rand-int 1000000000)
         col-id (rand-int 1000000000)
         row-id (rand-int 1000000000)]
     [[:db/add temp-cell :app/type :type/cell]
      [:db/add temp-cell :cell/col col]
      [:db/add temp-cell :cell/row row]
      [:db/add temp-cell :cell/text ""]
      [:db/add grid-id :app/type :type/graph]
      [:db/add grid-id :grid/parent temp-cell]
      [:db/add grid-id :grid/rows [row-id]]
      [:db/add grid-id :grid/cols [col-id]]
      [:db/add col-id :app/type :type/col]
      [:db/add col-id :col/width 55]
      [:db/add row-id :app/type :type/row]])))

(reg-event-ds
 :insert-cell
 (fn [_ [_ grid-id row col rows cols text new-row new-col]]
   (let [cell-datoms [[:db/add "temp" :app/type :type/cell]
                      [:db/add "temp" :cell/col col]
                      [:db/add "temp" :cell/row row]
                      [:db/add "temp" :cell/text text]]
         grid-datoms [[:db/add grid-id :grid/rows rows]
                      [:db/add grid-id :grid/cols cols]]
         row-datoms (when new-row
                      [[:db/add row :app/type :type/row]])
         col-datoms (when new-col
                      [[:db/add col :app/type :type/col]
                       [:db/add col :col/width 55]])]
     (vec (concat cell-datoms grid-datoms row-datoms col-datoms)))))
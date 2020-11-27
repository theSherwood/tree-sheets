(ns tree-sheets.events
  (:require
   [re-posh.core :as rp :refer [reg-event-ds]]
   [datascript.core :refer [tempid resolve-tempid squuid squuid-time-millis]]
   [tree-sheets.db :as db]))

(js/console.log (squuid))
(js/console.log (squuid))

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
    [:db/add "temp" :cell/child-grid -1] ;; No child-grid gets id of -1
    [:db/add "temp" :cell/col col]
    [:db/add "temp" :cell/row row]
    [:db/add "temp" :cell/text text]]))

(reg-event-ds
 :create-graph
 (fn [_ [_ cell-id]]
   (js/console.log cell-id)
   (let [temp-grid (rand-int 100000000)
         temp-col (rand-int 100000000)
         temp-row (rand-int 100000000)]
     [[:db/add temp-grid :app/type :type/graph]
      [:db/add temp-grid :grid/parent cell-id]
      [:db/add temp-grid :grid/row [temp-row]]
      [:db/add temp-grid :grid/col [temp-col]]
      [:db/add temp-col :app/type :type/col]
      [:db/add temp-col :col/width 55]
      [:db/add temp-row :app/type :type/row]])))

(reg-event-ds
 :create-cell-with-child
 (fn [_ [_ row col]]
   (let [temp-cell (rand-int 1000000000)
         temp-grid (rand-int 1000000000)
         temp-col (rand-int 1000000000)
         temp-row (rand-int 1000000000)]
     [[:db/add temp-cell :app/type :type/cell]
      [:db/add temp-cell :cell/col col]
      [:db/add temp-cell :cell/row row]
      [:db/add temp-cell :cell/text ""]
      [:db/add temp-grid :app/type :type/graph]
      [:db/add temp-grid :grid/parent temp-cell]
      [:db/add temp-grid :grid/row [temp-row]]
      [:db/add temp-grid :grid/col [temp-col]]
      [:db/add temp-col :app/type :type/col]
      [:db/add temp-col :col/width 55]
      [:db/add temp-row :app/type :type/row]])))

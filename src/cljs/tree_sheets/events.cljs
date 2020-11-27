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
    [:db/add "temp" :cell/child-grid -1] ;; No child-grid gets id of -1
    [:db/add "temp" :cell/col col]
    [:db/add "temp" :cell/row row]
    [:db/add "temp" :cell/text text]]))
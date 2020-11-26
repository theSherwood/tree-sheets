(ns tree-sheets.events
  (:require
   [re-posh.core :as rp :refer [reg-event-ds]]
   [tree-sheets.db :as db]))

(reg-event-ds
 ::initialize-db
 (fn [_ _]
   db/initial-db))

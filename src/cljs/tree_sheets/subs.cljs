(ns tree-sheets.subs
  (:require
   [re-posh.core :as rp :refer [reg-sub subscribe]]))

(reg-sub
 :by-id
 (fn [_ [_ id]]
   {:type :pull
    :pattern '[*]
    :id id}))            

(reg-sub
 :cell-id
 (fn [_ [_ row col]]
   ;; Not sure why, but I'm having to build this query manually.
   ;; Not sure what I'm missing here.
   (let [query '[:find ?e . :where]
         query (conj (conj query
                           (conj '[?e :cell/row] row))
                     (conj '[?e :cell/col] col))]
     {:type :query
      :query query})))

(reg-sub
 :cell-by-row-col
 
 (fn [[_ row col]]
   (js/console.log "cell by row col" row col)
   (subscribe [:cell-id row col]))
 
 (fn [cell-id]
   {:type :pull
    :pattern '[*]
    :id cell-id}))
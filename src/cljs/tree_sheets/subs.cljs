(ns tree-sheets.subs
  (:require
   [re-posh.core :as rp :refer [reg-sub subscribe]]
   [re-frame.core :as rf]
   [clojure.set :refer [intersection]]))

(reg-sub
 :by-id
 (fn [_ [_ id]]
   {:type :pull
    :pattern '[*]
    :id id}))            

(reg-sub
 :cells-by-row
 (fn [_ [_ row]]
   {:type :pull
    :pattern '[:cell/_row]
    :id row}))

(reg-sub
 :cells-by-col
 (fn [_ [_ col]]
   {:type :pull
    :pattern '[:cell/_col]
    :id col}))
  
(rf/reg-sub
 :cell-id

 (fn [[_ row col]]
   [(subscribe [:cells-by-row row])
    (subscribe [:cells-by-col col])])

 (fn [[row-cells col-cells] [_]]
   (first (intersection
           (set (map :db/id (:cell/_row row-cells)))
           (set (map :db/id (:cell/_col col-cells)))))))

(reg-sub
 :cell-by-row-col
 
 (fn [[_ row col]]
   (subscribe [:cell-id row col]))
 
 (fn [cell-id]
   {:type :pull
    :pattern '[*]
    :id cell-id}))
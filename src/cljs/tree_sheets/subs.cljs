(ns tree-sheets.subs
  (:require
   [re-posh.core :as rp :refer [reg-sub]]))

(reg-sub
 :by-id
 (fn [_ [_ id]]
   {:type :pull
    :pattern '[*]
    :id id}))

(reg-sub
 :cell
 (fn [_ [_ id]]
   (js/console.log "made it this far" id)
   {:type :query
    :query '[:find ?e ?x ?y
             :where
             [?e :cell/parent-grid ?id]
             [?e :cell/x ?x]
             [?e :cell/y ?y]]}))
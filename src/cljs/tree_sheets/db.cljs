(ns tree-sheets.db
  (:require [datascript.core :refer [create-conn]]
            [re-posh.core :refer [connect!]]))

(def initial-db  
  [{:db/id 1
    :app/type :type/grid
    ;; The root grid has parent -1
    :grid/parent -1}
   {:db/id 2
    :app/type :type/cell
    :cell/parent-grid 1
    :cell/child-grid -1 ;; No child-grid gets id of -1
    :cell/x 0
    :cell/y 0
    :cell/text "Hello World!"}
   {:db/id 3
    :app/type :type/cell
    :cell/parent-grid 1
    :cell/child-grid -1 ;; No child-grid gets id of -1
    :cell/x 1
    :cell/y 3
    :cell/text "Hello World?"}
   {:db/id 4
    :app/type :type/cell
    :cell/parent-grid 1
    :cell/child-grid -1 ;; No child-grid gets id of -1
    :cell/x 2
    :cell/y 2
    :cell/text "Hello World?"}])

(def conn (create-conn {:grid/parent {:db/unique :db.unique/identity}}))
(connect! conn)

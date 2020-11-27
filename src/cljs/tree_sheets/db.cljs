(ns tree-sheets.db
  (:require [datascript.core :refer [create-conn datoms]]
            [re-posh.core :refer [connect!]]))

(def initial-db  
  [{:db/id 1
    :app/type :type/grid
    ;; The root grid has parent -1
    :grid/parent -1
    :grid/rows [5 6 7 8]
    :grid/cols [2 3 4]}

   ;; Columns
   {:db/id 2
    :app/type :type/col
    :col/width 55}
   {:db/id 3
    :app/type :type/col
    :col/width 55}
   {:db/id 4
    :app/type :type/col
    :col/width 55}

   ;; Rows
   {:db/id 5
    :app/type :type/row}
   {:db/id 6
    :app/type :type/row}
   {:db/id 7
    :app/type :type/row}
   {:db/id 8
    :app/type :type/row}

   ;; Cells
   {:db/id 9
    :app/type :type/cell
    :cell/col 2
    :cell/row 5
    :cell/text "Hello World!"}
   {:db/id 10
    :app/type :type/cell
    :cell/col 3
    :cell/row 8
    :cell/text "Hello World?"}
   {:db/id 11
    :app/type :type/cell
    :cell/col 4
    :cell/row 6
    :cell/text "Hello World?"}

   {:db/id 12
    :app/type :type/grid
    ;; The root grid has parent -1
    :grid/parent 10
    :grid/rows [13]
    :grid/cols [14]}
   {:db/id 13
    :app/type :type/col
    :col/width 55}
   {:db/id 14
    :app/type :type/row}])

(def conn (create-conn {:grid/parent {:db/unique :db.unique/identity}}))
(connect! conn)

(add-watch conn :logger #(apply js/console.log (datoms @conn :eavt)))
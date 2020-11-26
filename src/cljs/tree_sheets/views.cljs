(ns tree-sheets.views
  (:require
   [re-posh.core :as rp :refer [subscribe dispatch]]
   [tree-sheets.subs :as subs]
   [tree-sheets.components.grid :refer [grid]]
   ))

(defn main-panel []
  [:main
  ;; The root grid has id -1
   [grid -1]])

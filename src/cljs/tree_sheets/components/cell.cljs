(ns tree-sheets.components.cell
  (:require
   [re-posh.core :as rp :refer [subscribe dispatch]]))

(defn cell [cell-id]
  [:div.cell cell-id])
(ns tree-sheets.utils)

(defn focus-target-element [elem]
  (when elem
    (if (instance? js/HTMLElement elem)
      (.focus elem)
      (.focus (.-target elem)))))

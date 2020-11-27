(ns tree-sheets.components.border
  (:require
   [re-posh.core :as rp :refer [subscribe dispatch]]
   [tree-sheets.utils :refer [focus-target-element]]))

(defn delayed-focus-textarea 
  ([selector] (delayed-focus-textarea selector 50))
  ([selector delay]
   (js/setTimeout
    #(let [textarea (.querySelector js/document selector)]
      (focus-target-element textarea)
      (.setSelectionRange textarea 999999 99999))
    delay)))

(defn insert [v idx itm]
  (if (= -1 idx)
    (conj v itm)
    (vec (concat (subvec v 0 idx) [itm] (subvec v idx)))))

(defn insert-cell [text side grid-entity row col]
  (let [grid-id (:db/id grid-entity)
        rows (:grid/rows grid-entity)
        cols (:grid/cols grid-entity)]
    (when grid-id
      (condp = side
        :top
        (let [row-id (rand-int 1000000000)
              new-rows (insert rows (.indexOf rows row) row-id)]
          (dispatch [:insert-cell
                     grid-id row-id col new-rows cols text true false])
          (delayed-focus-textarea 
           (str ".cell.loc-" row-id "-" col " textarea") 100))

        :bottom
        (let [row-id (rand-int 1000000000)
              new-rows (insert rows (.indexOf rows (inc row)) row-id)]
          (dispatch [:insert-cell
                     grid-id row-id col new-rows cols text true false])
          (delayed-focus-textarea 
           (str ".cell.loc-" row-id "-" col " textarea") 100))

        :left
        (let [col-id (rand-int 1000000000)
              new-cols (insert cols (.indexOf cols col) col-id)]
          (dispatch [:insert-cell
                     grid-id row col-id rows new-cols text false true])
          (delayed-focus-textarea 
           (str ".cell.loc-" row "-" col-id " textarea") 100))

        :right
        (let [col-id (rand-int 1000000000)
              new-cols (insert cols (.indexOf cols (inc col)) col-id)]
          (dispatch [:insert-cell
                     grid-id row col-id rows new-cols text false true])
          (delayed-focus-textarea 
           (str ".cell.loc-" row "-" col-id " textarea") 100))))))

(defn navigate-row [f selector rows row col]
  (when-let [r (nth rows (f (.indexOf rows row)))]
    (when-let [node
               (.querySelector
                js/document
                (str ".cell.loc-" r "-" col " " selector))]
      (.focus node))))

(defn navigate-col [f selector cols row col]
  (when-let [c (nth cols (f (.indexOf cols col)))]
    (when-let [node
               (.querySelector
                js/document
                (str ".cell.loc-" row "-" c " " selector))]
      (.focus node))))

(defn handle-keydown [e refs side grid-entity row col]
  (let [key (.-key e)
        rows (:grid/rows grid-entity)
        cols (:grid/cols grid-entity)]
    (condp = side
          :top (condp = key
                 "ArrowDown"
                 (focus-target-element (:inner @refs))
                 
                 "ArrowLeft"
                 (navigate-col dec ">.border.top" cols row col)
                 
                 "ArrowRight"
                 (navigate-col inc ">.border.top" cols row col)
                 
                 "ArrowUp"
                 (navigate-row dec ".cell-inner" rows row col)
                 )
          :left (condp = key
                  "ArrowDown"
                  (navigate-row inc ">.border.left" rows row col)

                  "ArrowLeft"
                  (navigate-col dec ".cell-inner" cols row col)

                  "ArrowRight"
                  (focus-target-element (:inner @refs))

                  "ArrowUp"
                  (navigate-row dec ">.border.left" rows row col))
          :right (condp = key
                   "ArrowDown"
                   (navigate-row inc ">.border.right" rows row col)

                   "ArrowLeft"
                   (focus-target-element (:inner @refs))

                   "ArrowRight"
                   (navigate-col inc ".cell-inner" cols row col)

                   "ArrowUp"
                   (navigate-row dec ">.border.right" rows row col))
          :bottom (condp = key
                    "ArrowDown"
                    (navigate-row inc ".cell-inner" rows row col)

                    "ArrowLeft"
                    (navigate-col dec ">.border.bottom" cols row col)

                    "ArrowRight"
                    (navigate-col inc ">.border.bottom" cols row col)

                    "ArrowUp"
                    (focus-target-element (:inner @refs))))))

(defn border [refs side grid-entity row col]
  (let [empty-atom (atom nil)]
    [:div.border {:content-editable true
                  :class (name side)
                  :ref #(swap! refs assoc side %)
                  :on-click focus-target-element
                  :on-key-down #(handle-keydown % refs side grid-entity row col)
                  :on-input #(insert-cell
                              (last (.. % -target -textContent))
                              side grid-entity  row col)
                  :tab-index -1}]))
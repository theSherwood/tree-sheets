(ns tree-sheets.components.border
  (:require
   [re-posh.core :as rp :refer [subscribe dispatch]]
   [tree-sheets.utils :refer [focus-target-element]]
   [datascript.core :as ds]
   [tree-sheets.db :refer [conn]]))

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

(defn insert-cell [{:keys [text side grid-id row col]}]
  (let [grid-entity (ds/pull @conn '[*] grid-id)
        grid-id (:db/id grid-entity)
        rows (:grid/rows grid-entity)
        cols (:grid/cols grid-entity)]
    (when grid-id
      (case side
        :top
        (let [row-id (rand-int 1000000000)
              new-rows (insert rows (.indexOf rows row) row-id)]
          (dispatch [:insert-cell
                     grid-id row-id col new-rows cols text true false])
          (delayed-focus-textarea 
           (str ".cell.loc-" row-id "-" col " textarea") 100))

        :bottom
        (let [row-id (rand-int 1000000000)
              new-rows (insert rows (inc (.indexOf rows row)) row-id)]
          (js/console.log row (inc (.indexOf rows row)) rows new-rows)
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
              new-cols (insert cols (inc (.indexOf cols col)) col-id)]
          (dispatch [:insert-cell
                     grid-id row col-id rows new-cols text false true])
          (delayed-focus-textarea 
           (str ".cell.loc-" row "-" col-id " textarea") 100))
        
        nil))))

(defn navigate-row [f selector rows row col]
  (try
    (when-let [r (nth rows (f (.indexOf rows row)))]
      (when-let [node
                 (.querySelector
                  js/document
                  (str ".cell.loc-" r "-" col " " selector))]
        (.focus node)))
    (catch js/Object e nil)))

(defn navigate-col [f selector cols row col]
  (try
    (when-let [c (nth cols (f (.indexOf cols col)))]
      (when-let [node
                 (.querySelector
                  js/document
                  (str ".cell.loc-" row "-" c " " selector))]
        (.focus node)))
    (catch js/Object e nil)))

(defn key-down [{:keys [e refs side grid-id row col]}]
  (let [key (.-key e)
        grid-entity (ds/pull @conn '[*] grid-id)
        rows (:grid/rows grid-entity)
        cols (:grid/cols grid-entity)]
    (case side
      :top (case key
             "ArrowDown"
             (focus-target-element (:inner @refs))

             "ArrowLeft"
             (navigate-col dec ">.border.top" cols row col)

             "ArrowRight"
             (navigate-col inc ">.border.top" cols row col)

             "ArrowUp"
             (navigate-row dec ".cell-inner" rows row col)

             nil)
      :left (case key
              "ArrowDown"
              (navigate-row inc ">.border.left" rows row col)

              "ArrowLeft"
              (navigate-col dec ".cell-inner" cols row col)

              "ArrowRight"
              (focus-target-element (:inner @refs))

              "ArrowUp"
              (navigate-row dec ">.border.left" rows row col)

              nil)
      :right (case key
               "ArrowDown"
               (navigate-row inc ">.border.right" rows row col)

               "ArrowLeft"
               (focus-target-element (:inner @refs))

               "ArrowRight"
               (navigate-col inc ".cell-inner" cols row col)

               "ArrowUp"
               (navigate-row dec ">.border.right" rows row col)

               nil)
      :bottom (case key
                "ArrowDown"
                (navigate-row inc ".cell-inner" rows row col)

                "ArrowLeft"
                (navigate-col dec ">.border.bottom" cols row col)

                "ArrowRight"
                (navigate-col inc ">.border.bottom" cols row col)

                "ArrowUp"
                (focus-target-element (:inner @refs))

                nil))))

(defn border [{:keys [refs side grid-id row col]}]
  (let [handle-input #(do
                        ;; input events cannot be cancelled through preventDefault
                        (set! (.. % -target -innerHTML) "")
                        (insert-cell
                         {:text (.. % -nativeEvent -data)
                          :side side
                          :grid-id grid-id
                          :row row
                          :col col}))
        handle-key-down #(key-down {:e %
                                    :refs refs
                                    :side side
                                    :grid-id grid-id
                                    :row row
                                    :col col})]
    
    (fn []
      [:div.border {:content-editable true
                    :class (name side)
                    :ref #(swap! refs assoc side %)
                    :on-click focus-target-element
                    :on-key-down handle-key-down
                    :on-input handle-input
                    :tab-index -1}])))

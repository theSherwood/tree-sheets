goog.provide('tree_sheets.db');
tree_sheets.db.initial_db = new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",-1388397098),(1),new cljs.core.Keyword("app","type","app/type",1175537581),new cljs.core.Keyword("type","grid","type/grid",398157274),new cljs.core.Keyword("grid","parent","grid/parent",-875760513),(-1),new cljs.core.Keyword("grid","rows","grid/rows",870077650),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(6),(7),(8)], null),new cljs.core.Keyword("grid","cols","grid/cols",-1909661909),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3),(4)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),(2),new cljs.core.Keyword("app","type","app/type",1175537581),new cljs.core.Keyword("type","col","type/col",-1967386954),new cljs.core.Keyword("col","width","col/width",-383816885),(55)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),(3),new cljs.core.Keyword("app","type","app/type",1175537581),new cljs.core.Keyword("type","col","type/col",-1967386954),new cljs.core.Keyword("col","width","col/width",-383816885),(55)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),(4),new cljs.core.Keyword("app","type","app/type",1175537581),new cljs.core.Keyword("type","col","type/col",-1967386954),new cljs.core.Keyword("col","width","col/width",-383816885),(55)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),(5),new cljs.core.Keyword("app","type","app/type",1175537581),new cljs.core.Keyword("type","row","type/row",-573772047)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),(6),new cljs.core.Keyword("app","type","app/type",1175537581),new cljs.core.Keyword("type","row","type/row",-573772047)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),(7),new cljs.core.Keyword("app","type","app/type",1175537581),new cljs.core.Keyword("type","row","type/row",-573772047)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),(8),new cljs.core.Keyword("app","type","app/type",1175537581),new cljs.core.Keyword("type","row","type/row",-573772047)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",-1388397098),(9),new cljs.core.Keyword("app","type","app/type",1175537581),new cljs.core.Keyword("type","cell","type/cell",769058082),new cljs.core.Keyword("cell","col","cell/col",-1966863298),(2),new cljs.core.Keyword("cell","row","cell/row",-573250279),(5),new cljs.core.Keyword("cell","text","cell/text",-1785691783),"Navigate with the arrow keys. Use the mouse to select cells or the borders between cells. Start typing while selecting the border between cells to insert a new cell"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",-1388397098),(10),new cljs.core.Keyword("app","type","app/type",1175537581),new cljs.core.Keyword("type","cell","type/cell",769058082),new cljs.core.Keyword("cell","col","cell/col",-1966863298),(3),new cljs.core.Keyword("cell","row","cell/row",-573250279),(8),new cljs.core.Keyword("cell","text","cell/text",-1785691783),"Shift-Enter to create a nested grid, or to select an existing one. Esc to select the encompassing cell."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",-1388397098),(11),new cljs.core.Keyword("app","type","app/type",1175537581),new cljs.core.Keyword("type","cell","type/cell",769058082),new cljs.core.Keyword("cell","col","cell/col",-1966863298),(4),new cljs.core.Keyword("cell","row","cell/row",-573250279),(6),new cljs.core.Keyword("cell","text","cell/text",-1785691783),"Lots of missing features, of course. But it's a fun start."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",-1388397098),(12),new cljs.core.Keyword("app","type","app/type",1175537581),new cljs.core.Keyword("type","grid","type/grid",398157274),new cljs.core.Keyword("grid","parent","grid/parent",-875760513),(10),new cljs.core.Keyword("grid","rows","grid/rows",870077650),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(13)], null),new cljs.core.Keyword("grid","cols","grid/cols",-1909661909),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(14)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),(13),new cljs.core.Keyword("app","type","app/type",1175537581),new cljs.core.Keyword("type","col","type/col",-1967386954),new cljs.core.Keyword("col","width","col/width",-383816885),(55)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),(14),new cljs.core.Keyword("app","type","app/type",1175537581),new cljs.core.Keyword("type","row","type/row",-573772047)], null)], null);
tree_sheets.db.conn = datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("grid","parent","grid/parent",-875760513),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null),new cljs.core.Keyword("cell","col","cell/col",-1966863298),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.Keyword("cell","row","cell/row",-573250279),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null)], null));
(re_posh.core.connect_BANG_.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.connect_BANG_.cljs$core$IFn$_invoke$arity$1(tree_sheets.db.conn) : re_posh.core.connect_BANG_.call(null,tree_sheets.db.conn));
cljs.core.add_watch(tree_sheets.db.conn,new cljs.core.Keyword(null,"logger","logger",-220675947),(function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(console.log,datascript.core.datoms.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(tree_sheets.db.conn),new cljs.core.Keyword(null,"eavt","eavt",-666437073)));
}));

//# sourceMappingURL=tree_sheets.db.js.map
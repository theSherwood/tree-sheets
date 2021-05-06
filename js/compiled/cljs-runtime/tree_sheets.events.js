goog.provide('tree_sheets.events');
var G__60905_60956 = new cljs.core.Keyword("tree-sheets.events","initialize-db","tree-sheets.events/initialize-db",845040316);
var G__60906_60957 = (function (_,___$1){
return tree_sheets.db.initial_db;
});
(re_posh.core.reg_event_ds.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_event_ds.cljs$core$IFn$_invoke$arity$2(G__60905_60956,G__60906_60957) : re_posh.core.reg_event_ds.call(null,G__60905_60956,G__60906_60957));
var G__60909_60958 = new cljs.core.Keyword(null,"set-cell-text","set-cell-text",1822921096);
var G__60910_60959 = (function (_,p__60912){
var vec__60913 = p__60912;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60913,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60913,(1),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60913,(2),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),id,new cljs.core.Keyword("cell","text","cell/text",-1785691783),text], null)], null);
});
(re_posh.core.reg_event_ds.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_event_ds.cljs$core$IFn$_invoke$arity$2(G__60909_60958,G__60910_60959) : re_posh.core.reg_event_ds.call(null,G__60909_60958,G__60910_60959));
var G__60919_60961 = new cljs.core.Keyword(null,"create-cell","create-cell",-23238272);
var G__60920_60962 = (function (_,p__60921){
var vec__60922 = p__60921;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60922,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60922,(1),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60922,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60922,(3),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),"temp",new cljs.core.Keyword("app","type","app/type",1175537581),new cljs.core.Keyword("type","cell","type/cell",769058082)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),"temp",new cljs.core.Keyword("cell","col","cell/col",-1966863298),col], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),"temp",new cljs.core.Keyword("cell","row","cell/row",-573250279),row], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),"temp",new cljs.core.Keyword("cell","text","cell/text",-1785691783),text], null)], null);
});
(re_posh.core.reg_event_ds.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_event_ds.cljs$core$IFn$_invoke$arity$2(G__60919_60961,G__60920_60962) : re_posh.core.reg_event_ds.call(null,G__60919_60961,G__60920_60962));
var G__60925_60964 = new cljs.core.Keyword(null,"create-graph","create-graph",-931605027);
var G__60926_60965 = (function (_,p__60927){
var vec__60931 = p__60927;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60931,(0),null);
var cell_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60931,(1),null);
var grid_id = cljs.core.rand_int((100000000));
var col_id = cljs.core.rand_int((100000000));
var row_id = cljs.core.rand_int((100000000));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),grid_id,new cljs.core.Keyword("app","type","app/type",1175537581),new cljs.core.Keyword("type","graph","type/graph",1554237679)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),grid_id,new cljs.core.Keyword("grid","parent","grid/parent",-875760513),cell_id], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),grid_id,new cljs.core.Keyword("grid","rows","grid/rows",870077650),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_id], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),grid_id,new cljs.core.Keyword("grid","cols","grid/cols",-1909661909),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_id], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),col_id,new cljs.core.Keyword("app","type","app/type",1175537581),new cljs.core.Keyword("type","col","type/col",-1967386954)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),col_id,new cljs.core.Keyword("col","width","col/width",-383816885),(55)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),row_id,new cljs.core.Keyword("app","type","app/type",1175537581),new cljs.core.Keyword("type","row","type/row",-573772047)], null)], null);
});
(re_posh.core.reg_event_ds.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_event_ds.cljs$core$IFn$_invoke$arity$2(G__60925_60964,G__60926_60965) : re_posh.core.reg_event_ds.call(null,G__60925_60964,G__60926_60965));
var G__60934_60968 = new cljs.core.Keyword(null,"create-cell-with-child","create-cell-with-child",-345348790);
var G__60935_60969 = (function (_,p__60936){
var vec__60938 = p__60936;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60938,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60938,(1),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60938,(2),null);
var temp_cell = cljs.core.rand_int((1000000000));
var grid_id = cljs.core.rand_int((1000000000));
var col_id = cljs.core.rand_int((1000000000));
var row_id = cljs.core.rand_int((1000000000));
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),temp_cell,new cljs.core.Keyword("app","type","app/type",1175537581),new cljs.core.Keyword("type","cell","type/cell",769058082)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),temp_cell,new cljs.core.Keyword("cell","col","cell/col",-1966863298),col], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),temp_cell,new cljs.core.Keyword("cell","row","cell/row",-573250279),row], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),temp_cell,new cljs.core.Keyword("cell","text","cell/text",-1785691783),""], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),grid_id,new cljs.core.Keyword("app","type","app/type",1175537581),new cljs.core.Keyword("type","graph","type/graph",1554237679)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),grid_id,new cljs.core.Keyword("grid","parent","grid/parent",-875760513),temp_cell], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),grid_id,new cljs.core.Keyword("grid","rows","grid/rows",870077650),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_id], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),grid_id,new cljs.core.Keyword("grid","cols","grid/cols",-1909661909),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_id], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),col_id,new cljs.core.Keyword("app","type","app/type",1175537581),new cljs.core.Keyword("type","col","type/col",-1967386954)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),col_id,new cljs.core.Keyword("col","width","col/width",-383816885),(55)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),row_id,new cljs.core.Keyword("app","type","app/type",1175537581),new cljs.core.Keyword("type","row","type/row",-573772047)], null)], null);
});
(re_posh.core.reg_event_ds.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_event_ds.cljs$core$IFn$_invoke$arity$2(G__60934_60968,G__60935_60969) : re_posh.core.reg_event_ds.call(null,G__60934_60968,G__60935_60969));
var G__60943_60971 = new cljs.core.Keyword(null,"insert-cell","insert-cell",-1812210988);
var G__60944_60972 = (function (_,p__60949){
var vec__60950 = p__60949;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60950,(0),null);
var grid_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60950,(1),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60950,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60950,(3),null);
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60950,(4),null);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60950,(5),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60950,(6),null);
var new_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60950,(7),null);
var new_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60950,(8),null);
var cell_datoms = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),"temp",new cljs.core.Keyword("app","type","app/type",1175537581),new cljs.core.Keyword("type","cell","type/cell",769058082)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),"temp",new cljs.core.Keyword("cell","col","cell/col",-1966863298),col], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),"temp",new cljs.core.Keyword("cell","row","cell/row",-573250279),row], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),"temp",new cljs.core.Keyword("cell","text","cell/text",-1785691783),text], null)], null);
var grid_datoms = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),grid_id,new cljs.core.Keyword("grid","rows","grid/rows",870077650),rows], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),grid_id,new cljs.core.Keyword("grid","cols","grid/cols",-1909661909),cols], null)], null);
var row_datoms = (cljs.core.truth_(new_row)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),row,new cljs.core.Keyword("app","type","app/type",1175537581),new cljs.core.Keyword("type","row","type/row",-573772047)], null)], null):null);
var col_datoms = (cljs.core.truth_(new_col)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),col,new cljs.core.Keyword("app","type","app/type",1175537581),new cljs.core.Keyword("type","col","type/col",-1967386954)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),col,new cljs.core.Keyword("col","width","col/width",-383816885),(55)], null)], null):null);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cell_datoms,grid_datoms,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([row_datoms,col_datoms], 0)));
});
(re_posh.core.reg_event_ds.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_event_ds.cljs$core$IFn$_invoke$arity$2(G__60943_60971,G__60944_60972) : re_posh.core.reg_event_ds.call(null,G__60943_60971,G__60944_60972));

//# sourceMappingURL=tree_sheets.events.js.map

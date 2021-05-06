goog.provide('tree_sheets.subs');
var G__60863_60903 = new cljs.core.Keyword(null,"by-id","by-id",-2129473981);
var G__60864_60904 = (function (_,p__60865){
var vec__60866 = p__60865;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60866,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60866,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pull","pull",-860544805),new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Keyword(null,"id","id",-1388402092),id], null);
});
(re_posh.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__60863_60903,G__60864_60904) : re_posh.core.reg_sub.call(null,G__60863_60903,G__60864_60904));
var G__60869_60907 = new cljs.core.Keyword(null,"cells-by-row","cells-by-row",-321373454);
var G__60870_60908 = (function (_,p__60871){
var vec__60872 = p__60871;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60872,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60872,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pull","pull",-860544805),new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cell","_row","cell/_row",-1464549227)], null),new cljs.core.Keyword(null,"id","id",-1388402092),row], null);
});
(re_posh.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__60869_60907,G__60870_60908) : re_posh.core.reg_sub.call(null,G__60869_60907,G__60870_60908));
var G__60875_60917 = new cljs.core.Keyword(null,"cells-by-col","cells-by-col",1824217286);
var G__60876_60918 = (function (_,p__60877){
var vec__60878 = p__60877;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60878,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60878,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pull","pull",-860544805),new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cell","_col","cell/_col",-1844746864)], null),new cljs.core.Keyword(null,"id","id",-1388402092),col], null);
});
(re_posh.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__60875_60917,G__60876_60918) : re_posh.core.reg_sub.call(null,G__60875_60917,G__60876_60918));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"cell-id","cell-id",1789875608),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__60881){
var vec__60882 = p__60881;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60882,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60882,(1),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60882,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__60885 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells-by-row","cells-by-row",-321373454),row], null);
return (re_posh.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__60885) : re_posh.core.subscribe.call(null,G__60885));
})(),(function (){var G__60886 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells-by-col","cells-by-col",1824217286),col], null);
return (re_posh.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__60886) : re_posh.core.subscribe.call(null,G__60886));
})()], null);
}),(function (p__60887,p__60888){
var vec__60889 = p__60887;
var row_cells = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60889,(0),null);
var col_cells = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60889,(1),null);
var vec__60892 = p__60888;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60892,(0),null);
return cljs.core.first(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("cell","_row","cell/_row",-1464549227).cljs$core$IFn$_invoke$arity$1(row_cells))),cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("cell","_col","cell/_col",-1844746864).cljs$core$IFn$_invoke$arity$1(col_cells)))));
})], 0));
var G__60895_60928 = new cljs.core.Keyword(null,"cell-by-row-col","cell-by-row-col",-1742798058);
var G__60896_60929 = (function (p__60898){
var vec__60899 = p__60898;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60899,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60899,(1),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60899,(2),null);
var G__60902 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cell-id","cell-id",1789875608),row,col], null);
return (re_posh.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__60902) : re_posh.core.subscribe.call(null,G__60902));
});
var G__60897_60930 = (function (cell_id){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pull","pull",-860544805),new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Keyword(null,"id","id",-1388402092),cell_id], null);
});
(re_posh.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_posh.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__60895_60928,G__60896_60929,G__60897_60930) : re_posh.core.reg_sub.call(null,G__60895_60928,G__60896_60929,G__60897_60930));

//# sourceMappingURL=tree_sheets.subs.js.map

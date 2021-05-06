goog.provide('tree_sheets.components.grid');
tree_sheets.components.grid.grid = (function tree_sheets$components$grid$grid(parent_id){
if((parent_id == null)){
return cljs.core.nil_QMARK_;
} else {
var entity_data = (function (){var G__61024 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"by-id","by-id",-2129473981),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("grid","parent","grid/parent",-875760513),parent_id], null)], null);
return (re_posh.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__61024) : re_posh.core.subscribe.call(null,G__61024));
})();
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid","div.grid",736588158),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function tree_sheets$components$grid$grid_$_iter__61025(s__61026){
return (new cljs.core.LazySeq(null,(function (){
var s__61026__$1 = s__61026;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__61026__$1);
if(temp__5735__auto__){
var s__61026__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__61026__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__61026__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__61028 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__61027 = (0);
while(true){
if((i__61027 < size__4528__auto__)){
var row = cljs.core._nth(c__4527__auto__,i__61027);
cljs.core.chunk_append(b__61028,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__61027,row,c__4527__auto__,size__4528__auto__,b__61028,s__61026__$2,temp__5735__auto__,entity_data){
return (function tree_sheets$components$grid$grid_$_iter__61025_$_iter__61030(s__61031){
return (new cljs.core.LazySeq(null,((function (i__61027,row,c__4527__auto__,size__4528__auto__,b__61028,s__61026__$2,temp__5735__auto__,entity_data){
return (function (){
var s__61031__$1 = s__61031;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__61031__$1);
if(temp__5735__auto____$1){
var s__61031__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__61031__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__61031__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__61033 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__61032 = (0);
while(true){
if((i__61032 < size__4528__auto____$1)){
var col = cljs.core._nth(c__4527__auto____$1,i__61032);
cljs.core.chunk_append(b__61033,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [tree_sheets.components.cell.cell,row,col,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("grid","parent","grid/parent",-875760513),parent_id], null),tree_sheets.components.grid.grid], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),col], null)));

var G__61038 = (i__61032 + (1));
i__61032 = G__61038;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__61033),tree_sheets$components$grid$grid_$_iter__61025_$_iter__61030(cljs.core.chunk_rest(s__61031__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__61033),null);
}
} else {
var col = cljs.core.first(s__61031__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [tree_sheets.components.cell.cell,row,col,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("grid","parent","grid/parent",-875760513),parent_id], null),tree_sheets.components.grid.grid], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),col], null)),tree_sheets$components$grid$grid_$_iter__61025_$_iter__61030(cljs.core.rest(s__61031__$2)));
}
} else {
return null;
}
break;
}
});})(i__61027,row,c__4527__auto__,size__4528__auto__,b__61028,s__61026__$2,temp__5735__auto__,entity_data))
,null,null));
});})(i__61027,row,c__4527__auto__,size__4528__auto__,b__61028,s__61026__$2,temp__5735__auto__,entity_data))
;
return iter__4529__auto__(new cljs.core.Keyword("grid","cols","grid/cols",-1909661909).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(entity_data)));
})())], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),row], null)));

var G__61039 = (i__61027 + (1));
i__61027 = G__61039;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__61028),tree_sheets$components$grid$grid_$_iter__61025(cljs.core.chunk_rest(s__61026__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__61028),null);
}
} else {
var row = cljs.core.first(s__61026__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (row,s__61026__$2,temp__5735__auto__,entity_data){
return (function tree_sheets$components$grid$grid_$_iter__61025_$_iter__61034(s__61035){
return (new cljs.core.LazySeq(null,(function (){
var s__61035__$1 = s__61035;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__61035__$1);
if(temp__5735__auto____$1){
var s__61035__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__61035__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__61035__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__61037 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__61036 = (0);
while(true){
if((i__61036 < size__4528__auto__)){
var col = cljs.core._nth(c__4527__auto__,i__61036);
cljs.core.chunk_append(b__61037,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [tree_sheets.components.cell.cell,row,col,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("grid","parent","grid/parent",-875760513),parent_id], null),tree_sheets.components.grid.grid], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),col], null)));

var G__61040 = (i__61036 + (1));
i__61036 = G__61040;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__61037),tree_sheets$components$grid$grid_$_iter__61025_$_iter__61034(cljs.core.chunk_rest(s__61035__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__61037),null);
}
} else {
var col = cljs.core.first(s__61035__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [tree_sheets.components.cell.cell,row,col,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("grid","parent","grid/parent",-875760513),parent_id], null),tree_sheets.components.grid.grid], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),col], null)),tree_sheets$components$grid$grid_$_iter__61025_$_iter__61034(cljs.core.rest(s__61035__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row,s__61026__$2,temp__5735__auto__,entity_data))
;
return iter__4529__auto__(new cljs.core.Keyword("grid","cols","grid/cols",-1909661909).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(entity_data)));
})())], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),row], null)),tree_sheets$components$grid$grid_$_iter__61025(cljs.core.rest(s__61026__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword("grid","rows","grid/rows",870077650).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(entity_data)));
})())], null)], null)], null);
});
}
});

//# sourceMappingURL=tree_sheets.components.grid.js.map

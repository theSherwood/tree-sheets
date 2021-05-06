goog.provide('tree_sheets.components.border');
tree_sheets.components.border.delayed_focus_textarea = (function tree_sheets$components$border$delayed_focus_textarea(var_args){
var G__60916 = arguments.length;
switch (G__60916) {
case 1:
return tree_sheets.components.border.delayed_focus_textarea.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tree_sheets.components.border.delayed_focus_textarea.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tree_sheets.components.border.delayed_focus_textarea.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return tree_sheets.components.border.delayed_focus_textarea.cljs$core$IFn$_invoke$arity$2(selector,(50));
}));

(tree_sheets.components.border.delayed_focus_textarea.cljs$core$IFn$_invoke$arity$2 = (function (selector,delay){
return setTimeout((function (){
var textarea = document.querySelector(selector);
tree_sheets.utils.focus_target_element(textarea);

return textarea.setSelectionRange((999999),(99999));
}),delay);
}));

(tree_sheets.components.border.delayed_focus_textarea.cljs$lang$maxFixedArity = 2);

tree_sheets.components.border.insert = (function tree_sheets$components$border$insert(v,idx,itm){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),idx)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,itm);
} else {
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(0),idx),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [itm], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,idx)], 0)));
}
});
tree_sheets.components.border.insert_cell = (function tree_sheets$components$border$insert_cell(p__60937){
var map__60941 = p__60937;
var map__60941__$1 = (((((!((map__60941 == null))))?(((((map__60941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60941):map__60941);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60941__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var side = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60941__$1,new cljs.core.Keyword(null,"side","side",389652279));
var grid_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60941__$1,new cljs.core.Keyword(null,"grid-id","grid-id",1007140206));
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60941__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60941__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var grid_entity = (function (){var G__60945 = cljs.core.deref(tree_sheets.db.conn);
var G__60946 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__60947 = grid_id;
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__60945,G__60946,G__60947) : datascript.core.pull.call(null,G__60945,G__60946,G__60947));
})();
var grid_id__$1 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(grid_entity);
var rows = new cljs.core.Keyword("grid","rows","grid/rows",870077650).cljs$core$IFn$_invoke$arity$1(grid_entity);
var cols = new cljs.core.Keyword("grid","cols","grid/cols",-1909661909).cljs$core$IFn$_invoke$arity$1(grid_entity);
if(cljs.core.truth_(grid_id__$1)){
var G__60948 = side;
var G__60948__$1 = (((G__60948 instanceof cljs.core.Keyword))?G__60948.fqn:null);
switch (G__60948__$1) {
case "top":
var row_id = cljs.core.rand_int((1000000000));
var new_rows = tree_sheets.components.border.insert(rows,rows.indexOf(row),row_id);
var G__60953_60992 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"insert-cell","insert-cell",-1812210988),grid_id__$1,row_id,col,new_rows,cols,text,true,false], null);
(re_posh.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__60953_60992) : re_posh.core.dispatch.call(null,G__60953_60992));

return tree_sheets.components.border.delayed_focus_textarea.cljs$core$IFn$_invoke$arity$2([".cell.loc-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)," textarea"].join(''),(100));

break;
case "bottom":
var row_id = cljs.core.rand_int((1000000000));
var new_rows = tree_sheets.components.border.insert(rows,(rows.indexOf(row) + (1)),row_id);
console.log(row,(rows.indexOf(row) + (1)),rows,new_rows);

var G__60954_60993 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"insert-cell","insert-cell",-1812210988),grid_id__$1,row_id,col,new_rows,cols,text,true,false], null);
(re_posh.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__60954_60993) : re_posh.core.dispatch.call(null,G__60954_60993));

return tree_sheets.components.border.delayed_focus_textarea.cljs$core$IFn$_invoke$arity$2([".cell.loc-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)," textarea"].join(''),(100));

break;
case "left":
var col_id = cljs.core.rand_int((1000000000));
var new_cols = tree_sheets.components.border.insert(cols,cols.indexOf(col),col_id);
var G__60955_60994 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"insert-cell","insert-cell",-1812210988),grid_id__$1,row,col_id,rows,new_cols,text,false,true], null);
(re_posh.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__60955_60994) : re_posh.core.dispatch.call(null,G__60955_60994));

return tree_sheets.components.border.delayed_focus_textarea.cljs$core$IFn$_invoke$arity$2([".cell.loc-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(row),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_id)," textarea"].join(''),(100));

break;
case "right":
var col_id = cljs.core.rand_int((1000000000));
var new_cols = tree_sheets.components.border.insert(cols,(cols.indexOf(col) + (1)),col_id);
var G__60960_60995 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"insert-cell","insert-cell",-1812210988),grid_id__$1,row,col_id,rows,new_cols,text,false,true], null);
(re_posh.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__60960_60995) : re_posh.core.dispatch.call(null,G__60960_60995));

return tree_sheets.components.border.delayed_focus_textarea.cljs$core$IFn$_invoke$arity$2([".cell.loc-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(row),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_id)," textarea"].join(''),(100));

break;
default:
return null;

}
} else {
return null;
}
});
tree_sheets.components.border.navigate_row = (function tree_sheets$components$border$navigate_row(f,selector,rows,row,col){
try{var temp__5735__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(rows,(function (){var G__60966 = rows.indexOf(row);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__60966) : f.call(null,G__60966));
})());
if(cljs.core.truth_(temp__5735__auto__)){
var r = temp__5735__auto__;
var temp__5735__auto____$1 = document.querySelector([".cell.loc-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(selector)].join(''));
if(cljs.core.truth_(temp__5735__auto____$1)){
var node = temp__5735__auto____$1;
return node.focus();
} else {
return null;
}
} else {
return null;
}
}catch (e60963){if((e60963 instanceof Object)){
var e = e60963;
return null;
} else {
throw e60963;

}
}});
tree_sheets.components.border.navigate_col = (function tree_sheets$components$border$navigate_col(f,selector,cols,row,col){
try{var temp__5735__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cols,(function (){var G__60970 = cols.indexOf(col);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__60970) : f.call(null,G__60970));
})());
if(cljs.core.truth_(temp__5735__auto__)){
var c = temp__5735__auto__;
var temp__5735__auto____$1 = document.querySelector([".cell.loc-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(row),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(selector)].join(''));
if(cljs.core.truth_(temp__5735__auto____$1)){
var node = temp__5735__auto____$1;
return node.focus();
} else {
return null;
}
} else {
return null;
}
}catch (e60967){if((e60967 instanceof Object)){
var e = e60967;
return null;
} else {
throw e60967;

}
}});
tree_sheets.components.border.key_down = (function tree_sheets$components$border$key_down(p__60973){
var map__60974 = p__60973;
var map__60974__$1 = (((((!((map__60974 == null))))?(((((map__60974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60974):map__60974);
var e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60974__$1,new cljs.core.Keyword(null,"e","e",1381269198));
var refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60974__$1,new cljs.core.Keyword(null,"refs","refs",-1560051448));
var side = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60974__$1,new cljs.core.Keyword(null,"side","side",389652279));
var grid_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60974__$1,new cljs.core.Keyword(null,"grid-id","grid-id",1007140206));
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60974__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60974__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var key = e.key;
var grid_entity = (function (){var G__60976 = cljs.core.deref(tree_sheets.db.conn);
var G__60977 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__60978 = grid_id;
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__60976,G__60977,G__60978) : datascript.core.pull.call(null,G__60976,G__60977,G__60978));
})();
var rows = new cljs.core.Keyword("grid","rows","grid/rows",870077650).cljs$core$IFn$_invoke$arity$1(grid_entity);
var cols = new cljs.core.Keyword("grid","cols","grid/cols",-1909661909).cljs$core$IFn$_invoke$arity$1(grid_entity);
var G__60979 = side;
var G__60979__$1 = (((G__60979 instanceof cljs.core.Keyword))?G__60979.fqn:null);
switch (G__60979__$1) {
case "top":
var G__60980 = key;
switch (G__60980) {
case "ArrowDown":
return tree_sheets.utils.focus_target_element(new cljs.core.Keyword(null,"inner","inner",-1383171215).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(refs)));

break;
case "ArrowLeft":
return tree_sheets.components.border.navigate_col(cljs.core.dec,">.border.top",cols,row,col);

break;
case "ArrowRight":
return tree_sheets.components.border.navigate_col(cljs.core.inc,">.border.top",cols,row,col);

break;
case "ArrowUp":
return tree_sheets.components.border.navigate_row(cljs.core.dec,".cell-inner",rows,row,col);

break;
default:
return null;

}

break;
case "left":
var G__60981 = key;
switch (G__60981) {
case "ArrowDown":
return tree_sheets.components.border.navigate_row(cljs.core.inc,">.border.left",rows,row,col);

break;
case "ArrowLeft":
return tree_sheets.components.border.navigate_col(cljs.core.dec,".cell-inner",cols,row,col);

break;
case "ArrowRight":
return tree_sheets.utils.focus_target_element(new cljs.core.Keyword(null,"inner","inner",-1383171215).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(refs)));

break;
case "ArrowUp":
return tree_sheets.components.border.navigate_row(cljs.core.dec,">.border.left",rows,row,col);

break;
default:
return null;

}

break;
case "right":
var G__60982 = key;
switch (G__60982) {
case "ArrowDown":
return tree_sheets.components.border.navigate_row(cljs.core.inc,">.border.right",rows,row,col);

break;
case "ArrowLeft":
return tree_sheets.utils.focus_target_element(new cljs.core.Keyword(null,"inner","inner",-1383171215).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(refs)));

break;
case "ArrowRight":
return tree_sheets.components.border.navigate_col(cljs.core.inc,".cell-inner",cols,row,col);

break;
case "ArrowUp":
return tree_sheets.components.border.navigate_row(cljs.core.dec,">.border.right",rows,row,col);

break;
default:
return null;

}

break;
case "bottom":
var G__60983 = key;
switch (G__60983) {
case "ArrowDown":
return tree_sheets.components.border.navigate_row(cljs.core.inc,".cell-inner",rows,row,col);

break;
case "ArrowLeft":
return tree_sheets.components.border.navigate_col(cljs.core.dec,">.border.bottom",cols,row,col);

break;
case "ArrowRight":
return tree_sheets.components.border.navigate_col(cljs.core.inc,">.border.bottom",cols,row,col);

break;
case "ArrowUp":
return tree_sheets.utils.focus_target_element(new cljs.core.Keyword(null,"inner","inner",-1383171215).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(refs)));

break;
default:
return null;

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60979__$1)].join('')));

}
});
tree_sheets.components.border.border = (function tree_sheets$components$border$border(p__60987){
var map__60988 = p__60987;
var map__60988__$1 = (((((!((map__60988 == null))))?(((((map__60988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60988.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60988):map__60988);
var refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60988__$1,new cljs.core.Keyword(null,"refs","refs",-1560051448));
var side = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60988__$1,new cljs.core.Keyword(null,"side","side",389652279));
var grid_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60988__$1,new cljs.core.Keyword(null,"grid-id","grid-id",1007140206));
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60988__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60988__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var handle_input = (function (p1__60984_SHARP_){
(p1__60984_SHARP_.target.innerHTML = "");

return tree_sheets.components.border.insert_cell(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"text","text",-1790561697),p1__60984_SHARP_.nativeEvent.data,new cljs.core.Keyword(null,"side","side",389652279),side,new cljs.core.Keyword(null,"grid-id","grid-id",1007140206),grid_id,new cljs.core.Keyword(null,"row","row",-570139521),row,new cljs.core.Keyword(null,"col","col",-1959363084),col], null));
});
var handle_key_down = (function (p1__60985_SHARP_){
return tree_sheets.components.border.key_down(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"e","e",1381269198),p1__60985_SHARP_,new cljs.core.Keyword(null,"refs","refs",-1560051448),refs,new cljs.core.Keyword(null,"side","side",389652279),side,new cljs.core.Keyword(null,"grid-id","grid-id",1007140206),grid_id,new cljs.core.Keyword(null,"row","row",-570139521),row,new cljs.core.Keyword(null,"col","col",-1959363084),col], null));
});
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.border","div.border",428482226),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"content-editable","content-editable",636764967),true,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.name(side),new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__60986_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(refs,cljs.core.assoc,side,p1__60986_SHARP_);
}),new cljs.core.Keyword(null,"on-click","on-click",1632826543),tree_sheets.utils.focus_target_element,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),handle_key_down,new cljs.core.Keyword(null,"on-input","on-input",-267523366),handle_input,new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(-1)], null)], null);
});
});

//# sourceMappingURL=tree_sheets.components.border.js.map

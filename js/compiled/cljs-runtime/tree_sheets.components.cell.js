goog.provide('tree_sheets.components.cell');
tree_sheets.components.cell.debounce = (function tree_sheets$components$cell$debounce(f,interval){
var dbnc = (new goog.async.Debouncer(f,interval));
return (function() { 
var G__61020__delegate = function (args){
return dbnc.fire.apply(dbnc,cljs.core.to_array(args));
};
var G__61020 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61021__i = 0, G__61021__a = new Array(arguments.length -  0);
while (G__61021__i < G__61021__a.length) {G__61021__a[G__61021__i] = arguments[G__61021__i + 0]; ++G__61021__i;}
  args = new cljs.core.IndexedSeq(G__61021__a,0,null);
} 
return G__61020__delegate.call(this,args);};
G__61020.cljs$lang$maxFixedArity = 0;
G__61020.cljs$lang$applyTo = (function (arglist__61022){
var args = cljs.core.seq(arglist__61022);
return G__61020__delegate(args);
});
G__61020.cljs$core$IFn$_invoke$arity$variadic = G__61020__delegate;
return G__61020;
})()
;
});
tree_sheets.components.cell.set_cell_text = (function tree_sheets$components$cell$set_cell_text(id,text,row,col){
if(cljs.core.truth_(id)){
var G__60996 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-cell-text","set-cell-text",1822921096),id,text], null);
return (re_posh.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__60996) : re_posh.core.dispatch.call(null,G__60996));
} else {
var G__60997 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"create-cell","create-cell",-23238272),text,row,col], null);
return (re_posh.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__60997) : re_posh.core.dispatch.call(null,G__60997));
}
});
tree_sheets.components.cell.set_cell_text_debounced = tree_sheets.components.cell.debounce(tree_sheets.components.cell.set_cell_text,(800));
tree_sheets.components.cell.focus_parent_cell = (function tree_sheets$components$cell$focus_parent_cell(node){
var curr_node = node;
while(true){
if(cljs.core.truth_((function (){var and__4115__auto__ = curr_node;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(curr_node,document);
} else {
return and__4115__auto__;
}
})())){
if(cljs.core.truth_(curr_node.classList.contains("cell"))){
return curr_node.querySelector(".cell-inner").focus();
} else {
var G__61023 = curr_node.parentNode;
curr_node = G__61023;
continue;
}
} else {
return null;
}
break;
}
});
tree_sheets.components.cell.textarea_key_down = (function tree_sheets$components$cell$textarea_key_down(e,refs,cell_entity,row,col){
var textarea = new cljs.core.Keyword(null,"textarea","textarea",-650375824).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(refs));
var start = textarea.selectionStart;
var end = textarea.selectionEnd;
var text_length = textarea.value.length;
var key = e.key;
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"ArrowUp")) && ((end === (0))))){
return tree_sheets.utils.focus_target_element(new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(refs)));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"ArrowDown")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start,text_length)))){
return tree_sheets.utils.focus_target_element(new cljs.core.Keyword(null,"bottom","bottom",-1550509018).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(refs)));
} else {
if(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"Enter"))?e.shiftKey:false))){
var temp__5733__auto__ = new cljs.core.Keyword(null,"child-grid","child-grid",634818472).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(refs));
if(cljs.core.truth_(temp__5733__auto__)){
var child_grid = temp__5733__auto__;
var temp__5735__auto__ = child_grid.querySelector(".cell-inner");
if(cljs.core.truth_(temp__5735__auto__)){
var first_child_cell = temp__5735__auto__;
return tree_sheets.utils.focus_target_element(first_child_cell);
} else {
return null;
}
} else {
var temp__5733__auto____$1 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(cell_entity);
if(cljs.core.truth_(temp__5733__auto____$1)){
var cell_id = temp__5733__auto____$1;
var G__61003 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"create-graph","create-graph",-931605027),cell_id], null);
return (re_posh.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__61003) : re_posh.core.dispatch.call(null,G__61003));
} else {
var G__61004 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"create-cell-with-child","create-cell-with-child",-345348790),row,col], null);
return (re_posh.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__61004) : re_posh.core.dispatch.call(null,G__61004));
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"Escape")){
return tree_sheets.components.cell.focus_parent_cell(e.currentTarget);
} else {
return null;
}
}
}
}
});
tree_sheets.components.cell.cell_key_down = (function tree_sheets$components$cell$cell_key_down(e,refs,cell_entity,row,col){
if(cljs.core.not(e.target.classList.contains("textarea"))){
var key = e.key;
var textarea = new cljs.core.Keyword(null,"textarea","textarea",-650375824).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(refs));
if(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"Enter"))?e.shiftKey:false))){
var temp__5733__auto__ = new cljs.core.Keyword(null,"child-grid","child-grid",634818472).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(refs));
if(cljs.core.truth_(temp__5733__auto__)){
var child_grid = temp__5733__auto__;
var temp__5735__auto__ = child_grid.querySelector(".cell-inner");
if(cljs.core.truth_(temp__5735__auto__)){
var first_child_cell = temp__5735__auto__;
return tree_sheets.utils.focus_target_element(first_child_cell);
} else {
return null;
}
} else {
var temp__5733__auto____$1 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(cell_entity);
if(cljs.core.truth_(temp__5733__auto____$1)){
var cell_id = temp__5733__auto____$1;
var G__61005 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"create-graph","create-graph",-931605027),cell_id], null);
return (re_posh.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__61005) : re_posh.core.dispatch.call(null,G__61005));
} else {
var G__61006 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"create-cell-with-child","create-cell-with-child",-345348790),row,col], null);
return (re_posh.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__61006) : re_posh.core.dispatch.call(null,G__61006));
}
}
} else {
var G__61007 = key;
switch (G__61007) {
case "Enter":
e.preventDefault();

e.stopPropagation();

tree_sheets.utils.focus_target_element(textarea);

return setTimeout((function (){
return textarea.setSelectionRange((0),(999999));
}),(50));

break;
case "Escape":
return tree_sheets.components.cell.focus_parent_cell(e.currentTarget.parentNode.parentNode);

break;
case "ArrowUp":
return tree_sheets.utils.focus_target_element(new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(refs)));

break;
case "ArrowDown":
return tree_sheets.utils.focus_target_element(new cljs.core.Keyword(null,"bottom","bottom",-1550509018).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(refs)));

break;
case "ArrowLeft":
return tree_sheets.utils.focus_target_element(new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(refs)));

break;
case "ArrowRight":
return tree_sheets.utils.focus_target_element(new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(refs)));

break;
default:
return null;

}
}
} else {
return null;
}
});
tree_sheets.components.cell.overlay_mouse_down = (function tree_sheets$components$cell$overlay_mouse_down(e,refs){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(document.activeElement,new cljs.core.Keyword(null,"inner","inner",-1383171215).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(refs)))){
return setTimeout((function (){
return tree_sheets.utils.focus_target_element(new cljs.core.Keyword(null,"textarea","textarea",-650375824).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(refs)));
}),(10));
} else {
return tree_sheets.utils.focus_target_element(new cljs.core.Keyword(null,"inner","inner",-1383171215).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(refs)));
}
});
tree_sheets.components.cell.fix_textarea_height = (function tree_sheets$components$cell$fix_textarea_height(textarea){
if(cljs.core.truth_(textarea)){
return (textarea.style.height = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(textarea.scrollHeight),"px"].join(''));
} else {
return null;
}
});
tree_sheets.components.cell.cell = (function tree_sheets$components$cell$cell(row,col,grid_id,grid){
var grid_entity = (function (){var G__61016 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"by-id","by-id",-2129473981),grid_id], null);
return (re_posh.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__61016) : re_posh.core.subscribe.call(null,G__61016));
})();
var column_entity = (function (){var G__61017 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"by-id","by-id",-2129473981),col], null);
return (re_posh.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__61017) : re_posh.core.subscribe.call(null,G__61017));
})();
var cell_entity = (function (){var G__61018 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cell-by-row-col","cell-by-row-col",-1742798058),row,col], null);
return (re_posh.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__61018) : re_posh.core.subscribe.call(null,G__61018));
})();
var refs = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var handle_cell_key_down = (function (p1__61008_SHARP_){
return tree_sheets.components.cell.cell_key_down(p1__61008_SHARP_,refs,cljs.core.deref(cell_entity),row,col);
});
var handle_textarea_key_down = (function (p1__61009_SHARP_){
return tree_sheets.components.cell.textarea_key_down(p1__61009_SHARP_,refs,cljs.core.deref(cell_entity),row,col);
});
var handle_textarea_input = (function (){
return tree_sheets.components.cell.fix_textarea_height(new cljs.core.Keyword(null,"textarea","textarea",-650375824).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(refs)));
});
var handle_overlay_mouse_down = (function (p1__61010_SHARP_){
return tree_sheets.components.cell.overlay_mouse_down(p1__61010_SHARP_,refs);
});
var handle_textarea_change = (function (p1__61011_SHARP_){
return tree_sheets.components.cell.set_cell_text_debounced(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cell_entity)),p1__61011_SHARP_.target.value,row,col);
});
return (function (){
var width = new cljs.core.Keyword("col","width","col/width",-383816885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(column_entity));
var cell_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cell_entity));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cell","div.cell",1471979620),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["loc-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(row),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join(''),new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__61012_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(refs,cljs.core.assoc,new cljs.core.Keyword(null,"cell","cell",764245084),p1__61012_SHARP_);
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cell-inner","div.cell-inner",-343450763),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(-1),new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__61013_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(refs,cljs.core.assoc,new cljs.core.Keyword(null,"inner","inner",-1383171215),p1__61013_SHARP_);
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),handle_cell_key_down], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.textarea","textarea.textarea",-1013865997),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__61014_SHARP_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(refs,cljs.core.assoc,new cljs.core.Keyword(null,"textarea","textarea",-650375824),p1__61014_SHARP_);

return tree_sheets.components.cell.fix_textarea_height(p1__61014_SHARP_);
}),new cljs.core.Keyword(null,"cols","cols",-1914801295),(10000),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(cell_entity),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((((((8) * new cljs.core.Keyword("col","width","col/width",-383816885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(column_entity))) === (0)))?(200):(200))),"px"].join('')], null),new cljs.core.Keyword(null,"on-input","on-input",-267523366),handle_textarea_input,new cljs.core.Keyword(null,"spell-check","spell-check",-2060352968),"false",new cljs.core.Keyword(null,"on-change","on-change",-732046149),handle_textarea_change,new cljs.core.Keyword(null,"default-value","default-value",232220170),(function (){var or__4126__auto__ = new cljs.core.Keyword("cell","text","cell/text",-1785691783).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cell_entity));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),handle_textarea_key_down], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.overlay","div.overlay",58496851),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),handle_overlay_mouse_down], null)], null)], null),(function (){var temp__5735__auto__ = cljs.core.deref((function (){var G__61019 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"by-id","by-id",-2129473981),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("grid","parent","grid/parent",-875760513),cell_id], null)], null);
return (re_posh.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__61019) : re_posh.core.subscribe.call(null,G__61019));
})());
if(cljs.core.truth_(temp__5735__auto__)){
var child_grid = temp__5735__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.child-grid","div.child-grid",-1762887512),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__61015_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(refs,cljs.core.assoc,new cljs.core.Keyword(null,"child-grid","child-grid",634818472),p1__61015_SHARP_);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [grid,cell_id], null)], null);
} else {
return null;
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tree_sheets.components.border.border,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"refs","refs",-1560051448),refs,new cljs.core.Keyword(null,"side","side",389652279),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"grid-id","grid-id",1007140206),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(grid_entity)),new cljs.core.Keyword(null,"row","row",-570139521),row,new cljs.core.Keyword(null,"col","col",-1959363084),col], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tree_sheets.components.border.border,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"refs","refs",-1560051448),refs,new cljs.core.Keyword(null,"side","side",389652279),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"grid-id","grid-id",1007140206),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(grid_entity)),new cljs.core.Keyword(null,"row","row",-570139521),row,new cljs.core.Keyword(null,"col","col",-1959363084),col], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tree_sheets.components.border.border,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"refs","refs",-1560051448),refs,new cljs.core.Keyword(null,"side","side",389652279),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"grid-id","grid-id",1007140206),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(grid_entity)),new cljs.core.Keyword(null,"row","row",-570139521),row,new cljs.core.Keyword(null,"col","col",-1959363084),col], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tree_sheets.components.border.border,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"refs","refs",-1560051448),refs,new cljs.core.Keyword(null,"side","side",389652279),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"grid-id","grid-id",1007140206),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(grid_entity)),new cljs.core.Keyword(null,"row","row",-570139521),row,new cljs.core.Keyword(null,"col","col",-1959363084),col], null)], null)], null);
});
});

//# sourceMappingURL=tree_sheets.components.cell.js.map

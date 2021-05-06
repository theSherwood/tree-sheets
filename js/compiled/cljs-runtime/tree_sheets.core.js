goog.provide('tree_sheets.core');
tree_sheets.core.dev_setup = (function tree_sheets$core$dev_setup(){
if(tree_sheets.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
tree_sheets.core.mount_root = (function tree_sheets$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

var root_el = document.getElementById("app");
reagent.dom.unmount_component_at_node(root_el);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tree_sheets.views.main_panel], null),root_el);
});
tree_sheets.core.init = (function tree_sheets$core$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tree-sheets.events","initialize-db","tree-sheets.events/initialize-db",845040316)], null));

tree_sheets.core.dev_setup();

return tree_sheets.core.mount_root();
});

//# sourceMappingURL=tree_sheets.core.js.map

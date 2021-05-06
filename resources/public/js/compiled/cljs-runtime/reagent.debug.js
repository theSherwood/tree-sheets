goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__48461__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__48461 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48464__i = 0, G__48464__a = new Array(arguments.length -  0);
while (G__48464__i < G__48464__a.length) {G__48464__a[G__48464__i] = arguments[G__48464__i + 0]; ++G__48464__i;}
  args = new cljs.core.IndexedSeq(G__48464__a,0,null);
} 
return G__48461__delegate.call(this,args);};
G__48461.cljs$lang$maxFixedArity = 0;
G__48461.cljs$lang$applyTo = (function (arglist__48465){
var args = cljs.core.seq(arglist__48465);
return G__48461__delegate(args);
});
G__48461.cljs$core$IFn$_invoke$arity$variadic = G__48461__delegate;
return G__48461;
})()
);

(o.error = (function() { 
var G__48466__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__48466 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48468__i = 0, G__48468__a = new Array(arguments.length -  0);
while (G__48468__i < G__48468__a.length) {G__48468__a[G__48468__i] = arguments[G__48468__i + 0]; ++G__48468__i;}
  args = new cljs.core.IndexedSeq(G__48468__a,0,null);
} 
return G__48466__delegate.call(this,args);};
G__48466.cljs$lang$maxFixedArity = 0;
G__48466.cljs$lang$applyTo = (function (arglist__48470){
var args = cljs.core.seq(arglist__48470);
return G__48466__delegate(args);
});
G__48466.cljs$core$IFn$_invoke$arity$variadic = G__48466__delegate;
return G__48466;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map

goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__51758){
var map__51759 = p__51758;
var map__51759__$1 = (((((!((map__51759 == null))))?(((((map__51759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51759.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51759):map__51759);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51759__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51759__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51759__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51759__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4126__auto__ = child_of;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__51775_51824 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__51776_51825 = null;
var count__51777_51826 = (0);
var i__51778_51827 = (0);
while(true){
if((i__51778_51827 < count__51777_51826)){
var vec__51804_51829 = chunk__51776_51825.cljs$core$IIndexed$_nth$arity$2(null,i__51778_51827);
var k_51830 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51804_51829,(0),null);
var cb_51831 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51804_51829,(1),null);
try{var G__51808_51832 = cljs.core.deref(re_frame.trace.traces);
(cb_51831.cljs$core$IFn$_invoke$arity$1 ? cb_51831.cljs$core$IFn$_invoke$arity$1(G__51808_51832) : cb_51831.call(null,G__51808_51832));
}catch (e51807){var e_51833 = e51807;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_51830,"while storing",cljs.core.deref(re_frame.trace.traces),e_51833], 0));
}

var G__51838 = seq__51775_51824;
var G__51839 = chunk__51776_51825;
var G__51840 = count__51777_51826;
var G__51841 = (i__51778_51827 + (1));
seq__51775_51824 = G__51838;
chunk__51776_51825 = G__51839;
count__51777_51826 = G__51840;
i__51778_51827 = G__51841;
continue;
} else {
var temp__5735__auto___51843 = cljs.core.seq(seq__51775_51824);
if(temp__5735__auto___51843){
var seq__51775_51846__$1 = temp__5735__auto___51843;
if(cljs.core.chunked_seq_QMARK_(seq__51775_51846__$1)){
var c__4556__auto___51850 = cljs.core.chunk_first(seq__51775_51846__$1);
var G__51851 = cljs.core.chunk_rest(seq__51775_51846__$1);
var G__51852 = c__4556__auto___51850;
var G__51853 = cljs.core.count(c__4556__auto___51850);
var G__51854 = (0);
seq__51775_51824 = G__51851;
chunk__51776_51825 = G__51852;
count__51777_51826 = G__51853;
i__51778_51827 = G__51854;
continue;
} else {
var vec__51810_51855 = cljs.core.first(seq__51775_51846__$1);
var k_51856 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51810_51855,(0),null);
var cb_51857 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51810_51855,(1),null);
try{var G__51815_51858 = cljs.core.deref(re_frame.trace.traces);
(cb_51857.cljs$core$IFn$_invoke$arity$1 ? cb_51857.cljs$core$IFn$_invoke$arity$1(G__51815_51858) : cb_51857.call(null,G__51815_51858));
}catch (e51813){var e_51859 = e51813;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_51856,"while storing",cljs.core.deref(re_frame.trace.traces),e_51859], 0));
}

var G__51864 = cljs.core.next(seq__51775_51846__$1);
var G__51865 = null;
var G__51866 = (0);
var G__51867 = (0);
seq__51775_51824 = G__51864;
chunk__51776_51825 = G__51865;
count__51777_51826 = G__51866;
i__51778_51827 = G__51867;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map

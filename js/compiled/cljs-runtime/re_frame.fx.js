goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__54052 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__54053 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__54053);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___54307 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___54307)){
var new_db_54308 = temp__5735__auto___54307;
var fexpr__54088_54310 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__54088_54310.cljs$core$IFn$_invoke$arity$1 ? fexpr__54088_54310.cljs$core$IFn$_invoke$arity$1(new_db_54308) : fexpr__54088_54310.call(null,new_db_54308));
} else {
}

var seq__54095 = cljs.core.seq(effects_without_db);
var chunk__54096 = null;
var count__54097 = (0);
var i__54098 = (0);
while(true){
if((i__54098 < count__54097)){
var vec__54116 = chunk__54096.cljs$core$IIndexed$_nth$arity$2(null,i__54098);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54116,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54116,(1),null);
var temp__5733__auto___54313 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___54313)){
var effect_fn_54314 = temp__5733__auto___54313;
(effect_fn_54314.cljs$core$IFn$_invoke$arity$1 ? effect_fn_54314.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_54314.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__54317 = seq__54095;
var G__54318 = chunk__54096;
var G__54319 = count__54097;
var G__54320 = (i__54098 + (1));
seq__54095 = G__54317;
chunk__54096 = G__54318;
count__54097 = G__54319;
i__54098 = G__54320;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__54095);
if(temp__5735__auto__){
var seq__54095__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54095__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__54095__$1);
var G__54326 = cljs.core.chunk_rest(seq__54095__$1);
var G__54327 = c__4556__auto__;
var G__54328 = cljs.core.count(c__4556__auto__);
var G__54329 = (0);
seq__54095 = G__54326;
chunk__54096 = G__54327;
count__54097 = G__54328;
i__54098 = G__54329;
continue;
} else {
var vec__54130 = cljs.core.first(seq__54095__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54130,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54130,(1),null);
var temp__5733__auto___54330 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___54330)){
var effect_fn_54331 = temp__5733__auto___54330;
(effect_fn_54331.cljs$core$IFn$_invoke$arity$1 ? effect_fn_54331.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_54331.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__54332 = cljs.core.next(seq__54095__$1);
var G__54333 = null;
var G__54334 = (0);
var G__54335 = (0);
seq__54095 = G__54332;
chunk__54096 = G__54333;
count__54097 = G__54334;
i__54098 = G__54335;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__51716__auto___54338 = re_frame.interop.now();
var duration__51717__auto___54339 = (end__51716__auto___54338 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__51717__auto___54339,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__51716__auto___54338);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__54052);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___54340 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___54340)){
var new_db_54341 = temp__5735__auto___54340;
var fexpr__54143_54342 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__54143_54342.cljs$core$IFn$_invoke$arity$1 ? fexpr__54143_54342.cljs$core$IFn$_invoke$arity$1(new_db_54341) : fexpr__54143_54342.call(null,new_db_54341));
} else {
}

var seq__54146 = cljs.core.seq(effects_without_db);
var chunk__54147 = null;
var count__54148 = (0);
var i__54149 = (0);
while(true){
if((i__54149 < count__54148)){
var vec__54180 = chunk__54147.cljs$core$IIndexed$_nth$arity$2(null,i__54149);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54180,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54180,(1),null);
var temp__5733__auto___54346 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___54346)){
var effect_fn_54348 = temp__5733__auto___54346;
(effect_fn_54348.cljs$core$IFn$_invoke$arity$1 ? effect_fn_54348.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_54348.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__54351 = seq__54146;
var G__54352 = chunk__54147;
var G__54353 = count__54148;
var G__54354 = (i__54149 + (1));
seq__54146 = G__54351;
chunk__54147 = G__54352;
count__54148 = G__54353;
i__54149 = G__54354;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__54146);
if(temp__5735__auto__){
var seq__54146__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54146__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__54146__$1);
var G__54357 = cljs.core.chunk_rest(seq__54146__$1);
var G__54358 = c__4556__auto__;
var G__54359 = cljs.core.count(c__4556__auto__);
var G__54360 = (0);
seq__54146 = G__54357;
chunk__54147 = G__54358;
count__54148 = G__54359;
i__54149 = G__54360;
continue;
} else {
var vec__54191 = cljs.core.first(seq__54146__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54191,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54191,(1),null);
var temp__5733__auto___54364 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___54364)){
var effect_fn_54366 = temp__5733__auto___54364;
(effect_fn_54366.cljs$core$IFn$_invoke$arity$1 ? effect_fn_54366.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_54366.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__54367 = cljs.core.next(seq__54146__$1);
var G__54368 = null;
var G__54369 = (0);
var G__54370 = (0);
seq__54146 = G__54367;
chunk__54147 = G__54368;
count__54148 = G__54369;
i__54149 = G__54370;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__54202){
var map__54205 = p__54202;
var map__54205__$1 = (((((!((map__54205 == null))))?(((((map__54205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54205.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54205):map__54205);
var effect = map__54205__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54205__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54205__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__54207 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__54208 = null;
var count__54209 = (0);
var i__54210 = (0);
while(true){
if((i__54210 < count__54209)){
var effect = chunk__54208.cljs$core$IIndexed$_nth$arity$2(null,i__54210);
re_frame.fx.dispatch_later(effect);


var G__54382 = seq__54207;
var G__54383 = chunk__54208;
var G__54384 = count__54209;
var G__54385 = (i__54210 + (1));
seq__54207 = G__54382;
chunk__54208 = G__54383;
count__54209 = G__54384;
i__54210 = G__54385;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__54207);
if(temp__5735__auto__){
var seq__54207__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54207__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__54207__$1);
var G__54389 = cljs.core.chunk_rest(seq__54207__$1);
var G__54390 = c__4556__auto__;
var G__54391 = cljs.core.count(c__4556__auto__);
var G__54392 = (0);
seq__54207 = G__54389;
chunk__54208 = G__54390;
count__54209 = G__54391;
i__54210 = G__54392;
continue;
} else {
var effect = cljs.core.first(seq__54207__$1);
re_frame.fx.dispatch_later(effect);


var G__54395 = cljs.core.next(seq__54207__$1);
var G__54396 = null;
var G__54397 = (0);
var G__54398 = (0);
seq__54207 = G__54395;
chunk__54208 = G__54396;
count__54209 = G__54397;
i__54210 = G__54398;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__54235 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__54236 = null;
var count__54237 = (0);
var i__54239 = (0);
while(true){
if((i__54239 < count__54237)){
var vec__54259 = chunk__54236.cljs$core$IIndexed$_nth$arity$2(null,i__54239);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54259,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54259,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___54409 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___54409)){
var effect_fn_54410 = temp__5733__auto___54409;
(effect_fn_54410.cljs$core$IFn$_invoke$arity$1 ? effect_fn_54410.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_54410.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__54411 = seq__54235;
var G__54412 = chunk__54236;
var G__54413 = count__54237;
var G__54414 = (i__54239 + (1));
seq__54235 = G__54411;
chunk__54236 = G__54412;
count__54237 = G__54413;
i__54239 = G__54414;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__54235);
if(temp__5735__auto__){
var seq__54235__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54235__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__54235__$1);
var G__54415 = cljs.core.chunk_rest(seq__54235__$1);
var G__54416 = c__4556__auto__;
var G__54417 = cljs.core.count(c__4556__auto__);
var G__54418 = (0);
seq__54235 = G__54415;
chunk__54236 = G__54416;
count__54237 = G__54417;
i__54239 = G__54418;
continue;
} else {
var vec__54269 = cljs.core.first(seq__54235__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54269,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54269,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___54420 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___54420)){
var effect_fn_54422 = temp__5733__auto___54420;
(effect_fn_54422.cljs$core$IFn$_invoke$arity$1 ? effect_fn_54422.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_54422.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__54423 = cljs.core.next(seq__54235__$1);
var G__54424 = null;
var G__54425 = (0);
var G__54426 = (0);
seq__54235 = G__54423;
chunk__54236 = G__54424;
count__54237 = G__54425;
i__54239 = G__54426;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__54275 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__54276 = null;
var count__54277 = (0);
var i__54278 = (0);
while(true){
if((i__54278 < count__54277)){
var event = chunk__54276.cljs$core$IIndexed$_nth$arity$2(null,i__54278);
re_frame.router.dispatch(event);


var G__54432 = seq__54275;
var G__54433 = chunk__54276;
var G__54434 = count__54277;
var G__54435 = (i__54278 + (1));
seq__54275 = G__54432;
chunk__54276 = G__54433;
count__54277 = G__54434;
i__54278 = G__54435;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__54275);
if(temp__5735__auto__){
var seq__54275__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54275__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__54275__$1);
var G__54438 = cljs.core.chunk_rest(seq__54275__$1);
var G__54439 = c__4556__auto__;
var G__54440 = cljs.core.count(c__4556__auto__);
var G__54441 = (0);
seq__54275 = G__54438;
chunk__54276 = G__54439;
count__54277 = G__54440;
i__54278 = G__54441;
continue;
} else {
var event = cljs.core.first(seq__54275__$1);
re_frame.router.dispatch(event);


var G__54442 = cljs.core.next(seq__54275__$1);
var G__54443 = null;
var G__54444 = (0);
var G__54445 = (0);
seq__54275 = G__54442;
chunk__54276 = G__54443;
count__54277 = G__54444;
i__54278 = G__54445;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__54290 = cljs.core.seq(value);
var chunk__54291 = null;
var count__54292 = (0);
var i__54293 = (0);
while(true){
if((i__54293 < count__54292)){
var event = chunk__54291.cljs$core$IIndexed$_nth$arity$2(null,i__54293);
clear_event(event);


var G__54450 = seq__54290;
var G__54451 = chunk__54291;
var G__54452 = count__54292;
var G__54453 = (i__54293 + (1));
seq__54290 = G__54450;
chunk__54291 = G__54451;
count__54292 = G__54452;
i__54293 = G__54453;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__54290);
if(temp__5735__auto__){
var seq__54290__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54290__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__54290__$1);
var G__54455 = cljs.core.chunk_rest(seq__54290__$1);
var G__54456 = c__4556__auto__;
var G__54457 = cljs.core.count(c__4556__auto__);
var G__54458 = (0);
seq__54290 = G__54455;
chunk__54291 = G__54456;
count__54292 = G__54457;
i__54293 = G__54458;
continue;
} else {
var event = cljs.core.first(seq__54290__$1);
clear_event(event);


var G__54459 = cljs.core.next(seq__54290__$1);
var G__54460 = null;
var G__54461 = (0);
var G__54462 = (0);
seq__54290 = G__54459;
chunk__54291 = G__54460;
count__54292 = G__54461;
i__54293 = G__54462;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map

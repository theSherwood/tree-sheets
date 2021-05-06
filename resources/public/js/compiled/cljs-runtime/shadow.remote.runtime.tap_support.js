goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__48494,p__48495){
var map__48496 = p__48494;
var map__48496__$1 = (((((!((map__48496 == null))))?(((((map__48496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48496):map__48496);
var svc = map__48496__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48496__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48496__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48496__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__48497 = p__48495;
var map__48497__$1 = (((((!((map__48497 == null))))?(((((map__48497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48497.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48497):map__48497);
var msg = map__48497__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48497__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48497__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48497__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48497__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__48516,p__48517){
var map__48519 = p__48516;
var map__48519__$1 = (((((!((map__48519 == null))))?(((((map__48519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48519):map__48519);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48519__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__48520 = p__48517;
var map__48520__$1 = (((((!((map__48520 == null))))?(((((map__48520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48520.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48520):map__48520);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48520__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__48530,p__48531){
var map__48532 = p__48530;
var map__48532__$1 = (((((!((map__48532 == null))))?(((((map__48532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48532):map__48532);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48532__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48532__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__48533 = p__48531;
var map__48533__$1 = (((((!((map__48533 == null))))?(((((map__48533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48533):map__48533);
var msg = map__48533__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48533__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__48542,tid){
var map__48543 = p__48542;
var map__48543__$1 = (((((!((map__48543 == null))))?(((((map__48543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48543):map__48543);
var svc = map__48543__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48543__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__48555 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__48556 = null;
var count__48557 = (0);
var i__48558 = (0);
while(true){
if((i__48558 < count__48557)){
var vec__48572 = chunk__48556.cljs$core$IIndexed$_nth$arity$2(null,i__48558);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48572,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48572,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__48646 = seq__48555;
var G__48647 = chunk__48556;
var G__48648 = count__48557;
var G__48649 = (i__48558 + (1));
seq__48555 = G__48646;
chunk__48556 = G__48647;
count__48557 = G__48648;
i__48558 = G__48649;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48555);
if(temp__5735__auto__){
var seq__48555__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48555__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__48555__$1);
var G__48651 = cljs.core.chunk_rest(seq__48555__$1);
var G__48652 = c__4556__auto__;
var G__48653 = cljs.core.count(c__4556__auto__);
var G__48654 = (0);
seq__48555 = G__48651;
chunk__48556 = G__48652;
count__48557 = G__48653;
i__48558 = G__48654;
continue;
} else {
var vec__48578 = cljs.core.first(seq__48555__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48578,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48578,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__48657 = cljs.core.next(seq__48555__$1);
var G__48658 = null;
var G__48659 = (0);
var G__48660 = (0);
seq__48555 = G__48657;
chunk__48556 = G__48658;
count__48557 = G__48659;
i__48558 = G__48660;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__48546_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__48546_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__48547_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__48547_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__48548_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__48548_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__48549_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__48549_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__48590){
var map__48591 = p__48590;
var map__48591__$1 = (((((!((map__48591 == null))))?(((((map__48591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48591.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48591):map__48591);
var svc = map__48591__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48591__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48591__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map

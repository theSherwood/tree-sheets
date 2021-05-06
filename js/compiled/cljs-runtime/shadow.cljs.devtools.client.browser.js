goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54896 = arguments.length;
var i__4737__auto___54897 = (0);
while(true){
if((i__4737__auto___54897 < len__4736__auto___54896)){
args__4742__auto__.push((arguments[i__4737__auto___54897]));

var G__54899 = (i__4737__auto___54897 + (1));
i__4737__auto___54897 = G__54899;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq54489){
var G__54490 = cljs.core.first(seq54489);
var seq54489__$1 = cljs.core.next(seq54489);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54490,seq54489__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__54508 = cljs.core.seq(sources);
var chunk__54509 = null;
var count__54510 = (0);
var i__54511 = (0);
while(true){
if((i__54511 < count__54510)){
var map__54533 = chunk__54509.cljs$core$IIndexed$_nth$arity$2(null,i__54511);
var map__54533__$1 = (((((!((map__54533 == null))))?(((((map__54533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54533):map__54533);
var src = map__54533__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54533__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54533__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54533__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54533__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e54535){var e_54904 = e54535;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_54904);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_54904.message)].join('')));
}

var G__54905 = seq__54508;
var G__54906 = chunk__54509;
var G__54907 = count__54510;
var G__54908 = (i__54511 + (1));
seq__54508 = G__54905;
chunk__54509 = G__54906;
count__54510 = G__54907;
i__54511 = G__54908;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__54508);
if(temp__5735__auto__){
var seq__54508__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54508__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__54508__$1);
var G__54910 = cljs.core.chunk_rest(seq__54508__$1);
var G__54911 = c__4556__auto__;
var G__54912 = cljs.core.count(c__4556__auto__);
var G__54913 = (0);
seq__54508 = G__54910;
chunk__54509 = G__54911;
count__54510 = G__54912;
i__54511 = G__54913;
continue;
} else {
var map__54542 = cljs.core.first(seq__54508__$1);
var map__54542__$1 = (((((!((map__54542 == null))))?(((((map__54542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54542):map__54542);
var src = map__54542__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54542__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54542__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54542__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54542__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e54548){var e_54916 = e54548;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_54916);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_54916.message)].join('')));
}

var G__54919 = cljs.core.next(seq__54508__$1);
var G__54920 = null;
var G__54921 = (0);
var G__54922 = (0);
seq__54508 = G__54919;
chunk__54509 = G__54920;
count__54510 = G__54921;
i__54511 = G__54922;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__54559 = cljs.core.seq(js_requires);
var chunk__54560 = null;
var count__54561 = (0);
var i__54562 = (0);
while(true){
if((i__54562 < count__54561)){
var js_ns = chunk__54560.cljs$core$IIndexed$_nth$arity$2(null,i__54562);
var require_str_54923 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_54923);


var G__54924 = seq__54559;
var G__54925 = chunk__54560;
var G__54926 = count__54561;
var G__54927 = (i__54562 + (1));
seq__54559 = G__54924;
chunk__54560 = G__54925;
count__54561 = G__54926;
i__54562 = G__54927;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__54559);
if(temp__5735__auto__){
var seq__54559__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54559__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__54559__$1);
var G__54928 = cljs.core.chunk_rest(seq__54559__$1);
var G__54929 = c__4556__auto__;
var G__54930 = cljs.core.count(c__4556__auto__);
var G__54931 = (0);
seq__54559 = G__54928;
chunk__54560 = G__54929;
count__54561 = G__54930;
i__54562 = G__54931;
continue;
} else {
var js_ns = cljs.core.first(seq__54559__$1);
var require_str_54933 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_54933);


var G__54934 = cljs.core.next(seq__54559__$1);
var G__54935 = null;
var G__54936 = (0);
var G__54937 = (0);
seq__54559 = G__54934;
chunk__54560 = G__54935;
count__54561 = G__54936;
i__54562 = G__54937;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__54588){
var map__54589 = p__54588;
var map__54589__$1 = (((((!((map__54589 == null))))?(((((map__54589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54589):map__54589);
var msg = map__54589__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54589__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54589__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__54594(s__54595){
return (new cljs.core.LazySeq(null,(function (){
var s__54595__$1 = s__54595;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__54595__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__54606 = cljs.core.first(xs__6292__auto__);
var map__54606__$1 = (((((!((map__54606 == null))))?(((((map__54606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54606):map__54606);
var src = map__54606__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54606__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54606__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__54595__$1,map__54606,map__54606__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__54589,map__54589__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__54594_$_iter__54596(s__54597){
return (new cljs.core.LazySeq(null,((function (s__54595__$1,map__54606,map__54606__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__54589,map__54589__$1,msg,info,reload_info){
return (function (){
var s__54597__$1 = s__54597;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__54597__$1);
if(temp__5735__auto____$1){
var s__54597__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__54597__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__54597__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__54599 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__54598 = (0);
while(true){
if((i__54598 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__54598);
cljs.core.chunk_append(b__54599,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__54944 = (i__54598 + (1));
i__54598 = G__54944;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54599),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__54594_$_iter__54596(cljs.core.chunk_rest(s__54597__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54599),null);
}
} else {
var warning = cljs.core.first(s__54597__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__54594_$_iter__54596(cljs.core.rest(s__54597__$2)));
}
} else {
return null;
}
break;
}
});})(s__54595__$1,map__54606,map__54606__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__54589,map__54589__$1,msg,info,reload_info))
,null,null));
});})(s__54595__$1,map__54606,map__54606__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__54589,map__54589__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__54594(cljs.core.rest(s__54595__$1)));
} else {
var G__54945 = cljs.core.rest(s__54595__$1);
s__54595__$1 = G__54945;
continue;
}
} else {
var G__54946 = cljs.core.rest(s__54595__$1);
s__54595__$1 = G__54946;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__54614_54948 = cljs.core.seq(warnings);
var chunk__54615_54949 = null;
var count__54616_54950 = (0);
var i__54617_54951 = (0);
while(true){
if((i__54617_54951 < count__54616_54950)){
var map__54626_54953 = chunk__54615_54949.cljs$core$IIndexed$_nth$arity$2(null,i__54617_54951);
var map__54626_54954__$1 = (((((!((map__54626_54953 == null))))?(((((map__54626_54953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54626_54953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54626_54953):map__54626_54953);
var w_54955 = map__54626_54954__$1;
var msg_54956__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54626_54954__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_54957 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54626_54954__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_54958 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54626_54954__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_54959 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54626_54954__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_54959)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_54957),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_54958),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_54956__$1)].join(''));


var G__54962 = seq__54614_54948;
var G__54963 = chunk__54615_54949;
var G__54964 = count__54616_54950;
var G__54965 = (i__54617_54951 + (1));
seq__54614_54948 = G__54962;
chunk__54615_54949 = G__54963;
count__54616_54950 = G__54964;
i__54617_54951 = G__54965;
continue;
} else {
var temp__5735__auto___54966 = cljs.core.seq(seq__54614_54948);
if(temp__5735__auto___54966){
var seq__54614_54967__$1 = temp__5735__auto___54966;
if(cljs.core.chunked_seq_QMARK_(seq__54614_54967__$1)){
var c__4556__auto___54968 = cljs.core.chunk_first(seq__54614_54967__$1);
var G__54969 = cljs.core.chunk_rest(seq__54614_54967__$1);
var G__54970 = c__4556__auto___54968;
var G__54971 = cljs.core.count(c__4556__auto___54968);
var G__54972 = (0);
seq__54614_54948 = G__54969;
chunk__54615_54949 = G__54970;
count__54616_54950 = G__54971;
i__54617_54951 = G__54972;
continue;
} else {
var map__54628_54973 = cljs.core.first(seq__54614_54967__$1);
var map__54628_54974__$1 = (((((!((map__54628_54973 == null))))?(((((map__54628_54973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54628_54973.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54628_54973):map__54628_54973);
var w_54975 = map__54628_54974__$1;
var msg_54976__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54628_54974__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_54977 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54628_54974__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_54978 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54628_54974__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_54979 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54628_54974__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_54979)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_54977),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_54978),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_54976__$1)].join(''));


var G__54980 = cljs.core.next(seq__54614_54967__$1);
var G__54981 = null;
var G__54982 = (0);
var G__54983 = (0);
seq__54614_54948 = G__54980;
chunk__54615_54949 = G__54981;
count__54616_54950 = G__54982;
i__54617_54951 = G__54983;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__54585_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__54585_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__54670){
var map__54671 = p__54670;
var map__54671__$1 = (((((!((map__54671 == null))))?(((((map__54671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54671):map__54671);
var msg = map__54671__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54671__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__54673 = cljs.core.seq(updates);
var chunk__54675 = null;
var count__54676 = (0);
var i__54677 = (0);
while(true){
if((i__54677 < count__54676)){
var path = chunk__54675.cljs$core$IIndexed$_nth$arity$2(null,i__54677);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__54730_55014 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__54734_55015 = null;
var count__54735_55016 = (0);
var i__54736_55017 = (0);
while(true){
if((i__54736_55017 < count__54735_55016)){
var node_55018 = chunk__54734_55015.cljs$core$IIndexed$_nth$arity$2(null,i__54736_55017);
if(cljs.core.not(node_55018.shadow$old)){
var path_match_55019 = shadow.cljs.devtools.client.browser.match_paths(node_55018.getAttribute("href"),path);
if(cljs.core.truth_(path_match_55019)){
var new_link_55023 = (function (){var G__54746 = node_55018.cloneNode(true);
G__54746.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_55019),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__54746;
})();
(node_55018.shadow$old = true);

(new_link_55023.onload = ((function (seq__54730_55014,chunk__54734_55015,count__54735_55016,i__54736_55017,seq__54673,chunk__54675,count__54676,i__54677,new_link_55023,path_match_55019,node_55018,path,map__54671,map__54671__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_55018);
});})(seq__54730_55014,chunk__54734_55015,count__54735_55016,i__54736_55017,seq__54673,chunk__54675,count__54676,i__54677,new_link_55023,path_match_55019,node_55018,path,map__54671,map__54671__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_55019], 0));

goog.dom.insertSiblingAfter(new_link_55023,node_55018);


var G__55024 = seq__54730_55014;
var G__55025 = chunk__54734_55015;
var G__55026 = count__54735_55016;
var G__55027 = (i__54736_55017 + (1));
seq__54730_55014 = G__55024;
chunk__54734_55015 = G__55025;
count__54735_55016 = G__55026;
i__54736_55017 = G__55027;
continue;
} else {
var G__55028 = seq__54730_55014;
var G__55029 = chunk__54734_55015;
var G__55030 = count__54735_55016;
var G__55031 = (i__54736_55017 + (1));
seq__54730_55014 = G__55028;
chunk__54734_55015 = G__55029;
count__54735_55016 = G__55030;
i__54736_55017 = G__55031;
continue;
}
} else {
var G__55032 = seq__54730_55014;
var G__55033 = chunk__54734_55015;
var G__55034 = count__54735_55016;
var G__55035 = (i__54736_55017 + (1));
seq__54730_55014 = G__55032;
chunk__54734_55015 = G__55033;
count__54735_55016 = G__55034;
i__54736_55017 = G__55035;
continue;
}
} else {
var temp__5735__auto___55039 = cljs.core.seq(seq__54730_55014);
if(temp__5735__auto___55039){
var seq__54730_55040__$1 = temp__5735__auto___55039;
if(cljs.core.chunked_seq_QMARK_(seq__54730_55040__$1)){
var c__4556__auto___55041 = cljs.core.chunk_first(seq__54730_55040__$1);
var G__55042 = cljs.core.chunk_rest(seq__54730_55040__$1);
var G__55043 = c__4556__auto___55041;
var G__55044 = cljs.core.count(c__4556__auto___55041);
var G__55045 = (0);
seq__54730_55014 = G__55042;
chunk__54734_55015 = G__55043;
count__54735_55016 = G__55044;
i__54736_55017 = G__55045;
continue;
} else {
var node_55047 = cljs.core.first(seq__54730_55040__$1);
if(cljs.core.not(node_55047.shadow$old)){
var path_match_55050 = shadow.cljs.devtools.client.browser.match_paths(node_55047.getAttribute("href"),path);
if(cljs.core.truth_(path_match_55050)){
var new_link_55051 = (function (){var G__54750 = node_55047.cloneNode(true);
G__54750.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_55050),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__54750;
})();
(node_55047.shadow$old = true);

(new_link_55051.onload = ((function (seq__54730_55014,chunk__54734_55015,count__54735_55016,i__54736_55017,seq__54673,chunk__54675,count__54676,i__54677,new_link_55051,path_match_55050,node_55047,seq__54730_55040__$1,temp__5735__auto___55039,path,map__54671,map__54671__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_55047);
});})(seq__54730_55014,chunk__54734_55015,count__54735_55016,i__54736_55017,seq__54673,chunk__54675,count__54676,i__54677,new_link_55051,path_match_55050,node_55047,seq__54730_55040__$1,temp__5735__auto___55039,path,map__54671,map__54671__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_55050], 0));

goog.dom.insertSiblingAfter(new_link_55051,node_55047);


var G__55055 = cljs.core.next(seq__54730_55040__$1);
var G__55056 = null;
var G__55057 = (0);
var G__55058 = (0);
seq__54730_55014 = G__55055;
chunk__54734_55015 = G__55056;
count__54735_55016 = G__55057;
i__54736_55017 = G__55058;
continue;
} else {
var G__55059 = cljs.core.next(seq__54730_55040__$1);
var G__55060 = null;
var G__55061 = (0);
var G__55062 = (0);
seq__54730_55014 = G__55059;
chunk__54734_55015 = G__55060;
count__54735_55016 = G__55061;
i__54736_55017 = G__55062;
continue;
}
} else {
var G__55063 = cljs.core.next(seq__54730_55040__$1);
var G__55064 = null;
var G__55065 = (0);
var G__55066 = (0);
seq__54730_55014 = G__55063;
chunk__54734_55015 = G__55064;
count__54735_55016 = G__55065;
i__54736_55017 = G__55066;
continue;
}
}
} else {
}
}
break;
}


var G__55067 = seq__54673;
var G__55068 = chunk__54675;
var G__55069 = count__54676;
var G__55070 = (i__54677 + (1));
seq__54673 = G__55067;
chunk__54675 = G__55068;
count__54676 = G__55069;
i__54677 = G__55070;
continue;
} else {
var G__55071 = seq__54673;
var G__55072 = chunk__54675;
var G__55073 = count__54676;
var G__55074 = (i__54677 + (1));
seq__54673 = G__55071;
chunk__54675 = G__55072;
count__54676 = G__55073;
i__54677 = G__55074;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__54673);
if(temp__5735__auto__){
var seq__54673__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54673__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__54673__$1);
var G__55076 = cljs.core.chunk_rest(seq__54673__$1);
var G__55077 = c__4556__auto__;
var G__55078 = cljs.core.count(c__4556__auto__);
var G__55079 = (0);
seq__54673 = G__55076;
chunk__54675 = G__55077;
count__54676 = G__55078;
i__54677 = G__55079;
continue;
} else {
var path = cljs.core.first(seq__54673__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__54758_55080 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__54762_55081 = null;
var count__54763_55082 = (0);
var i__54764_55083 = (0);
while(true){
if((i__54764_55083 < count__54763_55082)){
var node_55084 = chunk__54762_55081.cljs$core$IIndexed$_nth$arity$2(null,i__54764_55083);
if(cljs.core.not(node_55084.shadow$old)){
var path_match_55085 = shadow.cljs.devtools.client.browser.match_paths(node_55084.getAttribute("href"),path);
if(cljs.core.truth_(path_match_55085)){
var new_link_55086 = (function (){var G__54792 = node_55084.cloneNode(true);
G__54792.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_55085),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__54792;
})();
(node_55084.shadow$old = true);

(new_link_55086.onload = ((function (seq__54758_55080,chunk__54762_55081,count__54763_55082,i__54764_55083,seq__54673,chunk__54675,count__54676,i__54677,new_link_55086,path_match_55085,node_55084,path,seq__54673__$1,temp__5735__auto__,map__54671,map__54671__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_55084);
});})(seq__54758_55080,chunk__54762_55081,count__54763_55082,i__54764_55083,seq__54673,chunk__54675,count__54676,i__54677,new_link_55086,path_match_55085,node_55084,path,seq__54673__$1,temp__5735__auto__,map__54671,map__54671__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_55085], 0));

goog.dom.insertSiblingAfter(new_link_55086,node_55084);


var G__55087 = seq__54758_55080;
var G__55088 = chunk__54762_55081;
var G__55089 = count__54763_55082;
var G__55090 = (i__54764_55083 + (1));
seq__54758_55080 = G__55087;
chunk__54762_55081 = G__55088;
count__54763_55082 = G__55089;
i__54764_55083 = G__55090;
continue;
} else {
var G__55091 = seq__54758_55080;
var G__55092 = chunk__54762_55081;
var G__55093 = count__54763_55082;
var G__55094 = (i__54764_55083 + (1));
seq__54758_55080 = G__55091;
chunk__54762_55081 = G__55092;
count__54763_55082 = G__55093;
i__54764_55083 = G__55094;
continue;
}
} else {
var G__55095 = seq__54758_55080;
var G__55096 = chunk__54762_55081;
var G__55097 = count__54763_55082;
var G__55098 = (i__54764_55083 + (1));
seq__54758_55080 = G__55095;
chunk__54762_55081 = G__55096;
count__54763_55082 = G__55097;
i__54764_55083 = G__55098;
continue;
}
} else {
var temp__5735__auto___55099__$1 = cljs.core.seq(seq__54758_55080);
if(temp__5735__auto___55099__$1){
var seq__54758_55100__$1 = temp__5735__auto___55099__$1;
if(cljs.core.chunked_seq_QMARK_(seq__54758_55100__$1)){
var c__4556__auto___55101 = cljs.core.chunk_first(seq__54758_55100__$1);
var G__55102 = cljs.core.chunk_rest(seq__54758_55100__$1);
var G__55103 = c__4556__auto___55101;
var G__55104 = cljs.core.count(c__4556__auto___55101);
var G__55105 = (0);
seq__54758_55080 = G__55102;
chunk__54762_55081 = G__55103;
count__54763_55082 = G__55104;
i__54764_55083 = G__55105;
continue;
} else {
var node_55106 = cljs.core.first(seq__54758_55100__$1);
if(cljs.core.not(node_55106.shadow$old)){
var path_match_55107 = shadow.cljs.devtools.client.browser.match_paths(node_55106.getAttribute("href"),path);
if(cljs.core.truth_(path_match_55107)){
var new_link_55108 = (function (){var G__54798 = node_55106.cloneNode(true);
G__54798.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_55107),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__54798;
})();
(node_55106.shadow$old = true);

(new_link_55108.onload = ((function (seq__54758_55080,chunk__54762_55081,count__54763_55082,i__54764_55083,seq__54673,chunk__54675,count__54676,i__54677,new_link_55108,path_match_55107,node_55106,seq__54758_55100__$1,temp__5735__auto___55099__$1,path,seq__54673__$1,temp__5735__auto__,map__54671,map__54671__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_55106);
});})(seq__54758_55080,chunk__54762_55081,count__54763_55082,i__54764_55083,seq__54673,chunk__54675,count__54676,i__54677,new_link_55108,path_match_55107,node_55106,seq__54758_55100__$1,temp__5735__auto___55099__$1,path,seq__54673__$1,temp__5735__auto__,map__54671,map__54671__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_55107], 0));

goog.dom.insertSiblingAfter(new_link_55108,node_55106);


var G__55109 = cljs.core.next(seq__54758_55100__$1);
var G__55110 = null;
var G__55111 = (0);
var G__55112 = (0);
seq__54758_55080 = G__55109;
chunk__54762_55081 = G__55110;
count__54763_55082 = G__55111;
i__54764_55083 = G__55112;
continue;
} else {
var G__55113 = cljs.core.next(seq__54758_55100__$1);
var G__55114 = null;
var G__55115 = (0);
var G__55116 = (0);
seq__54758_55080 = G__55113;
chunk__54762_55081 = G__55114;
count__54763_55082 = G__55115;
i__54764_55083 = G__55116;
continue;
}
} else {
var G__55117 = cljs.core.next(seq__54758_55100__$1);
var G__55118 = null;
var G__55119 = (0);
var G__55120 = (0);
seq__54758_55080 = G__55117;
chunk__54762_55081 = G__55118;
count__54763_55082 = G__55119;
i__54764_55083 = G__55120;
continue;
}
}
} else {
}
}
break;
}


var G__55121 = cljs.core.next(seq__54673__$1);
var G__55122 = null;
var G__55123 = (0);
var G__55124 = (0);
seq__54673 = G__55121;
chunk__54675 = G__55122;
count__54676 = G__55123;
i__54677 = G__55124;
continue;
} else {
var G__55125 = cljs.core.next(seq__54673__$1);
var G__55126 = null;
var G__55127 = (0);
var G__55128 = (0);
seq__54673 = G__55125;
chunk__54675 = G__55126;
count__54676 = G__55127;
i__54677 = G__55128;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__54802){
var map__54803 = p__54802;
var map__54803__$1 = (((((!((map__54803 == null))))?(((((map__54803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54803):map__54803);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54803__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.client_info = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null);
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__54841){
var map__54842 = p__54841;
var map__54842__$1 = (((((!((map__54842 == null))))?(((((map__54842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54842.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54842):map__54842);
var _ = map__54842__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54842__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__54848,done,error){
var map__54849 = p__54848;
var map__54849__$1 = (((((!((map__54849 == null))))?(((((map__54849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54849.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54849):map__54849);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54849__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__54853,done,error){
var map__54856 = p__54853;
var map__54856__$1 = (((((!((map__54856 == null))))?(((((map__54856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54856.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54856):map__54856);
var msg = map__54856__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54856__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54856__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54856__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__54859){
var map__54860 = p__54859;
var map__54860__$1 = (((((!((map__54860 == null))))?(((((map__54860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54860.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54860):map__54860);
var src = map__54860__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54860__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__54863 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__54863) : done.call(null,G__54863));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__54865){
var map__54866 = p__54865;
var map__54866__$1 = (((((!((map__54866 == null))))?(((((map__54866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54866.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54866):map__54866);
var msg__$1 = map__54866__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54866__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e54868){var ex = e54868;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__54869){
var map__54870 = p__54869;
var map__54870__$1 = (((((!((map__54870 == null))))?(((((map__54870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54870):map__54870);
var env = map__54870__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54870__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__54876){
var map__54877 = p__54876;
var map__54877__$1 = (((((!((map__54877 == null))))?(((((map__54877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54877):map__54877);
var msg = map__54877__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54877__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__54884){
var map__54885 = p__54884;
var map__54885__$1 = (((((!((map__54885 == null))))?(((((map__54885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54885):map__54885);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54885__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54885__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__54891){
var map__54892 = p__54891;
var map__54892__$1 = (((((!((map__54892 == null))))?(((((map__54892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54892.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54892):map__54892);
var svc = map__54892__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54892__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map

goog.provide('posh.lib.q_analyze');
posh.lib.q_analyze.take_until = (function posh$lib$q_analyze$take_until(stop_at_QMARK_,ls){
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.empty_QMARK_(ls);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var G__54300 = cljs.core.first(ls);
return (stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__54300) : stop_at_QMARK_.call(null,G__54300));
}
})())){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons(cljs.core.first(ls),(function (){var G__54301 = stop_at_QMARK_;
var G__54302 = cljs.core.rest(ls);
return (posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2(G__54301,G__54302) : posh.lib.q_analyze.take_until.call(null,G__54301,G__54302));
})());
}
});
posh.lib.q_analyze.rest_at = (function posh$lib$q_analyze$rest_at(rest_at_QMARK_,ls){
while(true){
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.empty_QMARK_(ls);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var G__54309 = cljs.core.first(ls);
return (rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__54309) : rest_at_QMARK_.call(null,G__54309));
}
})())){
return ls;
} else {
var G__55421 = rest_at_QMARK_;
var G__55422 = cljs.core.rest(ls);
rest_at_QMARK_ = G__55421;
ls = G__55422;
continue;
}
break;
}
});
posh.lib.q_analyze.split_list_at = (function posh$lib$q_analyze$split_list_at(split_at_QMARK_,ls){
if(cljs.core.empty_QMARK_(ls)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ls),posh.lib.q_analyze.take_until(split_at_QMARK_,posh.lib.q_analyze.take_until(split_at_QMARK_,cljs.core.rest(ls)))]),(function (){var G__54321 = split_at_QMARK_;
var G__54322 = posh.lib.q_analyze.rest_at(split_at_QMARK_,cljs.core.rest(ls));
return (posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2(G__54321,G__54322) : posh.lib.q_analyze.split_list_at.call(null,G__54321,G__54322));
})()], 0));
}
});
posh.lib.q_analyze.query_to_map = (function posh$lib$q_analyze$query_to_map(query){
if((!(cljs.core.map_QMARK_(query)))){
return posh.lib.q_analyze.split_list_at(cljs.core.keyword_QMARK_,query);
} else {
return query;
}
});
posh.lib.q_analyze.dbvar_QMARK_ = (function posh$lib$q_analyze$dbvar_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)),"$")));
});
posh.lib.q_analyze.qvar_QMARK_ = (function posh$lib$q_analyze$qvar_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)),"?")));
});
posh.lib.q_analyze.get_all_vars = (function posh$lib$q_analyze$get_all_vars(query){
if(cljs.core.empty_QMARK_(query)){
return cljs.core.PersistentHashSet.EMPTY;
} else {
if(cljs.core.coll_QMARK_(cljs.core.first(query))){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2((function (){var G__54344 = cljs.core.first(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__54344) : posh.lib.q_analyze.get_all_vars.call(null,G__54344));
})(),(function (){var G__54345 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__54345) : posh.lib.q_analyze.get_all_vars.call(null,G__54345));
})());
} else {
if(posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(query))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__54350 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__54350) : posh.lib.q_analyze.get_all_vars.call(null,G__54350));
})(),cljs.core.first(query));
} else {
var G__54355 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__54355) : posh.lib.q_analyze.get_all_vars.call(null,G__54355));

}
}
}
});
posh.lib.q_analyze.qvar_gen = (function (){var qvar_count = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((3284832));
return (function (){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["?var",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(qvar_count,cljs.core.inc))].join(''));
});
})();
posh.lib.q_analyze.eav_QMARK_ = (function posh$lib$q_analyze$eav_QMARK_(v){
return ((cljs.core.vector_QMARK_(v)) && ((!(((cljs.core.coll_QMARK_(cljs.core.first(v))) || (cljs.core.coll_QMARK_(cljs.core.second(v))))))));
});
posh.lib.q_analyze.wildcard_QMARK_ = (function posh$lib$q_analyze$wildcard_QMARK_(s){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.Symbol(null,"_","_",-1201019570,null));
});
posh.lib.q_analyze.normalize_eav_helper = (function posh$lib$q_analyze$normalize_eav_helper(eav,n,neweav,vars){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(0))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eav","eav",-1118737308),neweav,new cljs.core.Keyword(null,"vars","vars",-2046957217),vars], null);
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.first(eav);
if(cljs.core.truth_(and__4115__auto__)){
return (!(posh.lib.q_analyze.wildcard_QMARK_(cljs.core.first(eav))));
} else {
return and__4115__auto__;
}
})())){
var G__54399 = cljs.core.rest(eav);
var G__54400 = (n - (1));
var G__54401 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,cljs.core.first(eav));
var G__54402 = vars;
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__54399,G__54400,G__54401,G__54402) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__54399,G__54400,G__54401,G__54402));
} else {
var var$ = posh.lib.q_analyze.qvar_gen();
var G__54404 = cljs.core.rest(eav);
var G__54405 = (n - (1));
var G__54406 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,var$);
var G__54407 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vars,var$);
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__54404,G__54405,G__54406,G__54407) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__54404,G__54405,G__54406,G__54407));
}
}
});
posh.lib.q_analyze.normalize_eav = (function posh$lib$q_analyze$normalize_eav(eav){
var dbeav = ((posh.lib.q_analyze.dbvar_QMARK_(cljs.core.first(eav)))?eav:cljs.core.cons(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("$"),eav));
return cljs.core.vec(cljs.core.cons(cljs.core.first(dbeav),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"eav","eav",-1118737308).cljs$core$IFn$_invoke$arity$1(posh.lib.q_analyze.normalize_eav_helper(cljs.core.rest(dbeav),(3),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY)),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((4),dbeav))));
});
posh.lib.q_analyze.normalize_all_eavs = (function posh$lib$q_analyze$normalize_all_eavs(where){
if(cljs.core.empty_QMARK_(where)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.list_QMARK_(where)){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(where)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.Symbol(null,"not-join","not-join",-645515756,null)], null)))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(where),cljs.core.second(where)], null),(function (){var G__54427 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__54427) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__54427));
})());
} else {
return cljs.core.cons(cljs.core.first(where),(function (){var G__54428 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__54428) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__54428));
})());
}
} else {
if(posh.lib.q_analyze.eav_QMARK_(where)){
return posh.lib.q_analyze.normalize_eav(where);
} else {
if(((cljs.core.vector_QMARK_(where)) && (cljs.core.list_QMARK_(cljs.core.first(where))))){
return where;
} else {
if(cljs.core.coll_QMARK_(where)){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.normalize_all_eavs,where));
} else {
return where;

}
}
}
}
}
});
posh.lib.q_analyze.get_eavs = (function posh$lib$q_analyze$get_eavs(where){
if(cljs.core.empty_QMARK_(where)){
return cljs.core.PersistentVector.EMPTY;
} else {
var item = cljs.core.first(where);
if(cljs.core.seq_QMARK_(item)){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(item)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.Symbol(null,"not-join","not-join",-645515756,null)], null)))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__54446 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__54446) : posh.lib.q_analyze.get_eavs.call(null,G__54446));
})(),(function (){var G__54447 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__54447) : posh.lib.q_analyze.get_eavs.call(null,G__54447));
})());
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__54448 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__54448) : posh.lib.q_analyze.get_eavs.call(null,G__54448));
})(),(function (){var G__54449 = cljs.core.vec(cljs.core.rest(item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__54449) : posh.lib.q_analyze.get_eavs.call(null,G__54449));
})());
}
} else {
if(posh.lib.q_analyze.eav_QMARK_(item)){
return cljs.core.cons(item,(function (){var G__54454 = cljs.core.rest(where);
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__54454) : posh.lib.q_analyze.get_eavs.call(null,G__54454));
})());
} else {
if(((cljs.core.vector_QMARK_(item)) && (cljs.core.seq_QMARK_(cljs.core.first(item))))){
var ocr_54465 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(cljs.core.first(item))], null),cljs.core.rest(item)));
try{if(((cljs.core.vector_QMARK_(ocr_54465)) && ((cljs.core.count(ocr_54465) === 2)))){
try{var ocr_54465_0__54480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54465,(0));
if(((cljs.core.vector_QMARK_(ocr_54465_0__54480)) && ((cljs.core.count(ocr_54465_0__54480) === 5)))){
try{var ocr_54465_0__54480_0__54483 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54465_0__54480,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_54465_0__54480_0__54483,new cljs.core.Symbol(null,"get-else","get-else",1312024065,null))){
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54465_0__54480,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54465_0__54480,(2));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54465_0__54480,(3));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54465,(1));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [db,e,a,v], null)], null),(function (){var G__54518 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__54518) : posh.lib.q_analyze.get_eavs.call(null,G__54518));
})());
} else {
throw cljs.core.match.backtrack;

}
}catch (e54507){if((e54507 instanceof Error)){
var e__53072__auto__ = e54507;
if((e__53072__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto__;
}
} else {
throw e54507;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e54503){if((e54503 instanceof Error)){
var e__53072__auto__ = e54503;
if((e__53072__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto__;
}
} else {
throw e54503;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e54499){if((e54499 instanceof Error)){
var e__53072__auto__ = e54499;
if((e__53072__auto__ === cljs.core.match.backtrack)){
var G__54501 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__54501) : posh.lib.q_analyze.get_eavs.call(null,G__54501));
} else {
throw e__53072__auto__;
}
} else {
throw e54499;

}
}} else {
var G__54520 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__54520) : posh.lib.q_analyze.get_eavs.call(null,G__54520));

}
}
}
}
});
posh.lib.q_analyze.qm_to_query = (function posh$lib$q_analyze$qm_to_query(qm){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (xs,p__54525){
var vec__54528 = p__54525;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54528,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54528,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(xs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
}),cljs.core.PersistentVector.EMPTY,qm);
});
posh.lib.q_analyze.create_q_datoms = (function posh$lib$q_analyze$create_q_datoms(results,eavs,vars){
return cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (r){
var vs = cljs.core.zipmap(vars,r);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (eav){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54531_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__54531_SHARP_)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vs,p1__54531_SHARP_);
} else {
return p1__54531_SHARP_;
}
}),eav));
}),eavs);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([results], 0)));
});
posh.lib.q_analyze.count_qvars = (function posh$lib$q_analyze$count_qvars(xs){
if(cljs.core.empty_QMARK_(xs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.coll_QMARK_(cljs.core.first(xs))){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__54536 = cljs.core.first(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__54536) : posh.lib.q_analyze.count_qvars.call(null,G__54536));
})(),(function (){var G__54537 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__54537) : posh.lib.q_analyze.count_qvars.call(null,G__54537));
})()], 0));
} else {
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(xs)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(xs),(1)]):null),(function (){var G__54538 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__54538) : posh.lib.q_analyze.count_qvars.call(null,G__54538));
})()], 0));

}
}
});
posh.lib.q_analyze.fill_qvar_set = (function posh$lib$q_analyze$fill_qvar_set(qvar,results,where){
var iter__4529__auto__ = (function posh$lib$q_analyze$fill_qvar_set_$_iter__54544(s__54545){
return (new cljs.core.LazySeq(null,(function (){
var s__54545__$1 = s__54545;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__54545__$1);
if(temp__5735__auto__){
var s__54545__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__54545__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__54545__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__54547 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__54546 = (0);
while(true){
if((i__54546 < size__4528__auto__)){
var r = cljs.core._nth(c__4527__auto__,i__54546);
cljs.core.chunk_append(b__54547,(function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})());

var G__55495 = (i__54546 + (1));
i__54546 = G__55495;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54547),posh$lib$q_analyze$fill_qvar_set_$_iter__54544(cljs.core.chunk_rest(s__54545__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54547),null);
}
} else {
var r = cljs.core.first(s__54545__$2);
return cljs.core.cons((function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})(),posh$lib$q_analyze$fill_qvar_set_$_iter__54544(cljs.core.rest(s__54545__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(results);
});
posh.lib.q_analyze.seq_merge_with = (function posh$lib$q_analyze$seq_merge_with(f,seq1,seq2){
if(cljs.core.empty_QMARK_(seq1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons((function (){var G__54552 = cljs.core.first(seq1);
var G__54553 = cljs.core.first(seq2);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__54552,G__54553) : f.call(null,G__54552,G__54553));
})(),(function (){var G__54555 = f;
var G__54556 = cljs.core.rest(seq1);
var G__54557 = cljs.core.rest(seq2);
return (posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3(G__54555,G__54556,G__54557) : posh.lib.q_analyze.seq_merge_with.call(null,G__54555,G__54556,G__54557));
})());
}
});
posh.lib.q_analyze.stack_vectors = (function posh$lib$q_analyze$stack_vectors(vs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (stacked,eav){
return posh.lib.q_analyze.seq_merge_with(cljs.core.conj,stacked,eav);
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.first(vs)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),vs);
});
posh.lib.q_analyze.pattern_from_eav__old = (function posh$lib$q_analyze$pattern_from_eav__old(vars,p__54566){
var vec__54568 = p__54566;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54568,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54568,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54568,(2),null);
var eav = vec__54568;
var vec__54573 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav);
var qe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54573,(0),null);
var qa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54573,(1),null);
var qv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54573,(2),null);
var iter__4529__auto__ = (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__54577(s__54578){
return (new cljs.core.LazySeq(null,(function (){
var s__54578__$1 = s__54578;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__54578__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var ee = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__54578__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__54573,qe,qa,qv,vec__54568,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__54577_$_iter__54579(s__54580){
return (new cljs.core.LazySeq(null,((function (s__54578__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__54573,qe,qa,qv,vec__54568,e,a,v,eav){
return (function (){
var s__54580__$1 = s__54580;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__54580__$1);
if(temp__5735__auto____$1){
var xs__6292__auto____$1 = temp__5735__auto____$1;
var aa = cljs.core.first(xs__6292__auto____$1);
var iterys__4525__auto__ = ((function (s__54580__$1,s__54578__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__54573,qe,qa,qv,vec__54568,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__54577_$_iter__54579_$_iter__54581(s__54582){
return (new cljs.core.LazySeq(null,((function (s__54580__$1,s__54578__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__54573,qe,qa,qv,vec__54568,e,a,v,eav){
return (function (){
var s__54582__$1 = s__54582;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__54582__$1);
if(temp__5735__auto____$2){
var s__54582__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__54582__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__54582__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__54584 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__54583 = (0);
while(true){
if((i__54583 < size__4528__auto__)){
var vv = cljs.core._nth(c__4527__auto__,i__54583);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__54583,s__54582__$1,s__54580__$1,s__54578__$1,vv,c__4527__auto__,size__4528__auto__,b__54584,s__54582__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__54573,qe,qa,qv,vec__54568,e,a,v,eav){
return (function (p1__54564_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__54564_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__54583,s__54582__$1,s__54580__$1,s__54578__$1,vv,c__4527__auto__,size__4528__auto__,b__54584,s__54582__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__54573,qe,qa,qv,vec__54568,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__54583,s__54582__$1,s__54580__$1,s__54578__$1,wildcard_count,vv,c__4527__auto__,size__4528__auto__,b__54584,s__54582__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__54573,qe,qa,qv,vec__54568,e,a,v,eav){
return (function (p__54602){
var vec__54603 = p__54602;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54603,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54603,(1),null);
if(cljs.core.truth_((function (){var and__4115__auto__ = var_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,new cljs.core.Symbol(null,"_","_",-1201019570,null));
} else {
return and__4115__auto__;
}
})())){
return (1);
} else {
return (0);
}
});})(i__54583,s__54582__$1,s__54580__$1,s__54578__$1,wildcard_count,vv,c__4527__auto__,size__4528__auto__,b__54584,s__54582__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__54573,qe,qa,qv,vec__54568,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__54583,s__54582__$1,s__54580__$1,s__54578__$1,wildcard_count,exposed_qvars,vv,c__4527__auto__,size__4528__auto__,b__54584,s__54582__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__54573,qe,qa,qv,vec__54568,e,a,v,eav){
return (function (p1__54565_SHARP_){
if(cljs.core.truth_(p1__54565_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__54583,s__54582__$1,s__54580__$1,s__54578__$1,wildcard_count,exposed_qvars,vv,c__4527__auto__,size__4528__auto__,b__54584,s__54582__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__54573,qe,qa,qv,vec__54568,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
cljs.core.chunk_append(b__54584,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null));

var G__55540 = (i__54583 + (1));
i__54583 = G__55540;
continue;
} else {
var G__55541 = (i__54583 + (1));
i__54583 = G__55541;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54584),posh$lib$q_analyze$pattern_from_eav__old_$_iter__54577_$_iter__54579_$_iter__54581(cljs.core.chunk_rest(s__54582__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54584),null);
}
} else {
var vv = cljs.core.first(s__54582__$2);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__54582__$1,s__54580__$1,s__54578__$1,vv,s__54582__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__54573,qe,qa,qv,vec__54568,e,a,v,eav){
return (function (p1__54564_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__54564_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__54582__$1,s__54580__$1,s__54578__$1,vv,s__54582__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__54573,qe,qa,qv,vec__54568,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__54582__$1,s__54580__$1,s__54578__$1,wildcard_count,vv,s__54582__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__54573,qe,qa,qv,vec__54568,e,a,v,eav){
return (function (p__54610){
var vec__54611 = p__54610;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54611,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54611,(1),null);
if(cljs.core.truth_((function (){var and__4115__auto__ = var_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,new cljs.core.Symbol(null,"_","_",-1201019570,null));
} else {
return and__4115__auto__;
}
})())){
return (1);
} else {
return (0);
}
});})(s__54582__$1,s__54580__$1,s__54578__$1,wildcard_count,vv,s__54582__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__54573,qe,qa,qv,vec__54568,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__54582__$1,s__54580__$1,s__54578__$1,wildcard_count,exposed_qvars,vv,s__54582__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__54573,qe,qa,qv,vec__54568,e,a,v,eav){
return (function (p1__54565_SHARP_){
if(cljs.core.truth_(p1__54565_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__54582__$1,s__54580__$1,s__54578__$1,wildcard_count,exposed_qvars,vv,s__54582__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__54573,qe,qa,qv,vec__54568,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null),posh$lib$q_analyze$pattern_from_eav__old_$_iter__54577_$_iter__54579_$_iter__54581(cljs.core.rest(s__54582__$2)));
} else {
var G__55545 = cljs.core.rest(s__54582__$2);
s__54582__$1 = G__55545;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__54580__$1,s__54578__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__54573,qe,qa,qv,vec__54568,e,a,v,eav))
,null,null));
});})(s__54580__$1,s__54578__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__54573,qe,qa,qv,vec__54568,e,a,v,eav))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__((cljs.core.truth_(qv)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,v)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null))));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__54577_$_iter__54579(cljs.core.rest(s__54580__$1)));
} else {
var G__55549 = cljs.core.rest(s__54580__$1);
s__54580__$1 = G__55549;
continue;
}
} else {
return null;
}
break;
}
});})(s__54578__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__54573,qe,qa,qv,vec__54568,e,a,v,eav))
,null,null));
});})(s__54578__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__54573,qe,qa,qv,vec__54568,e,a,v,eav))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__((cljs.core.truth_(qa)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,a)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null))));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__54577(cljs.core.rest(s__54578__$1)));
} else {
var G__55551 = cljs.core.rest(s__54578__$1);
s__54578__$1 = G__55551;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__((cljs.core.truth_(qe)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,e)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null)));
});
posh.lib.q_analyze.get_ = (function posh$lib$q_analyze$get_(m,k){

var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
}
});
posh.lib.q_analyze.pattern_from_eav = (function posh$lib$q_analyze$pattern_from_eav(vars,eav){
var ocr_54634 = cljs.core.vec(eav);
var ocr_54635 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_54634)) && ((cljs.core.count(ocr_54634) === 3)))){
try{var ocr_54634_0__54667 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_54634_0__54667,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_54634_1__54668 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_54634_1__54668,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_54634_2__54669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_54634_2__54669,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e54947){if((e54947 instanceof Error)){
var e__53072__auto__ = e54947;
if((e__53072__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_54635)) && ((cljs.core.count(ocr_54635) === 3)))){
try{var ocr_54635_2__54693 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54635,(2));
if((ocr_54635_2__54693 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e54960){if((e54960 instanceof Error)){
var e__53072__auto____$1 = e54960;
if((e__53072__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_54635_2__54693 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54635,(2));
if((ocr_54635_2__54693 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e54961){if((e54961 instanceof Error)){
var e__53072__auto____$2 = e54961;
if((e__53072__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$2;
}
} else {
throw e54961;

}
}} else {
throw e__53072__auto____$1;
}
} else {
throw e54960;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e54952){if((e54952 instanceof Error)){
var e__53072__auto____$1 = e54952;
if((e__53072__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$1;
}
} else {
throw e54952;

}
}} else {
throw e__53072__auto__;
}
} else {
throw e54947;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e54939){if((e54939 instanceof Error)){
var e__53072__auto__ = e54939;
if((e__53072__auto__ === cljs.core.match.backtrack)){
try{var ocr_54634_2__54669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_54634_2__54669,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_54635)) && ((cljs.core.count(ocr_54635) === 3)))){
try{var ocr_54635_1__54696 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54635,(1));
if((ocr_54635_1__54696 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e54942){if((e54942 instanceof Error)){
var e__53072__auto____$1 = e54942;
if((e__53072__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_54635_1__54696 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54635,(1));
if((ocr_54635_1__54696 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e54943){if((e54943 instanceof Error)){
var e__53072__auto____$2 = e54943;
if((e__53072__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$2;
}
} else {
throw e54943;

}
}} else {
throw e__53072__auto____$1;
}
} else {
throw e54942;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e54941){if((e54941 instanceof Error)){
var e__53072__auto____$1 = e54941;
if((e__53072__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$1;
}
} else {
throw e54941;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e54940){if((e54940 instanceof Error)){
var e__53072__auto____$1 = e54940;
if((e__53072__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$1;
}
} else {
throw e54940;

}
}} else {
throw e__53072__auto__;
}
} else {
throw e54939;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e54752){if((e54752 instanceof Error)){
var e__53072__auto__ = e54752;
if((e__53072__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_54635)) && ((cljs.core.count(ocr_54635) === 3)))){
try{var ocr_54635_0__54701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54635,(0));
if((ocr_54635_0__54701 === false)){
try{var ocr_54634_1__54668 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_54634_1__54668,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_54634_2__54669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_54634_2__54669,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e54938){if((e54938 instanceof Error)){
var e__53072__auto____$1 = e54938;
if((e__53072__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$1;
}
} else {
throw e54938;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e54932){if((e54932 instanceof Error)){
var e__53072__auto____$1 = e54932;
if((e__53072__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$1;
}
} else {
throw e54932;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e54757){if((e54757 instanceof Error)){
var e__53072__auto____$1 = e54757;
if((e__53072__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_54635_0__54701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54635,(0));
if((ocr_54635_0__54701 === true)){
try{var ocr_54634_2__54669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_54634_2__54669,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_54634_1__54668 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_54634_1__54668,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e54915){if((e54915 instanceof Error)){
var e__53072__auto____$2 = e54915;
if((e__53072__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_54635_1__54703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54635,(1));
if((ocr_54635_1__54703 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e54917){if((e54917 instanceof Error)){
var e__53072__auto____$3 = e54917;
if((e__53072__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_54635_1__54703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54635,(1));
if((ocr_54635_1__54703 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e54918){if((e54918 instanceof Error)){
var e__53072__auto____$4 = e54918;
if((e__53072__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$4;
}
} else {
throw e54918;

}
}} else {
throw e__53072__auto____$3;
}
} else {
throw e54917;

}
}} else {
throw e__53072__auto____$2;
}
} else {
throw e54915;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e54914){if((e54914 instanceof Error)){
var e__53072__auto____$2 = e54914;
if((e__53072__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$2;
}
} else {
throw e54914;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e54768){if((e54768 instanceof Error)){
var e__53072__auto____$2 = e54768;
if((e__53072__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_54635_0__54701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54635,(0));
if((ocr_54635_0__54701 === false)){
try{var ocr_54635_1__54703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54635,(1));
if((ocr_54635_1__54703 === true)){
try{var ocr_54634_2__54669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_54634_2__54669,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e54909){if((e54909 instanceof Error)){
var e__53072__auto____$3 = e54909;
if((e__53072__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$3;
}
} else {
throw e54909;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e54901){if((e54901 instanceof Error)){
var e__53072__auto____$3 = e54901;
if((e__53072__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_54635_1__54703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54635,(1));
if((ocr_54635_1__54703 === false)){
try{var ocr_54634_2__54669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_54634_2__54669,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e54903){if((e54903 instanceof Error)){
var e__53072__auto____$4 = e54903;
if((e__53072__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$4;
}
} else {
throw e54903;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e54902){if((e54902 instanceof Error)){
var e__53072__auto____$4 = e54902;
if((e__53072__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$4;
}
} else {
throw e54902;

}
}} else {
throw e__53072__auto____$3;
}
} else {
throw e54901;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e54769){if((e54769 instanceof Error)){
var e__53072__auto____$3 = e54769;
if((e__53072__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_54635_2__54704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54635,(2));
if((ocr_54635_2__54704 === true)){
try{var ocr_54635_0__54701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54635,(0));
if((ocr_54635_0__54701 === true)){
try{var ocr_54634_1__54668 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_54634_1__54668,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e54900){if((e54900 instanceof Error)){
var e__53072__auto____$4 = e54900;
if((e__53072__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$4;
}
} else {
throw e54900;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e54898){if((e54898 instanceof Error)){
var e__53072__auto____$4 = e54898;
if((e__53072__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$4;
}
} else {
throw e54898;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e54770){if((e54770 instanceof Error)){
var e__53072__auto____$4 = e54770;
if((e__53072__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_54635_2__54704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54635,(2));
if((ocr_54635_2__54704 === false)){
try{var ocr_54635_0__54701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54635,(0));
if((ocr_54635_0__54701 === true)){
try{var ocr_54634_1__54668 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_54634_1__54668,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e54895){if((e54895 instanceof Error)){
var e__53072__auto____$5 = e54895;
if((e__53072__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$5;
}
} else {
throw e54895;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e54894){if((e54894 instanceof Error)){
var e__53072__auto____$5 = e54894;
if((e__53072__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$5;
}
} else {
throw e54894;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e54772){if((e54772 instanceof Error)){
var e__53072__auto____$5 = e54772;
if((e__53072__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_54635_2__54704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54635,(2));
if((ocr_54635_2__54704 === true)){
try{var ocr_54635_0__54701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54635,(0));
if((ocr_54635_0__54701 === false)){
try{var ocr_54634_1__54668 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_54634_1__54668,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e54888){if((e54888 instanceof Error)){
var e__53072__auto____$6 = e54888;
if((e__53072__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$6;
}
} else {
throw e54888;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e54887){if((e54887 instanceof Error)){
var e__53072__auto____$6 = e54887;
if((e__53072__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$6;
}
} else {
throw e54887;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e54773){if((e54773 instanceof Error)){
var e__53072__auto____$6 = e54773;
if((e__53072__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_54635_2__54704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54635,(2));
if((ocr_54635_2__54704 === false)){
try{var ocr_54635_0__54701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54635,(0));
if((ocr_54635_0__54701 === false)){
try{var ocr_54634_1__54668 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_54634_1__54668,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e54883){if((e54883 instanceof Error)){
var e__53072__auto____$7 = e54883;
if((e__53072__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$7;
}
} else {
throw e54883;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e54882){if((e54882 instanceof Error)){
var e__53072__auto____$7 = e54882;
if((e__53072__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$7;
}
} else {
throw e54882;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e54774){if((e54774 instanceof Error)){
var e__53072__auto____$7 = e54774;
if((e__53072__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_54635_2__54704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54635,(2));
if((ocr_54635_2__54704 === true)){
try{var ocr_54635_1__54703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54635,(1));
if((ocr_54635_1__54703 === true)){
try{var ocr_54634_0__54667 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_54634_0__54667,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e54875){if((e54875 instanceof Error)){
var e__53072__auto____$8 = e54875;
if((e__53072__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$8;
}
} else {
throw e54875;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e54874){if((e54874 instanceof Error)){
var e__53072__auto____$8 = e54874;
if((e__53072__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$8;
}
} else {
throw e54874;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e54775){if((e54775 instanceof Error)){
var e__53072__auto____$8 = e54775;
if((e__53072__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_54635_2__54704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54635,(2));
if((ocr_54635_2__54704 === false)){
try{var ocr_54635_1__54703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54635,(1));
if((ocr_54635_1__54703 === true)){
try{var ocr_54634_0__54667 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_54634_0__54667,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e54873){if((e54873 instanceof Error)){
var e__53072__auto____$9 = e54873;
if((e__53072__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$9;
}
} else {
throw e54873;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e54871){if((e54871 instanceof Error)){
var e__53072__auto____$9 = e54871;
if((e__53072__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$9;
}
} else {
throw e54871;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e54776){if((e54776 instanceof Error)){
var e__53072__auto____$9 = e54776;
if((e__53072__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_54635_2__54704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54635,(2));
if((ocr_54635_2__54704 === true)){
try{var ocr_54635_1__54703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54635,(1));
if((ocr_54635_1__54703 === false)){
try{var ocr_54634_0__54667 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_54634_0__54667,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e54864){if((e54864 instanceof Error)){
var e__53072__auto____$10 = e54864;
if((e__53072__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$10;
}
} else {
throw e54864;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e54862){if((e54862 instanceof Error)){
var e__53072__auto____$10 = e54862;
if((e__53072__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$10;
}
} else {
throw e54862;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e54778){if((e54778 instanceof Error)){
var e__53072__auto____$10 = e54778;
if((e__53072__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_54635_2__54704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54635,(2));
if((ocr_54635_2__54704 === false)){
try{var ocr_54635_1__54703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54635,(1));
if((ocr_54635_1__54703 === false)){
try{var ocr_54634_0__54667 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_54634_0__54667,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e54858){if((e54858 instanceof Error)){
var e__53072__auto____$11 = e54858;
if((e__53072__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$11;
}
} else {
throw e54858;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e54854){if((e54854 instanceof Error)){
var e__53072__auto____$11 = e54854;
if((e__53072__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$11;
}
} else {
throw e54854;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e54779){if((e54779 instanceof Error)){
var e__53072__auto____$11 = e54779;
if((e__53072__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_54635_2__54704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54635,(2));
if((ocr_54635_2__54704 === true)){
try{var ocr_54635_0__54701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54635,(0));
if((ocr_54635_0__54701 === true)){
try{var ocr_54635_1__54703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54635,(1));
if((ocr_54635_1__54703 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e54847){if((e54847 instanceof Error)){
var e__53072__auto____$12 = e54847;
if((e__53072__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$12;
}
} else {
throw e54847;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e54821){if((e54821 instanceof Error)){
var e__53072__auto____$12 = e54821;
if((e__53072__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_54635_0__54701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54635,(0));
if((ocr_54635_0__54701 === false)){
try{var ocr_54635_1__54703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54635,(1));
if((ocr_54635_1__54703 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e54840){if((e54840 instanceof Error)){
var e__53072__auto____$13 = e54840;
if((e__53072__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$13;
}
} else {
throw e54840;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e54823){if((e54823 instanceof Error)){
var e__53072__auto____$13 = e54823;
if((e__53072__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_54635_0__54701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54635,(0));
if((ocr_54635_0__54701 === true)){
try{var ocr_54635_1__54703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54635,(1));
if((ocr_54635_1__54703 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e54836){if((e54836 instanceof Error)){
var e__53072__auto____$14 = e54836;
if((e__53072__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$14;
}
} else {
throw e54836;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e54826){if((e54826 instanceof Error)){
var e__53072__auto____$14 = e54826;
if((e__53072__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$14;
}
} else {
throw e54826;

}
}} else {
throw e__53072__auto____$13;
}
} else {
throw e54823;

}
}} else {
throw e__53072__auto____$12;
}
} else {
throw e54821;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e54780){if((e54780 instanceof Error)){
var e__53072__auto____$12 = e54780;
if((e__53072__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_54635_2__54704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54635,(2));
if((ocr_54635_2__54704 === false)){
try{var ocr_54635_0__54701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54635,(0));
if((ocr_54635_0__54701 === true)){
try{var ocr_54635_1__54703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54635,(1));
if((ocr_54635_1__54703 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e54809){if((e54809 instanceof Error)){
var e__53072__auto____$13 = e54809;
if((e__53072__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$13;
}
} else {
throw e54809;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e54808){if((e54808 instanceof Error)){
var e__53072__auto____$13 = e54808;
if((e__53072__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$13;
}
} else {
throw e54808;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e54781){if((e54781 instanceof Error)){
var e__53072__auto____$13 = e54781;
if((e__53072__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_54635_2__54704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54635,(2));
if((ocr_54635_2__54704 === true)){
try{var ocr_54635_0__54701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54635,(0));
if((ocr_54635_0__54701 === false)){
try{var ocr_54635_1__54703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54635,(1));
if((ocr_54635_1__54703 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e54801){if((e54801 instanceof Error)){
var e__53072__auto____$14 = e54801;
if((e__53072__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$14;
}
} else {
throw e54801;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e54800){if((e54800 instanceof Error)){
var e__53072__auto____$14 = e54800;
if((e__53072__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$14;
}
} else {
throw e54800;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e54782){if((e54782 instanceof Error)){
var e__53072__auto____$14 = e54782;
if((e__53072__auto____$14 === cljs.core.match.backtrack)){
try{var ocr_54635_2__54704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54635,(2));
if((ocr_54635_2__54704 === false)){
try{var ocr_54635_0__54701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54635,(0));
if((ocr_54635_0__54701 === true)){
try{var ocr_54635_1__54703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54635,(1));
if((ocr_54635_1__54703 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e54797){if((e54797 instanceof Error)){
var e__53072__auto____$15 = e54797;
if((e__53072__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$15;
}
} else {
throw e54797;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e54788){if((e54788 instanceof Error)){
var e__53072__auto____$15 = e54788;
if((e__53072__auto____$15 === cljs.core.match.backtrack)){
try{var ocr_54635_0__54701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54635,(0));
if((ocr_54635_0__54701 === false)){
try{var ocr_54635_1__54703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54635,(1));
if((ocr_54635_1__54703 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e54790){if((e54790 instanceof Error)){
var e__53072__auto____$16 = e54790;
if((e__53072__auto____$16 === cljs.core.match.backtrack)){
try{var ocr_54635_1__54703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54635,(1));
if((ocr_54635_1__54703 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54634,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e54791){if((e54791 instanceof Error)){
var e__53072__auto____$17 = e54791;
if((e__53072__auto____$17 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$17;
}
} else {
throw e54791;

}
}} else {
throw e__53072__auto____$16;
}
} else {
throw e54790;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e54789){if((e54789 instanceof Error)){
var e__53072__auto____$16 = e54789;
if((e__53072__auto____$16 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$16;
}
} else {
throw e54789;

}
}} else {
throw e__53072__auto____$15;
}
} else {
throw e54788;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e54785){if((e54785 instanceof Error)){
var e__53072__auto____$15 = e54785;
if((e__53072__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$15;
}
} else {
throw e54785;

}
}} else {
throw e__53072__auto____$14;
}
} else {
throw e54782;

}
}} else {
throw e__53072__auto____$13;
}
} else {
throw e54781;

}
}} else {
throw e__53072__auto____$12;
}
} else {
throw e54780;

}
}} else {
throw e__53072__auto____$11;
}
} else {
throw e54779;

}
}} else {
throw e__53072__auto____$10;
}
} else {
throw e54778;

}
}} else {
throw e__53072__auto____$9;
}
} else {
throw e54776;

}
}} else {
throw e__53072__auto____$8;
}
} else {
throw e54775;

}
}} else {
throw e__53072__auto____$7;
}
} else {
throw e54774;

}
}} else {
throw e__53072__auto____$6;
}
} else {
throw e54773;

}
}} else {
throw e__53072__auto____$5;
}
} else {
throw e54772;

}
}} else {
throw e__53072__auto____$4;
}
} else {
throw e54770;

}
}} else {
throw e__53072__auto____$3;
}
} else {
throw e54769;

}
}} else {
throw e__53072__auto____$2;
}
} else {
throw e54768;

}
}} else {
throw e__53072__auto____$1;
}
} else {
throw e54757;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e54753){if((e54753 instanceof Error)){
var e__53072__auto____$1 = e54753;
if((e__53072__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$1;
}
} else {
throw e54753;

}
}} else {
throw e__53072__auto__;
}
} else {
throw e54752;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e54751){if((e54751 instanceof Error)){
var e__53072__auto__ = e54751;
if((e__53072__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__53072__auto__;
}
} else {
throw e54751;

}
}});
posh.lib.q_analyze.filter_pattern_from_eav = (function posh$lib$q_analyze$filter_pattern_from_eav(vars,eav){
var ocr_54988 = cljs.core.vec(eav);
var ocr_54989 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_54988)) && ((cljs.core.count(ocr_54988) === 3)))){
try{var ocr_54988_0__55020 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54988,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_54988_0__55020,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_54988_1__55021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54988,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_54988_1__55021,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_54988_2__55022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54988,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_54988_2__55022,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return cljs.core.PersistentVector.EMPTY;
} else {
throw cljs.core.match.backtrack;

}
}catch (e55253){if((e55253 instanceof Error)){
var e__53072__auto__ = e55253;
if((e__53072__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_54989)) && ((cljs.core.count(ocr_54989) === 3)))){
try{var ocr_54989_2__55038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54989,(2));
if((ocr_54989_2__55038 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54988,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e55255){if((e55255 instanceof Error)){
var e__53072__auto____$1 = e55255;
if((e__53072__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_54989_2__55038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54989,(2));
if((ocr_54989_2__55038 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54988,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e55257){if((e55257 instanceof Error)){
var e__53072__auto____$2 = e55257;
if((e__53072__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$2;
}
} else {
throw e55257;

}
}} else {
throw e__53072__auto____$1;
}
} else {
throw e55255;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e55254){if((e55254 instanceof Error)){
var e__53072__auto____$1 = e55254;
if((e__53072__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$1;
}
} else {
throw e55254;

}
}} else {
throw e__53072__auto__;
}
} else {
throw e55253;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e55245){if((e55245 instanceof Error)){
var e__53072__auto__ = e55245;
if((e__53072__auto__ === cljs.core.match.backtrack)){
try{var ocr_54988_2__55022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54988,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_54988_2__55022,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_54989)) && ((cljs.core.count(ocr_54989) === 3)))){
try{var ocr_54989_1__55048 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54989,(1));
if((ocr_54989_1__55048 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54988,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e55250){if((e55250 instanceof Error)){
var e__53072__auto____$1 = e55250;
if((e__53072__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_54989_1__55048 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54989,(1));
if((ocr_54989_1__55048 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54988,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e55251){if((e55251 instanceof Error)){
var e__53072__auto____$2 = e55251;
if((e__53072__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$2;
}
} else {
throw e55251;

}
}} else {
throw e__53072__auto____$1;
}
} else {
throw e55250;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e55248){if((e55248 instanceof Error)){
var e__53072__auto____$1 = e55248;
if((e__53072__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$1;
}
} else {
throw e55248;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e55246){if((e55246 instanceof Error)){
var e__53072__auto____$1 = e55246;
if((e__53072__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$1;
}
} else {
throw e55246;

}
}} else {
throw e__53072__auto__;
}
} else {
throw e55245;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e55130){if((e55130 instanceof Error)){
var e__53072__auto__ = e55130;
if((e__53072__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_54989)) && ((cljs.core.count(ocr_54989) === 3)))){
try{var ocr_54989_0__55052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54989,(0));
if((ocr_54989_0__55052 === false)){
try{var ocr_54988_1__55021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54988,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_54988_1__55021,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_54988_2__55022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54988,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_54988_2__55022,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54988,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e55239){if((e55239 instanceof Error)){
var e__53072__auto____$1 = e55239;
if((e__53072__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$1;
}
} else {
throw e55239;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e55234){if((e55234 instanceof Error)){
var e__53072__auto____$1 = e55234;
if((e__53072__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$1;
}
} else {
throw e55234;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e55132){if((e55132 instanceof Error)){
var e__53072__auto____$1 = e55132;
if((e__53072__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_54989_0__55052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54989,(0));
if((ocr_54989_0__55052 === true)){
try{var ocr_54988_2__55022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54988,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_54988_2__55022,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_54988_1__55021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54988,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_54988_1__55021,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54988,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e55215){if((e55215 instanceof Error)){
var e__53072__auto____$2 = e55215;
if((e__53072__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_54989_1__55053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54989,(1));
if((ocr_54989_1__55053 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54988,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54988,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e55217){if((e55217 instanceof Error)){
var e__53072__auto____$3 = e55217;
if((e__53072__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_54989_1__55053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54989,(1));
if((ocr_54989_1__55053 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54988,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54988,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e55218){if((e55218 instanceof Error)){
var e__53072__auto____$4 = e55218;
if((e__53072__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$4;
}
} else {
throw e55218;

}
}} else {
throw e__53072__auto____$3;
}
} else {
throw e55217;

}
}} else {
throw e__53072__auto____$2;
}
} else {
throw e55215;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e55212){if((e55212 instanceof Error)){
var e__53072__auto____$2 = e55212;
if((e__53072__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$2;
}
} else {
throw e55212;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e55133){if((e55133 instanceof Error)){
var e__53072__auto____$2 = e55133;
if((e__53072__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_54989_0__55052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54989,(0));
if((ocr_54989_0__55052 === false)){
try{var ocr_54989_1__55053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54989,(1));
if((ocr_54989_1__55053 === true)){
try{var ocr_54988_2__55022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54988,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_54988_2__55022,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54988,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54988,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e55199){if((e55199 instanceof Error)){
var e__53072__auto____$3 = e55199;
if((e__53072__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$3;
}
} else {
throw e55199;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e55193){if((e55193 instanceof Error)){
var e__53072__auto____$3 = e55193;
if((e__53072__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$3;
}
} else {
throw e55193;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e55134){if((e55134 instanceof Error)){
var e__53072__auto____$3 = e55134;
if((e__53072__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_54989_2__55054 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54989,(2));
if((ocr_54989_2__55054 === true)){
try{var ocr_54989_0__55052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54989,(0));
if((ocr_54989_0__55052 === true)){
try{var ocr_54988_1__55021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54988,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_54988_1__55021,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54988,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54988,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e55192){if((e55192 instanceof Error)){
var e__53072__auto____$4 = e55192;
if((e__53072__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$4;
}
} else {
throw e55192;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e55189){if((e55189 instanceof Error)){
var e__53072__auto____$4 = e55189;
if((e__53072__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$4;
}
} else {
throw e55189;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e55135){if((e55135 instanceof Error)){
var e__53072__auto____$4 = e55135;
if((e__53072__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_54989_2__55054 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54989,(2));
if((ocr_54989_2__55054 === false)){
try{var ocr_54989_0__55052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54989,(0));
if((ocr_54989_0__55052 === true)){
try{var ocr_54988_1__55021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54988,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_54988_1__55021,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54988,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54988,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e55182){if((e55182 instanceof Error)){
var e__53072__auto____$5 = e55182;
if((e__53072__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$5;
}
} else {
throw e55182;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e55181){if((e55181 instanceof Error)){
var e__53072__auto____$5 = e55181;
if((e__53072__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$5;
}
} else {
throw e55181;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e55136){if((e55136 instanceof Error)){
var e__53072__auto____$5 = e55136;
if((e__53072__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_54989_2__55054 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54989,(2));
if((ocr_54989_2__55054 === true)){
try{var ocr_54989_0__55052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54989,(0));
if((ocr_54989_0__55052 === false)){
try{var ocr_54988_1__55021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54988,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_54988_1__55021,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54988,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54988,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e55180){if((e55180 instanceof Error)){
var e__53072__auto____$6 = e55180;
if((e__53072__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$6;
}
} else {
throw e55180;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e55177){if((e55177 instanceof Error)){
var e__53072__auto____$6 = e55177;
if((e__53072__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_54989_1__55053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54989,(1));
if((ocr_54989_1__55053 === true)){
try{var ocr_54988_0__55020 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54988,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_54988_0__55020,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54988,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54988,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e55179){if((e55179 instanceof Error)){
var e__53072__auto____$7 = e55179;
if((e__53072__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$7;
}
} else {
throw e55179;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e55178){if((e55178 instanceof Error)){
var e__53072__auto____$7 = e55178;
if((e__53072__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$7;
}
} else {
throw e55178;

}
}} else {
throw e__53072__auto____$6;
}
} else {
throw e55177;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e55137){if((e55137 instanceof Error)){
var e__53072__auto____$6 = e55137;
if((e__53072__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_54989_2__55054 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54989,(2));
if((ocr_54989_2__55054 === false)){
try{var ocr_54989_1__55053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54989,(1));
if((ocr_54989_1__55053 === true)){
try{var ocr_54988_0__55020 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54988,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_54988_0__55020,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54988,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54988,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e55176){if((e55176 instanceof Error)){
var e__53072__auto____$7 = e55176;
if((e__53072__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$7;
}
} else {
throw e55176;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e55175){if((e55175 instanceof Error)){
var e__53072__auto____$7 = e55175;
if((e__53072__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$7;
}
} else {
throw e55175;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e55138){if((e55138 instanceof Error)){
var e__53072__auto____$7 = e55138;
if((e__53072__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_54989_2__55054 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54989,(2));
if((ocr_54989_2__55054 === true)){
try{var ocr_54989_1__55053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54989,(1));
if((ocr_54989_1__55053 === false)){
try{var ocr_54988_0__55020 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54988,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_54988_0__55020,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54988,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54988,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e55174){if((e55174 instanceof Error)){
var e__53072__auto____$8 = e55174;
if((e__53072__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$8;
}
} else {
throw e55174;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e55161){if((e55161 instanceof Error)){
var e__53072__auto____$8 = e55161;
if((e__53072__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_54989_1__55053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54989,(1));
if((ocr_54989_1__55053 === true)){
try{var ocr_54989_0__55052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54989,(0));
if((ocr_54989_0__55052 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54988,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54988,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54988,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e55169){if((e55169 instanceof Error)){
var e__53072__auto____$9 = e55169;
if((e__53072__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_54989_0__55052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54989,(0));
if((ocr_54989_0__55052 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54988,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54988,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54988,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e55170){if((e55170 instanceof Error)){
var e__53072__auto____$10 = e55170;
if((e__53072__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$10;
}
} else {
throw e55170;

}
}} else {
throw e__53072__auto____$9;
}
} else {
throw e55169;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e55163){if((e55163 instanceof Error)){
var e__53072__auto____$9 = e55163;
if((e__53072__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_54989_1__55053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54989,(1));
if((ocr_54989_1__55053 === false)){
try{var ocr_54989_0__55052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54989,(0));
if((ocr_54989_0__55052 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54988,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54988,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54988,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e55167){if((e55167 instanceof Error)){
var e__53072__auto____$10 = e55167;
if((e__53072__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$10;
}
} else {
throw e55167;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e55164){if((e55164 instanceof Error)){
var e__53072__auto____$10 = e55164;
if((e__53072__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$10;
}
} else {
throw e55164;

}
}} else {
throw e__53072__auto____$9;
}
} else {
throw e55163;

}
}} else {
throw e__53072__auto____$8;
}
} else {
throw e55161;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e55140){if((e55140 instanceof Error)){
var e__53072__auto____$8 = e55140;
if((e__53072__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_54989_2__55054 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54989,(2));
if((ocr_54989_2__55054 === false)){
try{var ocr_54989_0__55052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54989,(0));
if((ocr_54989_0__55052 === true)){
try{var ocr_54989_1__55053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54989,(1));
if((ocr_54989_1__55053 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54988,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54988,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54988,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e55160){if((e55160 instanceof Error)){
var e__53072__auto____$9 = e55160;
if((e__53072__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$9;
}
} else {
throw e55160;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e55158){if((e55158 instanceof Error)){
var e__53072__auto____$9 = e55158;
if((e__53072__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$9;
}
} else {
throw e55158;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e55141){if((e55141 instanceof Error)){
var e__53072__auto____$9 = e55141;
if((e__53072__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_54989_2__55054 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54989,(2));
if((ocr_54989_2__55054 === true)){
try{var ocr_54989_0__55052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54989,(0));
if((ocr_54989_0__55052 === false)){
try{var ocr_54989_1__55053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54989,(1));
if((ocr_54989_1__55053 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54988,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54988,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54988,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e55155){if((e55155 instanceof Error)){
var e__53072__auto____$10 = e55155;
if((e__53072__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$10;
}
} else {
throw e55155;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e55153){if((e55153 instanceof Error)){
var e__53072__auto____$10 = e55153;
if((e__53072__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$10;
}
} else {
throw e55153;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e55143){if((e55143 instanceof Error)){
var e__53072__auto____$10 = e55143;
if((e__53072__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_54989_2__55054 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54989,(2));
if((ocr_54989_2__55054 === false)){
try{var ocr_54989_0__55052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54989,(0));
if((ocr_54989_0__55052 === true)){
try{var ocr_54989_1__55053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54989,(1));
if((ocr_54989_1__55053 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54988,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54988,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54988,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e55150){if((e55150 instanceof Error)){
var e__53072__auto____$11 = e55150;
if((e__53072__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$11;
}
} else {
throw e55150;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e55145){if((e55145 instanceof Error)){
var e__53072__auto____$11 = e55145;
if((e__53072__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_54989_0__55052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54989,(0));
if((ocr_54989_0__55052 === false)){
try{var ocr_54989_1__55053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54989,(1));
if((ocr_54989_1__55053 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54988,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54988,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_54988,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e55147){if((e55147 instanceof Error)){
var e__53072__auto____$12 = e55147;
if((e__53072__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$12;
}
} else {
throw e55147;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e55146){if((e55146 instanceof Error)){
var e__53072__auto____$12 = e55146;
if((e__53072__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$12;
}
} else {
throw e55146;

}
}} else {
throw e__53072__auto____$11;
}
} else {
throw e55145;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e55144){if((e55144 instanceof Error)){
var e__53072__auto____$11 = e55144;
if((e__53072__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$11;
}
} else {
throw e55144;

}
}} else {
throw e__53072__auto____$10;
}
} else {
throw e55143;

}
}} else {
throw e__53072__auto____$9;
}
} else {
throw e55141;

}
}} else {
throw e__53072__auto____$8;
}
} else {
throw e55140;

}
}} else {
throw e__53072__auto____$7;
}
} else {
throw e55138;

}
}} else {
throw e__53072__auto____$6;
}
} else {
throw e55137;

}
}} else {
throw e__53072__auto____$5;
}
} else {
throw e55136;

}
}} else {
throw e__53072__auto____$4;
}
} else {
throw e55135;

}
}} else {
throw e__53072__auto____$3;
}
} else {
throw e55134;

}
}} else {
throw e__53072__auto____$2;
}
} else {
throw e55133;

}
}} else {
throw e__53072__auto____$1;
}
} else {
throw e55132;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e55131){if((e55131 instanceof Error)){
var e__53072__auto____$1 = e55131;
if((e__53072__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__53072__auto____$1;
}
} else {
throw e55131;

}
}} else {
throw e__53072__auto__;
}
} else {
throw e55130;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e55129){if((e55129 instanceof Error)){
var e__53072__auto__ = e55129;
if((e__53072__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__53072__auto__;
}
} else {
throw e55129;

}
}});
posh.lib.q_analyze.patterns_from_eavs = (function posh$lib$q_analyze$patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__55261){
var vec__55262 = p__55261;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55262,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55262,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__55259_SHARP_){
return posh.lib.q_analyze.pattern_from_eav(vars,cljs.core.rest(p1__55259_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.filter_patterns_from_eavs = (function posh$lib$q_analyze$filter_patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__55271){
var vec__55272 = p__55271;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55272,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55272,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__55268_SHARP_){
return posh.lib.q_analyze.filter_pattern_from_eav(vars,cljs.core.rest(p1__55268_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.just_qvars = (function posh$lib$q_analyze$just_qvars(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((((cljs.core.first(ins) instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(ins))),"$"))))?null:cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)])),(function (){var G__55281 = cljs.core.rest(ins);
var G__55282 = cljs.core.rest(args);
return (posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2(G__55281,G__55282) : posh.lib.q_analyze.just_qvars.call(null,G__55281,G__55282));
})()], 0));
}
});
posh.lib.q_analyze.get_input_sets = (function posh$lib$q_analyze$get_input_sets(q_fn,ins,args){
var varmap = posh.lib.q_analyze.just_qvars(ins,args);
if((!(cljs.core.empty_QMARK_(varmap)))){
var qvars = cljs.core.vec(posh.lib.q_analyze.get_all_vars(cljs.core.keys(varmap)));
var varvals = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(q_fn,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),qvars,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.keys(varmap)], null)),cljs.core.vals(varmap));
var varsets = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.conj),cljs.core.zipmap(qvars,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55283_SHARP_){
return cljs.core.zipmap(qvars,p1__55283_SHARP_);
}),varvals));
return varsets;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
posh.lib.q_analyze.pull_pattern_QMARK_ = (function posh$lib$q_analyze$pull_pattern_QMARK_(x){
return ((cljs.core.coll_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(x),new cljs.core.Symbol(null,"pull","pull",779986722,null))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.count(x))));
});
posh.lib.q_analyze.replace_find_pulls = (function posh$lib$q_analyze$replace_find_pulls(qfind){

return clojure.walk.postwalk((function (x){
if(posh.lib.q_analyze.pull_pattern_QMARK_(x)){
return cljs.core.second(x);
} else {
return x;
}
}),qfind);
});
posh.lib.q_analyze.get_pull_var_pairs = (function posh$lib$q_analyze$get_pull_var_pairs(qfind){

if(cljs.core.coll_QMARK_(qfind)){
if(cljs.core.empty_QMARK_(qfind)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(posh.lib.q_analyze.pull_pattern_QMARK_(qfind)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.second(qfind),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(qfind,(2))]);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.get_pull_var_pairs,qfind));

}
}
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
posh.lib.q_analyze.match_var_to_db = (function posh$lib$q_analyze$match_var_to_db(var$,dbvarmap,dbeavs){
while(true){
if(cljs.core.empty_QMARK_(dbeavs)){
return null;
} else {
var vec__55288 = cljs.core.first(dbeavs);
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55288,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55288,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55288,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55288,(3),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,e)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,v)) && (posh.lib.pull_analyze.ref_QMARK_(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db))),a)))))){
return (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db));
} else {
var G__55798 = var$;
var G__55799 = dbvarmap;
var G__55800 = cljs.core.rest(dbeavs);
var$ = G__55798;
dbvarmap = G__55799;
dbeavs = G__55800;
continue;
}
}
break;
}
});
posh.lib.q_analyze.match_vars_to_dbs = (function posh$lib$q_analyze$match_vars_to_dbs(vars,dbvarmap,dbeavs){
if(cljs.core.empty_QMARK_(vars)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(vars),posh.lib.q_analyze.match_var_to_db(cljs.core.first(vars),dbvarmap,dbeavs)]),(function (){var G__55291 = cljs.core.rest(vars);
var G__55292 = dbvarmap;
var G__55293 = dbeavs;
return (posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3(G__55291,G__55292,G__55293) : posh.lib.q_analyze.match_vars_to_dbs.call(null,G__55291,G__55292,G__55293));
})()], 0));
}
});
posh.lib.q_analyze.index_of = (function posh$lib$q_analyze$index_of(xs,x){
var n = (0);
var xs__$1 = xs;
while(true){
if(cljs.core.empty_QMARK_(xs__$1)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(xs__$1),x)){
return n;
} else {
var G__55805 = (n + (1));
var G__55806 = cljs.core.rest(xs__$1);
n = G__55805;
xs__$1 = G__55806;
continue;

}
}
break;
}
});
posh.lib.q_analyze.db_arg_QMARK_ = (function posh$lib$q_analyze$db_arg_QMARK_(arg){
if(cljs.core.map_QMARK_(arg)){
var and__4115__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(arg);
if(cljs.core.truth_(and__4115__auto__)){
return new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(arg);
} else {
return and__4115__auto__;
}
} else {
return false;
}
});
posh.lib.q_analyze.convert_args_to = (function posh$lib$q_analyze$convert_args_to(type,args){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55297_SHARP_){
if(cljs.core.truth_(posh.lib.q_analyze.db_arg_QMARK_(p1__55297_SHARP_))){
return (type.cljs$core$IFn$_invoke$arity$1 ? type.cljs$core$IFn$_invoke$arity$1(p1__55297_SHARP_) : type.call(null,p1__55297_SHARP_));
} else {
return p1__55297_SHARP_;
}
}),args);
});
posh.lib.q_analyze.make_dbarg_map = (function posh$lib$q_analyze$make_dbarg_map(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.dbvar_QMARK_(cljs.core.first(ins)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)]):null),(function (){var G__55299 = cljs.core.rest(ins);
var G__55300 = cljs.core.rest(args);
return (posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2(G__55299,G__55300) : posh.lib.q_analyze.make_dbarg_map.call(null,G__55299,G__55300));
})()], 0));
}
});
posh.lib.q_analyze.split_datoms = (function posh$lib$q_analyze$split_datoms(datoms){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__55302){
var vec__55303 = p__55302;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55303,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55303,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([db_sym,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.rest),db_datoms)]);
}),cljs.core.group_by(cljs.core.first,datoms)));
});
/**
 * Returns whether attribute identified by k is of :db/valueType :db.type/ref
 */
posh.lib.q_analyze.schema_ref_QMARK_ = (function posh$lib$q_analyze$schema_ref_QMARK_(schema,k){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,k)));
});
posh.lib.q_analyze.indexes_of = (function posh$lib$q_analyze$indexes_of(e,coll){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__55308_SHARP_,p2__55307_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,p2__55307_SHARP_)){
return p1__55308_SHARP_;
} else {
return null;
}
}),coll);
});
/**
 * Returns whether var-name is used as lookup-ref inside of query's :where clauses.
 *   var-name - the symbolic variable name
 *   where - coll of where clauses
 *   schema - map of schemas with attribute names as keys
 *   Returns boolean true or false
 */
posh.lib.q_analyze.lookup_ref_QMARK_ = (function posh$lib$q_analyze$lookup_ref_QMARK_(schema,where,var_name,var_value){
if((!(cljs.core.coll_QMARK_(var_value)))){
return false;
} else {
var clause = cljs.core.first(where);
var remaining = cljs.core.rest(where);
while(true){
var pred__55318 = cljs.core._EQ_;
var expr__55319 = cljs.core.first(posh.lib.q_analyze.indexes_of(var_name,clause));
if(cljs.core.truth_((pred__55318.cljs$core$IFn$_invoke$arity$2 ? pred__55318.cljs$core$IFn$_invoke$arity$2((1),expr__55319) : pred__55318.call(null,(1),expr__55319)))){
return true;
} else {
if(cljs.core.truth_((pred__55318.cljs$core$IFn$_invoke$arity$2 ? pred__55318.cljs$core$IFn$_invoke$arity$2((3),expr__55319) : pred__55318.call(null,(3),expr__55319)))){
if(posh.lib.q_analyze.schema_ref_QMARK_(schema,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clause,(2)))){
return true;
} else {
if(cljs.core.seq(remaining)){
var G__55823 = cljs.core.first(remaining);
var G__55824 = cljs.core.rest(remaining);
clause = G__55823;
remaining = G__55824;
continue;
} else {
return false;
}
}
} else {
if(cljs.core.seq(remaining)){
var G__55827 = cljs.core.first(remaining);
var G__55828 = cljs.core.rest(remaining);
clause = G__55827;
remaining = G__55828;
continue;
} else {
return false;
}
}
}
break;
}
}
});
/**
 * Given input-set from query, resolves any lookup-refs
 *   Inputs:
 *   entid-fn - Datomic/DS function to take lookup-ref & returns entid
 *   db - value of DB
 *   schemas - map with keys matching known schema attributes
 *   where - where clauses of query
 *   input-set - value from query :in
 */
posh.lib.q_analyze.resolve_any_idents = (function posh$lib$q_analyze$resolve_any_idents(entid_fn,db,schema,where,var_name,input_set){
return cljs.core.set((function (){var iter__4529__auto__ = (function posh$lib$q_analyze$resolve_any_idents_$_iter__55324(s__55325){
return (new cljs.core.LazySeq(null,(function (){
var s__55325__$1 = s__55325;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__55325__$1);
if(temp__5735__auto__){
var s__55325__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55325__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__55325__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__55327 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__55326 = (0);
while(true){
if((i__55326 < size__4528__auto__)){
var var_value = cljs.core._nth(c__4527__auto__,i__55326);
cljs.core.chunk_append(b__55327,((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value));

var G__55832 = (i__55326 + (1));
i__55326 = G__55832;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55327),posh$lib$q_analyze$resolve_any_idents_$_iter__55324(cljs.core.chunk_rest(s__55325__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55327),null);
}
} else {
var var_value = cljs.core.first(s__55325__$2);
return cljs.core.cons(((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value),posh$lib$q_analyze$resolve_any_idents_$_iter__55324(cljs.core.rest(s__55325__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(input_set);
})());
});
posh.lib.q_analyze.q_analyze = (function posh$lib$q_analyze$q_analyze(dcfg,retrieve,query,args){
var qm = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null)], null),posh.lib.q_analyze.query_to_map(query)], 0));
var where = posh.lib.q_analyze.normalize_all_eavs(cljs.core.vec(new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(qm)));
var eavs = posh.lib.q_analyze.get_eavs(where);
var vars = cljs.core.vec(posh.lib.q_analyze.get_all_vars(eavs));
var newqm = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([qm,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),vars,new cljs.core.Keyword(null,"where","where",-2044795965),where], null)], 0));
var dbvarmap = posh.lib.q_analyze.make_dbarg_map(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var fixed_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__55345){
var vec__55346 = p__55345;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55346,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55346,(1),null);
var or__4126__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,sym));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return arg;
}
}),cljs.core.zipmap(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args));
var r = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),newqm),fixed_args);
var lookup_ref_patterns = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__55352){
var vec__55353 = p__55352;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55353,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55353,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$3(cljs.core.vector_QMARK_,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.first),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,(2)),cljs.core.count)),args));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?(function (){var datoms = posh.lib.q_analyze.split_datoms(posh.lib.q_analyze.create_q_datoms(r,eavs,vars));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__55360){
var vec__55361 = p__55360;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55361,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55361,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym))),db_datoms]);
}),datoms))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__55371){
var vec__55372 = p__55371;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55372,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55372,(1),null);
var db = (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(db),posh.lib.util.t_for_datoms(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(db),db_datoms)]);
}),datoms))], null):null)], 0));
})():null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),(function (){var G__55381 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.vec(new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null)], null);
var G__55382 = cljs.core.vec(r);
var fexpr__55380 = new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__55380.cljs$core$IFn$_invoke$arity$2 ? fexpr__55380.cljs$core$IFn$_invoke$arity$2(G__55381,G__55382) : fexpr__55380.call(null,G__55381,G__55382));
})()], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null,new cljs.core.Keyword(null,"patterns","patterns",1164082024),null,new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?(function (){var in_vars = posh.lib.q_analyze.get_input_sets(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var eavs_ins = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__55387){
var vec__55388 = p__55387;
var seq__55389 = cljs.core.seq(vec__55388);
var first__55390 = cljs.core.first(seq__55389);
var seq__55389__$1 = cljs.core.next(seq__55389);
var db = first__55390;
var eav = seq__55389__$1;
return cljs.core.vec(cljs.core.cons(db,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (var_name){
var temp__5733__auto__ = (in_vars.cljs$core$IFn$_invoke$arity$1 ? in_vars.cljs$core$IFn$_invoke$arity$1(var_name) : in_vars.call(null,var_name));
if(cljs.core.truth_(temp__5733__auto__)){
var var_value = temp__5733__auto__;
return posh.lib.q_analyze.resolve_any_idents(new cljs.core.Keyword(null,"entid","entid",1720688982).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,db)),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,db)),where,var_name,var_value);
} else {
return var_name;
}
}),eav)));
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(lookup_ref_patterns,eavs));
var qvar_count = posh.lib.q_analyze.count_qvars(eavs_ins);
var linked_qvars = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__55396){
var vec__55397 = p__55396;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55397,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55397,(1),null);
if((v > (1))){
return k;
} else {
return null;
}
}),qvar_count)));
var rvars = cljs.core.zipmap(vars,posh.lib.q_analyze.stack_vectors(r));
var prepped_eavs = clojure.walk.postwalk((function (p1__55336_SHARP_){
if(((posh.lib.q_analyze.qvar_QMARK_(p1__55336_SHARP_)) && (cljs.core.not((linked_qvars.cljs$core$IFn$_invoke$arity$1 ? linked_qvars.cljs$core$IFn$_invoke$arity$1(p1__55336_SHARP_) : linked_qvars.call(null,p1__55336_SHARP_)))))){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__55336_SHARP_;
}
}),eavs_ins);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,clojure.walk.postwalk((function (p1__55338_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__55338_SHARP_)){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__55338_SHARP_;
}
}),eavs_ins))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,prepped_eavs),new cljs.core.Keyword(null,"linked","linked",-1703156372),linked_qvars], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),posh.lib.q_analyze.filter_patterns_from_eavs(dbvarmap,rvars,prepped_eavs)], null):null)], 0));
})():null)], 0));
});

//# sourceMappingURL=posh.lib.q_analyze.js.map

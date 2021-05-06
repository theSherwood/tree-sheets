goog.provide('posh.lib.db');
posh.lib.db.get_parent_db = (function posh$lib$db$get_parent_db(poshdb){
var G__54041 = cljs.core.first(poshdb);
var G__54041__$1 = (((G__54041 instanceof cljs.core.Keyword))?G__54041.fqn:null);
switch (G__54041__$1) {
case "db":
return null;

break;
case "filter-tx":
return cljs.core.second(poshdb);

break;
case "filter-pull":
return cljs.core.second(poshdb);

break;
case "filter-q":
return cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(poshdb,(2)));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54041__$1)].join('')));

}
});
posh.lib.db.get_db_path = (function posh$lib$db$get_db_path(poshdb){
var path = cljs.core.PersistentVector.EMPTY;
var pdb = poshdb;
while(true){
if(cljs.core.truth_(pdb)){
var G__54214 = cljs.core.cons(pdb,path);
var G__54215 = posh.lib.db.get_parent_db(pdb);
path = G__54214;
pdb = G__54215;
continue;
} else {
return path;
}
break;
}
});
posh.lib.db.db_id__GT_conn = (function posh$lib$db$db_id__GT_conn(posh_tree,db_id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"conns","conns",-1475268193).cljs$core$IFn$_invoke$arity$1(posh_tree),db_id);
});
posh.lib.db.db_id__GT_schema = (function posh$lib$db$db_id__GT_schema(posh_tree,db_id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"schemas","schemas",575070579).cljs$core$IFn$_invoke$arity$1(posh_tree),db_id);
});
posh.lib.db.db_id__GT_db = (function posh$lib$db$db_id__GT_db(posh_tree,db_id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dbs","dbs",1889628467).cljs$core$IFn$_invoke$arity$1(posh_tree),db_id);
});
posh.lib.db.poshdb__GT_db_id = (function posh$lib$db$poshdb__GT_db_id(poshdb){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(poshdb),new cljs.core.Keyword(null,"db","db",993250759))){
return cljs.core.second(poshdb);
} else {
var G__54218 = posh.lib.db.get_parent_db(poshdb);
poshdb = G__54218;
continue;
}
break;
}
});
posh.lib.db.db_id__GT_attrs = (function posh$lib$db$db_id__GT_attrs(posh_tree,db_id){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"conn","conn",278309663),posh.lib.db.db_id__GT_conn(posh_tree,db_id),new cljs.core.Keyword(null,"schema","schema",-1582001791),posh.lib.db.db_id__GT_schema(posh_tree,db_id),new cljs.core.Keyword(null,"db","db",993250759),posh.lib.db.db_id__GT_db(posh_tree,db_id),new cljs.core.Keyword(null,"db-id","db-id",747248515),db_id], null);
});
posh.lib.db.poshdb__GT_attrs = (function posh$lib$db$poshdb__GT_attrs(posh_tree,poshdb){
return posh.lib.db.db_id__GT_attrs(posh_tree,posh.lib.db.poshdb__GT_db_id(poshdb));
});
posh.lib.db.make_filter_pred = (function posh$lib$db$make_filter_pred(tx_patterns){
return (function (_,datom){
return posh.lib.datom_matcher.datom_match_QMARK_(tx_patterns,datom);
});
});
posh.lib.db.generate_initial_db = (function posh$lib$db$generate_initial_db(var_args){
var G__54125 = arguments.length;
switch (G__54125) {
case 3:
return posh.lib.db.generate_initial_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return posh.lib.db.generate_initial_db.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(posh.lib.db.generate_initial_db.cljs$core$IFn$_invoke$arity$3 = (function (dcfg,conn,filters){
return posh.lib.db.generate_initial_db.cljs$core$IFn$_invoke$arity$4(dcfg,conn,filters,null);
}));

(posh.lib.db.generate_initial_db.cljs$core$IFn$_invoke$arity$4 = (function (dcfg,conn,filters,db){
var map__54142 = filters;
var map__54142__$1 = (((((!((map__54142 == null))))?(((((map__54142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54142):map__54142);
var filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54142__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));
var as_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54142__$1,new cljs.core.Keyword(null,"as-of","as-of",-1841962382));
var since = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54142__$1,new cljs.core.Keyword(null,"since","since",315379842));
var with$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54142__$1,new cljs.core.Keyword(null,"with","with",-1536296876));
var db__$1 = (function (){var or__4126__auto__ = db;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var fexpr__54159 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__54159.cljs$core$IFn$_invoke$arity$1 ? fexpr__54159.cljs$core$IFn$_invoke$arity$1(conn) : fexpr__54159.call(null,conn));
}
})();
var db__$2 = (cljs.core.truth_(since)?(function (){var fexpr__54160 = new cljs.core.Keyword(null,"since","since",315379842).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__54160.cljs$core$IFn$_invoke$arity$2 ? fexpr__54160.cljs$core$IFn$_invoke$arity$2(db__$1,since) : fexpr__54160.call(null,db__$1,since));
})():db__$1);
var db__$3 = (cljs.core.truth_(as_of)?(function (){var fexpr__54165 = new cljs.core.Keyword(null,"as-of","as-of",-1841962382).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__54165.cljs$core$IFn$_invoke$arity$2 ? fexpr__54165.cljs$core$IFn$_invoke$arity$2(db__$2,as_of) : fexpr__54165.call(null,db__$2,as_of));
})():db__$2);
var db__$4 = (cljs.core.truth_(with$)?new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1((function (){var fexpr__54169 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__54169.cljs$core$IFn$_invoke$arity$2 ? fexpr__54169.cljs$core$IFn$_invoke$arity$2(db__$3,with$) : fexpr__54169.call(null,db__$3,with$));
})()):db__$3);
var db__$5 = (cljs.core.truth_(filter)?(function (){var G__54173 = db__$4;
var G__54174 = (((filter instanceof cljs.core.Symbol))?null:filter);
var fexpr__54172 = new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__54172.cljs$core$IFn$_invoke$arity$2 ? fexpr__54172.cljs$core$IFn$_invoke$arity$2(G__54173,G__54174) : fexpr__54172.call(null,G__54173,G__54174));
})():db__$4);
return db__$5;
}));

(posh.lib.db.generate_initial_db.cljs$lang$maxFixedArity = 4);

posh.lib.db.poshdb__GT_db = (function posh$lib$db$poshdb__GT_db(p__54187,poshdb){
var map__54188 = p__54187;
var map__54188__$1 = (((((!((map__54188 == null))))?(((((map__54188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54188):map__54188);
var posh_tree = map__54188__$1;
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54188__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54188__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(poshdb),new cljs.core.Keyword(null,"db","db",993250759))){
return posh.lib.db.db_id__GT_db(posh_tree,cljs.core.second(poshdb));
} else {
var G__54196 = (function (){var G__54198 = posh_tree;
var G__54199 = posh.lib.db.get_parent_db(poshdb);
return (posh.lib.db.poshdb__GT_db.cljs$core$IFn$_invoke$arity$2 ? posh.lib.db.poshdb__GT_db.cljs$core$IFn$_invoke$arity$2(G__54198,G__54199) : posh.lib.db.poshdb__GT_db.call(null,G__54198,G__54199));
})();
var G__54197 = posh.lib.db.make_filter_pred(new cljs.core.Keyword(null,"pass-patterns","pass-patterns",1090887263).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,poshdb)));
var fexpr__54195 = new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__54195.cljs$core$IFn$_invoke$arity$2 ? fexpr__54195.cljs$core$IFn$_invoke$arity$2(G__54196,G__54197) : fexpr__54195.call(null,G__54196,G__54197));
}
});
posh.lib.db.poshdb__GT_analyze_db = (function posh$lib$db$poshdb__GT_analyze_db(posh_tree,poshdb){
var db_id = posh.lib.db.poshdb__GT_db_id(poshdb);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"db","db",993250759),posh.lib.db.poshdb__GT_db(posh_tree,poshdb),new cljs.core.Keyword(null,"conn","conn",278309663),posh.lib.db.db_id__GT_conn(posh_tree,db_id),new cljs.core.Keyword(null,"schema","schema",-1582001791),posh.lib.db.db_id__GT_schema(posh_tree,db_id),new cljs.core.Keyword(null,"db-id","db-id",747248515),db_id], null);
});

//# sourceMappingURL=posh.lib.db.js.map

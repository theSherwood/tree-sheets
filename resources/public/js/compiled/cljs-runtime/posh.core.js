goog.provide('posh.core');
posh.core.empty_tree = (function posh$core$empty_tree(p__56236,retrieve){
var map__56237 = p__56236;
var map__56237__$1 = (((((!((map__56237 == null))))?(((((map__56237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56237):map__56237);
var dcfg = map__56237__$1;
var q = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56237__$1,new cljs.core.Keyword(null,"q","q",689001697));
var pull = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56237__$1,new cljs.core.Keyword(null,"pull","pull",-860544805));
var filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56237__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));
var entid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56237__$1,new cljs.core.Keyword(null,"entid","entid",1720688982));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56237__$1,new cljs.core.Keyword(null,"db","db",993250759));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"filters","filters",974726919),new cljs.core.Keyword(null,"retrieve","retrieve",-657129560),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"cache","cache",-1237023054),new cljs.core.Keyword(null,"dbs","dbs",1889628467),new cljs.core.Keyword(null,"schemas","schemas",575070579),new cljs.core.Keyword(null,"graph","graph",1558099509),new cljs.core.Keyword(null,"dcfg","dcfg",-880371016),new cljs.core.Keyword(null,"conns","conns",-1475268193)],[cljs.core.PersistentArrayMap.EMPTY,retrieve,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,dcfg,cljs.core.PersistentArrayMap.EMPTY]);
});
posh.core.add_db = (function posh$core$add_db(var_args){
var G__56240 = arguments.length;
switch (G__56240) {
case 4:
return posh.core.add_db.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return posh.core.add_db.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(posh.core.add_db.cljs$core$IFn$_invoke$arity$4 = (function (posh_tree,db_id,conn,schema){
return posh.core.add_db.cljs$core$IFn$_invoke$arity$5(posh_tree,db_id,conn,schema,null);
}));

(posh.core.add_db.cljs$core$IFn$_invoke$arity$5 = (function (p__56241,db_id,conn,schema,base_filters){
var map__56243 = p__56241;
var map__56243__$1 = (((((!((map__56243 == null))))?(((((map__56243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56243):map__56243);
var posh_tree = map__56243__$1;
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56243__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var conns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56243__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var schemas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56243__$1,new cljs.core.Keyword(null,"schemas","schemas",575070579));
var dbs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56243__$1,new cljs.core.Keyword(null,"dbs","dbs",1889628467));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56243__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56243__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var storage_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),db_id], null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([posh_tree,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"conns","conns",-1475268193),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(conns,db_id,conn),new cljs.core.Keyword(null,"schemas","schemas",575070579),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(schemas,db_id,schema),new cljs.core.Keyword(null,"filters","filters",974726919),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"filters","filters",974726919).cljs$core$IFn$_invoke$arity$1(posh_tree),db_id,base_filters),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key,new cljs.core.Keyword(null,"dbs","dbs",1889628467),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dbs,db_id,posh.lib.db.generate_initial_db.cljs$core$IFn$_invoke$arity$3(dcfg,conn,base_filters)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cache,cljs.core.PersistentArrayMap.createAsIfByAssoc([storage_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pass-patterns","pass-patterns",1090887263),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null)], null)])], 0)),new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_full(graph,storage_key,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY)], null)], 0));
}));

(posh.core.add_db.cljs$lang$maxFixedArity = 5);

posh.core.set_db = (function posh$core$set_db(var_args){
var G__56248 = arguments.length;
switch (G__56248) {
case 3:
return posh.core.set_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return posh.core.set_db.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(posh.core.set_db.cljs$core$IFn$_invoke$arity$3 = (function (posh_tree,db_id,db){
return posh.core.set_db.cljs$core$IFn$_invoke$arity$4(posh_tree,db_id,db,null);
}));

(posh.core.set_db.cljs$core$IFn$_invoke$arity$4 = (function (p__56251,db_id,db,filter_pred){
var map__56252 = p__56251;
var map__56252__$1 = (((((!((map__56252 == null))))?(((((map__56252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56252):map__56252);
var posh_tree = map__56252__$1;
var dbs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56252__$1,new cljs.core.Keyword(null,"dbs","dbs",1889628467));
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56252__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56252__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var storage_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),db_id], null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([posh_tree,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dbs","dbs",1889628467),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dbs,db_id,db),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cache,cljs.core.PersistentArrayMap.createAsIfByAssoc([storage_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pass-patterns","pass-patterns",1090887263),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null)], null)])], 0)),new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_full(graph,storage_key,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY)], null)], 0));
}));

(posh.core.set_db.cljs$lang$maxFixedArity = 4);

posh.core.add_filter_tx = (function posh$core$add_filter_tx(p__56256,poshdb,tx_patterns){
var map__56257 = p__56256;
var map__56257__$1 = (((((!((map__56257 == null))))?(((((map__56257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56257):map__56257);
var posh_tree = map__56257__$1;
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56257__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56257__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var storage_key = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-tx","filter-tx",-1870604812),poshdb,tx_patterns], null);
var cached = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,storage_key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((cljs.core.truth_(cached)?posh_tree:cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_connect(graph,storage_key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [poshdb], null)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache,storage_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pass-patterns","pass-patterns",1090887263),tx_patterns], null))], null)], 0))),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key);
});
posh.core.add_filter_pull = (function posh$core$add_filter_pull(p__56260,poshdb,pull_pattern,eid){
var map__56261 = p__56260;
var map__56261__$1 = (((((!((map__56261 == null))))?(((((map__56261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56261):map__56261);
var posh_tree = map__56261__$1;
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56261__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56261__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56261__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var conns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56261__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var conns_by_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56261__$1,new cljs.core.Keyword(null,"conns-by-id","conns-by-id",-369445996));
var storage_key = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-pull","filter-pull",-32246001),poshdb,pull_pattern,eid], null);
var cached = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,storage_key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((cljs.core.truth_(cached)?posh_tree:cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_connect(graph,storage_key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [poshdb], null)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache,storage_key,posh.lib.update.update_filter_pull(posh_tree,storage_key))], null)], 0))),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key);
});
posh.core.add_filter_q = (function posh$core$add_filter_q(var_args){
var args__4742__auto__ = [];
var len__4736__auto___56339 = arguments.length;
var i__4737__auto___56340 = (0);
while(true){
if((i__4737__auto___56340 < len__4736__auto___56339)){
args__4742__auto__.push((arguments[i__4737__auto___56340]));

var G__56341 = (i__4737__auto___56340 + (1));
i__4737__auto___56340 = G__56341;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return posh.core.add_filter_q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(posh.core.add_filter_q.cljs$core$IFn$_invoke$arity$variadic = (function (p__56267,query,args){
var map__56268 = p__56267;
var map__56268__$1 = (((((!((map__56268 == null))))?(((((map__56268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56268):map__56268);
var posh_tree = map__56268__$1;
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56268__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56268__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56268__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var retrieve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56268__$1,new cljs.core.Keyword(null,"retrieve","retrieve",-657129560));
var conns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56268__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var conns_by_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56268__$1,new cljs.core.Keyword(null,"conns-by-id","conns-by-id",-369445996));
var storage_key = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-q","filter-q",538431954),query,args], null);
var cached = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,storage_key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((cljs.core.truth_(cached)?posh_tree:(function (){var map__56270 = posh.lib.update.update_q_with_dbvarmap(posh_tree,storage_key);
var map__56270__$1 = (((((!((map__56270 == null))))?(((((map__56270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56270):map__56270);
var analysis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56270__$1,new cljs.core.Keyword(null,"analysis","analysis",-1362593389));
var dbvarmap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56270__$1,new cljs.core.Keyword(null,"dbvarmap","dbvarmap",491069137));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_connect(graph,storage_key,cljs.core.vals(dbvarmap)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache,storage_key,posh.lib.update.filter_q_transform_analysis(analysis))], null)], 0));
})()),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key);
}));

(posh.core.add_filter_q.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(posh.core.add_filter_q.cljs$lang$applyTo = (function (seq56264){
var G__56265 = cljs.core.first(seq56264);
var seq56264__$1 = cljs.core.next(seq56264);
var G__56266 = cljs.core.first(seq56264__$1);
var seq56264__$2 = cljs.core.next(seq56264__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56265,G__56266,seq56264__$2);
}));

posh.core.add_pull = (function posh$core$add_pull(p__56272,poshdb,pull_pattern,eid){
var map__56273 = p__56272;
var map__56273__$1 = (((((!((map__56273 == null))))?(((((map__56273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56273):map__56273);
var posh_tree = map__56273__$1;
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56273__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56273__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56273__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var conns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56273__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var conns_by_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56273__$1,new cljs.core.Keyword(null,"conns-by-id","conns-by-id",-369445996));
var retrieve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56273__$1,new cljs.core.Keyword(null,"retrieve","retrieve",-657129560));
var storage_key = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pull","pull",-860544805),poshdb,pull_pattern,eid], null);
var cached = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,storage_key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((cljs.core.truth_(cached)?posh_tree:(function (){var analysis = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tx-t","tx-t",-1302353112),(0)], null),posh.lib.update.update_pull(posh_tree,storage_key)], 0));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_connect(graph,storage_key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [poshdb], null)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache,storage_key,analysis)], null)], 0));
})()),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key);
});
posh.core.add_pull_many = (function posh$core$add_pull_many(p__56275,poshdb,pull_pattern,eids){
var map__56276 = p__56275;
var map__56276__$1 = (((((!((map__56276 == null))))?(((((map__56276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56276):map__56276);
var posh_tree = map__56276__$1;
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56276__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56276__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56276__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var conns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56276__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var conns_by_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56276__$1,new cljs.core.Keyword(null,"conns-by-id","conns-by-id",-369445996));
var retrieve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56276__$1,new cljs.core.Keyword(null,"retrieve","retrieve",-657129560));
var storage_key = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pull-many","pull-many",217148130),poshdb,pull_pattern,eids], null);
var cached = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,storage_key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((cljs.core.truth_(cached)?posh_tree:(function (){var analysis = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tx-t","tx-t",-1302353112),(0)], null),posh.lib.update.update_pull_many(posh_tree,storage_key)], 0));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_connect(graph,storage_key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [poshdb], null)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache,storage_key,analysis)], null)], 0));
})()),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key);
});
posh.core.add_q = (function posh$core$add_q(var_args){
var args__4742__auto__ = [];
var len__4736__auto___56345 = arguments.length;
var i__4737__auto___56346 = (0);
while(true){
if((i__4737__auto___56346 < len__4736__auto___56345)){
args__4742__auto__.push((arguments[i__4737__auto___56346]));

var G__56347 = (i__4737__auto___56346 + (1));
i__4737__auto___56346 = G__56347;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return posh.core.add_q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(posh.core.add_q.cljs$core$IFn$_invoke$arity$variadic = (function (p__56281,query,args){
var map__56282 = p__56281;
var map__56282__$1 = (((((!((map__56282 == null))))?(((((map__56282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56282):map__56282);
var posh_tree = map__56282__$1;
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56282__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56282__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56282__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var conns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56282__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var retrieve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56282__$1,new cljs.core.Keyword(null,"retrieve","retrieve",-657129560));
var storage_key = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"q","q",689001697),query,args], null);
var cached = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,storage_key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var or__4126__auto__ = cached;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var map__56284 = posh.lib.update.update_q_with_dbvarmap(posh_tree,storage_key);
var map__56284__$1 = (((((!((map__56284 == null))))?(((((map__56284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56284.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56284):map__56284);
var analysis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56284__$1,new cljs.core.Keyword(null,"analysis","analysis",-1362593389));
var dbvarmap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56284__$1,new cljs.core.Keyword(null,"dbvarmap","dbvarmap",491069137));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_connect(graph,storage_key,cljs.core.vals(dbvarmap)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache,storage_key,analysis)], null)], 0));
}
})(),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key);
}));

(posh.core.add_q.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(posh.core.add_q.cljs$lang$applyTo = (function (seq56278){
var G__56279 = cljs.core.first(seq56278);
var seq56278__$1 = cljs.core.next(seq56278);
var G__56280 = cljs.core.first(seq56278__$1);
var seq56278__$2 = cljs.core.next(seq56278__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56279,G__56280,seq56278__$2);
}));

posh.core.remove_item = (function posh$core$remove_item(p__56286,storage_key){
var map__56287 = p__56286;
var map__56287__$1 = (((((!((map__56287 == null))))?(((((map__56287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56287):map__56287);
var posh_tree = map__56287__$1;
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56287__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56287__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(posh_tree,new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.remove_item(graph,storage_key),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cache,storage_key)], 0));
});
posh.core.cache_changes = (function posh$core$cache_changes(p__56289,db_id,tx,new_cache,storage_key){
var map__56290 = p__56289;
var map__56290__$1 = (((((!((map__56290 == null))))?(((((map__56290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56290):map__56290);
var posh_tree = map__56290__$1;
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56290__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56290__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_cache,storage_key))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var current_analysis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,storage_key);
var reloaded = (cljs.core.truth_(posh.lib.datom_matcher.any_datoms_match_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reload-patterns","reload-patterns",-1261746666).cljs$core$IFn$_invoke$arity$1(current_analysis),db_id),tx))?(function (){var fexpr__56293 = new cljs.core.Keyword(null,"reload-fn","reload-fn",-1150160860).cljs$core$IFn$_invoke$arity$1(current_analysis);
return (fexpr__56293.cljs$core$IFn$_invoke$arity$2 ? fexpr__56293.cljs$core$IFn$_invoke$arity$2(posh_tree,storage_key) : fexpr__56293.call(null,posh_tree,storage_key));
})():null);
var analysis = (function (){var or__4126__auto__ = reloaded;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return current_analysis;
}
})();
var map__56292 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(graph,storage_key);
var map__56292__$1 = (((((!((map__56292 == null))))?(((((map__56292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56292.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56292):map__56292);
var outputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56292__$1,new cljs.core.Keyword(null,"outputs","outputs",-1896513034));
var children_cache = (function (){var temp__5735__auto__ = (((!(cljs.core.empty_QMARK_(outputs))))?(function (){var and__4115__auto__ = new cljs.core.Keyword(null,"pass-patterns","pass-patterns",1090887263).cljs$core$IFn$_invoke$arity$1(analysis);
if(cljs.core.truth_(and__4115__auto__)){
return posh.lib.datom_matcher.matching_datoms(new cljs.core.Keyword(null,"pass-patterns","pass-patterns",1090887263).cljs$core$IFn$_invoke$arity$1(analysis),tx);
} else {
return and__4115__auto__;
}
})():false);
if(cljs.core.truth_(temp__5735__auto__)){
var pass_tx = temp__5735__auto__;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,k){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([acc,(posh.core.cache_changes.cljs$core$IFn$_invoke$arity$5 ? posh.core.cache_changes.cljs$core$IFn$_invoke$arity$5(posh_tree,db_id,pass_tx,acc,k) : posh.core.cache_changes.call(null,posh_tree,db_id,pass_tx,acc,k))], 0));
}),new_cache,outputs);
} else {
return null;
}
})();
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([children_cache,(cljs.core.truth_(reloaded)?cljs.core.PersistentArrayMap.createAsIfByAssoc([storage_key,reloaded]):null),cljs.core.PersistentArrayMap.EMPTY], 0));
}
});
posh.core.merge_txs = (function posh$core$merge_txs(oldtx,newtx){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(newtx,oldtx);
});
posh.core.add_tx = (function posh$core$add_tx(p__56295,poshdb,tx){
var map__56296 = p__56295;
var map__56296__$1 = (((((!((map__56296 == null))))?(((((map__56296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56296):map__56296);
var posh_tree = map__56296__$1;
var txs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56296__$1,new cljs.core.Keyword(null,"txs","txs",2056038378));
var conns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56296__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var conn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(conns,posh.lib.db.poshdb__GT_db_id(poshdb));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(posh_tree,new cljs.core.Keyword(null,"txs","txs",2056038378),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(txs,conn,posh.core.merge_txs(cljs.core.get.cljs$core$IFn$_invoke$arity$2(txs,conn),tx)));
});
posh.core.group_db_ids_by_conn = (function posh$core$group_db_ids_by_conn(conns){
return cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,v));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.group_by(cljs.core.second,conns));
});
posh.core.after_transact = (function posh$core$after_transact(p__56298,conns_results){
var map__56299 = p__56298;
var map__56299__$1 = (((((!((map__56299 == null))))?(((((map__56299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56299):map__56299);
var posh_tree = map__56299__$1;
var conns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56299__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56299__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var dbs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56299__$1,new cljs.core.Keyword(null,"dbs","dbs",1889628467));
var filters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56299__$1,new cljs.core.Keyword(null,"filters","filters",974726919));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56299__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var new_dbs = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,(function (){var iter__4529__auto__ = (function posh$core$after_transact_$_iter__56301(s__56302){
return (new cljs.core.LazySeq(null,(function (){
var s__56302__$1 = s__56302;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__56302__$1);
if(temp__5735__auto__){
var s__56302__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56302__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__56302__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__56304 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__56303 = (0);
while(true){
if((i__56303 < size__4528__auto__)){
var vec__56305 = cljs.core._nth(c__4527__auto__,i__56303);
var db_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56305,(0),null);
var conn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56305,(1),null);
cljs.core.chunk_append(b__56304,(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(conns_results,conn))?cljs.core.PersistentArrayMap.createAsIfByAssoc([db_id,posh.lib.db.generate_initial_db.cljs$core$IFn$_invoke$arity$4(dcfg,conn,cljs.core.get.cljs$core$IFn$_invoke$arity$2(filters,db_id),new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(conns_results,conn)))]):cljs.core.PersistentArrayMap.createAsIfByAssoc([db_id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbs,db_id)])));

var G__56385 = (i__56303 + (1));
i__56303 = G__56385;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56304),posh$core$after_transact_$_iter__56301(cljs.core.chunk_rest(s__56302__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56304),null);
}
} else {
var vec__56308 = cljs.core.first(s__56302__$2);
var db_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56308,(0),null);
var conn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56308,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(conns_results,conn))?cljs.core.PersistentArrayMap.createAsIfByAssoc([db_id,posh.lib.db.generate_initial_db.cljs$core$IFn$_invoke$arity$4(dcfg,conn,cljs.core.get.cljs$core$IFn$_invoke$arity$2(filters,db_id),new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(conns_results,conn)))]):cljs.core.PersistentArrayMap.createAsIfByAssoc([db_id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbs,db_id)])),posh$core$after_transact_$_iter__56301(cljs.core.rest(s__56302__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(conns);
})());
var new_posh_tree = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(posh_tree,new cljs.core.Keyword(null,"dbs","dbs",1889628467),new_dbs);
var changed_cache = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (changed,p__56311){
var vec__56312 = p__56311;
var db_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56312,(0),null);
var conn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56312,(1),null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([changed,posh.core.cache_changes(new_posh_tree,db_id,new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(conns_results,conn)),changed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),db_id], null))], 0));
}),cljs.core.PersistentArrayMap.EMPTY,conns);
var really_changed = cljs.core.reduce_kv((function (m,k,v){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,k))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
} else {
return m;
}
}),cljs.core.PersistentArrayMap.EMPTY,changed_cache);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cache,really_changed], 0)),new cljs.core.Keyword(null,"changed","changed",570724917),really_changed], null)], 0));
});
posh.core.process_tx_BANG_ = (function posh$core$process_tx_BANG_(p__56315){
var map__56316 = p__56315;
var map__56316__$1 = (((((!((map__56316 == null))))?(((((map__56316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56316):map__56316);
var posh_tree = map__56316__$1;
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56316__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var txs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56316__$1,new cljs.core.Keyword(null,"txs","txs",2056038378));
var conns_results = cljs.core.reduce_kv((function (m,conn,tx){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,conn,(function (){var fexpr__56318 = new cljs.core.Keyword(null,"transact!","transact!",-822725810).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__56318.cljs$core$IFn$_invoke$arity$2 ? fexpr__56318.cljs$core$IFn$_invoke$arity$2(conn,tx) : fexpr__56318.call(null,conn,tx));
})());
}),cljs.core.PersistentArrayMap.EMPTY,txs);
return posh.core.after_transact(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(posh_tree,new cljs.core.Keyword(null,"txs","txs",2056038378),cljs.core.PersistentArrayMap.EMPTY),conns_results);
});

//# sourceMappingURL=posh.core.js.map

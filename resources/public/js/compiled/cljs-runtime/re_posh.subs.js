goog.provide('re_posh.subs');
if((typeof re_posh !== 'undefined') && (typeof re_posh.subs !== 'undefined') && (typeof re_posh.subs.execute_sub !== 'undefined')){
} else {
re_posh.subs.execute_sub = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__60828 = cljs.core.get_global_hierarchy;
return (fexpr__60828.cljs$core$IFn$_invoke$arity$0 ? fexpr__60828.cljs$core$IFn$_invoke$arity$0() : fexpr__60828.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("re-posh.subs","execute-sub"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
re_posh.subs.execute_sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"query","query",-1288509510),(function (p__60829){
var map__60830 = p__60829;
var map__60830__$1 = (((((!((map__60830 == null))))?(((((map__60830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60830):map__60830);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60830__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var variables = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60830__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));
var pre_q = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(posh.reagent.q,query,cljs.core.deref(re_posh.db.store));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pre_q,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,variables));
}));
re_posh.subs.execute_sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"pull","pull",-860544805),(function (p__60832){
var map__60833 = p__60832;
var map__60833__$1 = (((((!((map__60833 == null))))?(((((map__60833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60833):map__60833);
var pattern = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60833__$1,new cljs.core.Keyword(null,"pattern","pattern",242135423));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60833__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return posh.reagent.pull(cljs.core.deref(re_posh.db.store),pattern,id);
}));
re_posh.subs.execute_sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"pull-many","pull-many",217148130),(function (p__60835){
var map__60836 = p__60835;
var map__60836__$1 = (((((!((map__60836 == null))))?(((((map__60836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60836.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60836):map__60836);
var pattern = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60836__$1,new cljs.core.Keyword(null,"pattern","pattern",242135423));
var ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60836__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
return posh.reagent.pull_many(cljs.core.deref(re_posh.db.store),pattern,ids);
}));
/**
 * For a given `query-id` register a `config` function and input `signals`
 * 
 *   At an abstract level, a call to this function allows you to register 'the mechanism'
 *   to later fulfil a call to `(subscribe [query-id ...])`.
 * 
 *   To say that another way, reg-sub allows you to create a template for a node
 *   in the signal graph. But note: reg-sub does not cause a node to be created.
 *   It simply allows you to register the template from which such a
 *   node could be created, if it were needed, sometime later, when the call
 *   to `subscribe` is made.
 * 
 *   reg-sub needs three things:
 *  - a `query-id`
 *  - the required inputs for this node
 *  - a function that generates config for query or pull for this node
 * 
 *   The `query-id` is always the 1st argument to reg-sub and it is typically
 *   a namespaced keyword.
 * 
 *   A config function is always the last argument and it has this general form:
 *   `(input-signals, query-vector) -> a-value`
 * 
 *   What goes in between the 1st and last args can vary, but whatever is there will
 *   define the input signals part of the template, and, as a result, it will control
 *   what values the config functions gets as a first argument.
 *   There's 3 ways this function can be called - 3 ways to supply input signals:
 * 
 *   1. No input signals given:
 * 
 *   (reg-sub
 *     :query-id
 *     a-config-fn)   ;; (fn [db v]  ... a-value)
 *   The node's input signal defaults to datascript database, and the value within `ds` is
 *   is given as the 1st argument to the computation function.
 * 
 *   2. A signal function is supplied:
 * 
 *   (reg-sub
 *     :query-id
 *     signal-fn     ;; <-- here, the form is (fn [db v] ... signal | [signal])
 *     config-fn)
 * 
 *   When a node is created from the template, the `signal-fn` will be called and it
 *   is expected to return the input signal(s) as either a singleton, if there is only
 *   one, or a sequence if there are many.
 *   The values from the nominated signals will be supplied as the 1st argument to the
 *   config function - either a singleton or sequence, paralleling
 *   the structure returned by the signal function.
 *   Here, is an example signal-fn, which returns a vector of input signals.
 *     (fn [query-vec]
 *       [(subscribe [:a-sub])
 *        (subscribe [:b-sub])])
 *   For that signal function, the config function must be written
 *   to expect a vector of values for its first argument.
 *     (fn [[a b] _] ....)
 *   If the signal function was simpler and returned a singleton, like this:
 *      (fn [query-vec dynamic-vec]
 *        (subscribe [:a-sub]))
 *   then the config function must be written to expect a single value
 *   as the 1st argument:
 *      (fn [a _] ...)
 * 
 *   3. Syntax Sugar
 * 
 *   (reg-sub
 *     :a-b-sub
 *     :<- [:a-sub]
 *     :<- [:b-sub]
 *     (fn [[a b] [_]] {:a a :b b}))
 * 
 *   This 3rd variation is syntactic sugar for the 2nd. Pairs are supplied instead
 *   of an `input signals` functions. Each pair starts with a `:<-` and a subscription
 *   vector follows.
 *   
 */
re_posh.subs.reg_sub = (function re_posh$subs$reg_sub(var_args){
var args__4742__auto__ = [];
var len__4736__auto___60858 = arguments.length;
var i__4737__auto___60859 = (0);
while(true){
if((i__4737__auto___60859 < len__4736__auto___60858)){
args__4742__auto__.push((arguments[i__4737__auto___60859]));

var G__60860 = (i__4737__auto___60859 + (1));
i__4737__auto___60859 = G__60860;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return re_posh.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(re_posh.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic = (function (query_id,args){
var config_fn = cljs.core.last(args);
var input_args = cljs.core.butlast(args);
var err_header = ["re-posh: reg-sub for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),", "].join('');
var inputs_fn = (function (){var G__60840 = cljs.core.count(input_args);
switch (G__60840) {
case (0):
return (function() {
var G__60862 = null;
var G__60862__1 = (function (_){
return null;
});
var G__60862__2 = (function (_,___$1){
return null;
});
G__60862 = function(_,___$1){
switch(arguments.length){
case 1:
return G__60862__1.call(this,_);
case 2:
return G__60862__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__60862.cljs$core$IFn$_invoke$arity$1 = G__60862__1;
G__60862.cljs$core$IFn$_invoke$arity$2 = G__60862__2;
return G__60862;
})()

break;
case (1):
var f = cljs.core.first(input_args);
if(cljs.core.fn_QMARK_(f)){
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([err_header,"2nd argument expected to ba an inputs function, got: ",f], 0));
}

return f;

break;
case (2):
var vec__60841 = input_args;
var marker = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60841,(0),null);
var vec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60841,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"<-","<-",760412998),marker)){
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([err_header,"expected :<-, got: ",marker], 0));
}

return (function() {
var re_posh$subs$inp_fn = null;
var re_posh$subs$inp_fn__1 = (function (_){
return re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(vec);
});
var re_posh$subs$inp_fn__2 = (function (_,___$1){
return re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(vec);
});
re_posh$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_posh$subs$inp_fn__1.call(this,_);
case 2:
return re_posh$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_posh$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = re_posh$subs$inp_fn__1;
re_posh$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = re_posh$subs$inp_fn__2;
return re_posh$subs$inp_fn;
})()

break;
default:
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),input_args);
var markers = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs);
var vecs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,pairs);
if(((cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"<-","<-",760412998),null], null), null),markers)) && (cljs.core.every_QMARK_(cljs.core.vector_QMARK_,vecs)))){
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([err_header,"expected pairs of :<- and vectors, got:",pairs], 0));
}

return (function() {
var re_posh$subs$inp_fn = null;
var re_posh$subs$inp_fn__1 = (function (_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_frame.core.subscribe,vecs);
});
var re_posh$subs$inp_fn__2 = (function (_,___$1){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_frame.core.subscribe,vecs);
});
re_posh$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_posh$subs$inp_fn__1.call(this,_);
case 2:
return re_posh$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_posh$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = re_posh$subs$inp_fn__1;
re_posh$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = re_posh$subs$inp_fn__2;
return re_posh$subs$inp_fn;
})()

}
})();
return re_frame.core.reg_sub_raw(query_id,(function (_,params){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(input_args),(0))){
return re_posh.subs.execute_sub.cljs$core$IFn$_invoke$arity$1((function (){var G__60844 = cljs.core.deref(cljs.core.deref(re_posh.db.store));
var G__60845 = params;
return (config_fn.cljs$core$IFn$_invoke$arity$2 ? config_fn.cljs$core$IFn$_invoke$arity$2(G__60844,G__60845) : config_fn.call(null,G__60844,G__60845));
})());
} else {
return reagent.ratom.make_reaction((function (){
var inputs = (inputs_fn.cljs$core$IFn$_invoke$arity$1 ? inputs_fn.cljs$core$IFn$_invoke$arity$1(params) : inputs_fn.call(null,params));
var signals = ((cljs.core.seq_QMARK_(inputs))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,inputs):cljs.core.deref(inputs));
return cljs.core.deref(re_posh.subs.execute_sub.cljs$core$IFn$_invoke$arity$1((config_fn.cljs$core$IFn$_invoke$arity$2 ? config_fn.cljs$core$IFn$_invoke$arity$2(signals,params) : config_fn.call(null,signals,params))));
}));
}
}));
}));

(re_posh.subs.reg_sub.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(re_posh.subs.reg_sub.cljs$lang$applyTo = (function (seq60838){
var G__60839 = cljs.core.first(seq60838);
var seq60838__$1 = cljs.core.next(seq60838);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60839,seq60838__$1);
}));

/**
 * Syntax sugar for writing queries. It allows writing query subscription
 * in a very simple way:
 * 
 *   (re-posh/reg-query-sub
 * :query-id
 * '[:find ...
 *   :in $ $1 $2  ;; <- all variables go here
 *   :where ...])
 * 
 *   It's possible to subscibe to this query with
 * 
 *   (re-posh/subscribe [:query-id var-1 var-2])
 * 
 *   so that variables `var-1` and `var-2` will be automatically sent to `:in` form
 *   
 */
re_posh.subs.reg_query_sub = (function re_posh$subs$reg_query_sub(sub_name,query){
return re_posh.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic(sub_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (_,p__60846){
var vec__60847 = p__60846;
var seq__60848 = cljs.core.seq(vec__60847);
var first__60849 = cljs.core.first(seq__60848);
var seq__60848__$1 = cljs.core.next(seq__60848);
var ___$1 = first__60849;
var params = seq__60848__$1;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"variables","variables",1563680814),params], null);
})], 0));
});
/**
 * Syntax sugar for writing pull queries. It allows writing pull subscription
 *   in a very simple way:
 * 
 *   (re-posh/reg-pull-sub
 * :pull-id
 * '[*]) ;;<- pull pattern
 * 
 *   It's possible to subscribe to this pull query with
 * 
 *   (re-posh/subscibe [:pull-id id])
 * 
 *   Where id is an entity id
 */
re_posh.subs.reg_pull_sub = (function re_posh$subs$reg_pull_sub(sub_name,pattern){
return re_posh.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic(sub_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (_,p__60850){
var vec__60851 = p__60850;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60851,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60851,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pull","pull",-860544805),new cljs.core.Keyword(null,"pattern","pattern",242135423),pattern,new cljs.core.Keyword(null,"id","id",-1388402092),id], null);
})], 0));
});
/**
 * Syntax sugar for writing pull-many queries.
 *   Same as reg-pull-sub but takes vector of eids under key :ids
 * 
 *   (reg-pull-many-sub
 * :things
 * '[*])
 * 
 *   It's possible to subscribe to this pull-many query with
 * 
 *   (re-posh/subscribe [:things ids])
 * 
 *   Where ids is a sequence of entity ids
 */
re_posh.subs.reg_pull_many_sub = (function re_posh$subs$reg_pull_many_sub(sub_name,pattern){
return re_posh.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic(sub_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (_,p__60854){
var vec__60855 = p__60854;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60855,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60855,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pull-many","pull-many",217148130),new cljs.core.Keyword(null,"pattern","pattern",242135423),pattern,new cljs.core.Keyword(null,"ids","ids",-998535796),ids], null);
})], 0));
});

//# sourceMappingURL=re_posh.subs.js.map

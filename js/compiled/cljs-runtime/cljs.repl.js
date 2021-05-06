goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__61825){
var map__61826 = p__61825;
var map__61826__$1 = (((((!((map__61826 == null))))?(((((map__61826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61826.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61826):map__61826);
var m = map__61826__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61826__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61826__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__61830_62040 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__61831_62041 = null;
var count__61832_62042 = (0);
var i__61833_62043 = (0);
while(true){
if((i__61833_62043 < count__61832_62042)){
var f_62044 = chunk__61831_62041.cljs$core$IIndexed$_nth$arity$2(null,i__61833_62043);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_62044], 0));


var G__62045 = seq__61830_62040;
var G__62046 = chunk__61831_62041;
var G__62047 = count__61832_62042;
var G__62048 = (i__61833_62043 + (1));
seq__61830_62040 = G__62045;
chunk__61831_62041 = G__62046;
count__61832_62042 = G__62047;
i__61833_62043 = G__62048;
continue;
} else {
var temp__5735__auto___62049 = cljs.core.seq(seq__61830_62040);
if(temp__5735__auto___62049){
var seq__61830_62050__$1 = temp__5735__auto___62049;
if(cljs.core.chunked_seq_QMARK_(seq__61830_62050__$1)){
var c__4556__auto___62052 = cljs.core.chunk_first(seq__61830_62050__$1);
var G__62053 = cljs.core.chunk_rest(seq__61830_62050__$1);
var G__62054 = c__4556__auto___62052;
var G__62055 = cljs.core.count(c__4556__auto___62052);
var G__62056 = (0);
seq__61830_62040 = G__62053;
chunk__61831_62041 = G__62054;
count__61832_62042 = G__62055;
i__61833_62043 = G__62056;
continue;
} else {
var f_62057 = cljs.core.first(seq__61830_62050__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_62057], 0));


var G__62058 = cljs.core.next(seq__61830_62050__$1);
var G__62059 = null;
var G__62060 = (0);
var G__62061 = (0);
seq__61830_62040 = G__62058;
chunk__61831_62041 = G__62059;
count__61832_62042 = G__62060;
i__61833_62043 = G__62061;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_62062 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_62062], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_62062)))?cljs.core.second(arglists_62062):arglists_62062)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__61837_62063 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__61838_62064 = null;
var count__61839_62065 = (0);
var i__61840_62066 = (0);
while(true){
if((i__61840_62066 < count__61839_62065)){
var vec__61853_62067 = chunk__61838_62064.cljs$core$IIndexed$_nth$arity$2(null,i__61840_62066);
var name_62068 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61853_62067,(0),null);
var map__61856_62069 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61853_62067,(1),null);
var map__61856_62070__$1 = (((((!((map__61856_62069 == null))))?(((((map__61856_62069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61856_62069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61856_62069):map__61856_62069);
var doc_62071 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61856_62070__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_62072 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61856_62070__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_62068], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_62072], 0));

if(cljs.core.truth_(doc_62071)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_62071], 0));
} else {
}


var G__62074 = seq__61837_62063;
var G__62075 = chunk__61838_62064;
var G__62076 = count__61839_62065;
var G__62077 = (i__61840_62066 + (1));
seq__61837_62063 = G__62074;
chunk__61838_62064 = G__62075;
count__61839_62065 = G__62076;
i__61840_62066 = G__62077;
continue;
} else {
var temp__5735__auto___62078 = cljs.core.seq(seq__61837_62063);
if(temp__5735__auto___62078){
var seq__61837_62079__$1 = temp__5735__auto___62078;
if(cljs.core.chunked_seq_QMARK_(seq__61837_62079__$1)){
var c__4556__auto___62080 = cljs.core.chunk_first(seq__61837_62079__$1);
var G__62081 = cljs.core.chunk_rest(seq__61837_62079__$1);
var G__62082 = c__4556__auto___62080;
var G__62083 = cljs.core.count(c__4556__auto___62080);
var G__62084 = (0);
seq__61837_62063 = G__62081;
chunk__61838_62064 = G__62082;
count__61839_62065 = G__62083;
i__61840_62066 = G__62084;
continue;
} else {
var vec__61858_62085 = cljs.core.first(seq__61837_62079__$1);
var name_62086 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61858_62085,(0),null);
var map__61861_62087 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61858_62085,(1),null);
var map__61861_62088__$1 = (((((!((map__61861_62087 == null))))?(((((map__61861_62087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61861_62087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61861_62087):map__61861_62087);
var doc_62089 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61861_62088__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_62090 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61861_62088__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_62086], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_62090], 0));

if(cljs.core.truth_(doc_62089)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_62089], 0));
} else {
}


var G__62091 = cljs.core.next(seq__61837_62079__$1);
var G__62092 = null;
var G__62093 = (0);
var G__62094 = (0);
seq__61837_62063 = G__62091;
chunk__61838_62064 = G__62092;
count__61839_62065 = G__62093;
i__61840_62066 = G__62094;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__61865 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__61866 = null;
var count__61867 = (0);
var i__61868 = (0);
while(true){
if((i__61868 < count__61867)){
var role = chunk__61866.cljs$core$IIndexed$_nth$arity$2(null,i__61868);
var temp__5735__auto___62095__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___62095__$1)){
var spec_62096 = temp__5735__auto___62095__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_62096)], 0));
} else {
}


var G__62097 = seq__61865;
var G__62098 = chunk__61866;
var G__62099 = count__61867;
var G__62100 = (i__61868 + (1));
seq__61865 = G__62097;
chunk__61866 = G__62098;
count__61867 = G__62099;
i__61868 = G__62100;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__61865);
if(temp__5735__auto____$1){
var seq__61865__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__61865__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__61865__$1);
var G__62101 = cljs.core.chunk_rest(seq__61865__$1);
var G__62102 = c__4556__auto__;
var G__62103 = cljs.core.count(c__4556__auto__);
var G__62104 = (0);
seq__61865 = G__62101;
chunk__61866 = G__62102;
count__61867 = G__62103;
i__61868 = G__62104;
continue;
} else {
var role = cljs.core.first(seq__61865__$1);
var temp__5735__auto___62105__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___62105__$2)){
var spec_62106 = temp__5735__auto___62105__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_62106)], 0));
} else {
}


var G__62107 = cljs.core.next(seq__61865__$1);
var G__62108 = null;
var G__62109 = (0);
var G__62110 = (0);
seq__61865 = G__62107;
chunk__61866 = G__62108;
count__61867 = G__62109;
i__61868 = G__62110;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__62111 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__62112 = cljs.core.ex_cause(t);
via = G__62111;
t = G__62112;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__61874 = datafied_throwable;
var map__61874__$1 = (((((!((map__61874 == null))))?(((((map__61874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61874):map__61874);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61874__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61874__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61874__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__61875 = cljs.core.last(via);
var map__61875__$1 = (((((!((map__61875 == null))))?(((((map__61875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61875.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61875):map__61875);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61875__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61875__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61875__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__61876 = data;
var map__61876__$1 = (((((!((map__61876 == null))))?(((((map__61876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61876.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61876):map__61876);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61876__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61876__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61876__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__61877 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__61877__$1 = (((((!((map__61877 == null))))?(((((map__61877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61877):map__61877);
var top_data = map__61877__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61877__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__61899 = phase;
var G__61899__$1 = (((G__61899 instanceof cljs.core.Keyword))?G__61899.fqn:null);
switch (G__61899__$1) {
case "read-source":
var map__61904 = data;
var map__61904__$1 = (((((!((map__61904 == null))))?(((((map__61904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61904.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61904):map__61904);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61904__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61904__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__61909 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__61909__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61909,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__61909);
var G__61909__$2 = (cljs.core.truth_((function (){var fexpr__61910 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__61910.cljs$core$IFn$_invoke$arity$1 ? fexpr__61910.cljs$core$IFn$_invoke$arity$1(source) : fexpr__61910.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__61909__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__61909__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61909__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__61909__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__61911 = top_data;
var G__61911__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61911,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__61911);
var G__61911__$2 = (cljs.core.truth_((function (){var fexpr__61917 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__61917.cljs$core$IFn$_invoke$arity$1 ? fexpr__61917.cljs$core$IFn$_invoke$arity$1(source) : fexpr__61917.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__61911__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__61911__$1);
var G__61911__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61911__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__61911__$2);
var G__61911__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61911__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__61911__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61911__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__61911__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__61927 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61927,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61927,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61927,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61927,(3),null);
var G__61930 = top_data;
var G__61930__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61930,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__61930);
var G__61930__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61930__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__61930__$1);
var G__61930__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61930__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__61930__$2);
var G__61930__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61930__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__61930__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61930__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__61930__$4;
}

break;
case "execution":
var vec__61955 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61955,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61955,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61955,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61955,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__61873_SHARP_){
var or__4126__auto__ = (p1__61873_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__61959 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__61959.cljs$core$IFn$_invoke$arity$1 ? fexpr__61959.cljs$core$IFn$_invoke$arity$1(p1__61873_SHARP_) : fexpr__61959.call(null,p1__61873_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__61960 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__61960__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61960,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__61960);
var G__61960__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61960__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__61960__$1);
var G__61960__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61960__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__61960__$2);
var G__61960__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61960__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__61960__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61960__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__61960__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61899__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__61984){
var map__61985 = p__61984;
var map__61985__$1 = (((((!((map__61985 == null))))?(((((map__61985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61985):map__61985);
var triage_data = map__61985__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61985__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61985__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61985__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61985__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61985__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61985__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61985__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61985__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__61999 = phase;
var G__61999__$1 = (((G__61999 instanceof cljs.core.Keyword))?G__61999.fqn:null);
switch (G__61999__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__62000 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__62001 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__62002 = loc;
var G__62003 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__62004_62124 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__62005_62125 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__62006_62126 = true;
var _STAR_print_fn_STAR__temp_val__62007_62127 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__62006_62126);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__62007_62127);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__61973_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__61973_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__62005_62125);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__62004_62124);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__62000,G__62001,G__62002,G__62003) : format.call(null,G__62000,G__62001,G__62002,G__62003));

break;
case "macroexpansion":
var G__62009 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__62010 = cause_type;
var G__62011 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__62012 = loc;
var G__62013 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__62009,G__62010,G__62011,G__62012,G__62013) : format.call(null,G__62009,G__62010,G__62011,G__62012,G__62013));

break;
case "compile-syntax-check":
var G__62014 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__62015 = cause_type;
var G__62016 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__62017 = loc;
var G__62018 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__62014,G__62015,G__62016,G__62017,G__62018) : format.call(null,G__62014,G__62015,G__62016,G__62017,G__62018));

break;
case "compilation":
var G__62020 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__62021 = cause_type;
var G__62022 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__62023 = loc;
var G__62024 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__62020,G__62021,G__62022,G__62023,G__62024) : format.call(null,G__62020,G__62021,G__62022,G__62023,G__62024));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__62025 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__62026 = symbol;
var G__62027 = loc;
var G__62028 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__62029_62128 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__62030_62129 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__62031_62130 = true;
var _STAR_print_fn_STAR__temp_val__62032_62131 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__62031_62130);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__62032_62131);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__61980_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__61980_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__62030_62129);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__62029_62128);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__62025,G__62026,G__62027,G__62028) : format.call(null,G__62025,G__62026,G__62027,G__62028));
} else {
var G__62033 = "Execution error%s at %s(%s).\n%s\n";
var G__62034 = cause_type;
var G__62035 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__62036 = loc;
var G__62037 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__62033,G__62034,G__62035,G__62036,G__62037) : format.call(null,G__62033,G__62034,G__62035,G__62036,G__62037));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61999__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map

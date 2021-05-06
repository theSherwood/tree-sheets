goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_50460 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_50460(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_50461 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_50461(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__49628 = coll;
var G__49629 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__49628,G__49629) : shadow.dom.lazy_native_coll_seq.call(null,G__49628,G__49629));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__49642 = arguments.length;
switch (G__49642) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__49646 = arguments.length;
switch (G__49646) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__49650 = arguments.length;
switch (G__49650) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__49664 = arguments.length;
switch (G__49664) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__49675 = arguments.length;
switch (G__49675) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__49684 = arguments.length;
switch (G__49684) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e49691){if((e49691 instanceof Object)){
var e = e49691;
return console.log("didnt support attachEvent",el,e);
} else {
throw e49691;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__49703 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__49704 = null;
var count__49705 = (0);
var i__49706 = (0);
while(true){
if((i__49706 < count__49705)){
var el = chunk__49704.cljs$core$IIndexed$_nth$arity$2(null,i__49706);
var handler_50500__$1 = ((function (seq__49703,chunk__49704,count__49705,i__49706,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__49703,chunk__49704,count__49705,i__49706,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_50500__$1);


var G__50502 = seq__49703;
var G__50503 = chunk__49704;
var G__50504 = count__49705;
var G__50505 = (i__49706 + (1));
seq__49703 = G__50502;
chunk__49704 = G__50503;
count__49705 = G__50504;
i__49706 = G__50505;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49703);
if(temp__5735__auto__){
var seq__49703__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49703__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49703__$1);
var G__50507 = cljs.core.chunk_rest(seq__49703__$1);
var G__50508 = c__4556__auto__;
var G__50509 = cljs.core.count(c__4556__auto__);
var G__50510 = (0);
seq__49703 = G__50507;
chunk__49704 = G__50508;
count__49705 = G__50509;
i__49706 = G__50510;
continue;
} else {
var el = cljs.core.first(seq__49703__$1);
var handler_50511__$1 = ((function (seq__49703,chunk__49704,count__49705,i__49706,el,seq__49703__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__49703,chunk__49704,count__49705,i__49706,el,seq__49703__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_50511__$1);


var G__50515 = cljs.core.next(seq__49703__$1);
var G__50516 = null;
var G__50517 = (0);
var G__50518 = (0);
seq__49703 = G__50515;
chunk__49704 = G__50516;
count__49705 = G__50517;
i__49706 = G__50518;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__49726 = arguments.length;
switch (G__49726) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__49736 = cljs.core.seq(events);
var chunk__49737 = null;
var count__49738 = (0);
var i__49739 = (0);
while(true){
if((i__49739 < count__49738)){
var vec__49755 = chunk__49737.cljs$core$IIndexed$_nth$arity$2(null,i__49739);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49755,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49755,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__50528 = seq__49736;
var G__50529 = chunk__49737;
var G__50530 = count__49738;
var G__50531 = (i__49739 + (1));
seq__49736 = G__50528;
chunk__49737 = G__50529;
count__49738 = G__50530;
i__49739 = G__50531;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49736);
if(temp__5735__auto__){
var seq__49736__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49736__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49736__$1);
var G__50534 = cljs.core.chunk_rest(seq__49736__$1);
var G__50535 = c__4556__auto__;
var G__50536 = cljs.core.count(c__4556__auto__);
var G__50537 = (0);
seq__49736 = G__50534;
chunk__49737 = G__50535;
count__49738 = G__50536;
i__49739 = G__50537;
continue;
} else {
var vec__49762 = cljs.core.first(seq__49736__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49762,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49762,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__50540 = cljs.core.next(seq__49736__$1);
var G__50541 = null;
var G__50542 = (0);
var G__50543 = (0);
seq__49736 = G__50540;
chunk__49737 = G__50541;
count__49738 = G__50542;
i__49739 = G__50543;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__49765 = cljs.core.seq(styles);
var chunk__49766 = null;
var count__49767 = (0);
var i__49768 = (0);
while(true){
if((i__49768 < count__49767)){
var vec__49783 = chunk__49766.cljs$core$IIndexed$_nth$arity$2(null,i__49768);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49783,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49783,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__50547 = seq__49765;
var G__50548 = chunk__49766;
var G__50549 = count__49767;
var G__50550 = (i__49768 + (1));
seq__49765 = G__50547;
chunk__49766 = G__50548;
count__49767 = G__50549;
i__49768 = G__50550;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49765);
if(temp__5735__auto__){
var seq__49765__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49765__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49765__$1);
var G__50556 = cljs.core.chunk_rest(seq__49765__$1);
var G__50557 = c__4556__auto__;
var G__50558 = cljs.core.count(c__4556__auto__);
var G__50559 = (0);
seq__49765 = G__50556;
chunk__49766 = G__50557;
count__49767 = G__50558;
i__49768 = G__50559;
continue;
} else {
var vec__49790 = cljs.core.first(seq__49765__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49790,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49790,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__50564 = cljs.core.next(seq__49765__$1);
var G__50565 = null;
var G__50566 = (0);
var G__50567 = (0);
seq__49765 = G__50564;
chunk__49766 = G__50565;
count__49767 = G__50566;
i__49768 = G__50567;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__49799_50568 = key;
var G__49799_50569__$1 = (((G__49799_50568 instanceof cljs.core.Keyword))?G__49799_50568.fqn:null);
switch (G__49799_50569__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_50581 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_50581,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_50581,"aria-");
}
})())){
el.setAttribute(ks_50581,value);
} else {
(el[ks_50581] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__49850){
var map__49851 = p__49850;
var map__49851__$1 = (((((!((map__49851 == null))))?(((((map__49851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49851):map__49851);
var props = map__49851__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49851__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__49855 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49855,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49855,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49855,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__49863 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__49863,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__49863;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__49883 = arguments.length;
switch (G__49883) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__49888){
var vec__49889 = p__49888;
var seq__49890 = cljs.core.seq(vec__49889);
var first__49891 = cljs.core.first(seq__49890);
var seq__49890__$1 = cljs.core.next(seq__49890);
var nn = first__49891;
var first__49891__$1 = cljs.core.first(seq__49890__$1);
var seq__49890__$2 = cljs.core.next(seq__49890__$1);
var np = first__49891__$1;
var nc = seq__49890__$2;
var node = vec__49889;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__49899 = nn;
var G__49900 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__49899,G__49900) : create_fn.call(null,G__49899,G__49900));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__49902 = nn;
var G__49903 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__49902,G__49903) : create_fn.call(null,G__49902,G__49903));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__49913 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49913,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49913,(1),null);
var seq__49916_50639 = cljs.core.seq(node_children);
var chunk__49917_50640 = null;
var count__49918_50641 = (0);
var i__49919_50642 = (0);
while(true){
if((i__49919_50642 < count__49918_50641)){
var child_struct_50646 = chunk__49917_50640.cljs$core$IIndexed$_nth$arity$2(null,i__49919_50642);
var children_50648 = shadow.dom.dom_node(child_struct_50646);
if(cljs.core.seq_QMARK_(children_50648)){
var seq__49957_50649 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_50648));
var chunk__49959_50651 = null;
var count__49960_50652 = (0);
var i__49961_50653 = (0);
while(true){
if((i__49961_50653 < count__49960_50652)){
var child_50655 = chunk__49959_50651.cljs$core$IIndexed$_nth$arity$2(null,i__49961_50653);
if(cljs.core.truth_(child_50655)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_50655);


var G__50657 = seq__49957_50649;
var G__50658 = chunk__49959_50651;
var G__50659 = count__49960_50652;
var G__50660 = (i__49961_50653 + (1));
seq__49957_50649 = G__50657;
chunk__49959_50651 = G__50658;
count__49960_50652 = G__50659;
i__49961_50653 = G__50660;
continue;
} else {
var G__50662 = seq__49957_50649;
var G__50663 = chunk__49959_50651;
var G__50664 = count__49960_50652;
var G__50665 = (i__49961_50653 + (1));
seq__49957_50649 = G__50662;
chunk__49959_50651 = G__50663;
count__49960_50652 = G__50664;
i__49961_50653 = G__50665;
continue;
}
} else {
var temp__5735__auto___50671 = cljs.core.seq(seq__49957_50649);
if(temp__5735__auto___50671){
var seq__49957_50672__$1 = temp__5735__auto___50671;
if(cljs.core.chunked_seq_QMARK_(seq__49957_50672__$1)){
var c__4556__auto___50674 = cljs.core.chunk_first(seq__49957_50672__$1);
var G__50675 = cljs.core.chunk_rest(seq__49957_50672__$1);
var G__50676 = c__4556__auto___50674;
var G__50677 = cljs.core.count(c__4556__auto___50674);
var G__50678 = (0);
seq__49957_50649 = G__50675;
chunk__49959_50651 = G__50676;
count__49960_50652 = G__50677;
i__49961_50653 = G__50678;
continue;
} else {
var child_50681 = cljs.core.first(seq__49957_50672__$1);
if(cljs.core.truth_(child_50681)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_50681);


var G__50685 = cljs.core.next(seq__49957_50672__$1);
var G__50686 = null;
var G__50687 = (0);
var G__50688 = (0);
seq__49957_50649 = G__50685;
chunk__49959_50651 = G__50686;
count__49960_50652 = G__50687;
i__49961_50653 = G__50688;
continue;
} else {
var G__50691 = cljs.core.next(seq__49957_50672__$1);
var G__50692 = null;
var G__50693 = (0);
var G__50694 = (0);
seq__49957_50649 = G__50691;
chunk__49959_50651 = G__50692;
count__49960_50652 = G__50693;
i__49961_50653 = G__50694;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_50648);
}


var G__50697 = seq__49916_50639;
var G__50698 = chunk__49917_50640;
var G__50699 = count__49918_50641;
var G__50700 = (i__49919_50642 + (1));
seq__49916_50639 = G__50697;
chunk__49917_50640 = G__50698;
count__49918_50641 = G__50699;
i__49919_50642 = G__50700;
continue;
} else {
var temp__5735__auto___50702 = cljs.core.seq(seq__49916_50639);
if(temp__5735__auto___50702){
var seq__49916_50703__$1 = temp__5735__auto___50702;
if(cljs.core.chunked_seq_QMARK_(seq__49916_50703__$1)){
var c__4556__auto___50704 = cljs.core.chunk_first(seq__49916_50703__$1);
var G__50705 = cljs.core.chunk_rest(seq__49916_50703__$1);
var G__50706 = c__4556__auto___50704;
var G__50707 = cljs.core.count(c__4556__auto___50704);
var G__50708 = (0);
seq__49916_50639 = G__50705;
chunk__49917_50640 = G__50706;
count__49918_50641 = G__50707;
i__49919_50642 = G__50708;
continue;
} else {
var child_struct_50712 = cljs.core.first(seq__49916_50703__$1);
var children_50714 = shadow.dom.dom_node(child_struct_50712);
if(cljs.core.seq_QMARK_(children_50714)){
var seq__49973_50715 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_50714));
var chunk__49975_50716 = null;
var count__49976_50717 = (0);
var i__49977_50718 = (0);
while(true){
if((i__49977_50718 < count__49976_50717)){
var child_50721 = chunk__49975_50716.cljs$core$IIndexed$_nth$arity$2(null,i__49977_50718);
if(cljs.core.truth_(child_50721)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_50721);


var G__50723 = seq__49973_50715;
var G__50724 = chunk__49975_50716;
var G__50725 = count__49976_50717;
var G__50726 = (i__49977_50718 + (1));
seq__49973_50715 = G__50723;
chunk__49975_50716 = G__50724;
count__49976_50717 = G__50725;
i__49977_50718 = G__50726;
continue;
} else {
var G__50727 = seq__49973_50715;
var G__50728 = chunk__49975_50716;
var G__50729 = count__49976_50717;
var G__50730 = (i__49977_50718 + (1));
seq__49973_50715 = G__50727;
chunk__49975_50716 = G__50728;
count__49976_50717 = G__50729;
i__49977_50718 = G__50730;
continue;
}
} else {
var temp__5735__auto___50732__$1 = cljs.core.seq(seq__49973_50715);
if(temp__5735__auto___50732__$1){
var seq__49973_50733__$1 = temp__5735__auto___50732__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49973_50733__$1)){
var c__4556__auto___50734 = cljs.core.chunk_first(seq__49973_50733__$1);
var G__50735 = cljs.core.chunk_rest(seq__49973_50733__$1);
var G__50736 = c__4556__auto___50734;
var G__50737 = cljs.core.count(c__4556__auto___50734);
var G__50738 = (0);
seq__49973_50715 = G__50735;
chunk__49975_50716 = G__50736;
count__49976_50717 = G__50737;
i__49977_50718 = G__50738;
continue;
} else {
var child_50740 = cljs.core.first(seq__49973_50733__$1);
if(cljs.core.truth_(child_50740)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_50740);


var G__50742 = cljs.core.next(seq__49973_50733__$1);
var G__50743 = null;
var G__50744 = (0);
var G__50745 = (0);
seq__49973_50715 = G__50742;
chunk__49975_50716 = G__50743;
count__49976_50717 = G__50744;
i__49977_50718 = G__50745;
continue;
} else {
var G__50750 = cljs.core.next(seq__49973_50733__$1);
var G__50751 = null;
var G__50752 = (0);
var G__50753 = (0);
seq__49973_50715 = G__50750;
chunk__49975_50716 = G__50751;
count__49976_50717 = G__50752;
i__49977_50718 = G__50753;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_50714);
}


var G__50758 = cljs.core.next(seq__49916_50703__$1);
var G__50759 = null;
var G__50760 = (0);
var G__50761 = (0);
seq__49916_50639 = G__50758;
chunk__49917_50640 = G__50759;
count__49918_50641 = G__50760;
i__49919_50642 = G__50761;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__50003 = cljs.core.seq(node);
var chunk__50004 = null;
var count__50005 = (0);
var i__50006 = (0);
while(true){
if((i__50006 < count__50005)){
var n = chunk__50004.cljs$core$IIndexed$_nth$arity$2(null,i__50006);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__50779 = seq__50003;
var G__50780 = chunk__50004;
var G__50781 = count__50005;
var G__50782 = (i__50006 + (1));
seq__50003 = G__50779;
chunk__50004 = G__50780;
count__50005 = G__50781;
i__50006 = G__50782;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__50003);
if(temp__5735__auto__){
var seq__50003__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50003__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__50003__$1);
var G__50783 = cljs.core.chunk_rest(seq__50003__$1);
var G__50784 = c__4556__auto__;
var G__50785 = cljs.core.count(c__4556__auto__);
var G__50786 = (0);
seq__50003 = G__50783;
chunk__50004 = G__50784;
count__50005 = G__50785;
i__50006 = G__50786;
continue;
} else {
var n = cljs.core.first(seq__50003__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__50790 = cljs.core.next(seq__50003__$1);
var G__50791 = null;
var G__50792 = (0);
var G__50793 = (0);
seq__50003 = G__50790;
chunk__50004 = G__50791;
count__50005 = G__50792;
i__50006 = G__50793;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__50031 = arguments.length;
switch (G__50031) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__50046 = arguments.length;
switch (G__50046) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__50055 = arguments.length;
switch (G__50055) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___50815 = arguments.length;
var i__4737__auto___50816 = (0);
while(true){
if((i__4737__auto___50816 < len__4736__auto___50815)){
args__4742__auto__.push((arguments[i__4737__auto___50816]));

var G__50817 = (i__4737__auto___50816 + (1));
i__4737__auto___50816 = G__50817;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__50064_50818 = cljs.core.seq(nodes);
var chunk__50065_50819 = null;
var count__50066_50820 = (0);
var i__50067_50821 = (0);
while(true){
if((i__50067_50821 < count__50066_50820)){
var node_50822 = chunk__50065_50819.cljs$core$IIndexed$_nth$arity$2(null,i__50067_50821);
fragment.appendChild(shadow.dom._to_dom(node_50822));


var G__50823 = seq__50064_50818;
var G__50824 = chunk__50065_50819;
var G__50825 = count__50066_50820;
var G__50826 = (i__50067_50821 + (1));
seq__50064_50818 = G__50823;
chunk__50065_50819 = G__50824;
count__50066_50820 = G__50825;
i__50067_50821 = G__50826;
continue;
} else {
var temp__5735__auto___50827 = cljs.core.seq(seq__50064_50818);
if(temp__5735__auto___50827){
var seq__50064_50828__$1 = temp__5735__auto___50827;
if(cljs.core.chunked_seq_QMARK_(seq__50064_50828__$1)){
var c__4556__auto___50829 = cljs.core.chunk_first(seq__50064_50828__$1);
var G__50831 = cljs.core.chunk_rest(seq__50064_50828__$1);
var G__50832 = c__4556__auto___50829;
var G__50833 = cljs.core.count(c__4556__auto___50829);
var G__50834 = (0);
seq__50064_50818 = G__50831;
chunk__50065_50819 = G__50832;
count__50066_50820 = G__50833;
i__50067_50821 = G__50834;
continue;
} else {
var node_50836 = cljs.core.first(seq__50064_50828__$1);
fragment.appendChild(shadow.dom._to_dom(node_50836));


var G__50837 = cljs.core.next(seq__50064_50828__$1);
var G__50838 = null;
var G__50839 = (0);
var G__50840 = (0);
seq__50064_50818 = G__50837;
chunk__50065_50819 = G__50838;
count__50066_50820 = G__50839;
i__50067_50821 = G__50840;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq50061){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50061));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__50076_50843 = cljs.core.seq(scripts);
var chunk__50077_50844 = null;
var count__50078_50845 = (0);
var i__50079_50846 = (0);
while(true){
if((i__50079_50846 < count__50078_50845)){
var vec__50089_50849 = chunk__50077_50844.cljs$core$IIndexed$_nth$arity$2(null,i__50079_50846);
var script_tag_50850 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50089_50849,(0),null);
var script_body_50851 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50089_50849,(1),null);
eval(script_body_50851);


var G__50853 = seq__50076_50843;
var G__50854 = chunk__50077_50844;
var G__50855 = count__50078_50845;
var G__50856 = (i__50079_50846 + (1));
seq__50076_50843 = G__50853;
chunk__50077_50844 = G__50854;
count__50078_50845 = G__50855;
i__50079_50846 = G__50856;
continue;
} else {
var temp__5735__auto___50858 = cljs.core.seq(seq__50076_50843);
if(temp__5735__auto___50858){
var seq__50076_50859__$1 = temp__5735__auto___50858;
if(cljs.core.chunked_seq_QMARK_(seq__50076_50859__$1)){
var c__4556__auto___50860 = cljs.core.chunk_first(seq__50076_50859__$1);
var G__50861 = cljs.core.chunk_rest(seq__50076_50859__$1);
var G__50862 = c__4556__auto___50860;
var G__50863 = cljs.core.count(c__4556__auto___50860);
var G__50864 = (0);
seq__50076_50843 = G__50861;
chunk__50077_50844 = G__50862;
count__50078_50845 = G__50863;
i__50079_50846 = G__50864;
continue;
} else {
var vec__50093_50865 = cljs.core.first(seq__50076_50859__$1);
var script_tag_50866 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50093_50865,(0),null);
var script_body_50867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50093_50865,(1),null);
eval(script_body_50867);


var G__50868 = cljs.core.next(seq__50076_50859__$1);
var G__50869 = null;
var G__50870 = (0);
var G__50871 = (0);
seq__50076_50843 = G__50868;
chunk__50077_50844 = G__50869;
count__50078_50845 = G__50870;
i__50079_50846 = G__50871;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__50096){
var vec__50097 = p__50096;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50097,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50097,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__50103 = arguments.length;
switch (G__50103) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__50113 = cljs.core.seq(style_keys);
var chunk__50114 = null;
var count__50115 = (0);
var i__50116 = (0);
while(true){
if((i__50116 < count__50115)){
var it = chunk__50114.cljs$core$IIndexed$_nth$arity$2(null,i__50116);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__50885 = seq__50113;
var G__50886 = chunk__50114;
var G__50887 = count__50115;
var G__50888 = (i__50116 + (1));
seq__50113 = G__50885;
chunk__50114 = G__50886;
count__50115 = G__50887;
i__50116 = G__50888;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__50113);
if(temp__5735__auto__){
var seq__50113__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50113__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__50113__$1);
var G__50892 = cljs.core.chunk_rest(seq__50113__$1);
var G__50893 = c__4556__auto__;
var G__50894 = cljs.core.count(c__4556__auto__);
var G__50895 = (0);
seq__50113 = G__50892;
chunk__50114 = G__50893;
count__50115 = G__50894;
i__50116 = G__50895;
continue;
} else {
var it = cljs.core.first(seq__50113__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__50901 = cljs.core.next(seq__50113__$1);
var G__50902 = null;
var G__50903 = (0);
var G__50904 = (0);
seq__50113 = G__50901;
chunk__50114 = G__50902;
count__50115 = G__50903;
i__50116 = G__50904;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k50124,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__50137 = k50124;
var G__50137__$1 = (((G__50137 instanceof cljs.core.Keyword))?G__50137.fqn:null);
switch (G__50137__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50124,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__50140){
var vec__50141 = p__50140;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50141,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50141,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50123){
var self__ = this;
var G__50123__$1 = this;
return (new cljs.core.RecordIter((0),G__50123__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50126,other50127){
var self__ = this;
var this50126__$1 = this;
return (((!((other50127 == null)))) && ((this50126__$1.constructor === other50127.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50126__$1.x,other50127.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50126__$1.y,other50127.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50126__$1.__extmap,other50127.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__50123){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__50157 = cljs.core.keyword_identical_QMARK_;
var expr__50158 = k__4388__auto__;
if(cljs.core.truth_((pred__50157.cljs$core$IFn$_invoke$arity$2 ? pred__50157.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__50158) : pred__50157.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__50158)))){
return (new shadow.dom.Coordinate(G__50123,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50157.cljs$core$IFn$_invoke$arity$2 ? pred__50157.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__50158) : pred__50157.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__50158)))){
return (new shadow.dom.Coordinate(self__.x,G__50123,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__50123),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__50123){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__50123,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__50131){
var extmap__4419__auto__ = (function (){var G__50169 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50131,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__50131)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50169);
} else {
return G__50169;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__50131),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__50131),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k50178,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__50184 = k50178;
var G__50184__$1 = (((G__50184 instanceof cljs.core.Keyword))?G__50184.fqn:null);
switch (G__50184__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50178,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__50186){
var vec__50187 = p__50186;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50187,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50187,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50177){
var self__ = this;
var G__50177__$1 = this;
return (new cljs.core.RecordIter((0),G__50177__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50179,other50180){
var self__ = this;
var this50179__$1 = this;
return (((!((other50180 == null)))) && ((this50179__$1.constructor === other50180.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50179__$1.w,other50180.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50179__$1.h,other50180.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50179__$1.__extmap,other50180.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__50177){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__50211 = cljs.core.keyword_identical_QMARK_;
var expr__50212 = k__4388__auto__;
if(cljs.core.truth_((pred__50211.cljs$core$IFn$_invoke$arity$2 ? pred__50211.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__50212) : pred__50211.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__50212)))){
return (new shadow.dom.Size(G__50177,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50211.cljs$core$IFn$_invoke$arity$2 ? pred__50211.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__50212) : pred__50211.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__50212)))){
return (new shadow.dom.Size(self__.w,G__50177,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__50177),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__50177){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__50177,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__50182){
var extmap__4419__auto__ = (function (){var G__50218 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50182,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__50182)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50218);
} else {
return G__50218;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__50182),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__50182),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__51067 = (i + (1));
var G__51068 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__51067;
ret = G__51068;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__50251){
var vec__50254 = p__50251;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50254,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50254,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__50274 = arguments.length;
switch (G__50274) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__51088 = ps;
var G__51089 = (i + (1));
el__$1 = G__51088;
i = G__51089;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__50317 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50317,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50317,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50317,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__50321_51107 = cljs.core.seq(props);
var chunk__50322_51108 = null;
var count__50323_51109 = (0);
var i__50324_51110 = (0);
while(true){
if((i__50324_51110 < count__50323_51109)){
var vec__50341_51111 = chunk__50322_51108.cljs$core$IIndexed$_nth$arity$2(null,i__50324_51110);
var k_51112 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50341_51111,(0),null);
var v_51113 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50341_51111,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_51112);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_51112),v_51113);


var G__51116 = seq__50321_51107;
var G__51117 = chunk__50322_51108;
var G__51118 = count__50323_51109;
var G__51119 = (i__50324_51110 + (1));
seq__50321_51107 = G__51116;
chunk__50322_51108 = G__51117;
count__50323_51109 = G__51118;
i__50324_51110 = G__51119;
continue;
} else {
var temp__5735__auto___51121 = cljs.core.seq(seq__50321_51107);
if(temp__5735__auto___51121){
var seq__50321_51122__$1 = temp__5735__auto___51121;
if(cljs.core.chunked_seq_QMARK_(seq__50321_51122__$1)){
var c__4556__auto___51123 = cljs.core.chunk_first(seq__50321_51122__$1);
var G__51124 = cljs.core.chunk_rest(seq__50321_51122__$1);
var G__51125 = c__4556__auto___51123;
var G__51126 = cljs.core.count(c__4556__auto___51123);
var G__51127 = (0);
seq__50321_51107 = G__51124;
chunk__50322_51108 = G__51125;
count__50323_51109 = G__51126;
i__50324_51110 = G__51127;
continue;
} else {
var vec__50346_51128 = cljs.core.first(seq__50321_51122__$1);
var k_51129 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50346_51128,(0),null);
var v_51130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50346_51128,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_51129);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_51129),v_51130);


var G__51138 = cljs.core.next(seq__50321_51122__$1);
var G__51139 = null;
var G__51140 = (0);
var G__51141 = (0);
seq__50321_51107 = G__51138;
chunk__50322_51108 = G__51139;
count__50323_51109 = G__51140;
i__50324_51110 = G__51141;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__50354 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50354,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50354,(1),null);
var seq__50357_51143 = cljs.core.seq(node_children);
var chunk__50359_51144 = null;
var count__50360_51145 = (0);
var i__50361_51146 = (0);
while(true){
if((i__50361_51146 < count__50360_51145)){
var child_struct_51150 = chunk__50359_51144.cljs$core$IIndexed$_nth$arity$2(null,i__50361_51146);
if((!((child_struct_51150 == null)))){
if(typeof child_struct_51150 === 'string'){
var text_51151 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_51151),child_struct_51150].join(''));
} else {
var children_51153 = shadow.dom.svg_node(child_struct_51150);
if(cljs.core.seq_QMARK_(children_51153)){
var seq__50384_51154 = cljs.core.seq(children_51153);
var chunk__50386_51155 = null;
var count__50387_51156 = (0);
var i__50388_51157 = (0);
while(true){
if((i__50388_51157 < count__50387_51156)){
var child_51158 = chunk__50386_51155.cljs$core$IIndexed$_nth$arity$2(null,i__50388_51157);
if(cljs.core.truth_(child_51158)){
node.appendChild(child_51158);


var G__51159 = seq__50384_51154;
var G__51160 = chunk__50386_51155;
var G__51161 = count__50387_51156;
var G__51162 = (i__50388_51157 + (1));
seq__50384_51154 = G__51159;
chunk__50386_51155 = G__51160;
count__50387_51156 = G__51161;
i__50388_51157 = G__51162;
continue;
} else {
var G__51164 = seq__50384_51154;
var G__51165 = chunk__50386_51155;
var G__51166 = count__50387_51156;
var G__51167 = (i__50388_51157 + (1));
seq__50384_51154 = G__51164;
chunk__50386_51155 = G__51165;
count__50387_51156 = G__51166;
i__50388_51157 = G__51167;
continue;
}
} else {
var temp__5735__auto___51171 = cljs.core.seq(seq__50384_51154);
if(temp__5735__auto___51171){
var seq__50384_51172__$1 = temp__5735__auto___51171;
if(cljs.core.chunked_seq_QMARK_(seq__50384_51172__$1)){
var c__4556__auto___51173 = cljs.core.chunk_first(seq__50384_51172__$1);
var G__51174 = cljs.core.chunk_rest(seq__50384_51172__$1);
var G__51175 = c__4556__auto___51173;
var G__51176 = cljs.core.count(c__4556__auto___51173);
var G__51177 = (0);
seq__50384_51154 = G__51174;
chunk__50386_51155 = G__51175;
count__50387_51156 = G__51176;
i__50388_51157 = G__51177;
continue;
} else {
var child_51185 = cljs.core.first(seq__50384_51172__$1);
if(cljs.core.truth_(child_51185)){
node.appendChild(child_51185);


var G__51187 = cljs.core.next(seq__50384_51172__$1);
var G__51188 = null;
var G__51189 = (0);
var G__51190 = (0);
seq__50384_51154 = G__51187;
chunk__50386_51155 = G__51188;
count__50387_51156 = G__51189;
i__50388_51157 = G__51190;
continue;
} else {
var G__51192 = cljs.core.next(seq__50384_51172__$1);
var G__51193 = null;
var G__51194 = (0);
var G__51195 = (0);
seq__50384_51154 = G__51192;
chunk__50386_51155 = G__51193;
count__50387_51156 = G__51194;
i__50388_51157 = G__51195;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_51153);
}
}


var G__51197 = seq__50357_51143;
var G__51198 = chunk__50359_51144;
var G__51199 = count__50360_51145;
var G__51200 = (i__50361_51146 + (1));
seq__50357_51143 = G__51197;
chunk__50359_51144 = G__51198;
count__50360_51145 = G__51199;
i__50361_51146 = G__51200;
continue;
} else {
var G__51201 = seq__50357_51143;
var G__51202 = chunk__50359_51144;
var G__51203 = count__50360_51145;
var G__51204 = (i__50361_51146 + (1));
seq__50357_51143 = G__51201;
chunk__50359_51144 = G__51202;
count__50360_51145 = G__51203;
i__50361_51146 = G__51204;
continue;
}
} else {
var temp__5735__auto___51206 = cljs.core.seq(seq__50357_51143);
if(temp__5735__auto___51206){
var seq__50357_51207__$1 = temp__5735__auto___51206;
if(cljs.core.chunked_seq_QMARK_(seq__50357_51207__$1)){
var c__4556__auto___51209 = cljs.core.chunk_first(seq__50357_51207__$1);
var G__51210 = cljs.core.chunk_rest(seq__50357_51207__$1);
var G__51211 = c__4556__auto___51209;
var G__51212 = cljs.core.count(c__4556__auto___51209);
var G__51213 = (0);
seq__50357_51143 = G__51210;
chunk__50359_51144 = G__51211;
count__50360_51145 = G__51212;
i__50361_51146 = G__51213;
continue;
} else {
var child_struct_51214 = cljs.core.first(seq__50357_51207__$1);
if((!((child_struct_51214 == null)))){
if(typeof child_struct_51214 === 'string'){
var text_51215 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_51215),child_struct_51214].join(''));
} else {
var children_51216 = shadow.dom.svg_node(child_struct_51214);
if(cljs.core.seq_QMARK_(children_51216)){
var seq__50396_51217 = cljs.core.seq(children_51216);
var chunk__50398_51218 = null;
var count__50399_51219 = (0);
var i__50400_51220 = (0);
while(true){
if((i__50400_51220 < count__50399_51219)){
var child_51222 = chunk__50398_51218.cljs$core$IIndexed$_nth$arity$2(null,i__50400_51220);
if(cljs.core.truth_(child_51222)){
node.appendChild(child_51222);


var G__51223 = seq__50396_51217;
var G__51224 = chunk__50398_51218;
var G__51225 = count__50399_51219;
var G__51226 = (i__50400_51220 + (1));
seq__50396_51217 = G__51223;
chunk__50398_51218 = G__51224;
count__50399_51219 = G__51225;
i__50400_51220 = G__51226;
continue;
} else {
var G__51227 = seq__50396_51217;
var G__51228 = chunk__50398_51218;
var G__51229 = count__50399_51219;
var G__51230 = (i__50400_51220 + (1));
seq__50396_51217 = G__51227;
chunk__50398_51218 = G__51228;
count__50399_51219 = G__51229;
i__50400_51220 = G__51230;
continue;
}
} else {
var temp__5735__auto___51233__$1 = cljs.core.seq(seq__50396_51217);
if(temp__5735__auto___51233__$1){
var seq__50396_51234__$1 = temp__5735__auto___51233__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50396_51234__$1)){
var c__4556__auto___51235 = cljs.core.chunk_first(seq__50396_51234__$1);
var G__51236 = cljs.core.chunk_rest(seq__50396_51234__$1);
var G__51237 = c__4556__auto___51235;
var G__51238 = cljs.core.count(c__4556__auto___51235);
var G__51239 = (0);
seq__50396_51217 = G__51236;
chunk__50398_51218 = G__51237;
count__50399_51219 = G__51238;
i__50400_51220 = G__51239;
continue;
} else {
var child_51242 = cljs.core.first(seq__50396_51234__$1);
if(cljs.core.truth_(child_51242)){
node.appendChild(child_51242);


var G__51248 = cljs.core.next(seq__50396_51234__$1);
var G__51249 = null;
var G__51250 = (0);
var G__51251 = (0);
seq__50396_51217 = G__51248;
chunk__50398_51218 = G__51249;
count__50399_51219 = G__51250;
i__50400_51220 = G__51251;
continue;
} else {
var G__51253 = cljs.core.next(seq__50396_51234__$1);
var G__51254 = null;
var G__51255 = (0);
var G__51256 = (0);
seq__50396_51217 = G__51253;
chunk__50398_51218 = G__51254;
count__50399_51219 = G__51255;
i__50400_51220 = G__51256;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_51216);
}
}


var G__51259 = cljs.core.next(seq__50357_51207__$1);
var G__51260 = null;
var G__51261 = (0);
var G__51262 = (0);
seq__50357_51143 = G__51259;
chunk__50359_51144 = G__51260;
count__50360_51145 = G__51261;
i__50361_51146 = G__51262;
continue;
} else {
var G__51266 = cljs.core.next(seq__50357_51207__$1);
var G__51267 = null;
var G__51268 = (0);
var G__51269 = (0);
seq__50357_51143 = G__51266;
chunk__50359_51144 = G__51267;
count__50360_51145 = G__51268;
i__50361_51146 = G__51269;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___51276 = arguments.length;
var i__4737__auto___51277 = (0);
while(true){
if((i__4737__auto___51277 < len__4736__auto___51276)){
args__4742__auto__.push((arguments[i__4737__auto___51277]));

var G__51280 = (i__4737__auto___51277 + (1));
i__4737__auto___51277 = G__51280;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq50411){
var G__50412 = cljs.core.first(seq50411);
var seq50411__$1 = cljs.core.next(seq50411);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50412,seq50411__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__50424 = arguments.length;
switch (G__50424) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__45529__auto___51291 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45530__auto__ = (function (){var switch__45419__auto__ = (function (state_50438){
var state_val_50439 = (state_50438[(1)]);
if((state_val_50439 === (1))){
var state_50438__$1 = state_50438;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50438__$1,(2),once_or_cleanup);
} else {
if((state_val_50439 === (2))){
var inst_50435 = (state_50438[(2)]);
var inst_50436 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_50438__$1 = (function (){var statearr_50441 = state_50438;
(statearr_50441[(7)] = inst_50435);

return statearr_50441;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_50438__$1,inst_50436);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__45420__auto__ = null;
var shadow$dom$state_machine__45420__auto____0 = (function (){
var statearr_50443 = [null,null,null,null,null,null,null,null];
(statearr_50443[(0)] = shadow$dom$state_machine__45420__auto__);

(statearr_50443[(1)] = (1));

return statearr_50443;
});
var shadow$dom$state_machine__45420__auto____1 = (function (state_50438){
while(true){
var ret_value__45421__auto__ = (function (){try{while(true){
var result__45422__auto__ = switch__45419__auto__(state_50438);
if(cljs.core.keyword_identical_QMARK_(result__45422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45422__auto__;
}
break;
}
}catch (e50447){var ex__45423__auto__ = e50447;
var statearr_50448_51301 = state_50438;
(statearr_50448_51301[(2)] = ex__45423__auto__);


if(cljs.core.seq((state_50438[(4)]))){
var statearr_50449_51302 = state_50438;
(statearr_50449_51302[(1)] = cljs.core.first((state_50438[(4)])));

} else {
throw ex__45423__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51308 = state_50438;
state_50438 = G__51308;
continue;
} else {
return ret_value__45421__auto__;
}
break;
}
});
shadow$dom$state_machine__45420__auto__ = function(state_50438){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__45420__auto____0.call(this);
case 1:
return shadow$dom$state_machine__45420__auto____1.call(this,state_50438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__45420__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__45420__auto____0;
shadow$dom$state_machine__45420__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__45420__auto____1;
return shadow$dom$state_machine__45420__auto__;
})()
})();
var state__45531__auto__ = (function (){var statearr_50450 = f__45530__auto__();
(statearr_50450[(6)] = c__45529__auto___51291);

return statearr_50450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45531__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map

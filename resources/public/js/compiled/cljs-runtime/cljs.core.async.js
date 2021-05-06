goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__45661 = arguments.length;
switch (G__45661) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45662 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45662 = (function (f,blockable,meta45663){
this.f = f;
this.blockable = blockable;
this.meta45663 = meta45663;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45662.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45664,meta45663__$1){
var self__ = this;
var _45664__$1 = this;
return (new cljs.core.async.t_cljs$core$async45662(self__.f,self__.blockable,meta45663__$1));
}));

(cljs.core.async.t_cljs$core$async45662.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45664){
var self__ = this;
var _45664__$1 = this;
return self__.meta45663;
}));

(cljs.core.async.t_cljs$core$async45662.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45662.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45662.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async45662.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async45662.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta45663","meta45663",599178284,null)], null);
}));

(cljs.core.async.t_cljs$core$async45662.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45662.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45662");

(cljs.core.async.t_cljs$core$async45662.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async45662");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45662.
 */
cljs.core.async.__GT_t_cljs$core$async45662 = (function cljs$core$async$__GT_t_cljs$core$async45662(f__$1,blockable__$1,meta45663){
return (new cljs.core.async.t_cljs$core$async45662(f__$1,blockable__$1,meta45663));
});

}

return (new cljs.core.async.t_cljs$core$async45662(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__45702 = arguments.length;
switch (G__45702) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__45742 = arguments.length;
switch (G__45742) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__45766 = arguments.length;
switch (G__45766) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_49620 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_49620) : fn1.call(null,val_49620));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_49620) : fn1.call(null,val_49620));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__45794 = arguments.length;
switch (G__45794) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___49624 = n;
var x_49625 = (0);
while(true){
if((x_49625 < n__4613__auto___49624)){
(a[x_49625] = x_49625);

var G__49626 = (x_49625 + (1));
x_49625 = G__49626;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45817 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45817 = (function (flag,meta45818){
this.flag = flag;
this.meta45818 = meta45818;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45819,meta45818__$1){
var self__ = this;
var _45819__$1 = this;
return (new cljs.core.async.t_cljs$core$async45817(self__.flag,meta45818__$1));
}));

(cljs.core.async.t_cljs$core$async45817.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45819){
var self__ = this;
var _45819__$1 = this;
return self__.meta45818;
}));

(cljs.core.async.t_cljs$core$async45817.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45817.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async45817.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45817.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async45817.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta45818","meta45818",1050990223,null)], null);
}));

(cljs.core.async.t_cljs$core$async45817.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45817.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45817");

(cljs.core.async.t_cljs$core$async45817.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async45817");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45817.
 */
cljs.core.async.__GT_t_cljs$core$async45817 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async45817(flag__$1,meta45818){
return (new cljs.core.async.t_cljs$core$async45817(flag__$1,meta45818));
});

}

return (new cljs.core.async.t_cljs$core$async45817(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45829 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45829 = (function (flag,cb,meta45830){
this.flag = flag;
this.cb = cb;
this.meta45830 = meta45830;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45829.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45831,meta45830__$1){
var self__ = this;
var _45831__$1 = this;
return (new cljs.core.async.t_cljs$core$async45829(self__.flag,self__.cb,meta45830__$1));
}));

(cljs.core.async.t_cljs$core$async45829.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45831){
var self__ = this;
var _45831__$1 = this;
return self__.meta45830;
}));

(cljs.core.async.t_cljs$core$async45829.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45829.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async45829.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45829.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async45829.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta45830","meta45830",-1076602870,null)], null);
}));

(cljs.core.async.t_cljs$core$async45829.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45829.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45829");

(cljs.core.async.t_cljs$core$async45829.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async45829");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45829.
 */
cljs.core.async.__GT_t_cljs$core$async45829 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async45829(flag__$1,cb__$1,meta45830){
return (new cljs.core.async.t_cljs$core$async45829(flag__$1,cb__$1,meta45830));
});

}

return (new cljs.core.async.t_cljs$core$async45829(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__45839_SHARP_){
var G__45847 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45839_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__45847) : fret.call(null,G__45847));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__45840_SHARP_){
var G__45849 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45840_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__45849) : fret.call(null,G__45849));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__49635 = (i + (1));
i = G__49635;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___49638 = arguments.length;
var i__4737__auto___49639 = (0);
while(true){
if((i__4737__auto___49639 < len__4736__auto___49638)){
args__4742__auto__.push((arguments[i__4737__auto___49639]));

var G__49641 = (i__4737__auto___49639 + (1));
i__4737__auto___49639 = G__49641;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__45861){
var map__45864 = p__45861;
var map__45864__$1 = (((((!((map__45864 == null))))?(((((map__45864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45864):map__45864);
var opts = map__45864__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq45857){
var G__45858 = cljs.core.first(seq45857);
var seq45857__$1 = cljs.core.next(seq45857);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45858,seq45857__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__45880 = arguments.length;
switch (G__45880) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__45529__auto___49653 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45530__auto__ = (function (){var switch__45419__auto__ = (function (state_45994){
var state_val_45997 = (state_45994[(1)]);
if((state_val_45997 === (7))){
var inst_45979 = (state_45994[(2)]);
var state_45994__$1 = state_45994;
var statearr_46036_49655 = state_45994__$1;
(statearr_46036_49655[(2)] = inst_45979);

(statearr_46036_49655[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45997 === (1))){
var state_45994__$1 = state_45994;
var statearr_46043_49656 = state_45994__$1;
(statearr_46043_49656[(2)] = null);

(statearr_46043_49656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45997 === (4))){
var inst_45941 = (state_45994[(7)]);
var inst_45941__$1 = (state_45994[(2)]);
var inst_45953 = (inst_45941__$1 == null);
var state_45994__$1 = (function (){var statearr_46052 = state_45994;
(statearr_46052[(7)] = inst_45941__$1);

return statearr_46052;
})();
if(cljs.core.truth_(inst_45953)){
var statearr_46055_49658 = state_45994__$1;
(statearr_46055_49658[(1)] = (5));

} else {
var statearr_46057_49659 = state_45994__$1;
(statearr_46057_49659[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45997 === (13))){
var state_45994__$1 = state_45994;
var statearr_46080_49661 = state_45994__$1;
(statearr_46080_49661[(2)] = null);

(statearr_46080_49661[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45997 === (6))){
var inst_45941 = (state_45994[(7)]);
var state_45994__$1 = state_45994;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45994__$1,(11),to,inst_45941);
} else {
if((state_val_45997 === (3))){
var inst_45986 = (state_45994[(2)]);
var state_45994__$1 = state_45994;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45994__$1,inst_45986);
} else {
if((state_val_45997 === (12))){
var state_45994__$1 = state_45994;
var statearr_46107_49666 = state_45994__$1;
(statearr_46107_49666[(2)] = null);

(statearr_46107_49666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45997 === (2))){
var state_45994__$1 = state_45994;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45994__$1,(4),from);
} else {
if((state_val_45997 === (11))){
var inst_45969 = (state_45994[(2)]);
var state_45994__$1 = state_45994;
if(cljs.core.truth_(inst_45969)){
var statearr_46119_49667 = state_45994__$1;
(statearr_46119_49667[(1)] = (12));

} else {
var statearr_46122_49668 = state_45994__$1;
(statearr_46122_49668[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45997 === (9))){
var state_45994__$1 = state_45994;
var statearr_46129_49669 = state_45994__$1;
(statearr_46129_49669[(2)] = null);

(statearr_46129_49669[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45997 === (5))){
var state_45994__$1 = state_45994;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46136_49670 = state_45994__$1;
(statearr_46136_49670[(1)] = (8));

} else {
var statearr_46139_49671 = state_45994__$1;
(statearr_46139_49671[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45997 === (14))){
var inst_45977 = (state_45994[(2)]);
var state_45994__$1 = state_45994;
var statearr_46144_49672 = state_45994__$1;
(statearr_46144_49672[(2)] = inst_45977);

(statearr_46144_49672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45997 === (10))){
var inst_45965 = (state_45994[(2)]);
var state_45994__$1 = state_45994;
var statearr_46146_49674 = state_45994__$1;
(statearr_46146_49674[(2)] = inst_45965);

(statearr_46146_49674[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45997 === (8))){
var inst_45958 = cljs.core.async.close_BANG_(to);
var state_45994__$1 = state_45994;
var statearr_46148_49676 = state_45994__$1;
(statearr_46148_49676[(2)] = inst_45958);

(statearr_46148_49676[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45420__auto__ = null;
var cljs$core$async$state_machine__45420__auto____0 = (function (){
var statearr_46155 = [null,null,null,null,null,null,null,null];
(statearr_46155[(0)] = cljs$core$async$state_machine__45420__auto__);

(statearr_46155[(1)] = (1));

return statearr_46155;
});
var cljs$core$async$state_machine__45420__auto____1 = (function (state_45994){
while(true){
var ret_value__45421__auto__ = (function (){try{while(true){
var result__45422__auto__ = switch__45419__auto__(state_45994);
if(cljs.core.keyword_identical_QMARK_(result__45422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45422__auto__;
}
break;
}
}catch (e46156){var ex__45423__auto__ = e46156;
var statearr_46157_49679 = state_45994;
(statearr_46157_49679[(2)] = ex__45423__auto__);


if(cljs.core.seq((state_45994[(4)]))){
var statearr_46158_49680 = state_45994;
(statearr_46158_49680[(1)] = cljs.core.first((state_45994[(4)])));

} else {
throw ex__45423__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49681 = state_45994;
state_45994 = G__49681;
continue;
} else {
return ret_value__45421__auto__;
}
break;
}
});
cljs$core$async$state_machine__45420__auto__ = function(state_45994){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45420__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45420__auto____1.call(this,state_45994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45420__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45420__auto____0;
cljs$core$async$state_machine__45420__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45420__auto____1;
return cljs$core$async$state_machine__45420__auto__;
})()
})();
var state__45531__auto__ = (function (){var statearr_46166 = f__45530__auto__();
(statearr_46166[(6)] = c__45529__auto___49653);

return statearr_46166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45531__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__46186){
var vec__46189 = p__46186;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46189,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46189,(1),null);
var job = vec__46189;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__45529__auto___49689 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45530__auto__ = (function (){var switch__45419__auto__ = (function (state_46208){
var state_val_46209 = (state_46208[(1)]);
if((state_val_46209 === (1))){
var state_46208__$1 = state_46208;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46208__$1,(2),res,v);
} else {
if((state_val_46209 === (2))){
var inst_46205 = (state_46208[(2)]);
var inst_46206 = cljs.core.async.close_BANG_(res);
var state_46208__$1 = (function (){var statearr_46217 = state_46208;
(statearr_46217[(7)] = inst_46205);

return statearr_46217;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46208__$1,inst_46206);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45420__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45420__auto____0 = (function (){
var statearr_46219 = [null,null,null,null,null,null,null,null];
(statearr_46219[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45420__auto__);

(statearr_46219[(1)] = (1));

return statearr_46219;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45420__auto____1 = (function (state_46208){
while(true){
var ret_value__45421__auto__ = (function (){try{while(true){
var result__45422__auto__ = switch__45419__auto__(state_46208);
if(cljs.core.keyword_identical_QMARK_(result__45422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45422__auto__;
}
break;
}
}catch (e46222){var ex__45423__auto__ = e46222;
var statearr_46223_49692 = state_46208;
(statearr_46223_49692[(2)] = ex__45423__auto__);


if(cljs.core.seq((state_46208[(4)]))){
var statearr_46225_49693 = state_46208;
(statearr_46225_49693[(1)] = cljs.core.first((state_46208[(4)])));

} else {
throw ex__45423__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49694 = state_46208;
state_46208 = G__49694;
continue;
} else {
return ret_value__45421__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45420__auto__ = function(state_46208){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45420__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45420__auto____1.call(this,state_46208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45420__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45420__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45420__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45420__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45420__auto__;
})()
})();
var state__45531__auto__ = (function (){var statearr_46236 = f__45530__auto__();
(statearr_46236[(6)] = c__45529__auto___49689);

return statearr_46236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45531__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__46242){
var vec__46252 = p__46242;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46252,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46252,(1),null);
var job = vec__46252;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___49697 = n;
var __49698 = (0);
while(true){
if((__49698 < n__4613__auto___49697)){
var G__46264_49699 = type;
var G__46264_49700__$1 = (((G__46264_49699 instanceof cljs.core.Keyword))?G__46264_49699.fqn:null);
switch (G__46264_49700__$1) {
case "compute":
var c__45529__auto___49702 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__49698,c__45529__auto___49702,G__46264_49699,G__46264_49700__$1,n__4613__auto___49697,jobs,results,process,async){
return (function (){
var f__45530__auto__ = (function (){var switch__45419__auto__ = ((function (__49698,c__45529__auto___49702,G__46264_49699,G__46264_49700__$1,n__4613__auto___49697,jobs,results,process,async){
return (function (state_46289){
var state_val_46290 = (state_46289[(1)]);
if((state_val_46290 === (1))){
var state_46289__$1 = state_46289;
var statearr_46302_49707 = state_46289__$1;
(statearr_46302_49707[(2)] = null);

(statearr_46302_49707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46290 === (2))){
var state_46289__$1 = state_46289;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46289__$1,(4),jobs);
} else {
if((state_val_46290 === (3))){
var inst_46286 = (state_46289[(2)]);
var state_46289__$1 = state_46289;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46289__$1,inst_46286);
} else {
if((state_val_46290 === (4))){
var inst_46275 = (state_46289[(2)]);
var inst_46276 = process(inst_46275);
var state_46289__$1 = state_46289;
if(cljs.core.truth_(inst_46276)){
var statearr_46337_49709 = state_46289__$1;
(statearr_46337_49709[(1)] = (5));

} else {
var statearr_46339_49710 = state_46289__$1;
(statearr_46339_49710[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46290 === (5))){
var state_46289__$1 = state_46289;
var statearr_46340_49711 = state_46289__$1;
(statearr_46340_49711[(2)] = null);

(statearr_46340_49711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46290 === (6))){
var state_46289__$1 = state_46289;
var statearr_46341_49712 = state_46289__$1;
(statearr_46341_49712[(2)] = null);

(statearr_46341_49712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46290 === (7))){
var inst_46283 = (state_46289[(2)]);
var state_46289__$1 = state_46289;
var statearr_46343_49713 = state_46289__$1;
(statearr_46343_49713[(2)] = inst_46283);

(statearr_46343_49713[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__49698,c__45529__auto___49702,G__46264_49699,G__46264_49700__$1,n__4613__auto___49697,jobs,results,process,async))
;
return ((function (__49698,switch__45419__auto__,c__45529__auto___49702,G__46264_49699,G__46264_49700__$1,n__4613__auto___49697,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45420__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45420__auto____0 = (function (){
var statearr_46344 = [null,null,null,null,null,null,null];
(statearr_46344[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45420__auto__);

(statearr_46344[(1)] = (1));

return statearr_46344;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45420__auto____1 = (function (state_46289){
while(true){
var ret_value__45421__auto__ = (function (){try{while(true){
var result__45422__auto__ = switch__45419__auto__(state_46289);
if(cljs.core.keyword_identical_QMARK_(result__45422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45422__auto__;
}
break;
}
}catch (e46345){var ex__45423__auto__ = e46345;
var statearr_46346_49718 = state_46289;
(statearr_46346_49718[(2)] = ex__45423__auto__);


if(cljs.core.seq((state_46289[(4)]))){
var statearr_46349_49720 = state_46289;
(statearr_46349_49720[(1)] = cljs.core.first((state_46289[(4)])));

} else {
throw ex__45423__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49721 = state_46289;
state_46289 = G__49721;
continue;
} else {
return ret_value__45421__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45420__auto__ = function(state_46289){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45420__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45420__auto____1.call(this,state_46289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45420__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45420__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45420__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45420__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45420__auto__;
})()
;})(__49698,switch__45419__auto__,c__45529__auto___49702,G__46264_49699,G__46264_49700__$1,n__4613__auto___49697,jobs,results,process,async))
})();
var state__45531__auto__ = (function (){var statearr_46359 = f__45530__auto__();
(statearr_46359[(6)] = c__45529__auto___49702);

return statearr_46359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45531__auto__);
});})(__49698,c__45529__auto___49702,G__46264_49699,G__46264_49700__$1,n__4613__auto___49697,jobs,results,process,async))
);


break;
case "async":
var c__45529__auto___49727 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__49698,c__45529__auto___49727,G__46264_49699,G__46264_49700__$1,n__4613__auto___49697,jobs,results,process,async){
return (function (){
var f__45530__auto__ = (function (){var switch__45419__auto__ = ((function (__49698,c__45529__auto___49727,G__46264_49699,G__46264_49700__$1,n__4613__auto___49697,jobs,results,process,async){
return (function (state_46374){
var state_val_46375 = (state_46374[(1)]);
if((state_val_46375 === (1))){
var state_46374__$1 = state_46374;
var statearr_46377_49728 = state_46374__$1;
(statearr_46377_49728[(2)] = null);

(statearr_46377_49728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46375 === (2))){
var state_46374__$1 = state_46374;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46374__$1,(4),jobs);
} else {
if((state_val_46375 === (3))){
var inst_46372 = (state_46374[(2)]);
var state_46374__$1 = state_46374;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46374__$1,inst_46372);
} else {
if((state_val_46375 === (4))){
var inst_46362 = (state_46374[(2)]);
var inst_46365 = async(inst_46362);
var state_46374__$1 = state_46374;
if(cljs.core.truth_(inst_46365)){
var statearr_46379_49731 = state_46374__$1;
(statearr_46379_49731[(1)] = (5));

} else {
var statearr_46380_49732 = state_46374__$1;
(statearr_46380_49732[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46375 === (5))){
var state_46374__$1 = state_46374;
var statearr_46382_49733 = state_46374__$1;
(statearr_46382_49733[(2)] = null);

(statearr_46382_49733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46375 === (6))){
var state_46374__$1 = state_46374;
var statearr_46383_49734 = state_46374__$1;
(statearr_46383_49734[(2)] = null);

(statearr_46383_49734[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46375 === (7))){
var inst_46370 = (state_46374[(2)]);
var state_46374__$1 = state_46374;
var statearr_46386_49735 = state_46374__$1;
(statearr_46386_49735[(2)] = inst_46370);

(statearr_46386_49735[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__49698,c__45529__auto___49727,G__46264_49699,G__46264_49700__$1,n__4613__auto___49697,jobs,results,process,async))
;
return ((function (__49698,switch__45419__auto__,c__45529__auto___49727,G__46264_49699,G__46264_49700__$1,n__4613__auto___49697,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45420__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45420__auto____0 = (function (){
var statearr_46391 = [null,null,null,null,null,null,null];
(statearr_46391[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45420__auto__);

(statearr_46391[(1)] = (1));

return statearr_46391;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45420__auto____1 = (function (state_46374){
while(true){
var ret_value__45421__auto__ = (function (){try{while(true){
var result__45422__auto__ = switch__45419__auto__(state_46374);
if(cljs.core.keyword_identical_QMARK_(result__45422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45422__auto__;
}
break;
}
}catch (e46392){var ex__45423__auto__ = e46392;
var statearr_46393_49740 = state_46374;
(statearr_46393_49740[(2)] = ex__45423__auto__);


if(cljs.core.seq((state_46374[(4)]))){
var statearr_46394_49746 = state_46374;
(statearr_46394_49746[(1)] = cljs.core.first((state_46374[(4)])));

} else {
throw ex__45423__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49747 = state_46374;
state_46374 = G__49747;
continue;
} else {
return ret_value__45421__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45420__auto__ = function(state_46374){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45420__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45420__auto____1.call(this,state_46374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45420__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45420__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45420__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45420__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45420__auto__;
})()
;})(__49698,switch__45419__auto__,c__45529__auto___49727,G__46264_49699,G__46264_49700__$1,n__4613__auto___49697,jobs,results,process,async))
})();
var state__45531__auto__ = (function (){var statearr_46402 = f__45530__auto__();
(statearr_46402[(6)] = c__45529__auto___49727);

return statearr_46402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45531__auto__);
});})(__49698,c__45529__auto___49727,G__46264_49699,G__46264_49700__$1,n__4613__auto___49697,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46264_49700__$1)].join('')));

}

var G__49748 = (__49698 + (1));
__49698 = G__49748;
continue;
} else {
}
break;
}

var c__45529__auto___49752 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45530__auto__ = (function (){var switch__45419__auto__ = (function (state_46430){
var state_val_46431 = (state_46430[(1)]);
if((state_val_46431 === (7))){
var inst_46426 = (state_46430[(2)]);
var state_46430__$1 = state_46430;
var statearr_46442_49754 = state_46430__$1;
(statearr_46442_49754[(2)] = inst_46426);

(statearr_46442_49754[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46431 === (1))){
var state_46430__$1 = state_46430;
var statearr_46443_49758 = state_46430__$1;
(statearr_46443_49758[(2)] = null);

(statearr_46443_49758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46431 === (4))){
var inst_46406 = (state_46430[(7)]);
var inst_46406__$1 = (state_46430[(2)]);
var inst_46407 = (inst_46406__$1 == null);
var state_46430__$1 = (function (){var statearr_46447 = state_46430;
(statearr_46447[(7)] = inst_46406__$1);

return statearr_46447;
})();
if(cljs.core.truth_(inst_46407)){
var statearr_46451_49760 = state_46430__$1;
(statearr_46451_49760[(1)] = (5));

} else {
var statearr_46452_49761 = state_46430__$1;
(statearr_46452_49761[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46431 === (6))){
var inst_46406 = (state_46430[(7)]);
var inst_46411 = (state_46430[(8)]);
var inst_46411__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_46417 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46418 = [inst_46406,inst_46411__$1];
var inst_46419 = (new cljs.core.PersistentVector(null,2,(5),inst_46417,inst_46418,null));
var state_46430__$1 = (function (){var statearr_46456 = state_46430;
(statearr_46456[(8)] = inst_46411__$1);

return statearr_46456;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46430__$1,(8),jobs,inst_46419);
} else {
if((state_val_46431 === (3))){
var inst_46428 = (state_46430[(2)]);
var state_46430__$1 = state_46430;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46430__$1,inst_46428);
} else {
if((state_val_46431 === (2))){
var state_46430__$1 = state_46430;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46430__$1,(4),from);
} else {
if((state_val_46431 === (9))){
var inst_46423 = (state_46430[(2)]);
var state_46430__$1 = (function (){var statearr_46462 = state_46430;
(statearr_46462[(9)] = inst_46423);

return statearr_46462;
})();
var statearr_46463_49769 = state_46430__$1;
(statearr_46463_49769[(2)] = null);

(statearr_46463_49769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46431 === (5))){
var inst_46409 = cljs.core.async.close_BANG_(jobs);
var state_46430__$1 = state_46430;
var statearr_46464_49773 = state_46430__$1;
(statearr_46464_49773[(2)] = inst_46409);

(statearr_46464_49773[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46431 === (8))){
var inst_46411 = (state_46430[(8)]);
var inst_46421 = (state_46430[(2)]);
var state_46430__$1 = (function (){var statearr_46465 = state_46430;
(statearr_46465[(10)] = inst_46421);

return statearr_46465;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46430__$1,(9),results,inst_46411);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45420__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45420__auto____0 = (function (){
var statearr_46466 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46466[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45420__auto__);

(statearr_46466[(1)] = (1));

return statearr_46466;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45420__auto____1 = (function (state_46430){
while(true){
var ret_value__45421__auto__ = (function (){try{while(true){
var result__45422__auto__ = switch__45419__auto__(state_46430);
if(cljs.core.keyword_identical_QMARK_(result__45422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45422__auto__;
}
break;
}
}catch (e46469){var ex__45423__auto__ = e46469;
var statearr_46471_49779 = state_46430;
(statearr_46471_49779[(2)] = ex__45423__auto__);


if(cljs.core.seq((state_46430[(4)]))){
var statearr_46474_49780 = state_46430;
(statearr_46474_49780[(1)] = cljs.core.first((state_46430[(4)])));

} else {
throw ex__45423__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49789 = state_46430;
state_46430 = G__49789;
continue;
} else {
return ret_value__45421__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45420__auto__ = function(state_46430){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45420__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45420__auto____1.call(this,state_46430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45420__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45420__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45420__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45420__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45420__auto__;
})()
})();
var state__45531__auto__ = (function (){var statearr_46476 = f__45530__auto__();
(statearr_46476[(6)] = c__45529__auto___49752);

return statearr_46476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45531__auto__);
}));


var c__45529__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45530__auto__ = (function (){var switch__45419__auto__ = (function (state_46534){
var state_val_46535 = (state_46534[(1)]);
if((state_val_46535 === (7))){
var inst_46530 = (state_46534[(2)]);
var state_46534__$1 = state_46534;
var statearr_46536_49793 = state_46534__$1;
(statearr_46536_49793[(2)] = inst_46530);

(statearr_46536_49793[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46535 === (20))){
var state_46534__$1 = state_46534;
var statearr_46537_49795 = state_46534__$1;
(statearr_46537_49795[(2)] = null);

(statearr_46537_49795[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46535 === (1))){
var state_46534__$1 = state_46534;
var statearr_46538_49796 = state_46534__$1;
(statearr_46538_49796[(2)] = null);

(statearr_46538_49796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46535 === (4))){
var inst_46485 = (state_46534[(7)]);
var inst_46485__$1 = (state_46534[(2)]);
var inst_46486 = (inst_46485__$1 == null);
var state_46534__$1 = (function (){var statearr_46541 = state_46534;
(statearr_46541[(7)] = inst_46485__$1);

return statearr_46541;
})();
if(cljs.core.truth_(inst_46486)){
var statearr_46542_49797 = state_46534__$1;
(statearr_46542_49797[(1)] = (5));

} else {
var statearr_46546_49798 = state_46534__$1;
(statearr_46546_49798[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46535 === (15))){
var inst_46512 = (state_46534[(8)]);
var state_46534__$1 = state_46534;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46534__$1,(18),to,inst_46512);
} else {
if((state_val_46535 === (21))){
var inst_46525 = (state_46534[(2)]);
var state_46534__$1 = state_46534;
var statearr_46549_49800 = state_46534__$1;
(statearr_46549_49800[(2)] = inst_46525);

(statearr_46549_49800[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46535 === (13))){
var inst_46527 = (state_46534[(2)]);
var state_46534__$1 = (function (){var statearr_46554 = state_46534;
(statearr_46554[(9)] = inst_46527);

return statearr_46554;
})();
var statearr_46555_49802 = state_46534__$1;
(statearr_46555_49802[(2)] = null);

(statearr_46555_49802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46535 === (6))){
var inst_46485 = (state_46534[(7)]);
var state_46534__$1 = state_46534;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46534__$1,(11),inst_46485);
} else {
if((state_val_46535 === (17))){
var inst_46520 = (state_46534[(2)]);
var state_46534__$1 = state_46534;
if(cljs.core.truth_(inst_46520)){
var statearr_46559_49803 = state_46534__$1;
(statearr_46559_49803[(1)] = (19));

} else {
var statearr_46560_49804 = state_46534__$1;
(statearr_46560_49804[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46535 === (3))){
var inst_46532 = (state_46534[(2)]);
var state_46534__$1 = state_46534;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46534__$1,inst_46532);
} else {
if((state_val_46535 === (12))){
var inst_46509 = (state_46534[(10)]);
var state_46534__$1 = state_46534;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46534__$1,(14),inst_46509);
} else {
if((state_val_46535 === (2))){
var state_46534__$1 = state_46534;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46534__$1,(4),results);
} else {
if((state_val_46535 === (19))){
var state_46534__$1 = state_46534;
var statearr_46566_49816 = state_46534__$1;
(statearr_46566_49816[(2)] = null);

(statearr_46566_49816[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46535 === (11))){
var inst_46509 = (state_46534[(2)]);
var state_46534__$1 = (function (){var statearr_46571 = state_46534;
(statearr_46571[(10)] = inst_46509);

return statearr_46571;
})();
var statearr_46572_49823 = state_46534__$1;
(statearr_46572_49823[(2)] = null);

(statearr_46572_49823[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46535 === (9))){
var state_46534__$1 = state_46534;
var statearr_46573_49828 = state_46534__$1;
(statearr_46573_49828[(2)] = null);

(statearr_46573_49828[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46535 === (5))){
var state_46534__$1 = state_46534;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46578_49829 = state_46534__$1;
(statearr_46578_49829[(1)] = (8));

} else {
var statearr_46579_49834 = state_46534__$1;
(statearr_46579_49834[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46535 === (14))){
var inst_46512 = (state_46534[(8)]);
var inst_46512__$1 = (state_46534[(2)]);
var inst_46513 = (inst_46512__$1 == null);
var inst_46514 = cljs.core.not(inst_46513);
var state_46534__$1 = (function (){var statearr_46582 = state_46534;
(statearr_46582[(8)] = inst_46512__$1);

return statearr_46582;
})();
if(inst_46514){
var statearr_46583_49839 = state_46534__$1;
(statearr_46583_49839[(1)] = (15));

} else {
var statearr_46584_49840 = state_46534__$1;
(statearr_46584_49840[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46535 === (16))){
var state_46534__$1 = state_46534;
var statearr_46585_49845 = state_46534__$1;
(statearr_46585_49845[(2)] = false);

(statearr_46585_49845[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46535 === (10))){
var inst_46502 = (state_46534[(2)]);
var state_46534__$1 = state_46534;
var statearr_46586_49846 = state_46534__$1;
(statearr_46586_49846[(2)] = inst_46502);

(statearr_46586_49846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46535 === (18))){
var inst_46517 = (state_46534[(2)]);
var state_46534__$1 = state_46534;
var statearr_46587_49847 = state_46534__$1;
(statearr_46587_49847[(2)] = inst_46517);

(statearr_46587_49847[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46535 === (8))){
var inst_46499 = cljs.core.async.close_BANG_(to);
var state_46534__$1 = state_46534;
var statearr_46588_49848 = state_46534__$1;
(statearr_46588_49848[(2)] = inst_46499);

(statearr_46588_49848[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45420__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45420__auto____0 = (function (){
var statearr_46591 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46591[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45420__auto__);

(statearr_46591[(1)] = (1));

return statearr_46591;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45420__auto____1 = (function (state_46534){
while(true){
var ret_value__45421__auto__ = (function (){try{while(true){
var result__45422__auto__ = switch__45419__auto__(state_46534);
if(cljs.core.keyword_identical_QMARK_(result__45422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45422__auto__;
}
break;
}
}catch (e46592){var ex__45423__auto__ = e46592;
var statearr_46593_49849 = state_46534;
(statearr_46593_49849[(2)] = ex__45423__auto__);


if(cljs.core.seq((state_46534[(4)]))){
var statearr_46594_49853 = state_46534;
(statearr_46594_49853[(1)] = cljs.core.first((state_46534[(4)])));

} else {
throw ex__45423__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49854 = state_46534;
state_46534 = G__49854;
continue;
} else {
return ret_value__45421__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45420__auto__ = function(state_46534){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45420__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45420__auto____1.call(this,state_46534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45420__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45420__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45420__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45420__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45420__auto__;
})()
})();
var state__45531__auto__ = (function (){var statearr_46595 = f__45530__auto__();
(statearr_46595[(6)] = c__45529__auto__);

return statearr_46595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45531__auto__);
}));

return c__45529__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__46606 = arguments.length;
switch (G__46606) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__46647 = arguments.length;
switch (G__46647) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__46657 = arguments.length;
switch (G__46657) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__45529__auto___49892 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45530__auto__ = (function (){var switch__45419__auto__ = (function (state_46698){
var state_val_46699 = (state_46698[(1)]);
if((state_val_46699 === (7))){
var inst_46691 = (state_46698[(2)]);
var state_46698__$1 = state_46698;
var statearr_46708_49897 = state_46698__$1;
(statearr_46708_49897[(2)] = inst_46691);

(statearr_46708_49897[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46699 === (1))){
var state_46698__$1 = state_46698;
var statearr_46709_49898 = state_46698__$1;
(statearr_46709_49898[(2)] = null);

(statearr_46709_49898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46699 === (4))){
var inst_46667 = (state_46698[(7)]);
var inst_46667__$1 = (state_46698[(2)]);
var inst_46668 = (inst_46667__$1 == null);
var state_46698__$1 = (function (){var statearr_46712 = state_46698;
(statearr_46712[(7)] = inst_46667__$1);

return statearr_46712;
})();
if(cljs.core.truth_(inst_46668)){
var statearr_46713_49901 = state_46698__$1;
(statearr_46713_49901[(1)] = (5));

} else {
var statearr_46714_49905 = state_46698__$1;
(statearr_46714_49905[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46699 === (13))){
var state_46698__$1 = state_46698;
var statearr_46715_49908 = state_46698__$1;
(statearr_46715_49908[(2)] = null);

(statearr_46715_49908[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46699 === (6))){
var inst_46667 = (state_46698[(7)]);
var inst_46677 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_46667) : p.call(null,inst_46667));
var state_46698__$1 = state_46698;
if(cljs.core.truth_(inst_46677)){
var statearr_46721_49910 = state_46698__$1;
(statearr_46721_49910[(1)] = (9));

} else {
var statearr_46725_49911 = state_46698__$1;
(statearr_46725_49911[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46699 === (3))){
var inst_46696 = (state_46698[(2)]);
var state_46698__$1 = state_46698;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46698__$1,inst_46696);
} else {
if((state_val_46699 === (12))){
var state_46698__$1 = state_46698;
var statearr_46727_49912 = state_46698__$1;
(statearr_46727_49912[(2)] = null);

(statearr_46727_49912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46699 === (2))){
var state_46698__$1 = state_46698;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46698__$1,(4),ch);
} else {
if((state_val_46699 === (11))){
var inst_46667 = (state_46698[(7)]);
var inst_46681 = (state_46698[(2)]);
var state_46698__$1 = state_46698;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46698__$1,(8),inst_46681,inst_46667);
} else {
if((state_val_46699 === (9))){
var state_46698__$1 = state_46698;
var statearr_46728_49922 = state_46698__$1;
(statearr_46728_49922[(2)] = tc);

(statearr_46728_49922[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46699 === (5))){
var inst_46674 = cljs.core.async.close_BANG_(tc);
var inst_46675 = cljs.core.async.close_BANG_(fc);
var state_46698__$1 = (function (){var statearr_46729 = state_46698;
(statearr_46729[(8)] = inst_46674);

return statearr_46729;
})();
var statearr_46730_49931 = state_46698__$1;
(statearr_46730_49931[(2)] = inst_46675);

(statearr_46730_49931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46699 === (14))){
var inst_46689 = (state_46698[(2)]);
var state_46698__$1 = state_46698;
var statearr_46733_49933 = state_46698__$1;
(statearr_46733_49933[(2)] = inst_46689);

(statearr_46733_49933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46699 === (10))){
var state_46698__$1 = state_46698;
var statearr_46734_49934 = state_46698__$1;
(statearr_46734_49934[(2)] = fc);

(statearr_46734_49934[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46699 === (8))){
var inst_46683 = (state_46698[(2)]);
var state_46698__$1 = state_46698;
if(cljs.core.truth_(inst_46683)){
var statearr_46735_49935 = state_46698__$1;
(statearr_46735_49935[(1)] = (12));

} else {
var statearr_46736_49936 = state_46698__$1;
(statearr_46736_49936[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45420__auto__ = null;
var cljs$core$async$state_machine__45420__auto____0 = (function (){
var statearr_46741 = [null,null,null,null,null,null,null,null,null];
(statearr_46741[(0)] = cljs$core$async$state_machine__45420__auto__);

(statearr_46741[(1)] = (1));

return statearr_46741;
});
var cljs$core$async$state_machine__45420__auto____1 = (function (state_46698){
while(true){
var ret_value__45421__auto__ = (function (){try{while(true){
var result__45422__auto__ = switch__45419__auto__(state_46698);
if(cljs.core.keyword_identical_QMARK_(result__45422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45422__auto__;
}
break;
}
}catch (e46742){var ex__45423__auto__ = e46742;
var statearr_46743_49937 = state_46698;
(statearr_46743_49937[(2)] = ex__45423__auto__);


if(cljs.core.seq((state_46698[(4)]))){
var statearr_46744_49938 = state_46698;
(statearr_46744_49938[(1)] = cljs.core.first((state_46698[(4)])));

} else {
throw ex__45423__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49939 = state_46698;
state_46698 = G__49939;
continue;
} else {
return ret_value__45421__auto__;
}
break;
}
});
cljs$core$async$state_machine__45420__auto__ = function(state_46698){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45420__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45420__auto____1.call(this,state_46698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45420__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45420__auto____0;
cljs$core$async$state_machine__45420__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45420__auto____1;
return cljs$core$async$state_machine__45420__auto__;
})()
})();
var state__45531__auto__ = (function (){var statearr_46745 = f__45530__auto__();
(statearr_46745[(6)] = c__45529__auto___49892);

return statearr_46745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45531__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__45529__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45530__auto__ = (function (){var switch__45419__auto__ = (function (state_46768){
var state_val_46769 = (state_46768[(1)]);
if((state_val_46769 === (7))){
var inst_46763 = (state_46768[(2)]);
var state_46768__$1 = state_46768;
var statearr_46774_49949 = state_46768__$1;
(statearr_46774_49949[(2)] = inst_46763);

(statearr_46774_49949[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (1))){
var inst_46746 = init;
var inst_46747 = inst_46746;
var state_46768__$1 = (function (){var statearr_46778 = state_46768;
(statearr_46778[(7)] = inst_46747);

return statearr_46778;
})();
var statearr_46779_49952 = state_46768__$1;
(statearr_46779_49952[(2)] = null);

(statearr_46779_49952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (4))){
var inst_46750 = (state_46768[(8)]);
var inst_46750__$1 = (state_46768[(2)]);
var inst_46751 = (inst_46750__$1 == null);
var state_46768__$1 = (function (){var statearr_46780 = state_46768;
(statearr_46780[(8)] = inst_46750__$1);

return statearr_46780;
})();
if(cljs.core.truth_(inst_46751)){
var statearr_46781_49953 = state_46768__$1;
(statearr_46781_49953[(1)] = (5));

} else {
var statearr_46782_49954 = state_46768__$1;
(statearr_46782_49954[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (6))){
var inst_46747 = (state_46768[(7)]);
var inst_46754 = (state_46768[(9)]);
var inst_46750 = (state_46768[(8)]);
var inst_46754__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_46747,inst_46750) : f.call(null,inst_46747,inst_46750));
var inst_46755 = cljs.core.reduced_QMARK_(inst_46754__$1);
var state_46768__$1 = (function (){var statearr_46787 = state_46768;
(statearr_46787[(9)] = inst_46754__$1);

return statearr_46787;
})();
if(inst_46755){
var statearr_46788_49955 = state_46768__$1;
(statearr_46788_49955[(1)] = (8));

} else {
var statearr_46790_49956 = state_46768__$1;
(statearr_46790_49956[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (3))){
var inst_46765 = (state_46768[(2)]);
var state_46768__$1 = state_46768;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46768__$1,inst_46765);
} else {
if((state_val_46769 === (2))){
var state_46768__$1 = state_46768;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46768__$1,(4),ch);
} else {
if((state_val_46769 === (9))){
var inst_46754 = (state_46768[(9)]);
var inst_46747 = inst_46754;
var state_46768__$1 = (function (){var statearr_46793 = state_46768;
(statearr_46793[(7)] = inst_46747);

return statearr_46793;
})();
var statearr_46794_49963 = state_46768__$1;
(statearr_46794_49963[(2)] = null);

(statearr_46794_49963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (5))){
var inst_46747 = (state_46768[(7)]);
var state_46768__$1 = state_46768;
var statearr_46796_49964 = state_46768__$1;
(statearr_46796_49964[(2)] = inst_46747);

(statearr_46796_49964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (10))){
var inst_46761 = (state_46768[(2)]);
var state_46768__$1 = state_46768;
var statearr_46797_49965 = state_46768__$1;
(statearr_46797_49965[(2)] = inst_46761);

(statearr_46797_49965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (8))){
var inst_46754 = (state_46768[(9)]);
var inst_46757 = cljs.core.deref(inst_46754);
var state_46768__$1 = state_46768;
var statearr_46798_49966 = state_46768__$1;
(statearr_46798_49966[(2)] = inst_46757);

(statearr_46798_49966[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__45420__auto__ = null;
var cljs$core$async$reduce_$_state_machine__45420__auto____0 = (function (){
var statearr_46799 = [null,null,null,null,null,null,null,null,null,null];
(statearr_46799[(0)] = cljs$core$async$reduce_$_state_machine__45420__auto__);

(statearr_46799[(1)] = (1));

return statearr_46799;
});
var cljs$core$async$reduce_$_state_machine__45420__auto____1 = (function (state_46768){
while(true){
var ret_value__45421__auto__ = (function (){try{while(true){
var result__45422__auto__ = switch__45419__auto__(state_46768);
if(cljs.core.keyword_identical_QMARK_(result__45422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45422__auto__;
}
break;
}
}catch (e46801){var ex__45423__auto__ = e46801;
var statearr_46804_49969 = state_46768;
(statearr_46804_49969[(2)] = ex__45423__auto__);


if(cljs.core.seq((state_46768[(4)]))){
var statearr_46805_49970 = state_46768;
(statearr_46805_49970[(1)] = cljs.core.first((state_46768[(4)])));

} else {
throw ex__45423__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49971 = state_46768;
state_46768 = G__49971;
continue;
} else {
return ret_value__45421__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__45420__auto__ = function(state_46768){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__45420__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__45420__auto____1.call(this,state_46768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__45420__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__45420__auto____0;
cljs$core$async$reduce_$_state_machine__45420__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__45420__auto____1;
return cljs$core$async$reduce_$_state_machine__45420__auto__;
})()
})();
var state__45531__auto__ = (function (){var statearr_46807 = f__45530__auto__();
(statearr_46807[(6)] = c__45529__auto__);

return statearr_46807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45531__auto__);
}));

return c__45529__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__45529__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45530__auto__ = (function (){var switch__45419__auto__ = (function (state_46823){
var state_val_46824 = (state_46823[(1)]);
if((state_val_46824 === (1))){
var inst_46818 = cljs.core.async.reduce(f__$1,init,ch);
var state_46823__$1 = state_46823;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46823__$1,(2),inst_46818);
} else {
if((state_val_46824 === (2))){
var inst_46820 = (state_46823[(2)]);
var inst_46821 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_46820) : f__$1.call(null,inst_46820));
var state_46823__$1 = state_46823;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46823__$1,inst_46821);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__45420__auto__ = null;
var cljs$core$async$transduce_$_state_machine__45420__auto____0 = (function (){
var statearr_46829 = [null,null,null,null,null,null,null];
(statearr_46829[(0)] = cljs$core$async$transduce_$_state_machine__45420__auto__);

(statearr_46829[(1)] = (1));

return statearr_46829;
});
var cljs$core$async$transduce_$_state_machine__45420__auto____1 = (function (state_46823){
while(true){
var ret_value__45421__auto__ = (function (){try{while(true){
var result__45422__auto__ = switch__45419__auto__(state_46823);
if(cljs.core.keyword_identical_QMARK_(result__45422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45422__auto__;
}
break;
}
}catch (e46833){var ex__45423__auto__ = e46833;
var statearr_46834_49983 = state_46823;
(statearr_46834_49983[(2)] = ex__45423__auto__);


if(cljs.core.seq((state_46823[(4)]))){
var statearr_46836_49984 = state_46823;
(statearr_46836_49984[(1)] = cljs.core.first((state_46823[(4)])));

} else {
throw ex__45423__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49985 = state_46823;
state_46823 = G__49985;
continue;
} else {
return ret_value__45421__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__45420__auto__ = function(state_46823){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__45420__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__45420__auto____1.call(this,state_46823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__45420__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__45420__auto____0;
cljs$core$async$transduce_$_state_machine__45420__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__45420__auto____1;
return cljs$core$async$transduce_$_state_machine__45420__auto__;
})()
})();
var state__45531__auto__ = (function (){var statearr_46839 = f__45530__auto__();
(statearr_46839[(6)] = c__45529__auto__);

return statearr_46839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45531__auto__);
}));

return c__45529__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__46844 = arguments.length;
switch (G__46844) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__45529__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45530__auto__ = (function (){var switch__45419__auto__ = (function (state_46878){
var state_val_46879 = (state_46878[(1)]);
if((state_val_46879 === (7))){
var inst_46860 = (state_46878[(2)]);
var state_46878__$1 = state_46878;
var statearr_46880_49989 = state_46878__$1;
(statearr_46880_49989[(2)] = inst_46860);

(statearr_46880_49989[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46879 === (1))){
var inst_46854 = cljs.core.seq(coll);
var inst_46855 = inst_46854;
var state_46878__$1 = (function (){var statearr_46881 = state_46878;
(statearr_46881[(7)] = inst_46855);

return statearr_46881;
})();
var statearr_46882_49990 = state_46878__$1;
(statearr_46882_49990[(2)] = null);

(statearr_46882_49990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46879 === (4))){
var inst_46855 = (state_46878[(7)]);
var inst_46858 = cljs.core.first(inst_46855);
var state_46878__$1 = state_46878;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46878__$1,(7),ch,inst_46858);
} else {
if((state_val_46879 === (13))){
var inst_46872 = (state_46878[(2)]);
var state_46878__$1 = state_46878;
var statearr_46886_49992 = state_46878__$1;
(statearr_46886_49992[(2)] = inst_46872);

(statearr_46886_49992[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46879 === (6))){
var inst_46863 = (state_46878[(2)]);
var state_46878__$1 = state_46878;
if(cljs.core.truth_(inst_46863)){
var statearr_46889_49993 = state_46878__$1;
(statearr_46889_49993[(1)] = (8));

} else {
var statearr_46890_49996 = state_46878__$1;
(statearr_46890_49996[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46879 === (3))){
var inst_46876 = (state_46878[(2)]);
var state_46878__$1 = state_46878;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46878__$1,inst_46876);
} else {
if((state_val_46879 === (12))){
var state_46878__$1 = state_46878;
var statearr_46891_49999 = state_46878__$1;
(statearr_46891_49999[(2)] = null);

(statearr_46891_49999[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46879 === (2))){
var inst_46855 = (state_46878[(7)]);
var state_46878__$1 = state_46878;
if(cljs.core.truth_(inst_46855)){
var statearr_46894_50008 = state_46878__$1;
(statearr_46894_50008[(1)] = (4));

} else {
var statearr_46895_50009 = state_46878__$1;
(statearr_46895_50009[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46879 === (11))){
var inst_46869 = cljs.core.async.close_BANG_(ch);
var state_46878__$1 = state_46878;
var statearr_46896_50010 = state_46878__$1;
(statearr_46896_50010[(2)] = inst_46869);

(statearr_46896_50010[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46879 === (9))){
var state_46878__$1 = state_46878;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46897_50012 = state_46878__$1;
(statearr_46897_50012[(1)] = (11));

} else {
var statearr_46898_50013 = state_46878__$1;
(statearr_46898_50013[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46879 === (5))){
var inst_46855 = (state_46878[(7)]);
var state_46878__$1 = state_46878;
var statearr_46899_50016 = state_46878__$1;
(statearr_46899_50016[(2)] = inst_46855);

(statearr_46899_50016[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46879 === (10))){
var inst_46874 = (state_46878[(2)]);
var state_46878__$1 = state_46878;
var statearr_46900_50017 = state_46878__$1;
(statearr_46900_50017[(2)] = inst_46874);

(statearr_46900_50017[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46879 === (8))){
var inst_46855 = (state_46878[(7)]);
var inst_46865 = cljs.core.next(inst_46855);
var inst_46855__$1 = inst_46865;
var state_46878__$1 = (function (){var statearr_46901 = state_46878;
(statearr_46901[(7)] = inst_46855__$1);

return statearr_46901;
})();
var statearr_46902_50020 = state_46878__$1;
(statearr_46902_50020[(2)] = null);

(statearr_46902_50020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45420__auto__ = null;
var cljs$core$async$state_machine__45420__auto____0 = (function (){
var statearr_46903 = [null,null,null,null,null,null,null,null];
(statearr_46903[(0)] = cljs$core$async$state_machine__45420__auto__);

(statearr_46903[(1)] = (1));

return statearr_46903;
});
var cljs$core$async$state_machine__45420__auto____1 = (function (state_46878){
while(true){
var ret_value__45421__auto__ = (function (){try{while(true){
var result__45422__auto__ = switch__45419__auto__(state_46878);
if(cljs.core.keyword_identical_QMARK_(result__45422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45422__auto__;
}
break;
}
}catch (e46904){var ex__45423__auto__ = e46904;
var statearr_46905_50022 = state_46878;
(statearr_46905_50022[(2)] = ex__45423__auto__);


if(cljs.core.seq((state_46878[(4)]))){
var statearr_46906_50028 = state_46878;
(statearr_46906_50028[(1)] = cljs.core.first((state_46878[(4)])));

} else {
throw ex__45423__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50030 = state_46878;
state_46878 = G__50030;
continue;
} else {
return ret_value__45421__auto__;
}
break;
}
});
cljs$core$async$state_machine__45420__auto__ = function(state_46878){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45420__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45420__auto____1.call(this,state_46878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45420__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45420__auto____0;
cljs$core$async$state_machine__45420__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45420__auto____1;
return cljs$core$async$state_machine__45420__auto__;
})()
})();
var state__45531__auto__ = (function (){var statearr_46915 = f__45530__auto__();
(statearr_46915[(6)] = c__45529__auto__);

return statearr_46915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45531__auto__);
}));

return c__45529__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__46925 = arguments.length;
switch (G__46925) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_50047 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_50047(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_50048 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_50048(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_50052 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_50052(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_50053 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_50053(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46997 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46997 = (function (ch,cs,meta46998){
this.ch = ch;
this.cs = cs;
this.meta46998 = meta46998;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46997.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46999,meta46998__$1){
var self__ = this;
var _46999__$1 = this;
return (new cljs.core.async.t_cljs$core$async46997(self__.ch,self__.cs,meta46998__$1));
}));

(cljs.core.async.t_cljs$core$async46997.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46999){
var self__ = this;
var _46999__$1 = this;
return self__.meta46998;
}));

(cljs.core.async.t_cljs$core$async46997.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46997.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async46997.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46997.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async46997.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async46997.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async46997.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta46998","meta46998",-913352789,null)], null);
}));

(cljs.core.async.t_cljs$core$async46997.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46997.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46997");

(cljs.core.async.t_cljs$core$async46997.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async46997");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46997.
 */
cljs.core.async.__GT_t_cljs$core$async46997 = (function cljs$core$async$mult_$___GT_t_cljs$core$async46997(ch__$1,cs__$1,meta46998){
return (new cljs.core.async.t_cljs$core$async46997(ch__$1,cs__$1,meta46998));
});

}

return (new cljs.core.async.t_cljs$core$async46997(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__45529__auto___50059 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45530__auto__ = (function (){var switch__45419__auto__ = (function (state_47207){
var state_val_47208 = (state_47207[(1)]);
if((state_val_47208 === (7))){
var inst_47193 = (state_47207[(2)]);
var state_47207__$1 = state_47207;
var statearr_47213_50060 = state_47207__$1;
(statearr_47213_50060[(2)] = inst_47193);

(statearr_47213_50060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47208 === (20))){
var inst_47053 = (state_47207[(7)]);
var inst_47095 = cljs.core.first(inst_47053);
var inst_47096 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47095,(0),null);
var inst_47097 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47095,(1),null);
var state_47207__$1 = (function (){var statearr_47216 = state_47207;
(statearr_47216[(8)] = inst_47096);

return statearr_47216;
})();
if(cljs.core.truth_(inst_47097)){
var statearr_47217_50062 = state_47207__$1;
(statearr_47217_50062[(1)] = (22));

} else {
var statearr_47220_50063 = state_47207__$1;
(statearr_47220_50063[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47208 === (27))){
var inst_47130 = (state_47207[(9)]);
var inst_47012 = (state_47207[(10)]);
var inst_47138 = (state_47207[(11)]);
var inst_47128 = (state_47207[(12)]);
var inst_47138__$1 = cljs.core._nth(inst_47128,inst_47130);
var inst_47139 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_47138__$1,inst_47012,done);
var state_47207__$1 = (function (){var statearr_47241 = state_47207;
(statearr_47241[(11)] = inst_47138__$1);

return statearr_47241;
})();
if(cljs.core.truth_(inst_47139)){
var statearr_47243_50068 = state_47207__$1;
(statearr_47243_50068[(1)] = (30));

} else {
var statearr_47245_50069 = state_47207__$1;
(statearr_47245_50069[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47208 === (1))){
var state_47207__$1 = state_47207;
var statearr_47247_50070 = state_47207__$1;
(statearr_47247_50070[(2)] = null);

(statearr_47247_50070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47208 === (24))){
var inst_47053 = (state_47207[(7)]);
var inst_47102 = (state_47207[(2)]);
var inst_47103 = cljs.core.next(inst_47053);
var inst_47022 = inst_47103;
var inst_47023 = null;
var inst_47024 = (0);
var inst_47025 = (0);
var state_47207__$1 = (function (){var statearr_47253 = state_47207;
(statearr_47253[(13)] = inst_47025);

(statearr_47253[(14)] = inst_47023);

(statearr_47253[(15)] = inst_47022);

(statearr_47253[(16)] = inst_47024);

(statearr_47253[(17)] = inst_47102);

return statearr_47253;
})();
var statearr_47258_50071 = state_47207__$1;
(statearr_47258_50071[(2)] = null);

(statearr_47258_50071[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47208 === (39))){
var state_47207__$1 = state_47207;
var statearr_47265_50072 = state_47207__$1;
(statearr_47265_50072[(2)] = null);

(statearr_47265_50072[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47208 === (4))){
var inst_47012 = (state_47207[(10)]);
var inst_47012__$1 = (state_47207[(2)]);
var inst_47014 = (inst_47012__$1 == null);
var state_47207__$1 = (function (){var statearr_47270 = state_47207;
(statearr_47270[(10)] = inst_47012__$1);

return statearr_47270;
})();
if(cljs.core.truth_(inst_47014)){
var statearr_47271_50083 = state_47207__$1;
(statearr_47271_50083[(1)] = (5));

} else {
var statearr_47272_50084 = state_47207__$1;
(statearr_47272_50084[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47208 === (15))){
var inst_47025 = (state_47207[(13)]);
var inst_47023 = (state_47207[(14)]);
var inst_47022 = (state_47207[(15)]);
var inst_47024 = (state_47207[(16)]);
var inst_47044 = (state_47207[(2)]);
var inst_47049 = (inst_47025 + (1));
var tmp47260 = inst_47023;
var tmp47261 = inst_47022;
var tmp47262 = inst_47024;
var inst_47022__$1 = tmp47261;
var inst_47023__$1 = tmp47260;
var inst_47024__$1 = tmp47262;
var inst_47025__$1 = inst_47049;
var state_47207__$1 = (function (){var statearr_47275 = state_47207;
(statearr_47275[(13)] = inst_47025__$1);

(statearr_47275[(18)] = inst_47044);

(statearr_47275[(14)] = inst_47023__$1);

(statearr_47275[(15)] = inst_47022__$1);

(statearr_47275[(16)] = inst_47024__$1);

return statearr_47275;
})();
var statearr_47276_50092 = state_47207__$1;
(statearr_47276_50092[(2)] = null);

(statearr_47276_50092[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47208 === (21))){
var inst_47106 = (state_47207[(2)]);
var state_47207__$1 = state_47207;
var statearr_47286_50100 = state_47207__$1;
(statearr_47286_50100[(2)] = inst_47106);

(statearr_47286_50100[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47208 === (31))){
var inst_47138 = (state_47207[(11)]);
var inst_47142 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_47138);
var state_47207__$1 = state_47207;
var statearr_47294_50101 = state_47207__$1;
(statearr_47294_50101[(2)] = inst_47142);

(statearr_47294_50101[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47208 === (32))){
var inst_47129 = (state_47207[(19)]);
var inst_47127 = (state_47207[(20)]);
var inst_47130 = (state_47207[(9)]);
var inst_47128 = (state_47207[(12)]);
var inst_47144 = (state_47207[(2)]);
var inst_47145 = (inst_47130 + (1));
var tmp47280 = inst_47129;
var tmp47281 = inst_47127;
var tmp47282 = inst_47128;
var inst_47127__$1 = tmp47281;
var inst_47128__$1 = tmp47282;
var inst_47129__$1 = tmp47280;
var inst_47130__$1 = inst_47145;
var state_47207__$1 = (function (){var statearr_47307 = state_47207;
(statearr_47307[(19)] = inst_47129__$1);

(statearr_47307[(20)] = inst_47127__$1);

(statearr_47307[(9)] = inst_47130__$1);

(statearr_47307[(12)] = inst_47128__$1);

(statearr_47307[(21)] = inst_47144);

return statearr_47307;
})();
var statearr_47309_50104 = state_47207__$1;
(statearr_47309_50104[(2)] = null);

(statearr_47309_50104[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47208 === (40))){
var inst_47164 = (state_47207[(22)]);
var inst_47168 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_47164);
var state_47207__$1 = state_47207;
var statearr_47317_50105 = state_47207__$1;
(statearr_47317_50105[(2)] = inst_47168);

(statearr_47317_50105[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47208 === (33))){
var inst_47152 = (state_47207[(23)]);
var inst_47155 = cljs.core.chunked_seq_QMARK_(inst_47152);
var state_47207__$1 = state_47207;
if(inst_47155){
var statearr_47320_50106 = state_47207__$1;
(statearr_47320_50106[(1)] = (36));

} else {
var statearr_47325_50107 = state_47207__$1;
(statearr_47325_50107[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47208 === (13))){
var inst_47037 = (state_47207[(24)]);
var inst_47041 = cljs.core.async.close_BANG_(inst_47037);
var state_47207__$1 = state_47207;
var statearr_47347_50108 = state_47207__$1;
(statearr_47347_50108[(2)] = inst_47041);

(statearr_47347_50108[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47208 === (22))){
var inst_47096 = (state_47207[(8)]);
var inst_47099 = cljs.core.async.close_BANG_(inst_47096);
var state_47207__$1 = state_47207;
var statearr_47350_50109 = state_47207__$1;
(statearr_47350_50109[(2)] = inst_47099);

(statearr_47350_50109[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47208 === (36))){
var inst_47152 = (state_47207[(23)]);
var inst_47157 = cljs.core.chunk_first(inst_47152);
var inst_47159 = cljs.core.chunk_rest(inst_47152);
var inst_47160 = cljs.core.count(inst_47157);
var inst_47127 = inst_47159;
var inst_47128 = inst_47157;
var inst_47129 = inst_47160;
var inst_47130 = (0);
var state_47207__$1 = (function (){var statearr_47434 = state_47207;
(statearr_47434[(19)] = inst_47129);

(statearr_47434[(20)] = inst_47127);

(statearr_47434[(9)] = inst_47130);

(statearr_47434[(12)] = inst_47128);

return statearr_47434;
})();
var statearr_47435_50110 = state_47207__$1;
(statearr_47435_50110[(2)] = null);

(statearr_47435_50110[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47208 === (41))){
var inst_47152 = (state_47207[(23)]);
var inst_47170 = (state_47207[(2)]);
var inst_47172 = cljs.core.next(inst_47152);
var inst_47127 = inst_47172;
var inst_47128 = null;
var inst_47129 = (0);
var inst_47130 = (0);
var state_47207__$1 = (function (){var statearr_47438 = state_47207;
(statearr_47438[(19)] = inst_47129);

(statearr_47438[(20)] = inst_47127);

(statearr_47438[(9)] = inst_47130);

(statearr_47438[(12)] = inst_47128);

(statearr_47438[(25)] = inst_47170);

return statearr_47438;
})();
var statearr_47439_50111 = state_47207__$1;
(statearr_47439_50111[(2)] = null);

(statearr_47439_50111[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47208 === (43))){
var state_47207__$1 = state_47207;
var statearr_47441_50112 = state_47207__$1;
(statearr_47441_50112[(2)] = null);

(statearr_47441_50112[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47208 === (29))){
var inst_47180 = (state_47207[(2)]);
var state_47207__$1 = state_47207;
var statearr_47443_50117 = state_47207__$1;
(statearr_47443_50117[(2)] = inst_47180);

(statearr_47443_50117[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47208 === (44))){
var inst_47190 = (state_47207[(2)]);
var state_47207__$1 = (function (){var statearr_47446 = state_47207;
(statearr_47446[(26)] = inst_47190);

return statearr_47446;
})();
var statearr_47447_50119 = state_47207__$1;
(statearr_47447_50119[(2)] = null);

(statearr_47447_50119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47208 === (6))){
var inst_47119 = (state_47207[(27)]);
var inst_47118 = cljs.core.deref(cs);
var inst_47119__$1 = cljs.core.keys(inst_47118);
var inst_47120 = cljs.core.count(inst_47119__$1);
var inst_47121 = cljs.core.reset_BANG_(dctr,inst_47120);
var inst_47126 = cljs.core.seq(inst_47119__$1);
var inst_47127 = inst_47126;
var inst_47128 = null;
var inst_47129 = (0);
var inst_47130 = (0);
var state_47207__$1 = (function (){var statearr_47453 = state_47207;
(statearr_47453[(19)] = inst_47129);

(statearr_47453[(20)] = inst_47127);

(statearr_47453[(9)] = inst_47130);

(statearr_47453[(27)] = inst_47119__$1);

(statearr_47453[(12)] = inst_47128);

(statearr_47453[(28)] = inst_47121);

return statearr_47453;
})();
var statearr_47454_50120 = state_47207__$1;
(statearr_47454_50120[(2)] = null);

(statearr_47454_50120[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47208 === (28))){
var inst_47127 = (state_47207[(20)]);
var inst_47152 = (state_47207[(23)]);
var inst_47152__$1 = cljs.core.seq(inst_47127);
var state_47207__$1 = (function (){var statearr_47456 = state_47207;
(statearr_47456[(23)] = inst_47152__$1);

return statearr_47456;
})();
if(inst_47152__$1){
var statearr_47457_50122 = state_47207__$1;
(statearr_47457_50122[(1)] = (33));

} else {
var statearr_47458_50125 = state_47207__$1;
(statearr_47458_50125[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47208 === (25))){
var inst_47129 = (state_47207[(19)]);
var inst_47130 = (state_47207[(9)]);
var inst_47132 = (inst_47130 < inst_47129);
var inst_47133 = inst_47132;
var state_47207__$1 = state_47207;
if(cljs.core.truth_(inst_47133)){
var statearr_47463_50128 = state_47207__$1;
(statearr_47463_50128[(1)] = (27));

} else {
var statearr_47465_50129 = state_47207__$1;
(statearr_47465_50129[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47208 === (34))){
var state_47207__$1 = state_47207;
var statearr_47497_50132 = state_47207__$1;
(statearr_47497_50132[(2)] = null);

(statearr_47497_50132[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47208 === (17))){
var state_47207__$1 = state_47207;
var statearr_47499_50133 = state_47207__$1;
(statearr_47499_50133[(2)] = null);

(statearr_47499_50133[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47208 === (3))){
var inst_47195 = (state_47207[(2)]);
var state_47207__$1 = state_47207;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47207__$1,inst_47195);
} else {
if((state_val_47208 === (12))){
var inst_47111 = (state_47207[(2)]);
var state_47207__$1 = state_47207;
var statearr_47504_50136 = state_47207__$1;
(statearr_47504_50136[(2)] = inst_47111);

(statearr_47504_50136[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47208 === (2))){
var state_47207__$1 = state_47207;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47207__$1,(4),ch);
} else {
if((state_val_47208 === (23))){
var state_47207__$1 = state_47207;
var statearr_47514_50138 = state_47207__$1;
(statearr_47514_50138[(2)] = null);

(statearr_47514_50138[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47208 === (35))){
var inst_47178 = (state_47207[(2)]);
var state_47207__$1 = state_47207;
var statearr_47522_50139 = state_47207__$1;
(statearr_47522_50139[(2)] = inst_47178);

(statearr_47522_50139[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47208 === (19))){
var inst_47053 = (state_47207[(7)]);
var inst_47081 = cljs.core.chunk_first(inst_47053);
var inst_47085 = cljs.core.chunk_rest(inst_47053);
var inst_47089 = cljs.core.count(inst_47081);
var inst_47022 = inst_47085;
var inst_47023 = inst_47081;
var inst_47024 = inst_47089;
var inst_47025 = (0);
var state_47207__$1 = (function (){var statearr_47538 = state_47207;
(statearr_47538[(13)] = inst_47025);

(statearr_47538[(14)] = inst_47023);

(statearr_47538[(15)] = inst_47022);

(statearr_47538[(16)] = inst_47024);

return statearr_47538;
})();
var statearr_47541_50144 = state_47207__$1;
(statearr_47541_50144[(2)] = null);

(statearr_47541_50144[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47208 === (11))){
var inst_47022 = (state_47207[(15)]);
var inst_47053 = (state_47207[(7)]);
var inst_47053__$1 = cljs.core.seq(inst_47022);
var state_47207__$1 = (function (){var statearr_47544 = state_47207;
(statearr_47544[(7)] = inst_47053__$1);

return statearr_47544;
})();
if(inst_47053__$1){
var statearr_47551_50145 = state_47207__$1;
(statearr_47551_50145[(1)] = (16));

} else {
var statearr_47554_50146 = state_47207__$1;
(statearr_47554_50146[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47208 === (9))){
var inst_47113 = (state_47207[(2)]);
var state_47207__$1 = state_47207;
var statearr_47560_50147 = state_47207__$1;
(statearr_47560_50147[(2)] = inst_47113);

(statearr_47560_50147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47208 === (5))){
var inst_47020 = cljs.core.deref(cs);
var inst_47021 = cljs.core.seq(inst_47020);
var inst_47022 = inst_47021;
var inst_47023 = null;
var inst_47024 = (0);
var inst_47025 = (0);
var state_47207__$1 = (function (){var statearr_47574 = state_47207;
(statearr_47574[(13)] = inst_47025);

(statearr_47574[(14)] = inst_47023);

(statearr_47574[(15)] = inst_47022);

(statearr_47574[(16)] = inst_47024);

return statearr_47574;
})();
var statearr_47576_50148 = state_47207__$1;
(statearr_47576_50148[(2)] = null);

(statearr_47576_50148[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47208 === (14))){
var state_47207__$1 = state_47207;
var statearr_47583_50149 = state_47207__$1;
(statearr_47583_50149[(2)] = null);

(statearr_47583_50149[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47208 === (45))){
var inst_47187 = (state_47207[(2)]);
var state_47207__$1 = state_47207;
var statearr_47586_50151 = state_47207__$1;
(statearr_47586_50151[(2)] = inst_47187);

(statearr_47586_50151[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47208 === (26))){
var inst_47119 = (state_47207[(27)]);
var inst_47183 = (state_47207[(2)]);
var inst_47184 = cljs.core.seq(inst_47119);
var state_47207__$1 = (function (){var statearr_47590 = state_47207;
(statearr_47590[(29)] = inst_47183);

return statearr_47590;
})();
if(inst_47184){
var statearr_47591_50152 = state_47207__$1;
(statearr_47591_50152[(1)] = (42));

} else {
var statearr_47592_50153 = state_47207__$1;
(statearr_47592_50153[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47208 === (16))){
var inst_47053 = (state_47207[(7)]);
var inst_47065 = cljs.core.chunked_seq_QMARK_(inst_47053);
var state_47207__$1 = state_47207;
if(inst_47065){
var statearr_47599_50154 = state_47207__$1;
(statearr_47599_50154[(1)] = (19));

} else {
var statearr_47600_50155 = state_47207__$1;
(statearr_47600_50155[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47208 === (38))){
var inst_47175 = (state_47207[(2)]);
var state_47207__$1 = state_47207;
var statearr_47605_50156 = state_47207__$1;
(statearr_47605_50156[(2)] = inst_47175);

(statearr_47605_50156[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47208 === (30))){
var state_47207__$1 = state_47207;
var statearr_47608_50160 = state_47207__$1;
(statearr_47608_50160[(2)] = null);

(statearr_47608_50160[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47208 === (10))){
var inst_47025 = (state_47207[(13)]);
var inst_47023 = (state_47207[(14)]);
var inst_47036 = cljs.core._nth(inst_47023,inst_47025);
var inst_47037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47036,(0),null);
var inst_47038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47036,(1),null);
var state_47207__$1 = (function (){var statearr_47612 = state_47207;
(statearr_47612[(24)] = inst_47037);

return statearr_47612;
})();
if(cljs.core.truth_(inst_47038)){
var statearr_47614_50162 = state_47207__$1;
(statearr_47614_50162[(1)] = (13));

} else {
var statearr_47615_50163 = state_47207__$1;
(statearr_47615_50163[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47208 === (18))){
var inst_47109 = (state_47207[(2)]);
var state_47207__$1 = state_47207;
var statearr_47616_50164 = state_47207__$1;
(statearr_47616_50164[(2)] = inst_47109);

(statearr_47616_50164[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47208 === (42))){
var state_47207__$1 = state_47207;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47207__$1,(45),dchan);
} else {
if((state_val_47208 === (37))){
var inst_47152 = (state_47207[(23)]);
var inst_47012 = (state_47207[(10)]);
var inst_47164 = (state_47207[(22)]);
var inst_47164__$1 = cljs.core.first(inst_47152);
var inst_47165 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_47164__$1,inst_47012,done);
var state_47207__$1 = (function (){var statearr_47623 = state_47207;
(statearr_47623[(22)] = inst_47164__$1);

return statearr_47623;
})();
if(cljs.core.truth_(inst_47165)){
var statearr_47625_50165 = state_47207__$1;
(statearr_47625_50165[(1)] = (39));

} else {
var statearr_47626_50166 = state_47207__$1;
(statearr_47626_50166[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47208 === (8))){
var inst_47025 = (state_47207[(13)]);
var inst_47024 = (state_47207[(16)]);
var inst_47029 = (inst_47025 < inst_47024);
var inst_47030 = inst_47029;
var state_47207__$1 = state_47207;
if(cljs.core.truth_(inst_47030)){
var statearr_47631_50167 = state_47207__$1;
(statearr_47631_50167[(1)] = (10));

} else {
var statearr_47633_50168 = state_47207__$1;
(statearr_47633_50168[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__45420__auto__ = null;
var cljs$core$async$mult_$_state_machine__45420__auto____0 = (function (){
var statearr_47640 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47640[(0)] = cljs$core$async$mult_$_state_machine__45420__auto__);

(statearr_47640[(1)] = (1));

return statearr_47640;
});
var cljs$core$async$mult_$_state_machine__45420__auto____1 = (function (state_47207){
while(true){
var ret_value__45421__auto__ = (function (){try{while(true){
var result__45422__auto__ = switch__45419__auto__(state_47207);
if(cljs.core.keyword_identical_QMARK_(result__45422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45422__auto__;
}
break;
}
}catch (e47648){var ex__45423__auto__ = e47648;
var statearr_47651_50173 = state_47207;
(statearr_47651_50173[(2)] = ex__45423__auto__);


if(cljs.core.seq((state_47207[(4)]))){
var statearr_47652_50174 = state_47207;
(statearr_47652_50174[(1)] = cljs.core.first((state_47207[(4)])));

} else {
throw ex__45423__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50175 = state_47207;
state_47207 = G__50175;
continue;
} else {
return ret_value__45421__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__45420__auto__ = function(state_47207){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__45420__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__45420__auto____1.call(this,state_47207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__45420__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__45420__auto____0;
cljs$core$async$mult_$_state_machine__45420__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__45420__auto____1;
return cljs$core$async$mult_$_state_machine__45420__auto__;
})()
})();
var state__45531__auto__ = (function (){var statearr_47666 = f__45530__auto__();
(statearr_47666[(6)] = c__45529__auto___50059);

return statearr_47666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45531__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__47678 = arguments.length;
switch (G__47678) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_50183 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_50183(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_50185 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_50185(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_50190 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_50190(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_50191 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_50191(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_50194 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_50194(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___50200 = arguments.length;
var i__4737__auto___50201 = (0);
while(true){
if((i__4737__auto___50201 < len__4736__auto___50200)){
args__4742__auto__.push((arguments[i__4737__auto___50201]));

var G__50202 = (i__4737__auto___50201 + (1));
i__4737__auto___50201 = G__50202;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__47778){
var map__47779 = p__47778;
var map__47779__$1 = (((((!((map__47779 == null))))?(((((map__47779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47779):map__47779);
var opts = map__47779__$1;
var statearr_47787_50205 = state;
(statearr_47787_50205[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_47794_50208 = state;
(statearr_47794_50208[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_47796_50210 = state;
(statearr_47796_50210[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq47769){
var G__47770 = cljs.core.first(seq47769);
var seq47769__$1 = cljs.core.next(seq47769);
var G__47771 = cljs.core.first(seq47769__$1);
var seq47769__$2 = cljs.core.next(seq47769__$1);
var G__47772 = cljs.core.first(seq47769__$2);
var seq47769__$3 = cljs.core.next(seq47769__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47770,G__47771,G__47772,seq47769__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47829 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47829 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta47830){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta47830 = meta47830;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47829.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47831,meta47830__$1){
var self__ = this;
var _47831__$1 = this;
return (new cljs.core.async.t_cljs$core$async47829(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta47830__$1));
}));

(cljs.core.async.t_cljs$core$async47829.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47831){
var self__ = this;
var _47831__$1 = this;
return self__.meta47830;
}));

(cljs.core.async.t_cljs$core$async47829.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47829.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async47829.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47829.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47829.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47829.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47829.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47829.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47829.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta47830","meta47830",350722198,null)], null);
}));

(cljs.core.async.t_cljs$core$async47829.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47829.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47829");

(cljs.core.async.t_cljs$core$async47829.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async47829");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47829.
 */
cljs.core.async.__GT_t_cljs$core$async47829 = (function cljs$core$async$mix_$___GT_t_cljs$core$async47829(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta47830){
return (new cljs.core.async.t_cljs$core$async47829(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta47830));
});

}

return (new cljs.core.async.t_cljs$core$async47829(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__45529__auto___50221 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45530__auto__ = (function (){var switch__45419__auto__ = (function (state_48006){
var state_val_48008 = (state_48006[(1)]);
if((state_val_48008 === (7))){
var inst_47886 = (state_48006[(2)]);
var state_48006__$1 = state_48006;
var statearr_48011_50222 = state_48006__$1;
(statearr_48011_50222[(2)] = inst_47886);

(statearr_48011_50222[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48008 === (20))){
var inst_47900 = (state_48006[(7)]);
var state_48006__$1 = state_48006;
var statearr_48012_50223 = state_48006__$1;
(statearr_48012_50223[(2)] = inst_47900);

(statearr_48012_50223[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48008 === (27))){
var state_48006__$1 = state_48006;
var statearr_48014_50228 = state_48006__$1;
(statearr_48014_50228[(2)] = null);

(statearr_48014_50228[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48008 === (1))){
var inst_47870 = (state_48006[(8)]);
var inst_47870__$1 = calc_state();
var inst_47872 = (inst_47870__$1 == null);
var inst_47873 = cljs.core.not(inst_47872);
var state_48006__$1 = (function (){var statearr_48016 = state_48006;
(statearr_48016[(8)] = inst_47870__$1);

return statearr_48016;
})();
if(inst_47873){
var statearr_48017_50240 = state_48006__$1;
(statearr_48017_50240[(1)] = (2));

} else {
var statearr_48018_50241 = state_48006__$1;
(statearr_48018_50241[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48008 === (24))){
var inst_47924 = (state_48006[(9)]);
var inst_47934 = (state_48006[(10)]);
var inst_47971 = (state_48006[(11)]);
var inst_47971__$1 = (inst_47924.cljs$core$IFn$_invoke$arity$1 ? inst_47924.cljs$core$IFn$_invoke$arity$1(inst_47934) : inst_47924.call(null,inst_47934));
var state_48006__$1 = (function (){var statearr_48019 = state_48006;
(statearr_48019[(11)] = inst_47971__$1);

return statearr_48019;
})();
if(cljs.core.truth_(inst_47971__$1)){
var statearr_48022_50261 = state_48006__$1;
(statearr_48022_50261[(1)] = (29));

} else {
var statearr_48024_50263 = state_48006__$1;
(statearr_48024_50263[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48008 === (4))){
var inst_47889 = (state_48006[(2)]);
var state_48006__$1 = state_48006;
if(cljs.core.truth_(inst_47889)){
var statearr_48025_50265 = state_48006__$1;
(statearr_48025_50265[(1)] = (8));

} else {
var statearr_48029_50267 = state_48006__$1;
(statearr_48029_50267[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48008 === (15))){
var inst_47918 = (state_48006[(2)]);
var state_48006__$1 = state_48006;
if(cljs.core.truth_(inst_47918)){
var statearr_48030_50270 = state_48006__$1;
(statearr_48030_50270[(1)] = (19));

} else {
var statearr_48031_50273 = state_48006__$1;
(statearr_48031_50273[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48008 === (21))){
var inst_47923 = (state_48006[(12)]);
var inst_47923__$1 = (state_48006[(2)]);
var inst_47924 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47923__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47925 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47923__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47926 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47923__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_48006__$1 = (function (){var statearr_48035 = state_48006;
(statearr_48035[(9)] = inst_47924);

(statearr_48035[(12)] = inst_47923__$1);

(statearr_48035[(13)] = inst_47925);

return statearr_48035;
})();
return cljs.core.async.ioc_alts_BANG_(state_48006__$1,(22),inst_47926);
} else {
if((state_val_48008 === (31))){
var inst_47983 = (state_48006[(2)]);
var state_48006__$1 = state_48006;
if(cljs.core.truth_(inst_47983)){
var statearr_48036_50279 = state_48006__$1;
(statearr_48036_50279[(1)] = (32));

} else {
var statearr_48037_50280 = state_48006__$1;
(statearr_48037_50280[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48008 === (32))){
var inst_47933 = (state_48006[(14)]);
var state_48006__$1 = state_48006;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48006__$1,(35),out,inst_47933);
} else {
if((state_val_48008 === (33))){
var inst_47923 = (state_48006[(12)]);
var inst_47900 = inst_47923;
var state_48006__$1 = (function (){var statearr_48040 = state_48006;
(statearr_48040[(7)] = inst_47900);

return statearr_48040;
})();
var statearr_48041_50285 = state_48006__$1;
(statearr_48041_50285[(2)] = null);

(statearr_48041_50285[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48008 === (13))){
var inst_47900 = (state_48006[(7)]);
var inst_47907 = inst_47900.cljs$lang$protocol_mask$partition0$;
var inst_47908 = (inst_47907 & (64));
var inst_47909 = inst_47900.cljs$core$ISeq$;
var inst_47910 = (cljs.core.PROTOCOL_SENTINEL === inst_47909);
var inst_47911 = ((inst_47908) || (inst_47910));
var state_48006__$1 = state_48006;
if(cljs.core.truth_(inst_47911)){
var statearr_48046_50288 = state_48006__$1;
(statearr_48046_50288[(1)] = (16));

} else {
var statearr_48049_50289 = state_48006__$1;
(statearr_48049_50289[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48008 === (22))){
var inst_47934 = (state_48006[(10)]);
var inst_47933 = (state_48006[(14)]);
var inst_47932 = (state_48006[(2)]);
var inst_47933__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47932,(0),null);
var inst_47934__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47932,(1),null);
var inst_47936 = (inst_47933__$1 == null);
var inst_47937 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47934__$1,change);
var inst_47938 = ((inst_47936) || (inst_47937));
var state_48006__$1 = (function (){var statearr_48051 = state_48006;
(statearr_48051[(10)] = inst_47934__$1);

(statearr_48051[(14)] = inst_47933__$1);

return statearr_48051;
})();
if(cljs.core.truth_(inst_47938)){
var statearr_48055_50296 = state_48006__$1;
(statearr_48055_50296[(1)] = (23));

} else {
var statearr_48057_50298 = state_48006__$1;
(statearr_48057_50298[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48008 === (36))){
var inst_47923 = (state_48006[(12)]);
var inst_47900 = inst_47923;
var state_48006__$1 = (function (){var statearr_48059 = state_48006;
(statearr_48059[(7)] = inst_47900);

return statearr_48059;
})();
var statearr_48060_50301 = state_48006__$1;
(statearr_48060_50301[(2)] = null);

(statearr_48060_50301[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48008 === (29))){
var inst_47971 = (state_48006[(11)]);
var state_48006__$1 = state_48006;
var statearr_48064_50302 = state_48006__$1;
(statearr_48064_50302[(2)] = inst_47971);

(statearr_48064_50302[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48008 === (6))){
var state_48006__$1 = state_48006;
var statearr_48065_50303 = state_48006__$1;
(statearr_48065_50303[(2)] = false);

(statearr_48065_50303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48008 === (28))){
var inst_47945 = (state_48006[(2)]);
var inst_47946 = calc_state();
var inst_47900 = inst_47946;
var state_48006__$1 = (function (){var statearr_48066 = state_48006;
(statearr_48066[(15)] = inst_47945);

(statearr_48066[(7)] = inst_47900);

return statearr_48066;
})();
var statearr_48067_50304 = state_48006__$1;
(statearr_48067_50304[(2)] = null);

(statearr_48067_50304[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48008 === (25))){
var inst_48001 = (state_48006[(2)]);
var state_48006__$1 = state_48006;
var statearr_48068_50306 = state_48006__$1;
(statearr_48068_50306[(2)] = inst_48001);

(statearr_48068_50306[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48008 === (34))){
var inst_47999 = (state_48006[(2)]);
var state_48006__$1 = state_48006;
var statearr_48069_50307 = state_48006__$1;
(statearr_48069_50307[(2)] = inst_47999);

(statearr_48069_50307[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48008 === (17))){
var state_48006__$1 = state_48006;
var statearr_48072_50309 = state_48006__$1;
(statearr_48072_50309[(2)] = false);

(statearr_48072_50309[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48008 === (3))){
var state_48006__$1 = state_48006;
var statearr_48076_50310 = state_48006__$1;
(statearr_48076_50310[(2)] = false);

(statearr_48076_50310[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48008 === (12))){
var inst_48003 = (state_48006[(2)]);
var state_48006__$1 = state_48006;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48006__$1,inst_48003);
} else {
if((state_val_48008 === (2))){
var inst_47870 = (state_48006[(8)]);
var inst_47878 = inst_47870.cljs$lang$protocol_mask$partition0$;
var inst_47879 = (inst_47878 & (64));
var inst_47880 = inst_47870.cljs$core$ISeq$;
var inst_47881 = (cljs.core.PROTOCOL_SENTINEL === inst_47880);
var inst_47882 = ((inst_47879) || (inst_47881));
var state_48006__$1 = state_48006;
if(cljs.core.truth_(inst_47882)){
var statearr_48077_50311 = state_48006__$1;
(statearr_48077_50311[(1)] = (5));

} else {
var statearr_48079_50312 = state_48006__$1;
(statearr_48079_50312[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48008 === (23))){
var inst_47933 = (state_48006[(14)]);
var inst_47940 = (inst_47933 == null);
var state_48006__$1 = state_48006;
if(cljs.core.truth_(inst_47940)){
var statearr_48082_50313 = state_48006__$1;
(statearr_48082_50313[(1)] = (26));

} else {
var statearr_48083_50314 = state_48006__$1;
(statearr_48083_50314[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48008 === (35))){
var inst_47986 = (state_48006[(2)]);
var state_48006__$1 = state_48006;
if(cljs.core.truth_(inst_47986)){
var statearr_48084_50315 = state_48006__$1;
(statearr_48084_50315[(1)] = (36));

} else {
var statearr_48085_50316 = state_48006__$1;
(statearr_48085_50316[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48008 === (19))){
var inst_47900 = (state_48006[(7)]);
var inst_47920 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_47900);
var state_48006__$1 = state_48006;
var statearr_48086_50320 = state_48006__$1;
(statearr_48086_50320[(2)] = inst_47920);

(statearr_48086_50320[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48008 === (11))){
var inst_47900 = (state_48006[(7)]);
var inst_47904 = (inst_47900 == null);
var inst_47905 = cljs.core.not(inst_47904);
var state_48006__$1 = state_48006;
if(inst_47905){
var statearr_48090_50325 = state_48006__$1;
(statearr_48090_50325[(1)] = (13));

} else {
var statearr_48091_50326 = state_48006__$1;
(statearr_48091_50326[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48008 === (9))){
var inst_47870 = (state_48006[(8)]);
var state_48006__$1 = state_48006;
var statearr_48092_50331 = state_48006__$1;
(statearr_48092_50331[(2)] = inst_47870);

(statearr_48092_50331[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48008 === (5))){
var state_48006__$1 = state_48006;
var statearr_48097_50332 = state_48006__$1;
(statearr_48097_50332[(2)] = true);

(statearr_48097_50332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48008 === (14))){
var state_48006__$1 = state_48006;
var statearr_48098_50333 = state_48006__$1;
(statearr_48098_50333[(2)] = false);

(statearr_48098_50333[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48008 === (26))){
var inst_47934 = (state_48006[(10)]);
var inst_47942 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_47934);
var state_48006__$1 = state_48006;
var statearr_48103_50339 = state_48006__$1;
(statearr_48103_50339[(2)] = inst_47942);

(statearr_48103_50339[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48008 === (16))){
var state_48006__$1 = state_48006;
var statearr_48111_50340 = state_48006__$1;
(statearr_48111_50340[(2)] = true);

(statearr_48111_50340[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48008 === (38))){
var inst_47995 = (state_48006[(2)]);
var state_48006__$1 = state_48006;
var statearr_48115_50344 = state_48006__$1;
(statearr_48115_50344[(2)] = inst_47995);

(statearr_48115_50344[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48008 === (30))){
var inst_47924 = (state_48006[(9)]);
var inst_47934 = (state_48006[(10)]);
var inst_47925 = (state_48006[(13)]);
var inst_47974 = cljs.core.empty_QMARK_(inst_47924);
var inst_47975 = (inst_47925.cljs$core$IFn$_invoke$arity$1 ? inst_47925.cljs$core$IFn$_invoke$arity$1(inst_47934) : inst_47925.call(null,inst_47934));
var inst_47976 = cljs.core.not(inst_47975);
var inst_47977 = ((inst_47974) && (inst_47976));
var state_48006__$1 = state_48006;
var statearr_48121_50345 = state_48006__$1;
(statearr_48121_50345[(2)] = inst_47977);

(statearr_48121_50345[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48008 === (10))){
var inst_47870 = (state_48006[(8)]);
var inst_47894 = (state_48006[(2)]);
var inst_47895 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47894,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47896 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47894,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47897 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47894,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_47900 = inst_47870;
var state_48006__$1 = (function (){var statearr_48123 = state_48006;
(statearr_48123[(16)] = inst_47896);

(statearr_48123[(7)] = inst_47900);

(statearr_48123[(17)] = inst_47897);

(statearr_48123[(18)] = inst_47895);

return statearr_48123;
})();
var statearr_48124_50349 = state_48006__$1;
(statearr_48124_50349[(2)] = null);

(statearr_48124_50349[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48008 === (18))){
var inst_47915 = (state_48006[(2)]);
var state_48006__$1 = state_48006;
var statearr_48128_50351 = state_48006__$1;
(statearr_48128_50351[(2)] = inst_47915);

(statearr_48128_50351[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48008 === (37))){
var state_48006__$1 = state_48006;
var statearr_48129_50352 = state_48006__$1;
(statearr_48129_50352[(2)] = null);

(statearr_48129_50352[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48008 === (8))){
var inst_47870 = (state_48006[(8)]);
var inst_47891 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_47870);
var state_48006__$1 = state_48006;
var statearr_48134_50353 = state_48006__$1;
(statearr_48134_50353[(2)] = inst_47891);

(statearr_48134_50353[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__45420__auto__ = null;
var cljs$core$async$mix_$_state_machine__45420__auto____0 = (function (){
var statearr_48136 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48136[(0)] = cljs$core$async$mix_$_state_machine__45420__auto__);

(statearr_48136[(1)] = (1));

return statearr_48136;
});
var cljs$core$async$mix_$_state_machine__45420__auto____1 = (function (state_48006){
while(true){
var ret_value__45421__auto__ = (function (){try{while(true){
var result__45422__auto__ = switch__45419__auto__(state_48006);
if(cljs.core.keyword_identical_QMARK_(result__45422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45422__auto__;
}
break;
}
}catch (e48138){var ex__45423__auto__ = e48138;
var statearr_48139_50369 = state_48006;
(statearr_48139_50369[(2)] = ex__45423__auto__);


if(cljs.core.seq((state_48006[(4)]))){
var statearr_48141_50370 = state_48006;
(statearr_48141_50370[(1)] = cljs.core.first((state_48006[(4)])));

} else {
throw ex__45423__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50371 = state_48006;
state_48006 = G__50371;
continue;
} else {
return ret_value__45421__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__45420__auto__ = function(state_48006){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__45420__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__45420__auto____1.call(this,state_48006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__45420__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__45420__auto____0;
cljs$core$async$mix_$_state_machine__45420__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__45420__auto____1;
return cljs$core$async$mix_$_state_machine__45420__auto__;
})()
})();
var state__45531__auto__ = (function (){var statearr_48143 = f__45530__auto__();
(statearr_48143[(6)] = c__45529__auto___50221);

return statearr_48143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45531__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_50372 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_50372(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_50379 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_50379(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_50382 = (function() {
var G__50383 = null;
var G__50383__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__50383__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__50383 = function(p,v){
switch(arguments.length){
case 1:
return G__50383__1.call(this,p);
case 2:
return G__50383__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__50383.cljs$core$IFn$_invoke$arity$1 = G__50383__1;
G__50383.cljs$core$IFn$_invoke$arity$2 = G__50383__2;
return G__50383;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__48200 = arguments.length;
switch (G__48200) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_50382(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_50382(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__48216 = arguments.length;
switch (G__48216) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__48211_SHARP_){
if(cljs.core.truth_((p1__48211_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__48211_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__48211_SHARP_.call(null,topic)))){
return p1__48211_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__48211_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48234 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48234 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta48235){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta48235 = meta48235;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48234.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48236,meta48235__$1){
var self__ = this;
var _48236__$1 = this;
return (new cljs.core.async.t_cljs$core$async48234(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta48235__$1));
}));

(cljs.core.async.t_cljs$core$async48234.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48236){
var self__ = this;
var _48236__$1 = this;
return self__.meta48235;
}));

(cljs.core.async.t_cljs$core$async48234.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48234.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async48234.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48234.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async48234.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async48234.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async48234.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async48234.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta48235","meta48235",-1105946056,null)], null);
}));

(cljs.core.async.t_cljs$core$async48234.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48234.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48234");

(cljs.core.async.t_cljs$core$async48234.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async48234");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48234.
 */
cljs.core.async.__GT_t_cljs$core$async48234 = (function cljs$core$async$__GT_t_cljs$core$async48234(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48235){
return (new cljs.core.async.t_cljs$core$async48234(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48235));
});

}

return (new cljs.core.async.t_cljs$core$async48234(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__45529__auto___50408 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45530__auto__ = (function (){var switch__45419__auto__ = (function (state_48369){
var state_val_48370 = (state_48369[(1)]);
if((state_val_48370 === (7))){
var inst_48365 = (state_48369[(2)]);
var state_48369__$1 = state_48369;
var statearr_48381_50409 = state_48369__$1;
(statearr_48381_50409[(2)] = inst_48365);

(statearr_48381_50409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48370 === (20))){
var state_48369__$1 = state_48369;
var statearr_48383_50410 = state_48369__$1;
(statearr_48383_50410[(2)] = null);

(statearr_48383_50410[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48370 === (1))){
var state_48369__$1 = state_48369;
var statearr_48387_50413 = state_48369__$1;
(statearr_48387_50413[(2)] = null);

(statearr_48387_50413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48370 === (24))){
var inst_48347 = (state_48369[(7)]);
var inst_48357 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_48347);
var state_48369__$1 = state_48369;
var statearr_48399_50414 = state_48369__$1;
(statearr_48399_50414[(2)] = inst_48357);

(statearr_48399_50414[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48370 === (4))){
var inst_48283 = (state_48369[(8)]);
var inst_48283__$1 = (state_48369[(2)]);
var inst_48285 = (inst_48283__$1 == null);
var state_48369__$1 = (function (){var statearr_48401 = state_48369;
(statearr_48401[(8)] = inst_48283__$1);

return statearr_48401;
})();
if(cljs.core.truth_(inst_48285)){
var statearr_48402_50415 = state_48369__$1;
(statearr_48402_50415[(1)] = (5));

} else {
var statearr_48407_50416 = state_48369__$1;
(statearr_48407_50416[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48370 === (15))){
var inst_48341 = (state_48369[(2)]);
var state_48369__$1 = state_48369;
var statearr_48409_50417 = state_48369__$1;
(statearr_48409_50417[(2)] = inst_48341);

(statearr_48409_50417[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48370 === (21))){
var inst_48362 = (state_48369[(2)]);
var state_48369__$1 = (function (){var statearr_48420 = state_48369;
(statearr_48420[(9)] = inst_48362);

return statearr_48420;
})();
var statearr_48423_50421 = state_48369__$1;
(statearr_48423_50421[(2)] = null);

(statearr_48423_50421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48370 === (13))){
var inst_48311 = (state_48369[(10)]);
var inst_48314 = cljs.core.chunked_seq_QMARK_(inst_48311);
var state_48369__$1 = state_48369;
if(inst_48314){
var statearr_48427_50425 = state_48369__$1;
(statearr_48427_50425[(1)] = (16));

} else {
var statearr_48428_50426 = state_48369__$1;
(statearr_48428_50426[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48370 === (22))){
var inst_48354 = (state_48369[(2)]);
var state_48369__$1 = state_48369;
if(cljs.core.truth_(inst_48354)){
var statearr_48429_50427 = state_48369__$1;
(statearr_48429_50427[(1)] = (23));

} else {
var statearr_48430_50428 = state_48369__$1;
(statearr_48430_50428[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48370 === (6))){
var inst_48347 = (state_48369[(7)]);
var inst_48349 = (state_48369[(11)]);
var inst_48283 = (state_48369[(8)]);
var inst_48347__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_48283) : topic_fn.call(null,inst_48283));
var inst_48348 = cljs.core.deref(mults);
var inst_48349__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48348,inst_48347__$1);
var state_48369__$1 = (function (){var statearr_48438 = state_48369;
(statearr_48438[(7)] = inst_48347__$1);

(statearr_48438[(11)] = inst_48349__$1);

return statearr_48438;
})();
if(cljs.core.truth_(inst_48349__$1)){
var statearr_48439_50429 = state_48369__$1;
(statearr_48439_50429[(1)] = (19));

} else {
var statearr_48443_50430 = state_48369__$1;
(statearr_48443_50430[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48370 === (25))){
var inst_48359 = (state_48369[(2)]);
var state_48369__$1 = state_48369;
var statearr_48446_50432 = state_48369__$1;
(statearr_48446_50432[(2)] = inst_48359);

(statearr_48446_50432[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48370 === (17))){
var inst_48311 = (state_48369[(10)]);
var inst_48331 = cljs.core.first(inst_48311);
var inst_48332 = cljs.core.async.muxch_STAR_(inst_48331);
var inst_48333 = cljs.core.async.close_BANG_(inst_48332);
var inst_48335 = cljs.core.next(inst_48311);
var inst_48294 = inst_48335;
var inst_48295 = null;
var inst_48296 = (0);
var inst_48297 = (0);
var state_48369__$1 = (function (){var statearr_48448 = state_48369;
(statearr_48448[(12)] = inst_48296);

(statearr_48448[(13)] = inst_48297);

(statearr_48448[(14)] = inst_48294);

(statearr_48448[(15)] = inst_48333);

(statearr_48448[(16)] = inst_48295);

return statearr_48448;
})();
var statearr_48449_50440 = state_48369__$1;
(statearr_48449_50440[(2)] = null);

(statearr_48449_50440[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48370 === (3))){
var inst_48367 = (state_48369[(2)]);
var state_48369__$1 = state_48369;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48369__$1,inst_48367);
} else {
if((state_val_48370 === (12))){
var inst_48343 = (state_48369[(2)]);
var state_48369__$1 = state_48369;
var statearr_48453_50442 = state_48369__$1;
(statearr_48453_50442[(2)] = inst_48343);

(statearr_48453_50442[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48370 === (2))){
var state_48369__$1 = state_48369;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48369__$1,(4),ch);
} else {
if((state_val_48370 === (23))){
var state_48369__$1 = state_48369;
var statearr_48454_50446 = state_48369__$1;
(statearr_48454_50446[(2)] = null);

(statearr_48454_50446[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48370 === (19))){
var inst_48349 = (state_48369[(11)]);
var inst_48283 = (state_48369[(8)]);
var inst_48351 = cljs.core.async.muxch_STAR_(inst_48349);
var state_48369__$1 = state_48369;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48369__$1,(22),inst_48351,inst_48283);
} else {
if((state_val_48370 === (11))){
var inst_48311 = (state_48369[(10)]);
var inst_48294 = (state_48369[(14)]);
var inst_48311__$1 = cljs.core.seq(inst_48294);
var state_48369__$1 = (function (){var statearr_48455 = state_48369;
(statearr_48455[(10)] = inst_48311__$1);

return statearr_48455;
})();
if(inst_48311__$1){
var statearr_48458_50451 = state_48369__$1;
(statearr_48458_50451[(1)] = (13));

} else {
var statearr_48460_50452 = state_48369__$1;
(statearr_48460_50452[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48370 === (9))){
var inst_48345 = (state_48369[(2)]);
var state_48369__$1 = state_48369;
var statearr_48462_50453 = state_48369__$1;
(statearr_48462_50453[(2)] = inst_48345);

(statearr_48462_50453[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48370 === (5))){
var inst_48291 = cljs.core.deref(mults);
var inst_48292 = cljs.core.vals(inst_48291);
var inst_48293 = cljs.core.seq(inst_48292);
var inst_48294 = inst_48293;
var inst_48295 = null;
var inst_48296 = (0);
var inst_48297 = (0);
var state_48369__$1 = (function (){var statearr_48467 = state_48369;
(statearr_48467[(12)] = inst_48296);

(statearr_48467[(13)] = inst_48297);

(statearr_48467[(14)] = inst_48294);

(statearr_48467[(16)] = inst_48295);

return statearr_48467;
})();
var statearr_48472_50454 = state_48369__$1;
(statearr_48472_50454[(2)] = null);

(statearr_48472_50454[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48370 === (14))){
var state_48369__$1 = state_48369;
var statearr_48483_50458 = state_48369__$1;
(statearr_48483_50458[(2)] = null);

(statearr_48483_50458[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48370 === (16))){
var inst_48311 = (state_48369[(10)]);
var inst_48316 = cljs.core.chunk_first(inst_48311);
var inst_48324 = cljs.core.chunk_rest(inst_48311);
var inst_48325 = cljs.core.count(inst_48316);
var inst_48294 = inst_48324;
var inst_48295 = inst_48316;
var inst_48296 = inst_48325;
var inst_48297 = (0);
var state_48369__$1 = (function (){var statearr_48484 = state_48369;
(statearr_48484[(12)] = inst_48296);

(statearr_48484[(13)] = inst_48297);

(statearr_48484[(14)] = inst_48294);

(statearr_48484[(16)] = inst_48295);

return statearr_48484;
})();
var statearr_48485_50459 = state_48369__$1;
(statearr_48485_50459[(2)] = null);

(statearr_48485_50459[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48370 === (10))){
var inst_48296 = (state_48369[(12)]);
var inst_48297 = (state_48369[(13)]);
var inst_48294 = (state_48369[(14)]);
var inst_48295 = (state_48369[(16)]);
var inst_48303 = cljs.core._nth(inst_48295,inst_48297);
var inst_48304 = cljs.core.async.muxch_STAR_(inst_48303);
var inst_48305 = cljs.core.async.close_BANG_(inst_48304);
var inst_48306 = (inst_48297 + (1));
var tmp48479 = inst_48296;
var tmp48480 = inst_48294;
var tmp48481 = inst_48295;
var inst_48294__$1 = tmp48480;
var inst_48295__$1 = tmp48481;
var inst_48296__$1 = tmp48479;
var inst_48297__$1 = inst_48306;
var state_48369__$1 = (function (){var statearr_48486 = state_48369;
(statearr_48486[(12)] = inst_48296__$1);

(statearr_48486[(13)] = inst_48297__$1);

(statearr_48486[(17)] = inst_48305);

(statearr_48486[(14)] = inst_48294__$1);

(statearr_48486[(16)] = inst_48295__$1);

return statearr_48486;
})();
var statearr_48487_50462 = state_48369__$1;
(statearr_48487_50462[(2)] = null);

(statearr_48487_50462[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48370 === (18))){
var inst_48338 = (state_48369[(2)]);
var state_48369__$1 = state_48369;
var statearr_48490_50468 = state_48369__$1;
(statearr_48490_50468[(2)] = inst_48338);

(statearr_48490_50468[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48370 === (8))){
var inst_48296 = (state_48369[(12)]);
var inst_48297 = (state_48369[(13)]);
var inst_48300 = (inst_48297 < inst_48296);
var inst_48301 = inst_48300;
var state_48369__$1 = state_48369;
if(cljs.core.truth_(inst_48301)){
var statearr_48492_50469 = state_48369__$1;
(statearr_48492_50469[(1)] = (10));

} else {
var statearr_48493_50470 = state_48369__$1;
(statearr_48493_50470[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45420__auto__ = null;
var cljs$core$async$state_machine__45420__auto____0 = (function (){
var statearr_48499 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48499[(0)] = cljs$core$async$state_machine__45420__auto__);

(statearr_48499[(1)] = (1));

return statearr_48499;
});
var cljs$core$async$state_machine__45420__auto____1 = (function (state_48369){
while(true){
var ret_value__45421__auto__ = (function (){try{while(true){
var result__45422__auto__ = switch__45419__auto__(state_48369);
if(cljs.core.keyword_identical_QMARK_(result__45422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45422__auto__;
}
break;
}
}catch (e48503){var ex__45423__auto__ = e48503;
var statearr_48507_50473 = state_48369;
(statearr_48507_50473[(2)] = ex__45423__auto__);


if(cljs.core.seq((state_48369[(4)]))){
var statearr_48508_50474 = state_48369;
(statearr_48508_50474[(1)] = cljs.core.first((state_48369[(4)])));

} else {
throw ex__45423__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50476 = state_48369;
state_48369 = G__50476;
continue;
} else {
return ret_value__45421__auto__;
}
break;
}
});
cljs$core$async$state_machine__45420__auto__ = function(state_48369){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45420__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45420__auto____1.call(this,state_48369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45420__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45420__auto____0;
cljs$core$async$state_machine__45420__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45420__auto____1;
return cljs$core$async$state_machine__45420__auto__;
})()
})();
var state__45531__auto__ = (function (){var statearr_48513 = f__45530__auto__();
(statearr_48513[(6)] = c__45529__auto___50408);

return statearr_48513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45531__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__48527 = arguments.length;
switch (G__48527) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__48544 = arguments.length;
switch (G__48544) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__48565 = arguments.length;
switch (G__48565) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__45529__auto___50487 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45530__auto__ = (function (){var switch__45419__auto__ = (function (state_48630){
var state_val_48631 = (state_48630[(1)]);
if((state_val_48631 === (7))){
var state_48630__$1 = state_48630;
var statearr_48632_50490 = state_48630__$1;
(statearr_48632_50490[(2)] = null);

(statearr_48632_50490[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48631 === (1))){
var state_48630__$1 = state_48630;
var statearr_48633_50492 = state_48630__$1;
(statearr_48633_50492[(2)] = null);

(statearr_48633_50492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48631 === (4))){
var inst_48583 = (state_48630[(7)]);
var inst_48584 = (state_48630[(8)]);
var inst_48586 = (inst_48584 < inst_48583);
var state_48630__$1 = state_48630;
if(cljs.core.truth_(inst_48586)){
var statearr_48634_50493 = state_48630__$1;
(statearr_48634_50493[(1)] = (6));

} else {
var statearr_48635_50494 = state_48630__$1;
(statearr_48635_50494[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48631 === (15))){
var inst_48615 = (state_48630[(9)]);
var inst_48620 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_48615);
var state_48630__$1 = state_48630;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48630__$1,(17),out,inst_48620);
} else {
if((state_val_48631 === (13))){
var inst_48615 = (state_48630[(9)]);
var inst_48615__$1 = (state_48630[(2)]);
var inst_48616 = cljs.core.some(cljs.core.nil_QMARK_,inst_48615__$1);
var state_48630__$1 = (function (){var statearr_48636 = state_48630;
(statearr_48636[(9)] = inst_48615__$1);

return statearr_48636;
})();
if(cljs.core.truth_(inst_48616)){
var statearr_48637_50498 = state_48630__$1;
(statearr_48637_50498[(1)] = (14));

} else {
var statearr_48638_50499 = state_48630__$1;
(statearr_48638_50499[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48631 === (6))){
var state_48630__$1 = state_48630;
var statearr_48639_50501 = state_48630__$1;
(statearr_48639_50501[(2)] = null);

(statearr_48639_50501[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48631 === (17))){
var inst_48622 = (state_48630[(2)]);
var state_48630__$1 = (function (){var statearr_48644 = state_48630;
(statearr_48644[(10)] = inst_48622);

return statearr_48644;
})();
var statearr_48645_50506 = state_48630__$1;
(statearr_48645_50506[(2)] = null);

(statearr_48645_50506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48631 === (3))){
var inst_48627 = (state_48630[(2)]);
var state_48630__$1 = state_48630;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48630__$1,inst_48627);
} else {
if((state_val_48631 === (12))){
var _ = (function (){var statearr_48650 = state_48630;
(statearr_48650[(4)] = cljs.core.rest((state_48630[(4)])));

return statearr_48650;
})();
var state_48630__$1 = state_48630;
var ex48643 = (state_48630__$1[(2)]);
var statearr_48655_50513 = state_48630__$1;
(statearr_48655_50513[(5)] = ex48643);


if((ex48643 instanceof Object)){
var statearr_48656_50514 = state_48630__$1;
(statearr_48656_50514[(1)] = (11));

(statearr_48656_50514[(5)] = null);

} else {
throw ex48643;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48631 === (2))){
var inst_48582 = cljs.core.reset_BANG_(dctr,cnt);
var inst_48583 = cnt;
var inst_48584 = (0);
var state_48630__$1 = (function (){var statearr_48665 = state_48630;
(statearr_48665[(7)] = inst_48583);

(statearr_48665[(8)] = inst_48584);

(statearr_48665[(11)] = inst_48582);

return statearr_48665;
})();
var statearr_48666_50521 = state_48630__$1;
(statearr_48666_50521[(2)] = null);

(statearr_48666_50521[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48631 === (11))){
var inst_48593 = (state_48630[(2)]);
var inst_48595 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_48630__$1 = (function (){var statearr_48667 = state_48630;
(statearr_48667[(12)] = inst_48593);

return statearr_48667;
})();
var statearr_48668_50523 = state_48630__$1;
(statearr_48668_50523[(2)] = inst_48595);

(statearr_48668_50523[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48631 === (9))){
var inst_48584 = (state_48630[(8)]);
var _ = (function (){var statearr_48669 = state_48630;
(statearr_48669[(4)] = cljs.core.cons((12),(state_48630[(4)])));

return statearr_48669;
})();
var inst_48601 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_48584) : chs__$1.call(null,inst_48584));
var inst_48602 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_48584) : done.call(null,inst_48584));
var inst_48603 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_48601,inst_48602);
var ___$1 = (function (){var statearr_48670 = state_48630;
(statearr_48670[(4)] = cljs.core.rest((state_48630[(4)])));

return statearr_48670;
})();
var state_48630__$1 = state_48630;
var statearr_48672_50526 = state_48630__$1;
(statearr_48672_50526[(2)] = inst_48603);

(statearr_48672_50526[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48631 === (5))){
var inst_48613 = (state_48630[(2)]);
var state_48630__$1 = (function (){var statearr_48673 = state_48630;
(statearr_48673[(13)] = inst_48613);

return statearr_48673;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48630__$1,(13),dchan);
} else {
if((state_val_48631 === (14))){
var inst_48618 = cljs.core.async.close_BANG_(out);
var state_48630__$1 = state_48630;
var statearr_48675_50527 = state_48630__$1;
(statearr_48675_50527[(2)] = inst_48618);

(statearr_48675_50527[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48631 === (16))){
var inst_48625 = (state_48630[(2)]);
var state_48630__$1 = state_48630;
var statearr_48676_50533 = state_48630__$1;
(statearr_48676_50533[(2)] = inst_48625);

(statearr_48676_50533[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48631 === (10))){
var inst_48584 = (state_48630[(8)]);
var inst_48606 = (state_48630[(2)]);
var inst_48607 = (inst_48584 + (1));
var inst_48584__$1 = inst_48607;
var state_48630__$1 = (function (){var statearr_48677 = state_48630;
(statearr_48677[(8)] = inst_48584__$1);

(statearr_48677[(14)] = inst_48606);

return statearr_48677;
})();
var statearr_48678_50539 = state_48630__$1;
(statearr_48678_50539[(2)] = null);

(statearr_48678_50539[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48631 === (8))){
var inst_48611 = (state_48630[(2)]);
var state_48630__$1 = state_48630;
var statearr_48679_50544 = state_48630__$1;
(statearr_48679_50544[(2)] = inst_48611);

(statearr_48679_50544[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45420__auto__ = null;
var cljs$core$async$state_machine__45420__auto____0 = (function (){
var statearr_48681 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48681[(0)] = cljs$core$async$state_machine__45420__auto__);

(statearr_48681[(1)] = (1));

return statearr_48681;
});
var cljs$core$async$state_machine__45420__auto____1 = (function (state_48630){
while(true){
var ret_value__45421__auto__ = (function (){try{while(true){
var result__45422__auto__ = switch__45419__auto__(state_48630);
if(cljs.core.keyword_identical_QMARK_(result__45422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45422__auto__;
}
break;
}
}catch (e48682){var ex__45423__auto__ = e48682;
var statearr_48684_50551 = state_48630;
(statearr_48684_50551[(2)] = ex__45423__auto__);


if(cljs.core.seq((state_48630[(4)]))){
var statearr_48685_50555 = state_48630;
(statearr_48685_50555[(1)] = cljs.core.first((state_48630[(4)])));

} else {
throw ex__45423__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50563 = state_48630;
state_48630 = G__50563;
continue;
} else {
return ret_value__45421__auto__;
}
break;
}
});
cljs$core$async$state_machine__45420__auto__ = function(state_48630){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45420__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45420__auto____1.call(this,state_48630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45420__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45420__auto____0;
cljs$core$async$state_machine__45420__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45420__auto____1;
return cljs$core$async$state_machine__45420__auto__;
})()
})();
var state__45531__auto__ = (function (){var statearr_48686 = f__45530__auto__();
(statearr_48686[(6)] = c__45529__auto___50487);

return statearr_48686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45531__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__48691 = arguments.length;
switch (G__48691) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45529__auto___50577 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45530__auto__ = (function (){var switch__45419__auto__ = (function (state_48736){
var state_val_48737 = (state_48736[(1)]);
if((state_val_48737 === (7))){
var inst_48711 = (state_48736[(7)]);
var inst_48710 = (state_48736[(8)]);
var inst_48710__$1 = (state_48736[(2)]);
var inst_48711__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48710__$1,(0),null);
var inst_48713 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48710__$1,(1),null);
var inst_48714 = (inst_48711__$1 == null);
var state_48736__$1 = (function (){var statearr_48740 = state_48736;
(statearr_48740[(7)] = inst_48711__$1);

(statearr_48740[(8)] = inst_48710__$1);

(statearr_48740[(9)] = inst_48713);

return statearr_48740;
})();
if(cljs.core.truth_(inst_48714)){
var statearr_48741_50580 = state_48736__$1;
(statearr_48741_50580[(1)] = (8));

} else {
var statearr_48742_50582 = state_48736__$1;
(statearr_48742_50582[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48737 === (1))){
var inst_48698 = cljs.core.vec(chs);
var inst_48699 = inst_48698;
var state_48736__$1 = (function (){var statearr_48744 = state_48736;
(statearr_48744[(10)] = inst_48699);

return statearr_48744;
})();
var statearr_48745_50583 = state_48736__$1;
(statearr_48745_50583[(2)] = null);

(statearr_48745_50583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48737 === (4))){
var inst_48699 = (state_48736[(10)]);
var state_48736__$1 = state_48736;
return cljs.core.async.ioc_alts_BANG_(state_48736__$1,(7),inst_48699);
} else {
if((state_val_48737 === (6))){
var inst_48731 = (state_48736[(2)]);
var state_48736__$1 = state_48736;
var statearr_48753_50589 = state_48736__$1;
(statearr_48753_50589[(2)] = inst_48731);

(statearr_48753_50589[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48737 === (3))){
var inst_48733 = (state_48736[(2)]);
var state_48736__$1 = state_48736;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48736__$1,inst_48733);
} else {
if((state_val_48737 === (2))){
var inst_48699 = (state_48736[(10)]);
var inst_48701 = cljs.core.count(inst_48699);
var inst_48702 = (inst_48701 > (0));
var state_48736__$1 = state_48736;
if(cljs.core.truth_(inst_48702)){
var statearr_48758_50596 = state_48736__$1;
(statearr_48758_50596[(1)] = (4));

} else {
var statearr_48759_50599 = state_48736__$1;
(statearr_48759_50599[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48737 === (11))){
var inst_48699 = (state_48736[(10)]);
var inst_48723 = (state_48736[(2)]);
var tmp48757 = inst_48699;
var inst_48699__$1 = tmp48757;
var state_48736__$1 = (function (){var statearr_48761 = state_48736;
(statearr_48761[(10)] = inst_48699__$1);

(statearr_48761[(11)] = inst_48723);

return statearr_48761;
})();
var statearr_48762_50606 = state_48736__$1;
(statearr_48762_50606[(2)] = null);

(statearr_48762_50606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48737 === (9))){
var inst_48711 = (state_48736[(7)]);
var state_48736__$1 = state_48736;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48736__$1,(11),out,inst_48711);
} else {
if((state_val_48737 === (5))){
var inst_48729 = cljs.core.async.close_BANG_(out);
var state_48736__$1 = state_48736;
var statearr_48767_50617 = state_48736__$1;
(statearr_48767_50617[(2)] = inst_48729);

(statearr_48767_50617[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48737 === (10))){
var inst_48727 = (state_48736[(2)]);
var state_48736__$1 = state_48736;
var statearr_48769_50620 = state_48736__$1;
(statearr_48769_50620[(2)] = inst_48727);

(statearr_48769_50620[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48737 === (8))){
var inst_48711 = (state_48736[(7)]);
var inst_48699 = (state_48736[(10)]);
var inst_48710 = (state_48736[(8)]);
var inst_48713 = (state_48736[(9)]);
var inst_48716 = (function (){var cs = inst_48699;
var vec__48706 = inst_48710;
var v = inst_48711;
var c = inst_48713;
return (function (p1__48687_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__48687_SHARP_);
});
})();
var inst_48718 = cljs.core.filterv(inst_48716,inst_48699);
var inst_48699__$1 = inst_48718;
var state_48736__$1 = (function (){var statearr_48772 = state_48736;
(statearr_48772[(10)] = inst_48699__$1);

return statearr_48772;
})();
var statearr_48773_50625 = state_48736__$1;
(statearr_48773_50625[(2)] = null);

(statearr_48773_50625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45420__auto__ = null;
var cljs$core$async$state_machine__45420__auto____0 = (function (){
var statearr_48774 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48774[(0)] = cljs$core$async$state_machine__45420__auto__);

(statearr_48774[(1)] = (1));

return statearr_48774;
});
var cljs$core$async$state_machine__45420__auto____1 = (function (state_48736){
while(true){
var ret_value__45421__auto__ = (function (){try{while(true){
var result__45422__auto__ = switch__45419__auto__(state_48736);
if(cljs.core.keyword_identical_QMARK_(result__45422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45422__auto__;
}
break;
}
}catch (e48776){var ex__45423__auto__ = e48776;
var statearr_48777_50632 = state_48736;
(statearr_48777_50632[(2)] = ex__45423__auto__);


if(cljs.core.seq((state_48736[(4)]))){
var statearr_48779_50656 = state_48736;
(statearr_48779_50656[(1)] = cljs.core.first((state_48736[(4)])));

} else {
throw ex__45423__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50661 = state_48736;
state_48736 = G__50661;
continue;
} else {
return ret_value__45421__auto__;
}
break;
}
});
cljs$core$async$state_machine__45420__auto__ = function(state_48736){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45420__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45420__auto____1.call(this,state_48736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45420__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45420__auto____0;
cljs$core$async$state_machine__45420__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45420__auto____1;
return cljs$core$async$state_machine__45420__auto__;
})()
})();
var state__45531__auto__ = (function (){var statearr_48785 = f__45530__auto__();
(statearr_48785[(6)] = c__45529__auto___50577);

return statearr_48785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45531__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__48795 = arguments.length;
switch (G__48795) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45529__auto___50701 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45530__auto__ = (function (){var switch__45419__auto__ = (function (state_48827){
var state_val_48829 = (state_48827[(1)]);
if((state_val_48829 === (7))){
var inst_48805 = (state_48827[(7)]);
var inst_48805__$1 = (state_48827[(2)]);
var inst_48808 = (inst_48805__$1 == null);
var inst_48809 = cljs.core.not(inst_48808);
var state_48827__$1 = (function (){var statearr_48839 = state_48827;
(statearr_48839[(7)] = inst_48805__$1);

return statearr_48839;
})();
if(inst_48809){
var statearr_48841_50711 = state_48827__$1;
(statearr_48841_50711[(1)] = (8));

} else {
var statearr_48842_50713 = state_48827__$1;
(statearr_48842_50713[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48829 === (1))){
var inst_48798 = (0);
var state_48827__$1 = (function (){var statearr_48843 = state_48827;
(statearr_48843[(8)] = inst_48798);

return statearr_48843;
})();
var statearr_48845_50720 = state_48827__$1;
(statearr_48845_50720[(2)] = null);

(statearr_48845_50720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48829 === (4))){
var state_48827__$1 = state_48827;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48827__$1,(7),ch);
} else {
if((state_val_48829 === (6))){
var inst_48822 = (state_48827[(2)]);
var state_48827__$1 = state_48827;
var statearr_48851_50739 = state_48827__$1;
(statearr_48851_50739[(2)] = inst_48822);

(statearr_48851_50739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48829 === (3))){
var inst_48824 = (state_48827[(2)]);
var inst_48825 = cljs.core.async.close_BANG_(out);
var state_48827__$1 = (function (){var statearr_48853 = state_48827;
(statearr_48853[(9)] = inst_48824);

return statearr_48853;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48827__$1,inst_48825);
} else {
if((state_val_48829 === (2))){
var inst_48798 = (state_48827[(8)]);
var inst_48800 = (inst_48798 < n);
var state_48827__$1 = state_48827;
if(cljs.core.truth_(inst_48800)){
var statearr_48858_50762 = state_48827__$1;
(statearr_48858_50762[(1)] = (4));

} else {
var statearr_48859_50763 = state_48827__$1;
(statearr_48859_50763[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48829 === (11))){
var inst_48798 = (state_48827[(8)]);
var inst_48812 = (state_48827[(2)]);
var inst_48814 = (inst_48798 + (1));
var inst_48798__$1 = inst_48814;
var state_48827__$1 = (function (){var statearr_48864 = state_48827;
(statearr_48864[(10)] = inst_48812);

(statearr_48864[(8)] = inst_48798__$1);

return statearr_48864;
})();
var statearr_48866_50767 = state_48827__$1;
(statearr_48866_50767[(2)] = null);

(statearr_48866_50767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48829 === (9))){
var state_48827__$1 = state_48827;
var statearr_48868_50769 = state_48827__$1;
(statearr_48868_50769[(2)] = null);

(statearr_48868_50769[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48829 === (5))){
var state_48827__$1 = state_48827;
var statearr_48872_50770 = state_48827__$1;
(statearr_48872_50770[(2)] = null);

(statearr_48872_50770[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48829 === (10))){
var inst_48818 = (state_48827[(2)]);
var state_48827__$1 = state_48827;
var statearr_48876_50771 = state_48827__$1;
(statearr_48876_50771[(2)] = inst_48818);

(statearr_48876_50771[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48829 === (8))){
var inst_48805 = (state_48827[(7)]);
var state_48827__$1 = state_48827;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48827__$1,(11),out,inst_48805);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45420__auto__ = null;
var cljs$core$async$state_machine__45420__auto____0 = (function (){
var statearr_48881 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48881[(0)] = cljs$core$async$state_machine__45420__auto__);

(statearr_48881[(1)] = (1));

return statearr_48881;
});
var cljs$core$async$state_machine__45420__auto____1 = (function (state_48827){
while(true){
var ret_value__45421__auto__ = (function (){try{while(true){
var result__45422__auto__ = switch__45419__auto__(state_48827);
if(cljs.core.keyword_identical_QMARK_(result__45422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45422__auto__;
}
break;
}
}catch (e48883){var ex__45423__auto__ = e48883;
var statearr_48885_50794 = state_48827;
(statearr_48885_50794[(2)] = ex__45423__auto__);


if(cljs.core.seq((state_48827[(4)]))){
var statearr_48888_50795 = state_48827;
(statearr_48888_50795[(1)] = cljs.core.first((state_48827[(4)])));

} else {
throw ex__45423__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50798 = state_48827;
state_48827 = G__50798;
continue;
} else {
return ret_value__45421__auto__;
}
break;
}
});
cljs$core$async$state_machine__45420__auto__ = function(state_48827){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45420__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45420__auto____1.call(this,state_48827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45420__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45420__auto____0;
cljs$core$async$state_machine__45420__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45420__auto____1;
return cljs$core$async$state_machine__45420__auto__;
})()
})();
var state__45531__auto__ = (function (){var statearr_48894 = f__45530__auto__();
(statearr_48894[(6)] = c__45529__auto___50701);

return statearr_48894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45531__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48903 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48903 = (function (f,ch,meta48904){
this.f = f;
this.ch = ch;
this.meta48904 = meta48904;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48903.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48905,meta48904__$1){
var self__ = this;
var _48905__$1 = this;
return (new cljs.core.async.t_cljs$core$async48903(self__.f,self__.ch,meta48904__$1));
}));

(cljs.core.async.t_cljs$core$async48903.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48905){
var self__ = this;
var _48905__$1 = this;
return self__.meta48904;
}));

(cljs.core.async.t_cljs$core$async48903.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48903.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48903.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48903.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48903.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48924 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48924 = (function (f,ch,meta48904,_,fn1,meta48925){
this.f = f;
this.ch = ch;
this.meta48904 = meta48904;
this._ = _;
this.fn1 = fn1;
this.meta48925 = meta48925;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48924.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48926,meta48925__$1){
var self__ = this;
var _48926__$1 = this;
return (new cljs.core.async.t_cljs$core$async48924(self__.f,self__.ch,self__.meta48904,self__._,self__.fn1,meta48925__$1));
}));

(cljs.core.async.t_cljs$core$async48924.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48926){
var self__ = this;
var _48926__$1 = this;
return self__.meta48925;
}));

(cljs.core.async.t_cljs$core$async48924.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48924.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async48924.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async48924.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__48901_SHARP_){
var G__48956 = (((p1__48901_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__48901_SHARP_) : self__.f.call(null,p1__48901_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__48956) : f1.call(null,G__48956));
});
}));

(cljs.core.async.t_cljs$core$async48924.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48904","meta48904",-1778623885,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async48903","cljs.core.async/t_cljs$core$async48903",2026886641,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta48925","meta48925",-1801525571,null)], null);
}));

(cljs.core.async.t_cljs$core$async48924.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48924.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48924");

(cljs.core.async.t_cljs$core$async48924.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async48924");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48924.
 */
cljs.core.async.__GT_t_cljs$core$async48924 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48924(f__$1,ch__$1,meta48904__$1,___$2,fn1__$1,meta48925){
return (new cljs.core.async.t_cljs$core$async48924(f__$1,ch__$1,meta48904__$1,___$2,fn1__$1,meta48925));
});

}

return (new cljs.core.async.t_cljs$core$async48924(self__.f,self__.ch,self__.meta48904,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__48969 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__48969) : self__.f.call(null,G__48969));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async48903.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48903.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async48903.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48904","meta48904",-1778623885,null)], null);
}));

(cljs.core.async.t_cljs$core$async48903.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48903.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48903");

(cljs.core.async.t_cljs$core$async48903.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async48903");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48903.
 */
cljs.core.async.__GT_t_cljs$core$async48903 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48903(f__$1,ch__$1,meta48904){
return (new cljs.core.async.t_cljs$core$async48903(f__$1,ch__$1,meta48904));
});

}

return (new cljs.core.async.t_cljs$core$async48903(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48979 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48979 = (function (f,ch,meta48980){
this.f = f;
this.ch = ch;
this.meta48980 = meta48980;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48979.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48981,meta48980__$1){
var self__ = this;
var _48981__$1 = this;
return (new cljs.core.async.t_cljs$core$async48979(self__.f,self__.ch,meta48980__$1));
}));

(cljs.core.async.t_cljs$core$async48979.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48981){
var self__ = this;
var _48981__$1 = this;
return self__.meta48980;
}));

(cljs.core.async.t_cljs$core$async48979.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48979.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48979.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48979.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async48979.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48979.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async48979.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48980","meta48980",289431379,null)], null);
}));

(cljs.core.async.t_cljs$core$async48979.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48979.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48979");

(cljs.core.async.t_cljs$core$async48979.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async48979");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48979.
 */
cljs.core.async.__GT_t_cljs$core$async48979 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async48979(f__$1,ch__$1,meta48980){
return (new cljs.core.async.t_cljs$core$async48979(f__$1,ch__$1,meta48980));
});

}

return (new cljs.core.async.t_cljs$core$async48979(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48990 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48990 = (function (p,ch,meta48991){
this.p = p;
this.ch = ch;
this.meta48991 = meta48991;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48990.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48992,meta48991__$1){
var self__ = this;
var _48992__$1 = this;
return (new cljs.core.async.t_cljs$core$async48990(self__.p,self__.ch,meta48991__$1));
}));

(cljs.core.async.t_cljs$core$async48990.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48992){
var self__ = this;
var _48992__$1 = this;
return self__.meta48991;
}));

(cljs.core.async.t_cljs$core$async48990.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48990.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48990.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48990.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48990.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async48990.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48990.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async48990.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48991","meta48991",1471519031,null)], null);
}));

(cljs.core.async.t_cljs$core$async48990.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48990.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48990");

(cljs.core.async.t_cljs$core$async48990.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async48990");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48990.
 */
cljs.core.async.__GT_t_cljs$core$async48990 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async48990(p__$1,ch__$1,meta48991){
return (new cljs.core.async.t_cljs$core$async48990(p__$1,ch__$1,meta48991));
});

}

return (new cljs.core.async.t_cljs$core$async48990(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__49022 = arguments.length;
switch (G__49022) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45529__auto___50915 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45530__auto__ = (function (){var switch__45419__auto__ = (function (state_49055){
var state_val_49056 = (state_49055[(1)]);
if((state_val_49056 === (7))){
var inst_49050 = (state_49055[(2)]);
var state_49055__$1 = state_49055;
var statearr_49057_50918 = state_49055__$1;
(statearr_49057_50918[(2)] = inst_49050);

(statearr_49057_50918[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49056 === (1))){
var state_49055__$1 = state_49055;
var statearr_49061_50921 = state_49055__$1;
(statearr_49061_50921[(2)] = null);

(statearr_49061_50921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49056 === (4))){
var inst_49030 = (state_49055[(7)]);
var inst_49030__$1 = (state_49055[(2)]);
var inst_49033 = (inst_49030__$1 == null);
var state_49055__$1 = (function (){var statearr_49063 = state_49055;
(statearr_49063[(7)] = inst_49030__$1);

return statearr_49063;
})();
if(cljs.core.truth_(inst_49033)){
var statearr_49064_50927 = state_49055__$1;
(statearr_49064_50927[(1)] = (5));

} else {
var statearr_49065_50928 = state_49055__$1;
(statearr_49065_50928[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49056 === (6))){
var inst_49030 = (state_49055[(7)]);
var inst_49037 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_49030) : p.call(null,inst_49030));
var state_49055__$1 = state_49055;
if(cljs.core.truth_(inst_49037)){
var statearr_49068_50933 = state_49055__$1;
(statearr_49068_50933[(1)] = (8));

} else {
var statearr_49070_50936 = state_49055__$1;
(statearr_49070_50936[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49056 === (3))){
var inst_49052 = (state_49055[(2)]);
var state_49055__$1 = state_49055;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49055__$1,inst_49052);
} else {
if((state_val_49056 === (2))){
var state_49055__$1 = state_49055;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49055__$1,(4),ch);
} else {
if((state_val_49056 === (11))){
var inst_49043 = (state_49055[(2)]);
var state_49055__$1 = state_49055;
var statearr_49077_50946 = state_49055__$1;
(statearr_49077_50946[(2)] = inst_49043);

(statearr_49077_50946[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49056 === (9))){
var state_49055__$1 = state_49055;
var statearr_49078_50949 = state_49055__$1;
(statearr_49078_50949[(2)] = null);

(statearr_49078_50949[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49056 === (5))){
var inst_49035 = cljs.core.async.close_BANG_(out);
var state_49055__$1 = state_49055;
var statearr_49079_50955 = state_49055__$1;
(statearr_49079_50955[(2)] = inst_49035);

(statearr_49079_50955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49056 === (10))){
var inst_49046 = (state_49055[(2)]);
var state_49055__$1 = (function (){var statearr_49080 = state_49055;
(statearr_49080[(8)] = inst_49046);

return statearr_49080;
})();
var statearr_49081_50963 = state_49055__$1;
(statearr_49081_50963[(2)] = null);

(statearr_49081_50963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49056 === (8))){
var inst_49030 = (state_49055[(7)]);
var state_49055__$1 = state_49055;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49055__$1,(11),out,inst_49030);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45420__auto__ = null;
var cljs$core$async$state_machine__45420__auto____0 = (function (){
var statearr_49085 = [null,null,null,null,null,null,null,null,null];
(statearr_49085[(0)] = cljs$core$async$state_machine__45420__auto__);

(statearr_49085[(1)] = (1));

return statearr_49085;
});
var cljs$core$async$state_machine__45420__auto____1 = (function (state_49055){
while(true){
var ret_value__45421__auto__ = (function (){try{while(true){
var result__45422__auto__ = switch__45419__auto__(state_49055);
if(cljs.core.keyword_identical_QMARK_(result__45422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45422__auto__;
}
break;
}
}catch (e49089){var ex__45423__auto__ = e49089;
var statearr_49090_50973 = state_49055;
(statearr_49090_50973[(2)] = ex__45423__auto__);


if(cljs.core.seq((state_49055[(4)]))){
var statearr_49092_50974 = state_49055;
(statearr_49092_50974[(1)] = cljs.core.first((state_49055[(4)])));

} else {
throw ex__45423__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50975 = state_49055;
state_49055 = G__50975;
continue;
} else {
return ret_value__45421__auto__;
}
break;
}
});
cljs$core$async$state_machine__45420__auto__ = function(state_49055){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45420__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45420__auto____1.call(this,state_49055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45420__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45420__auto____0;
cljs$core$async$state_machine__45420__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45420__auto____1;
return cljs$core$async$state_machine__45420__auto__;
})()
})();
var state__45531__auto__ = (function (){var statearr_49096 = f__45530__auto__();
(statearr_49096[(6)] = c__45529__auto___50915);

return statearr_49096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45531__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__49103 = arguments.length;
switch (G__49103) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__45529__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45530__auto__ = (function (){var switch__45419__auto__ = (function (state_49178){
var state_val_49179 = (state_49178[(1)]);
if((state_val_49179 === (7))){
var inst_49173 = (state_49178[(2)]);
var state_49178__$1 = state_49178;
var statearr_49183_50994 = state_49178__$1;
(statearr_49183_50994[(2)] = inst_49173);

(statearr_49183_50994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49179 === (20))){
var inst_49138 = (state_49178[(7)]);
var inst_49152 = (state_49178[(2)]);
var inst_49153 = cljs.core.next(inst_49138);
var inst_49123 = inst_49153;
var inst_49124 = null;
var inst_49125 = (0);
var inst_49126 = (0);
var state_49178__$1 = (function (){var statearr_49186 = state_49178;
(statearr_49186[(8)] = inst_49152);

(statearr_49186[(9)] = inst_49124);

(statearr_49186[(10)] = inst_49126);

(statearr_49186[(11)] = inst_49125);

(statearr_49186[(12)] = inst_49123);

return statearr_49186;
})();
var statearr_49188_50998 = state_49178__$1;
(statearr_49188_50998[(2)] = null);

(statearr_49188_50998[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49179 === (1))){
var state_49178__$1 = state_49178;
var statearr_49189_51001 = state_49178__$1;
(statearr_49189_51001[(2)] = null);

(statearr_49189_51001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49179 === (4))){
var inst_49109 = (state_49178[(13)]);
var inst_49109__$1 = (state_49178[(2)]);
var inst_49110 = (inst_49109__$1 == null);
var state_49178__$1 = (function (){var statearr_49190 = state_49178;
(statearr_49190[(13)] = inst_49109__$1);

return statearr_49190;
})();
if(cljs.core.truth_(inst_49110)){
var statearr_49194_51009 = state_49178__$1;
(statearr_49194_51009[(1)] = (5));

} else {
var statearr_49195_51010 = state_49178__$1;
(statearr_49195_51010[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49179 === (15))){
var state_49178__$1 = state_49178;
var statearr_49199_51014 = state_49178__$1;
(statearr_49199_51014[(2)] = null);

(statearr_49199_51014[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49179 === (21))){
var state_49178__$1 = state_49178;
var statearr_49200_51018 = state_49178__$1;
(statearr_49200_51018[(2)] = null);

(statearr_49200_51018[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49179 === (13))){
var inst_49124 = (state_49178[(9)]);
var inst_49126 = (state_49178[(10)]);
var inst_49125 = (state_49178[(11)]);
var inst_49123 = (state_49178[(12)]);
var inst_49134 = (state_49178[(2)]);
var inst_49135 = (inst_49126 + (1));
var tmp49196 = inst_49124;
var tmp49197 = inst_49125;
var tmp49198 = inst_49123;
var inst_49123__$1 = tmp49198;
var inst_49124__$1 = tmp49196;
var inst_49125__$1 = tmp49197;
var inst_49126__$1 = inst_49135;
var state_49178__$1 = (function (){var statearr_49201 = state_49178;
(statearr_49201[(14)] = inst_49134);

(statearr_49201[(9)] = inst_49124__$1);

(statearr_49201[(10)] = inst_49126__$1);

(statearr_49201[(11)] = inst_49125__$1);

(statearr_49201[(12)] = inst_49123__$1);

return statearr_49201;
})();
var statearr_49203_51028 = state_49178__$1;
(statearr_49203_51028[(2)] = null);

(statearr_49203_51028[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49179 === (22))){
var state_49178__$1 = state_49178;
var statearr_49206_51031 = state_49178__$1;
(statearr_49206_51031[(2)] = null);

(statearr_49206_51031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49179 === (6))){
var inst_49109 = (state_49178[(13)]);
var inst_49120 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_49109) : f.call(null,inst_49109));
var inst_49122 = cljs.core.seq(inst_49120);
var inst_49123 = inst_49122;
var inst_49124 = null;
var inst_49125 = (0);
var inst_49126 = (0);
var state_49178__$1 = (function (){var statearr_49208 = state_49178;
(statearr_49208[(9)] = inst_49124);

(statearr_49208[(10)] = inst_49126);

(statearr_49208[(11)] = inst_49125);

(statearr_49208[(12)] = inst_49123);

return statearr_49208;
})();
var statearr_49209_51032 = state_49178__$1;
(statearr_49209_51032[(2)] = null);

(statearr_49209_51032[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49179 === (17))){
var inst_49138 = (state_49178[(7)]);
var inst_49145 = cljs.core.chunk_first(inst_49138);
var inst_49146 = cljs.core.chunk_rest(inst_49138);
var inst_49147 = cljs.core.count(inst_49145);
var inst_49123 = inst_49146;
var inst_49124 = inst_49145;
var inst_49125 = inst_49147;
var inst_49126 = (0);
var state_49178__$1 = (function (){var statearr_49213 = state_49178;
(statearr_49213[(9)] = inst_49124);

(statearr_49213[(10)] = inst_49126);

(statearr_49213[(11)] = inst_49125);

(statearr_49213[(12)] = inst_49123);

return statearr_49213;
})();
var statearr_49214_51037 = state_49178__$1;
(statearr_49214_51037[(2)] = null);

(statearr_49214_51037[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49179 === (3))){
var inst_49175 = (state_49178[(2)]);
var state_49178__$1 = state_49178;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49178__$1,inst_49175);
} else {
if((state_val_49179 === (12))){
var inst_49162 = (state_49178[(2)]);
var state_49178__$1 = state_49178;
var statearr_49221_51041 = state_49178__$1;
(statearr_49221_51041[(2)] = inst_49162);

(statearr_49221_51041[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49179 === (2))){
var state_49178__$1 = state_49178;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49178__$1,(4),in$);
} else {
if((state_val_49179 === (23))){
var inst_49171 = (state_49178[(2)]);
var state_49178__$1 = state_49178;
var statearr_49225_51045 = state_49178__$1;
(statearr_49225_51045[(2)] = inst_49171);

(statearr_49225_51045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49179 === (19))){
var inst_49156 = (state_49178[(2)]);
var state_49178__$1 = state_49178;
var statearr_49231_51051 = state_49178__$1;
(statearr_49231_51051[(2)] = inst_49156);

(statearr_49231_51051[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49179 === (11))){
var inst_49138 = (state_49178[(7)]);
var inst_49123 = (state_49178[(12)]);
var inst_49138__$1 = cljs.core.seq(inst_49123);
var state_49178__$1 = (function (){var statearr_49232 = state_49178;
(statearr_49232[(7)] = inst_49138__$1);

return statearr_49232;
})();
if(inst_49138__$1){
var statearr_49233_51054 = state_49178__$1;
(statearr_49233_51054[(1)] = (14));

} else {
var statearr_49234_51055 = state_49178__$1;
(statearr_49234_51055[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49179 === (9))){
var inst_49164 = (state_49178[(2)]);
var inst_49165 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_49178__$1 = (function (){var statearr_49237 = state_49178;
(statearr_49237[(15)] = inst_49164);

return statearr_49237;
})();
if(cljs.core.truth_(inst_49165)){
var statearr_49238_51056 = state_49178__$1;
(statearr_49238_51056[(1)] = (21));

} else {
var statearr_49239_51057 = state_49178__$1;
(statearr_49239_51057[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49179 === (5))){
var inst_49112 = cljs.core.async.close_BANG_(out);
var state_49178__$1 = state_49178;
var statearr_49240_51058 = state_49178__$1;
(statearr_49240_51058[(2)] = inst_49112);

(statearr_49240_51058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49179 === (14))){
var inst_49138 = (state_49178[(7)]);
var inst_49142 = cljs.core.chunked_seq_QMARK_(inst_49138);
var state_49178__$1 = state_49178;
if(inst_49142){
var statearr_49242_51060 = state_49178__$1;
(statearr_49242_51060[(1)] = (17));

} else {
var statearr_49243_51061 = state_49178__$1;
(statearr_49243_51061[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49179 === (16))){
var inst_49159 = (state_49178[(2)]);
var state_49178__$1 = state_49178;
var statearr_49244_51062 = state_49178__$1;
(statearr_49244_51062[(2)] = inst_49159);

(statearr_49244_51062[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49179 === (10))){
var inst_49124 = (state_49178[(9)]);
var inst_49126 = (state_49178[(10)]);
var inst_49132 = cljs.core._nth(inst_49124,inst_49126);
var state_49178__$1 = state_49178;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49178__$1,(13),out,inst_49132);
} else {
if((state_val_49179 === (18))){
var inst_49138 = (state_49178[(7)]);
var inst_49150 = cljs.core.first(inst_49138);
var state_49178__$1 = state_49178;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49178__$1,(20),out,inst_49150);
} else {
if((state_val_49179 === (8))){
var inst_49126 = (state_49178[(10)]);
var inst_49125 = (state_49178[(11)]);
var inst_49128 = (inst_49126 < inst_49125);
var inst_49129 = inst_49128;
var state_49178__$1 = state_49178;
if(cljs.core.truth_(inst_49129)){
var statearr_49246_51065 = state_49178__$1;
(statearr_49246_51065[(1)] = (10));

} else {
var statearr_49247_51066 = state_49178__$1;
(statearr_49247_51066[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__45420__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__45420__auto____0 = (function (){
var statearr_49252 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49252[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__45420__auto__);

(statearr_49252[(1)] = (1));

return statearr_49252;
});
var cljs$core$async$mapcat_STAR__$_state_machine__45420__auto____1 = (function (state_49178){
while(true){
var ret_value__45421__auto__ = (function (){try{while(true){
var result__45422__auto__ = switch__45419__auto__(state_49178);
if(cljs.core.keyword_identical_QMARK_(result__45422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45422__auto__;
}
break;
}
}catch (e49253){var ex__45423__auto__ = e49253;
var statearr_49254_51075 = state_49178;
(statearr_49254_51075[(2)] = ex__45423__auto__);


if(cljs.core.seq((state_49178[(4)]))){
var statearr_49256_51076 = state_49178;
(statearr_49256_51076[(1)] = cljs.core.first((state_49178[(4)])));

} else {
throw ex__45423__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51077 = state_49178;
state_49178 = G__51077;
continue;
} else {
return ret_value__45421__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__45420__auto__ = function(state_49178){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__45420__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__45420__auto____1.call(this,state_49178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__45420__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__45420__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__45420__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__45420__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__45420__auto__;
})()
})();
var state__45531__auto__ = (function (){var statearr_49259 = f__45530__auto__();
(statearr_49259[(6)] = c__45529__auto__);

return statearr_49259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45531__auto__);
}));

return c__45529__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__49263 = arguments.length;
switch (G__49263) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__49268 = arguments.length;
switch (G__49268) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__49278 = arguments.length;
switch (G__49278) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45529__auto___51099 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45530__auto__ = (function (){var switch__45419__auto__ = (function (state_49305){
var state_val_49306 = (state_49305[(1)]);
if((state_val_49306 === (7))){
var inst_49299 = (state_49305[(2)]);
var state_49305__$1 = state_49305;
var statearr_49315_51101 = state_49305__$1;
(statearr_49315_51101[(2)] = inst_49299);

(statearr_49315_51101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49306 === (1))){
var inst_49281 = null;
var state_49305__$1 = (function (){var statearr_49316 = state_49305;
(statearr_49316[(7)] = inst_49281);

return statearr_49316;
})();
var statearr_49318_51106 = state_49305__$1;
(statearr_49318_51106[(2)] = null);

(statearr_49318_51106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49306 === (4))){
var inst_49284 = (state_49305[(8)]);
var inst_49284__$1 = (state_49305[(2)]);
var inst_49285 = (inst_49284__$1 == null);
var inst_49286 = cljs.core.not(inst_49285);
var state_49305__$1 = (function (){var statearr_49320 = state_49305;
(statearr_49320[(8)] = inst_49284__$1);

return statearr_49320;
})();
if(inst_49286){
var statearr_49321_51114 = state_49305__$1;
(statearr_49321_51114[(1)] = (5));

} else {
var statearr_49322_51115 = state_49305__$1;
(statearr_49322_51115[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49306 === (6))){
var state_49305__$1 = state_49305;
var statearr_49323_51120 = state_49305__$1;
(statearr_49323_51120[(2)] = null);

(statearr_49323_51120[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49306 === (3))){
var inst_49301 = (state_49305[(2)]);
var inst_49302 = cljs.core.async.close_BANG_(out);
var state_49305__$1 = (function (){var statearr_49324 = state_49305;
(statearr_49324[(9)] = inst_49301);

return statearr_49324;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49305__$1,inst_49302);
} else {
if((state_val_49306 === (2))){
var state_49305__$1 = state_49305;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49305__$1,(4),ch);
} else {
if((state_val_49306 === (11))){
var inst_49284 = (state_49305[(8)]);
var inst_49293 = (state_49305[(2)]);
var inst_49281 = inst_49284;
var state_49305__$1 = (function (){var statearr_49326 = state_49305;
(statearr_49326[(7)] = inst_49281);

(statearr_49326[(10)] = inst_49293);

return statearr_49326;
})();
var statearr_49327_51142 = state_49305__$1;
(statearr_49327_51142[(2)] = null);

(statearr_49327_51142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49306 === (9))){
var inst_49284 = (state_49305[(8)]);
var state_49305__$1 = state_49305;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49305__$1,(11),out,inst_49284);
} else {
if((state_val_49306 === (5))){
var inst_49281 = (state_49305[(7)]);
var inst_49284 = (state_49305[(8)]);
var inst_49288 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49284,inst_49281);
var state_49305__$1 = state_49305;
if(inst_49288){
var statearr_49331_51148 = state_49305__$1;
(statearr_49331_51148[(1)] = (8));

} else {
var statearr_49332_51149 = state_49305__$1;
(statearr_49332_51149[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49306 === (10))){
var inst_49296 = (state_49305[(2)]);
var state_49305__$1 = state_49305;
var statearr_49334_51152 = state_49305__$1;
(statearr_49334_51152[(2)] = inst_49296);

(statearr_49334_51152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49306 === (8))){
var inst_49281 = (state_49305[(7)]);
var tmp49329 = inst_49281;
var inst_49281__$1 = tmp49329;
var state_49305__$1 = (function (){var statearr_49335 = state_49305;
(statearr_49335[(7)] = inst_49281__$1);

return statearr_49335;
})();
var statearr_49336_51163 = state_49305__$1;
(statearr_49336_51163[(2)] = null);

(statearr_49336_51163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45420__auto__ = null;
var cljs$core$async$state_machine__45420__auto____0 = (function (){
var statearr_49337 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49337[(0)] = cljs$core$async$state_machine__45420__auto__);

(statearr_49337[(1)] = (1));

return statearr_49337;
});
var cljs$core$async$state_machine__45420__auto____1 = (function (state_49305){
while(true){
var ret_value__45421__auto__ = (function (){try{while(true){
var result__45422__auto__ = switch__45419__auto__(state_49305);
if(cljs.core.keyword_identical_QMARK_(result__45422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45422__auto__;
}
break;
}
}catch (e49339){var ex__45423__auto__ = e49339;
var statearr_49340_51186 = state_49305;
(statearr_49340_51186[(2)] = ex__45423__auto__);


if(cljs.core.seq((state_49305[(4)]))){
var statearr_49341_51191 = state_49305;
(statearr_49341_51191[(1)] = cljs.core.first((state_49305[(4)])));

} else {
throw ex__45423__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51196 = state_49305;
state_49305 = G__51196;
continue;
} else {
return ret_value__45421__auto__;
}
break;
}
});
cljs$core$async$state_machine__45420__auto__ = function(state_49305){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45420__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45420__auto____1.call(this,state_49305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45420__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45420__auto____0;
cljs$core$async$state_machine__45420__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45420__auto____1;
return cljs$core$async$state_machine__45420__auto__;
})()
})();
var state__45531__auto__ = (function (){var statearr_49343 = f__45530__auto__();
(statearr_49343[(6)] = c__45529__auto___51099);

return statearr_49343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45531__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__49345 = arguments.length;
switch (G__49345) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45529__auto___51221 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45530__auto__ = (function (){var switch__45419__auto__ = (function (state_49386){
var state_val_49387 = (state_49386[(1)]);
if((state_val_49387 === (7))){
var inst_49382 = (state_49386[(2)]);
var state_49386__$1 = state_49386;
var statearr_49389_51231 = state_49386__$1;
(statearr_49389_51231[(2)] = inst_49382);

(statearr_49389_51231[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49387 === (1))){
var inst_49346 = (new Array(n));
var inst_49347 = inst_49346;
var inst_49348 = (0);
var state_49386__$1 = (function (){var statearr_49391 = state_49386;
(statearr_49391[(7)] = inst_49348);

(statearr_49391[(8)] = inst_49347);

return statearr_49391;
})();
var statearr_49392_51240 = state_49386__$1;
(statearr_49392_51240[(2)] = null);

(statearr_49392_51240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49387 === (4))){
var inst_49354 = (state_49386[(9)]);
var inst_49354__$1 = (state_49386[(2)]);
var inst_49355 = (inst_49354__$1 == null);
var inst_49356 = cljs.core.not(inst_49355);
var state_49386__$1 = (function (){var statearr_49393 = state_49386;
(statearr_49393[(9)] = inst_49354__$1);

return statearr_49393;
})();
if(inst_49356){
var statearr_49395_51258 = state_49386__$1;
(statearr_49395_51258[(1)] = (5));

} else {
var statearr_49396_51263 = state_49386__$1;
(statearr_49396_51263[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49387 === (15))){
var inst_49376 = (state_49386[(2)]);
var state_49386__$1 = state_49386;
var statearr_49397_51271 = state_49386__$1;
(statearr_49397_51271[(2)] = inst_49376);

(statearr_49397_51271[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49387 === (13))){
var state_49386__$1 = state_49386;
var statearr_49398_51272 = state_49386__$1;
(statearr_49398_51272[(2)] = null);

(statearr_49398_51272[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49387 === (6))){
var inst_49348 = (state_49386[(7)]);
var inst_49372 = (inst_49348 > (0));
var state_49386__$1 = state_49386;
if(cljs.core.truth_(inst_49372)){
var statearr_49401_51273 = state_49386__$1;
(statearr_49401_51273[(1)] = (12));

} else {
var statearr_49402_51274 = state_49386__$1;
(statearr_49402_51274[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49387 === (3))){
var inst_49384 = (state_49386[(2)]);
var state_49386__$1 = state_49386;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49386__$1,inst_49384);
} else {
if((state_val_49387 === (12))){
var inst_49347 = (state_49386[(8)]);
var inst_49374 = cljs.core.vec(inst_49347);
var state_49386__$1 = state_49386;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49386__$1,(15),out,inst_49374);
} else {
if((state_val_49387 === (2))){
var state_49386__$1 = state_49386;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49386__$1,(4),ch);
} else {
if((state_val_49387 === (11))){
var inst_49366 = (state_49386[(2)]);
var inst_49367 = (new Array(n));
var inst_49347 = inst_49367;
var inst_49348 = (0);
var state_49386__$1 = (function (){var statearr_49407 = state_49386;
(statearr_49407[(7)] = inst_49348);

(statearr_49407[(8)] = inst_49347);

(statearr_49407[(10)] = inst_49366);

return statearr_49407;
})();
var statearr_49412_51283 = state_49386__$1;
(statearr_49412_51283[(2)] = null);

(statearr_49412_51283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49387 === (9))){
var inst_49347 = (state_49386[(8)]);
var inst_49364 = cljs.core.vec(inst_49347);
var state_49386__$1 = state_49386;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49386__$1,(11),out,inst_49364);
} else {
if((state_val_49387 === (5))){
var inst_49348 = (state_49386[(7)]);
var inst_49347 = (state_49386[(8)]);
var inst_49359 = (state_49386[(11)]);
var inst_49354 = (state_49386[(9)]);
var inst_49358 = (inst_49347[inst_49348] = inst_49354);
var inst_49359__$1 = (inst_49348 + (1));
var inst_49360 = (inst_49359__$1 < n);
var state_49386__$1 = (function (){var statearr_49413 = state_49386;
(statearr_49413[(12)] = inst_49358);

(statearr_49413[(11)] = inst_49359__$1);

return statearr_49413;
})();
if(cljs.core.truth_(inst_49360)){
var statearr_49414_51286 = state_49386__$1;
(statearr_49414_51286[(1)] = (8));

} else {
var statearr_49415_51287 = state_49386__$1;
(statearr_49415_51287[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49387 === (14))){
var inst_49379 = (state_49386[(2)]);
var inst_49380 = cljs.core.async.close_BANG_(out);
var state_49386__$1 = (function (){var statearr_49417 = state_49386;
(statearr_49417[(13)] = inst_49379);

return statearr_49417;
})();
var statearr_49418_51288 = state_49386__$1;
(statearr_49418_51288[(2)] = inst_49380);

(statearr_49418_51288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49387 === (10))){
var inst_49370 = (state_49386[(2)]);
var state_49386__$1 = state_49386;
var statearr_49419_51290 = state_49386__$1;
(statearr_49419_51290[(2)] = inst_49370);

(statearr_49419_51290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49387 === (8))){
var inst_49347 = (state_49386[(8)]);
var inst_49359 = (state_49386[(11)]);
var tmp49416 = inst_49347;
var inst_49347__$1 = tmp49416;
var inst_49348 = inst_49359;
var state_49386__$1 = (function (){var statearr_49431 = state_49386;
(statearr_49431[(7)] = inst_49348);

(statearr_49431[(8)] = inst_49347__$1);

return statearr_49431;
})();
var statearr_49432_51292 = state_49386__$1;
(statearr_49432_51292[(2)] = null);

(statearr_49432_51292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45420__auto__ = null;
var cljs$core$async$state_machine__45420__auto____0 = (function (){
var statearr_49444 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49444[(0)] = cljs$core$async$state_machine__45420__auto__);

(statearr_49444[(1)] = (1));

return statearr_49444;
});
var cljs$core$async$state_machine__45420__auto____1 = (function (state_49386){
while(true){
var ret_value__45421__auto__ = (function (){try{while(true){
var result__45422__auto__ = switch__45419__auto__(state_49386);
if(cljs.core.keyword_identical_QMARK_(result__45422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45422__auto__;
}
break;
}
}catch (e49448){var ex__45423__auto__ = e49448;
var statearr_49449_51299 = state_49386;
(statearr_49449_51299[(2)] = ex__45423__auto__);


if(cljs.core.seq((state_49386[(4)]))){
var statearr_49454_51300 = state_49386;
(statearr_49454_51300[(1)] = cljs.core.first((state_49386[(4)])));

} else {
throw ex__45423__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51307 = state_49386;
state_49386 = G__51307;
continue;
} else {
return ret_value__45421__auto__;
}
break;
}
});
cljs$core$async$state_machine__45420__auto__ = function(state_49386){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45420__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45420__auto____1.call(this,state_49386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45420__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45420__auto____0;
cljs$core$async$state_machine__45420__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45420__auto____1;
return cljs$core$async$state_machine__45420__auto__;
})()
})();
var state__45531__auto__ = (function (){var statearr_49464 = f__45530__auto__();
(statearr_49464[(6)] = c__45529__auto___51221);

return statearr_49464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45531__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__49478 = arguments.length;
switch (G__49478) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45529__auto___51317 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45530__auto__ = (function (){var switch__45419__auto__ = (function (state_49529){
var state_val_49530 = (state_49529[(1)]);
if((state_val_49530 === (7))){
var inst_49525 = (state_49529[(2)]);
var state_49529__$1 = state_49529;
var statearr_49531_51322 = state_49529__$1;
(statearr_49531_51322[(2)] = inst_49525);

(statearr_49531_51322[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49530 === (1))){
var inst_49482 = [];
var inst_49484 = inst_49482;
var inst_49485 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_49529__$1 = (function (){var statearr_49536 = state_49529;
(statearr_49536[(7)] = inst_49485);

(statearr_49536[(8)] = inst_49484);

return statearr_49536;
})();
var statearr_49537_51326 = state_49529__$1;
(statearr_49537_51326[(2)] = null);

(statearr_49537_51326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49530 === (4))){
var inst_49489 = (state_49529[(9)]);
var inst_49489__$1 = (state_49529[(2)]);
var inst_49490 = (inst_49489__$1 == null);
var inst_49491 = cljs.core.not(inst_49490);
var state_49529__$1 = (function (){var statearr_49538 = state_49529;
(statearr_49538[(9)] = inst_49489__$1);

return statearr_49538;
})();
if(inst_49491){
var statearr_49540_51328 = state_49529__$1;
(statearr_49540_51328[(1)] = (5));

} else {
var statearr_49542_51332 = state_49529__$1;
(statearr_49542_51332[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49530 === (15))){
var inst_49519 = (state_49529[(2)]);
var state_49529__$1 = state_49529;
var statearr_49543_51333 = state_49529__$1;
(statearr_49543_51333[(2)] = inst_49519);

(statearr_49543_51333[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49530 === (13))){
var state_49529__$1 = state_49529;
var statearr_49545_51334 = state_49529__$1;
(statearr_49545_51334[(2)] = null);

(statearr_49545_51334[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49530 === (6))){
var inst_49484 = (state_49529[(8)]);
var inst_49514 = inst_49484.length;
var inst_49515 = (inst_49514 > (0));
var state_49529__$1 = state_49529;
if(cljs.core.truth_(inst_49515)){
var statearr_49546_51337 = state_49529__$1;
(statearr_49546_51337[(1)] = (12));

} else {
var statearr_49547_51338 = state_49529__$1;
(statearr_49547_51338[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49530 === (3))){
var inst_49527 = (state_49529[(2)]);
var state_49529__$1 = state_49529;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49529__$1,inst_49527);
} else {
if((state_val_49530 === (12))){
var inst_49484 = (state_49529[(8)]);
var inst_49517 = cljs.core.vec(inst_49484);
var state_49529__$1 = state_49529;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49529__$1,(15),out,inst_49517);
} else {
if((state_val_49530 === (2))){
var state_49529__$1 = state_49529;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49529__$1,(4),ch);
} else {
if((state_val_49530 === (11))){
var inst_49489 = (state_49529[(9)]);
var inst_49493 = (state_49529[(10)]);
var inst_49504 = (state_49529[(2)]);
var inst_49507 = [];
var inst_49508 = inst_49507.push(inst_49489);
var inst_49484 = inst_49507;
var inst_49485 = inst_49493;
var state_49529__$1 = (function (){var statearr_49555 = state_49529;
(statearr_49555[(11)] = inst_49508);

(statearr_49555[(12)] = inst_49504);

(statearr_49555[(7)] = inst_49485);

(statearr_49555[(8)] = inst_49484);

return statearr_49555;
})();
var statearr_49557_51348 = state_49529__$1;
(statearr_49557_51348[(2)] = null);

(statearr_49557_51348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49530 === (9))){
var inst_49484 = (state_49529[(8)]);
var inst_49502 = cljs.core.vec(inst_49484);
var state_49529__$1 = state_49529;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49529__$1,(11),out,inst_49502);
} else {
if((state_val_49530 === (5))){
var inst_49489 = (state_49529[(9)]);
var inst_49485 = (state_49529[(7)]);
var inst_49493 = (state_49529[(10)]);
var inst_49493__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_49489) : f.call(null,inst_49489));
var inst_49494 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49493__$1,inst_49485);
var inst_49495 = cljs.core.keyword_identical_QMARK_(inst_49485,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_49496 = ((inst_49494) || (inst_49495));
var state_49529__$1 = (function (){var statearr_49565 = state_49529;
(statearr_49565[(10)] = inst_49493__$1);

return statearr_49565;
})();
if(cljs.core.truth_(inst_49496)){
var statearr_49566_51353 = state_49529__$1;
(statearr_49566_51353[(1)] = (8));

} else {
var statearr_49567_51354 = state_49529__$1;
(statearr_49567_51354[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49530 === (14))){
var inst_49522 = (state_49529[(2)]);
var inst_49523 = cljs.core.async.close_BANG_(out);
var state_49529__$1 = (function (){var statearr_49569 = state_49529;
(statearr_49569[(13)] = inst_49522);

return statearr_49569;
})();
var statearr_49570_51356 = state_49529__$1;
(statearr_49570_51356[(2)] = inst_49523);

(statearr_49570_51356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49530 === (10))){
var inst_49511 = (state_49529[(2)]);
var state_49529__$1 = state_49529;
var statearr_49571_51357 = state_49529__$1;
(statearr_49571_51357[(2)] = inst_49511);

(statearr_49571_51357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49530 === (8))){
var inst_49489 = (state_49529[(9)]);
var inst_49484 = (state_49529[(8)]);
var inst_49493 = (state_49529[(10)]);
var inst_49498 = inst_49484.push(inst_49489);
var tmp49568 = inst_49484;
var inst_49484__$1 = tmp49568;
var inst_49485 = inst_49493;
var state_49529__$1 = (function (){var statearr_49572 = state_49529;
(statearr_49572[(14)] = inst_49498);

(statearr_49572[(7)] = inst_49485);

(statearr_49572[(8)] = inst_49484__$1);

return statearr_49572;
})();
var statearr_49573_51363 = state_49529__$1;
(statearr_49573_51363[(2)] = null);

(statearr_49573_51363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45420__auto__ = null;
var cljs$core$async$state_machine__45420__auto____0 = (function (){
var statearr_49574 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49574[(0)] = cljs$core$async$state_machine__45420__auto__);

(statearr_49574[(1)] = (1));

return statearr_49574;
});
var cljs$core$async$state_machine__45420__auto____1 = (function (state_49529){
while(true){
var ret_value__45421__auto__ = (function (){try{while(true){
var result__45422__auto__ = switch__45419__auto__(state_49529);
if(cljs.core.keyword_identical_QMARK_(result__45422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45422__auto__;
}
break;
}
}catch (e49575){var ex__45423__auto__ = e49575;
var statearr_49577_51367 = state_49529;
(statearr_49577_51367[(2)] = ex__45423__auto__);


if(cljs.core.seq((state_49529[(4)]))){
var statearr_49580_51368 = state_49529;
(statearr_49580_51368[(1)] = cljs.core.first((state_49529[(4)])));

} else {
throw ex__45423__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51371 = state_49529;
state_49529 = G__51371;
continue;
} else {
return ret_value__45421__auto__;
}
break;
}
});
cljs$core$async$state_machine__45420__auto__ = function(state_49529){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45420__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45420__auto____1.call(this,state_49529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45420__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45420__auto____0;
cljs$core$async$state_machine__45420__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45420__auto____1;
return cljs$core$async$state_machine__45420__auto__;
})()
})();
var state__45531__auto__ = (function (){var statearr_49581 = f__45530__auto__();
(statearr_49581[(6)] = c__45529__auto___51317);

return statearr_49581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45531__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map

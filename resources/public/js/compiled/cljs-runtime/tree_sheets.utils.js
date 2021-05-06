goog.provide('tree_sheets.utils');
tree_sheets.utils.focus_target_element = (function tree_sheets$utils$focus_target_element(elem){
if(cljs.core.truth_(elem)){
if((elem instanceof HTMLElement)){
return elem.focus();
} else {
return elem.target.focus();
}
} else {
return null;
}
});

//# sourceMappingURL=tree_sheets.utils.js.map

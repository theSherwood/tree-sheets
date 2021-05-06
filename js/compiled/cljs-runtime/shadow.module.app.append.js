
shadow.cljs.devtools.client.env.module_loaded('app');

try { tree_sheets.core.init(); } catch (e) { console.error("An error occurred when calling (tree-sheets.core/init)"); throw(e); }
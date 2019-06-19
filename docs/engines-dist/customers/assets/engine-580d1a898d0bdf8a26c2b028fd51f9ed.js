define("customers/config/environment",["exports"],function(e){"use strict"
var t
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
try{var s="customers/config/environment",o=document.querySelector('meta[name="'+s+'"]').getAttribute("content")
t=JSON.parse(unescape(o))}catch(l){throw new Error('Could not read config from meta tag with name "'+s+'" due to error: '+l)}var r=t
e.default=r}),define("customers/engine",["exports","ember-engines/engine","ember-load-initializers","customers/resolver","customers/config/environment"],function(e,t,s,o,r){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var l=r.default.modulePrefix,a=t.default.extend({modulePrefix:l,Resolver:o.default});(0,s.default)(a,l)
var n=a
e.default=n}),define("customers/resolver",["exports","ember-resolver"],function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var s=t.default
e.default=s}),define("customers/routes/list",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({model:function(){return["Highohan-9000","kanvik-788787","rtkihhu-7876476586"]}})
e.default=t}),define("customers/routes/list/details",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({model:function(){return["Highohan-9000","kanvik-788787","rtkihhu-7876476586"]}})
e.default=t}),define("customers/templates/application",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"Dz3pDjfs",block:'{"symbols":[],"statements":[[1,[21,"outlet"],false]],"hasEval":false}',meta:{moduleName:"customers/templates/application.hbs"}})
e.default=t}),define("customers/templates/list",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"G+86QH1p",block:'{"symbols":["customer"],"statements":[[0,"Engine parent route with model hook\\n"],[7,"ul"],[9],[0,"\\n"],[4,"each",[[23,["model"]]],null,{"statements":[[0,"    "],[7,"li"],[9],[0,"\\n      "],[1,[22,1,[]],false],[0,"\\n    "],[10],[0,"\\n"]],"parameters":[1]},null],[10],[0,"\\n"],[1,[21,"outlet"],false]],"hasEval":false}',meta:{moduleName:"customers/templates/list.hbs"}})
e.default=t}),define("customers/templates/list/details",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"m5E8mq2g",block:'{"symbols":["contact"],"statements":[[0,"Engine child route with model hook\\n"],[7,"ul"],[9],[0,"\\n"],[4,"each",[[23,["model"]]],null,{"statements":[[0,"    "],[7,"li"],[9],[0,"\\n      "],[1,[22,1,[]],false],[0,"\\n    "],[10],[0,"\\n"]],"parameters":[1]},null],[10]],"hasEval":false}',meta:{moduleName:"customers/templates/list/details.hbs"}})
e.default=t})

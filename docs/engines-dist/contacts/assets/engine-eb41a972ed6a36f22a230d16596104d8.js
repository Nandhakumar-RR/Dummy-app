define("contacts/config/environment",["exports"],function(e){"use strict"
var t
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
try{var a="contacts/config/environment",n=document.querySelector('meta[name="'+a+'"]').getAttribute("content")
t=JSON.parse(unescape(n))}catch(l){throw new Error('Could not read config from meta tag with name "'+a+'" due to error: '+l)}var s=t
e.default=s}),define("contacts/engine",["exports","ember-engines/engine","ember-load-initializers","contacts/resolver","contacts/config/environment"],function(e,t,a,n,s){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var l=s.default.modulePrefix,o=t.default.extend({modulePrefix:l,Resolver:n.default});(0,a.default)(o,l)
var r=o
e.default=r}),define("contacts/resolver",["exports","ember-resolver"],function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=t.default
e.default=a}),define("contacts/routes/list",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({prefetch:function(){return Ember.$.get("/contacts")}})
e.default=t}),define("contacts/routes/list/details",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({prefetch:function(){return Ember.$.get("/contacts")}})
e.default=t}),define("contacts/templates/application",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"VQMPmyoV",block:'{"symbols":[],"statements":[[1,[21,"outlet"],false]],"hasEval":false}',meta:{moduleName:"contacts/templates/application.hbs"}})
e.default=t}),define("contacts/templates/list",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"IDKf/p/q",block:'{"symbols":["contacts"],"statements":[[7,"div"],[9],[0,"Contacts"],[10],[0,"\\n"],[7,"ul"],[9],[0,"\\n"],[4,"each",[[23,["model"]]],null,{"statements":[[0,"    "],[7,"li"],[9],[0,"\\n"],[4,"link-to",["list.details"],null,{"statements":[[0,"        "],[1,[22,1,["name"]],false],[0,"\\n"]],"parameters":[]},null],[0,"    "],[10],[0,"\\n"]],"parameters":[1]},null],[10],[0,"\\n__________________________\\n\\n"],[1,[21,"outlet"],false]],"hasEval":false}',meta:{moduleName:"contacts/templates/list.hbs"}})
e.default=t}),define("contacts/templates/list/details",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"qrnMzbio",block:'{"symbols":["contacts"],"statements":[[7,"div"],[9],[0,"Contact Phonenumber"],[10],[0,"\\n"],[7,"ul"],[9],[0,"\\n"],[4,"each",[[23,["model"]]],null,{"statements":[[0,"    "],[7,"li"],[9],[0,"\\n      "],[1,[22,1,["name"]],false],[0,"-"],[1,[22,1,["mobile"]],false],[0,"\\n    "],[10],[0,"\\n"]],"parameters":[1]},null],[10],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"contacts/templates/list/details.hbs"}})
e.default=t})

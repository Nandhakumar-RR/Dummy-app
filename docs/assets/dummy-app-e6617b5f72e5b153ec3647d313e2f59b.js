"use strict"
define("dummy-app/app",["exports","dummy-app/resolver","ember-load-initializers","dummy-app/config/environment"],function(e,t,i,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=Ember.Application.extend({modulePrefix:a.default.modulePrefix,podModulePrefix:a.default.podModulePrefix,Resolver:t.default});(0,i.default)(n,a.default.modulePrefix)
var r=n
e.default=r}),define("dummy-app/components/link-to-external",["exports","ember-engines/components/link-to-external-component"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy-app/config/asset-manifest",["exports","require","dummy-app/config/environment"],function(e,t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=i.default.modulePrefix,n="".concat(a,"/config/asset-manifest"),r="".concat(a,"/config/node-asset-manifest"),o={}
try{if(t.default.has(r))o=(0,t.default)(r).default
else{var l=document.querySelector('meta[name="'+n+'"]').getAttribute("content")
o=JSON.parse(unescape(l))}}catch(u){throw new Error('Failed to load asset manifest. For browser environments, verify the meta tag with name "'+n+'" is present. For non-browser environments, verify that you included the node-asset-manifest module.')}var d=o
e.default=d}),define("dummy-app/helpers/app-version",["exports","dummy-app/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,i){function a(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.default.APP.version,r=a.versionOnly||a.hideSha,o=a.shaOnly||a.hideVersion,l=null
return r&&(a.showExtended&&(l=n.match(i.versionExtendedRegExp)),l||(l=n.match(i.versionRegExp))),o&&(l=n.match(i.shaRegExp)),l?l[0]:n}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=a,e.default=void 0
var n=Ember.Helper.helper(a)
e.default=n}),define("dummy-app/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i=t.default
e.default=i}),define("dummy-app/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i=t.default
e.default=i}),define("dummy-app/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy-app/config/environment"],function(e,t,i){var a,n
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i.default.APP&&(a=i.default.APP.name,n=i.default.APP.version)
var r={name:"App Version",initialize:(0,t.default)(a,n)}
e.default=r}),define("dummy-app/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=i}),define("dummy-app/initializers/ember-cli-mirage",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={name:"ember-cli-mirage",initialize:function(){}}}),define("dummy-app/initializers/ember-data",["exports","ember-data/setup-container","ember-data"],function(e,t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a={name:"ember-data",initialize:t.default}
e.default=a}),define("dummy-app/initializers/engines",["exports","ember-engines/initializers/engines"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"initialize",{enumerable:!0,get:function(){return t.initialize}})}),define("dummy-app/initializers/export-application-global",["exports","dummy-app/config/environment"],function(e,t){function i(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var i
if("undefined"!=typeof window)i=window
else if("undefined"!=typeof global)i=global
else{if("undefined"==typeof self)return
i=self}var a,n=t.default.exportApplicationGlobal
a="string"==typeof n?n:Ember.String.classify(t.default.modulePrefix),i[a]||(i[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete i[a]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=i,e.default=void 0
var a={name:"export-application-global",initialize:i}
e.default=a}),define("dummy-app/initializers/prefetch",["exports","ember-prefetch/initializers/prefetch"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"initialize",{enumerable:!0,get:function(){return t.initialize}})}),define("dummy-app/initializers/redirect-patch",["exports","ember-prefetch/initializers/redirect-patch"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"initialize",{enumerable:!0,get:function(){return t.initialize}})}),define("dummy-app/instance-initializers/ember-data",["exports","ember-data/initialize-store-service"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i={name:"ember-data",initialize:t.default}
e.default=i}),define("dummy-app/instance-initializers/load-asset-manifest",["exports","dummy-app/config/asset-manifest"],function(e,t){function i(e){e.lookup("service:asset-loader").pushManifest(t.default)}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=i,e.default=void 0
var a={name:"load-asset-manifest",initialize:i}
e.default=a}),define("dummy-app/instance-initializers/prefetch",["exports","ember-prefetch/instance-initializers/prefetch"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"initialize",{enumerable:!0,get:function(){return t.initialize}})}),define("dummy-app/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i=t.default
e.default=i}),define("dummy-app/router",["exports","dummy-app/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
i.map(function(){this.mount("contacts"),this.route("home"),this.route("sample",function(){this.route("child")})})
var a=i
e.default=a}),define("dummy-app/routes/home",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({})
e.default=t}),define("dummy-app/routes/sample",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({prefetch:function(){return Ember.$.get("/contacts")}})
e.default=t}),define("dummy-app/routes/sample/child",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({prefetch:function(){return Ember.$.get("/contacts")}})
e.default=t}),define("dummy-app/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy-app/services/asset-loader",["exports","ember-asset-loader/services/asset-loader"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy-app/services/prefetch",["exports","ember-prefetch/services/prefetch"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy-app/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"2n7X6ulx",block:'{"symbols":[],"statements":[[1,[21,"outlet"],false]],"hasEval":false}',meta:{moduleName:"dummy-app/templates/application.hbs"}})
e.default=t}),define("dummy-app/templates/home",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"SgaTgUOM",block:'{"symbols":[],"statements":[[0,"\\n"],[4,"link-to",["contacts.list.details"],null,{"statements":[[0,"  "],[7,"div"],[9],[0,"\\n    click here to Engine route\\n  "],[10],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"link-to",["sample.child"],null,{"statements":[[0,"  "],[7,"div"],[9],[0,"\\n    click here to App routes\\n  "],[10],[0,"  \\n"]],"parameters":[]},null]],"hasEval":false}',meta:{moduleName:"dummy-app/templates/home.hbs"}})
e.default=t}),define("dummy-app/templates/sample",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"FKDA5vxu",block:'{"symbols":[],"statements":[[7,"div"],[9],[0,"Visiting Patent route"],[10],[0,"\\n"],[1,[21,"outlet"],false]],"hasEval":false}',meta:{moduleName:"dummy-app/templates/sample.hbs"}})
e.default=t}),define("dummy-app/templates/sample/child",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"QU15la42",block:'{"symbols":[],"statements":[[7,"div"],[9],[0,"\\n  Visiting child route\\n"],[10]],"hasEval":false}',meta:{moduleName:"dummy-app/templates/sample/child.hbs"}})
e.default=t}),define("dummy-app/config/environment",[],function(){try{var e="dummy-app/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),i={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(i,"__esModule",{value:!0}),i}catch(a){throw new Error('Could not read config from meta tag with name "'+e+'".')}})
runningTests||require("dummy-app/app").default.create({name:"dummy-app",version:"0.0.0+1c159335"})

"use strict"
define("dummy-app/app",["exports","dummy-app/resolver","ember-load-initializers","dummy-app/config/environment"],function(e,t,i,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=Ember.Application.extend({modulePrefix:n.default.modulePrefix,podModulePrefix:n.default.podModulePrefix,Resolver:t.default});(0,i.default)(a,n.default.modulePrefix)
var r=a
e.default=r}),define("dummy-app/components/link-to-external",["exports","ember-engines/components/link-to-external-component"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy-app/config/asset-manifest",["exports","require","dummy-app/config/environment"],function(e,t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=i.default.modulePrefix,a="".concat(n,"/config/asset-manifest"),r="".concat(n,"/config/node-asset-manifest"),o={}
try{if(t.default.has(r))o=(0,t.default)(r).default
else{var l=document.querySelector('meta[name="'+a+'"]').getAttribute("content")
o=JSON.parse(unescape(l))}}catch(d){throw new Error('Failed to load asset manifest. For browser environments, verify the meta tag with name "'+a+'" is present. For non-browser environments, verify that you included the node-asset-manifest module.')}var u=o
e.default=u}),define("dummy-app/helpers/app-version",["exports","dummy-app/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,i){function n(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.default.APP.version,r=n.versionOnly||n.hideSha,o=n.shaOnly||n.hideVersion,l=null
return r&&(n.showExtended&&(l=a.match(i.versionExtendedRegExp)),l||(l=a.match(i.versionRegExp))),o&&(l=a.match(i.shaRegExp)),l?l[0]:a}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=n,e.default=void 0
var a=Ember.Helper.helper(n)
e.default=a}),define("dummy-app/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i=t.default
e.default=i}),define("dummy-app/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i=t.default
e.default=i}),define("dummy-app/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy-app/config/environment"],function(e,t,i){var n,a
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i.default.APP&&(n=i.default.APP.name,a=i.default.APP.version)
var r={name:"App Version",initialize:(0,t.default)(n,a)}
e.default=r}),define("dummy-app/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=i}),define("dummy-app/initializers/ember-data",["exports","ember-data/setup-container","ember-data"],function(e,t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"ember-data",initialize:t.default}
e.default=n}),define("dummy-app/initializers/engines",["exports","ember-engines/initializers/engines"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"initialize",{enumerable:!0,get:function(){return t.initialize}})}),define("dummy-app/initializers/export-application-global",["exports","dummy-app/config/environment"],function(e,t){function i(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var i
if("undefined"!=typeof window)i=window
else if("undefined"!=typeof global)i=global
else{if("undefined"==typeof self)return
i=self}var n,a=t.default.exportApplicationGlobal
n="string"==typeof a?a:Ember.String.classify(t.default.modulePrefix),i[n]||(i[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete i[n]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=i,e.default=void 0
var n={name:"export-application-global",initialize:i}
e.default=n}),define("dummy-app/initializers/prefetch",["exports","ember-prefetch/initializers/prefetch"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"initialize",{enumerable:!0,get:function(){return t.initialize}})}),define("dummy-app/initializers/redirect-patch",["exports","ember-prefetch/initializers/redirect-patch"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"initialize",{enumerable:!0,get:function(){return t.initialize}})}),define("dummy-app/instance-initializers/ember-data",["exports","ember-data/initialize-store-service"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i={name:"ember-data",initialize:t.default}
e.default=i}),define("dummy-app/instance-initializers/load-asset-manifest",["exports","dummy-app/config/asset-manifest"],function(e,t){function i(e){e.lookup("service:asset-loader").pushManifest(t.default)}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=i,e.default=void 0
var n={name:"load-asset-manifest",initialize:i}
e.default=n}),define("dummy-app/instance-initializers/prefetch",["exports","ember-prefetch/instance-initializers/prefetch"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"initialize",{enumerable:!0,get:function(){return t.initialize}})}),define("dummy-app/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i=t.default
e.default=i}),define("dummy-app/router",["exports","dummy-app/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
i.map(function(){this.mount("contacts"),this.route("sample",function(){this.route("child")}),this.mount("customers")})
var n=i
e.default=n}),define("dummy-app/routes/sample",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({prefetch:function(){return["Highohan","kanvik","rtkihhu"]}})
e.default=t}),define("dummy-app/routes/sample/child",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({prefetch:function(){return["Highohan","kanvik","rtkihhu"]}})
e.default=t}),define("dummy-app/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy-app/services/asset-loader",["exports","ember-asset-loader/services/asset-loader"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy-app/services/prefetch",["exports","ember-prefetch/services/prefetch"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy-app/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"Km1P1wBE",block:'{"symbols":[],"statements":[[4,"link-to",["customers.list.details"],null,{"statements":[[0,"  "],[7,"div"],[9],[0,"\\n    click here to Engine route with model hook\\n  "],[10],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"link-to",["contacts.list.details"],null,{"statements":[[0,"  "],[7,"div"],[9],[0,"\\n    click here to Engine route with prefetch hook\\n  "],[10],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"link-to",["sample.child"],null,{"statements":[[0,"  "],[7,"div"],[9],[0,"\\n    click here to App routes\\n  "],[10],[0,"  \\n"]],"parameters":[]},null],[0,"\\n"],[1,[21,"outlet"],false],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy-app/templates/application.hbs"}})
e.default=t}),define("dummy-app/templates/sample",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"FKDA5vxu",block:'{"symbols":[],"statements":[[7,"div"],[9],[0,"Visiting Patent route"],[10],[0,"\\n"],[1,[21,"outlet"],false]],"hasEval":false}',meta:{moduleName:"dummy-app/templates/sample.hbs"}})
e.default=t}),define("dummy-app/templates/sample/child",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"QU15la42",block:'{"symbols":[],"statements":[[7,"div"],[9],[0,"\\n  Visiting child route\\n"],[10]],"hasEval":false}',meta:{moduleName:"dummy-app/templates/sample/child.hbs"}})
e.default=t}),define("dummy-app/config/environment",[],function(){try{var e="dummy-app/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),i={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(i,"__esModule",{value:!0}),i}catch(n){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("dummy-app/app").default.create({name:"dummy-app",version:"0.0.0+92891f35"})

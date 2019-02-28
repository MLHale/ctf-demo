"use strict"
define("ctf-demo/app",["exports","ctf-demo/resolver","ember-load-initializers","ctf-demo/config/environment"],function(e,t,i,n){Object.defineProperty(e,"__esModule",{value:!0})
var o=Ember.Application.extend({modulePrefix:n.default.modulePrefix,podModulePrefix:n.default.podModulePrefix,Resolver:t.default});(0,i.default)(o,n.default.modulePrefix),e.default=o}),define("ctf-demo/helpers/app-version",["exports","ctf-demo/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,i){function n(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=t.default.APP.version,a=n.versionOnly||n.hideSha,r=n.shaOnly||n.hideVersion,l=null
return a&&(n.showExtended&&(l=o.match(i.versionExtendedRegExp)),l||(l=o.match(i.versionRegExp))),r&&(l=o.match(i.shaRegExp)),l?l[0]:o}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=n,e.default=Ember.Helper.helper(n)}),define("ctf-demo/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("ctf-demo/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("ctf-demo/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","ctf-demo/config/environment"],function(e,t,i){Object.defineProperty(e,"__esModule",{value:!0})
var n=void 0,o=void 0
i.default.APP&&(n=i.default.APP.name,o=i.default.APP.version),e.default={name:"App Version",initialize:(0,t.default)(n,o)}}),define("ctf-demo/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("ctf-demo/initializers/ember-data",["exports","ember-data/setup-container","ember-data"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ember-data",initialize:t.default}}),define("ctf-demo/initializers/export-application-global",["exports","ctf-demo/config/environment"],function(e,t){function i(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var i
if("undefined"!=typeof window)i=window
else if("undefined"!=typeof global)i=global
else{if("undefined"==typeof self)return
i=self}var n,o=t.default.exportApplicationGlobal
n="string"==typeof o?o:Ember.String.classify(t.default.modulePrefix),i[n]||(i[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete i[n]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=i,e.default={name:"export-application-global",initialize:i}}),define("ctf-demo/instance-initializers/ember-data",["exports","ember-data/initialize-store-service"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ember-data",initialize:t.default}}),define("ctf-demo/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("ctf-demo/router",["exports","ctf-demo/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0})
var i=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.hostURL})
i.map(function(){}),e.default=i}),define("ctf-demo/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ctf-demo/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"vK1qk9V3",block:'{"symbols":[],"statements":[[0,"Hello world\\n"],[0,"\\n"],[1,[21,"outlet"],false],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"ctf-demo/templates/application.hbs"}})}),define("ctf-demo/config/environment",[],function(){try{var e="ctf-demo/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),i={default:JSON.parse(unescape(t))}
return Object.defineProperty(i,"__esModule",{value:!0}),i}catch(n){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("ctf-demo/app").default.create({name:"ctf-demo",version:"0.0.0+821e0ef3"})
!function(e){function t(t){for(var n,i,c=t[0],u=t[1],l=t[2],s=0,p=[];s<c.length;s++)i=c[s],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(f&&f(t);p.length;)p.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,c=1;c<r.length;c++){var u=r[c];0!==o[u]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={8:0},a=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window.savefromContentScriptWebpackJsonp=window.savefromContentScriptWebpackJsonp||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var f=u;a.push([117,0]),r()}({117:function(e,t,r){"use strict";r.r(t);var n=r(14),o=r(0),a=r(40),i=r(12),c=r(58),u=function(e){return new Promise((function(t){return o.a.storage.set(e,t)}))};r(4),r(2),r(5),r(6),Object(i.a)("ShareDistributor"),Object(i.a)("helper-pro-exp");var l=Object(i.a)("oauth");if(/\/callback\.php/.test(location.href)&&/code=/.test(location.href)&&o.a.callFn("auth.isAuth").then((function(e){if(e)throw new Error("User is already logged in");return o.a.callFn("auth.handleAuthCallback",[location.href])})).then((function(){o.a.sendMessage({action:"track",t:"event",tid:"UA-181742122-2",ec:"login-helper-page",el:location.host,ea:"sign-in"})})).catch((function(e){return l.error(e)})),/helper-pro\?force-activate=100/.test(location.href)&&u(Object(n.a)({},"helper_pro_force",!0)),/helper-pro\?force-deactivate=100/.test(location.href)&&u(Object(n.a)({},"helper_pro_force",!1)),/\/login/.test(location.href)&&/helper\.pro/.test(location.href)&&o.a.sendMessage({action:"track",t:"event",tid:"UA-181742122-2",ec:"login-helper-page",el:location.host,ea:"loaded"}),/helper\-pro\-manual/.test(location.href)&&/purchase=1/.test(location.href)){var f=function(){return Object(a.a)(["userInfo"]).then((function(e){return{isAuth:Boolean(e.userInfo),isPremium:e.userInfo&&e.userInfo.isPremium}}))},s=window.localStorage,p=s.getItem("lastActive"),h=Number(p)+2e4,d=p&&h>Date.now();l.log("is skip",d),f().then((function(e){var t=e.isAuth,r=e.isPremium;if(!t)throw new Error("User not auth");if(l.log("refresh info",r,d),!r&&!d)return Object(c.a)(1e3).then((function(){return s.setItem("lastActive",String(Date.now())),o.a.callFn("auth.refreshUserInfo")}))})).then((function(){return f()})).then((function(e){var t=e.isPremium;if(t){var r=document.querySelector(".premium-info");r&&r.classList.remove("hidden");var n=document.querySelector("#step-email-check");n&&n.remove(),document.querySelectorAll(".step .number").forEach((function(e,t){e.textContent=String(t+1)}))}l.log("activate premium",t)})).catch((function(e){l.warn("activate premium error",e)}))}}});
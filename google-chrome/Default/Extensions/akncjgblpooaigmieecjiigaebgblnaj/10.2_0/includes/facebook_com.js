!function(e){function t(t){for(var r,i,c=t[0],l=t[1],s=t[2],u=0,f=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(d&&d(t);f.length;)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var l=n[c];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={3:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window.savefromContentScriptWebpackJsonp=window.savefromContentScriptWebpackJsonp||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var d=l;a.push([122,0]),n()}({108:function(e,t,n){"use strict";n.r(t);var r=n(34),o=n.n(r)()(!1);o.push([e.i,".VUkNZ--container{display:flex;font-family:inherit;margin-right:10px;font-weight:600;color:#65676b;line-height:1.6;border-radius:4px;padding:5px 4px;cursor:pointer}.VUkNZ--container:hover{background-color:rgba(0,0,0,.05)}.vRyx2--text{margin-left:4px}.BXrR8--circle-container{padding:0;border-radius:100%;width:40px;height:40px;background:#e4e6eb}.BXrR8--circle-container:hover{background-color:#fff}.BXrR8--circle-container .J6uYv--logo{margin:0 auto;max-width:20px}",""]),o.locals={container:"VUkNZ--container",text:"vRyx2--text","circle-container":"BXrR8--circle-container",circleContainer:"BXrR8--circle-container",logo:"J6uYv--logo"},t.default=o},122:function(e,t,n){"use strict";n.r(t);var r=n(10),o=n(4),a=n(14),i=n(20),c=n(2),l=n.n(c),s=n(0),d=n(16),u=n(25),f=n(37),p=n(35),h=n(33),v=n(21),m=n(31),g=n(26),b=n(8),y=n(3),k=n(24),w=n(11),x=n(12),S=n(28),O=n(18),M=n(27),j=n(1),L=n(87),B=n.n(L),P=n(36),C=n(32),E=n.n(C),F=Object(d.a)().svg.getSrc("download","#84bd07"),N=j.c.memo((function(e){var t=e.classes,n=void 0===t?[]:t,r=e.isIcon,o=void 0===r||r,a=e.isText,c=void 0===a||a,l=e.isCircle,d=void 0!==l&&l,u=e.onClick,f=Object(P.a)(B.a);return j.c.createElement("div",{className:E.a.apply(void 0,Object(i.a)(n).concat([f.container,d&&f.circleContainer])),onClick:u},o&&j.c.createElement("img",{src:F,className:f.logo}),c&&j.c.createElement("span",{className:f.text},s.a.i18n.getMessage("download")))})),D=n(9),I=n(15),q=n(29),_=n(17);function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var U,R=n(48),T=Object(x.a)("facebook_com"),H=navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome");S.a.isSingle()&&Object(u.b)("facebook",(function(e,t){var n=Object(d.a)(t),a=t.preferences,c=a.moduleFacebook?1:0;s.a.onMessage.addListener((function(t,n,r){if("getModuleInfo"===t.action){if(t.url!==location.href)return;return r({state:c,moduleName:e})}if("changeState"===t.action){if(e!==t.moduleName)return;return u.changeState(t.state)}"updatePreferences"!==t.action?c&&"updateLinks"===t.action&&(u.changeState(0),u.changeState(1)):Object.assign(a,t.preferences)})),c&&setTimeout((function(){u.run()}));var u={contextMenu:null,className:"savefrom_fb_download",isMutation:!1,run:function(){if(c=1,B.addStyle(),L.injectStyle(),O.a.isAvailable())return this.isMutation=!0,this.initEmbedDownloader(),void this.mutationMode.enable()},changeState:function(e){u.hideMenu(),c=e,x.disable(),L.rmCurrentPhotoBtn(),L.rmDataAttrs(),B.rmBtn(),j.rmBtn(),u.mutationMode.stop(),e&&u.run()},initEmbedDownloader:function(){n.addStyleRules("."+n.embedDownloader.linkClass+" img",{opacity:".5"}),n.embedDownloader.init()},mutationMode:{observer:null,stop:function(){this.observer&&this.observer.stop(),["sfSkip"].forEach((function(e){for(var t,n=Object(h.a)(e),r=document.querySelectorAll("["+n+"]"),o=0;t=r[o];o++)t.removeAttribute(n)}))},wrapVideoGetLinks:function(e){switch(e.tagName){case"EMBED":j.getLinksFromEmbed(e,(function(e){j.appendLinks(e&&e.links)}));break;case"VIDEO":j.getLinksFromVideo(e,(function(e){j.appendLinks(e&&e.links)}))}},wrapVideoFeedOnLinkHover:function(){c&&B.onLinkHover.apply(this)},wrapPhotoOnHover:function(e){c&&L.addCurrentDlBtn(this)},wrapExternalMediaMouseEnter:function(){if(c){this.dataset[x.linkDataAttr]?clearTimeout(x.timer):x.handle(this)?(x.lastLink&&x.lastLink!==this&&x.removeBtn(x.lastLink),n.embedDownloader.hidePanel(),x.lastLink=this):(b.a.off(this,"mouseenter",u.mutationMode.wrapExternalMediaMouseEnter),b.a.off(this,"mouseleave",u.mutationMode.wrapExternalMediaMouseLeave))}},wrapExternalMediaMouseLeave:function(){if(c){var e=this;e.dataset[x.linkDataAttr]&&(clearTimeout(x.timer),x.timer=setTimeout((function(){x.removeBtn(e)}),1500))}},wrapExternalMedia:function(e){b.a.on(e,"mouseenter",u.mutationMode.wrapExternalMediaMouseEnter),b.a.on(e,"mouseleave",u.mutationMode.wrapExternalMediaMouseLeave)},enable:function(){var e=this;if(this.observer)return this.observer.start();var t=function(e,t){if(!(window.location.href.includes("/watch?")&&e.ariaLabel||(e.dataset.sfReady&&window.location.href.includes("/watch?")&&!e.dataset.waRep&&e.removeAttribute("data-sf-ready"),e.dataset.sfReady)))return e.dataset.sfReady="1",t(e)};this.observer=new O.a({queries:[].concat(Object(i.a)([{css:"video",is:"added",callback:function(e){var n=e.added,r=/\/watch/.test(location.href);n.forEach((function(e){return t(e,(function(){return r?B.addButtonForWatchPage(e):e.closest('[role="article"]')?B.addButtonForFeedPage(e):void 0}))}))}},{css:'[role="article"] a[href*="/videos/"], ._6x84 a[href*="/videos/"]',is:"added",callback:function(e){e.added.forEach((function(e){return t(e,(function(){B.addHoverButtonForArticleVideo(e)}))}))}},{css:'[role="article"] a[role="link"] div[style] img[alt], [role="article"] div[role="button"] div[style] img[alt]',is:"added",callback:function(e){e.added.forEach((function(e){return t(e,(function(){if(!e.closest('a[aria-label*="Reels"]'))return L.addButtonForArticleImage(e)}))}))}},{css:'[data-pagelet="TahoeVideo"]',is:"added",callback:function(e){e.added.forEach((function(e){return t(e,(function(){B.addButtonForShowPageVideo(e)}))}))}},{css:'[data-pagelet="Reels"], a[aria-label*="Reels"]',is:"added",callback:function(e){e.added.forEach((function(e){return t(e,(function(){return B.addButtonForReelVideo(e)}))}))}},{css:'[data-pagelet="TahoeRightRail"] a[href*="/videos/"]',is:"added",callback:function(e){e.added.forEach((function(e){return t(e,(function(){var t=S.createButton((function(){var n=j.getVideoIdFromLink(e.href);n&&j.showDownloadMenuByVideoId(t,n)}),{preset:"hover"});e.appendChild(t)}))}))}},{css:'[data-visualcompletion="media-vc-image"]',is:"added",callback:function(e){e.added.forEach((function(e){return t(e,(function(){L.addButtonForShowPageImage(e)}))}))}}]),[{css:["embed","video._ox1"],is:"added",callback:function(t){for(var n,r=0;n=t.added[r];r++){var o=!1;Object(m.a)(n,"#fbxPhotoContentContainer .videoStage ".concat(n.tagName))&&(o=!0),o?e.wrapVideoGetLinks(n):b.a.one(n,"mouseenter",e.wrapVideoFeedOnLinkHover)}}},{css:[".fbPhotoSnowliftContainer .stageWrapper .stage img.spotlight",".fbPhotoSnowliftContainer .stageWrapper .stage .videoStage video"],is:"added",callback:function(t){for(var r,o=0;r=t.added[o];o++)if(u.hideMenu(),!(r.dataset.sfSkip>0)){r.dataset.sfSkip="1";var a=n.getParentByClass(r,"stageWrapper");b.a.one(a,"mouseenter",e.wrapPhotoOnHover)}}},{css:"a",is:"added",callback:function(t){for(var n,r=0;n=t.added[r];r++)n.sfSkip>0||(n.sfSkip="1",e.wrapExternalMedia(n))}},{css:".".concat(b.a.onRemoveClassName),is:"removed",callback:function(e){for(var t,n=0;t=e.removed[n];n++)b.a.onRemoveListener(t)}}])})}},hideMenu:function(){u.contextMenu&&(u.contextMenu.hide(),u.contextMenu=null)}},x={linkDataAttr:"savefromEd",timer:0,lastLink:null,re:[/https?:\/\/(?:[\w\-]+\.)?vimeo\.com\/(\d+)(?:\?|$)/i],thumbnail:{},disable:function(){var e=n.embedDownloader.panel;e&&(e.style.display="none")},removeBtn:function(e){if(e&&"object"==typeof e){var t=e.querySelector("."+u.className);t&&(t.parentNode.removeAttribute(Object(h.a)(x.linkDataAttr)),t.parentNode.removeChild(t)),e.removeAttribute(Object(h.a)(x.linkDataAttr)),e==this.lastLink&&(this.lastLink=null)}},checkUrl:function(e,t){if(!t&&e.search(/https?:\/\/([\w\-]+\.)?facebook\.com\/l\.php/i)>-1)return this.checkUrl(decodeURIComponent(e),!0);for(var n=0,r=this.re.length;n<r;n++){var o=e.match(this.re[n]);if(o&&o.length>0)return o[0]}},handle:function(e){var t=e.querySelector("img");if(t){var r=t.parentNode;if(t.src&&"relative"==n.getStyle(r,"position")){var o=e.getAttribute("ajaxify");if(o&&o.search(/\/flash\/expand_inline/i)>-1){var a=this.getThumbnailUrl(t.src);if(a)return this.createButton(a,r,e,{display:"block",position:"absolute",bottom:"3px",right:"3px",zIndex:9999,margin:0,width:"16px",height:"16px"},{display:"block"})}else if(this.checkUrl(e.href))return this.createButton(e.href,r,e,{display:"block",position:"absolute",bottom:"3px",right:"3px",zIndex:9999,margin:0,width:"16px",height:"16px"},{display:"block"})}return!1}return this.createButton(e.href,e,e)},getThumbnailUrl:function(e){for(var t in this.thumbnail)for(var r=0;r<this.thumbnail[t].re.length;r++){var o=n.getMatchFirst(e,this.thumbnail[t].re[r]);if(o)return this.thumbnail[t].url.replace(/\{vid\}/gi,o)}return""},createButton:function(e,t,r,o,a){if(!(e=this.checkUrl(e)))return!1;var i=document.createElement("a");i.className=u.className,i.href="http://savefrom.net/?url="+encodeURIComponent(e),i.setAttribute(n.embedDownloader.dataAttr,e),i.title=s.a.i18n.getMessage("download"),n.setStyle(i,{marginLeft:"7px",verticalAlign:"middle"}),o&&n.setStyle(i,o);var c=document.createElement("img");return c.className="icon",c.src=n.svg.getSrc("download","#a2db16"),n.setStyle(c,{display:"inline-block",width:"16px",height:"16px",verticalAlign:"middle",cursor:"pointer"}),a&&n.setStyle(c,a),i.appendChild(c),r.dataset[this.linkDataAttr]=1,t.appendChild(i),!0}},S={createButton:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={default:{props:{},style:{}},circle:{props:{isText:!1,isCircle:!0},style:{}},withoutText:{props:{isText:!1},style:{}},hover:{className:"sf-hover-container",props:{isText:!1},style:{position:"absolute",top:"8px",left:"8px"}}},r=t&&t.preset?t.preset:"default",o=n[r]?n[r]:n.default,a=o.props,i=o.style;t&&t.style&&(i=Object.assign(i,t.style));var c=y.a.create("div",{class:o.className||"sf-download-container",style:i});return Object(M.a)(Object(D.e)(N,A(A({},a),{},{onClick:function(t){t.preventDefault(),t.stopPropagation(),e(t)}})),c),c}},j={getLinksFromEmbed:function(e,t){if(!e)return t(null);var n=e.getAttribute("flashvars");if(null===n)return t(null);var r=Object(p.a)(n).params;if(!r)return t(null);var o=null;try{o=JSON.parse(r).video_data}catch(e){}if(!o)return t(null);o.progressive&&(o=o.progressive);var a={},i={sd_src:"SD",hd_src:"HD"};Array.isArray(o)||(o=[o]);for(var c,l=0;c=o[l];l++)["sd_src","hd_src"].forEach((function(e){c[e]&&(a[c[e]]=i[e])}));return t({links:a})},getVideoIdFromLink:function(e){var t=-1!==e.indexOf("&")?e.indexOf("&"):e.length,n=e.match(/videos\/(\d+)/);return n||(n=e.match(/pcb\.\w+\/(.*?)\?/)),!n&&e.includes("/watch/?")?n=e.substring(34,t):!n&&e.includes("/watch?")?n=e.substring(33,50):(!n&&e.includes("permalink&v=")&&(n=e.match(/permalink&v=(\d+)/)),!n&&e.includes("/reel/")&&(n=e.match(/reel\/(\d+)/)),n&&n[1])},requestLocalVideoLinks:function(e){return new Promise((function(e,t){n.bridge({func:'function(cb){var err=null;var token=null;try{token=window.require("DTSGInitialData").token}catch(_err){err=_err.message}cb([err,token])}',cb:function(n){var r=null,o=null;!n||n[0]?r=new Error("Get token timeout"):o=n[1],r?t(r):e(o)}})})).then((function(t){var n="https://www.facebook.com/video/tahoe/async/".concat(e,"/?").concat(R.stringify({payloadtype:"primary"})),r=R.stringify({__a:1,fb_dtsg:t});return Object(k.a)([n,r],'function(url,data){return fetch(url,{method:"POST",headers:{"content-type":"application/x-www-form-urlencoded"},body:data}).then(function(response){return response.text()})}')})).then((function(t){return new Promise((function(n,r){s.a.sendMessage({action:"getFacebookLinksFromData",extVideoId:e,data:t},(function(e){e&&e.links?n(e):r(new Error("Get links from data error"))}))}))})).catch((function(e){throw T.error("get local links error",e),Object(I.a)({category:"mistake",subcategory:"fa",event:"l"}),e}))},requestBgVideoLinks:function(e){return new Promise((function(t,n){s.a.sendMessage({action:"getFacebookLinks",extVideoId:e},(function(e){e&&e.links?t(e):n(new Error("Get links error"))}))})).catch((function(e){throw T.error("get links error",e),e}))},requestVideoLinksById:function(e){return Promise.resolve().then((function(){return j.requestLocalVideoLinks(e)})).catch((function(){return j.requestBgVideoLinks(e)}))},requestVideoLinks:function(e,t){return j.requestVideoLinksById(e).then((function(e){t(e.links,e.title)}),(function(e){t()}))},getLinksFromVideo:function(e,t){if(!e)return t(null);var r,o={},a={},i=null;if(!i){var c=Object(g.a)(e,"div[data-ft]");if(c&&Object(m.a)(c,".userContentWrapper[data-ft] "+c.tagName)&&(c=Object(g.a)(c,".userContentWrapper[data-ft]")),c&&(Array.from(c.querySelectorAll("a[href]")).some((function(e){var t=/\/videos\/(\d+)/.exec(e.href);if(t)return i=t[1],o.popup_1=!0,!0})),!i)){var l=null;try{l=JSON.parse(c.dataset.ft)}catch(e){}if(l){var s=l.mf_story_key,d=l.story_attachment_style;s&&"video_inline"===d&&(i=s,o.popup_1=!0)}}}if(!i&&Object(g.a)(e,"div._5-yb")){var u=/\/videos\/(\d+)/.exec(location.href);if(u)return t({links:{id:u[1]},popup_1:!0})}if(!i){var p=Object(g.a)(e,".uiStreamStory[data-story-id]"),h=/:(\d+)$/.exec(p&&p.dataset.storyId);(h=h&&h[1])&&(i=h)}if(!i&&(r=Object(f.a)(e,"fbUserContent"))){var v=r.querySelector("a[data-video-id]");if(v)(w=v&&v.dataset.videoId)&&(i=w)}if(!i&&(r=Object(g.a)(e,".userContentWrapper"))){var b=r.querySelector('div[id^="feed_subtitle_"] a[data-video-channel-id]');if(b){var y=/\/videos\/(\d+)/.exec(b.href);(w=y&&y[1])&&(i=w)}else{var k=r.querySelectorAll('a.profileLink, a[rel="theater"], #fbPhotoSnowliftTimestamp > a[href]'),w=null;[].slice.call(k).some((function(e){var t=/\/videos\/(\d+)/.exec(e.href);return w=t&&t[1]})),w&&(i=w)}}if(!i){var x=!1,S=!1,O=document.getElementById("stream_pagelet"),M=O&&O.previousElementSibling;if(M&&M.contains(e)&&(x=!0),!x){var L=document.querySelector(".uiStreamStory"),B=L&&L.parentNode;(B=B&&B.parentNode)&&B.contains(e)&&(S=!0)}if(x||S)(w=j.getVideoIdFromUrl())&&(i=w)}if(!i&&Object(g.a)(e,"#pagelet_group_permalink")){y=/video_id:"?([^,"]+)/.exec(document.body.innerHTML);(w=y&&y[1])&&(i=w)}if(i&&(a.id=i),e.src&&/^https?:/.test(e.src)){var P=n.getFileExtension(e.src,"mp4");a[e.src]=P.toUpperCase()}var C=e.querySelectorAll("source");if(C&&C.length>0)for(var E=0;E<C.length;E++){P=n.getFileExtension(C[E].src,"mp4");a[C[E].src]=P.toUpperCase()}return Object.keys(a).length?(o.links=a,t(o)):t(null)},getVideoIdFromUrl:function(){var e=null;return n.embedDownloader.hostings.facebook.re.some((function(t){var n=t.exec(location.href);if(n)return e=n[1],!0})),e||(e=(e=document.location.href.match(/(\d+).$/))&&e[1]?e[1]:null),e},getFileName:function(e){var t=n.getFileName(e);if(t)return t;var r=n.dateToObj();return"facebook_"+(r.year+"-"+r.month+"-"+r.day+"_"+r.hour+"-"+r.min)+"."+n.getFileExtension(e,"mp4")},prepareLinks:function(e,t){var n=[];for(var r in e){var o=this.getFileName(r),a=o.lastIndexOf("."),i=o.substr(a+1),c={href:r,title:o=t||o.substr(0,a),format:i.toUpperCase(),quality:e[r],forceDownload:!0};n.push(c)}return 0===n.length&&(n=s.a.i18n.getMessage("noLinksFound")),n},appendLinks:function(e){if(e){var t=document.getElementById("fbPhotoPageMediaInfo");if(null!==t){var r=document.querySelector("h2.uiHeaderTitle");if(r&&(r=r.textContent),t&&!t.querySelector("."+u.className)){var o=document.createElement("div");o.className=u.className;var a=y.a.create("div",{title:s.a.i18n.getMessage("download"),style:{display:"inline-block",width:"16px",height:"16px",backgroundImage:"url("+n.svg.getSrc("download","#a2db16")+")",backgroundRepeat:"no-repeat",backgroundPosition:"center center",verticalAlign:"middle",cursor:"pointer"}});o.appendChild(a);var i=null;a.addEventListener("click",(function(){if(u.contextMenu&&u.contextMenu.isShow)u.hideMenu();else{var t=u.contextMenu=n.popupMenu.quickInsert(this,s.a.i18n.getMessage("download")+" ...",u.className+"_popup");if(i)t.update(i);else if(e.id){var o=e.id;delete e.id,j.requestVideoLinks(o,(function(r,o){i=r?n.popupMenu.prepareLinks.facebook(r,o):j.prepareLinks(e),t.update(i)}))}else i=j.prepareLinks(e,r),t.update(i)}})),t.appendChild(o),t=null,o=null,a=null}}}},rmBtn:function(){for(var e,t=document.querySelectorAll("."+u.className),n=0;e=t[n];n++)e.parentNode.removeChild(e)},showDownloadMenuByVideoId:function(e,r){if(u.contextMenu&&u.contextMenu.isShow)u.hideMenu();else{var o=u.contextMenu=n.popupMenu.quickInsert(e,s.a.i18n.getMessage("download")+" ...",u.className+"_popup");_.a.createLinkExtractor("fb-video").extractLinks({mediaId:r,initData:t}).then((function(e){return o.update(function(e){return JSON.parse(JSON.stringify(e)).map((function(e){return e.href=e.url,e.title=e.filename,delete e.url,delete e.filename,e}))}(e))}))}}},L={style:null,getFilenameFromUrl:function(e){return n.getMatchFirst(e,/\/([^\/]+\.[a-z0-9]{3,4})(?:\?|$)/i)},getPhotoIdFromUrl:function(){var e=null,t=Object(p.a)(location.href);return t.fbid&&(e=t.fbid),e},prepPhotoUrl:function(e){e&&(/[?&]dl=1/.test(e)||(e+=(/\?/.test(e)?"&":"?")+"dl=1"));return e},rmCurrentPhotoBtn:function(e){for(var t,n=void 0,r=document.querySelectorAll(".sf-dl-current-photo-btn"),o=0;t=r[o];o++)e&&e.contains(t)?n=t:t.parentNode.removeChild(t);return n},injectStyle:function(){this.style?this.style.parentNode||document.head.appendChild(this.style):(this.style=y.a.create("style",{text:Object(v.a)({"div > .sf-dl-current-photo-btn":{display:"none",position:"absolute",top:"10px",left:"10px",width:"28px",height:"24px",border:0,zIndex:100,cursor:"pointer",backgroundColor:"#000",padding:0,borderRadius:"2px",opacity:.4,transition:"opacity 100ms linear",lineHeight:0},"div > .sf-dl-current-photo-btn svg":{margin:"4px"},"div > .sf-dl-current-photo-btn:hover":{opacity:.8},"div > .sf-dl-current-photo-btn:hover svg path":{fill:"#00B75A"},"body:not(.fullScreen) div:hover > .sf-dl-current-photo-btn":{display:"block"}})}),document.head.appendChild(this.style))},getPhotoUrlFromCtr:function(e){var t=[],n=e.querySelector("img.spotlight")||e.querySelector("img.fbPhotoImage");return n&&t.push(n.src),t},getVideoUrlFromPhotoCtr:function(e){var t=null,n=e.querySelector(".stage .videoStage video");if(n){var r=Object(g.a)(n,".fbPhotoSnowliftPopup");if(r){var o=r.querySelector('div[id^="feed_subtitle_"] a[data-video-channel-id]');if(o){var a=/\/videos\/(\d+)/.exec(o.href);a&&(t=a[1])}}}return t},getLinksFromPhotoCtr:function(e){return Object(m.a)(e,".stageWrapper.showVideo")?Promise.resolve().then((function(){var t=j.getVideoIdFromUrl();if(t||(t=L.getVideoUrlFromPhotoCtr(e)),t)return j.requestVideoLinksById(t)})).then((function(e){return n.popupMenu.prepareLinks.facebook(e.links,e.title)})):Promise.resolve().then((function(){var e=L.getPhotoIdFromUrl();if(e)return new Promise((function(t,n){s.a.sendMessage({action:"getFacebookPhotoUrl",fbid:e},(function(e){e&&e.length?t(e):n(new Error("getFacebookPhotoUrl can't get url"))}))}));throw new Error("Can't get photo id from url")})).catch((function(t){return L.getPhotoUrlFromCtr(e)})).then((function(e){if(!e||!e.length)throw new Error("Photo url not found");return e.map((function(e){var t=L.prepPhotoUrl(e),n=w.a.modify(L.getFilenameFromUrl(t)),r=/(.+)\.([^.]+)$/.exec(n),o="jpg",a=n;return r&&(o=r[1],a=r[2]),{href:t,title:a,quality:s.a.i18n.getMessage("download"),format:" ",ext:o,isBlank:!0}}))}))},addDlCurrentPhotoBtn:function(e){if(!this.rmCurrentPhotoBtn(e)){var t=y.a.create("a",{class:"sf-dl-current-photo-btn",href:"#",title:s.a.i18n.getMessage("download"),append:[n.svg.getSvg("download","#FFF",16)],on:[["click",function(t){if(t.stopPropagation(),t.preventDefault(),u.contextMenu&&u.contextMenu.isShow)u.hideMenu();else{var r=function e(t){18!==t.keyCode&&17!==t.keyCode&&(o.hide(),document.removeEventListener("keydown",e))},o=u.contextMenu=n.popupMenu.quickInsert(this,s.a.i18n.getMessage("download")+" ...","photoDlMenu",{parent:e,onShow:function(){u.isMutation||document.addEventListener("keydown",r)},onHide:function(){u.isMutation||document.removeEventListener("keydown",r)}});L.getLinksFromPhotoCtr(e).then((function(e){e.forEach((function(e){e.func=function(t){t.preventDefault(),n.download(null,e.href),o.hide()}})),o.update(e)})).catch((function(e){T.debug("Get photo links error",e),o.update(s.a.i18n.getMessage("noLinksFound"))}))}}],["mouseover",function(e){if(H){if(!e.altKey&&!e.ctrlKey)return e.preventDefault(),void Object(q.b)(t,{defaultWidth:400,defaultHeight:60},{});Object(q.a)(t,{defaultWidth:400,defaultHeight:60})}}]]});e.appendChild(t)}},addButtonForArticleImage:function(e){return Object(o.a)(l.a.mark((function o(){var a,i,c,s,d;return l.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(a=e.closest("a")){o.next=3;break}return o.abrupt("return");case 3:return o.next=5,_.a.createLinkExtractor("fb-photo").extractLinks({element:e,initData:t});case 5:i=o.sent,c=Object(r.a)(i,1),s=c[0],d=y.a.create("a",{class:"sf-hover-container",href:s.url,download:s.filename,style:{position:"absolute",top:"8px",left:"8px"},on:[["click",function(e){e.stopPropagation(),n.downloadOnClick(e)}],["mouseover",function(e){if(H){if(!e.altKey&&!e.ctrlKey)return e.preventDefault(),void Object(q.b)(d,{defaultWidth:400,defaultHeight:60},{});Object(q.a)(d,{defaultWidth:400,defaultHeight:60})}}]]}),Object(I.a)({category:"append",subcategory:"fa",event:"b"}),Object(M.a)(Object(D.e)(N,{isText:!1}),d),a.appendChild(d);case 12:case"end":return o.stop()}}),o)})))()},addButtonForShowPageImage:function(e){return Object(o.a)(l.a.mark((function o(){var a,i,c,s,d,u;return l.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(a={position:"absolute",zIndex:9999,margin:"15px"},i=e.closest('div:not([data-visualcompletion="media-vc-image"])').parentElement.parentElement){o.next=4;break}return o.abrupt("return");case 4:return o.next=6,_.a.createLinkExtractor("fb-photo").extractLinks({element:e,initData:t});case 6:c=o.sent,s=Object(r.a)(c,1),d=s[0],u=y.a.create("a",{style:a,href:d.url,download:d.filename,on:[["click",function(e){e.stopPropagation(),n.downloadOnClick(e)}],["mouseover",function(e){if(H){if(!e.altKey&&!e.ctrlKey)return e.preventDefault(),void Object(q.b)(u,{defaultWidth:400,defaultHeight:60},{});Object(q.a)(u,{defaultWidth:400,defaultHeight:60})}}]]}),Object(I.a)({category:"append",subcategory:"fa",event:"b"}),Object(M.a)(Object(D.e)(N,{isText:!1,isCircle:!0}),u),i.prepend(u);case 13:case"end":return o.stop()}}),o)})))()},addCurrentDlBtn:function(e){e.dataset.sfSkip>0||(e.dataset.sfSkip="1",this.addDlCurrentPhotoBtn(e))},rmDataAttrs:function(){for(var e,t=Object(h.a)("sfSkip"),n=document.querySelectorAll("*["+t+"]"),r=0;e=n[r];r++)e.removeAttribute(t)}},B={style:null,addStyle:function(){if(this.style)this.style.parentNode||document.head.appendChild(this.style);else{this.style=y.a.create("style",{class:"sfFeedStyle",text:Object(v.a)([{selector:"."+u.className+"-feed.sf-feed",style:{display:"none",width:"20px",height:"20px",padding:0,position:"absolute",background:"url("+n.svg.getSrc("download","#a2db16")+") center no-repeat transparent",backgroundSize:"16px",top:"5px",left:"5px",zIndex:1,cursor:"pointer"}},{selector:'div[role="dialog"] .'+u.className+"-feed.sf-feed",style:{top:"40px"}},{selector:"body:not(.fullScreen) div:hover > ."+u.className+"-feed.sf-feed",style:{display:"block"}},{selector:"."+u.className+"-feed.sf-feed:active",style:{outline:0}}].concat([{selector:".sf-hover-container",style:{display:"none"}},{selector:'div[role="presentation"]:hover .sf-hover-container, a[role="link"]:hover .sf-hover-container, div[style*="bottom:calc"]:hover .sf-hover-container',style:{display:"block"}}]))}),document.head.appendChild(this.style)}},onDlBtnClick:function(e){if(e.preventDefault(),e.stopPropagation(),u.contextMenu&&u.contextMenu.isShow)u.hideMenu();else{try{var t=JSON.parse(this.dataset.sfDlLinks)}catch(e){return}var r=u.contextMenu=n.popupMenu.quickInsert(this,s.a.i18n.getMessage("download")+" ...",u.className+"_popup");if(t.id){var o=t.id;delete t.id,j.requestVideoLinks(o,(function(e,o){var a;a=e?n.popupMenu.prepareLinks.facebook(e,o):j.prepareLinks(t),r.update(a)}))}else{var a=j.prepareLinks(t);r.update(a)}}},addDownloadBtn:function(e,t){var n=e.querySelector("."+u.className+"-feed");n&&n.parentNode.removeChild(n),e.appendChild(y.a.create("a",{data:{sfDlLinks:JSON.stringify(t)},title:s.a.i18n.getMessage("download"),class:[u.className+"-feed","sf-feed"],href:"#",on:["click",B.onDlBtnClick]}))},addButtonForWatchPage:function(e){var t=e.closest("._6x84"),n=/\/live/.test(location.href);t||(t=e.closest(".x1n6yrxt, .xvl6max")),!t&&n&&(t=e.closest(".x1282nqq").parentNode);var r=t.querySelector('a[href*="/videos/"]');if(r||(r=t.querySelector('a[href*="/watch/?"]')),r||(r={href:window.location.href}),r&&r.href){var o=j.getVideoIdFromLink(r.href);if(o){var a=S.createButton((function(){j.showDownloadMenuByVideoId(a,o)}));Object(I.a)({category:"append",subcategory:"fa",event:"b"});var i=null===t.querySelector('[aria-label="Like"]')?t.querySelector(".x1u2d2a2"):t.querySelector('[aria-label="Like"]').parentNode;r.href===window.location.href?(e.dataset.waRep="1",setTimeout((function(){i.querySelector(".sf-download-container")&&U!==r.href&&i.querySelector(".sf-download-container").remove(),i.prepend(a),U=r.href}),1500)):(i.querySelector(".sf-download-container")&&i.querySelector(".sf-download-container").remove(),i.prepend(a))}}},addButtonForFeedPage:function(e){var t=e.closest('[role="article"]'),n=t.querySelector('a[href*="/watch/?v"]');if(n||(n=t.querySelector('a[href*="/videos/"]')),n){var r=n.href,o=j.getVideoIdFromLink(r);if(o){var a=null===t.querySelector('[aria-label="Like"]')?t.querySelector(".x8182xy").firstChild:t.querySelector('[aria-label="Like"]').parentNode;if(a){var i=S.createButton((function(){j.showDownloadMenuByVideoId(i,o)}),{preset:"withoutText",style:{alignItems:"center",display:"flex"}});Object(I.a)({category:"append",subcategory:"fa",event:"b"}),a.parentElement.insertBefore(i,a)}}}},addButtonForShowPageVideo:function(e){var t=S.createButton((function(e){var t=j.getVideoIdFromLink(location.href);t&&j.showDownloadMenuByVideoId(e.target,t)}),{preset:"circle",style:{position:"absolute",top:"8px",left:"114px"}});Object(I.a)({category:"append",subcategory:"fa",event:"b"}),e.appendChild(t)},addButtonForReelVideo:function(e){var t={position:"absolute",top:"80px",left:"16px",zIndex:10},n=e.querySelector("div[data-video-id]");if(n||(n=e,t=A(A({},t),{},{top:"16px"})),n){var r=S.createButton((function(e){var t=n.getAttribute("data-video-id");t||(t=j.getVideoIdFromLink(n.getAttribute("href"))),t&&j.showDownloadMenuByVideoId(e.target,t)}),{preset:"circle",style:t});Object(I.a)({category:"append",subcategory:"fa",event:"b"}),e.appendChild(r)}},addHoverButtonForArticleVideo:function(e){var t=j.getVideoIdFromLink(e.href);if(t){var n=e.closest('[role="article"], ._6x84');if(n){var r=n.querySelector('div[role="presentation"]');if(r||(r=e.parentNode)){var o=S.createButton((function(e){j.showDownloadMenuByVideoId(e.target,t)}),{preset:"hover"});r.appendChild(o)}}}},onLinkHover:function(){var e=this;if(!(this.dataset.hasSfFeedBtn>1)){this.dataset.hasSfFeedBtn="1";var t=this;return"VIDEO"===t.tagName&&(t=t.querySelector("embed")||this),new Promise((function(e){"EMBED"===t.tagName?j.getLinksFromEmbed(t,e):"VIDEO"===t.tagName&&j.getLinksFromVideo(t,e)})).catch((function(e){return T("getLinks error",e),null})).then((function(t){var n=t&&t.links;if(n)if(t&&t.popup_1)B.addDownloadBtn(e.parentNode,n);else if(Object(m.a)(e,".uiStreamStory "+e.tagName)||Object(m.a)(e,".fbPhotoSnowliftContainer "+e.tagName)){Object(g.a)(e,".fbPhotoSnowliftPopup .stageWrapper")||B.addDownloadBtn(e.parentNode,n)}else{var r=document.getElementById("pagelet_timeline_main_column")||document.getElementById("stream_pagelet")||document.getElementById("mainContainer");if(r&&r.contains(e))B.addDownloadBtn(e.parentNode,n);else{var o=document.getElementById("stream_pagelet"),a=o&&o.previousElementSibling;if(a&&a.contains(e))B.addDownloadBtn(e.parentNode,n);else{var i=document.querySelector(".uiStreamStory"),c=i&&i.parentNode;(c=c&&c.parentNode)&&c.contains(e)&&B.addDownloadBtn(e.parentNode,n)}}}else e.dataset.hasSfFeedBtn=0}))}},rmBtn:function(){var e=[Object(h.a)("hasSfFeedBtn"),Object(h.a)("sfReady")],t=e.map((function(e){return"[".concat(e,"]")})).join(",");document.querySelectorAll(t).forEach((function(t){e.forEach((function(e){return t.removeAttribute(e)}))}));var n=[".sf-hover-container",".sf-download-container","."+u.className+"-feed"].join(",");document.querySelectorAll(n).forEach((function(e){e.parentNode.removeChild(e)}))}}}))},87:function(e,t,n){var r=n(47),o=n(108);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a,i=0,c={injectType:"lazyStyleTag",insert:"head",singleton:!1},l={};l.locals=o.locals||{},l.use=function(){return i++||(a=r(o,c)),l},l.unuse=function(){i>0&&!--i&&(a(),a=null)},e.exports=l}});
!function(e){function t(t){for(var a,s,o=t[0],l=t[1],d=t[2],p=0,u=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&u.push(i[s][0]),i[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);for(c&&c(t);u.length;)u.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,o=1;o<n.length;o++){var l=n[o];0!==i[l]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},i={16:0},r=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var o=window.savefromContentScriptWebpackJsonp=window.savefromContentScriptWebpackJsonp||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var d=0;d<o.length;d++)t(o[d]);var c=l;r.push([89,0]),n()}({89:function(e,t,n){"use strict";n.r(t);var a=n(4),i=n(2),r=n.n(i),s=n(0),o=n(16),l=n(25),d=n(38),c=n(37),p=n(33),u=n(21),f=n(31),b=n(26),h=n(8),v=n(3),y=n(12),m=n(28),g=n(18),k=n(51),S=n(24),x=n(15),_=n(17);Object(y.a)("vimeo_com");m.a.isSingle()&&Object(l.b)("vimeo",(function(e,t){var n=Object(o.a)(t),i=t.preferences,l=i.moduleVimeo?1:0,y=Object(d.a)();s.a.onMessage.addListener((function(t,n,a){if("getModuleInfo"===t.action){if(t.url!==location.href)return;return a({state:l,moduleName:e})}if("changeState"===t.action){if(e!==t.moduleName)return;return C.changeState(t.state)}"updatePreferences"!==t.action||Object.assign(i,t.preferences)})),l&&setTimeout((function(){C.run()}));var m,w,C={panelId:"savefrom__vimeo_links",btnBox:null,clipId:null,timer:null,btnPrefix:"sd_ld_bnt_",popupIsShow:!1,dlBtnClassName:"sf-dl-btn",currentMenu:null,run:function(){if(l=1,y){if(C.clipId=C.getFrameClipId(),C.clipId)return C.appendIframeButtons();y=!1}this.videoFeed.injectStyle(),g.a.isAvailable()&&this.mutationMode.enable()},changeState:function(e){y||(l=e,C.videoFeed.disable(),C.rmAllBtn(),C.mutationMode.stop(),e&&C.run())},hideMenu:function(){C.currentMenu&&(C.currentMenu.hide(),C.currentMenu=null)},getFrameClipId:function(){var e=document.location.href.match(/player\.vimeo\.com\/video\/([\w\-]+)/i);if(e=e&&e[1])return e},getBrowserVideoData:function(e,t){var n=e.querySelector(".uploaded_on");if(n||(n=e.querySelector("#info .meta .stats")),!n)return null;if(t&&(t=(t=t.match(/([0-9]+)$/))&&t[1]),!t){var a=e.querySelector("a.js-title")||e.querySelector("a");if(!a)return;var i=a.getAttribute("href");if(!i)return;t=(t=i.match(/\/([0-9]+)$/))&&t[1]}return t?{id:t,parent:n,style:1}:void 0},getVideoId:function(e){var t,n=null;if(t=(e=e||document).querySelector(".player[data-clip-id]"))return t.dataset.clipId;if(t=e.querySelector(".player[data-fallback-url]")){var a=t.dataset.fallbackUrl||"";if(a=a.match(/video\/([0-9]+)\//))return a[1]}return(t=e.querySelector("div.player_wrapper > div.faux_player[data-clip_id]"))&&(n=t.dataset.clip_id)?n:void 0},onBtnClick:(w=Object(a.a)(r.a.mark((function e(a,i){var o,l,d,c,p,u,f,h,v;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i.stopPropagation(),i.preventDefault(),(o=a.id)||(l=null,a.playerContainer&&(l=Object(b.a)(a.parent,a.playerContainer)),o=C.getVideoId(l)),!C.currentMenu||!C.currentMenu.isShow){e.next=7;break}return C.hideMenu(),e.abrupt("return");case 7:return d=s.a.i18n.getMessage("download")+" ...",c={},4===a.style&&(c.offsetTop=20),p=this.dataset.sfMobile>0,u=C.currentMenu=p?n.mobileLightBox.show(d):n.popupMenu.quickInsert(this,d,"sf-popupMenu",c),f=s.a.i18n.getMessage("noLinksFound"),e.prev=13,h=function(e){return JSON.parse(JSON.stringify(e)).map((function(e){return e.title=e.filename,e.href=e.url,delete e.filename,delete e.url,e}))},e.next=17,_.a.createLinkExtractor("vi-blog_video").extractLinks({mediaId:o,initData:t});case 17:v=e.sent,f=h(v),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(13),console.error("getLinks error",e.t0);case 24:u.update(f);case 25:case"end":return e.stop()}}),e,this,[[13,21]])}))),function(e,t){return w.apply(this,arguments)}),getPlayerConfig:function(){return Object(S.a)('function(){var clip=null;try{clip=vimeo.clip_page_config.clip}catch(err){throw new Error("Player config is not found")}return{clipId:vimeo.clip_page_config.clip.id,url:vimeo.clip_page_config.player.config_url,clip:clip}}')},rmAllBtn:function(){["sfSkip"].forEach((function(e){for(var t,n=Object(p.a)(e),a=document.querySelectorAll("["+n+"]"),i=0;t=a[i];i++)t.removeAttribute(n)}));for(var e,t=document.querySelectorAll("."+C.dlBtnClassName),n=0;e=t[n];n++)"1"!==e.dataset.sfType&&"3"!==e.dataset.sfType||(e=e.parentNode),e.parentNode.removeChild(e);C.videoFeed.rmBtn(),C.hideMenu()},appendBtn:function(e){var t,a=e.parent,i=a.querySelector("."+C.dlBtnClassName);if(i){if(!i.dataset.sfId&&6!==e.style)return;i.parentNode.removeChild(i),i=null}if(1===e.style?t=v.a.create("a",{text:s.a.i18n.getMessage("download"),class:[C.dlBtnClassName,"sf-style-1"],style:{display:"inline"},data:{sfId:e.id,sfType:e.style},href:"#"+e.id}):2===e.style?t=v.a.create("button",{text:s.a.i18n.getMessage("download"),class:[C.dlBtnClassName,"btn","iconify_down_b"],data:{sfId:e.id,sfType:e.style}}):5===e.style?t=v.a.create("button",{class:[C.dlBtnClassName,"sf-type-5"],data:{sfId:e.id,sfType:e.style},append:[v.a.create(n.svg.getSvg("download","#ffffff"),{style:{display:"inline-block",width:"16px",height:"16px",verticalAlign:"text-bottom",marginRight:".625rem"}}),v.a.create("span",{style:{marginLeft:0},text:s.a.i18n.getMessage("download")})]}):7===e.style?t=v.a.create("button",{class:[C.dlBtnClassName,"sf-type-7"],data:{sfId:e.id,sfType:e.style},append:[v.a.create(n.svg.getSvg("download","#ffffff"),{style:{display:"inline-block",width:"16px",height:"16px",verticalAlign:"text-bottom",marginRight:".625rem"}}),v.a.create("span",{style:{marginLeft:0},text:s.a.i18n.getMessage("download")})]}):3===e.style?t=v.a.create("button",{class:[C.dlBtnClassName,"iris_btn","iris_btn-switch"],data:{sfId:e.id,sfType:e.style},append:[v.a.create(n.svg.getSvg("download","#00adef"),{style:{display:"inline-block",width:"16px",height:"16px",verticalAlign:"text-bottom",marginRight:".625rem"}}),v.a.create("span",{class:"iris_btn-content",style:{marginLeft:0},text:s.a.i18n.getMessage("download")})]}):4===e.style?t=v.a.create("i",{class:[C.dlBtnClassName,"sf-style-4"],data:{sfId:e.id,sfType:e.style},style:{display:"inline-block",border:"1px solid #F8F8F8",width:"20px",height:"20px",lineHeight:0,cursor:"pointer",marginLeft:"10px",verticalAlign:"middle"},append:v.a.create("style",{text:Object(u.a)([{selector:"."+C.dlBtnClassName+".sf-style-4",style:{background:"url("+n.svg.getSrc("download","#777777")+") center no-repeat #F8F8F8",backgroundSize:"12px"}},{selector:"."+C.dlBtnClassName+".sf-style-4:hover",style:{background:"url("+n.svg.getSrc("download","#00B75A")+") center no-repeat #F8F8F8",backgroundSize:"12px"}},{selector:"."+C.dlBtnClassName+".sf-style-4:active",style:{outline:0,boxShadow:"inset 0 3px 5px rgba(0, 0, 0, 0.125)"}}])})}):6===e.style&&(t=v.a.create("button",{class:[C.dlBtnClassName,"btn","btn_sm","btn_blue_o"],data:{sfId:e.id,sfType:e.style,sfMobile:1},style:{marginLeft:"8px"},append:[v.a.create(n.svg.getSvg("download","#00adef"),{style:{display:"inline-block",width:"12px",height:"12px",verticalAlign:"text-bottom",marginRight:"4px"}}),v.a.create("span",{class:"btn_text",style:{marginLeft:0},text:s.a.i18n.getMessage("download")})]})),t.addEventListener("click",C.onBtnClick.bind(t,e)),1===e.style&&(t=v.a.create("span",{append:[t," | "]})),3===e.style&&(t=v.a.create("div",{class:"clip_info-user_actions",append:[t]})),1===e.style||2===e.style||6===e.style){var r=a.firstChild;r?a.insertBefore(t,r):a.appendChild(t)}else a.appendChild(t);Object(x.a)({category:"append",subcategory:"vi",event:"b"})},playerStateChangeObserver:null,observeVideoUi:function(e,t){var n=t;if(n){var a=null,i=/(\s|^)with-controls(\s|$)/;this.playerStateChangeObserver&&this.playerStateChangeObserver.stop(),this.playerStateChangeObserver=new k.a({attrs:[{name:"class",callback:function(t){var n=!i.test(t.oldValue),r=!i.test(t.value);!n&&r?(clearTimeout(a),a=setTimeout((function(){e.lockHide||e.container.classList.add("sf-hide-ui")}),100)):n&&!r&&(clearTimeout(a),e.container.classList.remove("sf-hide-ui"))}}],target:n})}},appendIframeButtons:function(){var e=this,i=n.frameMenu.getBtn({quickBtnStyleObj:{display:"inline-block",border:0,borderRadius:".3em",cursor:"pointer",position:"relative",padding:"6px 8px"},quickBtnCssStyle:{backgroundColor:"rgba(23,35,34,.75)"},quickBtnOverCssStyle:{backgroundColor:"rgb(0, 173, 239)"},nodeCssStyle:{display:"none"},singleBtn:!0,btnId:e.panelId,containerStyle:{left:"10px",top:"10px"},quickBtnIcon:v.a.create(n.svg.getSvg("download","#ffffff"),{style:{display:"inline-block",width:"16px",height:"16px",verticalAlign:"middle"}}),on:[["click",function(){var o=Object(a.a)(r.a.mark((function a(o){var l,d,c,p,u,f;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(o.preventDefault(),o.stopPropagation(),!e.currentMenu||!e.currentMenu.isShow){a.next=5;break}return e.hideMenu(),a.abrupt("return");case 5:return l=e.clipId,d=s.a.i18n.getMessage("download")+" ...",c=e.currentMenu=n.frameMenu.getMenu(this,d,"sf-frame-menu",{leftMenuPos:!0,container:i.container,onShow:function(){i.node.classList.add("sf-over")},onHide:function(){e.currentMenu=null,i.node.classList.remove("sf-over")}}),p=s.a.i18n.getMessage("noLinksFound"),a.prev=9,u=function(e){return JSON.parse(JSON.stringify(e)).map((function(e){return e.title=e.filename,e.href=e.url,delete e.filename,delete e.url,e}))},a.next=13,_.a.createLinkExtractor("vi-blog_video").extractLinks({mediaId:l,initData:t});case 13:f=a.sent,p=u(f),a.next=20;break;case 17:a.prev=17,a.t0=a.catch(9),console.error("getLinks error",a.t0);case 20:c.update(p);case 21:case"end":return a.stop()}}),a,this,[[9,17]])})));return function(e){return o.apply(this,arguments)}}()],["mousedown",function(t){t.stopPropagation(),2===t.button&&(o&&(o.stop(),o=null),e.hideMenu(),i.container.parentNode&&i.container.parentNode.removeChild(i.container))}]]});i.quickBtn.title=s.a.i18n.getMessage("download"),i.container=v.a.create("div",{class:"sf-btn-ctr",append:i.node}),h.a.on(i.container,"mouseenter",(function(){i.lockHide=!0})),h.a.on(i.container,"mouseleave",(function(){i.lockHide=!1})),i.node.appendChild(v.a.create("style",{text:Object(u.a)([{selector:["body:hover .sf-btn-ctr:not(.sf-hide-ui) #"+e.panelId,"body:hover .sf-btn-ctr:not(.sf-hide-ui) .sf-frame-menu"],style:{display:"block"}}])})),document.body.appendChild(i.container);var o=new g.a({queries:[{css:'#player .captions[aria-live="assertive"]',is:"added",callback:function(t){var n=t.added[0];n&&(e.observeVideoUi(i,n),setTimeout((function(){o.stop(),o=null}),0))}}]})},videoFeed:{btnClassName:"sf-feed-dl-btn",style:null,onClick:(m=Object(a.a)(r.a.mark((function e(a){var i,o,l,d,c,p;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),a.stopPropagation(),i=this.dataset.sfId,this.dataset.sfCouchMode,!C.currentMenu||!C.currentMenu.isShow){e.next=7;break}return C.hideMenu(),e.abrupt("return");case 7:return o=s.a.i18n.getMessage("download")+" ...",l=C.currentMenu=n.popupMenu.quickInsert(this,o,"sf-popupMenu"),d=s.a.i18n.getMessage("noLinksFound"),e.prev=10,c=function(e){return JSON.parse(JSON.stringify(e)).map((function(e){return e.title=e.filename,e.href=e.url,delete e.filename,delete e.url,e}))},e.next=14,_.a.createLinkExtractor("vi-blog_video").extractLinks({mediaId:i,initData:t});case 14:p=e.sent,d=c(p),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(10),console.error("getLinks error",e.t0);case 21:l.update(d);case 22:case"end":return e.stop()}}),e,this,[[10,18]])}))),function(e){return m.apply(this,arguments)}),getBtn:function(e){return v.a.create("i",{class:e.classList,data:{sfId:e.id,sfCouchMode:e.isCouchMode?1:0},on:["click",this.onClick]})},onImgOver2:function(e){var t,n,a=this.parentNode;if("A"===a.tagName){var i=a.getAttribute("href");if(i&&(n=(n=i.match(/^\/(\d+)$/))&&n[1])&&(t=a.parentNode)&&t.classList.contains("contextclip-img")&&!(t.dataset.sfBtn>0)){t.dataset.sfBtn="1";var r=[C.videoFeed.btnClassName,"sf-type1-btn"];a.appendChild(C.videoFeed.getBtn({id:n,classList:r})),a=null,t=null}}},onImgOver:function(e){var t,n,a=this.parentNode;if(Object(f.a)(this,"a.contextclip-img-thumb")){t=this,a=this;var i=/\/([0-9]+)/.exec(this.href);i&&(n=i[1])}if(!n&&(Object(f.a)(this,"div.iris_video-vital")||Object(f.a)(this,"li.clip_thumbnail"))){a=this.querySelector(".iris_thumbnail"),t=this;var r=this.querySelector("a.iris_link-box");if(r){var s=r.href;!(n=(n=s.match(/\/([0-9]+)/))&&n[1])&&s&&(n=JSON.stringify({url:s}))}}if(!n&&"LI"==a.tagName){if(!(n=a.dataset.resultId)||"clip_"!==n.substr(0,5))return;n=n.substr(5),t=a,a=this.querySelector(".thumbnail_wrapper")}if(!n){if("A"!==a.tagName)return;if(n=a.dataset.clipId,!(t=a.parentNode))return}var o=!1;if(!n){if((o="item_id"===(n=t.id).substr(0,7)&&t.classList.contains("clip"))||"clip"===n.substr(0,4)||(n=void 0),!n&&"ARTICLE"===t.tagName&&t.classList.contains("clip_item")&&(n=a.getAttribute("href")),!n)return;(n=n.match(/([0-9]+)$/))&&(n=n[1])}if(!t.dataset.sfBtn){t.dataset.sfBtn="1";var l=[C.videoFeed.btnClassName];this.classList.contains("thumbnail_lg_wide")&&l.push("sf-type1-btn"),this.classList.contains("contextclip-img-thumb")&&l.push("sf-type4-btn"),(this.classList.contains("clip_thumbnail")||this.classList.contains("iris_video-vital"))&&l.push("sf-type3-btn");var d=t.parentNode;d&&"clips"===d.id&&l.push("sf-type1-btn"),d=null,o&&l.push("sf-type1-btn"),t.classList.contains("promo_clip")&&1===l.length&&l.push("sf-type1-btn"),a.appendChild(C.videoFeed.getBtn({id:n,classList:l,isCouchMode:o})),a=null,t=null}},injectStyle:function(){this.style?!this.style.parentNode&&document.head.appendChild(this.style):(this.style=v.a.create("style",{text:Object(u.a)([{selector:[".sf-dl-btn.sf-type-5",".sf-dl-btn.sf-type-7"],style:{color:"#fff",borderColor:"#00adef",backgroundColor:"#00adef",minWidth:"68px",minHeight:"32px",padding:"0 10px",lineHeight:"30px",fontSize:"14px",width:"auto",position:"relative",margin:0,fontWeight:700,borderWidth:"1px",borderStyle:"solid",borderRadius:"3px",letterSpacing:".1px",transition:"all .1s ease-in-out",cursor:"pointer",marginLeft:".5rem"}},{selector:[".sf-dl-btn.sf-type-7"],style:{verticalAlign:"middle"}},{selector:[".sf-dl-btn.sf-type-5:hover",".sf-dl-btn.sf-type-7:hover"],style:{color:"#fff",borderColor:"#08c",backgroundColor:"#08c"}},{selector:["a > .sf-feed-dl-btn","a .sf-feed-dl-btn.sf-type3-btn","a > .sf-feed-dl-btn.sf-type4-btn"],style:{display:"none",border:"1px solid #F8F8F8",width:"20px",height:"20px",padding:0,position:"absolute",background:"url("+n.svg.getSrc("download","#777777")+") center no-repeat #F8F8F8",backgroundSize:"12px",top:"auto",left:"auto",lineHeight:0}},{selector:["a > .sf-feed-dl-btn.sf-type4-btn"],style:{top:0,left:0}},{selector:["a > .sf-feed-dl-btn.sf-type1-btn","a > div > .sf-feed-dl-btn.sf-type3-btn"],style:{top:0}},{selector:["a > .sf-feed-dl-btn.sf-type2-btn"],style:{opacity:.5}},{selector:["a > div > .sf-feed-dl-btn.sf-type3-btn"],style:{zIndex:10}},{selector:["a > .sf-feed-dl-btn:hover","a > div > .sf-feed-dl-btn.sf-type3-btn:hover"],style:{background:"url("+n.svg.getSrc("download","#00B75A")+") center no-repeat #F8F8F8",backgroundSize:"12px"}},{selector:["a > .sf-feed-dl-btn.sf-type2-btn:hover"],style:{opacity:.8}},{selector:["a > .sf-feed-dl-btn:active","a > div > .sf-feed-dl-btn.sf-type3-btn:active"],style:{outline:0,boxShadow:"inset 0 3px 5px rgba(0, 0, 0, 0.125)"}},{selector:["a:hover > .sf-feed-dl-btn","a:hover > div > .sf-feed-dl-btn.sf-type3-btn"],style:{display:"block"}}])}),document.head.appendChild(this.style))},disable:function(){this.style&&this.style.parentNode&&this.style.parentNode.removeChild(this.style)},rmBtn:function(){for(var e,t=document.querySelectorAll(".sf-feed-dl-btn"),n=0;e=t[n];n++)e.parentNode.removeChild(e);var a=Object(p.a)("sfBtn"),i=document.querySelectorAll("["+a+"]");for(n=0;e=i[n];n++)e.removeAttribute(a)}},mutationMode:{observer:null,stop:function(){this.observer&&this.observer.stop()},wrapOnImgOver:function(){l&&C.videoFeed.onImgOver.apply(this,arguments)},wrapOnImgOver2:function(){l&&C.videoFeed.onImgOver2.apply(this,arguments)},enable:function(){if(this.observer)return this.observer.start();this.observer=new g.a({queries:[{css:"#clip #info #tools",is:"added",callback:function(e){for(var t,n=0;t=e.added[n];n++)C.hideMenu(),t.dataset.sfSkip>0||(t.dataset.sfSkip="1",C.appendBtn({id:"",parent:t,style:2,playerContainer:"#clip"}))}},{css:"#channel_clip_container #info .meta",is:"added",callback:function(e){for(var t,n=0;t=e.added[n];n++)if(C.hideMenu(),!(t.dataset.sfSkip>0)){t.dataset.sfSkip="1";var a=t.querySelector(".stats")||t.querySelector(".time");a&&C.appendBtn({id:"",parent:a,style:1,playerContainer:"#channel_clip_container"})}}},{css:"#browse_content ol.browse_videos_videos > li",is:"added",callback:function(e){for(var t,n=0;t=e.added[n];n++)if(!(t.dataset.sfSkip>0)&&(t.dataset.sfSkip="1","clip_"===t.id.substr(0,5))){var a=C.getBrowserVideoData(t,t.id);a&&C.appendBtn(a)}}},{css:"img.thumbnail",is:"added",callback:function(e){for(var t,n=0;t=e.added[n];n++)t.dataset.sfSkip>0||(t.dataset.sfSkip="1",h.a.one(t,"mouseenter",C.mutationMode.wrapOnImgOver))}},{css:".clip_thumbnail .iris_thumbnail img",is:"added",callback:function(e){for(var t,n=0;t=e.added[n];n++)if(!(t.dataset.sfSkip>0)){t.dataset.sfSkip="1";var a=Object(c.a)(t,"clip_thumbnail");h.a.one(a,"mouseenter",C.mutationMode.wrapOnImgOver)}}},{css:".iris_video-vital .iris_thumbnail img",is:"added",callback:function(e){for(var t,n=0;t=e.added[n];n++)if(!(t.dataset.sfSkip>0)){t.dataset.sfSkip="1";var a=Object(c.a)(t,"iris_video-vital");h.a.one(a,"mouseenter",C.mutationMode.wrapOnImgOver)}}},{css:".contextclip-img-thumb img",is:"added",callback:function(e){for(var t,n=0;t=e.added[n];n++)if(!(t.dataset.sfSkip>0)){t.dataset.sfSkip="1";var a=Object(c.a)(t,"contextclip-img-thumb");h.a.one(a,"mouseenter",C.mutationMode.wrapOnImgOver)}}},{css:".clip_main .clip_info a.js-user_link.iris_link-header",is:"added",callback:function(e){for(var t,n=0;t=e.added[n];n++)if(!(t.dataset.sfSkip>0)){t.dataset.sfSkip="1",C.hideMenu();var a=Object(b.a)(t,".clip_info-wrapper");if(a){var i=a.querySelector(".clip_info-actions");i&&C.appendBtn({id:"",parent:i,style:3,playerContainer:".clip_main"})}}}},{css:".clip_main .clip_main-content div.clip_info-subline--inline",is:"added",callback:function(e){for(var t,n=0;t=e.added[n];n++){if(!(t.dataset.sfSkip>0))t.dataset.sfSkip="1",C.hideMenu(),Object(b.a)(t,".clip_main-content")&&C.appendBtn({id:"",parent:t,style:5,playerContainer:".clip_main"})}}},{css:".contextclip-img img",is:"added",callback:function(e){for(var t,n=0;t=e.added[n];n++)t.dataset.sfSkip>0||(t.dataset.sfSkip="1",h.a.one(t,"mouseenter",C.mutationMode.wrapOnImgOver2))}},{css:".client_wrapper .clip header h1",is:"added",callback:function(e){for(var t,n=0;t=e.added[n];n++)t.dataset.sfSkip>0||(t.dataset.sfSkip="1",C.appendBtn({id:"",parent:t,style:4,playerContainer:".clip"}))}},{css:".clip_page .clip .meta_section_subinfo",is:"added",callback:function(e){for(var t,n=0;t=e.added[n];n++)C.appendBtn({id:"",parent:t,style:6,playerContainer:".clip_wrapper"})}},{css:"#main .clip_info-subline--inline",is:"added",callback:function(e){for(var t,n=0;t=e.added[n];n++)C.appendBtn({id:"",parent:t,style:7,playerContainer:"#main"})}}]})}}}}))}});
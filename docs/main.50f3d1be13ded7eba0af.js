(()=>{"use strict";var n={662:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),a=t.n(r),i=t(645),o=t.n(i)()(a());o.push([n.id,"/* Title */\r\n\r\nh1.page-title {\r\n    text-align: center;\r\n}\r\n\r\n/* Logo */\r\n\r\nimg.logo {\r\n    display: block;\r\n    max-width: 250px;\r\n    min-width: 125px;\r\n    width: calc(20vw);\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n/* About & Contact sections */\r\n\r\ndiv.about {\r\n    padding: 16px;\r\n    display: block;\r\n    overflow: hidden;\r\n}\r\n\r\np.about {\r\n    font-size: larger;\r\n}\r\n\r\n@media screen and (max-width: 1200px) {p.about {font-size: large;}}\r\n@media screen and (max-width: 992px) {p.about {font-size: inherit;}}\r\n\r\nimg.profile-pic {\r\n    float: right;\r\n    margin-left: 15px;\r\n    min-width: 150px;\r\n    width: 28%;\r\n}\r\n\r\n@media screen and (max-width: 380px) {\r\n    img.profile-pic {\r\n        float: none;\r\n        margin-left: 0%;\r\n        margin-bottom: 15px;\r\n        width: 100%;\r\n    }\r\n}\r\n\r\nsection.viewport > div {\r\n    margin-top: 50px;\r\n    margin-bottom: 50px;\r\n}\r\n\r\n/* Social Media Card */\r\n\r\nimg.img-thumb {\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n}\r\n\r\ndiv.card + div.card {\r\n    margin-top: 20px;\r\n}\r\n\r\n/* Social Network Circle */\r\n\r\nimg.circle-sn {\r\n    width: 35px;\r\n    height: 35px;\r\n}\r\n\r\nimg.circle-sn-m {\r\n    width: 45px;\r\n    height: 45px;\r\n}\r\n\r\na.circle-link + a.circle-link {\r\n    margin-left: 10px;\r\n}\r\n\r\n/* Viewport section */\r\n\r\nsection.viewport:first-child {\r\n    height: 100vh;\r\n}\r\n\r\nsection.viewport {\r\n    width: calc(100vw - (100vw - 100%));\r\n    height: auto;\r\n    align-items: center;\r\n    justify-content: center;\r\n    display: flex;\r\n    position: relative;\r\n    transform-style: preserve-3d;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n    section.viewport {\r\n        height: 100vh;\r\n    }\r\n}\r\n\r\nsection.vp-head::after {\r\n    background: rgb(33,44,52);\r\n    background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 1) 100%),\r\n        url('https://i.imgur.com/VOvptOF.png');\r\n    background-size: cover;\r\n    background-position: center;\r\n}\r\n\r\nsection.vp-about {\r\n    background: rgb(18, 25, 29);\r\n    z-index: 1;\r\n}\r\n\r\nsection.vp-contents::after {\r\n    background: rgb(33,44,52);\r\n    background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 1) 100%),\r\n        url('https://i.imgur.com/n8TJn9z.png');\r\n    background-size: cover;\r\n    background-position: center;\r\n}\r\n\r\nsection.vp-contact {\r\n    background: rgb(21, 24, 29);\r\n    z-index: 1;\r\n}\r\n\r\n/* Extra */\r\n\r\nmain {\r\n    height: 100vh;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n    perspective: 3px;\r\n}\r\n\r\n.parallax::after {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    transform: translateZ(-1px) scale(1.4);\r\n    background-size: 100%;\r\n    z-index: -1;\r\n  }\r\n",""]);const c=o},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,i){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(o[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&o[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},o=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],d=i[l]||0,p="".concat(l," ").concat(d);i[l]=d+1;var m=t(p),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)e[m].references++,e[m].updater(u);else{var g=a(u,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:g,references:1})}o.push(p)}return o}function a(n,e){var t=e.domAPI(e);t.update(n);return function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var i=r(n=n||[],a=a||{});return function(n){n=n||[];for(var o=0;o<i.length;o++){var c=t(i[o]);e[c].references--}for(var s=r(n,a),l=0;l<i.length;l++){var d=t(i[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var a=e[r];if(void 0!==a)return a.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),a=t.n(r),i=t(569),o=t.n(i),c=t(565),s=t.n(c),l=t(216),d=t.n(l),p=t(589),m=t.n(p),u=t(662),g={};g.styleTagTransform=m(),g.setAttributes=s(),g.insert=o().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=d();e()(u.Z,g);u.Z&&u.Z.locals&&u.Z.locals;const h=JSON.parse('{"a":[{"title":"Gaming content","desc":"Information about my gaming content.... not done yet","image":{"url":"https://i.imgur.com/n8TJn9z.png","title":"Ralex playing Minecraft","alt":"A screenshot of Ralex in a Minecraft World"},"social":["youtube","twitch","facebook","twitter"]},{"title":"Personal","desc":"Information about myself, including videogames I play...","image":{"url":"https://i.imgur.com/dzpdAk3.png","title":"Ralex coding, drawing, and editing stuff","alt":"Three screenshots. 1: coding something, 2: drawing an avatar, 3: editing and image"},"social":["twitter","bandcamp","steam"]},{"title":"Coding projects","desc":"As mentioned above, my code projects are important to me, even more than my health (somethimes)","image":{"url":"https://i.imgur.com/W6A1urY.png","title":"Completed-Games Registers project","alt":"An screenshot showing my program called \'Completed-Games Registers\'"},"social":["github"]}]}'),f=t.p+"5952e1d2a1920ddea2a8210a24980f56.png";const v=JSON.parse('{"a":{"name":"Alejandro Batres","bio":"I\'m a \'random\' software developer, I\'m studying Engineering in Computer Science and I\'ve done many projects during my career.\\n\\nI\'m still learning and improving my dev skills in programming languages like C, C++, Java, Python, and recently JavaScript.\\n\\nBy the way, if you are reading this right now, let me tell you that this page is still in construction, lol.","image":{"url":"./assets/img/about/default.png","title":"Ralex\' seflie","alt":"A frontal photo of Alejandro Batres"},"contact":"<i>Wanna</i> contact me?","phone":"","email":"alejandro.batres37@gmail.com","social":["linkedin","twitter"]}}');v.a;const b=JSON.parse('{"a":{"facebook":{"name":"Facebook","title":"MrAlexbross\' Facebook page","image":"./assets/img/sn/facebook-center.png","url":"https://www.facebook.com/MrAlexbross/"},"twitter":{"name":"Twitter","title":"ComplexRalex\' Twitter profile","image":"./assets/img/sn/twitter.png","url":"https://twitter.com/ComplexRalex"},"youtube":{"name":"YouTube","title":"MrAlexbross\' YouTube channel","image":"./assets/img/sn/youtube.png","url":"https://www.youtube.com/user/MrAlexbross"},"twitch":{"name":"Twitch","title":"MrAlexbross\' Twitch channel","image":"./assets/img/sn/twitch.png","url":"https://www.twitch.tv/MrAlexbross/"},"bandcamp":{"name":"Bandcamp","title":"MrAlexbross\' Bandcamp profile","image":"./assets/img/sn/bandcamp.png","url":"https://bandcamp.com/mralexbross"},"steam":{"name":"Steam","title":"MrAlexbross\' Steam profile","image":"./assets/img/sn/steam.png","url":"https://steamcommunity.com/id/mralexbross/"},"github":{"name":"Github","title":"ComplexRalex\' Github profile","image":"./assets/img/sn/github.png","url":"https://github.com/ComplexRalex"},"linkedin":{"name":"LinkedIn","title":"Alejandro\'s LinkedIn profile","image":"./assets/img/sn/linkedin.png","url":"https://www.linkedin.com/in/alejandro-b-5516a2128/"}}}'),w=t.p+"f0bdb92b8096534d02a1e48fdac583ed.png";var x=b.a,y="$dummy",k={name:"Something",title:"Something website",image:w,url:"#"},C=function(n,e,t){var r="";return n.forEach((function(n){var a=n===y?k:x[n];r+='<a\n        class="circle-link"\n        href="'.concat(a.url,'"\n        target="_blank"\n      ><img\n        src="').concat(a.image,'"\n        title="').concat(a.title,'"\n        alt="').concat(a.name,' logo"\n        class="').concat(null!=e?e:"circle-sn"," ").concat(null!=t?t:"rounded-circle",'"\n      ></a>')})),r};const A=t.p+"d0b3343cdb5f2dcb8d539b2baa26a72a.png";var T=v.a,E=v.a,M=function(n){var e=document.createElement("section");return e.classList.add("viewport"),e.appendChild(n),e},S=document.body.querySelector("main"),j=function(n){var e=document.createElement("div");return e.classList.add("container","align-middle"),n.forEach((function(n){return e.appendChild(n)})),e};!function(){var n,e=((n=document.createElement("img")).classList.add("logo"),n.alt="Avatar de Ralex",n.title="Ralex",n.src=f,n),t=function(){var n=document.createElement("p");return n.innerHTML='\n    <h1 class="page-title mt-3">\n      '.concat(v.a.name,"\n    </h1>"),n}(),r=M(j([e,t]));r.classList.add("vp-head","parallax"),S.appendChild(r);var a,i=((a=document.createElement("div")).innerHTML='\n      <div class="text-white bg-dark about">\n          <img src="'.concat(T.image.url,'" class="rounded profile-pic shadow-lg" alt="...">\n          <p class="about">').concat(T.bio.replaceAll("\n","<br>"),"</p>\n      </div>\n      "),a.firstElementChild),o=M(j([i]));o.classList.add("vp-about"),S.appendChild(o);var c=h.a,s=M(j(c.map((function(n){return function(n){var e=n.title,t=void 0===e?"Card title":e,r=n.desc,a=void 0===r?"Card description":r,i=n.image,o=void 0===i?{url:A,title:"None",alt:"None"}:i,c=n.social,s=void 0===c?[y]:c,l=document.createElement("div");return l.innerHTML='\n    <div class="card text-white bg-dark">\n        <div class="row g-0">\n            <div class="col-md-4">\n                <img\n                    src="'.concat(o.url,'"\n                    class="img-fluid rounded-start img-thumb"\n                    title="').concat(o.title,'"\n                    alt="').concat(o.alt,'"\n                >\n            </div>\n            <div class="col-md-8">\n                <div class="card-body">\n                    <h5 class="card-title">').concat(t,'</h5>\n                    <p class="card-text">').concat(a,'</p>\n                    <div class="card-text">\n                        ').concat(C(s),"\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    "),l.firstElementChild}(n)}))));s.classList.add("vp-contents","parallax"),S.appendChild(s);var l=function(){var n=document.createElement("div");return n.innerHTML='\n      <div class="text-white bg-dark about text-center">\n          <p class="fs-3">'.concat(E.contact.replaceAll("\n","<br>"),'</p>\n          <p class="fs-5 text-break">Email: <a href="mailto:').concat(E.email,'">').concat(E.email,'</a></p>\n          <div class="mt-4">\n            ').concat(C(E.social,"circle-sn-m","rounded-3"),"\n          </div>\n      </div>\n      "),n.firstElementChild}(),d=M(j([l]));d.classList.add("vp-contact"),S.appendChild(d)}()})()})();
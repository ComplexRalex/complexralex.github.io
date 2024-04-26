(()=>{"use strict";var e={662:(e,n,t)=>{t.d(n,{Z:()=>g});var a=t(81),r=t.n(a),o=t(645),i=t.n(o),s=t(667),c=t.n(s),l=new URL(t(254),t.b),d=new URL(t(604),t.b),p=i()(r()),m=c()(l),u=c()(d);p.push([e.id,"/* Navbar */\r\n\r\nheader nav{\r\n    background-color: rgb(44, 45, 48);\r\n}\r\n\r\nnav .avatar {\r\n    filter: contrast(0%) brightness(2);\r\n    width: 30px;\r\n    margin-bottom: 2%;\r\n}\r\n\r\nnav .github {\r\n    width: 40px;\r\n}\r\n\r\n/* Title */\r\n\r\nh1.page-title {\r\n    text-align: center;\r\n}\r\n\r\n/* Logo */\r\n\r\nimg.logo {\r\n    display: block;\r\n    max-width: 250px;\r\n    min-width: 125px;\r\n    width: calc(20vw);\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n/* Sections */\r\n\r\ndiv.div-content {\r\n    padding: 16px;\r\n    display: block;\r\n    overflow: hidden;\r\n    border-radius: 15px;\r\n}\r\n\r\np.div-content {\r\n    font-size: larger;\r\n}\r\n\r\n@media screen and (max-width: 1200px) {p.div-content {font-size: large;}}\r\n@media screen and (max-width: 992px) {p.div-content {font-size: inherit;}}\r\n\r\nimg.profile-pic {\r\n    float: right;\r\n    margin-left: 15px;\r\n    min-width: 150px;\r\n    width: 28%;\r\n}\r\n\r\n@media screen and (max-width: 380px) {\r\n    img.profile-pic {\r\n        float: none;\r\n        margin-left: 0%;\r\n        margin-bottom: 15px;\r\n        width: 100%;\r\n    }\r\n}\r\n\r\n.section-title {\r\n    text-align: center;\r\n    margin-bottom: 30px;\r\n}\r\n\r\nsection.viewport > div {\r\n    margin-top: 50px;\r\n    margin-bottom: 50px;\r\n}\r\n\r\n/* Social Media Card */\r\n\r\nimg.img-thumb {\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n}\r\n\r\ndiv.card + div.card {\r\n    margin-top: 30px;\r\n}\r\n\r\n/* Social Network Circle */\r\n\r\nimg.circle-sn {\r\n    width: 35px;\r\n    height: 35px;\r\n}\r\n\r\nimg.circle-sn-m {\r\n    width: 45px;\r\n    height: 45px;\r\n}\r\n\r\na.circle-link + a.circle-link {\r\n    margin-left: 10px;\r\n}\r\n\r\n/* Viewport section */\r\n\r\n.viewport {\r\n    width: calc(100vw - (100vw - 100%));\r\n    height: auto;\r\n    min-height: 100%;\r\n    align-items: center;\r\n    justify-content: center;\r\n    display: flex;\r\n}\r\n\r\n/* All sections */\r\n\r\nsection.vp-root {\r\n    background: black;\r\n    background: linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.8) 100%),\r\n        url("+m+");\r\n    background-size: cover;\r\n    background-position: 50% 50%;\r\n}\r\n\r\nsection.vp-about {\r\n    background: rgb(18, 25, 29);\r\n}\r\n\r\nsection.vp-contents {\r\n    background: rgb(33,44,52);\r\n    background: linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.8) 100%),\r\n        url("+u+");\r\n    background-size: cover;\r\n    background-position: 50% 50%;\r\n}\r\n\r\nsection.vp-contact {\r\n    background: rgb(21, 24, 29);\r\n    min-height: calc(100% - 180px);\r\n}\r\n\r\n/* Footer */\r\n\r\nfooter.vp-footer {\r\n    background: rgb(23, 21, 22);\r\n    min-height: 180px;\r\n    position: absolute;\r\n\r\n}\r\n\r\nimg.footer-img {\r\n    width: 100px;\r\n}\r\n\r\n/* Extra */\r\n\r\nbody {\r\n    height: 100vh;\r\n}\r\n\r\n.box-shadow {\r\n    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.text-shadow {\r\n    text-shadow: 0px 5px 10px rgba(0, 0, 0, 0.8);\r\n}\r\n\r\n.drop-shadow {\r\n    filter: drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.5));\r\n}",""]);const g=p},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);a&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),n.push(d))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var o={},i=[],s=0;s<e.length;s++){var c=e[s],l=a.base?c[0]+a.base:c[0],d=o[l]||0,p="".concat(l," ").concat(d);o[l]=d+1;var m=t(p),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)n[m].references++,n[m].updater(u);else{var g=r(u,a);a.byIndex=s,n.splice(s,0,{identifier:p,updater:g,references:1})}i.push(p)}return i}function r(e,n){var t=n.domAPI(n);t.update(e);return function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var o=a(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=t(o[i]);n[s].references--}for(var c=a(e,r),l=0;l<o.length;l++){var d=t(o[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}o=c}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,r&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},604:(e,n,t)=>{e.exports=t.p+"f79031a7dee41b41d60c.jpg"},254:(e,n,t)=>{e.exports=t.p+"83ed553344d5a5602466.jpg"}},n={};function t(a){var r=n[a];if(void 0!==r)return r.exports;var o=n[a]={id:a,exports:{}};return e[a](o,o.exports,t),o.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),a=t(795),r=t.n(a),o=t(569),i=t.n(o),s=t(565),c=t.n(s),l=t(216),d=t.n(l),p=t(589),m=t.n(p),u=t(662),g={};g.styleTagTransform=m(),g.setAttributes=c(),g.insert=i().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=d();n()(u.Z,g);u.Z&&u.Z.locals&&u.Z.locals;const b=JSON.parse('{"a":{"title-navbar":"Alejandro Batres","sections":{"root":{"name":"Root","id":"root","title":"This is the root"},"about":{"name":"About","id":"about","title":"<span style=\'font-family: monospace;\'>$> whoami</span>"},"contents":{"name":"Contents","id":"contents","title":"What do I <i>do</i>?"},"contact":{"name":"Contact","id":"contact","title":"Are you looking for me?"}},"title-footer":"Alejandro Batres. 2024.","avatar-navbar":{"url":"./assets/img/logo.png","title":"It\'s me, Ralex!","alt":"My avatar (called \'Ralex\')"},"img-navbar-url":"https://github.com/ComplexRalex","img-navbar":{"url":"./assets/img/sn/github.png","title":"Check out my Github profile!","alt":"Github icon"},"img-footer-url":"https://github.com/ComplexRalex/ComplexRalex.github.io","img-footer":{"url":"./assets/img/sn/github.png","title":"Check out my website\'s repository on Github!","alt":"Github icon"}}}'),h=t.p+"5952e1d2a1920ddea2a8.png";var v=function(e){var n=document.createElement("div");return n.classList.add("container","align-middle"),e.forEach((function(e){return n.appendChild(e)})),n};const f=JSON.parse('{"a":{"name":"Alejandro Batres","bio":"<p>Some people call me \'<strong>Ralex</strong>\' or \'<b>Batres</b>\'. I\'m 24 years old and graduated in Computer Science Engineering from BUAP. I\'m a <b>software developer</b> who enjoys working on software projects and likes creating videogame-based content on the internet.</p><p>I have experience as a developer in programming languages such as C, C++, Java, Python, and currently JavaScript, mostly aiming at desktop applications. I like to create web applications and I want to dive into videogame development.</p><p>My hobbies wander around <b>videogames</b> (totally unexpected). That is, I like to play videogames, consume and create videogame content, and even listen to videogame music.</p><p>I\'ve also done internet content with friends since I like to create multimedia content such as videos.</p>","email":"alejandro.batres37@gmail.com","phone":"","social":["linkedin","twitter"],"image":{"url":"./assets/img/about/me.jpg","title":"Ralex\' seflie","alt":"A frontal photo of Alejandro Batres"}}}');var x=b.a.sections.about,w=f.a;const y=JSON.parse('{"a":{"mralexbross-web":{"name":"MrAlexbross Web","title":"MrAlexbross\' Official Website","image":"./assets/img/sn/mralexbross-web.png","url":"https://mralexbross-web.blogspot.com/"},"facebook":{"name":"Facebook","title":"MrAlexbross\' Facebook page","image":"./assets/img/sn/facebook-center.png","url":"https://www.facebook.com/MrAlexbross/"},"twitter":{"name":"Twitter","title":"ComplexRalex\' Twitter profile","image":"./assets/img/sn/twitter.png","url":"https://twitter.com/ComplexRalex"},"youtube":{"name":"YouTube","title":"MrAlexbross\' YouTube channel","image":"./assets/img/sn/youtube.png","url":"https://www.youtube.com/user/MrAlexbross"},"twitch":{"name":"Twitch","title":"MrAlexbross\' Twitch channel","image":"./assets/img/sn/twitch.png","url":"https://www.twitch.tv/MrAlexbross/"},"bandcamp":{"name":"Bandcamp","title":"MrAlexbross\' Bandcamp profile","image":"./assets/img/sn/bandcamp.png","url":"https://bandcamp.com/mralexbross"},"steam":{"name":"Steam","title":"MrAlexbross\' Steam profile","image":"./assets/img/sn/steam.png","url":"https://steamcommunity.com/id/mralexbross/"},"github":{"name":"Github","title":"ComplexRalex\' Github profile","image":"./assets/img/sn/github.png","url":"https://github.com/ComplexRalex"},"linkedin":{"name":"LinkedIn","title":"Alejandro\'s LinkedIn profile","image":"./assets/img/sn/linkedin.png","url":"https://www.linkedin.com/in/alejandro-b-5516a2128/"}}}'),k=t.p+"f0bdb92b8096534d02a1.png";var C=y.a,A="$dummy",T={name:"Something",title:"Something website",image:k,url:"#"},I=function(e,n,t){var a="";return e.forEach((function(e){var r=e===A?T:C[e];a+='<a\n        class="circle-link"\n        href="'.concat(r.url,'"\n        target="_blank"\n      ><img\n        src="').concat(r.image,'"\n        title="').concat(r.title,'"\n        alt="').concat(r.name,' logo"\n        class="').concat(null!=n?n:"circle-sn"," ").concat(null!=t?t:"rounded-circle",'"\n      ></a>')})),a},S=b.a.sections.contact,M=f.a,E=function(e){var n=document.createElement("section");return n.classList.add("viewport"),n.appendChild(e),n};const L=JSON.parse('{"a":[{"title":"Coding projects","desc":"As part of my growth as a programmer, I also have a <b>Github account</b> where I upload <b>programming projects</b> that I\'ve done on my own and with friends. I maintain important projects like <a href=\'https://github.com/ComplexRalex/Completed-Games-Registers\' target=\'_blank\'><b>Completed-Games Registers (Java)</b></a> and <a href=\'https://github.com/ComplexRalex/BumperKartZ-VS\' target=\'_blank\'><b>Bumper KartZ VS (C++ OpenGL)</b></a>.","image":{"url":"./assets/img/card/coding.png","title":"Screenshot of my Github account showing some repos","alt":"An Screenshot of my Github account showing some of my repositories"},"social":["github"]},{"title":"Gaming content","desc":"I have a YouTube channel called <strong>MrAlexbross</strong> where I upload videos about <b>videogames</b>, especially gameplays. Also, I have a Twitch channel where I sometimes do streams. I publish updates about new videos on my Facebook and Twitter pages. Besides, I\'ve done videogame content like <b>Minecraft</b> maps and <b>Geometry Dash</b>, <b>64.0</b>, and <b>Super Mario Maker 2</b> levels.","image":{"url":"./assets/img/card/gaming.png","title":"MrAlexbross Youtube channel\'s cover","alt":"A cover image for my YouTube channel \'MrAlexbross\'"},"social":["mralexbross-web","youtube","twitch","facebook","twitter"]},{"title":"Personal","desc":"I usually share on Twitter other types of information that are not necessarily related to my YouTube channel, such as my <b>programming projects</b> or something <b>about me</b>. I also have a Bandcamp account where I show off the <b>music</b> I\'m listening to, and I also have a Steam account where you can see the latest stuff I\'ve been <b>playing</b>.","image":{"url":"./assets/img/card/personal.png","title":"Just some random drawings","alt":"A photo of my notebook with some random drawings of my character called \'Ralex\' on it"},"social":["twitter","bandcamp","steam"]}]}'),j=t.p+"d0b3343cdb5f2dcb8d53.png";var R,P,N,B,G=b.a.sections.contents,H=(f.a,L.a),F=function(){var e=document.createElement("div");return e.innerHTML='<p class="fs-2 section-title text-shadow">'.concat(G.title.replaceAll("\n","<br>"),"</p>"),H.forEach((function(n){return e.appendChild((a=(t=n).title,r=void 0===a?"Card title":a,o=t.desc,i=void 0===o?"Card description":o,s=t.image,c=void 0===s?{url:j,title:"None",alt:"None"}:s,l=t.social,d=void 0===l?[A]:l,(p=document.createElement("div")).innerHTML='\n    <div class="card text-white bg-dark box-shadow">\n        <div class="row g-0">\n            <div class="col-md-4">\n                <img\n                    src="'.concat(c.url,'"\n                    class="img-fluid rounded-start img-thumb"\n                    title="').concat(c.title,'"\n                    alt="').concat(c.alt,'"\n                >\n            </div>\n            <div class="col-md-8">\n                <div class="card-body">\n                    <h5 class="card-title">').concat(r,'</h5>\n                    <p class="card-text">').concat(i,'</p>\n                    <div class="card-text">\n                        ').concat(I(d),"\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    "),p.firstElementChild));var t,a,r,o,i,s,c,l,d,p})),e},O=b.a,J=O["img-footer"],_=b.a,Y=_["avatar-navbar"],Z=_["img-navbar"],U=function(){var e="",n=_.sections;for(var t in n)e+='<a class="nav-link" href="#'.concat(n[t].id,'">').concat(n[t].name,"</a>");return e},$=document.body,z=b.a.sections,q=function(){var e,n=document.createElement("header"),t=((e=document.createElement("div")).innerHTML='\n    <nav class="navbar navbar-dark navbar-expand-sm fixed-top box-shadow">\n      <div class="container">\n        <a class="navbar-brand" href="#'.concat(_.sections.root.id,'">\n          <img class="avatar" src="').concat(Y.url,'" title="').concat(Y.title,'" alt="').concat(Y.alt,'" />\n          ').concat(_["title-navbar"],'\n        </a>\n        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#someNavbar" aria-controls="someNavbar" aria-expanded="false" aria-label="Toggle navigation">\n          <span class="navbar-toggler-icon"></span>\n        </button>\n        <div class="collapse navbar-collapse" id="someNavbar">\n          <div class="navbar-nav me-auto">\n            ').concat(U(),'\n          </div>\n          <a href="').concat(_["img-navbar-url"],'"><img class="github rounded" src="').concat(Z.url,'" title="').concat(Z.title,'" alt="').concat(Z.alt,'" /></a>\n        </div>\n      </div>\n    </nav>\n    '),e.firstElementChild);n.appendChild(t),$.appendChild(n);var a=function(){var e=document.createElement("img");return e.classList.add("logo","drop-shadow"),e.alt="Avatar de Ralex",e.title="Ralex",e.src=h,e}(),r=function(){var e=document.createElement("p");return e.innerHTML='\n    <h1 class="page-title mt-3 text-shadow">\n      '.concat(f.a.name,"\n    </h1>"),e}(),o=E(v([a,r]));o.id=z.root.id,o.classList.add("vp-root"),$.appendChild(o);var i,s=((i=document.createElement("div")).innerHTML='\n      <p class="fs-2 section-title text-shadow">'.concat(x.title.replaceAll("\n","<br>"),'</p>\n      <div class="text-white bg-dark div-content box-shadow">\n          <img src="').concat(w.image.url,'" class="rounded profile-pic" alt="...">\n          ').concat(w.bio.replaceAll("\n","<br>").replaceAll("<p>",'<p class="div-content">'),"\n      </div>\n      "),i),c=E(v([s]));c.id=z.about.id,c.classList.add("vp-about"),$.appendChild(c);var l=F(),d=E(v([l]));d.id=z.contents.id,d.classList.add("vp-contents"),$.appendChild(d);var p=function(){var e=document.createElement("div");return e.innerHTML='\n      <p class="fs-2 section-title text-shadow">'.concat(S.title.replaceAll("\n","<br>"),'</p>\n      <div class="text-white bg-dark div-content text-center box-shadow">\n          <p class="fs-5 text-break"><a href="mailto:').concat(M.email,'">').concat(M.email,'</a></p>\n          <div class="mt-4 mb-1">\n            ').concat(I(M.social,"circle-sn-m","rounded-3"),"\n          </div>\n      </div>\n      "),e}(),m=E(v([p]));m.id=z.contact.id,m.classList.add("vp-contact"),$.appendChild(m);var u=function(){var e=document.createElement("footer");e.classList.add("viewport","vp-footer");var n=v([]);return n.classList.add("text-center"),n.innerHTML='\n        <p class="m-0">'.concat(O["title-footer"],'</p>\n        <a\n          href="').concat(O["img-footer-url"],'"\n          target="_blank"\n        ><img\n          class="footer-img"\n          src="').concat(J.url,'"\n          title="').concat(J.title,'"\n          alt="').concat(J.alt,'" \n        /></a>\n    '),e.appendChild(n),e}();$.appendChild(u)};q(),window.parallaxTools=(R=document.querySelector(".vp-root"),P=document.querySelector(".vp-about"),N=document.querySelector(".vp-contents"),B=function(){var e,n=R.clientHeight,t=P.clientHeight,a=N.clientHeight,r=window.scrollY,o=n;r<=o&&(R.style.backgroundPosition="50% ".concat(.25*r,"px")),e=(o+=t)-t,o+=a,r>e&&r<=o&&(N.style.backgroundPosition="50% ".concat(.25*(r-o+a),"px"))},{enableScrollParallax:function(){window.addEventListener("scroll",B),console.warn("Parallax scrolling turned %con","color: green")},disableScrollParallax:function(){window.removeEventListener("scroll",B),R.style.backgroundPosition="50% 50%",N.style.backgroundPosition="50% 50%",console.warn("Parallax scrolling turned %coff","color: red")}}),console.log("\n\n    Hey there! I'm %cRalex%c! I hope you enjoy my website!\n\n    This is kinda an easter egg so... %ccongrats!%c\n\n    At the moment, the parallax effect is disabled due to\n    performance reasons... however, you can turn it on with\n\n        %cparallaxTools.%cenableScrollParallax()%c\n\n    If you want to turn it off again, you can run\n\n        %cparallaxTools.%cdisableScrollParallax()%c\n\n    Be careful though, because it takes some math to do it\n    (every time you scroll)!\n\n    %cHave fun!%c :D\n\n    ","font-weight: bold; color: #FF9393","","font-style: italic","","font-style: italic;","font-style: italic; color: #F8E67C","","font-style: italic;","font-style: italic; color: #F8E67C","","font-style: italic;","")})()})();
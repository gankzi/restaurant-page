(()=>{"use strict";var n,e,t,r,o,a,i,c,s,l,u,p,d,f,m={28:(n,e,t)=>{t.d(e,{Z:()=>h});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),s=t.n(c),l=new URL(t(979),t.b),u=new URL(t(328),t.b),p=new URL(t(829),t.b),d=i()(o()),f=s()(l),m=s()(u),v=s()(p);d.push([n.id,"* {\n    margin: 0;\n    padding: 0;\n}\n\n@font-face {\n    font-family: 'Padaloma';\n    src: url("+f+"),\n    url("+m+");\n    font-weight: 100;\n    font-style: normal;\n  }\n\nbody {\n    background-image: url("+v+");\n    background-size: 35%;\n    overflow: scroll;\n    font-family: 'Padaloma';\n}\n\nheader {\n    background-color: black;\n    color: white;\n}\n\n#nav {\n    display: flex;\n    align-items: center;\n    padding: 20px;\n}\n\n#brand {\n    flex: 2;\n    font-size: 2.5rem;\n    padding-left: 8%;\n}\n\n#nav-buttons {\n    flex: 1;\n    display: flex;\n    justify-content: space-evenly;\n}\n\n#nav-buttons li {\n    list-style: none;\n}\n\n#nav-buttons ul {\n    font-size: 1.5rem;\n}\n\n#content {\n    text-align: center;\n    padding-top: 8%;\n}\n\n#main-content {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    align-items: center;\n}\n\n#intro {\n    font-size: 2.8rem;\n    color: white;\n    font-style: italic;\n}\n\n#main-content p {\n    font-size: 1.1rem;\n}\n\n.main-menu {\n    width: 120px;\n    height: 70px;\n    border: none;\n    background-color: black;\n    color: white;\n    border-radius: 15px;\n    font-size: 1.5rem;\n}\n\n",""]);const h=d},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var u=[].concat(n[l]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],u=a[l]||0,p="".concat(l," ").concat(u);a[l]=u+1;var d=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)e[d].references++,e[d].updater(f);else{var m=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),l=0;l<a.length;l++){var u=t(a[l]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},979:(n,e,t)=>{n.exports=t.p+"ada2b3a2c590dcdc0f99.ttf"},328:(n,e,t)=>{n.exports=t.p+"bfec26b025641ac06cf1.ttf"},829:(n,e,t)=>{n.exports=t.p+"2b3e7f47c0d3a5e2b9d3.jpg"}},v={};function h(n){var e=v[n];if(void 0!==e)return e.exports;var t=v[n]={id:n,exports:{}};return m[n](t,t.exports,h),t.exports}h.m=m,h.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return h.d(e,{a:e}),e},h.d=(n,e)=>{for(var t in e)h.o(e,t)&&!h.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},h.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),h.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;h.g.importScripts&&(n=h.g.location+"");var e=h.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),h.p=n})(),h.b=document.baseURI||self.location.href,h.nc=void 0,n=h(379),e=h.n(n),t=h(795),r=h.n(t),o=h(569),a=h.n(o),i=h(565),c=h.n(i),s=h(216),l=h.n(s),u=h(589),p=h.n(u),d=h(28),(f={}).styleTagTransform=p(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),e()(d.Z,f),d.Z&&d.Z.locals&&d.Z.locals,console.log("Hello there")})();
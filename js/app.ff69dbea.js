(function(e){function t(t){for(var c,o,a=t[0],r=t[1],i=t[2],b=0,d=[];b<a.length;b++)o=a[b],Object.prototype.hasOwnProperty.call(l,o)&&l[o]&&d.push(l[o][0]),l[o]=0;for(c in r)Object.prototype.hasOwnProperty.call(r,c)&&(e[c]=r[c]);s&&s(t);while(d.length)d.shift()();return u.push.apply(u,i||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],c=!0,a=1;a<n.length;a++){var r=n[a];0!==l[r]&&(c=!1)}c&&(u.splice(t--,1),e=o(o.s=n[0]))}return e}var c={},l={app:0},u=[];function o(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=c,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(n,c,function(t){return e[t]}.bind(null,c));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/bptool/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],r=a.push.bind(a);a.push=t,a=a.slice();for(var i=0;i<a.length;i++)t(a[i]);var s=r;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},4576:function(e,t,n){},"71e2":function(e,t,n){},"737f":function(e,t,n){},"8cc6":function(e,t,n){"use strict";n("4576")},a955:function(e,t,n){"use strict";n("737f")},c2e4:function(e,t,n){"use strict";n("d146")},cd49:function(e,t,n){"use strict";n.r(t);var c=n("7a23");function l(e,t,n,l,u,o){const a=Object(c["k"])("Nav"),r=Object(c["k"])("MainPage");return Object(c["f"])(),Object(c["c"])("div",null,[Object(c["d"])(a),Object(c["d"])(r)])}const u=Object(c["n"])("data-v-cf87695a"),o=u((e,t,n,l,u,o)=>(Object(c["f"])(),Object(c["c"])("h1",null,"BP Tools")));var a=Object(c["e"])({name:"Nav"});n("a955");a.render=o,a.__scopeId="data-v-cf87695a";var r=a;const i=Object(c["n"])("data-v-11224149");Object(c["h"])("data-v-11224149");const s={id:"main"},b={class:"card"},d={class:"result"};Object(c["g"])();const p=i((e,t,n,l,u,o)=>{const a=Object(c["k"])("InputText");return Object(c["f"])(),Object(c["c"])("main",s,[Object(c["d"])("div",b,[(Object(c["f"])(!0),Object(c["c"])(c["a"],null,Object(c["j"])(e.bigBangSlot,t=>(Object(c["f"])(),Object(c["c"])(a,{key:t.series,label:t.series,modelValue:e.slotAmount[t.series],"onUpdate:modelValue":n=>e.slotAmount[t.series]=n},null,8,["label","modelValue","onUpdate:modelValue"]))),128)),Object(c["d"])(a,{label:"成本",modelValue:e.cost,"onUpdate:modelValue":t[1]||(t[1]=t=>e.cost=t)},null,8,["modelValue"]),Object(c["d"])("button",{class:"button",onClick:t[2]||(t[2]=(...t)=>e.calculateMineAmount&&e.calculateMineAmount(...t))},"Check"),Object(c["d"])("div",d,[Object(c["d"])("p",null,"總套數: "+Object(c["l"])(e.calculateResults.totalSlot),1),Object(c["d"])("p",null,"每小時產量: "+Object(c["l"])(e.calculateResults.hourMineAmount),1),Object(c["d"])("p",null,"日產量: "+Object(c["l"])(e.calculateResults.dailyMineAmount),1),Object(c["d"])("p",null,"總產量: "+Object(c["l"])(e.formatNumber(e.calculateResults.totalMineAmount)),1),Object(c["d"])("p",null,"淨利: "+Object(c["l"])(e.formatNumber(e.calculateResults.netMineAmount)),1),Object(c["d"])("p",null,"報酬率: "+Object(c["l"])(e.calculateResults.roi),1)])])])});var f=n("9ab4");const m=Object(c["n"])("data-v-542fe623");Object(c["h"])("data-v-542fe623");const O={class:"input"};Object(c["g"])();const j=m((e,t,n,l,u,o)=>(Object(c["f"])(),Object(c["c"])("div",O,[Object(c["d"])("p",null,Object(c["l"])(e.label),1),Object(c["d"])("input",{type:"text",value:e.modelValue,onInput:t[1]||(t[1]=t=>e.$emit("update:modelValue",t.target.value))},null,40,["value"])])));var v=Object(c["e"])({name:"InputText",props:{label:String,modelValue:String}});n("c2e4");v.render=j,v.__scopeId="data-v-542fe623";var A=v,y=[{series:"N",validity:30,mineAmount:528},{series:"R",validity:30,mineAmount:624},{series:"SR",validity:30,mineAmount:840},{series:"SSR",validity:60,mineAmount:1900}],g=Object(c["e"])({name:"MainPage",components:{InputText:A},setup:function(){var e=Object(c["i"])({slotAmount:{N:"",R:"",SR:"",SSR:""},cost:"",calculateResults:{totalSlot:0,hourMineAmount:0,dailyMineAmount:0,totalMineAmount:0,netMineAmount:0,roi:""}}),t=function(){console.log(),e.calculateResults.totalSlot=Object.values(e.slotAmount).reduce((function(e,t){return e+parseInt(t)}),0),e.calculateResults.totalMineAmount=n(),e.calculateResults.dailyMineAmount=l(),e.calculateResults.hourMineAmount=u(e.calculateResults.dailyMineAmount/24),e.calculateResults.netMineAmount=e.calculateResults.totalMineAmount-parseInt(e.cost),e.calculateResults.roi=100*u(e.calculateResults.netMineAmount/parseInt(e.cost))+"%"},n=function(){return y.reduce((function(t,n){return t+n.mineAmount*parseInt(e.slotAmount[n.series])}),0)},l=function(){return u(y.reduce((function(t,n){return t+n.mineAmount*parseInt(e.slotAmount[n.series])/n.validity}),0))},u=function(e){return Math.round(1e5*e)/1e5},o=function(e){return(e||0).toString().replace(/(\d)(?=(?:\d{3})+$)/g,"$1,")};return Object(f["a"])(Object(f["a"])({},Object(c["m"])(e)),{bigBangSlot:y,calculateMineAmount:t,formatNumber:o})}});n("8cc6");g.render=p,g.__scopeId="data-v-11224149";var M=g,h=Object(c["e"])({name:"App",components:{Nav:r,MainPage:M}});n("fbc1");h.render=l;var R=h;Object(c["b"])(R).mount("#app")},d146:function(e,t,n){},fbc1:function(e,t,n){"use strict";n("71e2")}});
//# sourceMappingURL=app.ff69dbea.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a8318b2"],{"17f4":function(t,e,r){"use strict";r("255a")},2057:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"table"},[r("div",{staticClass:"table__title row"},[t._v(" "+t._s(t.title)+" ")]),t._m(0),r("div",{staticClass:"table__body body"},[r("div",{staticClass:"wrap"},[t.market.length||t.market.size?t._e():r("div",{staticClass:"table_loading"},[t._v(" Пожалуйста подождите обновления данных... ")]),t._l(t.market,(function(e,a){var i=e[0],c=e[1];return r("div",{key:a,staticClass:"body__row row"},[r("div",{staticClass:"col"},[t._v(t._s(c.substring(0,9)))]),r("div",{staticClass:"col"},[t._v(t._s(i.substring(0,8)))]),r("div",{staticClass:"col hidden-on-mobile"},[t._v(t._s((""+c*i).substring(0,12)))])])}))],2)])])},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"table__headers row"},[r("div",{staticClass:"col"},[t._v("Amount")]),r("div",{staticClass:"col"},[t._v("Price")]),r("div",{staticClass:"col hidden-on-mobile"},[t._v("Total")])])}],c=(r("4ec9"),r("d3b7"),r("3ca3"),r("ddb0"),{name:"HomeTable",props:{market:{type:[Map,Array]},title:{type:String,required:!0}}}),s=c,o=(r("8d48"),r("2877")),n=Object(o["a"])(s,a,i,!1,null,"4dabe2ea",null);e["a"]=n.exports},"255a":function(t,e,r){},"4de4":function(t,e,r){"use strict";var a=r("23e7"),i=r("b727").filter,c=r("1dde"),s=r("ae40"),o=c("filter"),n=s("filter");a({target:"Array",proto:!0,forced:!o||!n},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b");var a=r("ade3");function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},"6b57":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"order-book"},[r("div",{staticClass:"order-book__title"},[t._v(" currently currencies couple: "),r("span",[t._v(t._s(t.activeSymbolForPrint))])]),r("div",{staticClass:"order-book__tables"},[r("BookPriceTable",{attrs:{market:t.market.bids,title:"bids"}}),r("BookPriceTable",{attrs:{market:t.market.asks,title:"asks"}})],1)])},i=[],c=r("5530"),s=r("2f62"),o=r("2057"),n=r("1308"),l={name:"OrderBook",components:{BookPriceTable:o["a"]},computed:Object(c["a"])(Object(c["a"])({},Object(s["c"])({market:function(t){return t.market}})),Object(s["b"])({activeSymbolForPrint:"getActiveSymbolForPrint",activeSymbolForStore:"getActiveSymbolForStore"})),created:function(){this.$store.dispatch(n["b"],this.activeSymbolForStore),this.$store.dispatch(n["g"])}},b=l,u=(r("17f4"),r("2877")),d=Object(u["a"])(b,a,i,!1,null,"d495721a",null);e["default"]=d.exports},"8d48":function(t,e,r){"use strict";r("cb9e")},b64b:function(t,e,r){var a=r("23e7"),i=r("7b0b"),c=r("df75"),s=r("d039"),o=s((function(){c(1)}));a({target:"Object",stat:!0,forced:o},{keys:function(t){return c(i(t))}})},cb9e:function(t,e,r){},dbb4:function(t,e,r){var a=r("23e7"),i=r("83ab"),c=r("56ef"),s=r("fc6a"),o=r("06cf"),n=r("8418");a({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,r,a=s(t),i=o.f,l=c(a),b={},u=0;while(l.length>u)r=i(a,e=l[u++]),void 0!==r&&n(b,e,r);return b}})},e439:function(t,e,r){var a=r("23e7"),i=r("d039"),c=r("fc6a"),s=r("06cf").f,o=r("83ab"),n=i((function(){s(1)})),l=!o||n;a({target:"Object",stat:!0,forced:l,sham:!o},{getOwnPropertyDescriptor:function(t,e){return s(c(t),e)}})}}]);
//# sourceMappingURL=chunk-2a8318b2.51243817.js.map
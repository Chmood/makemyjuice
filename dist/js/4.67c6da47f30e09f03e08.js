webpackJsonp([4],{181:function(t,e,i){var s=i(135)(i(230),i(246),null,null);t.exports=s.exports},182:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},183:function(t,e,i){var s=i(192);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==s(t)?t.split(""):Object(t)}},184:function(t,e){var i=Math.ceil,s=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?s:i)(t)}},185:function(t,e,i){var s=i(183),n=i(182);t.exports=function(t){return s(n(t))}},186:function(t,e,i){"use strict";e.__esModule=!0;var s=i(187),n=function(t){return t&&t.__esModule?t:{default:t}}(s);e.default=n.default||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t}},187:function(t,e,i){t.exports={default:i(190),__esModule:!0}},188:function(t,e,i){var s=i(197),n=i(193);t.exports=Object.keys||function(t){return s(t,n)}},189:function(t,e,i){var s=i(182);t.exports=function(t){return Object(s(t))}},190:function(t,e,i){i(204),t.exports=i(6).Object.assign},191:function(t,e,i){var s=i(185),n=i(202),o=i(201);t.exports=function(t){return function(e,i,r){var a,c=s(e),l=n(c.length),u=o(r,l);if(t&&i!=i){for(;l>u;)if((a=c[u++])!=a)return!0}else for(;l>u;u++)if((t||u in c)&&c[u]===i)return t||u||0;return!t&&-1}}},192:function(t,e){var i={}.toString;t.exports=function(t){return i.call(t).slice(8,-1)}},193:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},194:function(t,e){var i={}.hasOwnProperty;t.exports=function(t,e){return i.call(t,e)}},195:function(t,e,i){"use strict";var s=i(188),n=i(196),o=i(198),r=i(189),a=i(183),c=Object.assign;t.exports=!c||i(7)(function(){var t={},e={},i=Symbol(),s="abcdefghijklmnopqrst";return t[i]=7,s.split("").forEach(function(t){e[t]=t}),7!=c({},t)[i]||Object.keys(c({},e)).join("")!=s})?function(t,e){for(var i=r(t),c=arguments.length,l=1,u=n.f,v=o.f;c>l;)for(var m,d=a(arguments[l++]),f=u?s(d).concat(u(d)):s(d),_=f.length,p=0;_>p;)v.call(d,m=f[p++])&&(i[m]=d[m]);return i}:c},196:function(t,e){e.f=Object.getOwnPropertySymbols},197:function(t,e,i){var s=i(194),n=i(185),o=i(191)(!1),r=i(199)("IE_PROTO");t.exports=function(t,e){var i,a=n(t),c=0,l=[];for(i in a)i!=r&&s(a,i)&&l.push(i);for(;e.length>c;)s(a,i=e[c++])&&(~o(l,i)||l.push(i));return l}},198:function(t,e){e.f={}.propertyIsEnumerable},199:function(t,e,i){var s=i(200)("keys"),n=i(203);t.exports=function(t){return s[t]||(s[t]=n(t))}},200:function(t,e,i){var s=i(8),n=s["__core-js_shared__"]||(s["__core-js_shared__"]={});t.exports=function(t){return n[t]||(n[t]={})}},201:function(t,e,i){var s=i(184),n=Math.max,o=Math.min;t.exports=function(t,e){return t=s(t),t<0?n(t+e,0):o(t,e)}},202:function(t,e,i){var s=i(184),n=Math.min;t.exports=function(t){return t>0?n(s(t),9007199254740991):0}},203:function(t,e){var i=0,s=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++i+s).toString(36))}},204:function(t,e,i){var s=i(137);s(s.S+s.F,"Object",{assign:i(195)})},230:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(231),n=i.n(s),o=i(186),r=i.n(o),a=i(136);e.default={components:{},data:function(){return{isCustomCurrency:!1,currencies:[{label:"dollar",value:"$"},{label:"euro",value:"€"},{label:"pound",value:"£"},{label:"other currency",value:""}]}},computed:r()({},i.i(a.a)(["language","currency","mode","favorite"]),{locale:{get:function(){return this.language},set:function(t){this.$i18n.locale=t,this.$store.commit("SET_LANGUAGE",t)}},_currency:{get:function(){return"$"===this.currency||"€"===this.currency||"£"===this.currency?this.isCustomCurrency=!1:this.isCustomCurrency=!0,this.currency},set:function(t){this.$store.commit("SET_CURRENCY",t),this.isCustomCurrency=""===t}},locales:function(){var t=[],e=this.$i18n._vm.messages;return n()(e).forEach(function(i){console.log(),t.push({label:e[i].LANG,value:i})}),t},modeNicotine:{get:function(){return this.mode.nicotine},set:function(t){this.$store.commit("SET_MODE",{mode:"nicotine",isActive:t})}},modeBase:{get:function(){return this.mode.base},set:function(t){this.$store.commit("SET_MODE",{mode:"base",isActive:t})}},modePrice:{get:function(){return this.mode.price},set:function(t){this.$store.commit("SET_MODE",{mode:"price",isActive:t})}},modeDrop:{get:function(){return this.mode.drop},set:function(t){this.$store.commit("SET_MODE",{mode:"drop",isActive:t})}},modeBeaker:{get:function(){return this.mode.beaker},set:function(t){this.$store.commit("SET_MODE",{mode:"beaker",isActive:t})}},modeFavorite:{get:function(){return this.mode.favorite},set:function(t){this.$store.commit("SET_MODE",{mode:"favorite",isActive:t})}},favoriteQuantity:{get:function(){return this.favorite.quantity},set:function(t){this.$store.commit("SET_FAVORITE",{favorite:"quantity",value:t})}},favoritePGVGRatio:{get:function(){return 100*this.favorite.PGVGRatio},set:function(t){this.$store.commit("SET_FAVORITE",{favorite:"PGVGRatio",value:t/100})}},favoriteNicotine:{get:function(){return this.favorite.nicotine},set:function(t){this.$store.commit("SET_FAVORITE",{favorite:"nicotine",value:t})}}}),methods:r()({},i.i(a.b)([]),i.i(a.c)([]))}},231:function(t,e,i){t.exports={default:i(232),__esModule:!0}},232:function(t,e,i){i(234),t.exports=i(6).Object.keys},233:function(t,e,i){var s=i(137),n=i(6),o=i(7);t.exports=function(t,e){var i=(n.Object||{})[t]||Object[t],r={};r[t]=e(i),s(s.S+s.F*o(function(){i(1)}),"Object",r)}},234:function(t,e,i){var s=i(189),n=i(188);i(233)("keys",function(){return function(t){return n(s(t))}})},246:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{},[i("h2",{staticClass:"page-title"},[t._v(t._s(t.$tc("setting",2)))]),t._v(" "),i("h3",[t._v("Localisation")]),t._v(" "),i("div",{staticClass:"list"},[i("div",{staticClass:"list-label"},[t._v("Language")]),t._v(" "),i("label",{staticClass:"item multiple-lines"},[i("i",{staticClass:"item-primary"},[t._v("public")]),t._v(" "),i("div",{staticClass:"item-content"},[i("q-select",{staticClass:"full-width",attrs:{type:"radio",options:t.locales},model:{value:t.locale,callback:function(e){t.locale=e},expression:"locale"}})],1)]),t._v(" "),i("div",{staticClass:"list-label"},[t._v("Currency")]),t._v(" "),i("label",{staticClass:"item multiple-lines"},[i("i",{staticClass:"item-primary"},[t._v("euro_symbol")]),t._v(" "),i("div",{staticClass:"item-content"},[i("q-select",{staticClass:"full-width",attrs:{type:"radio",options:t.currencies},model:{value:t._currency,callback:function(e){t._currency=e},expression:"_currency"}})],1)]),t._v(" "),t.isCustomCurrency?i("label",{staticClass:"item two-lines"},[i("i",{staticClass:"item-primary"},[t._v("edit")]),t._v(" "),i("div",{staticClass:"item-content"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t._currency,expression:"_currency"}],staticClass:"full-width",attrs:{placeholder:"Currency symbol"},domProps:{value:t._currency},on:{input:function(e){e.target.composing||(t._currency=e.target.value)}}})])]):t._e()]),t._v(" "),i("h3",[t._v("Modes")]),t._v(" "),i("div",{staticClass:"list"},[i("label",{staticClass:"item two-lines"},[t._m(0),t._v(" "),i("div",{staticClass:"item-secondary"},[i("q-toggle",{staticClass:"primary",model:{value:t.modeNicotine,callback:function(e){t.modeNicotine=e},expression:"modeNicotine"}})],1)]),t._v(" "),i("label",{staticClass:"item two-lines"},[t._m(1),t._v(" "),i("div",{staticClass:"item-secondary"},[i("q-toggle",{staticClass:"primary",model:{value:t.modeBase,callback:function(e){t.modeBase=e},expression:"modeBase"}})],1)]),t._v(" "),i("label",{staticClass:"item two-lines"},[t._m(2),t._v(" "),i("div",{staticClass:"item-secondary"},[i("q-toggle",{staticClass:"primary",model:{value:t.modePrice,callback:function(e){t.modePrice=e},expression:"modePrice"}})],1)]),t._v(" "),i("label",{staticClass:"item two-lines"},[t._m(3),t._v(" "),i("div",{staticClass:"item-secondary"},[i("q-toggle",{staticClass:"primary",model:{value:t.modeDrop,callback:function(e){t.modeDrop=e},expression:"modeDrop"}})],1)]),t._v(" "),i("label",{staticClass:"item two-lines"},[t._m(4),t._v(" "),i("div",{staticClass:"item-secondary"},[i("q-toggle",{staticClass:"primary",model:{value:t.modeBeaker,callback:function(e){t.modeBeaker=e},expression:"modeBeaker"}})],1)])]),t._v(" "),i("h3",[t._v("Favourite recipe parameters")]),t._v(" "),i("div",{staticClass:"list"},[i("label",{staticClass:"item two-lines"},[t._m(5),t._v(" "),i("div",{staticClass:"item-secondary"},[i("q-toggle",{staticClass:"primary",model:{value:t.modeFavorite,callback:function(e){t.modeFavorite=e},expression:"modeFavorite"}})],1)]),t._v(" "),t.mode.favorite?[i("div",{staticClass:"list-label"},[t._v("Quantity")]),t._v(" "),i("label",{staticClass:"item two-lines"},[i("i",{staticClass:"item-primary"},[t._v("opacity")]),t._v(" "),i("div",{staticClass:"item-content has-secondary"},[i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.favoriteQuantity,expression:"favoriteQuantity",modifiers:{number:!0}}],staticClass:"full-width",attrs:{type:"number"},domProps:{value:t.favoriteQuantity},on:{input:function(e){e.target.composing||(t.favoriteQuantity=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),i("div",{staticClass:"item-secondary"},[t._v("mL")])]),t._v(" "),i("div",{staticClass:"list-label"},[t._v("PG/VG ratio")]),t._v(" "),i("label",{staticClass:"item two-lines"},[i("i",{staticClass:"item-primary"},[t._v("iso")]),t._v(" "),i("div",{staticClass:"item-content has-secondary"},[i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.favoritePGVGRatio,expression:"favoritePGVGRatio",modifiers:{number:!0}}],staticClass:"full-width",attrs:{type:"number"},domProps:{value:t.favoritePGVGRatio},on:{input:function(e){e.target.composing||(t.favoritePGVGRatio=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),i("div",{staticClass:"item-secondary"},[t._v("%")])]),t._v(" "),i("div",{staticClass:"list-label"},[t._v("Nicotine")]),t._v(" "),i("label",{staticClass:"item two-lines"},[i("i",{staticClass:"item-primary"},[t._v("smoking_rooms")]),t._v(" "),i("div",{staticClass:"item-content has-secondary"},[i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.favoriteNicotine,expression:"favoriteNicotine",modifiers:{number:!0}}],staticClass:"full-width",attrs:{type:"number"},domProps:{value:t.favoriteNicotine},on:{input:function(e){e.target.composing||(t.favoriteNicotine=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),i("div",{staticClass:"item-secondary"},[t._v("mg/mL")])])]:t._e()],2)])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"item-content has-secondary"},[i("div",[t._v("Nicotine mode")]),t._v(" "),i("div",[t._v("Use nicotine in calculator")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"item-content has-secondary"},[i("div",[t._v("Base mode")]),t._v(" "),i("div",[t._v("Don't use aromas or additives")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"item-content has-secondary"},[i("div",[t._v("Price mode")]),t._v(" "),i("div",[t._v("Show recipe and ingredients price")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"item-content has-secondary"},[i("div",[t._v("Drop mode")]),t._v(" "),i("div",[t._v("Express small quantities in drops")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"item-content has-secondary"},[i("div",[t._v("Beaker mode")]),t._v(" "),i("div",[t._v("Draw the beaker")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"item-content has-secondary"},[i("div",[t._v("Favorite mode")]),t._v(" "),i("div",[t._v("Use favorite settings")])])}]}}});
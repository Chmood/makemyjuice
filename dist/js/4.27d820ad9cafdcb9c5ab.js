webpackJsonp([4],{179:function(t,e,i){var n=i(135)(i(229),i(248),null,null);t.exports=n.exports},182:function(t,e,i){var n=i(184),r=i(183);t.exports=function(t){return n(r(t))}},183:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},184:function(t,e,i){var n=i(194);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==n(t)?t.split(""):Object(t)}},185:function(t,e){var i=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:i)(t)}},186:function(t,e,i){"use strict";e.__esModule=!0;var n=i(187),r=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=r.default||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t}},187:function(t,e,i){t.exports={default:i(192),__esModule:!0}},188:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},189:function(t,e,i){var n=i(195),r=i(182),s=i(193)(!1),o=i(199)("IE_PROTO");t.exports=function(t,e){var i,a=r(t),c=0,l=[];for(i in a)i!=o&&n(a,i)&&l.push(i);for(;e.length>c;)n(a,i=e[c++])&&(~s(l,i)||l.push(i));return l}},190:function(t,e,i){var n=i(189),r=i(188);t.exports=Object.keys||function(t){return n(t,r)}},191:function(t,e,i){var n=i(183);t.exports=function(t){return Object(n(t))}},192:function(t,e,i){i(204),t.exports=i(6).Object.assign},193:function(t,e,i){var n=i(182),r=i(202),s=i(201);t.exports=function(t){return function(e,i,o){var a,c=n(e),l=r(c.length),u=s(o,l);if(t&&i!=i){for(;l>u;)if((a=c[u++])!=a)return!0}else for(;l>u;u++)if((t||u in c)&&c[u]===i)return t||u||0;return!t&&-1}}},194:function(t,e){var i={}.toString;t.exports=function(t){return i.call(t).slice(8,-1)}},195:function(t,e){var i={}.hasOwnProperty;t.exports=function(t,e){return i.call(t,e)}},196:function(t,e,i){"use strict";var n=i(190),r=i(197),s=i(198),o=i(191),a=i(184),c=Object.assign;t.exports=!c||i(7)(function(){var t={},e={},i=Symbol(),n="abcdefghijklmnopqrst";return t[i]=7,n.split("").forEach(function(t){e[t]=t}),7!=c({},t)[i]||Object.keys(c({},e)).join("")!=n})?function(t,e){for(var i=o(t),c=arguments.length,l=1,u=r.f,d=s.f;c>l;)for(var v,p=a(arguments[l++]),f=u?n(p).concat(u(p)):n(p),m=f.length,g=0;m>g;)d.call(p,v=f[g++])&&(i[v]=p[v]);return i}:c},197:function(t,e){e.f=Object.getOwnPropertySymbols},198:function(t,e){e.f={}.propertyIsEnumerable},199:function(t,e,i){var n=i(200)("keys"),r=i(203);t.exports=function(t){return n[t]||(n[t]=r(t))}},200:function(t,e,i){var n=i(8),r=n["__core-js_shared__"]||(n["__core-js_shared__"]={});t.exports=function(t){return r[t]||(r[t]={})}},201:function(t,e,i){var n=i(185),r=Math.max,s=Math.min;t.exports=function(t,e){return t=n(t),t<0?r(t+e,0):s(t,e)}},202:function(t,e,i){var n=i(185),r=Math.min;t.exports=function(t){return t>0?r(n(t),9007199254740991):0}},203:function(t,e){var i=0,n=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++i+n).toString(36))}},204:function(t,e,i){var n=i(137);n(n.S+n.F,"Object",{assign:i(196)})},219:function(t,e,i){var n=i(137),r=i(6),s=i(7);t.exports=function(t,e){var i=(r.Object||{})[t]||Object[t],o={};o[t]=e(i),n(n.S+n.F*s(function(){i(1)}),"Object",o)}},229:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(232),r=i.n(n),s=i(187),o=i.n(s),a=i(186),c=i.n(a),l=i(136);e.default={props:["id","mode"],components:{},data:function(){return{ingredient:{},type:"base",choicesTypes:[{label:"Base",value:"base"},{label:"Aroma",value:"aroma"},{label:"Additive",value:"additive"}]}},computed:c()({},i.i(l.a)(["getIngredients"]),{favoriteQuantity:{get:function(){return this.favorite.quantity},set:function(t){this.$store.commit("SET_FAVORITE",{favorite:"quantity",value:t})}},idPrevious:function(){return parseInt(this.ingredient.id)-1},idNext:function(){return parseInt(this.ingredient.id)+1},hasChange:function(){var t=this,e=this.getIngredients.findIndex(function(e){return e.id===t.id}),i=this.getIngredients[e];return console.log(this.ingredient),console.log(i),console.log(!this.isEquivalent(this.ingredient,i)),!this.isEquivalent(this.ingredient,i)}}),methods:c()({},i.i(l.b)([]),i.i(l.c)([]),{cloneIngredient:function(){var t=this,e=this.getIngredients.findIndex(function(e){return e.id===t.id});this.ingredient=o()({},this.getIngredients[e])},saveIngredient:function(){this.$store.commit("SET_INGREDIENT",{ingredient:this.ingredient}),this.$router.go(-1)},cancelIngredient:function(){"create"===this.mode&&this.$store.commit("DELETE_INGREDIENT",{ingredient:this.ingredient}),this.$router.go(-1)},isEquivalent:function(t,e){var i=r()(t),n=r()(e);if(i.length!==n.length)return!1;for(var s=0;s<i.length;s++){var o=i[s];if(t[o]!==e[o])return!1}return!0}}),created:function(){this.cloneIngredient()},beforeRouteUpdate:function(t,e,i){this.cloneIngredient(),i()}}},232:function(t,e,i){t.exports={default:i(234),__esModule:!0}},234:function(t,e,i){i(238);var n=i(6).Object;t.exports=function(t){return n.getOwnPropertyNames(t)}},236:function(t,e,i){var n=i(182),r=i(237).f,s={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return r(t)}catch(t){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==s.call(t)?a(t):r(n(t))}},237:function(t,e,i){var n=i(189),r=i(188).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,r)}},238:function(t,e,i){i(219)("getOwnPropertyNames",function(){return i(236).f})},248:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{},[i("h2",{staticClass:"page-title",style:{backgroundColor:t.ingredient.color}},[t._v("\n    "+t._s(t.$tc("ingredient",1))+" - "+t._s(t.mode)+" - ID "+t._s(t.$route.params.id)+"\n  ")]),t._v(" "),i("router-link",{attrs:{to:{path:"/ingredient/"+t.idPrevious}}},[t._v("\n    "+t._s(t.$t("previous"))+"\n  ")]),t._v(" "),i("router-link",{attrs:{to:{path:"/ingredient/"+t.idNext}}},[t._v("\n    "+t._s(t.$t("next"))+"\n  ")]),t._v(" "),i("div",{staticClass:"list"},[i("div",{staticClass:"list-label"},[t._v(t._s(t.$t("type")))]),t._v(" "),i("label",{staticClass:"item multiple-lines"},[i("i",{staticClass:"item-primary"},[t._v("euro_symbol")]),t._v(" "),i("div",{staticClass:"item-content"},[i("q-select",{staticClass:"full-width",attrs:{type:"radio",options:t.choicesTypes},model:{value:t.ingredient.type,callback:function(e){t.ingredient.type=e},expression:"ingredient.type"}})],1)]),t._v(" "),i("div",{staticClass:"list-label"},[t._v(t._s(t.$t("name")))]),t._v(" "),i("label",{staticClass:"item multiple-lines"},[i("i",{staticClass:"item-primary"},[t._v("public")]),t._v(" "),i("div",{staticClass:"item-content"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.ingredient.name,expression:"ingredient.name"}],staticClass:"full-width",attrs:{type:"text"},domProps:{value:t.ingredient.name},on:{input:function(e){e.target.composing||(t.ingredient.name=e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"list-label"},[t._v(t._s(t.$t("color")))]),t._v(" "),i("label",{staticClass:"item multiple-lines"},[i("i",{staticClass:"item-primary"},[t._v("color")]),t._v(" "),i("div",{staticClass:"item-content"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.ingredient.color,expression:"ingredient.color"}],staticClass:"full-width",attrs:{type:"text"},domProps:{value:t.ingredient.color},on:{input:function(e){e.target.composing||(t.ingredient.color=e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"list-label"},[t._v(t._s(t.$t("description")))]),t._v(" "),i("label",{staticClass:"item multiple-lines"},[i("i",{staticClass:"item-primary"},[t._v("public")]),t._v(" "),i("div",{staticClass:"item-content"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.ingredient.description,expression:"ingredient.description"}],staticClass:"full-width",attrs:{placeholder:"Placeholder"},domProps:{value:t.ingredient.description},on:{input:function(e){e.target.composing||(t.ingredient.description=e.target.value)}}})])]),t._v(" "),"additive"!==t.ingredient.type?[i("div",{staticClass:"list-label"},[t._v("PG/VG")]),t._v(" "),i("label",{staticClass:"item multiple-lines"},[i("i",{staticClass:"item-primary"},[t._v("public")]),t._v(" "),i("div",{staticClass:"item-content"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.ingredient.PGVGRatio,expression:"ingredient.PGVGRatio"}],staticClass:"full-width",attrs:{type:"number"},domProps:{value:t.ingredient.PGVGRatio},on:{input:function(e){e.target.composing||(t.ingredient.PGVGRatio=e.target.value)},blur:function(e){t.$forceUpdate()}}})])])]:t._e(),t._v(" "),"base"===t.ingredient.type?[i("div",{staticClass:"list-label"},[t._v(t._s(t.$t("nicotine")))]),t._v(" "),i("label",{staticClass:"item multiple-lines"},[i("i",{staticClass:"item-primary"},[t._v("public")]),t._v(" "),i("div",{staticClass:"item-content"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.ingredient.nicotine,expression:"ingredient.nicotine"}],staticClass:"full-width",attrs:{type:"number"},domProps:{value:t.ingredient.nicotine},on:{input:function(e){e.target.composing||(t.ingredient.nicotine=e.target.value)},blur:function(e){t.$forceUpdate()}}})])])]:t._e(),t._v(" "),i("div",{staticClass:"list-label"},[t._v(t._s(t.$t("price")))]),t._v(" "),i("label",{staticClass:"item multiple-lines"},[i("i",{staticClass:"item-primary"},[t._v("public")]),t._v(" "),i("div",{staticClass:"item-content"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.ingredient.price,expression:"ingredient.price"}],staticClass:"full-width",attrs:{type:"number"},domProps:{value:t.ingredient.price},on:{input:function(e){e.target.composing||(t.ingredient.price=e.target.value)},blur:function(e){t.$forceUpdate()}}})])]),t._v(" "),i("div",{staticClass:"list-label"},[t._v(t._s(t.$t("viscosity")))]),t._v(" "),i("label",{staticClass:"item multiple-lines"},[i("i",{staticClass:"item-primary"},[t._v("public")]),t._v(" "),i("div",{staticClass:"item-content"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.ingredient.viscosity,expression:"ingredient.viscosity"}],staticClass:"full-width",attrs:{type:"number"},domProps:{value:t.ingredient.viscosity},on:{input:function(e){e.target.composing||(t.ingredient.viscosity=e.target.value)},blur:function(e){t.$forceUpdate()}}})])])],2),t._v(" "),i("div",{staticClass:"center"},[i("button",{staticClass:"circular secondary",attrs:{disabled:!t.hasChange},on:{click:function(e){t.saveIngredient()}}},[i("i",[t._v("check")])]),t._v(" "),i("button",{staticClass:"circular dark",on:{click:function(e){t.cancelIngredient()}}},[i("i",[t._v("clear")])])])],1)},staticRenderFns:[]}}});
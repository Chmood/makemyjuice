webpackJsonp([1,3,9],{171:function(t,e,i){i(213);var n=i(135)(i(207),i(216),"data-v-3306bb13",null);t.exports=n.exports},175:function(t,e,i){i(225);var n=i(135)(i(220),i(227),"data-v-317c4870",null);t.exports=n.exports},180:function(t,e,i){i(248);var n=i(135)(i(232),i(252),"data-v-17d33160",null);t.exports=n.exports},184:function(t,e,i){var n=i(186),r=i(185);t.exports=function(t){return n(r(t))}},185:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},186:function(t,e,i){var n=i(196);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==n(t)?t.split(""):Object(t)}},187:function(t,e){var i=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:i)(t)}},188:function(t,e,i){"use strict";e.__esModule=!0;var n=i(189),r=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=r.default||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t}},189:function(t,e,i){t.exports={default:i(194),__esModule:!0}},190:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},191:function(t,e,i){var n=i(197),r=i(184),s=i(195)(!1),a=i(201)("IE_PROTO");t.exports=function(t,e){var i,o=r(t),c=0,d=[];for(i in o)i!=a&&n(o,i)&&d.push(i);for(;e.length>c;)n(o,i=e[c++])&&(~s(d,i)||d.push(i));return d}},192:function(t,e,i){var n=i(191),r=i(190);t.exports=Object.keys||function(t){return n(t,r)}},193:function(t,e,i){var n=i(185);t.exports=function(t){return Object(n(t))}},194:function(t,e,i){i(206),t.exports=i(6).Object.assign},195:function(t,e,i){var n=i(184),r=i(204),s=i(203);t.exports=function(t){return function(e,i,a){var o,c=n(e),d=r(c.length),l=s(a,d);if(t&&i!=i){for(;d>l;)if((o=c[l++])!=o)return!0}else for(;d>l;l++)if((t||l in c)&&c[l]===i)return t||l||0;return!t&&-1}}},196:function(t,e){var i={}.toString;t.exports=function(t){return i.call(t).slice(8,-1)}},197:function(t,e){var i={}.hasOwnProperty;t.exports=function(t,e){return i.call(t,e)}},198:function(t,e,i){"use strict";var n=i(192),r=i(199),s=i(200),a=i(193),o=i(186),c=Object.assign;t.exports=!c||i(7)(function(){var t={},e={},i=Symbol(),n="abcdefghijklmnopqrst";return t[i]=7,n.split("").forEach(function(t){e[t]=t}),7!=c({},t)[i]||Object.keys(c({},e)).join("")!=n})?function(t,e){for(var i=a(t),c=arguments.length,d=1,l=r.f,u=s.f;c>d;)for(var f,v=o(arguments[d++]),p=l?n(v).concat(l(v)):n(v),g=p.length,m=0;g>m;)u.call(v,f=p[m++])&&(i[f]=v[f]);return i}:c},199:function(t,e){e.f=Object.getOwnPropertySymbols},200:function(t,e){e.f={}.propertyIsEnumerable},201:function(t,e,i){var n=i(202)("keys"),r=i(205);t.exports=function(t){return n[t]||(n[t]=r(t))}},202:function(t,e,i){var n=i(8),r=n["__core-js_shared__"]||(n["__core-js_shared__"]={});t.exports=function(t){return r[t]||(r[t]={})}},203:function(t,e,i){var n=i(187),r=Math.max,s=Math.min;t.exports=function(t,e){return t=n(t),t<0?r(t+e,0):s(t,e)}},204:function(t,e,i){var n=i(187),r=Math.min;t.exports=function(t){return t>0?r(n(t),9007199254740991):0}},205:function(t,e){var i=0,n=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++i+n).toString(36))}},206:function(t,e,i){var n=i(137);n(n.S+n.F,"Object",{assign:i(198)})},207:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(188),r=i.n(n),s=i(136),a=i(9);i.n(a);e.default={data:function(){return{}},props:["ingredient"],computed:r()({},i.i(s.a)(["mode","currency"])),methods:r()({},i.i(s.c)(["TOGGLE_INGREDIENT","DELETE_INGREDIENT"]),{confirmDelete:function(t){var e=this;a.Dialog.create({title:"Delete this ingredient?",ingredient:"Are you sure? This can't be reverted!",buttons:[{label:this.$t("cancel"),handler:function(){console.log("Ingredient deletion cancelled")}},{label:this.$t("delete"),handler:function(){a.Toast.create.positive("Ingredient has been deleted"),e.$store.commit("DELETE_INGREDIENT",{ingredient:t})}}]})}})}},210:function(t,e,i){e=t.exports=i(169)(),e.push([t.i,".ingredient-item[data-v-3306bb13]{margin-bottom:16px;border:1px solid #222;background-color:#fff;color:#333;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.ingredient-item__body[data-v-3306bb13]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;padding:16px}.ingredient-item__foot[data-v-3306bb13]{padding:16px;padding-top:0;text-align:right}.ingredient-item__foot button[data-v-3306bb13]{margin-left:16px}.ingredient-item-title[data-v-3306bb13]{margin:0;padding:8px 16px;color:#fff}.ingredient-item-description[data-v-3306bb13]{margin-bottom:16px}.ingredient-item-stat[data-v-3306bb13]{margin-bottom:8px;display:-webkit-box;display:-ms-flexbox;display:flex}.ingredient-item-stat>span[data-v-3306bb13]:first-child{text-transform:capitalize;font-style:italic;color:rgba(0,0,0,.54)}.ingredient-item-stat>span[data-v-3306bb13]:last-child{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;text-align:right}.ingredient-item-stat>span:last-child>span[data-v-3306bb13]{font-weight:700}",""])},213:function(t,e,i){var n=i(210);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(170)("000f90a5",n,!0)},216:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("article",{staticClass:"ingredient-item",class:["ingredient-item--"+t.ingredient.type,t.ingredient.active?"ingredient-item--active":""]},[i("div",{staticClass:"ingredient-item__head"},[i("h4",{staticClass:"ingredient-item-title",style:{backgroundColor:t.ingredient.color}},[t._v(t._s(t.ingredient.name))])]),t._v(" "),i("div",{staticClass:"ingredient-item__body"},[i("div",{staticClass:"ingredient-item-description"},[t._v(t._s(t.ingredient.description))]),t._v(" "),i("div",{staticClass:"ingredient-item-stats"},["additive"!==t.ingredient.type?i("div",{staticClass:"ingredient-item-stat"},[i("span",[t._v(t._s(t.$t("PGVGRatio")))]),i("span",[i("span",[t._v(t._s(Math.round(100*t.ingredient.PGVGRatio))+"/"+t._s(Math.round(100*(1-t.ingredient.PGVGRatio))))]),t._v(" %")])]):t._e(),t._v(" "),t.ingredient.nicotine&&t.mode.nicotine?i("div",{staticClass:"ingredient-item-stat"},[i("span",[t._v(t._s(t.$t("nicotine")))]),i("span",[i("span",[t._v(t._s(t.ingredient.nicotine))]),t._v(" mg/mL")])]):t._e(),t._v(" "),t.ingredient.price&&t.mode.price?i("div",{staticClass:"ingredient-item-stat"},[i("span",[t._v(t._s(t.$t("price")))]),i("span",[i("span",[t._v(t._s(t.ingredient.price))]),t._v(" "+t._s(t.currency)+"/L")])]):t._e(),t._v(" "),t.ingredient.viscosity&&t.mode.drop?i("div",{staticClass:"ingredient-item-stat"},[i("span",[t._v(t._s(t.$t("viscosity")))]),i("span",[i("span",[t._v(t._s(t.ingredient.viscosity))]),t._v(" "+t._s(t.$tc("drop",2))+"/mL")])]):t._e()])]),t._v(" "),i("div",{staticClass:"ingredient-item__foot"},[i("button",{staticClass:"circular dark small",on:{click:function(e){t.TOGGLE_INGREDIENT({ingredient:t.ingredient})}}},[i("i",[t._v("book")])]),t._v(" "),i("button",{staticClass:"circular light small",on:{click:function(e){t.confirmDelete(t.ingredient)}}},[i("i",[t._v("clear")])]),t._v(" "),i("router-link",{staticClass:"circular secondary small",attrs:{to:{path:"/ingredient/edit/"+t.ingredient.id},tag:"button"}},[i("i",[t._v("edit")])])],1)])},staticRenderFns:[]}},220:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(188),r=i.n(n),s=i(136),a=i(171),o=i.n(a),c={all:function(t){return t},active:function(t){return t.filter(function(t){return t.active})},inactive:function(t){return t.filter(function(t){return!t.active})}},d={all:function(t){return t},base:function(t){return t.filter(function(t){return"base"===t.type})},aroma:function(t){return t.filter(function(t){return"aroma"===t.type})},additive:function(t){return t.filter(function(t){return"additive"===t.type})}};e.default={components:{Ingredient:o.a},data:function(){return{visibility:"all",filters:c}},props:["compact","customVisibility"],computed:r()({},i.i(s.a)(["getIngredients"]),{bases:function(){return d.base(this.filteredIngredients)},aromas:function(){return d.aroma(this.filteredIngredients)},additives:function(){return d.additive(this.filteredIngredients)},filteredIngredients:function(){return c[this.visibility](this.getIngredients)}}),methods:r()({},i.i(s.b)([]),i.i(s.c)([]),{getFreeId:function(){for(var t=1;-1!==this.getIngredients.findIndex(function(e){return e.id===t.toString()});)t++;return t.toString()},newIngredient:function(t){var e=this.getFreeId(),i={id:e,active:!0,type:t,name:"",description:"",color:"#888",price:0,viscosity:25};"aroma"!==t&&"base"!==t||(i.PGVGRatio=1),"base"===t&&(i.nicotine=0),this.$store.commit("ADD_INGREDIENT",{ingredient:i}),this.$router.push("ingredient/create/"+e)}}),mounted:function(){this.customVisibility&&(this.visibility=this.customVisibility)}}},223:function(t,e,i){e=t.exports=i(169)(),e.push([t.i,".ingredients--additives[data-v-317c4870],.ingredients--aromas[data-v-317c4870],.ingredients--bases[data-v-317c4870]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:-8px;margin-bottom:16px}.ingredients--additives>[data-v-317c4870],.ingredients--aromas>[data-v-317c4870],.ingredients--bases>[data-v-317c4870]{-ms-flex-preferred-size:100%;flex-basis:100%;margin:8px}@media (min-width:45em){.ingredients--additives>[data-v-317c4870],.ingredients--aromas>[data-v-317c4870],.ingredients--bases>[data-v-317c4870]{-ms-flex-preferred-size:calc(50% - 1rem);flex-basis:calc(50% - 1rem)}}@media (min-width:75em){.ingredients--additives>[data-v-317c4870],.ingredients--aromas>[data-v-317c4870],.ingredients--bases>[data-v-317c4870]{-ms-flex-preferred-size:calc(33.33% - 1rem);flex-basis:calc(33.33% - 1rem)}}",""])},225:function(t,e,i){var n=i(223);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(170)("1f5db33b",n,!0)},227:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"section section--ingredients",class:[t.compact?"ingredients--compact":""]},[i("q-tabs",{staticClass:"ingredient-filters light justified margin-bottom",attrs:{refs:t.$refs,"default-tab":"tab-4"}},t._l(t.filters,function(e,n){return i("q-tab",{key:n,class:{active:t.visibility===n},attrs:{icon:""}},[i("div",{staticClass:"filter",class:{"filter--active":t.visibility===n},on:{click:function(e){t.visibility=n}}},[t._v("\n        "+t._s("all"===n?"ALL":"")+"\n        "+t._s("inactive"===n?"INACTIVE":"")+"\n        "+t._s("active"===n?"ACTIVE":"")+"\n      ")])])})),t._v(" "),i("h3",[t._v(t._s(t.$tc("base",2))+" ("+t._s(t.bases.length)+")")]),t._v(" "),i("div",{staticClass:"ingredients--bases"},t._l(t.bases,function(e){return t.bases?i("ingredient",{key:e.id,attrs:{ingredient:e}}):t._e()})),t._v(" "),i("div",{staticClass:"center"},[i("button",{staticClass:"circular primary small",on:{click:function(e){t.newIngredient("base")}}},[i("i",[t._v("add")])])]),t._v(" "),i("h3",[t._v(t._s(t.$tc("aroma",2))+" ("+t._s(t.aromas.length)+")")]),t._v(" "),i("div",{staticClass:"ingredients--aromas"},t._l(t.aromas,function(e){return t.aromas?i("ingredient",{key:e.id,attrs:{ingredient:e}}):t._e()})),t._v(" "),i("div",{staticClass:"center"},[i("button",{staticClass:"circular primary small",on:{click:function(e){t.newIngredient("aroma")}}},[i("i",[t._v("add")])])]),t._v(" "),i("h3",[t._v(t._s(t.$tc("additive",2))+" ("+t._s(t.additives.length)+")")]),t._v(" "),i("div",{staticClass:"ingredients--additives"},t._l(t.additives,function(e){return t.additives?i("ingredient",{key:e.id,attrs:{ingredient:e}}):t._e()})),t._v(" "),i("div",{staticClass:"center"},[i("button",{staticClass:"circular primary small",on:{click:function(e){t.newIngredient("additive")}}},[i("i",[t._v("add")])])])],1)},staticRenderFns:[]}},232:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(188),r=i.n(n),s=i(136),a=i(175),o=i.n(a);e.default={components:{Ingredients:o.a},data:function(){return{}},props:[],computed:r()({},i.i(s.a)([])),methods:r()({},i.i(s.b)([]),i.i(s.c)([])),mounted:function(){}}},244:function(t,e,i){e=t.exports=i(169)(),e.push([t.i,"",""])},248:function(t,e,i){var n=i(244);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(170)("f6bc79fe",n,!0)},252:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",[i("h2",{staticClass:"page-title"},[t._v(t._s(t.$tc("ingredient",2)))]),t._v(" "),i("Ingredients")],1)},staticRenderFns:[]}}});
webpackJsonp([6],{170:function(t,n,e){e(209);var r=e(135)(e(203),e(212),"data-v-3306bb13",null);t.exports=r.exports},180:function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},181:function(t,n,e){var r=e(188);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},182:function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},183:function(t,n,e){var r=e(181),i=e(180);t.exports=function(t){return r(i(t))}},184:function(t,n,e){"use strict";n.__esModule=!0;var r=e(185),i=function(t){return t&&t.__esModule?t:{default:t}}(r);n.default=i.default||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}},185:function(t,n,e){t.exports={default:e(186),__esModule:!0}},186:function(t,n,e){e(202),t.exports=e(6).Object.assign},187:function(t,n,e){var r=e(183),i=e(199),o=e(198);t.exports=function(t){return function(n,e,c){var s,a=r(n),u=i(a.length),f=o(c,u);if(t&&e!=e){for(;u>f;)if((s=a[f++])!=s)return!0}else for(;u>f;f++)if((t||f in a)&&a[f]===e)return t||f||0;return!t&&-1}}},188:function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},189:function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},190:function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},191:function(t,n,e){"use strict";var r=e(194),i=e(192),o=e(195),c=e(200),s=e(181),a=Object.assign;t.exports=!a||e(7)(function(){var t={},n={},e=Symbol(),r="abcdefghijklmnopqrst";return t[e]=7,r.split("").forEach(function(t){n[t]=t}),7!=a({},t)[e]||Object.keys(a({},n)).join("")!=r})?function(t,n){for(var e=c(t),a=arguments.length,u=1,f=i.f,l=o.f;a>u;)for(var v,d=s(arguments[u++]),_=f?r(d).concat(f(d)):r(d),p=_.length,g=0;p>g;)l.call(d,v=_[g++])&&(e[v]=d[v]);return e}:a},192:function(t,n){n.f=Object.getOwnPropertySymbols},193:function(t,n,e){var r=e(190),i=e(183),o=e(187)(!1),c=e(196)("IE_PROTO");t.exports=function(t,n){var e,s=i(t),a=0,u=[];for(e in s)e!=c&&r(s,e)&&u.push(e);for(;n.length>a;)r(s,e=n[a++])&&(~o(u,e)||u.push(e));return u}},194:function(t,n,e){var r=e(193),i=e(189);t.exports=Object.keys||function(t){return r(t,i)}},195:function(t,n){n.f={}.propertyIsEnumerable},196:function(t,n,e){var r=e(197)("keys"),i=e(201);t.exports=function(t){return r[t]||(r[t]=i(t))}},197:function(t,n,e){var r=e(8),i=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return i[t]||(i[t]={})}},198:function(t,n,e){var r=e(182),i=Math.max,o=Math.min;t.exports=function(t,n){return t=r(t),t<0?i(t+n,0):o(t,n)}},199:function(t,n,e){var r=e(182),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},200:function(t,n,e){var r=e(180);t.exports=function(t){return Object(r(t))}},201:function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},202:function(t,n,e){var r=e(137);r(r.S+r.F,"Object",{assign:e(191)})},203:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(184),i=e.n(r),o=e(136),c=e(9);e.n(c);n.default={data:function(){return{}},props:["ingredient"],computed:i()({},e.i(o.a)([])),methods:i()({},e.i(o.c)(["TOGGLE_INGREDIENT","DELETE_INGREDIENT"]),{confirmDelete:function(t){var n=this;c.Dialog.create({title:"Delete this ingredient?",ingredient:"Are you sure? This can't be reverted!",buttons:[{label:this.$t("cancel"),handler:function(){console.log("Ingredient deletion cancelled")}},{label:this.$t("delete"),handler:function(){c.Toast.create.positive("Ingredient has been deleted"),n.$store.commit("DELETE_INGREDIENT",{ingredient:t})}}]})}})}},206:function(t,n,e){n=t.exports=e(168)(),n.push([t.i,"",""])},209:function(t,n,e){var r=e(206);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);e(169)("000f90a5",r,!0)},212:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("article",{staticClass:"ingredient card",class:["ingredient--"+t.ingredient.type,t.ingredient.active?"ingredient--active":""]},[e("h4",{style:{backgroundColor:t.ingredient.color}},[t._v(t._s(t.ingredient.name))]),t._v(" "),e("p",[t._v(t._s(t.ingredient.description))]),t._v(" "),e("div",[t._v(t._s(t.$t("price"))+": "+t._s(t.ingredient.price))]),t._v(" "),e("div",[t._v(t._s(t.$t("viscosity"))+": "+t._s(t.ingredient.viscosity))]),t._v(" "),t.ingredient.PGVGRatio?e("div",[t._v("\n  "+t._s(t.$t("PGVGRatio"))+": "+t._s(t.ingredient.PGVGRatio)+"\n")]):t._e(),t._v(" "),t.ingredient.nicotine?e("div",[t._v("\n  "+t._s(t.$t("nicotine"))+": "+t._s(t.ingredient.nicotine)+"\n")]):t._e(),t._v(" "),e("button",{staticClass:"text-primary",on:{click:function(n){t.TOGGLE_INGREDIENT({ingredient:t.ingredient})}}},[e("i",{staticClass:"on-left"},[t._v("book")]),t._v(" "),t.ingredient.active?e("span",[t._v(t._s(t.$t("desactivate")))]):e("span",[t._v(t._s(t.$t("activate")))])]),t._v(" "),e("button",{staticClass:"text-dark",on:{click:function(n){t.confirmDelete(t.ingredient)}}},[e("i",{staticClass:"on-left"},[t._v("delete")]),t._v("\n  "+t._s(t.$t("delete"))+"\n")]),t._v(" "),e("button",{staticClass:"text-dark",on:{click:function(t){}}},[e("i",{staticClass:"on-left"},[t._v("edit")]),t._v("\n  "+t._s(t.$t("edit"))+"\n")])])},staticRenderFns:[]}}});
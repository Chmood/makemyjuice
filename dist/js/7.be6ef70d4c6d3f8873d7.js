webpackJsonp([7],{172:function(t,e,n){n(214);var i=n(135)(n(208),n(217),"data-v-942096fc",null);t.exports=i.exports},184:function(t,e,n){var i=n(186),r=n(185);t.exports=function(t){return i(r(t))}},185:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},186:function(t,e,n){var i=n(196);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==i(t)?t.split(""):Object(t)}},187:function(t,e){var n=Math.ceil,i=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?i:n)(t)}},188:function(t,e,n){"use strict";e.__esModule=!0;var i=n(189),r=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default=r.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}},189:function(t,e,n){t.exports={default:n(194),__esModule:!0}},190:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},191:function(t,e,n){var i=n(197),r=n(184),o=n(195)(!1),s=n(201)("IE_PROTO");t.exports=function(t,e){var n,c=r(t),a=0,u=[];for(n in c)n!=s&&i(c,n)&&u.push(n);for(;e.length>a;)i(c,n=e[a++])&&(~o(u,n)||u.push(n));return u}},192:function(t,e,n){var i=n(191),r=n(190);t.exports=Object.keys||function(t){return i(t,r)}},193:function(t,e,n){var i=n(185);t.exports=function(t){return Object(i(t))}},194:function(t,e,n){n(206),t.exports=n(6).Object.assign},195:function(t,e,n){var i=n(184),r=n(204),o=n(203);t.exports=function(t){return function(e,n,s){var c,a=i(e),u=r(a.length),p=o(s,u);if(t&&n!=n){for(;u>p;)if((c=a[p++])!=c)return!0}else for(;u>p;p++)if((t||p in a)&&a[p]===n)return t||p||0;return!t&&-1}}},196:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},197:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},198:function(t,e,n){"use strict";var i=n(192),r=n(199),o=n(200),s=n(193),c=n(186),a=Object.assign;t.exports=!a||n(7)(function(){var t={},e={},n=Symbol(),i="abcdefghijklmnopqrst";return t[n]=7,i.split("").forEach(function(t){e[t]=t}),7!=a({},t)[n]||Object.keys(a({},e)).join("")!=i})?function(t,e){for(var n=s(t),a=arguments.length,u=1,p=r.f,f=o.f;a>u;)for(var l,d=c(arguments[u++]),v=p?i(d).concat(p(d)):i(d),_=v.length,h=0;_>h;)f.call(d,l=v[h++])&&(n[l]=d[l]);return n}:a},199:function(t,e){e.f=Object.getOwnPropertySymbols},200:function(t,e){e.f={}.propertyIsEnumerable},201:function(t,e,n){var i=n(202)("keys"),r=n(205);t.exports=function(t){return i[t]||(i[t]=r(t))}},202:function(t,e,n){var i=n(8),r=i["__core-js_shared__"]||(i["__core-js_shared__"]={});t.exports=function(t){return r[t]||(r[t]={})}},203:function(t,e,n){var i=n(187),r=Math.max,o=Math.min;t.exports=function(t,e){return t=i(t),t<0?r(t+e,0):o(t,e)}},204:function(t,e,n){var i=n(187),r=Math.min;t.exports=function(t){return t>0?r(i(t),9007199254740991):0}},205:function(t,e){var n=0,i=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+i).toString(36))}},206:function(t,e,n){var i=n(137);i(i.S+i.F,"Object",{assign:n(198)})},208:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(188),r=n.n(i),o=n(136);e.default={props:["recipe","type"],components:{},data:function(){return{}},computed:r()({},n.i(o.a)(["getBases","getAromas","getAdditives"]),{ingredients:function(){return"aroma"===this.type?this.getAromas:"additive"===this.type?this.getAdditives:void 0},recipeIngredients:function(){return"aroma"===this.type?this.recipe.aromas:"additive"===this.type?this.recipe.additives:void 0},ingredientChoice:function(){return this.ingredients.map(function(t){return t.value=t.id,t.label=t.name+" ("+t.id+")",t})},ingredientsRatioSum:function(){if(0===this.recipeIngredients.length)return 0;var t=0;return this.recipeIngredients.forEach(function(e){t+=e.ratio}),t}}),methods:r()({},n.i(o.b)([]),n.i(o.c)([]),{addRecipeIngredient:function(){this.$store.commit("ADD_RECIPE_INGREDIENT",{recipe:this.recipe,type:this.type,ingredient:{id:"0",ratio:.05}})},deleteRecipeIngredient:function(t){this.$store.commit("DELETE_RECIPE_INGREDIENT",{recipe:this.recipe,type:this.type,ingredient:t})},setRecipeIngredientId:function(t,e){this.$store.commit("SET_RECIPE_INGREDIENT_ID",{recipe:this.recipe,type:this.type,id:t,ingredientId:e})},setRecipeIngredientRatio:function(t,e){this.$store.commit("SET_RECIPE_INGREDIENT_RATIO",{recipe:this.recipe,type:this.type,id:t,ingredientRatio:parseFloat(e.target.value)/100})}})}},211:function(t,e,n){e=t.exports=n(169)(),e.push([t.i,"",""])},214:function(t,e,n){var i=n(211);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(170)("bf298dd6",i,!0)},217:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[t._l(t.recipeIngredients,function(e,i){return n("div",{key:e.id,staticClass:"input-item"},[n("div",{staticClass:"input-item__label"},[n("q-select",{attrs:{type:"list",value:e.id,options:t.ingredientChoice},on:{input:function(e){t.setRecipeIngredientId(i,e)}}})],1),t._v(" "),n("div",{staticClass:"input-item__input"},[n("input",{attrs:{type:"number"},domProps:{value:100*e.ratio},on:{input:function(e){t.setRecipeIngredientRatio(i,e)}}})]),t._v(" "),t._m(0,!0),t._v(" "),n("div",{staticClass:"input-item__extra"},[n("button",{staticClass:"light circular small",on:{click:function(n){t.deleteRecipeIngredient(e)}}},[n("i",[t._v("clear")])])])])}),t._v(" "),n("div",{staticClass:"input-item"},[n("div",{staticClass:"input-item__label"},[n("span",[t._v("\n        "+t._s(t.recipeIngredients.length)+"\n        "+t._s(t.$tc(t.type,t.recipeIngredients.length))+"\n      ")])]),t._v(" "),n("div",{staticClass:"input-item__input"},[n("span",[t._v("\n        "+t._s(Math.round(100*t.ingredientsRatioSum))+"\n      ")])]),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"input-item__extra"},[n("button",{staticClass:"primary circular small",on:{click:function(e){t.addRecipeIngredient()}}},[n("i",[t._v("add")])])])])],2)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-item__unit"},[n("span",{staticClass:"input-unit"},[t._v(" %")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-item__unit"},[n("span",{staticClass:"input-unit"},[t._v(" %")])])}]}}});
webpackJsonp([6],{173:function(t,e,i){i(213);var o=i(135)(i(207),i(216),"data-v-e7f47c94",null);t.exports=o.exports},182:function(t,e,i){var o=i(184),n=i(183);t.exports=function(t){return o(n(t))}},183:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},184:function(t,e,i){var o=i(194);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==o(t)?t.split(""):Object(t)}},185:function(t,e){var i=Math.ceil,o=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?o:i)(t)}},186:function(t,e,i){"use strict";e.__esModule=!0;var o=i(187),n=function(t){return t&&t.__esModule?t:{default:t}}(o);e.default=n.default||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t}},187:function(t,e,i){t.exports={default:i(192),__esModule:!0}},188:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},189:function(t,e,i){var o=i(195),n=i(182),r=i(193)(!1),s=i(199)("IE_PROTO");t.exports=function(t,e){var i,a=n(t),c=0,u=[];for(i in a)i!=s&&o(a,i)&&u.push(i);for(;e.length>c;)o(a,i=e[c++])&&(~r(u,i)||u.push(i));return u}},190:function(t,e,i){var o=i(189),n=i(188);t.exports=Object.keys||function(t){return o(t,n)}},191:function(t,e,i){var o=i(183);t.exports=function(t){return Object(o(t))}},192:function(t,e,i){i(204),t.exports=i(6).Object.assign},193:function(t,e,i){var o=i(182),n=i(202),r=i(201);t.exports=function(t){return function(e,i,s){var a,c=o(e),u=n(c.length),l=r(s,u);if(t&&i!=i){for(;u>l;)if((a=c[l++])!=a)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===i)return t||l||0;return!t&&-1}}},194:function(t,e){var i={}.toString;t.exports=function(t){return i.call(t).slice(8,-1)}},195:function(t,e){var i={}.hasOwnProperty;t.exports=function(t,e){return i.call(t,e)}},196:function(t,e,i){"use strict";var o=i(190),n=i(197),r=i(198),s=i(191),a=i(184),c=Object.assign;t.exports=!c||i(7)(function(){var t={},e={},i=Symbol(),o="abcdefghijklmnopqrst";return t[i]=7,o.split("").forEach(function(t){e[t]=t}),7!=c({},t)[i]||Object.keys(c({},e)).join("")!=o})?function(t,e){for(var i=s(t),c=arguments.length,u=1,l=n.f,d=r.f;c>u;)for(var f,h=a(arguments[u++]),p=l?o(h).concat(l(h)):o(h),v=p.length,g=0;v>g;)d.call(h,f=p[g++])&&(i[f]=h[f]);return i}:c},197:function(t,e){e.f=Object.getOwnPropertySymbols},198:function(t,e){e.f={}.propertyIsEnumerable},199:function(t,e,i){var o=i(200)("keys"),n=i(203);t.exports=function(t){return o[t]||(o[t]=n(t))}},200:function(t,e,i){var o=i(8),n=o["__core-js_shared__"]||(o["__core-js_shared__"]={});t.exports=function(t){return n[t]||(n[t]={})}},201:function(t,e,i){var o=i(185),n=Math.max,r=Math.min;t.exports=function(t,e){return t=o(t),t<0?n(t+e,0):r(t,e)}},202:function(t,e,i){var o=i(185),n=Math.min;t.exports=function(t){return t>0?n(o(t),9007199254740991):0}},203:function(t,e){var i=0,o=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++i+o).toString(36))}},204:function(t,e,i){var o=i(137);o(o.S+o.F,"Object",{assign:i(196)})},207:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(186),n=i.n(o),r=i(136);e.default={data:function(){return{}},props:[],computed:n()({},i.i(r.a)(["getIngredients","getBases","getAromas","getAdditives","getRecipeAromas","getRecipeAdditives","getRecipeQuantity","getRecipePGVGRatio","getRecipeNicotine","mode","favorite","currency"]),{recipeIngredients:function(){return this.getRecipeAromas.concat(this.getRecipeAdditives)},recipeQuantity:function(){return this.favorite.favoriteQuantity?this.favorite.quantity:this.getRecipeQuantity},recipePGVGRatio:function(){return this.favorite.favoritePGVGRatio?this.favorite.PGVGRatio:this.getRecipePGVGRatio},recipeNicotine:function(){return this.favorite.favoriteNicotine?this.favorite.nicotine:this.getRecipeNicotine},results:function(){var t=this,e=!0,i=1,o=0,n=0,r=0,s=0,a=0,c=void 0,u=void 0,l=void 0,d=void 0,f=0,h=0,p=1,v=0,g=void 0,m=void 0,b=void 0,y=void 0;console.warn("========================================="),console.log("ADDITIVES---------------------------------"),this.mode.base||this.getRecipeAdditives.forEach(function(t){i-=t.ratio,n+=t.ratio}),console.log("Remaining base ratio after additives",i),console.log("AROMAS------------------------------------"),this.mode.base||(this.getRecipeAromas.forEach(function(e){var n=t.getIngredients.findIndex(function(t){return t.id===e.id}),r=t.getIngredients[n];i-=e.ratio,o+=e.ratio,s+=e.ratio*t.recipeQuantity,a+=r.PGVGRatio*e.ratio*t.recipeQuantity}),u=this.recipeQuantity*i,c=a/s,console.log("Total aromas quantity",s,"mL"),console.log("Total aromas PG/VG ratio",100*c,"%"),n>1||o>1?(n>1&&(console.warn("Too much additives!"),e=!1),o>1&&(console.warn("Too much aromas!"),e=!1)):o+n>1&&(console.warn("Too much aromas and/or additives!"),e=!1),l=(this.recipePGVGRatio*(s+u)-s*c)/u,l<0?(console.warn("Too much VG!"),e=!1):l>1&&(console.warn("Too much PG!"),e=!1),console.log("Total bases quantity",u,"mL"),console.log("Total bases PG/VG ratio",100*l,"%")),console.log("Remaining base ratio after aromas",i),console.log("NICOTINE----------------------------------"),this.mode.nicotine&&this.recipeNicotine&&this.recipeNicotine>0&&(console.log("Desired nicotine",this.recipeNicotine,"mg/mL"),this.getBases.forEach(function(t){t.nicotine>f&&(f=t.nicotine,d=t.id)}),0===f?(console.warn("No nicotine base available!"),e=!1):f<this.recipeNicotine&&(console.warn("Nicotine base not strong enought!"),e=!1),console.log("Strongest nicotine base ID",d,f,"mg/mL"),h=this.recipeQuantity*this.recipeNicotine/f,r=h/this.recipeQuantity,i-=r,console.log("Nicotine base quantity",h,"mL"),console.log("Nicotine base PG/VG ratio",100*this.getBases[d].PGVGRatio,"%")),console.log("Remaining base ratio after nicotine",i),console.log("BASES-------------------------------------");var _=s+h,x=void 0;x=this.mode.nicotine&&!this.mode.base?(s*c+h*this.getBases[d].PGVGRatio)/_:!this.mode.nicotine&&this.mode.base?0:this.mode.nicotine?h*this.getBases[d].PGVGRatio/_:s*c/_,console.log("Submix",_,"mL @",100*x,"% PG/VG");var G=this.recipeQuantity*i,R=(this.recipePGVGRatio*(_+G)-_*x)/G;R<0?(console.warn("Too much VG!"),e=!1):R>1&&(console.warn("Too much PG!"),e=!1),console.log("Basemix",G,"mL @",100*R,"% PG/VG"),this.getBases.forEach(function(t){0===t.nicotine&&(t.PGVGRatio<p&&(p=t.PGVGRatio,g=t.id),t.PGVGRatio>v&&(v=t.PGVGRatio,m=t.id))}),console.log("Extreme bases from",100*p,"to",100*v,"%"),R<p&&(console.warn("Too much VG in your base(s)!"),e=!1),R>v&&(console.warn("Too much PG in your base(s)!"),e=!1),b=G*(R-v)/(p-v),y=G-b,console.log("Base min PGVG",b,"mL @",100*p,"%"),console.log("Base max PGVG",y,"mL @",100*v,"%"),console.log("Faisability of recipe",e);var P=[],w=this.getIngredients[this.getIngredients.findIndex(function(t){return t.id===g})],I=this.getIngredients[this.getIngredients.findIndex(function(t){return t.id===m})],N=this.getIngredients[this.getIngredients.findIndex(function(t){return t.id===d})];return e&&(this.mode.base||this.recipeIngredients.forEach(function(e){var i=t.getIngredients.findIndex(function(t){return t.id===e.id});P.push({id:e.id,name:t.getIngredients[i].name,ratio:e.ratio,quantity:e.ratio*t.recipeQuantity,price:t.getIngredients[i].price*(e.ratio*t.recipeQuantity/1e3),color:t.getIngredients[i].color,viscosity:t.getIngredients[i].viscosity})}),P.unshift({id:g,name:w.name,ratio:b/this.recipeQuantity,quantity:b,price:w.price*b/1e3,color:w.color,viscosity:w.viscosity}),P.unshift({id:m,name:I.name,ratio:y/this.recipeQuantity,quantity:y,price:I.price*y/1e3,color:I.color,viscosity:I.viscosity}),this.mode.nicotine&&P.unshift({id:d,name:N.name,ratio:r,quantity:h,price:N.price*h/1e3,color:N.color,viscosity:N.viscosity})),P},totalRatio:function(){var t=0;return this.results.forEach(function(e){t+=e.ratio}),t},totalQuantity:function(){var t=0;return this.results.forEach(function(e){t+=e.quantity}),t},totalPrice:function(){var t=0;return this.results.forEach(function(e){t+=e.price?e.price:0}),t}}),methods:n()({},i.i(r.b)([]),i.i(r.c)([]),{roundNumber:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=Math.pow(10,e);return Math.round(t*i)/i}})}},210:function(t,e,i){e=t.exports=i(169)(),e.push([t.i,"@media (min-width:40em){.results[data-v-e7f47c94]{display:-webkit-box;display:-ms-flexbox;display:flex}.results>[data-v-e7f47c94]{-ms-flex-negative:1;flex-shrink:1}}.beaker[data-v-e7f47c94]{margin:16px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;box-shadow:0 4px 0 4px #666;border-bottom-left-radius:4px;border-bottom-right-radius:4px;overflow:hidden;height:20rem}@media (min-width:40em){.beaker[data-v-e7f47c94]{height:auto;-ms-flex-preferred-size:10%;flex-basis:10%;margin-left:0}}.results-list[data-v-e7f47c94]{width:100%;font-size:.9rem}@media (min-width:40em){.results-list[data-v-e7f47c94]{width:90%}}.results-list td[data-v-e7f47c94],.results-list th[data-v-e7f47c94]{padding:16px 8px}.results-list thead[data-v-e7f47c94]{text-transform:uppercase}.results-list thead th[data-v-e7f47c94]{text-align:left}.results-list tfoot[data-v-e7f47c94]{font-weight:700}",""])},213:function(t,e,i){var o=i(210);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i(170)("54a036d5",o,!0)},216:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"results"},[t.mode.beaker?i("div",{staticClass:"beaker"},t._l(t.results,function(t,e){return i("div",{key:e,style:{backgroundColor:t.color,flexBasis:100*t.ratio+"%"}})})):t._e(),t._v(" "),t.results.length?i("table",{staticClass:"results-list"},[i("tbody",t._l(t.results,function(e,o){return i("tr",{key:o},[i("td",[i("router-link",{staticClass:"circular small",style:{backgroundColor:e.color,color:"white"},attrs:{to:{path:"/ingredient/edit/"+e.id},tag:"button"}},[t._v("\n            "+t._s(o+1)+"\n          ")])],1),t._v(" "),i("td",[t._v(t._s(e.name)+" (ID:"+t._s(e.id)+")")]),t._v(" "),i("td",[t._v(t._s(t.roundNumber(100*e.ratio))+"%")]),t._v(" "),e.quantity<1&&t.mode.drop?i("td",[t._v("\n          "+t._s(t.roundNumber(e.quantity*e.viscosity))+" "+t._s(t.$tc("drop",2))+"\n        ")]):i("td",[t._v("\n          "+t._s(t.roundNumber(e.quantity))+"mL\n        ")]),t._v(" "),t.mode.price?i("td",[t._v("\n          "+t._s(t.roundNumber(e.price,2))+t._s(t.currency)+"\n        ")]):t._e()])})),t._v(" "),i("tfoot",[i("tr",[i("td"),t._v(" "),i("td",[t._v("TOTAL ("+t._s(t.results.length)+" "+t._s(t.$tc("ingredient",t.results.length))+")")]),t._v(" "),i("td",[t._v(t._s(t.roundNumber(100*t.totalRatio))+"%")]),t._v(" "),i("td",[t._v(t._s(t.roundNumber(t.totalQuantity))+"mL")]),t._v(" "),t.mode.price?i("td",[t._v("\n          "+t._s(t.roundNumber(t.totalPrice,2))+t._s(t.currency)),i("br"),t._v("\n          ("+t._s(t.roundNumber(1e3*t.totalPrice/t.totalQuantity,2))+t._s(t.currency)+"/L)\n        ")]):t._e()])])],1):i("div",[t._v("\n    Recipe is NOT doable!\n  ")])])},staticRenderFns:[]}}});
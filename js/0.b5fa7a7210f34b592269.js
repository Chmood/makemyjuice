webpackJsonp([0,2,7,8],{194:function(t,e,i){i(214);var n=i(141)(i(208),i(217),"data-v-942096fc",null);t.exports=n.exports},195:function(t,e,i){i(215);var n=i(141)(i(209),i(218),"data-v-e7f47c94",null);t.exports=n.exports},196:function(t,e,i){i(224);var n=i(141)(i(219),i(226),"data-v-09f49878",null);t.exports=n.exports},203:function(t,e,i){var n=i(141)(i(233),i(257),null,null);t.exports=n.exports},206:function(t,e,i){"use strict";e.__esModule=!0;var n=i(5),o=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=o.default||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t}},208:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(206),o=i.n(n),s=i(142);e.default={props:["recipe","type"],components:{},data:function(){return{}},computed:o()({},i.i(s.a)(["getBases","getAromas","getAdditives"]),{ingredients:function(){return"aroma"===this.type?this.getAromas:"additive"===this.type?this.getAdditives:void 0},recipeIngredients:function(){return"aroma"===this.type?this.recipe.aromas:"additive"===this.type?this.recipe.additives:void 0},ingredientChoice:function(){return this.ingredients.map(function(t){return t.value=t.id,t.label=t.name+" ("+t.id+")",t})},ingredientsRatioSum:function(){if(0===this.recipeIngredients.length)return 0;var t=0;return this.recipeIngredients.forEach(function(e){t+=e.ratio}),t}}),methods:o()({},i.i(s.b)([]),i.i(s.c)([]),{addRecipeIngredient:function(){this.$store.commit("ADD_RECIPE_INGREDIENT",{recipe:this.recipe,type:this.type,ingredient:{id:"0",ratio:.05}})},deleteRecipeIngredient:function(t){this.$store.commit("DELETE_RECIPE_INGREDIENT",{recipe:this.recipe,type:this.type,ingredient:t})},setRecipeIngredientId:function(t,e){this.$store.commit("SET_RECIPE_INGREDIENT_ID",{recipe:this.recipe,type:this.type,id:t,ingredientId:e})},setRecipeIngredientRatio:function(t,e){this.$store.commit("SET_RECIPE_INGREDIENT_RATIO",{recipe:this.recipe,type:this.type,id:t,ingredientRatio:parseFloat(e.target.value)/100})}})}},209:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(206),o=i.n(n),s=i(142);e.default={data:function(){return{}},props:["recipe"],computed:o()({},i.i(s.a)(["getIngredients","getBases","getAromas","getAdditives","mode","favorite","currency"]),{recipeIngredients:function(){return this.recipe.aromas.concat(this.recipe.additives)},recipeQuantity:function(){return this.favorite.favoriteQuantity?this.favorite.quantity:this.recipe.quantity},recipePGVGRatio:function(){return this.favorite.favoritePGVGRatio?this.favorite.PGVGRatio:this.recipe.PGVGRatio},recipeNicotine:function(){return this.favorite.favoriteNicotine?this.favorite.nicotine:this.recipe.nicotine},results:function(){var t=this,e=!0,i=1,n=0,o=0,s=0,a=0,r=0,c=void 0,u=void 0,l=void 0,d=void 0,p=0,v=0,m=1,f=0,_=void 0,h=void 0,g=void 0,b=void 0;console.warn("========================================="),console.log("ADDITIVES---------------------------------"),!this.mode.base&&this.recipe.additives.length>0&&this.recipe.additives.forEach(function(t){i-=t.ratio,o+=t.ratio}),console.log("Remaining base ratio after additives",i),console.log("AROMAS------------------------------------"),!this.mode.base&&this.recipe.aromas.length>0&&(this.recipe.aromas.forEach(function(e){var o=t.getIngredients.findIndex(function(t){return t.id===e.id}),s=t.getIngredients[o];i-=e.ratio,n+=e.ratio,a+=e.ratio*t.recipeQuantity,r+=s.PGVGRatio*e.ratio*t.recipeQuantity}),u=this.recipeQuantity*i,c=r/a,console.log("Total aromas quantity",a,"mL"),console.log("Total aromas PG/VG ratio",100*c,"%"),o>1||n>1?(o>1&&(console.warn("Too much additives!"),e=!1),n>1&&(console.warn("Too much aromas!"),e=!1)):n+o>1&&(console.warn("Too much aromas and/or additives!"),e=!1),l=(this.recipePGVGRatio*(a+u)-a*c)/u,l<0?(console.warn("Too much VG!"),e=!1):l>1&&(console.warn("Too much PG!"),e=!1),console.log("Total bases quantity",u,"mL"),console.log("Total bases PG/VG ratio",100*l,"%")),console.log("Remaining base ratio after aromas",i),console.log("NICOTINE----------------------------------"),this.mode.nicotine&&this.recipeNicotine&&this.recipeNicotine>0&&(console.log("Desired nicotine",this.recipeNicotine,"mg/mL"),this.getBases.forEach(function(t){t.nicotine>p&&(p=t.nicotine,d=t.id)}),0===p?(console.warn("No nicotine base available!"),e=!1):p<this.recipeNicotine&&(console.warn("Nicotine base not strong enought!"),e=!1),console.log("Strongest nicotine base ID",d,p,"mg/mL"),v=this.recipeQuantity*this.recipeNicotine/p,s=v/this.recipeQuantity,i-=s,console.log("Nicotine base quantity",v,"mL"),console.log("Nicotine base PG/VG ratio",100*this.getBases[d].PGVGRatio,"%")),console.log("Remaining base ratio after nicotine",i),console.log("BASES-------------------------------------");var y=a+v,R=void 0;R=this.mode.nicotine&&!this.mode.base&&this.recipe.aromas.length>0?(a*c+v*this.getBases[d].PGVGRatio)/y:!this.mode.nicotine&&this.mode.base?0:this.mode.nicotine?v*this.getBases[d].PGVGRatio/y:a*c/y,console.log("Submix",y,"mL @",100*R,"% PG/VG");var G=this.recipeQuantity*i,I=(this.recipePGVGRatio*(y+G)-y*R)/G;I<0?(console.warn("Too much VG!"),e=!1):I>1&&(console.warn("Too much PG!"),e=!1),console.log("Basemix",G,"mL @",100*I,"% PG/VG"),this.getBases.forEach(function(t){0===t.nicotine&&(t.PGVGRatio<m&&(m=t.PGVGRatio,_=t.id),t.PGVGRatio>f&&(f=t.PGVGRatio,h=t.id))}),console.log("Extreme bases from",100*m,"to",100*f,"%"),I<m&&(console.warn("Too much VG in your base(s)!"),e=!1),I>f&&(console.warn("Too much PG in your base(s)!"),e=!1),g=G*(I-f)/(m-f),b=G-g,console.log("Base min PGVG",g,"mL @",100*m,"%"),console.log("Base max PGVG",b,"mL @",100*f,"%"),console.log("Faisability of recipe",e);var E=[],x=this.getIngredients[this.getIngredients.findIndex(function(t){return t.id===_})],C=this.getIngredients[this.getIngredients.findIndex(function(t){return t.id===h})],P=this.getIngredients[this.getIngredients.findIndex(function(t){return t.id===d})];return e&&(this.mode.base||this.recipeIngredients.forEach(function(e){var i=t.getIngredients.findIndex(function(t){return t.id===e.id});E.push({id:e.id,name:t.getIngredients[i].name,ratio:e.ratio,quantity:e.ratio*t.recipeQuantity,price:t.getIngredients[i].price*(e.ratio*t.recipeQuantity/1e3),color:t.getIngredients[i].color,viscosity:t.getIngredients[i].viscosity})}),E.unshift({id:_,name:x.name,ratio:g/this.recipeQuantity,quantity:g,price:x.price*g/1e3,color:x.color,viscosity:x.viscosity}),E.unshift({id:h,name:C.name,ratio:b/this.recipeQuantity,quantity:b,price:C.price*b/1e3,color:C.color,viscosity:C.viscosity}),this.mode.nicotine&&E.unshift({id:d,name:P.name,ratio:s,quantity:v,price:P.price*v/1e3,color:P.color,viscosity:P.viscosity})),E},totalRatio:function(){var t=0;return this.results.forEach(function(e){t+=e.ratio}),t},totalQuantity:function(){var t=0;return this.results.forEach(function(e){t+=e.quantity}),t},totalPrice:function(){var t=0;return this.results.forEach(function(e){t+=e.price?e.price:0}),t}}),methods:o()({},i.i(s.b)([]),i.i(s.c)([]),{roundNumber:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=Math.pow(10,e);return Math.round(t*i)/i}})}},211:function(t,e,i){e=t.exports=i(191)(),e.push([t.i,"",""])},212:function(t,e,i){e=t.exports=i(191)(),e.push([t.i,"@media (min-width:40em){.results[data-v-e7f47c94]{display:-webkit-box;display:-ms-flexbox;display:flex}.results>[data-v-e7f47c94]{-ms-flex-negative:1;flex-shrink:1}}.beaker[data-v-e7f47c94]{margin:16px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;box-shadow:0 4px 0 4px #666;border-bottom-left-radius:4px;border-bottom-right-radius:4px;overflow:hidden;height:20rem}@media (min-width:40em){.beaker[data-v-e7f47c94]{height:auto;-ms-flex-preferred-size:10%;flex-basis:10%;margin-left:0}}.beaker>[data-v-e7f47c94]{-webkit-transition:all .4s;transition:all .4s}.results-list[data-v-e7f47c94]{width:100%;font-size:.9rem}@media (min-width:40em){.results-list[data-v-e7f47c94]{width:90%}}.results-list td[data-v-e7f47c94],.results-list th[data-v-e7f47c94]{padding:16px 8px}.results-list thead[data-v-e7f47c94]{text-transform:uppercase}.results-list thead th[data-v-e7f47c94]{text-align:left}.results-list tfoot[data-v-e7f47c94]{font-weight:700}",""])},214:function(t,e,i){var n=i(211);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(192)("bf298dd6",n,!0)},215:function(t,e,i){var n=i(212);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(192)("54a036d5",n,!0)},217:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",[t._l(t.recipeIngredients,function(e,n){return i("div",{key:e.id,staticClass:"input-item"},[i("div",{staticClass:"input-item__label"},[i("q-select",{attrs:{type:"list",value:e.id,options:t.ingredientChoice},on:{input:function(e){t.setRecipeIngredientId(n,e)}}})],1),t._v(" "),i("div",{staticClass:"input-item__input"},[i("input",{attrs:{type:"number"},domProps:{value:100*e.ratio},on:{input:function(e){t.setRecipeIngredientRatio(n,e)}}})]),t._v(" "),t._m(0,!0),t._v(" "),i("div",{staticClass:"input-item__extra"},[i("button",{staticClass:"light circular small",on:{click:function(i){t.deleteRecipeIngredient(e)}}},[i("i",[t._v("clear")])])])])}),t._v(" "),i("div",{staticClass:"input-item"},[i("div",{staticClass:"input-item__label"},[i("span",[t._v("\n        "+t._s(t.recipeIngredients.length)+"\n        "+t._s(t.$tc(t.type,t.recipeIngredients.length))+"\n      ")])]),t._v(" "),i("div",{staticClass:"input-item__input"},[i("span",[t._v("\n        "+t._s(Math.round(100*t.ingredientsRatioSum))+"\n      ")])]),t._v(" "),t._m(1),t._v(" "),i("div",{staticClass:"input-item__extra"},[i("button",{staticClass:"primary circular small",on:{click:function(e){t.addRecipeIngredient()}}},[i("i",[t._v("add")])])])])],2)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"input-item__unit"},[i("span",{staticClass:"input-unit"},[t._v(" %")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"input-item__unit"},[i("span",{staticClass:"input-unit"},[t._v(" %")])])}]}},218:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"results"},[t.mode.beaker?i("div",{staticClass:"beaker"},t._l(t.results,function(t,e){return i("div",{key:e,style:{backgroundColor:t.color,flexBasis:100*t.ratio+"%"}})})):t._e(),t._v(" "),t.results.length?i("table",{staticClass:"results-list"},[i("tbody",t._l(t.results,function(e,n){return i("tr",{key:n},[i("td",[i("router-link",{staticClass:"circular small",style:{backgroundColor:e.color,color:"white"},attrs:{to:{path:"/ingredient/edit/"+e.id},tag:"button"}},[t._v("\n            "+t._s(n+1)+"\n          ")])],1),t._v(" "),i("td",[t._v(t._s(e.name)+" (ID:"+t._s(e.id)+")")]),t._v(" "),i("td",[t._v(t._s(t.roundNumber(100*e.ratio))+"%")]),t._v(" "),e.quantity<1&&t.mode.drop?i("td",[t._v("\n          "+t._s(t.roundNumber(e.quantity*e.viscosity))+" "+t._s(t.$tc("drop",2))+"\n        ")]):i("td",[t._v("\n          "+t._s(t.roundNumber(e.quantity))+"mL\n        ")]),t._v(" "),t.mode.price?i("td",[t._v("\n          "+t._s(t.roundNumber(e.price,2))+t._s(t.currency)+"\n        ")]):t._e()])})),t._v(" "),i("tfoot",[i("tr",[i("td"),t._v(" "),i("td",[t._v("TOTAL ("+t._s(t.results.length)+" "+t._s(t.$tc("ingredient",t.results.length))+")")]),t._v(" "),i("td",[t._v(t._s(t.roundNumber(100*t.totalRatio))+"%")]),t._v(" "),i("td",[t._v(t._s(t.roundNumber(t.totalQuantity))+"mL")]),t._v(" "),t.mode.price?i("td",[t._v("\n          "+t._s(t.roundNumber(t.totalPrice,2))+t._s(t.currency)),i("br"),t._v("\n          ("+t._s(t.roundNumber(1e3*t.totalPrice/t.totalQuantity,2))+t._s(t.currency)+"/L)\n        ")]):t._e()])])],1):i("div",[t._v("\n    Recipe is NOT doable!\n  ")])])},staticRenderFns:[]}},219:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(206),o=i.n(n),s=i(142),a=i(194),r=i.n(a),c=i(195),u=i.n(c);e.default={props:["recipe"],components:{RecipeIngredients:r.a,RecipeResults:u.a},data:function(){return{getCurrentRecipeId:0}},computed:o()({},i.i(s.a)(["mode","favorite"]),{name:{get:function(){return this.recipe.name},set:function(t){this.$store.commit("SET_RECIPE_NAME",{recipe:this.recipe,value:t})}},description:{get:function(){return this.recipe.description},set:function(t){this.$store.commit("SET_RECIPE_DESCRIPTION",{recipe:this.recipe,value:t})}},quantity:{get:function(){return this.recipe.quantity},set:function(t){this.$store.commit("SET_RECIPE_QUANTITY",{recipe:this.recipe,value:t})}},PGVGRatio:{get:function(){return 100*this.recipe.PGVGRatio},set:function(t){this.$store.commit("SET_RECIPE_PGVGRATIO",{recipe:this.recipe,value:t/100})}},nicotine:{get:function(){return this.recipe.nicotine},set:function(t){this.$store.commit("SET_RECIPE_NICOTINE",{recipe:this.recipe,value:t})}},favoriteQuantity:{get:function(){return this.favorite.favoriteQuantity},set:function(t){this.$store.commit("SET_FAVORITE",{favorite:"favoriteQuantity",value:t})}},favoritePGVGRatio:{get:function(){return this.favorite.favoritePGVGRatio},set:function(t){this.$store.commit("SET_FAVORITE",{favorite:"favoritePGVGRatio",value:t})}},favoriteNicotine:{get:function(){return this.favorite.favoriteNicotine},set:function(t){this.$store.commit("SET_FAVORITE",{favorite:"favoriteNicotine",value:t})}}}),methods:o()({},i.i(s.b)([]),i.i(s.c)([]))}},222:function(t,e,i){e=t.exports=i(191)(),e.push([t.i,"@media (min-width:80em){.calculator-layout[data-v-09f49878]{display:-webkit-box;display:-ms-flexbox;display:flex}.calculator-layout>[data-v-09f49878]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.calculator-layout>.section--recipe[data-v-09f49878]{margin-right:32px}}.recipe-input-name[data-v-09f49878]{margin-bottom:8px;color:#333;font-size:1.5rem}.recipe-input-description[data-v-09f49878]{color:#888;font-size:1.2rem;font-style:italic}.results[data-v-09f49878]{background-color:rgba(0,0,0,.33)}",""])},224:function(t,e,i){var n=i(222);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(192)("64eac265",n,!0)},226:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"calculator-layout"},[i("section",{staticClass:"section section--recipe"},[i("h3",{staticClass:"page-subtitle"},[t._v(t._s(t.$tc("recipe",1)))]),t._v(" "),i("section",{staticClass:"input-items"},[i("button",{staticClass:"circular dark small",style:{color:t.recipe.starred?"gold":"white"},on:{click:function(e){t.$store.commit("TOGGLE_RECIPE_STAR",t.recipe)}}},[i("i",[t._v("star")])]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"full-width recipe-input-name",domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"full-width recipe-input-description",domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}})]),t._v(" "),i("h4",[t._v(" "+t._s(t.$tc("base",1))+" ")]),t._v(" "),i("section",{staticClass:"input-items"},[i("div",{staticClass:"input-item"},[i("div",{staticClass:"input-item__label"},[i("label",{attrs:{for:""}},[t._v(t._s(t.$t("quantity")))])]),t._v(" "),i("div",{staticClass:"input-item__input"},[t.favoriteQuantity?[i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.favorite.quantity,expression:"favorite.quantity",modifiers:{number:!0}}],attrs:{type:"number",disabled:"true"},domProps:{value:t.favorite.quantity},on:{input:function(e){e.target.composing||(t.favorite.quantity=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})]:[i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.quantity,expression:"quantity",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.quantity},on:{input:function(e){e.target.composing||(t.quantity=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})]],2),t._v(" "),t._m(0),t._v(" "),i("div",{staticClass:"input-item__extra"},[i("q-toggle",{staticClass:"primary",model:{value:t.favoriteQuantity,callback:function(e){t.favoriteQuantity=e},expression:"favoriteQuantity"}})],1)]),t._v(" "),i("div",{staticClass:"input-item"},[i("div",{staticClass:"input-item__label"},[i("label",{attrs:{for:""}},[t._v(t._s(t.$t("PGVGRatio")))])]),t._v(" "),i("div",{staticClass:"input-item__input"},[t.favoritePGVGRatio?[i("input",{attrs:{type:"number",disabled:"true"},domProps:{value:Math.round(100*t.favorite.PGVGRatio)}})]:[i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.PGVGRatio,expression:"PGVGRatio",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.PGVGRatio},on:{input:function(e){e.target.composing||(t.PGVGRatio=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})]],2),t._v(" "),t._m(1),t._v(" "),i("div",{staticClass:"input-item__extra"},[i("q-toggle",{staticClass:"primary",model:{value:t.favoritePGVGRatio,callback:function(e){t.favoritePGVGRatio=e},expression:"favoritePGVGRatio"}})],1)]),t._v(" "),t.mode.nicotine?i("div",{staticClass:"input-item"},[i("div",{staticClass:"input-item__label"},[i("label",{attrs:{for:""}},[t._v(t._s(t.$t("nicotine")))])]),t._v(" "),i("div",{staticClass:"input-item__input"},[t.favoriteNicotine?[i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.favorite.nicotine,expression:"favorite.nicotine",modifiers:{number:!0}}],attrs:{type:"number",disabled:"true"},domProps:{value:t.favorite.nicotine},on:{input:function(e){e.target.composing||(t.favorite.nicotine=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})]:[i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.nicotine,expression:"nicotine",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.nicotine},on:{input:function(e){e.target.composing||(t.nicotine=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})]],2),t._v(" "),t._m(2),t._v(" "),i("div",{staticClass:"input-item__extra"},[i("q-toggle",{staticClass:"primary",model:{value:t.favoriteNicotine,callback:function(e){t.favoriteNicotine=e},expression:"favoriteNicotine"}})],1)]):t._e()]),t._v(" "),t.mode.base?t._e():[i("h4",[t._v(" "+t._s(t.$tc("aroma",2))+" ")]),t._v(" "),i("section",{staticClass:"input-items"},[i("RecipeIngredients",{attrs:{recipe:t.recipe,type:"aroma"}})],1),t._v(" "),i("h4",[t._v(" "+t._s(t.$tc("additive",2))+" ")]),t._v(" "),i("section",{staticClass:"input-items"},[i("RecipeIngredients",{attrs:{recipe:t.recipe,type:"additive"}})],1)]],2),t._v(" "),i("section",[i("h3",{staticClass:"page-subtitle"},[t._v(t._s(t.$tc("ingredient",2)))]),t._v(" "),i("RecipeResults",{attrs:{recipe:t.recipe}})],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"input-item__unit"},[i("span",{staticClass:"input-unit"},[t._v(" mL")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"input-item__unit"},[i("span",{staticClass:"input-unit"},[t._v(" %")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"input-item__unit"},[i("span",{staticClass:"input-unit"},[t._v(" mg/mL")])])}]}},233:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(206),o=i.n(n),s=i(142),a=i(196),r=i.n(a);e.default={components:{Calculator:r.a},data:function(){return{recipe:{}}},computed:o()({},i.i(s.a)(["getCurrentRecipe"])),methods:o()({},i.i(s.b)([]),i.i(s.c)([]),{navToDefaultRecipe:function(){this.$store.commit("SET_CURRENT_RECIPE_ID","0"),this.$router.replace("/recipe/0")}}),created:function(){this.$route.params.id?(console.log("this.$route.params.id",this.$route.params.id),this.$store.commit("SET_CURRENT_RECIPE_ID",this.$route.params.id),void 0!==this.getCurrentRecipe?console.log("we got a match!"):(console.log("no match, zero id"),this.navToDefaultRecipe())):(console.log("id param is undefined"),this.navToDefaultRecipe()),console.log("RECIPE",this.recipe),this.recipe=this.getCurrentRecipe}}},257:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{},[i("h2",{staticClass:"page-title"},[t._v(t._s(t.$t("calculator")))]),t._v(" "),i("Calculator",{attrs:{recipe:t.recipe}})],1)},staticRenderFns:[]}}});
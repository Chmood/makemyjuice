webpackJsonp([9],{193:function(t,i,e){e(213);var n=e(141)(e(207),e(216),"data-v-3306bb13",null);t.exports=n.exports},206:function(t,i,e){"use strict";i.__esModule=!0;var n=e(5),a=function(t){return t&&t.__esModule?t:{default:t}}(n);i.default=a.default||function(t){for(var i=1;i<arguments.length;i++){var e=arguments[i];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t}},207:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e(206),a=e.n(n),s=e(142),r=e(10);e.n(r);i.default={data:function(){return{}},props:["ingredient"],computed:a()({},e.i(s.a)(["mode","currency"])),methods:a()({},e.i(s.c)(["TOGGLE_INGREDIENT","DELETE_INGREDIENT"]),{confirmDelete:function(t){var i=this;r.Dialog.create({title:"Delete this ingredient?",ingredient:this.$t("areYouSure"),buttons:[{label:this.$t("cancel"),handler:function(){console.log("Ingredient deletion cancelled")}},{label:this.$t("delete"),handler:function(){r.Toast.create.positive("Ingredient has been deleted"),i.$store.commit("DELETE_INGREDIENT",{ingredient:t})}}]})}})}},210:function(t,i,e){i=t.exports=e(191)(),i.push([t.i,".ingredient-item[data-v-3306bb13]{margin-bottom:16px;border:1px solid #222;background-color:#fff;color:#333;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.ingredient-item__body[data-v-3306bb13]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;padding:16px}.ingredient-item__foot[data-v-3306bb13]{padding:16px;padding-top:0;text-align:right}.ingredient-item__foot button[data-v-3306bb13]{margin-left:16px}.ingredient-item-title[data-v-3306bb13]{margin:0;padding:8px 16px;color:#fff}.ingredient-item-description[data-v-3306bb13]{margin-bottom:16px}.ingredient-item-stat[data-v-3306bb13]{margin-bottom:8px;display:-webkit-box;display:-ms-flexbox;display:flex}.ingredient-item-stat>span[data-v-3306bb13]:first-child{text-transform:capitalize;font-style:italic;color:rgba(0,0,0,.54)}.ingredient-item-stat>span[data-v-3306bb13]:last-child{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;text-align:right}.ingredient-item-stat>span:last-child>span[data-v-3306bb13]{font-weight:700}",""])},213:function(t,i,e){var n=e(210);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e(192)("000f90a5",n,!0)},216:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("article",{staticClass:"ingredient-item",class:["ingredient-item--"+t.ingredient.type,t.ingredient.active?"ingredient-item--active":""]},[e("div",{staticClass:"ingredient-item__head"},[e("h4",{staticClass:"ingredient-item-title",style:{backgroundColor:t.ingredient.color}},[t._v(t._s(t.ingredient.name))])]),t._v(" "),e("div",{staticClass:"ingredient-item__body"},[e("div",{staticClass:"ingredient-item-description"},[t._v(t._s(t.ingredient.description))]),t._v(" "),e("div",{staticClass:"ingredient-item-stats"},["additive"!==t.ingredient.type?e("div",{staticClass:"ingredient-item-stat"},[e("span",[t._v(t._s(t.$t("PGVGRatio")))]),e("span",[e("span",[t._v(t._s(Math.round(100*t.ingredient.PGVGRatio))+"/"+t._s(Math.round(100*(1-t.ingredient.PGVGRatio))))]),t._v(" %")])]):t._e(),t._v(" "),t.ingredient.nicotine&&t.mode.nicotine?e("div",{staticClass:"ingredient-item-stat"},[e("span",[t._v(t._s(t.$t("nicotine")))]),e("span",[e("span",[t._v(t._s(t.ingredient.nicotine))]),t._v(" mg/mL")])]):t._e(),t._v(" "),t.ingredient.price&&t.mode.price?e("div",{staticClass:"ingredient-item-stat"},[e("span",[t._v(t._s(t.$t("price")))]),e("span",[e("span",[t._v(t._s(t.ingredient.price))]),t._v(" "+t._s(t.currency)+"/L")])]):t._e(),t._v(" "),t.ingredient.viscosity&&t.mode.drop?e("div",{staticClass:"ingredient-item-stat"},[e("span",[t._v(t._s(t.$t("viscosity")))]),e("span",[e("span",[t._v(t._s(t.ingredient.viscosity))]),t._v(" "+t._s(t.$tc("drop",2))+"/mL")])]):t._e()])]),t._v(" "),e("div",{staticClass:"ingredient-item__foot"},[e("button",{staticClass:"circular dark small",on:{click:function(i){t.TOGGLE_INGREDIENT({ingredient:t.ingredient})}}},[e("i",[t._v("book")])]),t._v(" "),e("button",{staticClass:"circular light small",on:{click:function(i){t.confirmDelete(t.ingredient)}}},[e("i",[t._v("clear")])]),t._v(" "),e("router-link",{staticClass:"circular secondary small",attrs:{to:{path:"/ingredient/edit/"+t.ingredient.id},tag:"button"}},[e("i",[t._v("edit")])])],1)])},staticRenderFns:[]}}});
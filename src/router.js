import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
  return () => System.import(`components/${component}.vue`)
}

export default new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */
  // mode: 'history', // No more # in the URL

  routes: [
    {
      path: '/', // Default route
      component: load('Index'),
      children: [ // Sub-routes
        { path: '', component: load('pages/Recipe') },  // default subroute
        { path: 'recipe', component: load('pages/Recipe'), props: true },
        { path: 'recipe/:id', component: load('pages/Recipe'), props: true },
        { path: 'recipes', component: load('pages/Recipes') },
        { path: 'ingredient/:mode/:id', component: load('pages/Ingredient'), props: true },
        { path: 'ingredients', component: load('pages/Ingredients') },
        { path: 'settings', component: load('pages/Settings') }
      ]
    },
    // { path: '/foo', component: load('Foo') }, // example simple route
    { path: '*', component: load('Error404') } // Not found
  ]
})

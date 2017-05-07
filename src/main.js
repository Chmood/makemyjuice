// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
// require(`quasar/dist/quasar.${__THEME}.css`)
// ==============================

import Vue from 'vue'
import Quasar from 'quasar'
import router from './router'

import store from './store/index'
import VueI18n from 'vue-i18n'
import messages from 'i18n'
// i18n

Vue.use(Quasar) // Install Quasar Framework
Vue.use(VueI18n) // Use internationalization

// Vue.config.lang = 'fr'

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'fr', // set default locale
  messages // set locale messages
})

Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#q-app',
    store, // inject store to all children
    router, // inject router to all children
    i18n, // inject i18n to all children
    render: h => h(require('./App'))
  })
})

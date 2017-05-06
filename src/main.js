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

// i18n
const messages = {
  en: {
    hello: 'hellooo',
    language: 'language',

    quantity: 'quantity',
    ingredient: 'ingredient | ingredients',
    base: 'base | bases',
    aroma: 'aroma | aromas',
    additive: 'additive | additives',
    price: 'price',
    viscosity: 'viscosity',
    ratio: 'ratio',
    PGVGRatio: 'PG/VG ratio',
    nicotine: 'nicotine',

    all: 'all',
    active: 'active',
    inactive: 'inactive',

    cancel: 'cancel',
    delete: 'delete',
    activate: 'activate',
    desactivate: 'desactivate',
    add: 'add',
    edit: 'edit'
  },
  fr: {
    hello: 'coucou',
    language: 'langue',

    quantity: 'quantité',
    ingredient: 'ingrédient | ingrédients',
    base: 'base | bases',
    aroma: 'arôme | arômes',
    additive: 'additif | additifs',
    price: 'prix',
    viscosity: 'viscosité',
    ratio: 'rapport',
    PGVGRatio: 'rapport PG/VG',
    nicotine: 'nicotine',

    all: 'tous',
    active: 'actifs',
    inactive: 'inactifs',

    cancel: 'annuler',
    delete: 'effacer',
    activate: 'activer',
    desactivate: 'désactiver',
    add: 'ajouter',
    edit: 'modifier'
  }
}

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

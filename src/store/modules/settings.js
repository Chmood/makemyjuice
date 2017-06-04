import * as types from '../mutation-types'

// Default state
const stateDefault = {
  language: 'en',
  currency: '$',
  mode: {
    nicotine: true,
    base: false,
    price: true,
    drop: true,
    beaker: true,
    favorite: false
  },
  favorite: {
    quantity: 100,
    favoriteQuantity: false,
    PGVGRatio: 0.4,
    favoritePGVGRatio: false,
    nicotine: 8,
    favoriteNicotine: false
  }
}

// Initial state
const state = Object.assign({}, stateDefault)

// Mutations
const mutations = {
  [types.RESET_SETTINGS] (state) {
    state.language = stateDefault.language
    state.currency = stateDefault.currency
    state.mode = stateDefault.mode
    state.favorite = stateDefault.favorite
  },
  [types.SET_LANGUAGE] (state, lang) { state.language = lang },
  [types.SET_CURRENCY] (state, currency) { state.currency = currency },
  [types.SET_MODE] (state, {mode, isActive}) { state.mode[mode] = isActive },
  [types.SET_FAVORITE] (state, {favorite, value}) { state.favorite[favorite] = value }
}

// Getters
const getters = {
  language: state => state.language,
  currency: state => state.currency,
  mode: state => state.mode,
  favorite: state => state.favorite
}

// Actions
const actions = {}

export default {
  state,
  getters,
  actions,
  mutations
}

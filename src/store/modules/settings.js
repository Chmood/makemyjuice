import * as types from '../mutation-types'

// Initial state
const state = {
  language: 'en',
  currency: '$',
  mode: {
    nicotine: true,
    base: false,
    price: true,
    drop: true,
    beaker: true
  }
}

// Mutations
const mutations = {
  [types.SET_LANGUAGE] (state, lang) { state.language = lang },
  [types.SET_CURRENCY] (state, currency) { state.currency = currency },
  [types.SET_MODE] (state, {mode, isActive}) { state.mode[mode] = isActive }
}

// Getters
const getters = {
  language: state => state.language,
  currency: state => state.currency,
  mode: state => state.mode
}

// Actions
const actions = {}

export default {
  state,
  getters,
  actions,
  mutations
}

import * as types from '../mutation-types'

// Initial state
const state = {
  language: 'en',
  currency: '$'
}

// Mutations
const mutations = {
  [types.SET_LANGUAGE] (state, lang) { state.language = lang },
  [types.SET_CURRENCY] (state, currency) { state.currency = currency }
}

// Getters
const getters = {
  language: state => state.language
}

// Actions
const actions = {}

export default {
  state,
  getters,
  actions,
  mutations
}

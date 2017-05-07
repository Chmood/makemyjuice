import * as types from '../mutation-types'

// Initial state
const state = {
  ingredients: [
    {id: '0', active: true, type: 'base', name: 'Base 0mg PG100%', description: 'Zero nicotine basis', price: 10, viscosity: 25, PGVGRatio: 1.0, nicotine: 0},
    {id: '1', active: true, type: 'base', name: 'Base 20mg PG50% VG50%', description: 'Half-half, strong nicotine', price: 10, viscosity: 15, PGVGRatio: 0.5, nicotine: 20},
    {id: '2', active: true, type: 'aroma', name: 'Lemon', description: 'Very mild italian lime', price: 100, viscosity: 25, PGVGRatio: 1.0},
    {id: '3', active: true, type: 'aroma', name: 'Vanilla', description: 'My favourite custard aroma', price: 100, viscosity: 25, PGVGRatio: 1.0},
    {id: '5', active: true, type: 'aroma', name: 'Mint', description: 'Just a fresh mint!', price: 100, viscosity: 25, PGVGRatio: 1.0},
    {id: '4', active: true, type: 'additive', name: 'Water', description: 'Pure water', price: 0, viscosity: 35},
    {id: '6', active: true, type: 'additive', name: 'Alcohol', description: 'Non-modified 90° alcohol', price: 0, viscosity: 35}
  ]
}

// Mutations
const mutations = {
  [types.DELETE_INGREDIENT] (state, { ingredient }) {
    state.ingredients.splice(state.ingredients.indexOf(ingredient), 1)
  },
  [types.TOGGLE_INGREDIENT] (state, { ingredient }) {
    ingredient.active = !ingredient.active
  },
  [types.TOGGLE_ALL_INGREDIENTS] (state, { active }) {
    state.ingredients.forEach((ingredient) => {
      ingredient.active = active
    })
  },
  [types.FETCH_INGREDIENTS] (state, { ingredients }) {
    state.ingredients = ingredients
  }
}

// Getters
const getters = {
  getIngredients: state => state.ingredients,
  getBases: state => state.ingredients.filter(
    ingredient => ingredient.type === 'base' && ingredient.active
  ),
  getAromas: state => state.ingredients.filter(
    ingredient => ingredient.type === 'aroma' && ingredient.active
  ),
  getAdditives: state => state.ingredients.filter(
    ingredient => ingredient.type === 'additive' && ingredient.active
  )
}

// Actions
const actions = {
}

export default {
  state,
  getters,
  actions,
  mutations
}

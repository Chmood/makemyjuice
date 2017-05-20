import * as types from '../mutation-types'

// Initial state
const state = {
  name: 'My Recipe',
  quantity: 50,
  PGVGRatio: 0.5,
  nicotine: 6,
  aromas: [
    {id: '2', ratio: 0.05},
    {id: '3', ratio: 0.02}
  ],
  additives: [
    {id: '4', ratio: 0.01}
  ]
}

// Mutations
const mutations = {
  [types.SET_RECIPE_NAME] (state, value) {
    state.name = value
  },
  [types.SET_RECIPE_QUANTITY] (state, value) {
    state.quantity = parseFloat(value)
  },
  [types.SET_RECIPE_PGVGRATIO] (state, value) {
    state.PGVGRatio = parseFloat(value)
  },
  [types.SET_RECIPE_NICOTINE] (state, value) {
    state.nicotine = parseFloat(value)
  },

  [types.ADD_RECIPE_INGREDIENT] (state, {type, ingredient}) {
    if (type === 'aroma') {
      state.aromas.push(ingredient)
    }
    else if (type === 'additive') {
      state.additives.push(ingredient)
    }
  },
  [types.DELETE_RECIPE_INGREDIENT] (state, { type, ingredient }) {
    if (type === 'aroma') {
      state.aromas.splice(state.aromas.indexOf(ingredient), 1)
    }
    else if (type === 'additive') {
      state.additives.splice(state.additives.indexOf(ingredient), 1)
    }
  },
  [types.SET_RECIPE_INGREDIENT_ID] (state, {type, id, ingredientId}) {
    // id: the id of the recipe ingredient to be modified
    // ingredientId: the new ingredient id
    if (type === 'aroma') {
      state.aromas[id].id = ingredientId
    }
    else if (type === 'additive') {
      state.additives[id].id = ingredientId
    }
  },
  [types.SET_RECIPE_INGREDIENT_RATIO] (state, {type, id, ingredientRatio}) {
    // id: the id of the recipe ingredient to be modified
    // ingredientRatio: the new ingredient ratio
    if (type === 'aroma') {
      state.aromas[id].ratio = parseFloat(ingredientRatio)
    }
    else if (type === 'additive') {
      state.additives[id].ratio = parseFloat(ingredientRatio)
    }
  }
}

// Getters
const getters = {
  getRecipeName: state => state.name,
  getRecipeQuantity: state => state.quantity,
  getRecipePGVGRatio: state => state.PGVGRatio,
  getRecipeNicotine: state => state.nicotine,
  getRecipeAromas: state => state.aromas,
  getRecipeAdditives: state => state.additives
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

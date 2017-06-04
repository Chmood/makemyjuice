import * as types from '../mutation-types'

// Initial state
const state = {
  currentRecipeId: '0',
  recipes: [
    {
      id: '0',
      starred: true,
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
    },
    {
      id: '2',
      starred: false,
      name: 'My Recipe #2',
      quantity: 50,
      PGVGRatio: 0.5,
      nicotine: 6,
      aromas: [
        {id: '3', ratio: 0.02}
      ],
      additives: [
      ]
    }
  ]
}

// Mutations
const mutations = {
  [types.DELETE_RECIPE] (state, recipe) {
    state.recipes.splice(state.recipes.indexOf(recipe), 1)
  },
  [types.SET_CURRENT_RECIPE_ID] (state, value) {
    state.currentRecipeId = value
  },
  [types.SET_RECIPE_NAME] (state, {recipe, value}) {
    recipe.name = value
  },
  [types.SET_RECIPE_QUANTITY] (state, {recipe, value}) {
    recipe.quantity = parseFloat(value)
  },
  [types.SET_RECIPE_PGVGRATIO] (state, {recipe, value}) {
    recipe.PGVGRatio = parseFloat(value)
  },
  [types.SET_RECIPE_NICOTINE] (state, {recipe, value}) {
    recipe.nicotine = parseFloat(value)
  },

  [types.ADD_RECIPE_INGREDIENT] (state, {recipe, type, ingredient}) {
    if (type === 'aroma') {
      recipe.aromas.push(ingredient)
    }
    else if (type === 'additive') {
      recipe.additives.push(ingredient)
    }
  },
  [types.DELETE_RECIPE_INGREDIENT] (state, {recipe, type, ingredient}) {
    if (type === 'aroma') {
      recipe.aromas.splice(recipe.aromas.indexOf(ingredient), 1)
    }
    else if (type === 'additive') {
      recipe.additives.splice(recipe.additives.indexOf(ingredient), 1)
    }
  },
  [types.SET_RECIPE_INGREDIENT_ID] (state, {recipe, type, id, ingredientId}) {
    // id: the id of the recipe ingredient to be modified
    // ingredientId: the new ingredient id
    if (type === 'aroma') {
      recipe.aromas[id].id = ingredientId
    }
    else if (type === 'additive') {
      recipe.additives[id].id = ingredientId
    }
  },
  [types.SET_RECIPE_INGREDIENT_RATIO] (state, {recipe, type, id, ingredientRatio}) {
    // id: the id of the recipe ingredient to be modified
    // ingredientRatio: the new ingredient ratio
    if (type === 'aroma') {
      recipe.aromas[id].ratio = parseFloat(ingredientRatio)
    }
    else if (type === 'additive') {
      recipe.additives[id].ratio = parseFloat(ingredientRatio)
    }
  },
  [types.TOGGLE_RECIPE_STAR] (state, recipe) {
    recipe.starred = !recipe.starred
  }
}

// Getters
const getters = {
  getCurrentRecipeId: state => state.currentRecipeId,
  getRecipes: state => state.recipes,
  getCurrentRecipe: state => state.recipes[state.recipes.findIndex(i => i.id === state.currentRecipeId)]
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

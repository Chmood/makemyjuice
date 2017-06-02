<template>
  <section>

    <div
      v-for="(ingredient, index) in recipeIngredients"
      :key="ingredient.id"
      class="input-item"
    >
      <div class="input-item__label">
        <q-select
          type="list"
          :value="ingredient.id" @input="setRecipeIngredientId(index, $event)"
          :options="ingredientChoice"
        ></q-select>
      </div>
      <div class="input-item__input">
        <input :value="ingredient.ratio * 100" @input="setRecipeIngredientRatio(index, $event)" type="number">
      </div>
      <div class="input-item__unit">
        <span class="input-unit">&nbsp;%</span>
      </div>
      <div class="input-item__extra">
        <button class="light circular small" @click="deleteRecipeIngredient(ingredient)">
          <i>clear</i>
          <!-- <span v-if="type === 'aroma'">{{ $tc("deleteAroma", 1) }}</span>
          <span v-if="type === 'additive'">{{ $tc("deleteAdditive", 1) }}</span> -->
        </button>
      </div>
    </div>

    <div class="input-item">
      <div class="input-item__label">
        <span>
          {{ recipeIngredients.length }}
          {{ $tc(type, recipeIngredients.length) }}
        </span>
      </div>
      <div class="input-item__input">
        <span>
          {{ Math.round(ingredientsRatioSum * 100) }}
        </span>
      </div>
      <div class="input-item__unit">
        <span class="input-unit">&nbsp;%</span>
      </div>
      <div class="input-item__extra">
        <button class="primary circular small" @click="addRecipeIngredient()">
          <i>add</i>
          <!-- <span v-if="type === 'aroma'">{{ $t("newAroma") }}</span>
          <span v-if="type === 'additive'">{{ $t("newAdditive") }}</span> -->
        </button>
      </div>
    </div>


  </section>
</template>

<script>
  import { mapGetters, mapMutations, mapActions } from 'vuex'

  export default {
    // components: { Ingredient },
    data () {
      return {
      }
    },
    props: [
      'type'
    ],
    computed: {
      ...mapGetters([
        'getBases',
        'getAromas',
        'getAdditives',

        'getRecipeAromas',
        'getRecipeAdditives'
      ]),
      ingredients () {
        if (this.type === 'aroma') {
          return this.getAromas
        }
        else if (this.type === 'additive') {
          return this.getAdditives
        }
      },
      recipeIngredients () {
        if (this.type === 'aroma') {
          return this.getRecipeAromas
        }
        else if (this.type === 'additive') {
          return this.getRecipeAdditives
        }
      },
      ingredientChoice () {
        // TODO: remove already used aromas
        const unusedIngredients = this.ingredients.map(function (ingredient) {
          ingredient.value = ingredient.id
          ingredient.label = ingredient.name + ' (' + ingredient.id + ')'
          return ingredient
        })
        return unusedIngredients
      },
      ingredientsRatioSum () {
        if (this.recipeIngredients.length === 0) {
          return 0
        }
        // TODO: spawns NaN - WTF is going on?!
        // const sum = this.recipeIngredients.reduce(function (a, b) {
        //   return a.ratio + b.ratio
        // })
        let sum = 0
        this.recipeIngredients.forEach(function (ingredient) {
          sum += ingredient.ratio
        })
        return sum
      }
    },

    methods: {
      ...mapActions([
      ]),
      ...mapMutations([
      ]),
      addRecipeIngredient () {
        this.$store.commit('ADD_RECIPE_INGREDIENT', {
          type: this.type,
          ingredient: {id: '0', ratio: 0.05}
        })
      },
      deleteRecipeIngredient (ingredient) {
        this.$store.commit('DELETE_RECIPE_INGREDIENT', {
          type: this.type,
          ingredient
        })
      },
      setRecipeIngredientId (id, ingredientId) {
        this.$store.commit('SET_RECIPE_INGREDIENT_ID', {
          type: this.type,
          id: id,
          ingredientId: ingredientId
        })
      },
      setRecipeIngredientRatio (id, e) {
        this.$store.commit('SET_RECIPE_INGREDIENT_RATIO', {
          type: this.type,
          id: id,
          ingredientRatio: parseFloat(e.target.value) / 100
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

  @import "../styles/main";

</style>

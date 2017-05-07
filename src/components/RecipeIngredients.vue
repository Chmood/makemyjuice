<template>
  <section>

    <h4>
      <span v-if="type === 'aroma'">{{ $tc("aroma", 2) }}</span>
      <span v-if="type === 'additive'">{{ $tc("additive", 2) }}</span>
    </h4>

    <article
      v-for="(ingredient, index) in recipeIngredients"
      :key="ingredient.id"
    >
      <!-- [{{ index }}] -->
      <q-select
        type="list"
        :value="ingredient.id" @input="setRecipeIngredientId(index, $event)"
        :options="ingredientChoice"
      ></q-select>

      <input :value="ingredient.ratio" @input="setRecipeIngredientRatio(index, $event)">%

      <button class="light" @click="deleteRecipeIngredient(ingredient)">
        <span v-if="type === 'aroma'">{{ $tc("deleteAroma", 1) }}</span>
        <span v-if="type === 'additive'">{{ $tc("deleteAdditive", 1) }}</span>
      </button>

    </article>

    <button class="primary" @click="addRecipeIngredient()">
      <span v-if="type === 'aroma'">{{ $t("newAroma") }}</span>
      <span v-if="type === 'additive'">{{ $t("newAdditive") }}</span>
    </button>

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
          ingredient: {id: 0, ratio: 0.05}
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
          ingredientRatio: e.target.value
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

  @import "styles/main";

  article {
    margin-bottom: $gutter;
  }

</style>

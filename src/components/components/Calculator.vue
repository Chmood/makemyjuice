<template>
  <div class="calculator-layout">

    <section class="section section--recipe">

      <h3 class="page-subtitle">{{ $tc("recipe", 1) }}</h3>

      <input v-model="name" class="full-width recipe-input-name">

      <h4> {{ $tc("base", 1) }} </h4>

      <section class="input-items">
        <div class="input-item">
          <div class="input-item__label">
            <label for="">{{ $t("quantity") }}</label>
          </div>
          <div class="input-item__input">
            <template v-if="favoriteQuantity">
              <input v-model.number="favorite.quantity" type="number" disabled="true">
            </template>
            <template v-else>
              <input v-model.number="quantity" type="number">
            </template>
          </div>
          <div class="input-item__unit">
            <span class="input-unit">&nbsp;mL</span>
          </div>
          <div class="input-item__extra">
            <q-toggle v-model="favoriteQuantity" class="primary"></q-toggle>
          </div>
        </div>

        <div class="input-item">
          <div class="input-item__label">
            <label for="">{{ $t("PGVGRatio") }}</label>
          </div>
          <div class="input-item__input">
            <template v-if="favoritePGVGRatio">
              <input :value="Math.round(favorite.PGVGRatio * 100)" type="number" disabled="true">
            </template>
            <template v-else>
              <input v-model.number="PGVGRatio" type="number">
            </template>
          </div>
          <div class="input-item__unit">
            <span class="input-unit">&nbsp;%</span>
          </div>
          <div class="input-item__extra">
            <q-toggle v-model="favoritePGVGRatio" class="primary"></q-toggle>
          </div>
        </div>

        <div class="input-item" v-if="mode.nicotine">
          <div class="input-item__label">
            <label for="">{{ $t("nicotine") }}</label>
          </div>
          <div class="input-item__input">
            <template v-if="favoriteNicotine">
              <input v-model.number="favorite.nicotine" type="number" disabled="true">
            </template>
            <template v-else>
              <input v-model.number="nicotine" type="number">
            </template>
          </div>
          <div class="input-item__unit">
            <span class="input-unit">&nbsp;mg/mL</span>
          </div>
          <div class="input-item__extra">
            <q-toggle v-model="favoriteNicotine" class="primary"></q-toggle>
          </div>
        </div>
      </section>

      <template v-if="!mode.base">

        <h4> {{ $tc("aroma", 2) }} </h4>

        <section class="input-items">
          <RecipeIngredients :recipe="recipe" type="aroma">
          </RecipeIngredients>
        </section>

        <h4> {{ $tc("additive", 2) }} </h4>

        <section class="input-items">
          <RecipeIngredients :recipe="recipe" type="additive">
          </RecipeIngredients>
        </section>
      </template>

    </section>

    <section>
      <h3 class="page-subtitle">{{ $tc("ingredient", 2) }}</h3>
      <RecipeResults :recipe="recipe"></RecipeResults>
    </section>

  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import RecipeIngredients from './RecipeIngredients.vue'
import RecipeResults from './RecipeResults.vue'

export default {
  props: [
    'recipe'
  ],
  components: {
    RecipeIngredients,
    RecipeResults
  },
  data () {
    return {
      getCurrentRecipeId: 0
    }
  },
  computed: {
    ...mapGetters([
      'mode',
      'favorite'
    ]),

    name: {
      get () { return this.recipe.name },
      set (value) { this.$store.commit('SET_RECIPE_NAME', {recipe: this.recipe, value}) }
    },
    quantity: {
      get () { return this.recipe.quantity },
      set (value) { this.$store.commit('SET_RECIPE_QUANTITY', {recipe: this.recipe, value}) }
    },
    PGVGRatio: {
      get () { return this.recipe.PGVGRatio * 100 },
      set (value) { this.$store.commit('SET_RECIPE_PGVGRATIO', {recipe: this.recipe, value: value / 100}) }
    },
    nicotine: {
      get () { return this.recipe.nicotine },
      set (value) { this.$store.commit('SET_RECIPE_NICOTINE', {recipe: this.recipe, value}) }
    },

    favoriteQuantity: {
      get () { return this.favorite.favoriteQuantity },
      set (value) { this.$store.commit('SET_FAVORITE', {favorite: 'favoriteQuantity', value: value}) }
    },
    favoritePGVGRatio: {
      get () { return this.favorite.favoritePGVGRatio },
      set (value) { this.$store.commit('SET_FAVORITE', {favorite: 'favoritePGVGRatio', value: value}) }
    },
    favoriteNicotine: {
      get () { return this.favorite.favoriteNicotine },
      set (value) { this.$store.commit('SET_FAVORITE', {favorite: 'favoriteNicotine', value: value}) }
    }
  },

  methods: {
    ...mapActions([
    ]),
    ...mapMutations([
    ])
  }
}
</script>

<style lang="scss" scoped>

  @import "../styles/main";

  .calculator-layout {
    @media (min-width: 80em) {
      display: flex;

      > * {
        flex-grow: 1;

        &.section--recipe {
          margin-right: $gutter-double;
        }
      }
    }
  }

  .recipe-input-name {
    color: white;
    font-size: 1.5rem;
  }

  .results {
    background-color: rgba(0,0,0,0.33);
  }

</style>

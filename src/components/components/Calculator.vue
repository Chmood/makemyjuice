<template>
  <div class="calculator-layout">

    <section class="section section--recipe">

      <h3 class="page-subtitle">{{ $tc("recipe", 1) }}</h3>

      <input v-model="name" class="full-width">

      <h4> {{ $tc("base", 1) }} </h4>

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
          <q-toggle v-model="favoriteQuantity" class="purple"></q-toggle>
        </div>
      </div>

      <div class="input-item">
        <div class="input-item__label">
          <label for="">{{ $t("PGVGRatio") }}</label>
        </div>
        <div class="input-item__input">
          <template v-if="favoritePGVGRatio">
            <input v-model.number="favorite.PGVGRatio" type="number" disabled="true">
          </template>
          <template v-else>
            <input v-model.number="PGVGRatio" type="number">
          </template>
        </div>
        <div class="input-item__unit">
          <span class="input-unit">&nbsp;%</span>
        </div>
        <div class="input-item__extra">
          <q-toggle v-model="favoritePGVGRatio" class="purple"></q-toggle>
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
          <q-toggle v-model="favoriteNicotine" class="purple"></q-toggle>
        </div>
      </div>

      <template v-if="!mode.base">
        <RecipeIngredients type="aroma">
        </RecipeIngredients>

        <RecipeIngredients type="additive">
        </RecipeIngredients>
      </template>

    </section>

    <section>
      <h3 class="page-subtitle">{{ $tc("ingredient", 2) }}</h3>
      <RecipeResults></RecipeResults>
    </section>

  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import RecipeIngredients from './RecipeIngredients.vue'
import RecipeResults from './RecipeResults.vue'

export default {
  components: {
    RecipeIngredients,
    RecipeResults
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'getRecipeName',
      'getRecipeQuantity',
      'getRecipePGVGRatio',
      'getRecipeNicotine',

      'mode',
      'favorite'
    ]),
    name: {
      get () { return this.getRecipeName },
      set (value) { this.$store.commit('SET_RECIPE_NAME', value) }
    },
    quantity: {
      get () { return this.getRecipeQuantity },
      set (value) { this.$store.commit('SET_RECIPE_QUANTITY', value) }
    },
    PGVGRatio: {
      get () { return this.getRecipePGVGRatio * 100 },
      set (value) { this.$store.commit('SET_RECIPE_PGVGRATIO', value / 100) }
    },
    nicotine: {
      get () { return this.getRecipeNicotine },
      set (value) { this.$store.commit('SET_RECIPE_NICOTINE', value) }
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

</style>

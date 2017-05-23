<template>
  <div class="">

    <h3 class="page-subtitle">{{ $tc("recipe", 1) }}</h3>

    <input v-model="name">

    <hr>

    <h4>
      {{ $tc("base", 1) }}
    </h4>

    <p>
      {{ $t("quantity") }}
      <template v-if="favoriteQuantity">
        <input v-model.number="favorite.quantity" type="number" disabled="true">&nbsp;mL
      </template>
      <template v-else>
        <input v-model.number="quantity" type="number">&nbsp;mL
      </template>
      <q-toggle v-model="favoriteQuantity" class="purple"></q-toggle>
    </p>

    <p>
      {{ $t("PGVGRatio") }}
      <template v-if="favoritePGVGRatio">
        <input v-model.number="favorite.PGVGRatio" type="number" disabled="true">&nbsp;%
      </template>
      <template v-else>
        <input v-model.number="PGVGRatio" type="number">&nbsp;%
      </template>
      <q-toggle v-model="favoritePGVGRatio" class="purple"></q-toggle>
    </p>

    <p v-if="mode.nicotine">
      {{ $t("nicotine") }}
      <template v-if="favoriteNicotine">
        <input v-model.number="favorite.nicotine" type="number" disabled="true">&nbsp;mg/mL
      </template>
      <template v-else>
        <input v-model.number="nicotine" type="number">&nbsp;mg/mL
      </template>
      <q-toggle v-model="favoriteNicotine" class="purple"></q-toggle>
    </p>

    <hr>

    <template v-if="!mode.base">
      <RecipeIngredients type="aroma">
      </RecipeIngredients>

      <hr>

      <RecipeIngredients type="additive">
      </RecipeIngredients>

      <hr>
    </template>

    <h3 class="page-subtitle">{{ $tc("ingredient", 2) }}</h3>

    <RecipeResults></RecipeResults>

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

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
      <input v-model="quantity">&nbsp;mL
    </p>
    <p>
      {{ $t("PGVGRatio") }}
      <input v-model="PGVGRatio">&nbsp;%
    </p>
    <p v-if="mode.nicotine">
      {{ $t("nicotine") }}
      <input v-model="nicotine">&nbsp;mg/mL
    </p>

    <hr>

    <RecipeIngredients type="aroma">
    </RecipeIngredients>

    <hr>

    <RecipeIngredients type="additive">
    </RecipeIngredients>

    <hr>

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

      'mode'
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

<template>
  <div class="">

    <h3 class="page-subtitle">{{ $tc("recipe", 1) }}</h3>

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
    <p>
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


  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import RecipeIngredients from './RecipeIngredients.vue'

export default {
  components: {
    RecipeIngredients
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'getRecipeQuantity',
      'getRecipePGVGRatio',
      'getRecipeNicotine'
    ]),
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

<template>
  <div class="">

    <h2 class="page-title">{{ $tc("recipe"), 2 }}</h2>

    <h3
      v-for="(recipe, index) in recipes"
      :key="index"
    >
      <router-link
        :to="{ path: '/recipe/' + recipe.id }"
        tag="button"
        class="circular primary small"
      >
        {{ index + 1 }}
      </router-link>
      &nbsp;{{ recipe.name }}
    </h3>

  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'getRecipes'
    ]),
    recipes () {
      return this.getRecipes
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

<template>
  <div class="">

    <h2 class="page-title">{{ $t("calculator") }}</h2>

    <Calculator :recipe="recipe"></Calculator>

  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import Calculator from '../components/Calculator.vue'

export default {
  // props: [
  //   'id'
  // ],
  components: {
    Calculator
  },
  data () {
    return {
      recipe: {}
    }
  },
  computed: {
    ...mapGetters([
      'getCurrentRecipe'
    ])
  },

  methods: {
    ...mapActions([
    ]),
    ...mapMutations([
    ]),
    navToDefaultRecipe () {
      this.$store.commit('SET_CURRENT_RECIPE_ID', '0')
      this.$router.replace('/recipe/0')
    }
  },
  created () {
    // WHICH RECIPE TO EDIT?
    if (this.$route.params.id) {
      // We got an recipe id param in URL
      console.log('this.$route.params.id', this.$route.params.id)

      // Does it match one of our recipe id's?
      this.$store.commit('SET_CURRENT_RECIPE_ID', this.$route.params.id)
      if (this.getCurrentRecipe !== undefined) {
        console.log('we got a match!')
      }
      else {
        console.log('no match, zero id')
        this.navToDefaultRecipe()
      }
    }
    else {
      // No recipe id param in URL
      console.log('id param is undefined')
      this.navToDefaultRecipe()
    }

    console.log('RECIPE', this.recipe)
    this.recipe = this.getCurrentRecipe
  }
}
</script>

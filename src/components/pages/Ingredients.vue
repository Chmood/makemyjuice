<template>
  <section>

    <h2 class="page-title">{{ $tc("ingredient", 2) }}</h2>

    <Ingredients></Ingredients>

  </section>
</template>

<script>
  import { mapGetters, mapMutations, mapActions } from 'vuex'
  import Ingredients from '../components/Ingredients.vue'

  export default {
    components: { Ingredients },
    data () {
      return {
      }
    },
    props: [
    ],
    computed: {
      ...mapGetters([
      ])
    },

    methods: {
      ...mapActions([
      ]),
      ...mapMutations([
      ])
    },
    mounted () {
    }
  }
</script>

<style lang="scss" scoped>

  @import "../styles/main";

</style>

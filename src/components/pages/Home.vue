<template>
  <div class="">

    <h2 class="page-title">{{ $t("calculator") }}</h2>

    <Calculator></Calculator>

  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import Calculator from '../components/Calculator.vue'

export default {
  components: {
    Calculator
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
    ])
  },

  methods: {
    ...mapActions([
    ]),
    ...mapMutations([
    ])
  }
}
</script>

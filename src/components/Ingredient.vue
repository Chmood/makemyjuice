<template>
  <article class="ingredient card"
    :class="[
      'ingredient--' + ingredient.type,
      ingredient.active ? 'ingredient--active' : ''
    ]"
  >

  <h4>{{ ingredient.name }}</h4>
  <p>{{ ingredient.description }}</p>

  <div>{{ $t("price") }}: {{ ingredient.price }}</div>
  <div>{{ $t("viscosity") }}: {{ ingredient.viscosity }}</div>

  <div v-if="ingredient.PGVGRatio">
    {{ $t("PGVGRatio") }}: {{ ingredient.PGVGRatio }}
  </div>
  <div v-if="ingredient.nicotine">
    {{ $t("nicotine") }}: {{ ingredient.nicotine }}
  </div>

  <button class="text-primary" @click="TOGGLE_INGREDIENT({ ingredient })">
    <i class="on-left">book</i>
    <span v-if="ingredient.active">{{ $t("desactivate") }}</span>
    <span v-else>{{ $t("activate") }}</span>
  </button>

  <button class="text-dark" @click="confirmDelete(ingredient)">
    <i class="on-left">delete</i>
    {{ $t("delete") }}
  </button>

  <button class="text-dark" @click="">
    <i class="on-left">edit</i>
    {{ $t("edit") }}
  </button>

  </article>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'
  import { Dialog, Toast } from 'quasar'

  export default {
    data () {
      return {
      }
    },
    props: [
      'ingredient'
    ],
    computed: {
      ...mapGetters([
      ])
    },
    methods: {
      ...mapMutations([
        'TOGGLE_INGREDIENT',
        'DELETE_INGREDIENT'
      ]),
      confirmDelete (ingredient) {
        Dialog.create({
          title: 'Delete this ingredient?',
          ingredient: 'Are you sure? This can\'t be reverted!',
          buttons: [
            {
              label: this.$t('cancel'),
              handler () {
                console.log('Ingredient deletion cancelled')
              }
            },
            {
              label: this.$t('delete'),
              handler: () => {
                Toast.create.positive(`Ingredient has been deleted`)
                this.$store.commit('DELETE_INGREDIENT', { ingredient })
              }
            }
          ]
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

  @import "styles/main";

</style>

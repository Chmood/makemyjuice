<template>
  <article class="ingredient-item"
    :class="[
      'ingredient-item--' + ingredient.type,
      ingredient.active ? 'ingredient-item--active' : ''
    ]"
  >

  <div class="ingredient-item__head">
    <h4 class="ingredient-item-title" v-bind:style="{ backgroundColor: ingredient.color }">{{ ingredient.name }}</h4>
  </div>

  <div class="ingredient-item__body">
    <div class="ingredient-item-description">{{ ingredient.description }}</div>

    <div class="ingredient-item-stats">
      <div v-if="ingredient.type !== 'additive'" class="ingredient-item-stat">
        <span>{{ $t("PGVGRatio") }}</span><span><span>{{ Math.round(ingredient.PGVGRatio * 100) }}/{{ Math.round((1 - ingredient.PGVGRatio) * 100) }}</span>&nbsp;%</span>
      </div>
      <div v-if="ingredient.nicotine && mode.nicotine" class="ingredient-item-stat">
        <span>{{ $t("nicotine") }}</span><span><span>{{ ingredient.nicotine }}</span>&nbsp;mg/mL</span>
      </div>
      <div v-if="ingredient.price && mode.price" class="ingredient-item-stat">
        <span>{{ $t("price") }}</span><span><span>{{ ingredient.price }}</span>&nbsp;{{ currency }}/L</span>
      </div>
      <div v-if="ingredient.viscosity && mode.drop" class="ingredient-item-stat">
        <span>{{ $t("viscosity") }}</span><span><span>{{ ingredient.viscosity }}</span>&nbsp;{{ $tc("drop", 2) }}/mL</span>
      </div>
    </div>
  </div>

  <div class="ingredient-item__foot">
    <button class="circular dark small" @click="TOGGLE_INGREDIENT({ ingredient })">
      <i>book</i>
      <!-- <span v-if="ingredient.active">{{ $t("desactivate") }}</span>
      <span v-else>{{ $t("activate") }}</span> -->
    </button>

    <button class="circular light small" @click="confirmDelete(ingredient)">
      <i>clear</i>
      <!-- {{ $t("delete") }} -->
    </button>

    <router-link
    :to="{ path: '/ingredient/edit/' + ingredient.id }"
    tag="button"
    class="circular secondary small"
    >
    <!-- {{ $t("edit") }} #{{ ingredient.id }} -->
    <i>edit</i>
  </router-link>
  </div>

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
        'mode',
        'currency'
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

  @import "../styles/main";

  .ingredient-item {
    margin-bottom: $gutter;
    border: 1px solid #222;
    background-color: white;
    color: #333;
    display: flex;
    flex-direction: column;
  }

  .ingredient-item__head {
  }
  .ingredient-item__body {
    flex-grow: 1;
    padding: $gutter;
  }
  .ingredient-item__foot {
    padding: $gutter;
    padding-top: 0;
    text-align: right;

    button {
      margin-left: $gutter;
    }
  }

  .ingredient-item-title {
    margin: 0;
    padding: $gutter-half $gutter;
    color: white;
  }

  .ingredient-item-description {
    margin-bottom: $gutter;
  }

  .ingredient-item-stat {
    margin-bottom: $gutter-half;
    display: flex;
    > span {
      &:first-child {
        text-transform: capitalize;
        font-style: italic;
        color: rgba(0,0,0,0.54);
      }
      &:last-child {
        flex-grow: 1;
        text-align: right;

        > span {
          // font-size: 1.25rem;
          font-weight: bold;
        }
      }
    }
  }

</style>

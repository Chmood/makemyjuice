<template>
  <div class="">

    <h2 class="page-title">{{ $tc("recipe", 2) }}</h2>

    <div class="item-list">

      <article class="item-list__item"
        v-for="(recipe, index) in recipes"
        :key="index"
      >
        <div class="">
          <button class="circular dark small"
            :style="{color: recipe.starred ? 'gold' : 'white'}"
            @click="$store.commit('TOGGLE_RECIPE_STAR', recipe)"
          >
            <i>star</i>
          </button>
        </div>

        <div class="flex-item--grow">
          <div class="recipe-name">{{ recipe.name }}</div>
          <div class="recipe-description">{{ recipe.description }}</div>
          <div class="recipe-aromas">
            <div
              v-for="(aroma, aromaIndex) in recipe.aromas"
              v-bind:style="{ backgroundColor: getIngredientById(aroma.id).color }"
            >
              {{ getIngredientById(aroma.id).name }}
              {{ Math.round(aroma.ratio * 100) }}%
            </div>
          </div>
        </div>

        <div class="">
          <router-link
            :to="{ path: '/recipe/' + recipe.id }"
            tag="button"
            class="circular primary small"
          >
            <!-- {{ index + 1 }} -->
            <i>edit</i>
          </router-link>
          <button class="circular light small" @click="confirmDelete(recipe)"><i>clear</i></button>
        </div>
      </article>

    </div>

    <div class="center bottom-btns">
      <button class="circular primary small" @click="newRecipe()">
        <i>add</i>
      </button>
    </div>


  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import { Dialog, Toast } from 'quasar'

export default {
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'getRecipes',
      'getIngredients'
    ]),
    recipes () {
      return this.getRecipes
    }
  },

  methods: {
    ...mapActions([
    ]),
    ...mapMutations([
    ]),
    getIngredientById (id) {
      const ingredientId = this.getIngredients.findIndex(i => i.id === id)
      const ingredientReal = this.getIngredients[ingredientId]
      return ingredientReal
    },
    getFreeId () {
      let id = 1
      while (this.getRecipes.findIndex(i => i.id === id.toString()) !== -1) {
        id++
      }
      return id.toString()
    },
    newRecipe () {
      const id = this.getFreeId()
      const recipe = {
        id: id,
        starred: false,
        name: 'My New Recipe #' + id,
        description: 'Yet another recipe!',
        quantity: 100,
        PGVGRatio: 0.5,
        nicotine: 6,
        aromas: [
        ],
        additives: [
        ]
      }
      this.$store.commit('ADD_RECIPE', recipe)
      this.$router.push('recipe/' + id)
    },
    confirmDelete (recipe) {
      Dialog.create({
        title: 'Delete this recipe?',
        message: 'Are you sure? This can\'t be reverted!',
        buttons: [
          {
            label: this.$t('cancel'),
            handler () {
              console.log('Recipe deletion cancelled')
            }
          },
          {
            label: this.$t('delete'),
            handler: () => {
              Toast.create.positive(`Recipe has been deleted`)
              this.$store.commit('DELETE_RECIPE', { recipe })
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

  .item-list {
    background-color: white;
    margin-bottom: $gutter;
  }

  .item-list__item {
    display: flex;

    > * {
      padding: $gutter;

      &.flex-item--grow {
        flex-grow: 1;
      }
    }

  }

  .recipe-name,
  .recipe-description {
  }

  .recipe-name {
    color: #333;
  }

  .recipe-description {
    color: #888;
    font-style: italic;
  }

  .recipe-aromas {
    margin: -$gutter-half / 2;
    margin-top: $gutter-half;
    display: flex;

    > * {
      margin: $gutter-half / 2;
      padding: $gutter-quarter $gutter;
      font-size: 0.7rem;
      border-radius: 12px;
    }
  }

</style>

<template>
  <section class="section section--ingredients"
    :class="[compact ? 'ingredients--compact' : '']"
  >
    <h2 class="page-title">{{ $tc("ingredient", 2) }}</h2>

    <q-tabs class="ingredient-filters light justified margin-bottom"
      :refs="$refs"
      default-tab="tab-4"
    >
      <q-tab :class="{ 'active': visibility === key }"
        v-for="(val, key) in filters"
        :key="key"
        icon=""
      >
        <div class="filter"
        :class="{ 'filter--active': visibility === key }"
        @click="visibility = key"
        >
          {{ key === 'all' ? 'ALL' : '' }}
          {{ key === 'inactive' ? 'INACTIVE' : '' }}
          {{ key === 'active' ? 'ACTIVE' : '' }}
          <!-- &nbsp;({{ nMessages[key] }}) -->
        </div>
      </q-tab>
    </q-tabs>

    <h3>{{ $tc("base", 2) }} ({{ bases.length }})</h3>

    <div class="ingredients--bases">
      <ingredient
        v-if="bases"
        v-for="ingredient in bases"
        :key="ingredient.id"
        :ingredient="ingredient"
      ></ingredient>
    </div>

    <button class="text-primary" @click="">
      <i class="on-left">plus</i>
      NEW BASE
    </button>

    <h3>{{ $tc("aroma", 2) }} ({{ aromas.length }})</h3>

    <ingredient
      v-if="aromas"
      v-for="ingredient in aromas"
      :key="ingredient.id"
      :ingredient="ingredient"
    ></ingredient>

    <button class="text-primary" @click="">
      <i class="on-left">plus</i>
      NEW AROMA
    </button>

    <h3>{{ $tc("additive", 2) }} ({{ additives.length }})</h3>

    <ingredient
      v-if="additives"
      v-for="ingredient in additives"
      :key="ingredient.id"
      :ingredient="ingredient"
    ></ingredient>

    <button class="text-primary" @click="">
      <i class="on-left">plus</i>
      NEW ADDITIVE
    </button>

  </section>
</template>

<script>
  import { mapGetters, mapMutations, mapActions } from 'vuex'
  import Ingredient from './Ingredient.vue'
  // import { Loading } from 'quasar'

  const filters = {
    all: messages => messages,
    active: messages => messages.filter(message => message.active),
    inactive: messages => messages.filter(message => !message.active)
  }

  const typeFilters = {
    all: ingredients => ingredients,
    base: ingredients => ingredients.filter(ingredient => ingredient.type === 'base'),
    aroma: ingredients => ingredients.filter(ingredient => ingredient.type === 'aroma'),
    additive: ingredients => ingredients.filter(ingredient => ingredient.type === 'additive')
  }

  export default {
    components: { Ingredient },
    data () {
      return {
        visibility: 'all',
        filters: filters
      }
    },
    props: [
      'compact',
      'customVisibility'
    ],
    computed: {
      ...mapGetters([
        'getIngredients'
      ]),
      bases () {
        return typeFilters['base'](this.filteredIngredients)
      },
      aromas () {
        return typeFilters['aroma'](this.filteredIngredients)
      },
      additives () {
        return typeFilters['additive'](this.filteredIngredients)
      },
      filteredIngredients () {
        return filters[this.visibility](this.getIngredients)
      }
    },

    methods: {
      ...mapActions([
      ]),
      ...mapMutations([
        'TOGGLE_ALL_INGREDIENTS'
      ])
    },
    mounted () {
      // Set custom visibility filter
      if (this.customVisibility) {
        this.visibility = this.customVisibility
      }
    }
  }
</script>

<style lang="scss" scoped>

  @import "styles/main";

</style>

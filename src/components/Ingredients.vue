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

    <h3>{{ $tc("base", 2) }} ({{ this.bases.length }})</h3>

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

    <h3>{{ $tc("aroma", 2) }} ({{ this.aromas.length }})</h3>

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

    <h3>{{ $tc("additive", 2) }} ({{ this.additives.length }})</h3>

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

    <!-- <div class="margin-bottom">
      <button class="tertiary" @click="fetchMessages()"><i>replay</i>Refresh</button>

      <button class="primary" @click="TOGGLE_ALL_MESSAGES({ read: !allChecked })">
        <i>book</i>
        <span v-if="allChecked">Mark all as unread</span>
        <span v-else>Mark all as read</span>
      </button>
    </div> -->

    <!-- <q-search class="messages__search margin-bottom light text-dark"
    :debounce="600"
    placeholder="Rechercher dans les messages"
    icon="search"
    ></q-search> -->

  </section>
</template>

<script>
  import { mapGetters, mapMutations, mapActions } from 'vuex'
  import Ingredient from './Ingredient.vue'
  // import { Loading } from 'quasar'

  const filters = {
    all: messages => messages,
    inactive: messages => messages.filter(message => !message.active),
    active: messages => messages.filter(message => message.active)
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
      } /* ,
      nIngredientsTotal () {
        return this.ingredients.length
      } */
    },

    methods: {
      ...mapActions([
        // 'fetchMessages'
      ]),
      ...mapMutations([
        'TOGGLE_ALL_INGREDIENTS'
      ])
    },
    filters: {
      pluralize: (n, w) => n === 1 ? w : (w + 's'),
      capitalize: s => s.charAt(0).toUpperCase() + s.slice(1)
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

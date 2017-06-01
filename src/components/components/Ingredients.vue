<template>
  <section class="section section--ingredients"
    :class="[compact ? 'ingredients--compact' : '']"
  >

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

    <button class="primary" @click="newIngredient('base')">
      NEW BASE
    </button>

    <h3>{{ $tc("aroma", 2) }} ({{ aromas.length }})</h3>

    <ingredient
      v-if="aromas"
      v-for="ingredient in aromas"
      :key="ingredient.id"
      :ingredient="ingredient"
    ></ingredient>

    <button class="primary" @click="newIngredient('aroma')">
      NEW AROMA
    </button>

    <h3>{{ $tc("additive", 2) }} ({{ additives.length }})</h3>

    <ingredient
      v-if="additives"
      v-for="ingredient in additives"
      :key="ingredient.id"
      :ingredient="ingredient"
    ></ingredient>

    <button class="primary" @click="newIngredient('additive')">
      NEW ADDITIVE
    </button>

  </section>
</template>

<script>
  import { mapGetters, mapMutations, mapActions } from 'vuex'
  import Ingredient from './Ingredient.vue'

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
      ]),
      getFreeId () {
        let id = 1
        while (this.getIngredients.findIndex(i => i.id === id.toString()) !== -1) {
          id++
        }
        return id.toString()
      },
      newIngredient (type) {
        const id = this.getFreeId()
        const ingredient = {
          id: id,
          active: true,
          type: type,
          name: '',
          description: '',
          color: '#888',
          price: 0,
          viscosity: 25
        }
        if (type === 'aroma' || type === 'base') { ingredient.PGVGRatio = 1.0 }
        if (type === 'base') { ingredient.nicotine = 0 }

        this.$store.commit('ADD_INGREDIENT', { ingredient })
        this.$router.push('ingredient/' + id)
      }
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

  @import "../styles/main";

</style>

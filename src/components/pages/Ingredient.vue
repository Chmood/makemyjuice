<template>
  <div class="">

    <h2 class="page-title" :style="{backgroundColor: ingredient.color}">
      {{ $tc("ingredient", 1) }} - {{ mode }} - ID {{ $route.params.id }}
    </h2>

    <router-link :to="{ path: '/ingredient/' + idPrevious }">
      {{ $t("previous") }}
    </router-link>
    <router-link :to="{ path: '/ingredient/' + idNext }">
      {{ $t("next") }}
    </router-link>

    <div class="list">
      <div class="list-label">{{ $t("type") }}</div>
      <label class="item multiple-lines">
        <i class="item-primary">euro_symbol</i>
        <div class="item-content">
          <q-select
            class="full-width"
            type="radio"
            v-model="ingredient.type"
            :options="choicesTypes"
          ></q-select>
        </div>
      </label>

      <div class="list-label">{{ $t("name") }}</div>
      <label class="item multiple-lines">
        <i class="item-primary">public</i>
        <div class="item-content">
          <input v-model="ingredient.name" type="text" class="full-width">
        </div>
      </label>

      <div class="list-label">{{ $t("color") }}</div>
      <label class="item multiple-lines">
        <i class="item-primary">color</i>
        <div class="item-content">
          <input v-model="ingredient.color" type="text" class="full-width">
        </div>
      </label>

      <div class="list-label">{{ $t("description") }}</div>
      <label class="item multiple-lines">
        <i class="item-primary">public</i>
        <div class="item-content">
          <textarea v-model="ingredient.description" placeholder="Placeholder" class="full-width">
          </textarea>
        </div>
      </label>

      <template v-if="ingredient.type !== 'additive'">
        <div class="list-label">PG/VG</div>
        <label class="item multiple-lines">
          <i class="item-primary">public</i>
          <div class="item-content">
            <input v-model="ingredient.PGVGRatio" type="number" class="full-width">
          </div>
        </label>
      </template>

      <template v-if="ingredient.type === 'base'">
        <div class="list-label">{{ $t("nicotine") }}</div>
        <label class="item multiple-lines">
          <i class="item-primary">public</i>
          <div class="item-content">
            <input v-model="ingredient.nicotine" type="number" class="full-width">
          </div>
        </label>
      </template>

      <div class="list-label">{{ $t("price") }}</div>
      <label class="item multiple-lines">
        <i class="item-primary">public</i>
        <div class="item-content">
          <input v-model="ingredient.price" type="number" class="full-width">
        </div>
      </label>

      <div class="list-label">{{ $t("viscosity") }}</div>
      <label class="item multiple-lines">
        <i class="item-primary">public</i>
        <div class="item-content">
          <input v-model="ingredient.viscosity" type="number" class="full-width">
        </div>
      </label>
    </div>

    <button class="primary" @click="saveIngredient()">
      {{ $t("save") }}
    </button>
    <button class="light" @click="cancelIngredient()">
      {{ $t("cancel") }}
    </button>
    <!-- <router-link
      :to="{ path: '/ingredients' }"
      tag="button"
      class="light"
    >
      {{ $t("cancel") }}
    </router-link> -->

  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  props: [
    'id',
    'mode'
  ],
  components: {
  },
  data () {
    return {
      ingredient: {},
      type: 'base',
      choicesTypes: [
        { label: 'Base', value: 'base' },
        { label: 'Aroma', value: 'aroma' },
        { label: 'Additive', value: 'additive' }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'getIngredients'
    ]),
    favoriteQuantity: {
      get () { return this.favorite.quantity },
      set (value) { this.$store.commit('SET_FAVORITE', {favorite: 'quantity', value: value}) }
    },
    idPrevious () {
      return parseInt(this.ingredient.id) - 1
    },
    idNext () {
      return parseInt(this.ingredient.id) + 1
    }
  },

  methods: {
    ...mapActions([
    ]),
    ...mapMutations([
    ]),
    cloneIngredient () {
      // const id = this.getIngredients.findIndex(i => i.id === this.$route.params.id)
      const realId = this.getIngredients.findIndex(i => i.id === this.id)

      // hard copy
      this.ingredient = Object.assign({}, this.getIngredients[realId])
    },
    saveIngredient () {
      this.$store.commit('SET_INGREDIENT', {ingredient: this.ingredient})
    },
    cancelIngredient () {
      if (this.mode === 'create') {
        this.$store.commit('DELETE_INGREDIENT', {ingredient: this.ingredient})
      }
      this.$router.go(-1)
    }
  },

  created () {
    this.cloneIngredient()
  },

  beforeRouteUpdate (to, from, next) {
    this.cloneIngredient()
    next()
  }
}
</script>

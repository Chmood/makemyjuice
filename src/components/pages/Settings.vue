<template>
  <div class="">

    <h2 class="page-title">{{ $tc("setting", 2) }}</h2>

    <h3>{{ $t("localisation") }}</h3>

    <div class="list">
      <div class="list-label">{{ $t("language") }}</div>
      <label class="item multiple-lines">
        <i class="item-primary">public</i>
        <div class="item-content">
          <q-select
            class="full-width"
            type="radio"
            v-model="locale"
            :options="locales"
          ></q-select>
        </div>
      </label>

      <div class="list-label">{{ $t("currency") }}</div>
      <label class="item multiple-lines">
        <i class="item-primary">euro_symbol</i>
        <div class="item-content">
          <q-select
            class="full-width"
            type="radio"
            v-model="_currency"
            :options="currencies"
          ></q-select>
        </div>
      </label>
      <label class="item two-lines" v-if="isCustomCurrency">
        <i class="item-primary">edit</i>
        <div class="item-content">
          <input v-model="_currency" placeholder="Currency symbol" class="full-width">
        </div>
      </label>
    </div>

    <h3>{{ $tc("mode", 2) }}</h3>

    <div class="list">
      <!-- <div class="list-label">Calculator modes</div> -->
      <label class="item two-lines">
        <div class="item-content has-secondary">
          <div>{{ $t("nicotineMode") }}</div>
          <div>{{ $t("nicotineModeDesc") }}</div>
        </div>
        <div class="item-secondary">
          <q-toggle v-model="modeNicotine" class="primary"></q-toggle>
        </div>
      </label>
      <label class="item two-lines">
        <div class="item-content has-secondary">
          <div>{{ $t("baseMode") }}</div>
          <div>{{ $t("baseModeDesc") }}</div>
        </div>
        <div class="item-secondary">
          <q-toggle v-model="modeBase" class="primary"></q-toggle>
        </div>
      </label>
      <label class="item two-lines">
        <div class="item-content has-secondary">
          <div>{{ $t("priceMode") }}</div>
          <div>{{ $t("priceModeDesc") }}</div>
        </div>
        <div class="item-secondary">
          <q-toggle v-model="modePrice" class="primary"></q-toggle>
        </div>
      </label>
      <label class="item two-lines">
        <div class="item-content has-secondary">
          <div>{{ $t("dropMode") }}</div>
          <div>{{ $t("dropModeDesc") }}</div>
        </div>
        <div class="item-secondary">
          <q-toggle v-model="modeDrop" class="primary"></q-toggle>
        </div>
      </label>
      <label class="item two-lines">
        <div class="item-content has-secondary">
          <div>{{ $t("beakerMode") }}</div>
          <div>{{ $t("beakerModeDesc") }}</div>
        </div>
        <div class="item-secondary">
          <q-toggle v-model="modeBeaker" class="primary"></q-toggle>
        </div>
      </label>
    </div>

    <h3>{{ $t("favoriteRecipeParameters") }}</h3>

    <div class="list">
      <label class="item two-lines">
        <div class="item-content has-secondary">
          <div>{{ $t("favoriteMode") }}</div>
          <div>{{ $t("favoriteModeDesc") }}</div>
        </div>
        <div class="item-secondary">
          <q-toggle v-model="modeFavorite" class="primary"></q-toggle>
        </div>
      </label>
      <template v-if="mode.favorite">
        <div class="list-label">{{ $t("quantity") }}</div>
        <label class="item two-lines">
          <i class="item-primary">opacity</i>
          <div class="item-content has-secondary">
            <input v-model.number="favoriteQuantity" type="number" class="full-width">
          </div>
          <div class="item-secondary">mL</div>
        </label>
        <div class="list-label">{{ $t("PGVGRatio") }}</div>
        <label class="item two-lines">
          <i class="item-primary">iso</i>
          <div class="item-content has-secondary">
            <input v-model.number="favoritePGVGRatio" type="number" class="full-width">
          </div>
          <div class="item-secondary">%</div>
        </label>
        <div class="list-label">{{ $t("nicotine") }}</div>
        <label class="item two-lines">
          <i class="item-primary">smoking_rooms</i>
          <div class="item-content has-secondary">
            <input v-model.number="favoriteNicotine" type="number" class="full-width">
          </div>
          <div class="item-secondary">mg/mL</div>
        </label>
      </template>
    </div>

    <h3>{{ $t("userDatas") }}</h3>

    <div class="list">

      <div class="list-label">
        {{ $tc("setting", 2) }}
      </div>

      <label class="item two-lines">
        <div class="item-content has-secondary">
          <div>{{ $t("resetSettings") }}</div>
          <div>{{ $t("resetSettingsDesc") }}</div>
        </div>
        <div class="item-secondary">
          <button class="circular red small" @click="confirmDelete('RESET_SETTINGS', $t('resetSettingsConfirm'), $t('resetSettingsConfirmed'))"><i>refresh</i></button>
        </div>
      </label>

      <div class="list-label">
        {{ getIngredients.length }}
        {{ $tc("ingredient", getIngredients.length) }}
      </div>

      <label class="item two-lines">
        <div class="item-content has-secondary">
          <div>{{ $t("clearIngredients") }}</div>
          <div>{{ $t("clearIngredientsDesc") }}</div>
        </div>
        <div class="item-secondary">
          <button class="circular red small" @click="confirmDelete('CLEAR_INGREDIENTS', $t('clearIngredientsConfirm'), $t('clearIngredientsConfirmed'))"><i>delete</i></button>
        </div>
      </label>

      <label class="item two-lines">
        <div class="item-content has-secondary">
          <div>{{ $t("resetIngredients") }}</div>
          <div>{{ $t("resetIngredientsDesc") }}</div>
        </div>
        <div class="item-secondary">
          <button class="circular red small" @click="confirmDelete('RESET_INGREDIENTS', $t('resetIngredientsConfirm'), $t('resetIngredientsConfirmed'))"><i>refresh</i></button>
        </div>
      </label>

      <div class="list-label">
        {{ getRecipes.length }}
        {{ $tc("recipe", getRecipes.length) }}
      </div>

      <label class="item two-lines">
        <div class="item-content has-secondary">
          <div>{{ $t("clearRecipes") }}</div>
          <div>{{ $t("clearRecipesDesc") }}</div>
        </div>
        <div class="item-secondary">
          <button class="circular red small" @click="confirmDelete('CLEAR_RECIPES', $t('clearRecipesConfirm'), $t('clearRecipesConfirmed'))"><i>delete</i></button>
        </div>
      </label>
      <label class="item two-lines">
        <div class="item-content has-secondary">
          <div>{{ $t("resetRecipes") }}</div>
          <div>{{ $t("resetRecipesDesc") }}</div>
        </div>
        <div class="item-secondary">
          <button class="circular red small" @click="confirmDelete('RESET_RECIPES', $t('resetRecipesConfirm'), $t('resetRecipesConfirmed'))"><i>refresh</i></button>
        </div>
      </label>

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
      isCustomCurrency: false,
      currencies: [
        { label: 'dollar', value: '$' },
        { label: 'euro', value: '€' },
        { label: 'pound', value: '£' },
        { label: 'other currency', value: '' }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'language',
      'currency',
      'mode',
      'favorite',

      'getIngredients',
      'getRecipes'
    ]),
    locale: {
      get () { return this.language },
      set (value) {
        this.$i18n.locale = value
        this.$store.commit('SET_LANGUAGE', value)
      }
    },
    _currency: {
      get () {
        if (this.currency === '$' || this.currency === '€' || this.currency === '£') { this.isCustomCurrency = false }
        else { this.isCustomCurrency = true }
        return this.currency
      },
      set (value) {
        this.$store.commit('SET_CURRENCY', value)
        if (value === '') { this.isCustomCurrency = true }
        else { this.isCustomCurrency = false }
      }
    },
    locales () {
      const langs = []
      const messages = this.$i18n._vm.messages
      Object.keys(messages).forEach(lang => {
        console.log()
        langs.push({
          label: messages[lang].LANG,
          value: lang
        })
      })
      return langs
    },
    modeNicotine: {
      get () { return this.mode.nicotine },
      set (value) { this.$store.commit('SET_MODE', {mode: 'nicotine', isActive: value}) }
    },
    modeBase: {
      get () { return this.mode.base },
      set (value) { this.$store.commit('SET_MODE', {mode: 'base', isActive: value}) }
    },
    modePrice: {
      get () { return this.mode.price },
      set (value) { this.$store.commit('SET_MODE', {mode: 'price', isActive: value}) }
    },
    modeDrop: {
      get () { return this.mode.drop },
      set (value) { this.$store.commit('SET_MODE', {mode: 'drop', isActive: value}) }
    },
    modeBeaker: {
      get () { return this.mode.beaker },
      set (value) { this.$store.commit('SET_MODE', {mode: 'beaker', isActive: value}) }
    },
    modeFavorite: {
      get () { return this.mode.favorite },
      set (value) { this.$store.commit('SET_MODE', {mode: 'favorite', isActive: value}) }
    },
    favoriteQuantity: {
      get () { return this.favorite.quantity },
      set (value) { this.$store.commit('SET_FAVORITE', {favorite: 'quantity', value: value}) }
    },
    favoritePGVGRatio: {
      get () { return this.favorite.PGVGRatio * 100 },
      set (value) { this.$store.commit('SET_FAVORITE', {favorite: 'PGVGRatio', value: value / 100}) }
    },
    favoriteNicotine: {
      get () { return this.favorite.nicotine },
      set (value) { this.$store.commit('SET_FAVORITE', {favorite: 'nicotine', value: value}) }
    }
  },

  methods: {
    ...mapActions([
    ]),
    ...mapMutations([
    ]),
    confirmDelete (mutation, title, confirm) {
      Dialog.create({
        title: title,
        message: this.$t('areYouSure'),
        buttons: [
          {
            label: this.$t('cancel'),
            handler () {}
          },
          {
            label: this.$t('confirm'),
            handler: () => {
              Toast.create.positive(confirm)
              this.$store.commit(mutation)
            }
          }
        ]
      })
    }
  }
}
</script>

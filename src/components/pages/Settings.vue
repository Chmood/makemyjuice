<template>
  <div class="">

    <h2 class="page-title">{{ $tc("setting", 2) }}</h2>

    <div class="list">
      <div class="list-label">Language</div>
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

      <div class="list-label">Currency</div>
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

    <h5>Modes</h5>

    <div class="list">
      <!-- <div class="list-label">Calculator modes</div> -->
      <label class="item two-lines">
        <div class="item-content has-secondary">
          <div>Nicotine mode</div>
          <div>Use nicotine in calculator</div>
        </div>
        <div class="item-secondary">
          <q-toggle v-model="modeNicotine"></q-toggle>
        </div>
      </label>
      <label class="item two-lines">
        <div class="item-content has-secondary">
          <div>Base mode</div>
          <div>Don't use aromas or additives</div>
        </div>
        <div class="item-secondary">
          <q-toggle v-model="modeBase" class="purple"></q-toggle>
        </div>
      </label>
      <label class="item two-lines">
        <div class="item-content has-secondary">
          <div>Price mode</div>
          <div>Show recipe price</div>
        </div>
        <div class="item-secondary">
          <q-toggle v-model="modePrice" class="red"></q-toggle>
        </div>
      </label>
      <label class="item two-lines">
        <div class="item-content has-secondary">
          <div>Drop mode</div>
          <div>Express small quantities in drops</div>
        </div>
        <div class="item-secondary">
          <q-toggle v-model="modeDrop" class="red"></q-toggle>
        </div>
      </label>
      <label class="item two-lines">
        <div class="item-content has-secondary">
          <div>Beaker mode</div>
          <div>Draw the beaker</div>
        </div>
        <div class="item-secondary">
          <q-toggle v-model="modeBeaker" class="red"></q-toggle>
        </div>
      </label>
    </div>

    <h5>Favourite recipe parameters</h5>

    <div class="list">
      <label class="item two-lines">
        <div class="item-content has-secondary">
          <div>Favourite mode</div>
          <div>Use favorite settings</div>
        </div>
        <div class="item-secondary">
          <q-toggle v-model="checked" class="red"></q-toggle>
        </div>
      </label>
      <div class="list-label">Quantity</div>
      <label class="item two-lines">
        <i class="item-primary">edit</i>
        <div class="item-content has-secondary">
          <input placeholder="Placeholder" class="full-width">
        </div>
        <div class="item-secondary">mL</div>
      </label>
      <div class="list-label">PG/VG ratio</div>
      <label class="item two-lines">
        <i class="item-primary">edit</i>
        <div class="item-content has-secondary">
          <input placeholder="Placeholder" class="full-width">
        </div>
        <div class="item-secondary">%</div>
      </label>
      <div class="list-label">Nicotine</div>
      <label class="item two-lines">
        <i class="item-primary">edit</i>
        <div class="item-content has-secondary">
          <input placeholder="Placeholder" class="full-width">
        </div>
        <div class="item-secondary">mg/mL</div>
      </label>
    </div>

  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  components: {
  },
  data () {
    return {
      checked: true,
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
      'mode'
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
    }
  },

  methods: {
    ...mapActions([
    ]),
    ...mapMutations([
    ])
  }
}
</script>

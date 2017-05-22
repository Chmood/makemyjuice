<template>
  <div class="">

    <h2 class="page-title">{{ $tc("setting", 2) }}</h2>

    <div class="list">
      <div class="list-label">Language</div>
      <label class="item multiple-lines">
        <i class="item-primary">home</i>
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
        <i class="item-primary">supervisor_account</i>
        <div class="item-content">
          <q-select
            class="full-width"
            type="radio"
            v-model="currentFoo"
            :options="foo"
          ></q-select>
        </div>
      </label>
      <label class="item two-lines">
        <i class="item-primary">edit</i>
        <div class="item-content">
          <input placeholder="Placeholder" class="full-width">
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
          <q-toggle v-model="checked"></q-toggle>
        </div>
      </label>
      <label class="item two-lines">
        <div class="item-content has-secondary">
          <div>Base mode</div>
          <div>Don't use aromas or additives</div>
        </div>
        <div class="item-secondary">
          <q-toggle v-model="checked" class="purple"></q-toggle>
        </div>
      </label>
      <label class="item two-lines">
        <div class="item-content has-secondary">
          <div>Price mode</div>
          <div>Show recipe price</div>
        </div>
        <div class="item-secondary">
          <q-toggle v-model="checked" class="red"></q-toggle>
        </div>
      </label>
      <label class="item two-lines">
        <div class="item-content has-secondary">
          <div>Drop mode</div>
          <div>Express small quantities in drops</div>
        </div>
        <div class="item-secondary">
          <q-toggle v-model="checked" class="red"></q-toggle>
        </div>
      </label>
      <label class="item two-lines">
        <div class="item-content has-secondary">
          <div>Beaker mode</div>
          <div>Draw the beaker</div>
        </div>
        <div class="item-secondary">
          <q-toggle v-model="checked" class="red"></q-toggle>
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
      currentFoo: 'goog',
      foo: [
        {
          label: 'Google',
          value: 'goog'
        },
        {
          label: 'Facebook',
          value: 'fb'
        },
        {
          label: 'Github',
          value: 'gh'
        }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'language',
      'currency'
    ]),
    locale: {
      get () { return this.language },
      set (value) {
        console.log(value)
        this.$i18n.locale = value
        this.$store.commit('SET_LANGUAGE', value)
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

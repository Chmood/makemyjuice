<template>
  <div class="mmj-select">

    <div class="mmj-select__value">
      <div class="mmj-select-value"
        :style="{backgroundColor: currentOption.color}"
      >
        {{ currentOption.name }}
      </div>
    </div>

    <div class="mmj-select__options">
      <div class="mmj-select-option"
        :style="{backgroundColor: option.color}"
        v-for="(option, id) in options"
      >
        {{ option.name }}
      </div>
    </div>
  </div>

</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  props: [
    'value',
    'options'
  ],
  components: {},
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
    ]),
    currentOption () {
      const id = this.options.findIndex(i => i.id === this.value)
      if (id === -1) {
        return {
          name: 'Choose one!',
          color: '#f4f4f4'
        }
      }
      else {
        return this.options[id]
      }
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

<style lang="scss" scoped>

@import "../styles/main";

.mmj-select {
  position: relative;
}

.mmj-select__value {
}

.mmj-select__options {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: none;
}

.mmj-select-value,
.mmj-select-option {
  padding: 0 $gutter-half;
  height: 37px;
  line-height: 37px;
  color: white;
}

</style>

<template>

  <section class="results">
    <div class="beaker" v-if="mode.beaker">
      <div
      v-for="(result, index) in results"
      :key="index"
      v-bind:style="{ backgroundColor: result.color, flexBasis: result.ratio * 100 + '%' }"
      >
      </div>
    </div>

    <table class="results-list" v-if="results.length">
      <!-- <thead>
        <tr>
          <th>#</th>
          <th>{{ $t("name") }}</th>
          <th>{{ $t("ratio") }}</th>
          <th>{{ $t("quantity") }}</th>
          <th v-if="mode.price">{{ $t("price") }}</th>
        </tr>
      </thead> -->
      <tbody>
        <tr v-for="(result, index) in results" :key="index">
          <td>
            <router-link
              :to="{ path: '/ingredient/edit/' + result.id }"
              tag="button"
              class="circular small"
              v-bind:style="{ backgroundColor: result.color, color: 'white'}"
            >
              {{ index + 1 }}
            </router-link>
          </td>
          <td>{{ result.name }} (ID:{{ result.id }})</td>
          <td>{{ roundNumber(result.ratio * 100) }}%</td>
          <td v-if="result.quantity < 1 && mode.drop">
            {{ roundNumber(result.quantity * result.viscosity) }} {{ $tc("drop", 2) }}
          </td>
          <td v-else>
            {{ roundNumber(result.quantity) }}mL
          </td>
          <td v-if="mode.price">
            {{ roundNumber(result.price, 2) }}{{ currency }}
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td></td>
          <td>TOTAL ({{ results.length }} {{ $tc("ingredient", results.length) }})</td>
          <td>{{ roundNumber(totalRatio * 100) }}%</td>
          <td>{{ roundNumber(totalQuantity) }}mL</td>
          <td v-if="mode.price">
            {{ roundNumber(totalPrice, 2) }}{{ currency }}<br>
            ({{ roundNumber(totalPrice * 1000 / totalQuantity, 2) }}{{ currency }}/L)
          </td>
        </tr>
      </tfoot>
    </table>

    <div v-else>
      Recipe is NOT doable!
    </div>
  </section>

</template>

<script>
  import { mapGetters, mapMutations, mapActions } from 'vuex'

  export default {
    // components: { Ingredient },
    data () {
      return {
      }
    },
    props: [
      'recipe'
    ],
    computed: {
      ...mapGetters([
        'getIngredients',
        'getBases',
        'getAromas',
        'getAdditives',

        'mode',
        'favorite',
        'currency'
      ]),
      recipeIngredients () {
        // Merge aromas and additives
        return this.recipe.aromas.concat(this.recipe.additives)
      },
      recipeQuantity () {
        return this.favorite.favoriteQuantity ? this.favorite.quantity : this.recipe.quantity
      },
      recipePGVGRatio () {
        return this.favorite.favoritePGVGRatio ? this.favorite.PGVGRatio : this.recipe.PGVGRatio
      },
      recipeNicotine () {
        return this.favorite.favoriteNicotine ? this.favorite.nicotine : this.recipe.nicotine
      },
      results () {
        // Faisability of the recipe (considering our available ingredients)
        let isRecipeDoable = true

        let basesRatio = 1 // bases / all
        let aromasRatio = 0 // aromas / all
        let additivesRatio = 0 // additives / all
        let nicotineBaseRatio = 0 // nicotine base / all

        let aromasQuantity = 0
        let aromasQuantityPG = 0
        let aromasPGVGRatio

        let basesQuantity
        let basesPGVGRatio

        let baseNicotineId
        let nicotineRatio = 0
        let quantityBaseNicotine = 0

        let PGVGRatioBaseMin = 1
        let PGVGRatioBaseMax = 0
        let PGVGRatioBaseMinId
        let PGVGRatioBaseMaxId
        let quantityPGVGRatioBaseMin
        let quantityPGVGRatioBaseMax

        console.warn('=========================================')

        // ADDITIVES
        console.log('ADDITIVES---------------------------------')

        if (!this.mode.base && this.recipe.additives.length > 0) {
          // Substract additives from total
          this.recipe.additives.forEach(ingredient => {
            basesRatio -= ingredient.ratio
            additivesRatio += ingredient.ratio
          })
        }

        console.log('Remaining base ratio after additives', basesRatio)

        // AROMAS
        console.log('AROMAS------------------------------------')

        if (!this.mode.base && this.recipe.aromas.length > 0) {
          // Substract aromas from total
          this.recipe.aromas.forEach(ingredient => {
            const ingredientId = this.getIngredients.findIndex(i => i.id === ingredient.id)
            const ingredientReal = this.getIngredients[ingredientId]

            basesRatio -= ingredient.ratio
            aromasRatio += ingredient.ratio

            aromasQuantity += ingredient.ratio * this.recipeQuantity
            aromasQuantityPG += ingredientReal.PGVGRatio * ingredient.ratio * this.recipeQuantity
          })

          basesQuantity = this.recipeQuantity * basesRatio
          aromasPGVGRatio = aromasQuantityPG / aromasQuantity

          console.log('Total aromas quantity', aromasQuantity, 'mL')
          console.log('Total aromas PG/VG ratio', aromasPGVGRatio * 100, '%')

          if (additivesRatio > 1 || aromasRatio > 1) {
            if (additivesRatio > 1) {
              console.warn('Too much additives!')
              isRecipeDoable = false
            }
            if (aromasRatio > 1) {
              console.warn('Too much aromas!')
              isRecipeDoable = false
            }
          }
          else if ((aromasRatio + additivesRatio) > 1) {
            console.warn('Too much aromas and/or additives!')
            isRecipeDoable = false
          }

          basesPGVGRatio = (this.recipePGVGRatio * (aromasQuantity + basesQuantity) - aromasQuantity * aromasPGVGRatio) / basesQuantity

          if (basesPGVGRatio < 0) {
            console.warn('Too much VG!')
            isRecipeDoable = false
          }
          else if (basesPGVGRatio > 1) {
            console.warn('Too much PG!')
            isRecipeDoable = false
          }

          console.log('Total bases quantity', basesQuantity, 'mL')
          console.log('Total bases PG/VG ratio', basesPGVGRatio * 100, '%')
        }

        console.log('Remaining base ratio after aromas', basesRatio)

        // NICOTINE COMPUTING
        console.log('NICOTINE----------------------------------')

        if (this.mode.nicotine && this.recipeNicotine && this.recipeNicotine > 0) {
          console.log('Desired nicotine', this.recipeNicotine, 'mg/mL')

          // Find the strongest nicotine base available
          // TODO: try the others, or use multiple
          this.getBases.forEach(base => {
            if (base.nicotine > nicotineRatio) {
              nicotineRatio = base.nicotine
              baseNicotineId = base.id
            }
          })

          // Check if we have any nicotine base first
          if (nicotineRatio === 0) {
            console.warn('No nicotine base available!')
            isRecipeDoable = false
          }
          // Check if our base is strong enough for the recipe
          else if (nicotineRatio < this.recipeNicotine) {
            console.warn('Nicotine base not strong enought!')
            isRecipeDoable = false
          }
          console.log('Strongest nicotine base ID', baseNicotineId, nicotineRatio, 'mg/mL')

          quantityBaseNicotine = this.recipeQuantity * this.recipeNicotine / nicotineRatio
          nicotineBaseRatio = quantityBaseNicotine / this.recipeQuantity
          // Substract nicotine base from total
          basesRatio -= nicotineBaseRatio

          console.log('Nicotine base quantity', quantityBaseNicotine, 'mL')
          console.log('Nicotine base PG/VG ratio', this.getBases[baseNicotineId].PGVGRatio * 100, '%')
        }

        console.log('Remaining base ratio after nicotine', basesRatio)

        // BASES
        console.log('BASES-------------------------------------')
        // Compute the PG/VG ratio of what we have now
        const submixQuantity = aromasQuantity + quantityBaseNicotine
        let submixPGVGRatio
        if (this.mode.nicotine && !this.mode.base && this.recipe.aromas.length > 0) { // nicotine + aromas + HACKY not empty aromas check!
          submixPGVGRatio = ((aromasQuantity * aromasPGVGRatio) + (quantityBaseNicotine * this.getBases[baseNicotineId].PGVGRatio)) / submixQuantity
        }
        else {
          if (!this.mode.nicotine && this.mode.base) { // no nicotine, no aromas
            submixPGVGRatio = 0
          }
          else if (this.mode.nicotine) { // only nicotine
            submixPGVGRatio = (quantityBaseNicotine * this.getBases[baseNicotineId].PGVGRatio) / submixQuantity
          }
          else { // only aromas
            submixPGVGRatio = (aromasQuantity * aromasPGVGRatio) / submixQuantity
          }
        }

        console.log('Submix', submixQuantity, 'mL @', submixPGVGRatio * 100, '% PG/VG')

        // Compute the PG/VG ratio of what we need to add
        // We neglect additives here (no PG or VG in them)
        const basesNoNicotineQuantity = this.recipeQuantity * basesRatio
        const basesNoNicotinePGVGRatio = (this.recipePGVGRatio * (submixQuantity + basesNoNicotineQuantity) - submixQuantity * submixPGVGRatio) / basesNoNicotineQuantity

        // Check if the PGVG ratio is ok
        if (basesNoNicotinePGVGRatio < 0) {
          console.warn('Too much VG!')
          isRecipeDoable = false
        }
        else if (basesNoNicotinePGVGRatio > 1) {
          console.warn('Too much PG!')
          isRecipeDoable = false
        }

        console.log('Basemix', basesNoNicotineQuantity, 'mL @', basesNoNicotinePGVGRatio * 100, '% PG/VG')

        // Use our bases ingredients to achieve the mix

        // Find the 'extreme' bases
        this.getBases.forEach(base => {
          if (base.nicotine === 0) {
            if (base.PGVGRatio < PGVGRatioBaseMin) {
              PGVGRatioBaseMin = base.PGVGRatio
              PGVGRatioBaseMinId = base.id
            }
            if (base.PGVGRatio > PGVGRatioBaseMax) {
              PGVGRatioBaseMax = base.PGVGRatio
              PGVGRatioBaseMaxId = base.id
            }
          }
        })

        console.log('Extreme bases from', PGVGRatioBaseMin * 100, 'to', PGVGRatioBaseMax * 100, '%')

        // Check if the desired PG/VG ratio is reachable with our available bases
        if (basesNoNicotinePGVGRatio < PGVGRatioBaseMin) {
          console.warn('Too much VG in your base(s)!')
          isRecipeDoable = false
        }
        if (basesNoNicotinePGVGRatio > PGVGRatioBaseMax) {
          console.warn('Too much PG in your base(s)!')
          isRecipeDoable = false
        }

        // At this point, the recipe should be doable!

        quantityPGVGRatioBaseMin = basesNoNicotineQuantity * (basesNoNicotinePGVGRatio - PGVGRatioBaseMax) / (PGVGRatioBaseMin - PGVGRatioBaseMax)
        quantityPGVGRatioBaseMax = basesNoNicotineQuantity - quantityPGVGRatioBaseMin

        console.log(
          'Base min PGVG', quantityPGVGRatioBaseMin,
          'mL @', PGVGRatioBaseMin * 100, '%'
        )
        console.log(
          'Base max PGVG', quantityPGVGRatioBaseMax,
          'mL @', PGVGRatioBaseMax * 100, '%'
        )
        console.log('Faisability of recipe', isRecipeDoable)

        // POPULATE INGREDIENTS

        const r = []

        const ingredientBaseMin = this.getIngredients[this.getIngredients.findIndex(i => i.id === PGVGRatioBaseMinId)]
        const ingredientBaseMax = this.getIngredients[this.getIngredients.findIndex(i => i.id === PGVGRatioBaseMaxId)]
        const ingredientBaseNicotine = this.getIngredients[this.getIngredients.findIndex(i => i.id === baseNicotineId)]

        // Aromas & additives
        if (isRecipeDoable) {
          if (!this.mode.base) {
            this.recipeIngredients.forEach(ingredient => {
              const ingredientId = this.getIngredients.findIndex(
                i => i.id === ingredient.id
              )

              r.push({
                id: ingredient.id,
                name: this.getIngredients[ingredientId].name,
                ratio: ingredient.ratio,
                quantity: ingredient.ratio * this.recipeQuantity,
                price: this.getIngredients[ingredientId].price * (ingredient.ratio * this.recipeQuantity / 1000),
                color: this.getIngredients[ingredientId].color,
                viscosity: this.getIngredients[ingredientId].viscosity
              })
            })
          }

          // Min PG/VG ratio base
          r.unshift({
            id: PGVGRatioBaseMinId,
            name: ingredientBaseMin.name,
            ratio: quantityPGVGRatioBaseMin / this.recipeQuantity,
            quantity: quantityPGVGRatioBaseMin,
            price: ingredientBaseMin.price * quantityPGVGRatioBaseMin / 1000,
            color: ingredientBaseMin.color,
            viscosity: ingredientBaseMin.viscosity
          })

          // Max PG/VG ratio base
          r.unshift({
            id: PGVGRatioBaseMaxId,
            name: ingredientBaseMax.name,
            ratio: quantityPGVGRatioBaseMax / this.recipeQuantity,
            quantity: quantityPGVGRatioBaseMax,
            price: ingredientBaseMax.price * quantityPGVGRatioBaseMax / 1000,
            color: ingredientBaseMax.color,
            viscosity: ingredientBaseMax.viscosity
          })

          // Nicotine base
          if (this.mode.nicotine) {
            r.unshift({
              id: baseNicotineId,
              name: ingredientBaseNicotine.name,
              ratio: nicotineBaseRatio,
              quantity: quantityBaseNicotine,
              price: ingredientBaseNicotine.price * quantityBaseNicotine / 1000,
              color: ingredientBaseNicotine.color,
              viscosity: ingredientBaseNicotine.viscosity
            })
          }
        }

        return r
      },
      totalRatio () {
        let r = 0
        this.results.forEach(ingredient => { r += ingredient.ratio })
        return r
      },
      totalQuantity () {
        let r = 0
        this.results.forEach(ingredient => { r += ingredient.quantity })
        return r
      },
      totalPrice () {
        let r = 0
        this.results.forEach(ingredient => { r += ingredient.price ? ingredient.price : 0 })
        return r
      }
    },

    methods: {
      ...mapActions([
      ]),
      ...mapMutations([
      ]),
      roundNumber (n, precision = 1) {
        const factor = Math.pow(10, precision)
        return Math.round(n * factor) / factor
      }
    }
  }
</script>

<style lang="scss" scoped>

  @import "../styles/main";

  .results {

    @media (min-width: 40em) {
      display: flex;
      > * {
        flex-shrink: 1;
      }
    }
  }

  .beaker {
    margin: $gutter;
    display: flex;
    flex-direction: column;

    box-shadow: 0 4px 0 4px #666;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    overflow: hidden;
    height: 20rem;

    @media (min-width: 40em) {
      height: auto;
      flex-basis: 10%;
      margin-left: 0;
    }

    > * {
      // border: 2px solid red
      transition: all 0.4s;
    }
  }

  .results-list {
    width: 100%;
    font-size: 0.9rem;

    @media (min-width: 40em) {
      width: 90%;
      // flex-basis: 80%;
    }

    td, th {
      padding: $gutter $gutter-half;
    }

    thead {
      text-transform: uppercase;

      th {
        text-align: left;
      }
    }

    tfoot {
      font-weight: bold;
    }
  }

</style>

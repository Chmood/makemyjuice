<template>
  <section>

    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>name</th>
          <th>ratio</th>
          <th>quantity</th>
          <th>price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(result, index) in results" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ result.name }} ({{ result.id }})</td>
          <td>{{ result.ratio * 100 }}%</td>
          <td>{{ result.quantity }}mL</td>
          <td>{{ result.price }}$</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td></td>
          <td>TOTAL</td>
          <td>{{ totalRatio * 100 }}%</td>
          <td>{{ totalQuantity }}mL</td>
          <td>{{ totalPrice }}$</td>
        </tr>
      </tfoot>
    </table>


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
    ],
    computed: {
      ...mapGetters([
        'getIngredients',
        'getBases',
        'getAromas',
        'getAdditives',

        'getRecipeAromas',
        'getRecipeAdditives',

        'getRecipeQuantity',
        'getRecipePGVGRatio',
        'getRecipeNicotine'
      ]),
      recipeIngredients () {
        // Merge aromas and additives
        return this.getRecipeAromas.concat(this.getRecipeAdditives)
      },
      results () {
        let basesRatio = 1 // bases / all ratio
        let aromasRatio = 0 // aromas / all ratio
        let additivesRatio = 0 // additives / all

        let aromasQuantity = 0
        let aromasQuantityPG = 0
        let aromasPGVGRatio

        let basesQuantity
        let basesPGVGRatio

        console.warn('=========================================')

        // ADDITIVES

        // Substract additives from total
        this.getRecipeAdditives.forEach(ingredient => {
          basesRatio -= ingredient.ratio
          additivesRatio += ingredient.ratio
        })

        // AROMAS

        // Substract aromas from total
        this.getRecipeAromas.forEach(ingredient => {
          const ingredientId = this.getIngredients.findIndex(i => i.id === ingredient.id)
          const ingredientReal = this.getIngredients[ingredientId]

          basesRatio -= ingredient.ratio
          aromasRatio += ingredient.ratio

          aromasQuantity += ingredient.ratio * this.getRecipeQuantity
          aromasQuantityPG += ingredientReal.PGVGRatio * ingredient.ratio * this.getRecipeQuantity
        })

        basesQuantity = this.getRecipeQuantity * basesRatio
        aromasPGVGRatio = aromasQuantityPG / aromasQuantity

        console.log('Total aromas quantity', aromasQuantity, 'mL')
        console.log('Total aromas PG/VG ratio', aromasPGVGRatio * 100, '%')

        if (additivesRatio > 1 || aromasRatio > 1) {
          if (additivesRatio > 1) { console.warn('Too much additives!') }
          if (aromasRatio > 1) { console.warn('Too much aromas!') }
        }
        else if ((aromasRatio + additivesRatio) > 1) { console.warn('Too much aromas and/or additives!') }

        // const v1 = aromasQuantity
        // const v2 = basesQuantity
        // const vt = v1 + v2
        // const r1 = aromasPGVGRatio
        // const rt = this.getRecipePGVGRatio
        // basesPGVGRatio = (rt * vt - v1 * r1) / v2
        basesPGVGRatio = (this.getRecipePGVGRatio * (aromasQuantity + basesQuantity) - aromasQuantity * aromasPGVGRatio) / basesQuantity

        if (basesPGVGRatio < 0) { console.warn('Too much VG!') }
        else if (basesPGVGRatio > 1) { console.warn('Too much PG!') }

        console.log('Total bases quantity', basesQuantity, 'mL')
        console.log('Total bases PG/VG ratio', basesPGVGRatio * 100, '%')

        // TODO: use bases ingredients to achieve the mix
        // TODO: add nicotine computations

        // POPULATE INGREDIENTS

        const r = []
        let sum = 0

        this.recipeIngredients.forEach(ingredient => {
          const ingredientId = this.getIngredients.findIndex(
            i => i.id === ingredient.id
          )

          sum += ingredient.ratio

          r.push({
            id: ingredient.id,
            name: this.getIngredients[ingredientId].name,
            ratio: ingredient.ratio,
            quantity: ingredient.ratio * this.getRecipeQuantity,
            price: this.getIngredients[ingredientId].price * (ingredient.ratio * this.getRecipeQuantity / 1000)
          })
        })

        r.unshift({
          id: 0,
          name: 'BASE VG',
          ratio: (1 - sum) * (1 - basesPGVGRatio),
          quantity: (1 - sum) * (1 - basesPGVGRatio) * this.getRecipeQuantity
        })

        r.unshift({
          id: 0,
          name: 'BASE PG',
          ratio: (1 - sum) * basesPGVGRatio,
          quantity: (1 - sum) * basesPGVGRatio * this.getRecipeQuantity
        })

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
        this.results.forEach(ingredient => {
          r += ingredient.price ? ingredient.price : 0
        })
        return r
      }
    },

    methods: {
      ...mapActions([
      ]),
      ...mapMutations([
      ]),
      roundNumber (n, precision) {
        const factor = Math.pow(10, precision)
        return Math.round(n * factor) / factor
      }
    }
  }
</script>

<style lang="scss" scoped>

  @import "../styles/main";

  article {
    margin-bottom: $gutter;
  }

  td {
    padding: $gutter;
  }

</style>

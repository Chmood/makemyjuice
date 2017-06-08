<template>

  <div class="beaker-container">
    <div class="beaker">
      <div class="beaker-ingredient"
      v-for="(result, index) in results"
      :key="index"
      :style="{ flexBasis: result.ratio * 100 + '%' }"
      >
      <div class="beaker-face beaker-face--front" :style="{ backgroundColor: result.color }"></div>
      <div class="beaker-face beaker-face--back" :style="{ backgroundColor: result.color }"></div>
      <div class="beaker-face beaker-face--right" :style="{ backgroundColor: result.color }"></div>
      <div class="beaker-face beaker-face--left" :style="{ backgroundColor: result.color }"></div>
      <div class="beaker-face beaker-face--top" :style="{ backgroundColor: result.color }"></div>
    </div>
  </div>
  </div>

</template>

<script>
export default {
  props: [
    'results'
  ]
}
</script>

<style lang="scss" scoped>

@import "../styles/main";

// $beaker-height: 40vw;
$beaker-width: 10rem;
$beaker-width-slim: 5rem;

.beaker-container {//background: teal;
  @media (min-width: 40em) {
    height: auto;
    display: flex;
    flex-direction: column;
  }
}

.beaker {
  flex-grow: 1;
  width: $beaker-width;
  margin: $gutter * 4 auto; // not acurate
  display: flex;
  flex-direction: column;

  // box-shadow: 0 4px 0 4px #666;
  // border-bottom-left-radius: 4px;
  // border-bottom-right-radius: 4px;
  // overflow: hidden;
  height: 20rem;

  transform-style: preserve-3d;
  transform: rotateX(-25deg) rotateY(45deg);

  @media (min-width: 40em) {
    width: $beaker-width-slim;
    // height: auto;
    margin: 0 $gutter-double; // not acurate
    // flex-basis: 25%;
    // margin-left: 0;
  }
}

.beaker-ingredient {
  position: relative;
  // border: 2px solid red
  transition: all 0.4s;
  transform-style: preserve-3d;
}

.beaker-face {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.75;
}

.beaker-face--front { transform: translateZ($beaker-width / 2); }
.beaker-face--back { transform: translateZ(- $beaker-width / 2); }
.beaker-face--left { transform: rotateY(90deg) translateZ($beaker-width / 2); }
.beaker-face--right { transform: rotateY(90deg) translateZ(-$beaker-width / 2); }
.beaker-face--top { height: $beaker-width; transform: rotateX(90deg) translateZ($beaker-width / 2); }
// .beaker-face--bottom {
// 	height: $beaker-width;
//   transform: rotateX(90deg) translateZ(- $beaker-width / 2);
// }

@media (min-width: 40em) {
  .beaker-face--front { transform: translateZ($beaker-width-slim / 2); }
  .beaker-face--back { transform: translateZ(- $beaker-width-slim / 2); }
  .beaker-face--left { transform: rotateY(90deg) translateZ($beaker-width-slim / 2); }
  .beaker-face--right { transform: rotateY(90deg) translateZ(-$beaker-width-slim / 2); }
  .beaker-face--top { height: $beaker-width-slim; transform: rotateX(90deg) translateZ($beaker-width-slim / 2); }
}


</style>

<template>
  <CardBox class="card-front" :gradient="gradient">
    <div class="card-content">
      <img :src="image">
      <div class="weapon-name">
        <div class="weapon-label">
          {{ weapon.name }}
        </div>
      </div>
    </div>
  </CardBox>
</template>
<script>
import CardBox from "./CardBox.vue";

export default {
  name: "CardFront",
  components: {
    CardBox,
  },
  props: {
    image: {
      type: String,
      default: "",
    },
    weapon: Object,
    gradient: String,
  },
}
</script>
<style lang="scss">
  .card-front {
    .card-content {
      width: var(--card-content-size);
      height: var(--card-content-size);
      border-radius: var(--border-radius);
      padding: var(--card-padding);
    }
    img {
      height: 100%;
      border-radius: var(--border-radius);
      z-index: 1;
    }
    .weapon-label {
      font-size: 1.4em;
      position: relative;
      color: white;
      z-index: 4;
      width: 100%;
      padding: 0 var(--label-padding);
    }
    .weapon-name {
      position: relative;
      color: white;
      z-index: 4;
      text-align: center;
      top: calc(var(--card-size) / -4);
      width: calc(var(--card-size) / 2);
      left: calc(var(--card-size) / 6);
       &:before {
        content: "";
        background-color: black;
        opacity: .5;
        position: absolute;
        z-index: 2;
        left: -10%;
        top: 0;
        height: 100%;
        width: 120%;
        -webkit-transform: skewX(-10deg);
        -moz-transform: skewX(-10deg);
        -ms-transform: skewX(-10deg);
        transform: skewX(-10deg);
      }
    }
  }
</style>

<template>
  <CardRow class="gear">
    <div class="gear-container">
      <div class="gear-image">
        <img :src="require(`../../../assets/${gear.image}`)">
      </div>
      <div class="gear-abilities">
        <SubCircle main>
          <img :src="require(`../../../assets/${getImagePath('skill', gear.main)}`)">
        </SubCircle>
        <SubCircle v-for="(skill, i) in gear.skills" :key="i">
          <img :src="require(`../../../assets/${getImagePath('skill', skill)}`)">
        </SubCircle>
      </div>
    </div>
    </CardRow>
</template>
<script>
import CardRow from "./CardRow";
import SubCircle from "../../common/SubCircle";
import { getImagePath } from "/src/utils";

export default {
  name: "GearRow",
  components: {
    CardRow,
    SubCircle,
  },
  props: {
    gear: Object,
  },
  methods: {
    getImagePath,
  }
}
</script>
<style lang="scss">
    .gear-container {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin: 0 10px;
      z-index: 3;
    }
    .gear {
      z-index: 2;
      position: relative;
      border-radius: var(--border-radius);
      width: calc(var(--card-content-size) + var(--card-padding));
      &::before {
        content: "";
        height: 85%;
        width: 100%;
        position: absolute;
        border-radius: var(--border-radius);
        background-color: black;
        width: 100%;
        opacity: .25;
        z-index: 1;
      }
      .gear-image {
        display: flex;
        height: var(--gear-image-size);
        width: var(--gear-image-size);
        margin-right: var(--label-padding);
        img {
          height: var(--gear-image-size);
          width: var(--gear-image-size);
          display: flex;
          z-index: 2;
        }
      }
      .gear-abilities {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        flex: 1;
      }
    }
</style>

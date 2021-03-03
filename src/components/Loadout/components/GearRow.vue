<template>
  <CardRow class="gear">
    <div class="gear-container">
      <div class="gear-image">
        <img :src="gear.image">
      </div>
      <div class="gear-abilities">
        <SubCircle main>
          <img src="https://sendou.ink/_next/image?url=%2FabilityIcons%2FMPU.png&w=64&q=75">
        </SubCircle>
        <SubCircle>
          <img src="https://sendou.ink/_next/image?url=%2FabilityIcons%2FMPU.png&w=64&q=75">
        </SubCircle>
        <SubCircle>
          <img src="https://sendou.ink/_next/image?url=%2FabilityIcons%2FMPU.png&w=64&q=75">
        </SubCircle>
        <SubCircle>
          <img src="https://sendou.ink/_next/image?url=%2FabilityIcons%2FMPU.png&w=64&q=75">
        </SubCircle>
      </div>
    </div>
    </CardRow>
</template>
<script>
import CardRow from "./CardRow";
import SubCircle from "../../common/SubCircle";

export default {
  name: "GearRow",
  components: {
    CardRow,
    SubCircle,
  },
  props: {
    gear: Object,
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

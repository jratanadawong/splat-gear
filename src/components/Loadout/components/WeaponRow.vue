<template>
  <CardRow class="weapon-details">
    <div class="weapon-name">
      {{ weapon.name }}
    </div>
    <div class="sub-special-container">
      <div class="ss-circle">
        <img :src="require(`../../../assets/${weapon.sub.image}`)">
      </div>
      <div class="ss-circle">
        <img :src="require(`../../../assets/${weapon.special.image}`)">
      </div>
    </div>

    <div class="weapon-container">
      <div class="squid-circle">
        <img class="weapon-image" :src="require(`../../../assets/${weapon.image}`)">
      </div>
    </div>
  </CardRow>
</template>
<script>
import CardRow from "./CardRow";
import { getImagePath } from "/src/utils";

export default {
  name: "WeaponRow",
  components: {
    CardRow,
  },
  props: {
    weapon: Object,
  },
  methods: {
    getImagePath,
  },
}
</script>
<style lang="scss">
    .sub-special-container {
      display: flex;
      flex-direction: column;
      .ss-circle {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        height: 27.5px;
        width: 27.5px;
        border-radius: 60px;
        z-index: 2;
        &:before {
          content: "";
          border-radius: 50px;
          height: 27.5px;
          width: 27.5px;
          background-color: white;
          z-index: 1;
          position: absolute;
          opacity: .5;
        }
        &:first-of-type {
          margin-bottom: 5px;
        }
        img {
          height: 85%;
          z-index: 2;
        }
      }
    }
    .weapon-details {
      width: 92%;
      .weapon-name {
        font-size: 24px;
        display: flex;
        background-color: white;
        height: var(--weapon-row-size);
        border-radius: var(--border-radius);
        margin-right: 5px;
        width: 100%;
        justify-content: center;
        align-items: center;
      }
      justify-content: space-between;
      margin-bottom: -5px;
      .squid-circle {
        height: var(--weapon-row-size);
        width: var(--weapon-row-size);
        border-radius: 40px;
        position: relative;
        &:before {
          content: "";
          height: var(--weapon-row-size);
          width: var(--weapon-row-size);
          border-radius: var(--weapon-row-size);
          opacity: .5;
          background-image: url("https://imgur.com/ZkFADMU.png");
          position: absolute;
          z-index: 1;
          background-position: center -2px;
          background-repeat: no-repeat;
          background-size: cover;
        }
        img.weapon-image {
          position: relative;
          height: 100%;
          opacity: 1;
          z-index: 2;
        }
      }
    }
</style>

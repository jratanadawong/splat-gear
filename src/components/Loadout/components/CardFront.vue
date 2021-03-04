<template>
  <CardBox class="card-front">
    <div class="card-content">
      <img :src="image">
      <div class="weapon-name">
        <label class="weapon-label" for="weapon-select">
          {{ weapon.name }}
        </label>
        <Select id="weapon-select" :items="getData('main')"
          displayField="Name" :value="weapon.name" selectionField="Id">
        </Select>
      </div>
    </div>
  </CardBox>
</template>
<script>
import { getData } from "/src/utils";

import CardBox from "./CardBox.vue";
import Select from "../../common/Select";

export default {
  name: "CardFront",
  components: {
    CardBox,
    Select,
  },
  props: {
    image: {
      type: String,
      default: "",
    },
    weapon: Object,
  },
  methods: {
    getData,
  }
}
</script>
<style lang="scss">
  .card-front {
    // select {
    //   appearance: none;
    //   height: 0;
    //   width: 0;
    // }
    .card-content {
      width: var(--card-content-size);
      height: var(--card-content-size);
      border-radius: var(--border-radius);
      padding: var(--card-padding);
    }
    img {
      height: 100%;
      border-radius: 10px;
      z-index: 1;
    }
    .weapon-label {
      cursor: pointer;
      pointer-events: none;
      font-size: 24px;
      position: relative;
      color: white;
      z-index: 4;
      padding: 0 var(--label-padding);
    }
    .weapon-name {
      cursor: pointer;
      font-family: "Splatoon2", arial;
      display: flex;
      position: relative;
      color: white;
      width: 100%;
      line-height: 1.5em;
      padding: .5em 0;
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

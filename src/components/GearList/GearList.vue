<template>
  <div class="gear-list">
    <slot />
  </div>
</template>
<script>
import { getItem } from "/src/utils";

export default {
  name: "GearList",
  props: {
  },
  data() {
    return {
      loadouts: [
        {
          name: "Carbon Roller Deco",
          weapon: getItem("main", 1001),
          gear: {
            head: {
              ...getItem("head", 3014),
              main: "ssu",
              skills: ["res", "qsj", "bdx"],
            },
            clothes: {
              ...getItem("clothes", 5020),
              main: "ns",
              skills: ["ssu", "ssu", "res"],
            },
            shoes: {
              ...getItem("shoes", 2018),
              main: "mpu",
              skills: ["mpu", "mpu", "mpu"],
            }
          }
        },
        {
          name: "Custom Dualie Squelchers",
          weapon: getItem("main", 5031),
          gear: {
            head: {
              ...getItem("head", 2010),
              main: "mpu",
              skills: ["mpu", "mpu", "res"],
            },
            clothes: {
              ...getItem("clothes", 10007),
              main: "mpu",
              skills: ["mpu", "mpu", "bdx"],
            },
            shoes: {
              ...getItem("shoes", 23002),
              main: "mpu",
              skills: ["mpu", "ism", "ism"],
            }
          }
        },
      ],
    }
  },
};
</script>
<style lang="scss">
</style>

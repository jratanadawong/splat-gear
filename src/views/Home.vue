<template>
  <div class="home">
    <Loadout v-for="(loadout, index) in loadouts" :key="index" :loadout="loadout"/>
  </div>
</template>

<script>
import { getItem } from "/src/utils";

import Loadout from '@/components/Loadout/Loadout.vue'

export default {
  name: 'Home',
  components: {
    Loadout,
  },
  data() {
    return {
      loadouts: [
        {
          image: "https://imgur.com/WXNHEQ8.jpeg",
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
          image: "https://imgur.com/yDMlQeU.jpg",
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
        {
          image: "https://imgur.com/LjXMosP.jpg",
          name: "N-ZAP '85",
          weapon: getItem("main", 60),
          gear: {
            head: {
              ...getItem("head", 8003),
              main: "lde",
              skills: ["mpu", "mpu", "ss"],
            },
            clothes: {
              ...getItem("clothes", 1047),
              main: "rsu",
              skills: ["rsu", "rsu", "mpu"],
            },
            shoes: {
              ...getItem("shoes", 27104),
              main: "os",
              skills: ["qsj", "res", "bdx"],
            }
          }
        },
        {
          image: "https://imgur.com/fQqrC0C.jpg",
          name: "Tentatek Splattershot",
          weapon: getItem("main", 41),
          gear: {
            head: {
              ...getItem("head", 3004),
              main: "qr",
              skills: ["mpu", "mpu", "mpu"],
            },
            clothes: {
              ...getItem("clothes", 8007),
              main: "qr",
              skills: ["res", "qsj", "bdx"],
            },
            shoes: {
              ...getItem("shoes", 7000),
              main: "sj",
              skills: ["ssu", "ssu", "ssu"],
            }
          }
        },
      ],
    }
  }
}
</script>
<style lang="scss">
  .home {
    display: flex;
    flex-flow: row wrap;
  }
</style>

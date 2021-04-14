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
          },
          gradient: 'linear-gradient(-45deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)',
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
          },
          gradient: 'linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',
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
          },
          gradient: 'linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)',
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
          },
          gradient: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
        },
        {
          image: "https://imgur.com/dqoFitn.jpg",
          name: ".96 Gal",
          weapon: getItem("main", 80),
          gear: {
            head: {
              ...getItem("head", 3014),
              main: "ssu",
              skills: ["qsj", "res", "bdx"],
            },
            clothes: {
              ...getItem("clothes", 27004),
              main: "scu",
              skills: ["scu", "ss", "ss"],
            },
            shoes: {
              ...getItem("shoes", 2038),
              main: "mpu",
              skills: ["mpu", "mpu", "mpu"],
            }
          },
          gradient: 'linear-gradient(to top right, #f7ff00, #db36a4)',
        },
        {
          image: "https://imgur.com/PGPbQIu.jpg",
          name: "Nozzlenose L-3 D",
          weapon: getItem("main", 301),
          gear: {
            head: {
              ...getItem("head", 1002),
              main: "mpu",
              skills: ["mpu", "mpu", "mpu"],
            },
            clothes: {
              ...getItem("clothes", 7007),
              main: "ssu",
              skills: ["ssu", "mpu", "mpu"],
            },
            shoes: {
              ...getItem("shoes", 2011),
              main: "dr",
              skills: ["qsj", "res", "bdx"],
            }
          },
          gradient: 'linear-gradient(to top right, #00c9ff, #92fe9d)',
        },
        {
          image: "https://imgur.com/1kfmJoJ.jpg",
          name: "Splattershot Jr.",
          weapon: getItem("main", 10),
          gear: {
            head: {
              ...getItem("head", 3008),
              main: "lde",
              skills: ["bpu", "bpu", "res"],
            },
            clothes: {
              ...getItem("clothes", 25000),
              main: "res",
              skills: ["scu", "bdx", "scu"],
            },
            shoes: {
              ...getItem("shoes", 25000),
              main: "iss",
              skills: ["iss", "iss", "iss"],
            }
          },
          gradient: 'linear-gradient(to top right, #556270, #ff6b6b)',
        },
        {
          image: "https://imgur.com/ADsbRRM.jpg",
          name: "Kensa Splattershot Pro",
          weapon: getItem("main", 72),
          gear: {
            head: {
              ...getItem("head", 3002),
              main: "mpu",
              skills: ["mpu", "mpu", "ssu"],
            },
            clothes: {
              ...getItem("clothes", 7007),
              main: "mpu",
              skills: ["mpu", "ssu", "qsj"],
            },
            shoes: {
              ...getItem("shoes", 2022),
              main: "mpu",
              skills: ["mpu", "res", "bdx"],
            }
          },
          gradient: 'linear-gradient(to top right, #556270, #ff6b6b)',
        },
        {
          image: "https://imgur.com/xQDpQmF.jpg",
          name: "Custom Jet Squelcher",
          weapon: getItem("main", 91),
          gear: {
            head: {
              ...getItem("head", 3007),
              main: "scu",
              skills: ["scu", "scu", "scu"],
            },
            clothes: {
              ...getItem("clothes", 25007),
              main: "spu",
              skills: ["spu", "bpu", "bpu"],
            },
            shoes: {
              ...getItem("shoes", 27104),
              main: "os",
              skills: ["qsj", "res", "bdx"],
            }
          },
          gradient: 'linear-gradient(to top right, #556270, #ff6b6b)',
        },
                {
          image: "https://imgur.com/AW8cdbH.jpg",
          name: "Splat Charger",
          weapon: getItem("main", 2015),
          gear: {
            head: {
              ...getItem("head", 3007),
              main: "scu",
              skills: ["scu", "scu", "scu"],
            },
            clothes: {
              ...getItem("clothes", 5017),
              main: "spu",
              skills: ["spu", "bpu", "bpu"],
            },
            shoes: {
              ...getItem("shoes", 27104),
              main: "os",
              skills: ["qsj", "res", "bdx"],
            }
          },
          gradient: 'linear-gradient(to top right, #556270, #ff6b6b)',
        },
        {
          image: "https://imgur.com/RjaVeSb.jpg",
          name: "Kensa Undercover Brella",
          weapon: getItem("main", 6022),
          gear: {
            head: {
              ...getItem("head", 3002),
              main: "mpu",
              skills: ["mpu", "mpu", "ssu"],
            },
            clothes: {
              ...getItem("clothes", 1032),
              main: "iss",
              skills: ["iss", "bdx", "res"],
            },
            shoes: {
              ...getItem("shoes", 2014),
              main: "ssu",
              skills: ["ssu", "ssu", "qsj"],
            }
          },
          gradient: 'linear-gradient(to top right, #556270, #ff6b6b)',
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

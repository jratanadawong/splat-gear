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
              ...getItem("shoes", 2027),
              main: "mpu",
              skills: ["mpu", "mpu", "mpu"],
            }
          },
          background: 'linear-gradient(to bottom left, #f217fe, #263506)',
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
          background: 'linear-gradient(to top right, #952c1b, #98575f, #f217fe)',
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
          background: 'linear-gradient(45deg, rgba(62,66,56,1) 10%, rgba(244,65,252,1) 55%, rgba(166,223,243,1) 90%)',
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
          background: 'linear-gradient(to right top, #f54bb6, #353590, #1bcb41)',
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
          background: 'linear-gradient(to top right, #32980d, #f54bb6, #fcd500)',
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
              ...getItem("clothes", 7009),
              main: "ssu",
              skills: ["ssu", "mpu", "mpu"],
            },
            shoes: {
              ...getItem("shoes", 2011),
              main: "dr",
              skills: ["qsj", "res", "bdx"],
            }
          },
          background: 'linear-gradient(to top right, #7e3fa5, #2430a5, #53f9f4)',
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
          background: 'linear-gradient(to top right, #f06e23, #d92fee)',
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
          background: 'linear-gradient(to top right, #614385, #516395)',
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
          background: 'linear-gradient(to bottom left, #02AAB0, #1c666b, #f32cfe)',
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
          background: 'linear-gradient(to top right, #dd5e89, #f7bb97)',
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
          background: 'linear-gradient(to bottom left, #556270, #fff, #f430fd)',
        },
        {
          image: "https://imgur.com/EvPZExH.jpg",
          name: "Octoshot Replica",
          weapon: getItem("main", 46),
          gear: {
            head: {
              ...getItem("head", 3014),
              main: "ssu",
              skills: ["res", "qsj", "bdx"],
            },
            clothes: {
              ...getItem("clothes", 6003),
              main: "ssu",
              skills: ["spu", "spu", "ss"],
            },
            shoes: {
              ...getItem("shoes", 6016),
              main: "sj",
              skills: ["mpu", "mpu", "mpu"],
            }
          },
          background: 'linear-gradient(to top right, #7a183c, #5da3b1)',
        },
        {
          image: "https://imgur.com/ad4LQaB.jpg",
          name: "Foil Squeezer",
          weapon: getItem("main", 401),
          gear: {
            head: {
              ...getItem("head", 25000),
              main: "ssu",
              skills: ["res", "iss", "iss"],
            },
            clothes: {
              ...getItem("clothes", 5036),
              main: "spu",
              skills: ["spu", "spu", "spu"],
            },
            shoes: {
              ...getItem("shoes", 27104),
              main: "os",
              skills: ["qsj", "res", "bdx"],
            }
          },
          background: 'linear-gradient(to top right, #6b1d0d, #fff, #b70707, #d72efc)',
        },
        {
          image: "https://imgur.com/WU7Azxx.jpg",
          name: "Tenta Brella",
          weapon: getItem("main", 6010),
          gear: {
            head: {
              ...getItem("head", 25008),
              main: "ism",
              skills: ["ism", "ism", "spu"],
            },
            clothes: {
              ...getItem("clothes", 5036),
              main: "spu",
              skills: ["spu", "spu", "spu"],
            },
            shoes: {
              ...getItem("shoes", 27104),
              main: "os",
              skills: ["qsj", "res", "bdx"],
            }
          },
          background: 'linear-gradient(to top right, #361a32, #da78f4, #59c8e5)',
        },
        {
          image: "https://imgur.com/Mlae24r.jpg",
          name: "[Ballpoint] Splatling",
          weapon: getItem("main", 4030),
          gear: {
            head: {
              ...getItem("head", 1019),
              main: "rsu",
              skills: ["rsu", "rsu", "rsu"],
            },
            clothes: {
              ...getItem("clothes", 9008),
              main: "res",
              skills: ["qsj", "bdx", "ism"],
            },
            shoes: {
              ...getItem("shoes", 1015),
              main: "rsu",
              skills: ["rsu", "rsu", "rsu"],
            }
          },
          background: 'linear-gradient(to top right, #e619f6, #f5251e)',
        },
        {
          image: "https://imgur.com/hZrtBFj.jpg",
          name: "E-Liter 4K",
          weapon: getItem("main", 2030),
          gear: {
            head: {
              ...getItem("head", 2009),
              main: "ssu",
              skills: ["mpu", "mpu", "ss"],
            },
            clothes: {
              ...getItem("clothes", 25006),
              main: "rp",
              skills: ["qsj", "res", "bdx"],
            },
            shoes: {
              ...getItem("shoes", 23002),
              main: "mpu",
              skills: ["mpu", "ism", "ism"],
            }
          },
          background: 'linear-gradient(to top right, #d94f3d, #e1eaab, #d497b3)',
        },
        {
          image: "https://imgur.com/aGZ9VDD.jpg",
          name: "Grim Range Blaster",
          weapon: getItem("main", 222),
          gear: {
            head: {
              ...getItem("head", 5001),
              main: "iss",
              skills: ["ism", "bpu", "bpu"],
            },
            clothes: {
              ...getItem("clothes", 5018),
              main: "mpu",
              skills: ["qsj", "ism", "res"],
            },
            shoes: {
              ...getItem("shoes", 3008),
              main: "sj",
              skills: ["bpu", "ss", "ism"],
            }
          },
          background: 'linear-gradient(to top right, #e00887,  #fccd00, #9502cd, #fff, #34a8b4, #253872)',
        },
        {
          image: "https://imgur.com/vHX20rF.jpg",
          name: "Ninja Squid! - Tri-Slosher",
          weapon: getItem("main", 3010),
          gear: {
            head: {
              ...getItem("head", 2008),
              main: "qr",
              skills: ["qr", "qr", "qr"],
            },
            clothes: {
              ...getItem("clothes", 5022),
              main: "ns",
              skills: ["qsj", "res", "bdx"],
            },
            shoes: {
              ...getItem("shoes", 2040),
              main: "sj",
              skills: ["ssu", "ssu", "ssu"],
            }
          },
          background: 'linear-gradient(to top right, #e694fc, #c133e9, #6ed617)',
        },
        {
          image: "https://imgur.com/vqpNnLT.jpg",
          name: "Kensa .52 Gal",
          weapon: getItem("main", 52),
          gear: {
            head: {
              ...getItem("head", 3014),
              main: "ssu",
              skills: ["res", "qsj", "bdx"],
            },
            clothes: {
              ...getItem("clothes", 7009),
              main: "ssu",
              skills: ["ssu", "mpu", "mpu"],
            },
            shoes: {
              ...getItem("shoes", 6016),
              main: "sj",
              skills: ["mpu", "mpu", "mpu"],
            }
          },
          background: 'linear-gradient(to top right, #7a183c, #5da3b1)',
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
    font-size: 12px;
  }
  @media print {
    .home {
      display: block;
      // border: 1px solid maroon;
    }
  }
</style>

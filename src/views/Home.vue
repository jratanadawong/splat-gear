<template>
  <div class="home">
    <Loadout v-for="(loadout, index) in loadouts" :key="index" :loadout="loadout"/>
  </div>
</template>

<script>
import { createLoadout } from "/src/utils";

import Loadout from '@/components/Loadout/Loadout.vue';

const bgImages = [
  "https://i.imgur.com/GXrcAPB.png",
  "https://64.media.tumblr.com/b2cd0f6455954c3081a49c21234bc628/tumblr_oncujzI2Qb1uii9t6o1_1280.jpg",
  "https://i.imgur.com/5MHALvC.png",
  "https://img.wallpapersafari.com/desktop/1440/900/17/68/GFqc1g.png",
];

const generateBg = () => {
  return `url(${bgImages[Math.floor(Math.random() * bgImages.length)]})`;
};

export default {
  name: 'Home',
  components: {
    Loadout,
  },
  data() {
    return {
      loadouts: [
        createLoadout({
          image: "https://imgur.com/JWzQmXd.png",
          weapon: "Kensa .52 Gal",
          gear: {
            head: {
              name: "Full Moon Glasses",
              skills: "cb qsj res bdx",
            },
            clothes: {
              name: "deep-octo satin jacket",
              skills: "ssu ssu ssu mpu"
            },
            shoes: {
              name: "new-day arrows",
              skills: "sj mpu mpu res"
            }
          },
          background: generateBg(),
        }),
        createLoadout({
          image: "https://imgur.com/3gDLTOf.png",
          weapon: "Kensa .52 Gal",
          gear: {
            head: {
              name: "Knitted Hat",
              skills: "qr qr qr qr",
            },
            clothes: {
              name: "kensa coat",
              skills: "ssu bdx res qsj"
            },
            shoes: {
              name: "annaki arachno boots",
              skills: "sj mpu mpu mpu"
            }
          },
          background: generateBg(),
        }),
        createLoadout({
          image: "https://imgur.com/w12EPdn.png",
          weapon: "Neo Splash-o-matic",
          gear: {
            head: {
              name: "Annaki Mask",
              skills: "ssu mpu mpu mpu",
            },
            clothes: {
              name: "black inky rider",
              skills: "mpu mpu bpu bpu"
            },
            shoes: {
              name: "annaki arachno boots",
              skills: "mpu qsj res bdx",
            }
          },
          background: generateBg(),
        }),
        createLoadout({
          image: "https://imgur.com/m442lGE.png",
          weapon: "Neo Splash-o-matic",
          gear: {
            head: {
              name: "Pilot Goggles",
              skills: "mpu mpu mpu ssu",
            },
            clothes: {
              name: "red-check shirt",
              skills: "mpu mpu mpu ssu",
            },
            shoes: {
              name: "punk blacks",
              skills: "sj qsj res bdx",
            }
          },
          background: generateBg(),
        }),
        createLoadout({
          image: "https://imgur.com/SnjVGLl.png",
          weapon: "Kensa Splattershot",
          gear: {
            head: {
              name: "White Arrowbands",
              skills: "lde mpu mpu mpu",
            },
            clothes: {
              name: "krak-on 528",
              skills: "qr ssu ssu ss",
            },
            shoes: {
              name: "punk blacks",
              skills: "sj qsj res bdx",
            }
          },
          background: generateBg(),
        }),
        createLoadout({
          image: "https://imgur.com/HlwVH6S.png",
          weapon: "Custom Dualie Squelchers",
          gear: {
            head: {
              name: "Yamagiri Beanie",
              skills: "mpu mpu mpu res",
            },
            clothes: {
              name: "hothouse hoodie",
              skills: "mpu mpu mpu bdx",
            },
            shoes: {
              name: "pearl punk crowns",
              skills: "mpu mpu ism ism",
            }
          },
          background: generateBg(),
        }),
        createLoadout({
          image: "https://imgur.com/NgrpTBQ.png",
          weapon: "N-ZAP '85",
          gear: {
            head: {
              name: "Skull Bandana",
              skills: "lde mpu mpu ss",
            },
            clothes: {
              name: "sailor-stripe tee",
              skills: "rsu mpu scu scu",
            },
            shoes: {
              name: "neo octoling boots",
              skills: "os qsj res bdx",
            }
          },
          background: generateBg(),
        }),
        createLoadout({
          image: "https://imgur.com/dABsfOy.png",
          weapon: "N-ZAP '85",
          gear: {
            head: {
              name: "short beanie",
              skills: "cb qr qr ss",
            },
            clothes: {
              name: "positive longcuff sweater",
              skills: "ssu mpu mpu mpu",
            },
            shoes: {
              name: "neo octoling boots",
              skills: "os qsj res bdx",
            }
          },
          background: generateBg(),
        }),
        createLoadout({
          image: "https://imgur.com/uZ4mfSn.png",
          weapon: "L-3 Nozzlenose D",
          gear: {
            head: {
              name: "Takoroka Mesh",
              skills: "mpu mpu mpu mpu",
            },
            clothes: {
              name: "forge inkling parka",
              skills: "rsu rsu mpu mpu",
            },
            shoes: {
              name: "mint dakroniks",
              skills: "dr qsj res bdx",
            }
          },
          background: generateBg(),
        }),
        createLoadout({
          image: "https://imgur.com/c5Gg4sc.png",
          weapon: "H-3 Nozzlenose D",
          gear: {
            head: {
              name: "Fishfry Biscuit Bandana",
              skills: "mpu mpu mpu scu",
            },
            clothes: {
              name: "pink hoodie",
              skills: "mpu mpu mpu ss",
            },
            shoes: {
              name: "navy enperrials",
              skills: "mpu qsj res bdx",
            }
          },
          background: generateBg(),
        }),
        createLoadout({
          image: "https://imgur.com/s7nO4J0.png",
          weapon: "Nautilus 79",
          gear: {
            head: {
              name: "Annaki Mask",
              skills: "ssu mpu mpu mpu",
            },
            clothes: {
              name: "annaki polpo-pic tee",
              skills: "rsu rsu rsu mpu",
            },
            shoes: {
              name: "punk blacks",
              skills: "sj qsj res bdx",
            }
          },
          background: generateBg(),
        }),
        createLoadout({
          image: "https://imgur.com/J8SYpfJ.png",
          weapon: "Foil Squeezer",
          gear: {
            head: {
              name: "Octoglasses",
              skills: "lde qsj res bdx",
            },
            clothes: {
              name: "dark bomber jacket",
              skills: "spu spu spu spu",
            },
            shoes: {
              name: "red slip-ons",
              skills: "os ssu ssu ss",
            }
          },
          background: generateBg(),
        }),
        createLoadout({
          image: "https://imgur.com/1xeRJSf.png",
          weapon: "Sploosh-o-matic 7",
          gear: {
            head: {
              name: "18k aviators",
              skills: "lde bpu bpu res",
            },
            clothes: {
              name: "online jersey",
              skills: "ssu ssu ssu ssu",
            },
            shoes: {
              name: "neo octoling boots",
              skills: "os qsj res bdx",
            }
          },
          background: generateBg(),
        }),
        createLoadout({
          image: "https://imgur.com/1kfmJoJ.png",
          weapon: "Splattershot Jr.",
          gear: {
            head: {
              name: "18k aviators",
              skills: "lde bpu bpu res",
            },
            clothes: {
              name: "School Uniform",
              skills: "iru scu bdx scu",
            },
            shoes: {
              name: "school shoes",
              skills: "iss iss iss iss",
            }
          },
          background: generateBg(),
        }),
        createLoadout({
          image: "https://imgur.com/fQqrC0C.png",
          weapon: "Tentatek Splattershot",
          gear: {
            head: {
              name: "black arrowbands",
              skills: "qr mpu mpu mpu",
            },
            clothes: {
              name: "baby-jelly shirt",
              skills: "qr res qsj bdx",
            },
            shoes: {
              name: "blue slip-ons",
              skills: "sj ssu ssu ssu",
            }
          },
          background: generateBg(),
        }),
        createLoadout({
          image: "https://imgur.com/EvPZExH.png",
          weapon: "Octo Shot Replica",
          gear: {
            head: {
              name: "SV925 Circle Shades",
              skills: "ssu res qsj bdx",
            },
            clothes: {
              name: "white king tank",
              skills: "ssu spu spu ss",
            },
            shoes: {
              name: "Annaki Arachno boots",
              skills: "sj mpu mpu mpu",
            }
          },
          background: generateBg(),
        }),
        createLoadout({
          image: "https://imgur.com/dBvL18t.png",
          weapon: "Kensa Splattershot Pro",
          gear: {
            head: {
              name: "Pilot Goggles",
              skills: "mpu mpu mpu ssu",
            },
            clothes: {
              name: "red-check shirt",
              skills: "mpu mpu mpu ssu",
            },
            shoes: {
              name: "navy enperrials",
              skills: "mpu qsj res bdx",
            }
          },
          background: generateBg(),
        }),
        createLoadout({
          image: "https://imgur.com/nxJ8JvD.png",
          weapon: ".96 Gal",
          gear: {
            head: {
              name: "Golden Toothpick",
              skills: "scu scu scu ss",
            },
            clothes: {
              name: "positive longcuff sweater",
              skills: "ssu mpu mpu mpu",
            },
            shoes: {
              name: "navy enperrials",
              skills: "mpu qsj res bdx",
            }
          },
          background: generateBg(),
        }),
        createLoadout({
          image: "https://imgur.com/v1jqwBn.png",
          weapon: "Custom Jet Squelcher",
          gear: {
            head: {
              name: "Fake contacts",
              skills: "scu scu scu scu",
            },
            clothes: {
              name: "Octoking HK Jersey",
              skills: "mpu bpu bpu ss",
            },
            shoes: {
              name: "neo octoling boots",
              skills: "os qsj res bdx",
            }
          },
          background: generateBg(),
        }),
        createLoadout({
          image: "https://imgur.com/NlhAFW7.png",
          weapon: "Kensa Rapid Blaster",
          gear: {
            head: {
              name: "Fierce Fishskull",
              skills: "mpu mpu res iru",
            },
            clothes: {
              name: "half-sleeve sweater",
              skills: "iss iss bdx res",
            },
            shoes: {
              name: "pearlescent squidkid IV",
              skills: "ssu ssu ssu ssu",
            }
          },
          background: generateBg(),
        }),
        createLoadout({
          image: "https://imgur.com/EuLOfGz.png",
          weapon: "Grim Range Blaster",
          gear: {
            head: {
              name: "Designer Headphones",
              skills: "iss ism bpu bpu",
            },
            clothes: {
              name: "takoroka windcrusher",
              skills: "mpu qsj ism res",
            },
            shoes: {
              name: "crazy arrows",
              skills: "sj bpu ss ism",
            }
          },
          background: generateBg(),
        }),
        createLoadout({
          image: "https://imgur.com/fsVTBck.png",
          weapon: "Carbon Roller Deco",
          gear: {
            head: {
              name: "SV925 Circle Shades",
              skills: "ssu res qsj bdx",
            },
            clothes: {
              name: "FA-01 Jacket",
              skills: "ns ssu ssu res",
            },
            shoes: {
              name: "sun & shade squidkid IV",
              skills: "mpu mpu mpu mpu",
            }
          },
          background: generateBg(),
        }),
        createLoadout({
          image: "https://imgur.com/QISqu6j.png",
          weapon: "Hero Charger Replica",
          gear: {
            head: {
              name: "half-rim glasses",
              skills: "spu spu spu mpu",
            },
            clothes: {
              name: "crimson parashooter",
              skills: "scu ism ism qsj",
            },
            shoes: {
              name: "moto boots",
              skills: "os mpu mpu qsj",
            }
          },
          background: generateBg(),
        }),
        createLoadout({
          image: "https://imgur.com/0ENrIps.png",
          weapon: "Hero Charger Replica",
          gear: {
            head: {
              name: "Octoglasses",
              skills: "lde qsj res bdx",
            },
            clothes: {
              name: "baseball jersey",
              skills: "scu scu scu scu",
            },
            shoes: {
              name: "red slip-ons",
              skills: "os ssu ssu ss",
            }
          },
          background: generateBg(),
        }),
        createLoadout({
          image: "https://imgur.com/nAECbZ0.png",
          weapon: "Firefin Splat Charger",
          gear: {
            head: {
              name: "Golden Toothpick",
              skills: "scu scu scu ss",
            },
            clothes: {
              name: "white sailor suit",
              skills: "ism ssu qsj ism",
            },
            shoes: {
              name: "friendship bracelet",
              skills: "ssu qsj res bdx",
            }
          },
          background: generateBg(),
        }),
        createLoadout({
          image: "https://imgur.com/qbc3JHH.png",
          weapon: "E-Liter 4k",
          gear: {
            head: {
              name: "Annaki Beret & Glasses",
              skills: "ism ism mpu mpu",
            },
            clothes: {
              name: "blue sailor suit",
              skills: "rp mpu scu scu",
            },
            shoes: {
              name: "friendship bracelet",
              skills: "ssu qsj res bdx",
            }
          },
          background: generateBg(),
        }),
        createLoadout({
          image: "https://imgur.com/rEmQObg.png",
          weapon: "Soda Slosher",
          gear: {
            head: {
              name: "Skate Helmet",
              skills: "lde qr qr qr",
            },
            clothes: {
              name: "baby-jelly shirt",
              skills: "qr res qsj bdx",
            },
            shoes: {
              name: "blue slip-ons",
              skills: "sj ssu ssu ssu",
            }
          },
          background: generateBg(),
        }),
        createLoadout({
          image: "https://imgur.com/EbN3whE.png",
          weapon: "Tri-Slosher",
          gear: {
            head: {
              name: "backwards cap",
              skills: "cb qsj ss bdx",
            },
            clothes: {
              name: "green zip hoodie",
              skills: "qr qr qr qr",
            },
            shoes: {
              name: "green laceups",
              skills: "sj ssu ssu res",
            }
          },
          background: generateBg(),
        }),
        createLoadout({
          image: "https://imgur.com/1JuTW7O.png",
          weapon: "Kensa Sloshing Machine",
          gear: {
            head: {
              name: "Octoglasses",
              skills: "lde qsj res bdx",
            },
            clothes: {
              name: "vintage check shirt",
              skills: "ssu ism ism res",
            },
            shoes: {
              name: "cherry kicks",
              skills: "sj rsu rsu rsu",
            }
          },
          background: generateBg(),
        }),
        createLoadout({
          image: "https://imgur.com/a3e7Ruu.png",
          weapon: "Custom Explosher",
          gear: {
            head: {
              name: "Snorkel Mask",
              skills: "ssu ism ism iru",
            },
            clothes: {
              name: "anchor life vest",
              skills: "ssu qr ism ism",
            },
            shoes: {
              name: "Flipper Floppers",
              skills: "ism bdx ism iru",
            }
          },
          background: generateBg(),
        }),
        createLoadout({
          image: "https://imgur.com/Mlae24r.png",
          weapon: "Ballpoint Splatling Nouveau",
          gear: {
            head: {
              name: "king flip mesh",
              skills: "rsu rsu rsu rsu",
            },
            clothes: {
              name: "front zip vest",
              skills: "res qsj bdx ism",
            },
            shoes: {
              name: "N-Pacer Cao",
              skills: "os rsu rsu rsu",
            }
          },
          background: generateBg(),
        }),
        createLoadout({
          image: "https://imgur.com/DPkexLx.png",
          weapon: "Kensa Glooga Dualies",
          gear: {
            head: {
              name: "Octoling Shades",
              skills: "lde iru qsj ss",
            },
            clothes: {
              name: "half-sleeve sweater",
              skills: "iss iss bdx res",
            },
            shoes: {
              name: "Punk whites",
              skills: "scu scu scu scu",
            }
          },
          background: generateBg(),
        }),
        createLoadout({
          image: "https://imgur.com/rB95weA.png",
          weapon: "Dark Tetra Dualies",
          gear: {
            head: {
              name: "Special Forces Beret",
              skills: "mpu mpu bdx res",
            },
            clothes: {
              name: "white inky rider",
              skills: "qr qr qr qsj",
            },
            shoes: {
              name: "white kicks",
              skills: "sj qr qr qr",
            }
          },
          background: generateBg(),
        }),
        createLoadout({
          image: "https://imgur.com/WU7Azxx.png",
          weapon: "Tenta Brella",
          gear: {
            head: {
              name: "Enchanted hat",
              skills: "ism ism ism spu",
            },
            clothes: {
              name: "dark bomber jacket",
              skills: "spu spu spu spu",
            },
            shoes: {
              name: "neo octoling boots",
              skills: "os qsj res bdx",
            }
          },
          background: generateBg(),
        }),
        createLoadout({
          image: "https://imgur.com/JHH7RHY.png",
          weapon: "Kensa Undercover Brella",
          gear: {
            head: {
              name: "Pilot Goggles",
              skills: "mpu mpu mpu ssu",
            },
            clothes: {
              name: "half-sleeve sweater",
              skills: "iss iss bdx res",
            },
            shoes: {
              name: "white norimaki 750s",
              skills: "ssu ssu ssu qsj",
            }
          },
          background: generateBg(),
        }),
      ],
    }
  }
}
</script>
<style lang="scss">
  .home {
    display: flex;
    flex-flow: row wrap;
    font-size: 9.5px;
  }
  @media print {
    .home {
      display: block;
      // border: 1px solid maroon;
    }
  }
</style>

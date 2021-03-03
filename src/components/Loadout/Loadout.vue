<template>
  <div class="card">

  <CardFront :weapon="loadout.weapon" :image="frontImage"/>
  <CardBack :loadout="loadout"/>

  </div>
</template>

<script>
import CardBack from "./components/CardBack";
import CardFront from "./components/CardFront";

export default {
  name: 'Loadout',
  components: {
    CardBack,
    CardFront,
  },
  data() {
    return {
      frontImage: "https://imgur.com/WXNHEQ8.jpeg",
      loadout: {
        weapon: {
          name: "Carbon Roller",
          image: "https://sendou.ink/_next/image?url=%2Fweapons%2FCarbon%20Roller%20Deco.png&w=128&q=75",
          sub: {
            name: "Burst Bomb",
            image: "https://cdn.wikimg.net/en/splatoonwiki/images/2/29/S2_Weapon_Sub_Burst_Bomb.png",
          },
          special: {
            name: "Auto Bomb Rush",
            image: "https://cdn.wikimg.net/en/splatoonwiki/images/2/21/S2_Weapon_Special_Autobomb_Launcher.png",
          },
        },
        gear: {
          head: {
            name: "",
            image: "https://sendou.ink/_next/image?url=%2Fimages%2Fgear%2FHed_EYE014.png&w=256&q=75",
            main: "mpu",
            subs: ["mpu", "mpu", "mpu",],
          },
          clothing: {
            name: "",
            image: "https://sendou.ink/_next/image?url=%2Fimages%2Fgear%2FClt_JKT020.png&w=256&q=75",
            main: "",
            subs: [],
          },
          shoes: {
            name: "",
            image: "https://sendou.ink/_next/image?url=%2Fimages%2Fgear%2FShs_SHI018.png&w=256&q=75",
            main: "",
            subs: [],
          }
        }

      }
    }
  }
}
</script>
<style lang="scss">
:root {
  --card-size: 400px;
  --border-radius: .5rem;
  --card-padding: 25px;
  --label-padding: 10px;
  --gear-box-shadow: inset 0px 0px 0px var(--card-padding) rgba(0,0,0,.5);
  --card-content-size: calc(100% - (var(--card-padding) * 2));
  --gear-image-size: calc(var(--card-size) / 4 - 40px);
  --weapon-row-size: 60px;
}

@font-face {
  font-family: "Splatoon2";
  src: url("https://frozenpandaman.github.io/Splatoon2.otf");
}

.card {
  display: flex;
  flex-direction: row;
  font-family: "Splatoon2", arial;
}

</style>

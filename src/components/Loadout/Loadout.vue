<template>
  <div class="card">

  <CardFront :weapon="loadout.weapon" :image="frontImage"/>
  <CardBack :loadout="loadout"/>

  </div>
</template>

<script>
import CardBack from "./components/CardBack";
import CardFront from "./components/CardFront";
import { getItem } from "/src/utils";

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

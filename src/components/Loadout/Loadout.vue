<template>
  <div class="card">
    <div class="card-container">
      <CardFront :weapon="loadout.weapon" :image="loadout.image" :background="loadout.background" :name="loadout.name"/>
      <CardBack :loadout="loadout"/>
    </div>
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
  props: {
    loadout: {
      type: Object,
    },
  },
}
</script>
<style lang="scss">
:root {
  --card-size: 46mm;
  --border-radius: .5rem;
  --card-padding: calc(var(--card-size) / 16);
  --label-padding: calc(var(--card-size) / 40);
  --gear-box-shadow: inset 0px 0px 0px var(--card-padding) rgba(0,0,0,.5);
  --card-content-size: calc(100% - (var(--card-padding) * 2));
  --gear-image-size: calc(var(--card-size) / 4 - (var(--label-padding) * 4));
  --weapon-row-size: calc(var(--label-padding) * 6);
}

@font-face {
  font-family: "Splatoon2";
  src: url("https://frozenpandaman.github.io/Splatoon2.otf");
}

.card {
  display: flex;
}

.card-container {
  display: flex;
  flex-direction: row;
  font-family: "Splatoon2", arial;
  // margin-bottom: calc(var(--card-size) * .1);
  // margin-right: calc(var(--card-size) * .1);
  margin-bottom: 1px;
  margin-right: 1px;
  break-inside: avoid;
  .weapon-name, .weapon-label {
    line-height: 12px;
  }
}

  @media print {
    .card-container {
      // break-inside: avoid;
      // page-break-before: always;
      // page-break-inside: avoid;
      // position: relative;
    }
    .card {
      // display: block !important;
      // position: relative;
      display: block;
      float: left;
      break-inside: avoid;
    }
  }

</style>

<template>
  <CardBox class="card-back">
    <div class="card-content">
      <WeaponRow :weapon="loadout.weapon"/>
      <GearRow :gear="loadout.gear.head"/>
      <GearRow :gear="loadout.gear.clothes"/>
      <GearRow :gear="loadout.gear.shoes"/>
    </div>
  </CardBox>
</template>
<script>
import CardBox from "./CardBox.vue";
import GearRow from "./GearRow.vue";
import WeaponRow from "./WeaponRow.vue";

export default {
  name: "CardBack",
  components: {
    CardBox,
    GearRow,
    WeaponRow,
  },
  props: {
    loadout: Object,
  }
}
</script>

<style lang="scss" scoped>
  .card-back {
    .card-content {
      display: flex;
      flex-direction: column;
      box-shadow: var(--gear-box-shadow);
      width: var(--card-content-size);
      height: var(--card-content-size);
      border-radius: var(--border-radius);
      padding: var(--card-padding);
      justify-content: center;
      align-items: center;
    }
  }
</style>

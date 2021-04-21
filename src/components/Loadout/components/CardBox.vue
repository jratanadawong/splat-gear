<template>
  <div class="card-box" :style="{ background: background }">
    <slot />
  </div>
</template>
<script>
export default {
  name: "CardBox",
  props: ["background"],
}
</script>
<style lang="scss">
  // @media print {
  //   .card-box {
  //     // break-inside: avoid;
  //     // page-break-before: always;
  //     page-break-inside: avoid;
  //   }
  // }
  .card-box {
    height: var(--card-size);
    width: var(--card-size);
    border-radius: var(--border-radius);
    -webkit-print-color-adjust: exact;

  }
</style>

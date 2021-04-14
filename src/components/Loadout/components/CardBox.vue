<template>
  <div class="card-box" :style="{ background: gradient }">
    <slot />
  </div>
</template>
<script>
export default {
  name: "CardBox",
  props: ["gradient"],
}
</script>
<style lang="scss">
  .card-box {
    height: var(--card-size);
    width: var(--card-size);
    border-radius: var(--border-radius);
    margin-right: 1px;
  }
</style>

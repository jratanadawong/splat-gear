<template>
  <div class="card-box">
    <slot />
  </div>
</template>
<script>
export default {
  name: "CardBox",
}
</script>
<style lang="scss">
  .card-box {
    height: var(--card-size);
    width: var(--card-size);
    border-radius: var(--border-radius);
    margin-right: 1px;
    background: linear-gradient(-45deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);
  }
</style>

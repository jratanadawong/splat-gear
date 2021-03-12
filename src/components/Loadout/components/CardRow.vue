<template>
  <div class="card-row">
    <slot />
  </div>
</template>
<script>
export default {
  name: "CardRow",
}
</script>
<style lang="scss">
  .card-row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    margin-top: calc(var(--label-padding) / 2);
    width: var(--card-content-size);
    &:first-of-type {
      margin-top: 0;
    }
  }
</style>

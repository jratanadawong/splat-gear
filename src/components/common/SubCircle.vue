<template>
  <div class="sub-circle" :class={main}>
    <slot />
  </div>
</template>
<script>
export default {
  name: "SubCircle",
  props: {
    main: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
<style lang="scss">
 .sub-circle {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    background-color: black;
    height: calc(var(--gear-image-size) * .8);
    width: calc(var(--gear-image-size) * .8);
    box-shadow: inset 2px 2px 10px -2px white;
    img {
      height: calc(var(--gear-image-size) * .65);
      z-index: 2;
    }
    &.main {
      height: var(--gear-image-size);
      width: var(--gear-image-size);
      img {
        height: calc(var(--gear-image-size) * .8);
      }
    }
  }
</style>

<template>
  <div>
    <input :list="id" :name="id" :id="id">
    <datalist :name="id">
      <!--  v-model="selected" -->
      <option v-for="(item, i) in items" :key="i" :value="item[selectionField] || item">
        {{ translateItem(item[displayField]) || item }}
      </option>
    </datalist>
    </div>
</template>
<script>
import { translateItem } from '/src/utils';

export default {
  name: "Select",
  props: [ 'id', 'items', 'displayField', 'selectionField', 'value' ],
  data() {
    return {
      selected: '',
    }
  },
  methods: {
    onInput() {
      this.$emit('input', this.selected);
    },
    translateItem,
  }
}
</script>
<style lang="scss">
  input {
    z-index: 6;
  }
  datalist {
    cursor: pointer;
    text-align-last: center;
    font-family: "Splatoon2", arial;
    text-align: center;
    z-index: 5;
    margin: 0 auto;
    width: 100%;
    // -webkit-appearance: none;
    // appearance: none;
    border-style: none;
    background-color: transparent;
    &:focus {
      background-color: none;
      border-style: none;
      outline: none;
    }
  }
</style>

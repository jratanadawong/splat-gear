<template>
  <div class="home">
    <Loadout />
  </div>
</template>

<script>
// @ is an alias to /src
import Loadout from '@/components/Loadout/Loadout.vue'

export default {
  name: 'Home',
  components: {
    Loadout,
  }
}
</script>

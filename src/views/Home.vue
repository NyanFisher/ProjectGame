<template>
  <div class="container">
    <GameBack />
  </div>
</template>

<script> 
import GameBack from '@/components/GameBack'
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    GameBack
  },
}
</script>

<style scoped>
  .container {
    display: block;
    width: 100%;
  }


</style>
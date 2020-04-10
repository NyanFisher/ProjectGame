<template>
  <div class="container">
    <GameBack />
  </div>
</template>

<script> 
import GameBack from '@/components/GameBack'
// @ is an alias to /src


export default {
  name: 'NewGame',
  components: {
    GameBack
  },
  mounted() {
    if (!this.$store.getters.user_profile)
      this.$router.push('/profile')
  }
}
</script>

<style scoped>
  .container {
    display: block;
    width: 100%;
  }


</style>
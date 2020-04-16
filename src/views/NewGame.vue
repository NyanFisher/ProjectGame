<template>
  <div class="container">
    <GameBack />
  </div>
</template>

<script> 
import GameBack from '@/components/GameBack'


export default {
  name: 'NewGame',
  data: function() {
    return {
      start_time: Date.now(),
    }
  },
  components: {
    GameBack,
  },
  mounted: function() {
    this.$nextTick(function() {
      if (!this.$store.getters.user_profile)
      {
        this.$router.push('/profile')
        return 
      }
      this.$store.dispatch('set_statistics_from_db')
    })
  },
  destroyed: function() {
    const statistcs = {
      number_visits: 1,
      time_in_game: Date.now() - this.start_time,
      count_points: 100,
    }
    this.$store.dispatch('update_statistics', statistcs)
  }
}
</script>

<style scoped>
  .container {
    display: block;
    width: 100%;
  }


</style>
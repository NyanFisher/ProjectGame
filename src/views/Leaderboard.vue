<template>
  <div class="container">
    <LeaderboardTime />
    <LeaderboardPoint />
  </div>
</template>

<script>

import LeaderboardTime from '@/components/LeaderboardTime'
import LeaderboardPoint from '@/components/LeaderboardPoint'
export default {
  name: "Leaderboard",
  components: {
    LeaderboardTime,
    LeaderboardPoint
  },  
  methods: {
  },
  mounted: function() {
    this.$nextTick(function() {
      this.$store.dispatch('set_statistics_time_and_points')
    })
  }
}
</script>

<style scoped>
.container{
  justify-content: space-around;
  margin-top: 20px;
}
</style>

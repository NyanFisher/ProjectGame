<template>
  <div class="container">
    <LeaderboardTime />
    <LeaderboardPoint />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LeaderboardTime from '@/components/LeaderboardTime'
import LeaderboardPoint from '@/components/LeaderboardPoint'
export default {
  name: "Leaderboard",
  components: {
    LeaderboardTime,
    LeaderboardPoint
  },
  computed: {
    ...mapGetters(['get_all_users']),
  },
  methods: {
  },
  mounted() {
    this.$store.dispatch('set_all_users')
  }
}
</script>

<style scoped>
.container{
  justify-content: space-around;
  margin-top: 20px;
}
</style>

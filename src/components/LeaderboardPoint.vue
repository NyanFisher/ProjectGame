<template>
    <article class="leader-point">
      <h3 class="leader-point-h3">По количеству очков</h3>
      <ul class="leader-board-ul">
        <li class="leader-board-li" v-for="(user, index) in get_all_users" :key="user.nickname">
          <ul class="user-ul">
            <li class="user-li">
              <span>{{index + 1}}</span>
            </li>
            <li class="user-li">
              <img class="user-li-img" :src="user.avatar" alt="">
            </li>
            <li class="user-li">
              <p>{{user.nickname}}</p>
            </li>
          </ul>
        </li>
      </ul>
    </article>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: "About",
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
.leader-point{
  width: 400px;
  background-color: #f0eef9;
}
.leader-point-h3{
    padding: 20px 10px;
  margin: 0;
  text-align: center;
  background-color: yellow;
}
</style>
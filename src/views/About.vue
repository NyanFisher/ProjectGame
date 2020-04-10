<template>
  <div class="container">
    <article class="leader-time">
      <h3 class="leader-time-h3">По количеству времени в игре</h3>
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
  </div>
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
.container{
  justify-content: space-around;
  margin-top: 20px;
}
.leader-time, .leader-point{
  width: 400px;
  background-color: #f0eef9;
}
.leader-time-h3{
  padding: 20px 10px;
  margin: 0;
  text-align: center;
  background-color: #847ad1;
}

.leader-point-h3{
    padding: 20px 10px;
  margin: 0;
  text-align: center;
  background-color: yellow;
}
.leader-board-ul{
  margin: 0;
  padding: 20px;
  list-style-type: none;
}

.leader-board-li{
  padding: 10px;
  border:2px solid #f3f2f8;
  border-radius: 5px;
  margin: 0 0 10px;
  background-color: #ffffff;
}

.user-ul{
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.user-li{
  margin-right: 20px;
}
.user-li:last-child{
  margin: 0;
}
.user-li-img{
  width: 40px;
  height: 40px;
  background-image: url('../assets/img/icon-profile.png');
  background-repeat: no-repeat;
  background-size: 100%;
}
</style>

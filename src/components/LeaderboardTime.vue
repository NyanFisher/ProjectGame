<template>
    <article class="leader-time">
      <h3 class="leader-time-h3">По количеству времени в игре</h3>
      <ul class="leader-board-ul">
        <li class="leader-board-li" v-for="(user, index) in get_stat_time" :key="user.nickname">
          <ul class="user-ul">
            <li class="user-li">
              <span>{{index + 1}}</span>
            </li>
            <li class="user-li">
              <img class="user-li-img" :src="get_avatars(user.avatar)" alt="">
            </li>
            <li class="user-li">
              <p>{{user.nickname}}</p>
            </li>
            <li class="user-li">
              <p>{{user.count_time}} секунд</p>
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
    ...mapGetters(['get_stat_time']),
  },
  methods: {
    get_avatars(img){
      if (img)
        return img
      return require('../assets/img/icon-profile.png')
    }
  },
}
</script>
<style>
.leader-time{
  width: 400px;
  background-color: #f0eef9;
}
.leader-time-h3{
  padding: 20px 10px;
  margin: 0;
  text-align: center;
  background-color: #847ad1;
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
}
</style>
import Vue from 'vue'
import VueRouter from 'vue-router'
import NewGame from '../views/NewGame.vue'
import store from '../store'
Vue.use(VueRouter)

const routes = [
  {
    path: '/new-game',
    name: 'NewGame',
    component: NewGame,
    beforeEnter(to, from, next) {
      store.getters.check_user ? next() : next('/')
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue'),
    beforeEnter(to, from, next) {
      store.getters.check_user ? next() : next('/')
    }
  },
  {
    path: '/',
    name: 'Authorization',
    component: () => import('../views/Auth.vue'),
  },
  {
    path: '/leaderboard',
    name: 'Leaderboard',
    component: () => import('../views/Leaderboard.vue'),
  },
  {
    path: '/load',
    name: 'Load',
    component: () => import('../views/Load.vue'),
  }
  
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

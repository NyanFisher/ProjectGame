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
      store.getters.check_user ? next() : next('/auth')
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue'),
    beforeEnter(to, from, next) {
      store.getters.check_user ? next() : next('/auth')
    }
  },
  {
    path: '/auth',
    name: 'Authorization',
    component: () => import('../views/Auth.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

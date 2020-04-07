import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter(to, from, next) {
      store.getters.check_user ? next() : next('/sign-in')
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    beforeEnter(to, from, next) {
      store.getters.check_user ? next() : next('/sign-in')
    }
  },
  {
    path: '/sign-in',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/sign-up',
    name: 'Registration',
    component: () => import('../views/Registration.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

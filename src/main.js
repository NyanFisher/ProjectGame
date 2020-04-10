import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import firebase from 'firebase/app'
import "normalize.css"
import "@/assets/css/style.css"
import 'firebase/auth'
import 'firebase/database'
import 'firebase/messaging'
import 'firebase/storage'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    const firebaseConfig = {
      apiKey: "AIzaSyCQ6OJPl7_1jhvcrBIxNvaguvDDAyDqlzg",
      authDomain: "game-nfcompany.firebaseapp.com",
      databaseURL: "https://game-nfcompany.firebaseio.com",
      projectId: "game-nfcompany",
      storageBucket: "game-nfcompany.appspot.com",
      messagingSenderId: "334877744771",
      appId: "1:334877744771:web:c01ba1b788d962eb2245b6"
    }
    firebase.initializeApp(firebaseConfig)

    firebase.auth().onAuthStateChanged(user => {
      if (user){
        this.$store.dispatch('logged_user', user)
        this.$store.dispatch('get_profile_in_db')
        this.$router.push('/')
      }
    })
  }
}).$mount('#app')

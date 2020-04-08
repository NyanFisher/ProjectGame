<template>
    <div id="nav">
      <router-link v-for="router_link in router_links" :key='router_link.id' :to="router_link.url">{{router_link.title}}</router-link>
      <li v-if="check_user">
          <a @click="logout">Logout</a>
      </li>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name: 'Header',
    methods:{
        logout() {
            this.$store.dispatch('logout_user')
            this.$router.push('/auth')
        }
    },
    computed: {
        ...mapGetters(['check_user']),
        router_links(){
            if(this.check_user){
                return [
                    {id: 0, url: '/', title: 'Game'},
                    {id: 1, url: '/profile', title: 'Profile'},
                    {id: 2, url: '/about', title: 'About'},
                ]
            }
            return []
        }
    }
}
</script>
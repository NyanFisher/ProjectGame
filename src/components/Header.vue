<template>
<header class="header">
    <div class="container">
        <div class="profile">
            <ProfileData @show_menu="menu_open_or_close"/>
            <transition name="fade">
                <Navigation v-if="menu" @choice_link="menu_open_or_close" :class="{menushow: menu}"/>
            </transition>
        </div>
        <li class="logout" v-if="check_user">
            <a @click="logout">Выйти</a>
        </li>
    </div>
</header>
</template>

<script>
import {mapGetters} from 'vuex'

import ProfileData from '@/components/ProfileData.vue'
import Navigation from '@/components/Navigation.vue'

export default {
    name: 'Header',
    components:{
     ProfileData,
     Navigation
    },
    data() {
        return {
            menu: false,
            music: new Audio()
        }
    },
    methods:{
        menu_open_or_close(){
            this.menu = !this.menu
        },
        logout() {
            this.$store.dispatch('logout_user')
            this.$router.push('/auth')
            window.location.reload()
        },
    },
    computed: {
        ...mapGetters(['check_user']), 
    },
}
</script>

<style scoped>
.header{
    height: 60px;
    background-color: #443d3a;
    color: #ffffff;
}
.menushow {
    width: max-content;
    max-height: 240px;
    padding: 5px 0;
    overflow: visible;
}
.logout{
    list-style-type: none;
    padding: 20px 20px;
    cursor: pointer;
    font-size: 24px;
}
.profile{ 
    position: relative;
}
.container{
    justify-content: space-between;

}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
</style>
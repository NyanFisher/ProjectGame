<template>
    <nav class="navigation">
        <ul class="navigation-ul">
            <li v-for="router_link in router_links" :key='router_link.id'  @click="choice_link" class="navigation-li">
                <router-link class="icon"  :class="router_link.class" :to="router_link.url">{{router_link.title}}</router-link>
            </li>
        </ul>
    </nav> 
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name: "Navigation",
    computed: {
        ...mapGetters(['check_user']),
        router_links(){
            if(this.check_user){
                return [
                    {id: 0, url: '/profile', title: 'Профиль', class: 'profile-icon'},
                    {id: 1, url: '/', title: 'Новая игра', class: 'new-game-icon'},
                    {id: 2, url: '/about', title: 'Загрузить',  class: 'load-game-icon'},
                ]
            }
            return []
        }
    },
    methods: {
        choice_link(){
            this.$emit('choice_link')
        }
    }
}
</script>

<style>
.navigation{
    position: absolute;
    top: 60px;
    left: 0;
    max-height:0px;
    z-index: 1;
    background-color: #e8e8e8;
    overflow: hidden;
    -webkit-transition:max-height 0.4s linear;
    -moz-transition:max-height 0.4s linear;
    transition:max-height 0.4s linear;

    border-radius: 0 0 10px 10px;
    color:#000000;
}

.navigation-ul{
    margin: 0;
    padding: 0;
    list-style-type: none;
}
.navigation-li{
    padding: 10px;

    font-size: 30px;
}

.icon{
    position: relative;
    padding-left:30px;
}
.profile-icon::before{
    content: '';
    position: absolute;
    top: 3px;
    left: -2px;
    padding: 14px;
    background-image: url('../assets/img/icon-profile.png');
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    content: '';
}

.new-game-icon::before{
    content: '';
    position: absolute;
    top: 3px;
    left: -2px;
    padding: 14px;
    background-image: url('../assets/img/new_game.png');
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    content: '';
}

.load-game-icon::before{
    content: '';
    position: absolute;
    top: 3px;
    left: -2px;
    padding: 14px;
    background-image: url('../assets/img/load.png');
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    content: '';
}
</style>
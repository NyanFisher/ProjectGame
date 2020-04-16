<template>
    <div class="container" :class=load[0]>
        <div class="local-container">
            <div class="profile-create " :class=load[1]>
                <div v-show="get_loading">
                    <img class='avatar-profile-create' :src="get_img" alt="">
                    <div>
                        <p class="p-profile-create nickname-profile-create"><span class="profile-create-span">Ник:</span>{{get_nickname}} </p>
                        <p class="p-profile-create"> <span class="profile-create-span">Ваше имя:</span>{{get_first_name}}</p>
                        <p class="p-profile-create"><span class="profile-create-span">Ваша фамилия:</span>{{get_second_name}} </p>
                        <p class="p-profile-create"><span class="profile-create-span">Количество очков:</span>{{get_count_points}} </p>
                        <p class="p-profile-create"><span class="profile-create-span">Количество посещений игры:</span>{{get_number_visits}} </p>
                        <p class="p-profile-create"><span class="profile-create-span">Время в игре:</span>{{get_time_in_game}} секунд</p>
                    </div>
                </div>
                <button class="button-change" v-show="get_loading" @click="swap_visible">Изменить профиль</button>
                <ChangeProfile v-show="!get_loading" @back="swap_visible"/>
            </div>        
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ChangeProfile from '@/components/ChangeProfile'

export default {
    name: "Profile",
    components: {
        ChangeProfile
    },
    computed: {
        ...mapGetters(['get_loading', 'get_img', 'user', 
        'loading', 'get_nickname', 'get_first_name', 
        'get_second_name', 'get_count_points', 'get_time_in_game',
        'get_number_visits']),
        load(){
            if (this.loading){
                return ['spinner', 'visually-hidden']
            }
            else{
                return ['','']
            }
        },
        get_image(){
            if (this.get_img)
                return  this.get_img
            return require('../assets/img/icon-profile.png')
        }
    },
    methods: {
        swap_visible(){
            this.$store.dispatch('swap_loading')
        }
    }
}
</script>

<style>
.local-container{
    display: flex;
    justify-content: center;
    margin: 0 auto;

}
.profile-create{
    display: flex;
	flex-flow: column wrap;
    justify-content: center;

    width: 500px;
    margin-top: 20px;
}
.p-profile-create {
    margin: 0;
    padding: 15px;
    font-size: 30px;
    background-color: antiquewhite;
}
.profile-create-span{
    margin-right: 10px;
    font-size: 16px;
}
.button-change{
    margin-top: 20px;
    width: max-content;
    align-self: flex-end;
    padding: 10px 20px;
    border: none;
    border-radius: 10px;
}
.button-change:hover{
    background-color: burlywood;
}
.avatar-profile-create{
    max-height: 150px;
    margin-bottom: 20px;
    align-self: center  ;
}
</style>
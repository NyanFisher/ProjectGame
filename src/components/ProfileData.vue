<template>
    <div class="profile-data" v-show="user" @click="show_menu">
        <img class="avatar" :src="img" alt="">
        <p class="nickname">{{get_nickname}}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: "ProfileData",
    computed: {
        ...mapGetters(['get_img', 'get_nickname']),
        user(){
            if (!this.$store.getters.user)
                return false
            return true
        },
        img(){
            if(!this.get_img)
                return require('../assets/img/icon-profile.png')
            return this.get_img
        }
    },
    methods: {
        show_menu(){
            this.$emit('show_menu')
        }
    }
}
</script>
<style scoped>
.profile-data{
    display: flex;
    align-items: center;
    height: 100%;

    cursor: pointer;
}

.avatar{
    padding: 2px;
    width: 55px;
    height: 55px;
    border-radius: 30px;
    margin-right: 10px;
    margin-top: 0;
}

.nickname{
    margin: 0;

    font-size: 30px;
    font-weight: bold;
}
</style>
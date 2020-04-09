<template>
    <div class="profile-data" @click="show_menu">
        <img class="avatar" :src="get_img" alt="">
        <p class="nickname">{{get_nickname}}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: "ProfileData",
    computed: {
        ...mapGetters(['get_img', 'get_nickname'])
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
    padding: 6px;
    width: 60px;
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
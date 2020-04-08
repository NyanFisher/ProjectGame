<template>
    <div class="container" :class=load[0]>
        <div :class=load[1]>
            <img :src="get_img" alt="">
            <ChangeProfile v-show="!get_loading"/>
            <button @click="swap_visible"></button>
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
        ...mapGetters(['get_loading', 'get_img', 'user', 'loading']),
        load(){
            if (this.loading){
                return ['spinner', 'visually-hidden']
            }
            else{
                return ['','']
            }
        },
    },
    mounted() {
        this.$store.dispatch('get_profile_in_db')
    },
    methods: {
        swap_visible(){
            this.$store.dispatch('swap_loading')
        }
    }
}
</script>

<style scoped>

</style>
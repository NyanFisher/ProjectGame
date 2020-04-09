<template>
    <div class="container" :class=load[0]>
        <div :class=load[1]>
            <img :src="get_img" alt="">
            <ChangeProfile v-show="!get_loading"/>
            <button v-show="get_loading" @click="swap_visible">SWAP</button>
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
    methods: {
        swap_visible(){
            this.$store.dispatch('swap_loading')
        }
    }
}
</script>

<style scoped>

</style>
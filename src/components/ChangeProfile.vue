<template>
    <form method="post" >
        <input required type="file" name="file-img" @change="on_file_selected">
        <input required type="text" name="nickname" v-model="nickname">
        <input type="text" name="first_name" v-model="first_name">
        <input type="text" name="last_name" v-model="second_name">
        <button @click.prevent="create_new_profile">SEND</button>
    </form>
</template>


<script>
import { mapGetters } from 'vuex'
export default {
    name: "ChangeProfile",
    data() {
        return {
            selected_file: '',
            nickname: '',
            first_name: '',
            second_name: '',
        }
    },
    mounted() {
    },
    computed: {
        ...mapGetters(['loading', 'get_nickname']),
    },
    methods: {
        on_file_selected(event){
            this.selected_file = event.target.files[0]
        },
        create_new_profile(){
            const file_image = new FormData() 
            file_image.append('image', this.selected_file, this.selected_file.name)
            const data = {
                nickname: this.nickname,
                first_name: this.first_name,
                second_name: this.second_name,
                file: file_image
            }
            this.$store.dispatch('create_new_profile', data)
        }
    }
}
</script>
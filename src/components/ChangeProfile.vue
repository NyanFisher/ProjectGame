<template>
    <form method="post" class="profile-create update">
        <img class='avatar-profile-create' :src="get_img" alt="">
        <input required type="file" name="file-img" @change="on_file_selected">
        <div class=inputs>
            <div class="p-profile-create nickname-profile-create">
                <label for="nickname" class="profile-create-span">Ник:</label>
                <input class="input-profile-update" required type="text" name="nickname" v-model="nickname">
            </div>
            <div class="p-profile-create"> 
                <label for="first_name" class="profile-create-span">Ваше имя:</label>
                <input class="input-profile-update" type="text" name="first_name" v-model="first_name">
            </div>
            <div class="p-profile-create">
                <label for="last_name" class="profile-create-span">Ваша фамилия:</label>
                <input class="input-profile-update" type="text" name="last_name" v-model="second_name">
            </div>
        </div>
        <div class="buttons">
            <button v-show="!get_nickname" @click.prevent="create_new_profile" class="button-change">Сохранить изменения</button>
            <button v-show="get_nickname" @click.prevent="change_profile" class="button-change">Сохранить изменения</button>
            <button v-show="get_nickname" class="button-back" @click.prevent="back" >
                Назад
            </button>
        </div>
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
            time: 0,
        }
    },
    computed: {
        ...mapGetters(['loading', 'get_nickname', 'get_img', 'get_first_name', 'get_second_name']),
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
        },
        change_profile(){
            let file_image = ''
            if (this.selected_file)
                file_image = this.selected_file
            else
                file_image = ''
            const data = {
                nickname: this.nickname,
                first_name: this.first_name,
                second_name: this.second_name,
                file: file_image
            }
            this.$store.dispatch('change_profile', data)
        },
        back(){
            this.$emit('back')
        }
    },
    mounted: function() {
        this.$nextTick(function() {
            this.nickname = this.get_nickname
            this.first_name = this.get_first_name
            this.second_name = this.get_second_name
        })
    },
}
</script>

<style scoped>
.update{
    display: flex;
    justify-content: center;
}
.p-profile-create{
    display: flex;
    justify-content: space-between;
}
.input-profile-update{
    width: 260px;
}
.inputs{
    margin-top: 20px;
}
.buttons{
    display: flex;
    justify-content: flex-end;
}
.button-back{
    margin-top: 20px;
    margin-left: 20px;
    width: max-content;
    align-self: flex-end;
    padding: 10px 20px;
    border: none;
    border-radius: 10px;
}
.button-back:hover{
    background-color: burlywood;
}
</style>
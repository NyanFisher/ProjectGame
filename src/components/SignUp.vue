<template>
    <form class="registration" method="post">
        <label class="registration-label" for="email">Емаил</label>
        <input class="registration-input" type="email" name="email" required placeholder="Введите email" v-model="email">

        <label class="registration-label" for="password">Пароль</label>
        <input class="registration-input" type="password" name="password" required placeholder="Введите пароль" v-model="password">

        <label class="registration-label" for="repeat-password">Повторный пароль</label>
        <input class="registration-input" type="password" name="repeat-password" required placeholder="Повторно введите пароль" v-model="repeat_password">

        <input @click="on_submit" type="submit" v-model="value_button" name="submit">
    </form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: "SignUp",
    data () {
        return {
            errors: [],
            email: '',
            password: '',
            repeat_password: '',
        }
    },
    methods: {
        ...mapActions(['change_status', 'register_user']),
        check_form() {
            if (!this.email) {
                this.errors.push('Почта указана неверно. Пример: info@mail.ru')
            }
            if (!this.password) {
                this.errors.push(`Пароль должен состоять из 6 символов. В котором будут использованны символыы латиницы,`)
            }
            if (this.password != this.repeat_password) {
                this.errors.push('Пароли должны совпадать')
            }
            if (this.errors.length) {
                return false
            }
            return true
        },
        on_submit(e) {
            if (this.check_form()){
                const user = {
                    email: this.email,
                    password: this.password,
                }
                this.register_user(user)
                    .then(() => {
                        console.log("REG")
                        this.change_status("OK")
                        this.$router.push('/')
                    })
                    .catch(err => {
                        this.change_status(err.message)
                    })
            }
            e.preventDefault();
            return false
        }
    },
    computed: {
        ...mapGetters(['loading']),
        value_button(){
            if (this.loading){
                return 'Загрузка'
            }
            else{
                return 'Зарегистрироваться'
            }
        }
    }
}
</script>
<style scoped>
.registration{
    width: max-content;
    padding: 20px 20px;

    background-color: #efeeed;
    border-radius: 20px;
    box-shadow:  0 0 10px rgba(0,0,0,0.5);
}

.registration-input,
.registration-label {
    display: block;
}

.registration-input {
    padding: 10px 20px;
    border-radius: 10px;
    border: 1px solid #000000;
    margin-bottom: 10px;
}
.registration-label{
    width: max-content;
    margin-bottom: 5px;
}

</style>
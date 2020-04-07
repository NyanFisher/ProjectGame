<template>
    <form method="post">
        <label for="email">Введите email</label>
        <input type="email" name="email" required id="email" v-model="email">
        <label for="password">Введите пароль</label>
        <input type="password" name="password" required id="password" v-model="password">
        <input type="submit" @click="on_submit" v-model="value_button">
    </form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'SignIn',
    data () {
        return {
            email: '',
            password: '',
            errors: [],
        }
    },
    methods: {
        ...mapActions(['login_user', 'change_status']),
        check_form() {
            if (!this.email) {
                this.errors.push('Почта указана неверно. Пример: info@mail.ru')
            }
            if (!this.password) {
                this.errors.push(`Пароль должен состоять из 6 символов. В котором будут использованны символыы латиницы,`)
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
                this.login_user(user)
                    .then(() => {
                        console.log("LOG")
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
                return 'Войти'
            }
        }
    }
}
</script>
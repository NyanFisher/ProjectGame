<template>
    <form class="form" method="post" v-on:submit.prevent="on_submit">
        <label class="form-label visually-hidden" for="email">Введите email</label>
        <div class="form-email-password">
            <input class="form-input" type="email" name="email" placeholder="Введите email" required v-model.trim="email">
            <span class="form-icon email"></span>
        </div>
        <p class="input-error" v-show="error_email">{{error_email}}</p>

        <label class="form-label visually-hidden" for="password">Введите пароль</label>
        <div class="form-email-password">
            <input class="form-input" type="password" name="password"  placeholder="Введите пароль" required v-model.trim="password">
            <span class="form-icon password"></span>
        </div>
        <p class="input-error" v-show="error_password">{{error_password}}</p>

        <input class="form-button" type="submit" name="submit" v-model="value_button">
    </form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import * as check from '../store/email_password'
export default {
    name: 'SignIn',
    data () {
        return {
            email: '',
            password: '',
            error_email: null,
            error_password: null,
        }
    },
    methods: {
        ...mapActions(['login_user', 'change_status']),
        check_form() {
            if (check.check_email_or_password(this.email, 'email'))
            {
                this.error_email = null}
            else{
                this.error_email = 'Почта указана неверно. Пример: info@mail.ru'
                this.email = ''
            }
            if (this.password) 
                this.error_password = null
            else {
                this.error_password = `Введите пароль`
                this.password = ''
            }
            if (this.error_email || this.error_password) {
                return false
            }
            return true
        },
        on_submit() {
            if (this.check_form()){
                const user = {
                    email: this.email,
                    password: this.password,
                }
                this.login_user(user)
                    .then(() => {
                        console.log("LOG")
                        this.change_status("OK")
                        this.$router.push('/new-game')
                    })
                    .catch(err => {
                        this.change_status(err.message)
                        this.password = ''
                        this.error_password = "Неверный пароль"
                    })
            }
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
        },
    },
}
</script>

<style>
.form{
    display: flex;
    flex-direction: column;
    padding: 20px 50px;
}
.form-email-password{
    position: relative;
    margin-bottom: 20px;
}
.form-input{
    padding: 10px;
    width: 100%;
}
.input-error{
    margin-top: 0;
    text-align: left;
    font-size: 14px;
    color: red
}
.form-icon{
    position: absolute;
    right: 10px;
    padding: 21px;

    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
}

.form-button {
    padding: 10px;
    background-color: #edbd4e;
    border: 1px solid #e7a338;
}
.email{
    background-image: url("../assets/img/email.png");
}
.password{
    background-image: url("../assets/img/password.png");
}
</style>
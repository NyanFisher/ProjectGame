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


        <label class="form-label visually-hidden" for="password">Введите пароль</label>
        <div class="form-email-password">
            <input class="form-input" type="password" name="password"  placeholder="Подтвердите пароль" required v-model.trim="repeat_password">
            <span class="form-icon password"></span>
        </div>
        <p class="input-error" v-show="error_repeat_password">{{error_repeat_password}}</p>

        <input class="form-button" type="submit" name="submit" v-model="value_button">
    </form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import * as check from '../store/email_password'

export default {
    name: "SignUp",
    data () {
        return {
            email: '',
            password: '',
            repeat_password: '',
            error_email: null,
            error_password: null,
            error_repeat_password: null,
        }
    },
    methods: {
        ...mapActions(['change_status', 'register_user']),
        check_form() {
            if (check.check_email_or_password(this.email, 'email'))
                this.error_email = null
            else{
                this.error_email = 'Почта указана неверно. Пример: info@mail.ru'
                this.email = ''
            }
            if (check.check_email_or_password(this.password, 'password')) 
                this.error_password = null
            else {
                this.error_password = `Пароль должен состоять более чем из 6 символовов. В котором будут использованы символы латиницы, цифры и заглавные буквы`
                this.password = ''
            }
            if (this.password != this.repeat_password) {
                this.error_repeat_password = 'Пароли должны совпадать'
                this.password = ''
                this.repeat_password = ''
            }
            else {
                this.error_repeat_password = null
            }
            if (this.error_email || this.error_password || this.error_repeat_password) {
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
                this.register_user(user)
                    .then(() => {
                        // console.log("REG")
                        this.change_status("OK")
                        this.$router.push('/profile')
                    })
                    .catch(err => {
                        this.change_status(err.message)
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
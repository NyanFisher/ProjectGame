<template>
  <div class="container auth">
      <div class="log-reg">
        <nav class="log-reg-nav">
            <ul class="log-reg-ul">
                <li class="log-reg-li">
                    <h2 class="log-reg-h2" :class="{deactive:!login}" @click="swap('signin')">Войти</h2>
                </li>
                <li class="log-reg-li">
                    <h2 class="log-reg-h2" :class="{deactive:login}" @click="swap('signup')">Регистрация</h2>
                </li>
            </ul>
        </nav>
        <SignIn v-show="login"/>
        <SignUp v-show="!login"/>
      </div>
  </div>
</template>

<script> 
import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'
export default {
  name: 'Auth',
  data() {
      return {
          login: true
      }
  },
  methods: {
      swap(type){
          if (type =='signin' && this.login == false)
            this.login = !this.login
        if (type =='signup' && this.login == true)
            this.login = !this.login
      }
  },
  components: {
    SignIn,
    SignUp
  },
}
</script>

<style scoped>
.container{
    align-items: center;
    justify-content: center;
}
.auth{
    margin-top: 50px;
}
.deactive{
    color: #fab030;
}

.log-reg{
    width: 500px;
    padding: 10px 40px 30px;

    background-color: #fffcf9;
    border: 1px solid #dec8b3;
    box-shadow: 0 0 20px rgba(255, 255, 0, 0.2);
}
.log-reg-nav{
    margin-bottom: 20px;
}
.log-reg-ul{
    display: flex;
    margin: 0;
    padding: 20px 10px;
    
    list-style-type: none;
    border-bottom: 1px solid #ccc2b9;
    
}

.log-reg-li{
    margin-right: 10px;
    cursor: pointer;
}
.log-reg-h2{
    margin: 0;
}
</style>
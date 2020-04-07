<template>
  <div class="container">
      <div class="log-reg">
        <nav class="log-reg-nav">
            <ul class="log-reg-ul">
                <li class="log-reg-li">
                    <h2 class="log-reg-h2" :class="{deactive:!login}" @click="swap('signin')">Sign In</h2>
                </li>
                <li class="log-reg-li">
                    <h2 class="log-reg-h2">or</h2>
                </li>
                <li class="log-reg-li">
                    <h2 class="log-reg-h2" :class="{deactive:login}" @click="swap('signup')">Sign Up</h2>
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
  computed: {
      
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
.log-reg-li:nth-child(2){
    font-size: 12px;
    color: #ccc2b9;
}
.log-reg-h2{
    margin: 0;
}
</style>
<template>
  <div>
    <b-container style="margin-left:-120px;margin-top:-50px">
      <div class="login-box">
        <div class="text-center">
          <h4 style="font-family:Comic Sans MS; padding-top:10%">Welcome Back !</h4>
          <div class="image-logo">
            <img src="../../assets/images/logo.jpg"/>
          </div>
          <div>
            <span style="color:red; font-size:13px">{{ errors }}</span>
            <form @submit.prevent="validateCredentials" class="mt-2">
              <div class="input-container">
                <input type="text" v-model="name" required/>
                <label>username</label>	
              </div>
              <div class="input-container">
                <input type="text" v-model="email" required/>
                <label>email</label>	
              </div>
              <div class="input-container">
                <input type="password"  v-model="password" minlength="6" required/>
                <label>Password</label>	
              </div>
              <div class="input-contaienr mb-3">
                <b-button pill variant="primary" type="submit">Submit</b-button>
                <b-button pill to="login" variant="primary" type="button" style="margin-left:10px">Login</b-button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import AuthenticationService from '../../services/AutheticationService';

export default {
  data: ()=>({
    name:"",
    email:"",
    password:"",
    errors:""
  }),
  methods:{
    async validateCredentials(){
      try {
        const response = await AuthenticationService.register({ 
          name: this.name,
          email: this.email,
          password: this.password
         })
        this.$store.dispatch('user/setUser', response.data.user)
        this.$store.dispatch('user/setToken', response.data.token)
        this.$router.push('/')

      } catch (error) {
        console.log(error.response.data.error)
        this.errors = error.response.data.error
      }
    }
  }
}
</script>

<style>
  .login-box{
    margin-top:8%;
    margin-left:30%;
    width:35%;
    height:auto;
    background-color: 	beige;
    border: 5px inset orange;
    border-radius: 15px;
  }
</style>
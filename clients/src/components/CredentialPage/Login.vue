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
            <span style="color:red; font-size:13px"> {{errors}} </span>
            <form @submit.prevent="validateCredentials" class="mt-2">
              <div class="input-container">
                <input type="text" v-model="email" required/>
                <label>Email</label>	
              </div>
              <div class="input-container">
                <input type="password"  v-model="password" required/>
                <label>Password</label>	
              </div>
              <div class="input-contaienr mb-2">
                <b-button pill variant="primary" type="submit">Submit</b-button>
              </div>
            </form>
          </div>
        </div>
        <hr>
        <div style="margin-top:1%" class="mb-2">
          <router-link to="signup">Don't have an Account?</router-link>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>

import AuthenticationService from '../../services/AutheticationService';

export default {
  data: ()=>({
    email:"",
    password:"",
    errors:""
  }),
  methods:{
    async validateCredentials(){
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        // console.log(response.data.foldername)
        this.$store.dispatch('user/setUser', response.data.user)
        this.$store.dispatch('user/setToken', response.data.token)
        this.$store.dispatch('folder/setFoldername', response.data.foldername)

        // console.log(this.$store.state.folder.name)
        this.$router.push('/')
      } 
      catch (error) {
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
    height:50%;
    background-color: 	beige;
    border: 5px inset orange;
    border-radius: 15px;
  }
</style>
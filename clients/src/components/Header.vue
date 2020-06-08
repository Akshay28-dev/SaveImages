<template>
  <div class="fixed-top">
    <b-navbar type="dark" variant="primary" style="height:10%" >
      <b-navbar-brand href="#" style="margin-left:4%">Save
        <span style="color:black;margin-left:-6px">Images</span>
        </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <div style="margin-left:75%;color:white">
        <b-dropdown variant="link" toggle-class="text-decoration-none" no-caret>
        <template v-slot:button-content>
          <b-avatar variant="info"  size="3rem">
            {{ username }}
          </b-avatar>
        </template>
        <b-dropdown-item href="#"><b-icon-gear></b-icon-gear>&nbsp;Setting</b-dropdown-item>
        <b-dropdown-item href="#"><b-icon-bell></b-icon-bell>&nbsp;Notification</b-dropdown-item>
        <b-dropdown-item @click="logout"><b-icon-bell></b-icon-bell>&nbsp;Log Out</b-dropdown-item>
      </b-dropdown>
      </div>
    </b-navbar>
  </div>
</template>

<script>
import AuthenticationService from '../services/AutheticationService';
import store from '../store/store';
export default {
  data(){
    return {
      username : ""
    }
  },
  mounted(){
    var name = store.state.user.name[0].toUpperCase();
    this.username = name
    console.log(name)
  },
  methods:{
    async logout(){
      try {
        const response = await AuthenticationService.logout({});

        this.$store.dispatch('user/setUser', response.data.user);
        this.$store.dispatch('user/setToken', response.data.token);
        this.$store.dispatch('folder/setFoldername', response.data.foldername)
        this.$router.push('/login')
        
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style>
  
</style>
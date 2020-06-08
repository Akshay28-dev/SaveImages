<template>
  <div>
    <b-container class="mt-3">
  
      <template >
        <div class="menu">
          <router-link to="header" >
            <b-icon-grid3x3-gap style="margin-left:-155px"></b-icon-grid3x3-gap> <span style="margin-left:10px">Home</span>
          </router-link>
        </div>
        <br class="linebreak">
        <div class="menu">
          
          <b-navbar-toggle target="navbar-toggle-collapse" style="width:100%">              
            
            <template v-slot:default="{ expanded }">
              <template>
                <b-icon-folder ></b-icon-folder> <span style="margin-left:10px">Folder</span>
              </template>
              <b-icon v-if="expanded" icon="caret-up-fill" ></b-icon>
              <b-icon v-else icon="caret-down-fill" ></b-icon>
            </template>
          </b-navbar-toggle>

          <b-collapse id="navbar-toggle-collapse" is-nav>
            <b-navbar-nav style="margin-left:2%">
              <template v-for="fname in foldernames" >
                <div v-bind:key = "fname">
                  <router-link :to="fname">
                    <b-icon-folder style="margin-left:0px"></b-icon-folder><span  class="folder_menu" style="margin-left:20%;font-size:16px;margin-top:10px;morgin-bottom:10px"> {{ fname }} </span>
                  </router-link>
                </div> 
                <!-- {{ name }} -->
              </template>
              <b-button v-b-toggle.sidebar-1 ><b-icon-folder></b-icon-folder><span  class="folder_menu"></span> Create Folder</b-button>
              <b-sidebar id="sidebar-1" title="Create Folder" shadow>
                <span style="color: red; font-size: 13px;">{{ error }}</span>
                <div class="px-3 py-2 mt-5">
                  <form @submit.prevent="handlesubmit">
                    
                    <div class="input-container">
                      <input type="text" v-model="name" required/>
                      <label>Folder Name</label>	
                    </div>
                    <b-button type="submit" pill> Submit </b-button>
                  </form>
                </div>
              </b-sidebar>
            </b-navbar-nav>
          </b-collapse>
        </div>
        <br>
        <div class="menu">
          <b-link href="#" >
            <b-icon-grid3x3-gap style="margin-left:-110px"></b-icon-grid3x3-gap> <span style="margin-left:15px">View Image</span>
          </b-link>
        </div>
      </template>


    </b-container>
  </div>  
</template>

<script>
import FolderService from '../services/FolderService';
// import store from '../store/store';

export default {
  data(){
    return {
      foldernames: this.$store.state.folder.name,
      name:"",
      error:""
    }
  },
  methods:{
    async handlesubmit(){
      try {
        
        const response = await FolderService.foldercreate({
          foldername: this.name
        })
        console.log(response.data.foldername)
        this.$store.dispatch('folder/setFoldername', response.data.foldername)
        this.$router.query.page;
      } catch (error) {
        console.log(error.response.data.error)
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style>
  a{
    color:black
  }
  a:hover{
    text-decoration: none;
    color:black
  }

</style>
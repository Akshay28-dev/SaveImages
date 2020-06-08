<template>
  <div>
    <b-container>
      <b-card class="text-center">
        <template>
          <b-button pill variant="primary" @click="navigateurl"><b-icon-plus></b-icon-plus> Upload Image</b-button>
        </template>
      </b-card>
      <br>
      <!-- <b-card-group style="font-size:20px;margin-top:10px">
        <template v-if="folder_name">
          <b-card>
            <b-navbar-toggle target="navbar-toggle-collapse-1" style="width:100%">
              <template v:slot:header v:slot:default="{ expanded }" >
                <h4 v-if="expanded">Jan<b-icon-caret-up-fill style="margin-left:90%"></b-icon-caret-up-fill> </h4>
                <h4 v-else>Jan  <b-icon-caret-down-fill style="margin-left:90%"></b-icon-caret-down-fill> </h4>
              </template>
            </b-navbar-toggle>
            <b-collapse id="navbar-toggle-collapse-1" is-nav>
              <b-card-body>
                <b-row> 
                  <div class="grid-container">
                    <div class="image_div">
                      <img class='grid-item grid-item-1' src='https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''>
                    </div>
                    <div class="image_div">
                      <img class='grid-item grid-item-2' src='https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''>
                    </div>
                    <div class="image_div">
                      <img class='grid-item grid-item-3' src='https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''>
                    </div>
                    <div class="image_div">
                      <img class='grid-item grid-item-4' src='https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''>
                    </div>
                    <div class="image_div">
                      <img class='grid-item grid-item-5' src='https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''>
                    </div>
                    <div class="image_div">
                      <img class='grid-item grid-item-6' src='https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''>
                    </div>
                    <div class="image_div">
                      <img class='grid-item grid-item-7' src='https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''>
                    </div>
                    <div class="image_div">
                      <img class='grid-item grid-item-8' src='https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''>
                    </div>
                    <div class="image_div">
                      <img class='grid-item grid-item-9' src='https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''>
                    </div>
                    <div class="image_div">
                      <img class='grid-item grid-item-10' src='https://images.unsplash.com/photo-1504595403659-9088ce801e29?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''>
                    </div>
                  </div>
                </b-row>
              </b-card-body>
            </b-collapse>
          </b-card>
        </template>
      </b-card-group> -->

    </b-container>
  </div>
</template>

<script>
import AuthenticationService from '../../services/AutheticationService';
import authentication from '../../middlewares/Authenticate';
// import store from '../../store/store';

import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState([
      'isUserLoggedIn',
      "user"
    ])
  },
  async mounted(){
    try {
      console.log(this.$store.state.folder.name)

      await authentication.authenticate(this.$store.state.user.isUserLoggedIn);
      const response = await AuthenticationService.home({})
      console.log(response)
    } catch (error) {
      console.log(error)
      this.$router.push('/login')
    }
  },
  methods:{
    navigateurl(){
      this.$router.push('/upload/images')
    }
  }
} 
</script>
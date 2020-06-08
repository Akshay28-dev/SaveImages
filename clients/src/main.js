import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import axios from 'axios'
import store from '../src/store/store';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css';

import { routes } from './router';
import VueLazyload from 'vue-lazyload'
 
Vue.use(VueLazyload)

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueRouter)
Vue.use(axios)

Vue.config.productionTip = false

const router =  new VueRouter({
  routes,
  mode:'history'
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

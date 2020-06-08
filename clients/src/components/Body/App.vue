<template>
  <div id="app">
    <router-view name="header"></router-view>
    <b-container>
      <b-row style="margin-top:10%">
        <b-col cols="3">
          <router-view name="sidenav"></router-view>
        </b-col>
        <b-col>
          <router-view/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import './assets/css/style.css';

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <a class="waves-effect waves-light btn">button</a>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import M from 'materialize-css';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted () {
    M.AutoInit();
  }
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

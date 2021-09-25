<template>
  <div id="app">
    <header>
      <Navbar/>
    </header>
    <img alt="Vue logo" src="./assets/logo.png">
    <a class="waves-effect waves-light btn">button</a>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import M from 'materialize-css';

export default {
  name: 'App',
  components: {
    Navbar
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

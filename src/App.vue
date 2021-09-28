<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">Sort Puzzle Solver</a>
      </div>
    </nav>
    <div class="row">
      <div class="col l4">
        <Navbar />
      </div>
      <div class="col l8 m12 s12">
        <div id="content">
          <component v-bind:is="currentContent"></component>
        </div>
      </div>
    </div>

    <div class="fixed-action-btn">
      <a class="btn-floating btn-large waves-effect waves-light blue">
        <i class="large material-icons">add</i>
      </a>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import NewGame from "./components/NewGame.vue";
import M from "materialize-css";

export default {
  name: "App",
  data: function () {
    return {
      content: "new-game",
    };
  },
  components: {
    Navbar,
    NewGame,
  },
  computed: {
    currentContent: function () {
      return this.content.toLowerCase();
    },
  },
  mounted() {
    M.AutoInit();
    var elems = document.querySelectorAll('.fixed-action-btn');
    M.FloatingActionButton.init(elems, {});
  },
};
</script>

<style>
html, body {
  height: 100%;
  background: #ddd;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

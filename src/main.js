import Vue from 'vue';
// import VueRouter from 'vue-router';
import App from './App.vue';
// materializeCss
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.js';
import 'material-design-icons/iconfont/material-icons.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

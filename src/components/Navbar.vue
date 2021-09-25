<template>
  <div>
    <div class="container">
      <a
        href="#"
        data-target="sidenav"
        class="top-nav sidenav-trigger full hide-on-large-only"
        ><i class="material-icons">menu</i></a
      >
    </div>
    <ul id="sidenav" class="sidenav sidenav-fixed">
      <br><br>
      <li>
        <a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a>
      </li>
      <li><a href="#!">Second Link</a></li>
      <li><div class="divider"></div></li>
      <li><a class="subheader">Subheader</a></li>
      <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
    </ul>
  </div>
</template>

<script>
import M from "materialize-css";
import _ from "lodash";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  mounted() {
    M.AutoInit();
    var elems = document.querySelectorAll(".sidenav");
    var instances = M.Sidenav.init(elems, {});
    if (!_.isNil(instances) && !_.isEmpty(instances)) {
      //     instances[0].open();
    }
  },
};
</script>

<style scoped>
a.sidenav-trigger.top-nav {
  position: absolute;
  text-align: center;
  height: 48px;
  width: 48px;
  top: 28px;
  float: none;
  margin-left: 1.5rem;
  color: #f3989b;
  font-size: 36px;
  z-index: 2;
}
</style>
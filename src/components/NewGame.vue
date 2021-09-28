<template>
  <div>
    <div class="row">
      <form class="col l12 m12 s12">
        <div class="row"></div>
        <div class="row">
          <div class="input-field col s4">
            <input
              type="number"
              placeholder="#"
              id="quantity"
              v-model="quantity"
            />
            <label for="quantity" class="active">Bottle Quantity</label>
          </div>
          <div class="input-field col s4">
            <input type="number" placeholder="#" id="size" v-model="size" />
            <label for="size" class="active">Bottle Size</label>
          </div>
          <div class="input-field col s3">
            <a class="waves-effect waves-light btn" v-on:click="generate"
              >Generate</a
            >
          </div>
        </div>
        <div class="row">
          <div class="col s11 divider"></div>
        </div>
        <div class="row">
          <div class="col s11" id="bottle-content">
            <div class="row">
              <div class="col s12" id="col-1"><Bottle /></div>
              <div class="col s12" id="col-2"></div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Bottle from "./Bottle.vue";
import M from "materialize-css";
// import _ from "lodash";

export default {
  name: "NewGame",
  data: function () {
    return {
      quantity: 14,
      size: 4,
    };
  },
  components: {
    Bottle
  },
  mounted() {
    M.AutoInit();
  },
  methods: {
    generate: function () {
      console.log(this.quantity, this.size);
    },
  },
};
</script>

<style scoped>
</style>
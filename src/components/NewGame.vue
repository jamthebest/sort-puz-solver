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
            <a class="waves-effect waves-light btn" v-on:click="generate">Generate</a>
          </div>
        </div>
        <div class="row">
          <div class="col s11 divider"></div>
        </div>
        <div class="row">
          <div class="col s11" id="bottle-content">
            <div class="row">
              <div class="col s12" id="col-1"><Bottle v-for="item in firstMiddle" v-bind:key="item" :id="item" :size="size"/></div>
              <div class="col s12" id="col-2"><Bottle v-for="item in secondMiddle" v-bind:key="item" :id="item" :size="size"/></div>
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
import _ from "lodash";

export default {
  name: "NewGame",
  data: function () {
    return {
      quantity: 14,
      size: 4,
      bottles: 0
    };
  },
  components: {
    Bottle
  },
  mounted() {
    M.AutoInit();
    this.$root.$on('clear', this.clear);
    this.$root.$on('execute', this.execute);
  },
  methods: {
    generate: function () {
      console.log(this.quantity, this.size);
      this.bottles = this.quantity;
      this.$emit('test');
    },
    clear: function () {
      console.log('clear');
      this.bottles = 0;
    },
    execute: function () {
      console.log('execute');
    }
  },
  computed: {
    firstMiddle: function() {
      return _.ceil(this.bottles / 2);
    },
    secondMiddle: function() {
      return _.floor(this.bottles / 2);
    }
  }
};
</script>

<style scoped>
#bottle-content {
  text-align: left;
}
</style>
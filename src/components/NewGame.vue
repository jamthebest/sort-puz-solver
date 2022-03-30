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
              <div class="col s12" id="col-1"><Bottle v-for="item in firstMiddle" v-bind:key="item" :id="item" :size="size" :loadedColors="loadGame[item - 1]"/></div>
              <div class="col s12" id="col-2"><Bottle v-for="item in secondMiddle" v-bind:key="item" :id="item + firstMiddle" :size="size" :loadedColors="loadGame[item + firstMiddle - 1]"/></div>
            </div>
          </div>
        </div>
      </form>
    </div>
    <!-- <a onclick="M.toast({html: 'I am a toast'})" class="btn">Error!</a> -->
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
      bottles: 0,
      selectedColors: {},
      matrixColor: [],
      loadGame: []
    };
  },
  components: {
    Bottle
  },
  mounted() {
    M.AutoInit();
    this.$root.$on('clear', this.clear);
    this.$root.$on('execute', this.execute);
    this.$root.$on('colorChange', this.onColorChange);
    this.$root.$on('removeOneColor', this.removeOneColor);

    this.loadGame = [
        ['#008000', '#c0382b', '#c0382b', '#c0382b'],
        ['#04609d', '#008000', '#008000', '#008000'],
        ['#f1f100', '#04609d', '#04609d', '#04609d'],
        ['#bd6309', '#f1f100', '#f1f100', '#f1f100'],
        ['#e91ae9', '#bd6309', '#bd6309', '#bd6309'],
        ['#8f8a8a', '#e91ae9', '#e91ae9', '#e91ae9'],
        ['#000000', '#8f8a8a', '#8f8a8a', '#8f8a8a'],
        ['#800080', '#000000', '#000000', '#000000'],
        ['#ed7e92', '#800080', '#800080', '#800080'],
        ['#15dfdf', '#ed7e92', '#ed7e92', '#ed7e92'],
        ['#cbb046', '#15dfdf', '#15dfdf', '#15dfdf'],
        ['#c0382b', '#cbb046', '#cbb046', '#cbb046'],
        [],
        []
      ];
  },
  watch: {
    loadGame (newVal) {
      console.log(newVal);
       _.forEach(newVal, bottle => {
          _.forEach(bottle, color => {
            this.selectedColors[color] = this.selectedColors[color] || 0;
            this.selectedColors[color]++;
          });
       });
    }
  },
  methods: {
    generate: function () {
      console.log(this.quantity, this.size);
      this.bottles = this.quantity;
    },
    clear: function () {
      console.log('clear');
      this.bottles = 0;
      this.selectedColors = {};
      this.matrixColor = [];
    },
    execute: function () {
      let allow = true;
      console.log('colors', this.selectedColors);
      if (_.keys(this.selectedColors).length != 12) {
        allow = false
        M.toast({html: 'Please use 12 colors!'});
      }
      _.forEach(this.selectedColors, (count, color) => {
        if (allow && (_.isNil(color) || count != 4)) {
          allow = false
          M.toast({html: 'Please fill all the colors 4 times!'});
        }
      });
      if (allow) {
        for (let i = 0; i < this.quantity; i++) {
          let idx = i + 1;
          let bottle = Bottle.getColors(idx);
          this.matrixColor.push(bottle);
        }
        console.log('matrixColor', this.matrixColor);
      }
    },
    removeOneColor: function(color) {
      if (this.selectedColors[color]) {
        this.selectedColors[color]--;
      }
      if (this.selectedColors[color] === 0) {
        delete this.selectedColors[color];
      }
    },
    onColorChange: function (params) {
      console.log('onColorChange', params);
      this.selectedColors[params.color] = (this.selectedColors[params.color] || 0) + 1;
      // console.log(this.selectedColors);
      if (this.selectedColors[params.color] > 4) {
        this.selectedColors[params.color]--;
        M.toast({html: 'The color already was used 4 times!!'});
        this.$root.$emit('clearColor', params.x, params.y);
      }
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
<template>
  <div id="app">
    <button v-on:click="onButtonClick">{{enabled ? 'Enabled' : 'Disabled'}}</button>
    <Board v-if="enabled" msg="Hello from Board"></Board>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Board from './components/Board.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld
    Board
  },
  data: function() {
    return {
      enabled: false
    }
  },
  methods: {
    onButtonClick() {
      console.log('clicked')
      this.enabled = !this.enabled;
    }
  },
  watch: {

  },
  // computed: {
  //   enabled: Boolean
  // }
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

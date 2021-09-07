import Vue from 'vue'
import App from './App.vue'
import VueSocketIO from 'vue-socket.io'
import SocketIO from 'socket.io-client'
// import {socket} from './services/socket.js'
// import VueSocketIOExt from 'vue-socket.io-extended';

Vue.config.productionTip = false
Vue.use(new VueSocketIO({
  // connection: socket,
  connection: SocketIO('http://localhost:8080'),
  debug: true
}))
// Vue.use(VueSocketIOExt, SocketIO('http://localhost:8080'));

new Vue({
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import VueSocketIO from 'vue-socket.io'
import SocketIO from 'socket.io-client'
// import {socket} from './services/socket.js'
// import VueSocketIOExt from 'vue-socket.io-extended';

// const host = process.env.HOST || 'http://localhost';
// const port = process.env.PORT || 8080;
// const socketUrl = `${host}:${port}`;
// console.log(socketUrl);

Vue.config.productionTip = false
Vue.use(new VueSocketIO({
  // connection: socket,
  // connection: SocketIO(socketUrl),
  connection: SocketIO(),
  debug: true
}))
// Vue.use(VueSocketIOExt, SocketIO(socketUrl));

new Vue({
  render: h => h(App),
}).$mount('#app')

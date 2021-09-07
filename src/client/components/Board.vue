<template>
  <div class="board">
    <h1>{{ msg }}</h1>
    <p>Time: {{time}}</p>
    <button v-on:click='sendData'>Send Data</button>
    <ul>
      <li v-for="(c, index) in chat" :key="`chat-${index}`">{{c}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  sockets: {
    connect() {
      console.log('connected to server');
    },
    time(data) {
      this.time = data;
      console.log('time event filed from server: time is ' + data);
    },
    send(data) {
        this.chat = data;
    }
  },
  name: 'Board',
  props: {
    msg: String,
    connect: Boolean
  },
  data() {
      return {
          time: '',
          chat: []
      };
  },
  mounted() {
    console.log('board created');
    // this.sockets.emit('start_game');
    this.$socket.emit('start');
    // this.$socket.client.emit('start');
    // console.log(this.$socket);
    // console.log(this.$socket.client);
    // console.log(this.$socket.client.emit);
    // console.log(this.$socket.emit);
    // console.log(this.sockets);
  },
  destroyed() {
    console.log('board destroyed');
    // this.sockets.emit('end_game');
    this.$socket.emit('end');
    // this.$socket.client.emit('end');
  },
  methods: {
    sendData() {
        console.log('send start data')
        this.$socket.emit('send', {time: new Date().toTimeString()});
    }
  }
//   watch: {
//       connect: 
//   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

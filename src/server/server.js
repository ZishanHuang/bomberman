'use strict';

const app = require("express")();
const httpServer = require("http").createServer(app);
const options = {
  cors: {
    origin: "http://localhost:8081",
    // origin: "http://192.168.1.6:8081/",
    methods: ["GET", "POST"],
    credentials: true
  },
  allowEIO3: true // support for v2.x of socket.io client 
};
const io = require("socket.io")(httpServer, options);
let intervalId;
io.on("connection", socket => {
  console.log('Client connected');
  socket.on('disconnect', () => console.log('Client disconnected'));
  
  socket.on('start', (data) => {
    console.log('start, data: ' + data);
    intervalId = setInterval(() => {
      if (io.of('/').sockets.size > 0) {
        const t = new Date().toTimeString();
        console.log(t);
        io.emit('time', t);
        // io.emit('time', new Date().toTimeString());
      }
    }, 1000);
  });
  
  socket.on('end', () => {
    console.log('end');
    clearInterval(intervalId);
  });
});

httpServer.listen(8080);

/*
const express = require('express');
const socketIO = require('socket.io');

// const path = require('path')
// const io = socketIO();
const PORT = process.env.PORT || 8080;

var server = express()
.get('/', (req, res) => {
  console.log(io.of('/').sockets.size);
  res.send(`<h1>Socket backend<p>Num open connections: ${io.of('/').sockets.size}</p></h1>`)
})
// .use((req, res) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// })
  // .use(express.static(path.join(__dirname, '../../dist')))
  // .get('/', (req, res) => res.sendFile(path.join(__dirname, '../../dist/index.html')))

  // .use((req, res) => res.sendFile(path.join(__dirname, '../../dist', 'index.html')))
  // .use({
    // origin: "http://localhost:8080"
  // })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

const io = socketIO(server, {
  cors: {
    origin: "http://localhost:8081",
    methods: ["GET", "POST"],
    credentials: true
  },
  allowEIO3: true
});

// io.listen(server);
io.on('connection', (socket) => {
    console.log('Client connected');
    socket.on('disconnect', () => console.log('Client disconnected'));
});

setInterval(() => {
  const t = new Date().toTimeString();
  console.log(t);
  io.emit('time', t);
  // io.emit('time', new Date().toTimeString());
}, 1000);

// intervalId = setInterval(() => {
//   if (io.of('/').sockets.size > 0) {
//     const t = new Date().toTimeString();
//     console.log(t);
//     io.emit('time', t);
//     // io.emit('time', new Date().toTimeString());
//   }
// }, 1000);

// const router = require('express').Router();
// router.get('/clients', (req, res) => {
//   console.log(io.of('/').sockets.size);
//   res.send(`<h1>Socket backend<p>Num open connections: ${io.of('/').sockets.size}</p></h1>`)
// })
*/

const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, "../public");
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

io.on('connection' , (socket) => {
  console.log('new user connected');

  socket.emit('newEmail' , {
    'from' : 'hiteshsardana',
    'to' : 'vivekgautam',
    'value' : 123
  });

  socket.on('createMessage' , (message) => {
    console.log('createMessage event fired ' , message);

    io.emit('newMessage', {
      from : message.from,
      text : message.text,
      createdAt : new Date().getTime()
    });
  });


  socket.on('createEmail', (data) => {
    console.log(data);
  });

  socket.on('disconnect' , () => {
      console.log('disconnected from client');
  });
})


app.use(express.static(publicPath));

console.log(publicPath);

var port = process.env.PORT || 3000;

server.listen(port, () => {console.log(`server is running at ${port}`);});

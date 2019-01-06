var socket = io();
socket.on('connect', function()  {
  console.log('server connected');

  socket.emit('createEmail', {
    'from' : 'hit',
    'to' : 'sar',
    'data' : 'hello'
  });

});


socket.on('newMessage', function(message){
  console.log('new message received : ', message);
});

socket.on('disconnect' , function() {
  console.log('disconnected from serveer');
});

socket.on('newEmail', function(value) {
  console.log(value);
});

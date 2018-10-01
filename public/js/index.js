var socket = io();

socket.on('connect', function()  {
  console.log('Connected to server');

  socket.emit('createEmail',{
    to:'jen@example.com',
    text:'Hi buster'
  });

  socket.emit('createMessage',{
    from:'jen@text.com',
    text:'Hi ceiling'
  });

});

socket.on('disconnect', function()  {
  console.log('Disconnected from server');
});

socket.on('newEmail', function(email) {
  console.log('New Email', email);

socket.on('newMessage', function(message){
  console.log('New Message', message);
});

});

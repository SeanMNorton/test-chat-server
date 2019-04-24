const express = require('express');
const app = express();

server = app.listen(3001, function(){
    console.log('server is running on port 3001')
});

server.get('/', function (req, res) {
    res.send(JSON.stringify({ Hello: 'World'}));
});
   

const io = require('socket.io')(server);
io.on('connection', function(socket) {
    console.log(socket.id)
    
    socket.on('SEND_MESSAGE', function(data) {
        io.emit('MESSAGE', data)
    }); 
});
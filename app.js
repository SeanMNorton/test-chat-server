const express = require('express');
const app = express();
var port = process.env.PORT || 3000;

server = app.listen(port, function(){
    console.log(`server is running on port ${port}`)
});

app.get('/', function (req, res) {
    res.send('<h1>Socket.io Chat Server</h1>');
});

// sockets
const io = require('socket.io')(server);
let messages = [];

io.on('connection', function(socket) {
    io.emit('ALL_MESSAGES', messages);

    socket.on('SEND_MESSAGE', function(data) {
        messages = [data, ...messages];
        io.emit('MESSAGE', data)
    }); 
});
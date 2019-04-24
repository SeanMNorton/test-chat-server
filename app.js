var express = require("express");
var port = process.env.PORT || 3000;
var app = express();

app.use(express.static(__dirname + '/public'));

app.get("/", function (req, res) {
    res.send(JSON.stringify({ Hello: 'World'}));
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<h1>Hello World</h1>");
    res.end();
});

app.listen(port, function () {
 console.log(`Example app listening on port !`);
});

// const express = require('express');
// const app = express();
// var port = process.env.PORT || 3000;

// server = app.listen(port, function(){
//     console.log(`server is running on port ${port}`)
// });

// server.get('/', function (req, res) {
//     res.send(JSON.stringify({ Hello: 'World'}));
// });

// const io = require('socket.io')(server);
// io.on('connection', function(socket) {
//     console.log(socket.id)
    
//     socket.on('SEND_MESSAGE', function(data) {
//         io.emit('MESSAGE', data)
//     }); 
// });
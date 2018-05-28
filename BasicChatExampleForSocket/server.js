
//added the third party modules of express,socketIO

const express = require('express');

const socketIO = require('socket.io');

//added the http inbuild module

const http = require('http');// this used to connect the server

var app = express();

var server = http.createServer(app);

var io = socketIO(server);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/client.html');
});

var port = process.env.PORT || 3333

server.listen(port, function () {
    console.log("Server is started: " + port);
});

io.on('connection', function (socket) {
    socket.on('chat message', function (msg) {
        console.log(msg);
        io.emit('chat message', msg);
    });
});
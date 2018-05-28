// // add the external third party models

// const express = require('express');
// const http = require('http');
// const app = express();


// //socket connection

// /* Creates new HTTP server for socket */
// var socketServer = require('http').createServer(app);
// var io = require('socket.io')(socketServer);

// /* Listen for socket connection on port 1234 */
// socketServer.listen(1234, function () {
//     console.log("Socket server listening on: 1234");
// });


// /* This event will emit when client connects to the socket server */
// io.on('connect', function (socket) {
//     console.log('Socket Connection Established! ');
// });

// /* Create HTTP server for node application */
// var server = http.createServer(app);
// /* Node application will be running on 3000 port */
// server.listen(1111, () => {
//     console.log("server started...");
// });





var app = require('http').createServer(handler).listen(1337);
var io = require('socket.io').listen(app);

function handler(req, res) { 
    console.log(res);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Node\n You are really really awesome!');
}

io.sockets.on('connection', function (socket) {
    socket.emit('hello', { text: "node Conncected!" });
});
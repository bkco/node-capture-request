var http = require('http');
var express = require('express');

var remote = express();
remote.use(function(req, res, next) {
  res.end('hello hello');
});

var server = http.createServer(remote);
server.on('connection', function(socket) {
  socket.on('data', function(chunk) {
    console.log(chunk.toString());
  });
});
server.listen(3000);
var express = require('express'),
  app = express(),
  server = require('http').createServer(app),
  io = require('socket.io').listen(server),
  rooms = {};

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/app/index.html');
});

app.use(express.static(__dirname + '/app'));

io.sockets.on('connection', function (socket) {

  socket.on('send', function(data) {
    io.sockets.in(socket.room).emit('message', data);
  });

  socket.on('switchRoom', function(data) {
    var newRoom = data.room;
    console.log('switching to ' + newRoom);
        socket.leave(socket.room);
        socket.join(newRoom);
        socket.room = newRoom;
  });

  socket.on('setRoomData', function (data) {
    rooms[data.id] = data;
    io.sockets.in(socket.room).emit('update', data);
  });

  socket.on('getRoomData', function (id, fn) {
    fn(rooms[id]);
  });
});

exports = module.exports = server;
// delegates user() function
exports.use = function() {
  app.use.apply(app, arguments);
};
var express = require('express'),
  app = express(),
  server = require('http').createServer(app),
  io = require('socket.io').listen(server);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/app/index.html');
});

app.use(express.static(__dirname + '/app'));

io.sockets.on('connection', function (socket) {
  var room = 'room1';
  socket.room = room;
  socket.join(room);
  socket.emit('message', { message: 'welcome to the chat, you have connected to ' + room });
  socket.on('send', function(data) {
    io.sockets.in(socket.room).emit('message', data);
  });
  socket.on('switchRoom', function(data) {
    var newRoom = data.room;
    console.log('switching to ' + newRoom);
        socket.leave(socket.room);
        socket.join(newRoom);
        socket.emit('message', { message: 'welcome to the chat, you have connected to ' + newRoom });
        socket.room = newRoom;
  });
});

exports = module.exports = server;
// delegates user() function
exports.use = function() {
  app.use.apply(app, arguments);
};

/* var express = require('express');
var app = express();
var port = 3700;

app.get("/", function(req, res){
	res.send("page");
});

var rooms = ['room1', 'room2'];

// app.use(express.static(__dirname + '/public'));
// var io = require('socket.io').listen(app.listen(port));

// io.sockets.on('connection', function(socket) {
//	var room = 'room1';
//	socket.room = room;
//	socket.join(room);
//	socket.emit('message', { message: 'welcome to the chat, you have connected to ' + room });
//	socket.on('send', function(data) {
//		io.sockets.in(socket.room).emit('message', data);
//	});
//	socket.on('switchRoom', function(data) {
//		var newRoom = data.room;
//		console.log('switching to ' + newRoom);
//		socket.leave(socket.room);
//		socket.join(newRoom);
//		socket.emit('message', { message: 'welcome to the chat, you have connected to ' + newRoom });
//		socket.room = newRoom;
//	});
// });

app.listen(port);
console.log('server runnng and is listening n port ' + port);
*/

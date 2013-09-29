var express = require('express');
var app = express();
var port = 3700;

app.set('views', __dirname + '/tpl');
app.set('view engine', "jade");
app.engine('jade', require('jade').__express);
app.get("/", function(req, res){
	res.render("page");
});

var rooms = ['room1', 'room2'];

app.use(express.static(__dirname + '/public'));
var io = require('socket.io').listen(app.listen(port));

io.sockets.on('connection', function(socket) {
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
})

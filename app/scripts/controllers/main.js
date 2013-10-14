'use strict';

angular.module('cardsAgainstApp')
  .controller('MainCtrl', function ($scope, $location, $filter, socket) {

	var temp = [{
        "id": 1,
        "inPlay" : false,
        "message": "Message 01"
    },
    {
        "id": 2,
        "inPlay" : false,
        "message": "Message 02"
    },
    {
        "id": 3,
        "inPlay" : false,
        "message": "Message 03"
    }];

    var Room = {
    	// id : Math.random().toString(36).slice(10),
    	id : "test_room",
    	deck : {
    		white : $filter('shuffle')(temp),
    		black : $filter('shuffle')(temp)
    	}
    };

    socket.room = Room.id;
    socket.emit('switchRoom', { room: Room.id });

		socket.emit('setRoomData', Room);

	  socket.emit('getRoomData', 'This doesn;t seen neccasary', function (data) {
	    console.log(data);
	  });

    $scope.roomId = Room.id;
    $scope.ip = '127.0.0.1'; //The ip address of your machine/server
    $scope.port = '9000'; // This is set in Gruntfile.js

    $scope.goToChat = function() {
        $location.path('/g' + code);
    }
  });

'use strict';

angular.module('cardsAgainstApp')
  .controller('MainCtrl', function ($scope, $location, $filter, socket, deck) {

	var tempDeck = [{
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
    var whiteDeck = deck.get('white');
    var blackDeck = deck.get('black');

    var Room = {
    	id : Math.random().toString(36).slice(10),
    	deck : {
    		white : $filter('shuffle')(whiteDeck),
    		black : $filter('shuffle')(blackDeck)
    	}
    };

    socket.room = Room.id;
    socket.emit('switchRoom', { room: Room.id });
	socket.emit('setRoomData', Room);

    $scope.roomId = Room.id;
    $scope.ip = '127.0.0.1'; //The ip address of your machine/server
    $scope.port = '9000'; // This is set in Gruntfile.js

    $scope.goToChat = function() {
        $location.path('/g' + code);
    }
  });

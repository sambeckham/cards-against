'use strict';

angular.module('cardsAgainstApp')
  .controller('MainCtrl', function ($scope, $routeParams, socket) {
    var room = $routeParams.roomId;
    socket.room = room;
    socket.emit('switchRoom', { room: room });

    $scope.messages = [];
    $scope.name = '';
    $scope.message = '';

    socket.emit('send', { 
        text: 'A new player has entered' 
    });

    socket.on('message', function(data) {
        if(data.text) {
            data.user = data.user || "Server";
            $scope.messages.push(data);
        }else{
            console.log("There is a problem:", data);
        }
    });

    $scope.sendMessage = function() {
        if($scope.name === '') {
            alert("Please type your name!");
        }else{
            socket.emit('send', {
                text: $scope.message,
                user: $scope.name
            });
            $scope.message = "";
        }
    };
  });

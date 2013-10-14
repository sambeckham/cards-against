'use strict';

angular.module('cardsAgainstApp')
  .controller('RoomCtrl', function ($rootScope, $scope, $routeParams, socket) {
    var roomId = $routeParams.roomId || $scope.roomId;
    
    socket.emit('getRoomData', roomId, function (data) {
      $rootScope.Room = data;
    });

    $scope.messages = [];

    socket.on('message', function(data) {
        if(data.text) {
            data.user = data.user || "Server";
            $scope.messages.push(data);
        }else{
            console.log("There is a problem:", data);
        }
    });

    socket.on('update', function(data) {
        $rootScope.Room = data;
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

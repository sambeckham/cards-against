'use strict';

angular.module('cardsAgainstApp')
  .controller('MainCtrl', function ($scope, socket) {

    $scope.messages = [];
    $scope.name = '';
    $scope.message = '';

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

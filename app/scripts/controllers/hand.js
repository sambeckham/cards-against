'use strict';

angular.module('cardsAgainstApp')
  .controller('HandCtrl', function ($scope, $filter, socket) {

    
    socket.emit('getRoomData', 'This doesnt seen neccasary', function (data) {
      console.log(data);
    });

    $scope.cards = "";

    // $scope.name = prompt('What is your name?') || 'Guest';
    $scope.name = 'Guest';

    //TODO For some reason this broadcasts to all rooms, look into this
    socket.emit('send', {
        text: $scope.name + ' has entered the game'
    });

    $scope.playCard = function(card) {
        socket.emit('send', {
            text: card.message,
            user: $scope.name
        });
    }
  });

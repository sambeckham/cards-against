'use strict';

angular.module('cardsAgainstApp')
  .controller('HandCtrl', function ($scope, socket) {
    // TODO: Swap this for a service that retrieves the cards from the deck;
    $scope.cards = [
        {
            id: 1,
            message: 'message1'
        },
        {
            id: 2,
            message: 'message2'
        },
        {
            id: 3,
            message: 'message3'
        }
    ];

    $scope.name = prompt('What is your name?') || 'Guest';

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

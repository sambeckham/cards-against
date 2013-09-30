'use strict';

angular.module('cardsAgainstApp')
  .controller('HandCtrl', function ($scope, socket, deck) {
    // TODO: Swap this for a service that retrieves the cards from the deck;
    $scope.cards = deck.deal(3, 'white');

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

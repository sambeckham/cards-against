'use strict';

angular.module('cardsAgainstApp')
  .controller('HandCtrl', function ($rootScope, $scope, $filter, socket) {

    $scope.cards = [];
    // $scope.name = prompt('What is your name?') || 'Guest';
    $scope.name = 'Guest';

    //TODO For some reason this broadcasts to all rooms, look into this
    socket.emit('send', {
        text: $scope.name + ' has entered the game'
    });

    $scope.deal = function(amount, deckColor) {
        var deckColor = deckColor || "white",
            deck = $rootScope.Room.deck[deckColor],
            count = 0;

        while (0 < deck.length && amount > count) {
            $scope.cards.push( deck.splice(0, 1)[0] );
            count += 1;
        }

        socket.emit('setRoomData', $rootScope.Room);
    }

    $scope.playCard = function(card) {
        socket.emit('send', {
            text: card.message,
            user: $scope.name
        });
    }
  });

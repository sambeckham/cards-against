'use strict';

angular.module('cardsAgainstApp')
  .factory('deck', function () {
    // Service logic
    // ...

    var Deck = {
      white:
        [
          {
            id: 1,
            message: '01'
          },
          {
            id: 2,
            message: '02'
          },
          {
            id: 3,
            message: '03'
          },
          {
            id: 4,
            message: '04'
          },
          {
            id: 5,
            message: '05'
          },
          {
            id: 6,
            message: '06'
          },
          {
            id: 7,
            message: '07'
          },
          {
            id: 8,
            message: '08'
          }
        ],
      black:
        [
          {
            id: 1,
            message: '01'
          },
          {
            id: 2,
            message: '02'
          },
          {
            id: 3,
            message: '03'
          },
          {
            id: 4,
            message: '04'
          },
          {
            id: 5,
            message: '05'
          },
          {
            id: 6,
            message: '06'
          },
          {
            id: 7,
            message: '07'
          },
          {
            id: 8,
            message: '08'
          }
        ]
    };

    function shuffle(array) {
      var currentIndex = array.length,
        temporaryValue,
        randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }

    // Public API here
    return {
      deal: function (number, color) {
        number = number || 1;
        color = color || 'white';
        var deck = shuffle(Deck[color]);
        var cards = deck.slice(0, number);

        // We need a way of returning unique cards
        return(cards);
      }
    };
  });

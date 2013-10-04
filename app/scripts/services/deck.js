'use strict';

angular.module('cardsAgainstApp')
  .factory('deck', function ($resource) {
    // Service logic
    // ...

    var Deck = {};

    var getDeck = function(color) {
      var resource = $resource('/JSON/deck-' + color + '.json');
      Deck[color] = resource.query();
      return Deck[color];
    };

    var deal = function(color, int){
      getDeck(color);
    }

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
      get: function(color) {
        if(Deck[color]) {
          return Deck[color];
        }else{
          return getDeck(color);
        }
      },
      deal: function(int, color) {
        color = color || 'white' //Assume the want a white card if no color is passed.
        return deal(color, int);
      }
    };
  });

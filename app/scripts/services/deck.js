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

    // Public API here
    return {
      getDeck: function(color) {
        if(Deck[color]) {
          return Deck[color];
        }else{
          return getDeck(color);
        }
      }
    };
  });

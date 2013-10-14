'use strict';

angular.module('cardsAgainstApp')
  .directive('room', function () {
    return {
      templateUrl: '/views/room.html',
      restrict: 'E'
    };
  });

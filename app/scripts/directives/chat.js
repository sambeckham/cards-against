'use strict';

angular.module('cardsAgainstApp')
  .directive('chat', function () {
    return {
      templateUrl: '/views/chat.html',
      restrict: 'E'
    };
  });

'use strict';

angular.module('cardsAgainstApp')
  .controller('MainCtrl', function ($scope, $location) {
    var code = Math.random().toString(36).slice(10);
    $scope.roomId = code;

    $scope.goToChat = function() {
        $location.path('/g' + code);        
    }
  });

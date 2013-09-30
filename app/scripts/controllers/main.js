'use strict';

angular.module('cardsAgainstApp')
  .controller('MainCtrl', function ($scope, $location) {
    var code = Math.random().toString(36).slice(10);
    $scope.roomId = code;
    $scope.ip = '10.0.4.242'; //The ip address of your machine/server
    $scope.port = '9000'; // This is set in Gruntfile.js

    $scope.goToChat = function() {
        $location.path('/g' + code);
    }
  });

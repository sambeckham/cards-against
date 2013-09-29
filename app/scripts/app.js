'use strict';

angular.module('cardsAgainstApp', [])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/g:roomId', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/g0000'
      });

      // I've disabled this until I can get the routing to play nice with express server
      // $locationProvider.html5Mode(true);
  });

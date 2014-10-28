(function () {
  'use strict';

  var app = angular.module('app', ['ngRoute']);

  app.config(function($routeProvider) {
      $routeProvider
      .when('/', {
          templateUrl: 'views/mainview.html',
          controller: 'MainController',
          controllerAs: 'main'
        /*
          resolve: {
              getData: function(withdrawalService) {
                  return withdrawalService.initJSONData('data.json');
              }
          }
        */
      })
      .when('/atmdetails', {
          templateUrl: 'views/atm-details-view.html',
          controller: 'ATMController',
          controllerAs: 'atm'
      })
      .otherwise({
          redirectTo: '/'
      });
  });
    
}());

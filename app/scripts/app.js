(function () {
  'use strict';

  angular.module('app', ['ngRoute'])

  .config(function($routeProvider) {
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
      .when('/atmdetails/:id', {
          templateUrl: 'views/atm-details-view.html',
          controller: 'ATMController',
          controllerAs: 'atm'
      })
      .otherwise({
          redirectTo: '/'
      });
  });

}());

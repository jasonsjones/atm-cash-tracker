
var app = angular.module('app', ['ngRoute']);


app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/atmlist.html',
        controller: 'ATMCtrl',
        resolve: {
            getData: function(withdrawalService) {
                return withdrawalService.initJSONData();
            }
        }
    })
    .otherwise({
        redirectTo: '/'
    });
});


var app = angular.module('app', ['ngRoute']);


app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/atmlist.html',
        controller: 'ATMCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
});

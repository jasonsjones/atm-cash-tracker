'use strict';

var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/mainview.html',
        controller: 'MainCtrl as main',
        resolve: {
            getData: function(withdrawalService) {
                return withdrawalService.initJSONData('data.json');
            }
        }
    })
    .otherwise({
        redirectTo: '/'
    });
});

(function () {
    'use strict';

    var app = angular.module('app');
    app.directive('jjAddPurchase', function(withdrawalService) {
        return {
            restrict: 'E',
            templateUrl: 'views/add-purchase.html',

            scope: {
                trans : '@'
            },

            link: function(scope, element) {

                scope.addPurchase = function() {
                    var newPurchase = {amount: Number(scope.amount), description: scope.desc};
                    withdrawalService.addPurchase(JSON.parse(scope.trans), newPurchase);
                    scope.amount = '';
                    scope.desc = '';
                };
            }
        };
    });
}());

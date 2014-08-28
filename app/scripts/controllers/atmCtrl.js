'use strict';

app.controller('ATMCtrl', function($scope, withdrawalService) {
    $scope.newPurchase = {};
    $scope.withdrawals = [];
    init();

    function init() {
        console.log("initializing the ATM controller...");
        $scope.withdrawals = withdrawalService.getData();
    }

    $scope.isDummyData = function() {
        return withdrawalService.isDummyData();
    };


    $scope.getTotalAmount = function(transaction) {
        if (transaction.serviceFee) {
            return transaction.serviceFee + transaction.cashAmount;
        } else {
            return transaction.cashAmount;
        }
    };

    $scope.getTotalSpent = function(transaction) {
        var totalSpent = 0;
        for (var i = 0; i < transaction.purchases.length; i++) {
            totalSpent += transaction.purchases[i].amount;
        }
        return totalSpent;
    };

});

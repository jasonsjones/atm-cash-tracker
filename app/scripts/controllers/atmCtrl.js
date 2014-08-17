
app.controller('ATMCtrl', function($scope, withdrawalService) {
    $scope.newPurchase = {};
    init();

    function init() {
        console.log("initializing the ATM controller...");

        var promise = withdrawalService.getDataPromise();
        promise.then(function(payload) {
           $scope.withdrawals = payload.data;
        });

    }

    $scope.isDummyData = function() {
        return withdrawalService.isDummyData();
    }


    $scope.getTotalAmount = function(transaction) {
        if (transaction.serviceFee) {
            return transaction.serviceFee + transaction.cashAmount;
        } else {
            return transaction.cashAmount;
        }
    }


    $scope.getTotalSpent = function(transaction) {
        var totalSpent = 0;
        for (var i = 0; i < transaction.purchases.length; i++) {
            totalSpent += transaction.purchases[i].amount;
        }
        return totalSpent;
    }


    $scope.addPurchase = function(transaction, newBuy) {
        transaction.purchases.push(newBuy);
    }

});


var app = angular.module('app', []);


app.service('withdrawalService', function() {

    var dummyData = true;

    this.isDummyData = function() {
        return dummyData;
    }

    this.getWithdrawals = function() {
        return atmWithdrawals;
    }

    this.getTotalAmount = function(id) {

        if (atmWithdrawals[id].serviceFee) {
            return atmWithdrawals[id].serviceFee + atmWithdrawals[id].cashAmount;
        } else {
            return atmWithdrawals[id].cashAmount;
        }
    }

    this.getTotalSpent = function(id) {
        var transaction = atmWithdrawals[id];
        var totalSpent = 0;
        for (var i = 0; i < transaction.purchases.length; i++) {
            totalSpent += transaction.purchases[i].amount;
        }
        return totalSpent;
    }

    this.addPurchase = function(id, newPurchase) {
        atmWithdrawals[id].purchases.push(
                {amount: newPurchase.amount, description: newPurchase.description});
    }

    var atmWithdrawals = [
    {
        id : 0,
           cashAmount : 40,
           serviceFee : 3,
           date : new Date(2014, 6, 10),
           purchases : [
               {amount: 3, description: "ATM service fee"},
               {amount: 5, description: "lunch"},
               {amount: 2, description: "shaving cream"},
               {amount: 2, description: "groceries"},
               {amount: 6, description: "coffee dues"},
               {amount: 6, description: "lunch"},
               {amount: 11, description: "lunch"},
               {amount: 1, description: "tip"},
               {amount: 5, description: "lunch"}
        ]
    },
    {
        id : 1,
        cashAmount: 60,
        serviceFee: 3,
        date: new Date(2014, 6, 3),
        purchases : [
            {amount: 3, description: "ATM service fee"},
            {amount: 5, description: "lunch"},
            {amount: 6, description: "coffee dues"}
        ]
    },
    {
        id : 2,
        cashAmount: 80,
        serviceFee: 2,
        date: new Date(2014, 7, 3),
        purchases : [
            {amount: 2, description: "ATM service fee"},
            {amount: 5, description: "lunch"},
            {amount: 20, description: "groceries"},
            {amount: 6, description: "coffee dues"},
            {amount: 6, description: "dinner"}
        ]
    }
    ];

});

app.controller('purchaseCtrl', function($scope, withdrawalService) {

    $scope.newPurchase = {};

    init();

    function init() {
        $scope.withdrawals = withdrawalService.getWithdrawals();
    }

    $scope.isDummyData = function() {
      console.log("call to isDummyData...");
      console.log(withdrawalService.isDummyData());
        return withdrawalService.isDummyData();
    }


    $scope.getTotalAmount = function(id) {
        return withdrawalService.getTotalAmount(id);
    }


    $scope.getTotalSpent = function(id) {
        return withdrawalService.getTotalSpent(id);
    }


    $scope.addPurchase = function(id) {
      var amount = $scope.newPurchase.amount;
      var desc = $scope.newPurchase.desc;
      withdrawalService.addPurchase(id,
          { amount: Number(amount),
            description: desc
          });

      $scope.newPurchase.amount = '';
      $scope.newPurchase.desc = '';
    }

});

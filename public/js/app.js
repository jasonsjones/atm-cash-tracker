
var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when('/', {});
});

app.directive('jjAddPurchase', function(withdrawalService) {
    return {
      restrict: 'E',
      templateUrl: 'add-purchase.html',

      scope: {
        idx : '@'
      },

      link: function(scope, element) {

          scope.addPurchase = function() {

            var newPurchase = {amount: Number(scope.amount), description: scope.desc};
            withdrawalService.addPurchase(Number(scope.idx), newPurchase);
            scope.amount = '';
            scope.desc = '';
          };
      }
    };
});

app.service('withdrawalService', function() {

    var dummyData = true;

    this.isDummyData = function() {
        return dummyData;
    }

    this.getAllWithdrawals = function() {
        return atmWithdrawals;
    }

    this.getOneWithdrawals = function(idx) {
        return atmWithdrawals[idx];
    }

    this.getTotalAmount = function(idx) {

        if (atmWithdrawals[idx].serviceFee) {
            return atmWithdrawals[idx].serviceFee + atmWithdrawals[idx].cashAmount;
        } else {
            return atmWithdrawals[idx].cashAmount;
        }
    }

    this.getTotalSpent = function(idx) {
        var transaction = atmWithdrawals[idx];
        var totalSpent = 0;
        for (var i = 0; i < transaction.purchases.length; i++) {
            totalSpent += transaction.purchases[i].amount;
        }
        return totalSpent;
    }

    this.addPurchase = function(idx, newPurchase) {
        atmWithdrawals[idx].purchases.push(
                {amount: newPurchase.amount, description: newPurchase.description});
    }

    var atmWithdrawals = [
    {
        idx : 0,
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
        idx : 1,
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
        idx : 2,
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

app.controller('atmCtrl', function($scope, withdrawalService) {

    $scope.newPurchase = {};

    init();

    function init() {
        $scope.withdrawals = withdrawalService.getAllWithdrawals();
    }

    $scope.isDummyData = function() {
        return withdrawalService.isDummyData();
    }


    $scope.getTotalAmount = function(idx) {
        return withdrawalService.getTotalAmount(idx);
    }


    $scope.getTotalSpent = function(idx) {
        return withdrawalService.getTotalSpent(idx);
    }


    $scope.addPurchase = function(idx) {
      var amount = $scope.newPurchase.amount;
      var desc = $scope.newPurchase.desc;
      withdrawalService.addPurchase(idx,
          { amount: Number(amount),
            description: desc
          });

      $scope.newPurchase.amount = '';
      $scope.newPurchase.desc = '';
    }

});

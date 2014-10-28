(function () {
  'use strict';

  var app = angular.module('app');

  app.controller('ATMController', function($scope, withdrawalService) {

      $scope.newPurchase = {};
      $scope.withdrawals = [];


      this.message = 'ATM Controller...';
      this.xTransaction =  {
        'idx' : 0,
        'cashAmount' : 40,
        'serviceFee' : 3,
        'date' : {
          'year': 2014,
          'month': 6,
          'day': 10
        },
        'purchases' : [
          {'amount': 3, 'description': 'ATM service fee'},
          {'amount': 5, 'description': 'lunch'},
          {'amount': 2, 'description': 'shaving cream'},
          {'amount': 2, 'description': 'groceries'},
          {'amount': 6, 'description': 'coffee dues'},
          {'amount': 6, 'description': 'lunch'},
          {'amount': 11, 'description': 'lunch'},
          {'amount': 1, 'description': 'tip'},
          {'amount': 5, 'description': 'lunch'}
        ]
      };


      function init() {
          console.log('initializing the ATM controller...');
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

      //init();
  });
}());

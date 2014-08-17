
app.controller('ATMCtrl', function($scope, withdrawalService) {

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

      withdrawalService.addPurchase(idx, { 
        amount: Number(amount),
        description: desc
      });

      $scope.newPurchase.amount = '';
      $scope.newPurchase.desc = '';
    }

});

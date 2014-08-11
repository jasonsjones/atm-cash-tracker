
app.directive('jjAddPurchase', function(withdrawalService) {
    return {
      restrict: 'E',
      templateUrl: 'views/add-purchase.html',

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

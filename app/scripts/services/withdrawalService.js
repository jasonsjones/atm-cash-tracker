
app.service('withdrawalService', function($http) {

    var dummyData = true;
    var atmWithdrawals = [];

    initData();

    function initData() {
        var promise = $http.get('data/data.json');
        promise.then(function(payload) {
            atmWithdrawals = payload.data;
        });
    }

    this.isDummyData = function() {
        return dummyData;
    }

    this.getDataPromise = function() {
        return $http.get('data/data.json');
    }

    this.addPurchase = function(idx, newPurchase) {
        atmWithdrawals[idx].purchases.push(
                {amount: newPurchase.amount, description: newPurchase.description});
    }

});


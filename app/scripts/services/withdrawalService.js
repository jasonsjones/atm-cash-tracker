
app.service('withdrawalService', function($http, $q) {

    var dummyData = true;
    var atmWithdrawals = [];

    this.isDummyData = function() {
        return dummyData;
    }

    this.initJSONData = function() {
        var d = $q.defer();
        $http.get('data/data.json')
            .then(function(response) {
                d.resolve(response.data)
                atmWithdrawals = response.data;
                console.log("Getting data in getJSONData...");
                console.log(atmWithdrawals);
            }, function err(reason) {
                d.reject(reason)
            });
        return d.promise;
    }

    this.getData = function() {
        return atmWithdrawals;
    }

    this.addPurchase = function(transaction, newPurchase) {
        console.log(newPurchase);
        transaction.purchases.push( {
            "amount": newPurchase.amount, 
            "description": newPurchase.description
        });
        console.log(transaction);
    }
});


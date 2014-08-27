'use strict';

app.service('withdrawalService', function($http, $q) {

    var dummyData = true;
    var atmWithdrawals = [];

    this.isDummyData = function() {
        return dummyData;
    };

    this.initJSONData = function(dataFile) {
        var d = $q.defer();
        $http.get('data/' + dataFile)
            .then(function(response) {
                console.log("Getting data in getJSONData...");
                atmWithdrawals = response.data;
                console.log(atmWithdrawals);
                convertDates();
                console.log(atmWithdrawals);
                d.resolve(response.data)
            }, function err(reason) {
                d.reject(reason)
            });
        return d.promise;
    };

    this.getData = function() {
        return atmWithdrawals;
    };

    this.addPurchase = function(transaction, newPurchase) {
        var idx = transaction.idx;
        var wd = atmWithdrawals[idx];


        wd.purchases.push( {
            "amount": newPurchase.amount,
            "description": newPurchase.description
        });
    };

    var buildDateObj = function(date) {
        var year = date.year;
        var month = date.month;
        var day = date.day;

        return new Date(year, month, day);
    };

    var convertDates = function() {
        for (var i = 0; i < atmWithdrawals.length; i++) {
            var v = atmWithdrawals[i];
            v.date = buildDateObj(v.date);
            console.log(v.date);
        }
    };
});


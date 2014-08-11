
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

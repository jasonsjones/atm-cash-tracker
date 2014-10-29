(function () {
    'use strict';
    angular.module('app')
    .controller('atmSidebarCtrl', function() {
        console.log("atmSidebarCtrl loaded...");

        this.idxSelected = null;

        this.title = "ATM Transaction List";

        this.xData = [
            {
            'idx' : 0,
            'cashAmount' : 83,
            'date': new Date(2014, 9, 14)
            },
            {
            'idx' : 1,
            'cashAmount' : 43,
            'date': new Date(2014, 9, 23)
            },
            {
            'idx' : 2,
            'cashAmount' : 103,
            'date': new Date(2014, 8, 21)
            },
            {
            'idx' : 3,
            'cashAmount' : 63,
            'date': new Date(2014, 8, 29)
            }
        ];

        this.setSelected = function(listItem) {
            this.idxSelected = listItem;
            console.log(this.idxSelected);
        };

    });
}());
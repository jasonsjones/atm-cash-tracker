(function () {
    'use strict';

    angular.module('atmApp')

        .controller('atmSidebarCtrl', atmSidebarCtrl);

    /////////////

    function atmSidebarCtrl() {
        /* jshint validthis: true */
        console.log('atmSidebarCtrl loaded...');

        var vm = this;

        vm.idxSelected = null;

        vm.title = 'ATM Transaction List';

        vm.xData = [
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

        vm.setSelected = function(listItem) {
            this.idxSelected = listItem;
            console.log(this.idxSelected);
        };
    }
}());

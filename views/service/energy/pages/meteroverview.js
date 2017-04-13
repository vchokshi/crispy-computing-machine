(function() {
    'use strict';

    angular
        .module('vdb')
        .controller('meteroverviewtopCtrl', meteroverviewtopCtrl);

    meteroverviewtopCtrl.$inject = ['$scope'];

    function meteroverviewtopCtrl($scope) {
        'ngInject';
        const self = this;

        activate();

        ///////////

        function activate() {
         console.log("meteroverviewtopCtrl");
        }
    }
})();



(function() {
    'use strict';

    angular
        .module('vdb')
        .controller('meteroverviewmiddleCtrl', meteroverviewmiddleCtrl);

    meteroverviewmiddleCtrl.$inject = ['$scope'];

    function meteroverviewmiddleCtrl($scope) {
        'ngInject';
        const self = this;

        activate();

        ///////////

        function activate() {
         console.log("meteroverviewmiddleCtrl");
        }
    }
})();





(function() {
    'use strict';

    angular
        .module('vdb')
        .controller('meteroverviewbottomCtrl', meteroverviewbottomCtrl);

    meteroverviewbottomCtrl.$inject = ['$scope'];

    function meteroverviewbottomCtrl($scope) {
        'ngInject';
        const self = this;

        activate();

        ///////////

        function activate() {
         console.log("meteroverviewbottomCtrl");
        }
    }
})();

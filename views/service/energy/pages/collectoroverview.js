(function() {
    'use strict';

    angular
        .module('vdb')
        .controller('collectoroverviewtopCtrl', collectoroverviewtopCtrl);

    collectoroverviewtopCtrl.$inject = ['$scope'];

    function collectoroverviewtopCtrl($scope) {
        'ngInject';
        const self = this;

        activate();

        ///////////

        function activate() {
         console.log("collectoroverviewtopCtrl");
        }
    }
})();



(function() {
    'use strict';

    angular
        .module('vdb')
        .controller('collectoroverviewmiddleCtrl', collectoroverviewmiddleCtrl);

    collectoroverviewmiddleCtrl.$inject = ['$scope'];

    function collectoroverviewmiddleCtrl($scope) {
        'ngInject';
        const self = this;

        activate();

        ///////////

        function activate() {
         console.log("collectoroverviewmiddleCtrl");
        }
    }
})();





(function() {
    'use strict';

    angular
        .module('vdb')
        .controller('collectoroverviewbottomCtrl', collectoroverviewbottomCtrl);

    collectoroverviewbottomCtrl.$inject = ['$scope'];

    function collectoroverviewbottomCtrl($scope) {
        'ngInject';
        const self = this;

        activate();

        ///////////

        function activate() {
         console.log("collectoroverviewbottomCtrl");
        }
    }
})();

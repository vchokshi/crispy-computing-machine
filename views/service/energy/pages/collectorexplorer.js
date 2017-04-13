(function() {
    'use strict';

    angular
        .module('vdb')
        .controller('cexploretopCtrl', cexploretopCtrl);

    cexploretopCtrl.$inject = ['$scope'];

    function cexploretopCtrl($scope) {
        'ngInject';
        const self = this;

        activate();

        ///////////

        function activate() {
         console.log("cexploretopCtrl");
        }
    }
})();



(function() {
    'use strict';

    angular
        .module('vdb')
        .controller('cexploremiddleCtrl', cexploremiddleCtrl);

    cexploremiddleCtrl.$inject = ['$scope'];

    function cexploremiddleCtrl($scope) {
        'ngInject';
        const self = this;

        activate();

        ///////////

        function activate() {
         console.log("cexploremiddleCtrl");
        }
    }
})();





(function() {
    'use strict';

    angular
        .module('vdb')
        .controller('cexplorebottomCtrl', cexplorebottomCtrl);

    cexplorebottomCtrl.$inject = ['$scope'];

    function cexplorebottomCtrl($scope) {
        'ngInject';
        const self = this;

        activate();

        ///////////

        function activate() {
         console.log("cexplorebottomCtrl");
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('vdb')
        .controller('mexploretopCtrl', mexploretopCtrl);

    mexploretopCtrl.$inject = ['$scope'];

    function mexploretopCtrl($scope) {
        'ngInject';
        const self = this;

        activate();

        ///////////

        function activate() {
         console.log("mexploretopCtrl");
        }
    }
})();



(function() {
    'use strict';

    angular
        .module('vdb')
        .controller('mexploremiddleCtrl', mexploremiddleCtrl);

    mexploremiddleCtrl.$inject = ['$scope'];

    function mexploremiddleCtrl($scope) {
        'ngInject';
        const self = this;

        activate();

        ///////////

        function activate() {
         console.log("mexploremiddleCtrl");
        }
    }
})();





(function() {
    'use strict';

    angular
        .module('vdb')
        .controller('mexplorebottomCtrl', mexplorebottomCtrl);

    mexplorebottomCtrl.$inject = ['$scope'];

    function mexplorebottomCtrl($scope) {
        'ngInject';
        const self = this;

        activate();

        ///////////

        function activate() {
         console.log("mexplorebottomCtrl");
        }
    }
})();

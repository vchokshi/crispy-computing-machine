(function() {
    //'use-strict';

    angular
        .module('vdb-ui')
        .directive('vdbTabs', vdbTabs);

    function vdbTabs() {
        const directive = {
            restrict: 'EA',
            templateUrl: 'vdb-ui/vdb-tabs/content.html',

            link: link,
            // controller: controller,
            // controllerAs: 'self',
            // controllerAs: 'vm',
            // bindToController: true
        };

        return directive;

        ///////////

        function link(scope, el, attr, ctrl) {

        }

    }

})();

(function() {
    //'use-strict';


    angular
        .module('vdb-ui')
        .directive('vdbRbBlogs', vdbRbBlogs);

    function vdbRbBlogs() {
        const directive = {
            restrict: 'EA',
            templateUrl: 'components/rightbars/dashboard/content.html',
            // scope: {
            // },
            // link: link,
            // controller: vdbRbBlogsCtrl,
            // controllerAs: 'self',
            // bindToController: true
        };

        return directive;

        ///////////

        function link(scope, el, attr, ctrl) {

        }
    }

    vdbRbBlogsCtrl.$inject = ['$scope'];

    function vdbRbBlogsCtrl($scope) {
        'ngInject';
        const self = this;

        activate();

        ///////////

        function activate() {

        }
    }
})();

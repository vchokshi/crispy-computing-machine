(() => {
    'use strict';

    /**
     * @ngdoc directive
     * @name vdbMeter
     * @module vdb-ui
     * @restrict EA
     * @description
     *
     * The `vdbMeter` directive description.
     *
     */
    angular
        .module('vdb-ui')
        .directive('vdbMeter', vdbMeter);

    function vdbMeter() {
        const directive = {
            restrict: 'EA',
            templateUrl: 'vdb-d3/d3-meter/content.html',
            scope: {
            },
            link: link,
            controller: Controller,
            controllerAs: 'self',
            bindToController: true
        };

        return directive;

        ///////////

        function link(scope, el, attr, ctrl) {

        }
    }

    Controller.$inject = ['$scope'];

    function Controller($scope) {
        'ngInject';
        const self = this;

        activate();

        ///////////

        function activate() {

        }
    }
})();

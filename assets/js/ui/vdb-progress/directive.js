(function() {
    'use strict';

    /**
     * @ngdoc directive
     * @name vdbProgress
     * @module vdb-ui
     * @restrict EA
     * @description
     *
     * The `vdbProgress` directive description.
     *
     */
    angular
        .module('vdb-ui')
        .directive('vdbProgress', vdbProgress);

    function vdbProgress() {
        const directive = {
            restrict: 'EA',
            templateUrl: 'vdb-ui/vdb-progress/content.html',
            scope: {
             data: '=?'
            },
            link: link,
            controller: Controller,
            controllerAs: 'self',
            // bindToController: true
        };

        return directive;

        ///////////

        function link(scope, el, attr, ctrl) {

        }
    }

    Controller.$inject = ['$scope','magnitudeFilter'];

    function Controller($scope,magnitudeFilter) {
        'ngInject';
        const self = this;
        $scope.mf = magnitudeFilter;
        activate();

        ///////////

        function activate() {

        }
    }
})();

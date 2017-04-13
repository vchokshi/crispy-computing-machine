(function() {
    'use strict';

    angular
        .module('vdb-main')
        .service('utilitiesService', utilitiesService);

    utilitiesService.$inject = [];

    function utilitiesService() {
        'ngInject';
        const self = this;

        var service = {
         flip: flip,
         trend: trend,
        };

        return service;

        function flip() {
         //Like flipping a coin, randomly get 1 or 0
         return Math.round(Math.random());
        }

        function trend(previous,current) {
         return previous > current ? "down": "up";
        }
    }
})();

(function() {
 'use strict';

 angular
 .module('app', [
  'ui.bootstrap',
  'ui.router',
  // 'ui.validate',
  // 'uiRouterStyles',
  'ngStorage',
  'ngResource',
  // 'summernote',
  'ngPasswordStrength',
  // 'NgSwitchery',
  'vdb'
 ]);
})();

/**
 *  vdb is the main application module for Videbligo.
 *  It depends on:
 *  {@link vdb-auth} for all authentication and authorization functions
 *  {@link vdb-search} for all search related functions
 *
 *  All initial directives should be placed in: {@link vdb-stub} for development.
 *
 * @name vdb
 * @description the description of vdb
 * @returns Something returned
 */
angular.module('vdb', [
 'vdb-auth',
 'vdb-search',
 // 'vdb-stub',
 'vdb-main',
 'vdb-d3',
 'vdb-flot',
 // 'vdb-jvectormap',
 'vdb-ui',
 'vdb-wp'
]);

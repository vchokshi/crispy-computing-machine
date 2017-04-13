function vdbModalHeader($sce) {
  return {
    restrict: 'EA',
    templateUrl: ajaxInfo.template_directory + 'assets/js/main/directives/vdb-modal-header/content.html',
    scope: {
      title: '@',
      values: '=info',
    },
  };
}

angular
    .module('vdb-main')
    .directive('vdbModalHeader', vdbModalHeader);

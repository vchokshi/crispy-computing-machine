(function() {
  'use strict';

  angular
  .module('vdb-main')
  .directive('vdbHeader', vdbHeader);

  function vdbHeader() {
    const directive = {
      restrict: 'EA',
      templateUrl: ajaxInfo.template_directory+ 'assets/js/main/directives/vdb-header/content.html',
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

  Controller.$inject = ['$rootScope','$scope','$state','$uibModal','user','search','pages'];

  function Controller($rootScope,$scope,$state,$uibModal,user,search,pages) {
    'ngInject';
    const self = this;

    $scope.modalIsOpen = false;
    $scope.wp_pages = pages;

    init();

    function activate() {

      user.getPerms(function(r) {
        if(r) {
          $scope.myIndices = r.indices;
          $scope.Index = r.indices[0];
        }
      });

      search.getRefresh(function(response) {
        $scope.refresh = response;
      });

      search.getTimeWindow(function(response) {
        $scope.timeWindow = response;
      });

    }

    function init() {

      self.params = {'orderby': 'menu_order', 'order': 'asc'};
      pages.get(self.params, function(r) {
        $scope.pages = r;

      });

      user.get(function(r) {
        $scope.user = r.User_Info;
        $scope.user ? activate() : null;
      });

      $scope.isDash = function() {
        var re = /service\.cloud\..*/;
        return re.test($state.current.name);
      };

    }

    $scope.setTimeWindow = function(to, from) {
      search.setTimeWindow(to,from,function(response) {
        search.getTimeWindow(function(response) {
          $scope.timeWindow = response;
        });
      });
    };

    $scope.login = function() {
      $scope.modalIsOpen ? $scope.modalInstance.close(true) : null;
      $scope.modalIsOpen = true;
      $scope.modalInstance = $uibModal.open({
        animation: false,
        backdropClass: "light",
        keyboard: true,
        scope:$scope,
        template: '<vdb-login />',
        // controller: 'loginCtrl', //partials/login/controller.js
        size: 'md'
      });

      $scope.modalInstance.result.then(function (next) {
        // $scope.selected = selectedItem;
      }, function () {
        !self.keyboard ? $state.go('home') : null;
        // $log.info('Modal dismissed at: ' + new Date());
      });

    };

    $scope.register = function() {
      // user.logout(function(response) {});
      $scope.modalIsOpen ? $scope.modalInstance.close(true) : null;
      $scope.modalIsOpen = true;
      $scope.modalInstance = $uibModal.open({
        animation: false,
        scope:$scope,
        template: '<vdb-registration />',
        size: 'md'
      });
    };

    $scope.terms = function() {
      $scope.modalInstance = $uibModal.open({
        animation: false,
        template: '<vdb-terms />',
        scope:$scope,
        size: 'lg'
      });
    };

    $scope.privacy = function() {
      $scope.modalIsOpen ? $scope.modalInstance.close(true) : null;
      $scope.modalIsOpen = true;
      $scope.terms = true;
      $scope.modalInstance = $uibModal.open({
        animation: false,
        template: '<vdb-privacy />',
        scope:$scope,
        size: 'lg'
      });
    };

    $rootScope.$on('login', function() {
      console.log("login!");
      init();
    });

    $rootScope.$on('reset', function() {
      console.log("reset!");
      user.getMyIndex(function(response) {
        $scope.Index = response;
        user.setMyService($scope.Index, function(response){
          $scope.myServices = response;
        });
      });
    });

    $rootScope.$on('unathorized', function() {
      console.log("Unauth!");
      $scope.logout();
      self.keyboard = false;
      $scope.login();
    });

    $scope.logout = function() {
      user.logout(function(response) {
        if(response) {
          $scope.user = $scope.Indes = $scope.myIndices = $scope.myServices = null;
        }
      });
    };

    $scope.setIndex = function(index) {
      user.setMyIndex(index);
    }
  }
})();

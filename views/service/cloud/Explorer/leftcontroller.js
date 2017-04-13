function leftExplorerCtrl($scope,userService,searchService,$interval) {
    console.log("Default Controller for leftExplorerCtrl has started");
    $scope.User = userService.getMyIdentity();

    $scope.selected = {
     mfg: "null",
     device: "null"
    };

    $scope.search = function(mfg,device) {
     $scope.selected.mfg = mfg;
     $scope.selected.device = device;
     console.log("Search!");
     console.log($scope.selected);
    };

    var init = function() {

     var responseType = {
      library: "vdb",
      type: "json",
      aggregation: "Analytics.Manufacturer"
     };

     searchService.getDevices(responseType, function(response) {
      $scope.devices = response.json;
     });
    };

    init();

    // var promise;
    //
    $scope.$on('refresh', function() {
     // if(promise) {
     //  $interval.cancel(promise);
     // }
     init();
     // promise = $interval(function() {init();},searchService.getRefreshKey());
    });

    // $scope.$on('$destroy', function() {
    //  $interval.cancel(promise);
    // });
  }

angular
.module('vdb')
.controller('leftExplorerCtrl',leftExplorerCtrl);

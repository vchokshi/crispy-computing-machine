(function() {
 //'use-strict';
 /**
  * @ngdoc directive
  * @name vdb-table
  * @module vdb-ui
  * @restrict EA
  * @description
  *
  * The `vdb-table` directive description.
  *
  */
 angular
 .module('vdb-ui')
 .directive('vdbTable', vdbTable);


 function vdbTable() {
  const directive = {
   restrict: 'EA',
   templateUrl: 'vdb-ui/vdb-table/content.html',
   scope: {
    data: '=?',
    demo: '=?'
    },
    link: link,
    controller: controller,
    controllerAs: 'self',
  };

  return directive;

  ///////////

  function link(scope, el, attr, ctrl) {

  }
  function controller($scope) {
   if($scope.demo) {
    self.magnitude = 1000000;

    //Randomly pick a background color.
    // self.background = colors.red;

    $scope.data = {
     title: "Meter 9200",
     icon: "fa-info-circle",
     background: 'gray',
     // overview: "This is the table panel overview. We can put anything we want ot in here. If this field is not set, the row will not show up in the table",
     // tableheaders: ['Column 1', 'Column 2'],
     tabledata: [
      ["Meter Name","9200"]
     ]
    };
   }


  }

 }

})();

(function() {
 //'use-strict';

 angular
 .module('vdb-ui')
 .directive('skinConfig', skinConfig);

 function skinConfig() {
  const directive = {
   restrict: 'EA',
   templateUrl: 'vdb-ui/vdb-skins/content.html',
   scope: {
   },
   // link: link,
   controller: skinController,
   controllerAs: 'self',
   bindToController: true
  };

  return directive;

  // function link(scope, el, attr, ctrl) {
  //  var isField = (el[0].tagName === 'body');
  //
  //  if(!isField) {
  //   // Load the html through $templateRequest
  //   $templateRequest('datepicker.html').then(function(html){
  //    // Convert the html to an actual DOM node
  //    var template = angular.element(html);
  //    // Append it to the directive element
  //    $element.append(template);
  //    // And let Angular $compile it
  //    $compile(template)($scope);
  //   });
  //  }
  // }

  skinController.$inject = ['$localStorage'];

  function skinController($localStorage) {
   'ngInject';
   const self = this;

   activate();

   function activate() {
    $('.theme-config').click(function () {
     $(".theme-config").toggleClass("show");
     $(".leftbar-content").toggleClass("on");
    });

    $('.s-skin-default').click(function () {
     $("body").addClass("default");
     $("body").removeClass("skin-blue");
     $("body").removeClass("skin-green");
     $("body").removeClass("skin-custom");

    });

    $('.s-skin-blue').click(function () {
     $("body").removeClass("default");
     $("body").addClass("skin-blue");
     $("body").removeClass("skin-green");
     $("body").removeClass("skin-custom");
    });

    $('.s-skin-green').click(function () {
     $("body").removeClass("default");
     $("body").removeClass("skin-blue");
     $("body").addClass("skin-green");
     $("body").removeClass("skin-custom");
    });

    $('.s-skin-custom').click(function () {
     $("body").removeClass("default");
     $("body").removeClass("skin-blue");
     $("body").removeClass("skin-green");
     $("body").addClass("skin-custom");
    });

    // Enable/disable left sidebar
    // Hide left bar on  = checked
    // Hide left bar off = not checked
    $('#leftbar').click(function () {
     if ($('#leftbar').is(':checked')) {
      $("#leftbar-panel").addClass('hidden');
      $("#leftbar-content").removeClass('leftbar-content');
     } else {
      $("#leftbar-panel").removeClass('hidden');
      $("#leftbar-content").addClass('leftbar-content');
     }
    });



   }
  }
 }
})();

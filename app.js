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

(function()  {
 //'use-strict';

 angular
 .module('vdb-auth', []);

})();

(function()  {
 'use strict';

 angular
 .module('vdb-d3', [
  'vdb-main'
 ]);
})();

(function()  {
 // 'use strict';

 angular
 .module('vdb-flot', []);

})();

(function()  {
 'use strict';

 angular
 .module('vdb-main', []);
})();

(function()  {
 'use strict';

 angular
 .module('vdb-search', [
 ]);

})();

(function()  {
 //'use-strict';

 angular
 .module('vdb-ui', [
  'chart.js'
 ]);

})();

(function()  {
 //'use-strict';

 angular
 .module('vdb-wp', []);

})();

var compareTo = function() {
    return {
        require: "ngModel",
        scope: {
            otherModelValue: "=compareTo"
        },
        link: function(scope, element, attributes, ngModel) {

            ngModel.$validators.compareTo = function(modelValue) {
                return modelValue == scope.otherModelValue;
            };

            scope.$watch("otherModelValue", function() {
                ngModel.$validate();
            });
        }
    };
};

angular
 .module('vdb-main')
 .directive("compareTo", compareTo);

function pageTitle($rootScope, $timeout) {
 return {
  link: function(scope, element) {
   var listener = function(event, toState, toParams, fromState, fromParams) {
    // Default title - load on Dashboard 1
    var title = 'Videbligo | Big Data Analytics ';
    // Create your own title pattern
    if (toState.data && toState.data.pageTitle) title = toState.data.pageTitle;
    $timeout(function() {
     element.text(title);
    });
   };
   $rootScope.$on('$stateChangeStart', listener);
  }
 };
}

angular
.module('vdb-ui')
.directive('pageTitle', pageTitle);

//
(function() {
 ////'use-strict';

 /**
  * Creates an instance of table
  *
  */
 angular
 .module('vdb-main')
 .directive('vdbFooter', vdbFooter);

 function vdbFooter() {
  const directive = {
   restrict: 'EA',
   templateUrl: ajaxInfo.template_directory + 'assets/js/main/directives/vdb-footer/content.html',

   link: link,
   controller: controller,
   controllerAs: 'self',
   // controllerAs: 'vm',
   bindToController: true
  };

  return directive;

  ///////////

  function link(scope, el, attr, ctrl) {

  }
  function controller($scope,$interval,$uibModal,$log) {
   $scope.version = "2.0";

   $scope.links = [
    {
     title: "About Us",
     route: "home.blogs.posts({cat:'About',year:'2017',month:'01',day:'23',title:'About-Us'})"
    },
    {
     title: "Services",
     route: "marketing"
    },
    {
     title: "Support",
     route: "home"
    }
   ];

   $scope.showTerms = function() {
    $scope.modalTerms = $uibModal.open({
     animation: false,
     template: '<vdb-terms />',
     size: 'lg',
    });

    $scope.modalTerms.result.then(function (next) {
     // $scope.selected = selectedItem;
    }, function () {
     $log.info('Terms Modal dismissed at: ' + new Date());
    });

   };

   $scope.showPrivacy = function() {
    $scope.modalPrivacy = $uibModal.open({
     animation: false,
     template: '<vdb-privacy />',
     size: 'lg',
    });

    $scope.modalPrivacy.result.then(function (next) {
     // $scope.selected = selectedItem;
    }, function () {
     $log.info('Terms Modal dismissed at: ' + new Date());
    });



   };

   $scope.posts = [
    // {
    //  title: "New Terms and Conditions",
    //  date: "September 15, 2016",
    //  route: "home"
    // },
   ];

   $scope.unstructured = false;

   $scope.insecure = false;

   var interval;

   $scope.$on('$destroy', function () { $interval.cancel(interval); });

  }
 }

})();

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

/*
* Template Name: Unify - Responsive Bootstrap Template
* Author: @htmlstream
* Website: http://htmlstream.com
*/

var App = function () {
	// We extend jQuery by method hasAttr
	jQuery.fn.hasAttr = function(name) {
	  return this.attr(name) !== undefined;
	};

	// Fixed Header
	function handleHeader() {
		if (jQuery(window).scrollTop() > 100) {
			jQuery('.header-fixed .header-sticky').addClass('header-fixed-shrink');
		}
		jQuery(window).scroll(function() {
		  if (jQuery(window).scrollTop() > 100) {
			jQuery('.header-fixed .header-sticky').addClass('header-fixed-shrink');
		  } else {
			jQuery('.header-fixed .header-sticky').removeClass('header-fixed-shrink');
		  }
		});
	}

	// Header Mega Menu
	function handleMegaMenu() {
		jQuery(document).on('click', '.mega-menu .dropdown-menu', function(e) {
			e.stopPropagation();
		})
	}

	// Search Box (Header)
	function handleSearch() {
		jQuery('.search').on("click", function () {
			if(jQuery('.search-btn').hasClass('fa-search')){
				jQuery('.search-open').fadeIn(500);
				jQuery('.search-btn').removeClass('fa-search');
				jQuery('.search-btn').addClass('fa-times');
			} else {
				jQuery('.search-open').fadeOut(500);
				jQuery('.search-btn').addClass('fa-search');
				jQuery('.search-btn').removeClass('fa-times');
			}
		});
	}

	// Search Box v1 (Header v5)
	function handleSearchV1() {
		jQuery('.header-v5 .search-button').click(function () {
			jQuery('.header-v5 .search-open').slideDown();
		});

		jQuery('.header-v5 .search-close').click(function () {
			jQuery('.header-v5 .search-open').slideUp();
		});

		jQuery(window).scroll(function(){
		  if(jQuery(this).scrollTop() > 1) jQuery('.header-v5 .search-open').fadeOut('fast');
		});
	}

	// Search Box v2 (Header v8)
	function handleSearchV2() {
		jQuery(".blog-topbar .search-btn").on("click", function() {
		  if (jQuery(".topbar-search-block").hasClass("topbar-search-visible")) {
			jQuery(".topbar-search-block").slideUp();
			jQuery(".topbar-search-block").removeClass("topbar-search-visible");
		  } else {
			jQuery(".topbar-search-block").slideDown();
			jQuery(".topbar-search-block").addClass("topbar-search-visible");
		  }
		});
		jQuery(".blog-topbar .search-close").on("click", function() {
		  jQuery(".topbar-search-block").slideUp();
		  jQuery(".topbar-search-block").removeClass("topbar-search-visible");
		});
		jQuery(window).scroll(function() {
			var isiPhone = /iphone/i.test(navigator.userAgent.toLowerCase());
			if (!isiPhone) {
			  jQuery(".topbar-search-block").slideUp();
			  jQuery(".topbar-search-block").removeClass("topbar-search-visible");
			}
		});
	}

	// TopBar (Header v8)
	function handleTopBar() {
		jQuery(".topbar-toggler").on("click", function() {
		  if (jQuery(".topbar-toggler").hasClass("topbar-list-visible")) {
			jQuery(".topbar-menu").slideUp();
			jQuery(this).removeClass("topbar-list-visible");
		  } else {
			jQuery(".topbar-menu").slideDown();
			jQuery(this).addClass("topbar-list-visible");
		  }
		});
	}

	// TopBar SubMenu (Header v8)
	function handleTopBarSubMenu() {
		jQuery(".topbar-list > li").on("click", function(e) {
		  if (jQuery(this).children("ul").hasClass("topbar-dropdown")) {
			if (jQuery(this).children("ul").hasClass("topbar-dropdown-visible")) {
			  jQuery(this).children(".topbar-dropdown").slideUp();
			  jQuery(this).children(".topbar-dropdown").removeClass("topbar-dropdown-visible");
			} else {
			  jQuery(this).children(".topbar-dropdown").slideDown();
			  jQuery(this).children(".topbar-dropdown").addClass("topbar-dropdown-visible");
			}
		  }
		  //e.preventDefault();
		});
	}

	// Sidebar Navigation Toggle
	function handleToggle() {
		jQuery('.list-toggle').on('click', function() {
			jQuery(this).toggleClass('active');
		});
	}

	// Equal Height Columns
	function handleEqualHeightColumns() {
		var EqualHeightColumns = function () {
			jQuery(".equal-height-columns").each(function() {
				heights = [];
				jQuery(".equal-height-column", this).each(function() {
					jQuery(this).removeAttr("style");
					heights.push(jQuery(this).height()); // write column's heights to the array
				});
				jQuery(".equal-height-column", this).height(Math.max.apply(Math, heights)); //find and set max
			});
		}

		EqualHeightColumns();
		jQuery(window).resize(function() {
			EqualHeightColumns();
		});
		jQuery(window).load(function() {
			EqualHeightColumns();
		});
	}

	// Equal Height Image-Columns
	function handleEqualHeightColumns__Images() {
		var EqualHeightColumns__Images = function () {
			jQuery('.equal-height-columns-v2').each(function() {
				var heights = [];
				jQuery('.equal-height-column-v2', this).each(function() {
					jQuery(this).removeAttr('style');
					heights.push(jQuery(this).height()); // Write column's heights to the array
				});
				jQuery('.equal-height-column-v2', this).height(Math.max.apply(Math, heights)); // Find and set max

				jQuery('.equal-height-column-v2', this).each(function() {
					if (jQuery(this).hasAttr('data-image-src')) {
						jQuery(this).css('background', 'url('+jQuery(this).attr('data-image-src')+') no-repeat scroll 50% 0 / cover');
					}
				});
			});
		}
    jQuery('.equal-height-columns-v2').ready(function() {
      EqualHeightColumns__Images();
    });
		jQuery(window).resize(function() {
			EqualHeightColumns__Images();
		});
	}

	// Full Screen
	var handleFullscreen = function() {
		var WindowHeight = jQuery(window).height();
		var HeaderHeight = 0;

		if (jQuery(document.body).hasClass("promo-padding-top")) {
		  HeaderHeight = jQuery(".header").height();
		} else {
		  HeaderHeight = 0;
		}

		jQuery(".fullheight").css("height", WindowHeight - HeaderHeight);

		jQuery(window).resize(function() {
		  var WindowHeight = jQuery(window).height();
		  jQuery(".fullheight").css("height", WindowHeight - HeaderHeight);
		});
	}

	// Align Middle
	var handleValignMiddle = function() {
		jQuery(".valign__middle").each(function() {
		  jQuery(this).css("padding-top", jQuery(this).parent().height() / 2 - jQuery(this).height() / 2);
		});
		jQuery(window).resize(function() {
		  jQuery(".valign__middle").each(function() {
			jQuery(this).css("padding-top", jQuery(this).parent().height() / 2 - jQuery(this).height() / 2);
		  });
		});
	}

	// Hover Selector
	function handleHoverSelector() {
	    jQuery('.hoverSelector').on('click', function(e) {
	      if (jQuery(this).children('ul').hasClass('languages')) {
	        if (jQuery(this).children('ul').hasClass('languages-visible')) {
	          jQuery(this).children('.languages').slideUp();
	          jQuery(this).children('.languages').removeClass('languages-visible');
	        } else {
	          jQuery(this).children('.languages').slideDown();
	          jQuery(this).children('.languages').addClass('languages-visible');
	        }
	      }
	    });
	}

	// Bootstrap Tooltips and Popovers
	function handleBootstrap() {
		/* Bootstrap Carousel */
		jQuery('.carousel').carousel({
			interval: 15000,
			pause: 'hover'
		});

		/* Tooltips */
		jQuery('.tooltips').tooltip();
		jQuery('.tooltips-show').tooltip('show');
		jQuery('.tooltips-hide').tooltip('hide');
		jQuery('.tooltips-toggle').tooltip('toggle');
		jQuery('.tooltips-destroy').tooltip('destroy');

		/* Popovers */
		jQuery('.popovers').popover();
		jQuery('.popovers-show').popover('show');
		jQuery('.popovers-hide').popover('hide');
		jQuery('.popovers-toggle').popover('toggle');
		jQuery('.popovers-destroy').popover('destroy');
	}

	return {
		init: function () {
			handleBootstrap();
			handleSearch();
			handleSearchV1();
			handleSearchV2();
			handleTopBar();
			handleTopBarSubMenu();
			handleToggle();
			handleHeader();
			handleMegaMenu();
			handleHoverSelector();
			handleFullscreen();
			handleValignMiddle();
			handleEqualHeightColumns();
			handleEqualHeightColumns__Images();
		},

		// Counters
		initCounter: function () {
			jQuery('.counter').counterUp({
				delay: 10,
				time: 1000
			});
		},

		// Parallax Backgrounds
		initParallaxBg: function () {
			jQuery(window).load(function() {
				jQuery('.parallaxBg').parallax("50%", 0.2);
				jQuery('.parallaxBg1').parallax("50%", 0.4);
			});
		},

		// Scroll Bar
		initScrollBar: function () {
			jQuery('.mCustomScrollbar').mCustomScrollbar({
				theme:"minimal",
				scrollInertia: 200,
				scrollEasing: "linear"
			});
		},

		// Sidebar Menu Dropdown
		initSidebarMenuDropdown: function() {
		  function SidebarMenuDropdown() {
			jQuery('.header-v7 .dropdown-toggle').on('click', function() {
			  jQuery('.header-v7 .dropdown-menu').stop(true, false).slideUp();
			  jQuery('.header-v7 .dropdown').removeClass('open');

			  if (jQuery(this).siblings('.dropdown-menu').is(":hidden") == true) {
				jQuery(this).siblings('.dropdown-menu').stop(true, false).slideDown();
				jQuery(this).parents('.dropdown').addClass('open');
			  }
			});
		  }
		  SidebarMenuDropdown();
		},

		// Animate Dropdown
		initAnimateDropdown: function() {
		  function MenuMode() {
			jQuery('.dropdown').on('show.bs.dropdown', function() {
			  jQuery(this).find('.dropdown-menu').first().stop(true, true).slideDown();
			});
			jQuery('.dropdown').on('hide.bs.dropdown', function() {
			  jQuery(this).find('.dropdown-menu').first().stop(true, true).slideUp();
			});
		  }

		  jQuery(window).resize(function() {
			if (jQuery(window).width() > 768) {
			  MenuMode();
			}
		  });

		  if (jQuery(window).width() > 768) {
			MenuMode();
		  }
		},
	};
}();

(function() {
 /**
  * @ngdoc config
  * @name vdb
  * @module vdb
  * @description
  *
  */
 angular
 .module('vdb')
 .config(config);

 config.$inject= ['$httpProvider','$resourceProvider','$locationProvider'];

 function config($httpProvider,$resourceProvider,$locationProvider) {

   $locationProvider.hashPrefix('');
   $locationProvider.html5Mode({
     enabled: true,
     requireBase: false
   });
  // $resourceProvider.defaults.stripTrailingSlashes = false;
  // $httpProvider.useApplyAsync(false);
  $httpProvider.defaults.useXDomain = true;

  delete $httpProvider.defaults.headers.common['X-Requested-With'];
  delete $httpProvider.defaults.headers.common['referrer'];

  $httpProvider.interceptors.push('interceptor');
 }

})();

(function() {
 //'use-strict';
 /**
  * @ngdoc service
  * @name interceptor
  * @module vdb
  * @restrict EA
  * @description
  */
  /*
  */
 angular
 .module('vdb')
 .service('interceptor', interceptor);

 interceptor.$inject = ['$q', 'token','$rootScope'];

 function interceptor($q,token,$rootScope) {

  var service = this;
  var token = token;
  // var id = id;

  service.request = function(config) {
   config.headers = config.headers || {};
   token.get(function(response) {
    response ? config.headers.Authorization = 'Bearer ' + response: null;
   });
   // id.getMyId(function(response) {
   //  response ? config.headers.From = response : null;;
   // });

   return config;
  };

  service.requestError = function(rejection) {
  }

  service.response = function(response) {
   return response;
  };

  service.responseError = function(rejection) {
   if (rejection.status === 401) {
    $rootScope.$broadcast("unathorized");
    return;
   }
   return $q.reject(rejection);
  };
 }

})();

(function() {
 //'use-strict';
 /**
  * @ngdoc service
  * @name interpolate
  * @module vdb
  * @restrict EA
  * @description
  *
  *
  *
  */
 angular
 .module('vdb')
 .config(interpolate);

 interpolate.$inject = ['$interpolateProvider'];

 function interpolate($interpolateProvider) {
  $interpolateProvider.startSymbol('//');
  $interpolateProvider.endSymbol('\\\\');
 }
})();

/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-flexboxlegacy-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-shiv-cssclasses-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function B(a){j.cssText=a}function C(a,b){return B(n.join(a+";")+(b||""))}function D(a,b){return typeof a===b}function E(a,b){return!!~(""+a).indexOf(b)}function F(a,b){for(var d in a){var e=a[d];if(!E(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function G(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:D(f,"function")?f.bind(d||b):f}return!1}function H(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return D(b,"string")||D(b,"undefined")?F(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),G(e,b,c))}function I(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)t[c[d]]=c[d]in k;return t.list&&(t.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),t}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),s[a[d]]=!!e;return s}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={},s={},t={},u=[],v=u.slice,w,x=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},y=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=D(e[d],"function"),D(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),z={}.hasOwnProperty,A;!D(z,"undefined")&&!D(z.call,"undefined")?A=function(a,b){return z.call(a,b)}:A=function(a,b){return b in a&&D(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=v.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(v.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(v.call(arguments)))};return e}),r.flexbox=function(){return H("flexWrap")},r.flexboxlegacy=function(){return H("boxDirection")},r.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},r.canvastext=function(){return!!e.canvas&&!!D(b.createElement("canvas").getContext("2d").fillText,"function")},r.postmessage=function(){return!!a.postMessage},r.websqldatabase=function(){return!!a.openDatabase},r.indexedDB=function(){return!!H("indexedDB",a)},r.hashchange=function(){return y("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},r.history=function(){return!!a.history&&!!history.pushState},r.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},r.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},r.rgba=function(){return B("background-color:rgba(150,255,150,.5)"),E(j.backgroundColor,"rgba")},r.hsla=function(){return B("background-color:hsla(120,40%,100%,.5)"),E(j.backgroundColor,"rgba")||E(j.backgroundColor,"hsla")},r.multiplebgs=function(){return B("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},r.backgroundsize=function(){return H("backgroundSize")},r.borderimage=function(){return H("borderImage")},r.borderradius=function(){return H("borderRadius")},r.boxshadow=function(){return H("boxShadow")},r.textshadow=function(){return b.createElement("div").style.textShadow===""},r.opacity=function(){return C("opacity:.55"),/^0.55$/.test(j.opacity)},r.cssanimations=function(){return H("animationName")},r.csscolumns=function(){return H("columnCount")},r.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return B((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),E(j.backgroundImage,"gradient")},r.cssreflections=function(){return H("boxReflect")},r.csstransforms=function(){return!!H("transform")},r.csstransforms3d=function(){var a=!!H("perspective");return a&&"webkitPerspective"in g.style&&x("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},r.csstransitions=function(){return H("transition")},r.fontface=function(){var a;return x('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},r.generatedcontent=function(){var a;return x(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},r.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},r.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},r.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},r.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},r.webworkers=function(){return!!a.Worker},r.applicationcache=function(){return!!a.applicationCache};for(var J in r)A(r,J)&&(w=J.toLowerCase(),e[w]=r[J](),u.push((e[w]?"":"no-")+w));return e.input||I(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)A(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},B(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.hasEvent=y,e.testProp=function(a){return F([a])},e.testAllProps=H,e.testStyles=x,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+u.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
(function() {
 //'use-strict';

 angular
 .module('vdb-auth')
 .factory('indices', indices);

 indices.$inject = ['$rootScope','$localStorage'];

 function indices($rootScope,$localStorage) {

  'ngInject';

  const self = this;

  var allMyIndices = [],
   defaultIndex,
   myIndex;

  var service = {
   get: get,
   set: set,

   getAll: getAll,
   setAll: setAll,

   getDefaultIndex: getDefaultIndex,

   clear: clear,
  };
  return service;

  function get(callback) {
    callback(myIndex);
  }

  function set(index) {
   myIndex = index;
   $rootScope.$broadcast('reset');
  }

  function getDefaultIndex(callback) {
   if(defaultIndex) {
    callback(defaultIndex);
   }
   callback(null);
  }

  function clear() {
   allMyIndices = defaultIndex = myIndex =  [];
  }

  function getAll(callback) {
    callback(allMyIndices);
  }

  function setAll(hits,callback) {
   for (var i = 0, len = hits.length; i < len; i++) {
    if(
     hits[i]._source.independent.verb_type == 'permission' &&
     hits[i]._source.independent.verb == 'is_subscribed_to' &&
     hits[i]._source.independent.record_type == 'service' &&
     hits[i]._source.dependent.verb_type == 'permission' &&
     hits[i]._source.dependent.verb == 'with_resource' &&
     (allMyIndices.indexOf(hits[i]._source.dependent.record) === -1 )
    ) {
     allMyIndices.push(hits[i]._source.dependent.record);
    }
   }
   set(allMyIndices[0]);
   callback(allMyIndices);
  }

 }



})();


(function() {
 //'use-strict';

 angular
 .module('vdb-auth')
 .factory('register', register);

 register.$inject = ['$resource','user'];

 function register($resource,user) {

  var service = {
   register: register,
  };

  return service;

  function register(postData, callback) {
   var reg = $resource('/api/aaa/register/');
   reg.get(postData, function(response) {
    if(response.token && response.id && response.$resolved) {
     user.setToken(response,function(response){});
     user.setId(response,function(response) {});
     callback(response);
    }
   });
  }
 }
})();

(function() {

 angular
 .module('vdb-auth')
 .run(run);

 run.$inject= ['$rootScope','$state', '$resource','user'];

 function run($rootScope, $state, $resource,user) {
  const self=this;

  $rootScope.$on('$stateChangeStart', function (event, toState, fromState, fromParams) {
   var resource = toState.name.split(".")[0];
   if(resource !== 'home') {
    //Protected resource being accessed
    //Check for auth
    if(!user.checkAuth()) {
     // $state.go('home');
    }
   }
  });
 }
})();

(function() {
 //'use-strict';

 angular
 .module('vdb-auth')
 .factory('services', services);

 services.$inject = ['$rootScope','$resource'];

 function services($rootScope,$resource) {

  'ngInject';

  const s = this;

  var myServices=[];
  var myService =[];
  s.hit;

  s.url = '/api/services/:verb';
  s.actions = {
   'service': {
    'method': 'POST',
    'params': {'verb' : 'service'}
   }
  };
  s.query = $resource(s.url,s.paramDefaults || {} ,s. actions,s.options || {});

  var service = {
   getAll: getAll,
   setAll: setAll,
   set: set,
   get: get,
   clear: clear,
  };

  return service;

  function set(index,callback) {
   var hits = getAll();
   var j = 0;
   if(hits) {
    for (var i = 0, len = hits.length; i < len; i++) {
     if(hits[i].index == index) {
      myService[j] = {
       index: hits[i].index,
       title: hits[i].title,
       route: hits[i].route,
       icon: hits[i].icon,
      };
      j++;
     }
    }
   }
   callback(myService);
  }

  function get(callback) {
   callback(myService);
  }

  function clear() {
   myService = MyServices =  [];
  }

  function setAll(hits,callback) {
   myServices = [];
   for (var i = 0, len = hits.length; i < len; i++) {
    if(hits[i]._source.independent.verb_type == 'permission' &&  hits[i]._source.independent.verb == 'is_subscribed_to' && hits[i]._source.independent.record_type == 'service') {
     switch(hits[i]._source.independent.record) {
      case 'Visualize Cloud':
       var rte = 'service.cloud';
       var icon = 'fa fa-cloud';
       break;
      case 'Visualize Energy':
       var rte = 'service.energy';
       var icon = 'fa fa-pie-chart';
       break;

     }
     var service = {
      title: hits[i]._source.independent.record,
      index: hits[i]._source.dependent.record,
      route: rte,
      icon:icon
     };
     myServices.push(service);
    }
   }
   callback(myServices);
  }

  function getAll() {
   return myServices;
  }


 }
})();


(function() {
 //'use-strict';

 angular
 .module('vdb-auth')
 .factory('token', token);

 token.$inject = ['$rootScope','$localStorage'];

 function token($rootScope, $localStorage) {

  'ngInject';

  const self = this;
  self.token;

  var service = {
   set: set,
   get: get,
   clear: clear
  };

  return service;

  function set(token, callback) {
    self.token = $localStorage.token =  token.token;
    $rootScope.$broadcast('login');
    callback(true);
  }

  function get(callback){
   if(self.token) {
    callback(self.token);
   } else if($localStorage.token) {
    callback($localStorage.token);
   } else {
    callback(null);
   }
  }

  function clear() {
   self.token = null;
   delete $localStorage.token;
  }

 }

})();


(function() {
 //'use-strict';

 angular
 .module('vdb-auth')
 .factory('user', user);

 user.$inject = [ '$localStorage', '$rootScope', '$resource', 'token', 'indices', 'services'];

 function user( $localStorage, $rootScope, $resource, token, indices, services) {

   'ngInject';

   const s = this;

   s.token = token;
   s.indices = indices;
   s.services = services;

   s.url = '/api/user/:verb';

    s.actions = {
    'login': {
     'method': 'POST',
     'params': {'verb' : 'login'}
    },
    'register': {
     'method': 'POST',
     'params': {'verb' : 'register'}
    },
    'user': {
     'method': 'POST',
     'params': {'verb' : 'user'}
    },
    'abacs': {
     'method': 'POST',
     'params': {'verb' : 'abacs'}
    }
   };

   s.query = $resource(s.url,s.paramDefaults || {} ,s. actions,s.options || {});

   var service = {

    login: login,
    register: register,
    get: get,

    //helper functiuons
    // setToken: setToken, //uses s.token
    // getToken: getToken,
    checkAuth: checkAuth,

    getPerms: getPerms, //uses s.abacs

    setMyService:setMyService, //uses s.services
    getMyService:getMyService,

    setMyServices: setMyServices,  //uses s.services
    getMyServices: getMyServices,

    setMyIndices: setMyIndices, //uses s.indices
    getMyIndices:getMyIndices,
    getMyIndex: getMyIndex, //uses s.indices
    setMyIndex: setMyIndex,

    logout:logout
   };

   return service;

   function login(postData,callback) {

    s.query.login(postData,function(response) {
     if(response.authenticated && response.token) {
      s.token.set(response.token, function(token) {
       callback(token);
      });
     }
     callback(false);
    });
   }

   function register(postData,callback) {
    s.query.register(postData,function(response) {
    });
   }

   function getPerms(callback) {
    var response = {};
    s.token.get(function(t) {
     if(t) {
      s.query.abacs(function(r) {
       s.services.setAll(r.abacs,function(s) {
        response.services = s;
       });
       s.indices.setAll(r.abacs, function(i) {
        response.indices = i;
       })
       callback(response);
      });
     }
    });
   }

   function get(callback) {
    s.token.get(function(t) {
     if(t) {
      s.query.user(function(r) {
       callback(r);
      });
     }
    });
   }

   // function setToken(token, callback) {
   //  s.token.set(token, function(response) {
   //   callback(response);
   //  });
   // }

   // function getToken(callback) {
   //  s.token.get(function(response) {
   //   callback(response);
   //  });
   // }

   function checkAuth() {
   }

   // function getMyId(callback) {
   //  s.id.getMyId(function(response) {
   //   callback(response);
   //  });
   // }

   function setMyIndices(abacs, callback) {
    s.indices.setAll(abacs, function(response) {
     callback(response);
    });
   }

   function getMyIndices(callback) {
    s.indices.getAll(function(response) {
     callback(response);
    });
   }

   function setMyIndex(index) {
    s.indices.set(index);
   }

   function getMyIndex(callback) {
    s.indices.get(function(response) {
     callback(response);
    });
   }

   function setMyService(index, callback) {
    s.services.set(index, function(response) {
     callback(response);
    });
   }

   function getMyService(callback) {
    s.services.get(function(r) {
     callback(r);
    });
   }

   function setMyServices(abac, callback) {
    s.services.setAll(abac, function(response) {
     callback(response);
    });
   }

   function getMyServices(callback) {
    s.services.getAll(function(response) {
     callback(response);
    });
   }

   function logout(callback) {
    $rootScope.$broadcast('logout');
    services.clear();
    indices.clear();
    token.clear();
    callback(true);
   }
  }
 })();

angular.module('vdb-d3')
.factory('d3v2Service', function($document, $q, $rootScope){

  var d = $q.defer();
  function onScriptLoad() {
   // Load client in the browser
   $rootScope.$apply(function() { d.resolve(window.d3); });
  }

 // Create a script tag with d3 as the source
 // and call our onScriptLoad callback when it
 // has been loaded

  var scriptTag = $document[0].createElement('script');
  scriptTag.type = 'text/javascript';
  scriptTag.async = true;
  scriptTag.src = 'https://d3js.org/d3.v2.min.js';
  scriptTag.onreadystatechange = function () {
   if (this.readyState == 'complete') onScriptLoad();
  };

  scriptTag.onload = onScriptLoad;

  var s = $document[0].getElementsByTagName('body')[0];
  s.appendChild(scriptTag);

 return {
  d3: function() {
   return d.promise;
  }
 };
});

angular.module('vdb-d3')
.factory('d3v3Service', function($document, $q, $rootScope){

  var d = $q.defer();
  function onScriptLoad() {
   // Load client in the browser
   $rootScope.$apply(function() { d.resolve(window.d3); });
  }

  var scriptTag = $document[0].createElement('script');
  scriptTag.type = 'text/javascript';
  scriptTag.async = true;
  scriptTag.src = 'https://d3js.org/d3.v3.min.js';
  scriptTag.onreadystatechange = function () {
   if (this.readyState == 'complete') onScriptLoad();
  };

  scriptTag.onload = onScriptLoad;

  var s = $document[0].getElementsByTagName('body')[0];
  s.appendChild(scriptTag);

 return {
  d3: function() {
   return d.promise;
  }
 };
});

angular.module('vdb-d3')
.factory('d3v4Service', function($document, $q, $rootScope){

  var d = $q.defer();
  function onScriptLoad() {
   // Load client in the browser
   $rootScope.$apply(function() { d.resolve(window.d3); });
  }

 // Create a script tag with d3 as the source
 // and call our onScriptLoad callback when it
 // has been loaded

  var scriptTag = $document[0].createElement('script');
  scriptTag.type = 'text/javascript';
  scriptTag.async = true;
  scriptTag.src = 'https://d3js.org/d3.v4.min.js';
  scriptTag.onreadystatechange = function () {
   if (this.readyState == 'complete') onScriptLoad();
  };

  scriptTag.onload = onScriptLoad;

  var s = $document[0].getElementsByTagName('body')[0];
  s.appendChild(scriptTag);

 return {
  d3: function() {
   return d.promise;
  }
 };
});

(function() {
 // 'use strict';

 angular
 .module('vdb-flot')
 .factory('flot', flot);

 flot.$inject = ['magnitudeFilter','$filter','colors'];

 function flot(magnitudeFilter,$filter,colors) {

  'ngInject';

  const self = this;

  var service = {
   options: {
    legend: {
     show:false
    },
    grid: {
     show: true,
     clickable: true,
     hoverable:true,
     color: colors.white,
     borderWidth: 0,
     borderColor: colors.white
    },
    series: {
     shadowSize:0,
     points: {
      show: false
     }
    },
    xaxes: [
     {
      show: true,
      tickFormatter: function (val, axis) {
       return $filter('date')(val, 'shortTime');
      },
     }
    ],
    yaxes: [
     {
      position: "left",
      tickFormatter: function (val, axis) {
       return magnitudeFilter(val);
      },
      tickDecimals: 0,
     },
     {
      position: "right",
      tickFormatter: function (val, axis) {
       return magnitudeFilter(val);
      },
      // axisLabel: "# of bad events",
      tickDecimals: 0,
     },
     {
      position: "right",
      tickFormatter: function (val, axis) {
       return magnitudeFilter(val);
      },
      // axisLabel: "# of bad events",
      tickDecimals: 0,
     },
     {
      position: "left",
      tickFormatter: function (val, axis) {
       return magnitudeFilter(val);
      },
      tickDecimals: 0,
     },
    ],


   },
  };

  return service;
 }


})();

/*
*/
Array.prototype.clean = function(deleteValue) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == deleteValue) {
      this.splice(i, 1);
      i--;
    }
  }
  return this;
};

angular.module('vdb-main')
.constant(
 // 'color_hash', ["#00a0e9", "#5fb611","#fff100","#f39800","#e60033","#ee82ee","#4b0082",'#f5f5f5','#dcdcdc']
 'color_hash', ["#00a0e9", "#5fb611","#fff100","#f39800","#e60033"]
);

angular.module('vdb-main')
.constant(
 'category20a',
 function() {
  return [
   "#00a0e9", "#20acec","#40b8ee","#60c4f1",
   "#e60033","#e9204d","#ec4066","#ef6080",
   "#f39800","#f4a520","#f6b240","#f7bf60",
   "#fff100","#fff320","#fff440","#fff660",
   "#5fb611","#73bf3f","#87c84d","#9bd16a"
  ];
 });

 angular.module('vdb-main')
 .constant(
  'RdYlGn',
  function() {
   return [
    "rgb(230, 0, 13)",
    "rgb(230, 26, 0)",
    "rgb(230, 64, 0)",
    "rgb(230, 102, 0)",
    "rgb(230, 141, 0)",
    "rgb(230, 217, 0)",
    "rgb(204, 230, 0)",
    "rgb(166, 230, 0)",
    "rgb(128, 230, 0)",
    "rgb(89, 230, 0)"
   ];
  });

 angular.module('vdb-main')
 .constant(
  'category8a',
  function() {
   return [
    "#e60033","#e9204d",
    "#f39800","#f4a520",
    "#fff100","#fff320",
    "#5fb611","#73bf3f"
   ];
  });

 angular.module('vdb-main')
 .constant(
  "colors", {
   "red" : "#e60033",
   "orange" : "#f39800",
   "green" : "#5fb611",
   "blue" : "#00a0e9",
   "indigo" : "#00628e",
   "violet" : "#4b0082",
   "black" : "#252525",
   "gray" : "#dcdcdc",
   "white": "#f5f5f5"
  }
 );

 angular.module('vdb-main')
 .constant(
  "color_kv_array", [
   {"red" : "#e60033"},
   {"orange" : "#f39800"},
   {"green" : "#5fb611"},
   {"blue" : "#00a0e9"},
   {"indigo" : "#00628e"},
   {"violet" : "#4b0082"},
   {"black" : "#252525"},
   {"gray" : "#dcdcdc"},
   {"white": "#f5f5f5"}
  ]
 );

(function() {
 //'use-strict';
 /**
  * @ngdoc controller
  * @name main
  * @module vdb
  * @restrict EA
  * @description
  *
  * The main app controller description.
  *
  */
 angular
 .module('vdb-main')
 .controller('main', main);

 main.$inject = ['$scope'];

 function main($scope) {
  var vm = this;
 }

})();

(function() {
 //'use-strict';
 /**
  * @ngdoc run
  * @name run
  * @module vdb
  * @restrict EA
  * @description
  *
  *
  *
  */
 angular
 .module('vdb-main')
 .run(runBlock);

 runBlock.$inject = ['$rootScope'];

 function runBlock($rootScope) {
   $rootScope.dir = ajaxInfo.template_directory;
   $rootScope.is_admin = ajaxInfo.is_admin;
 }

})();

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

(function() {
 //'use strict';

 angular
 .module('vdb-search')
 .factory('search', search);

 search.$inject = ['$rootScope','$localStorage','user'];

 function search($rootScope,$localStorage,user) {

  const self = this;

  self.user = user;

  self.searchParams = {
   'index' : function() {
     return user.getMyIndex();
    },
   'size' : 0,
   'from': "now-28800",
   'to': "now",
   'interval': 240
  };

  self.refresh = {
   key:'30',
   value:'Every 30s',
   options: {
    '0':'Off',
    // '5': 'Every 5s',
    '30':'Every 30s',
    '60':'Every 1m',
    '300':'Every 5m',
    '1800':'Every 30m',
    '3600':'Every 1h',
    '7200':'Every 2h'
   }
  };

  self.timeWindow = {
   key: '28800',
   value: 'Last 8h',
   options: {
    300:'Last 5m',
    14400:'Last 4h',
    28800:'Last 8h',
    86400:'Last 24h',
    172800:'Last 2d',
    604800:'Last 7d',
   }
  };

  var service = {
   getSearchParams: getSearchParams,
   getRefresh:getRefresh,
   getRefreshKey: getRefreshKey,
   getTimeWindow:getTimeWindow,
   setTimeWindow: setTimeWindow,
   options: {"cancellable": true}
  };

  return service;

  function getSearchParams(callback) {
   self.user.getMyIndex(function(response) {
    self.searchParams.index = response;
    callback (self.searchParams);
   });

  }

  function setTimeWindow(start, end, callback) {
   self.searchParams.to = start;
   self.searchParams.from = "now-" + end;
   self.searchParams.interval = end / 120;
   self.timeWindow.key = end + "s";
   self.timeWindow.value = self.timeWindow.options[end];
   $rootScope.$broadcast('reset');
   callback(true);
  }

  function getRefresh(callback) {
   callback(self.refresh);
  }

  function getRefreshKey() {
   return self.refresh.key * 1000;
  }

  function getTimeWindow(callback) {
   callback(self.timeWindow);
  }
 }

})();

(function() {
  //'use-strict';

  angular
  .module('vdb-wp')
  .factory('categories', categories);

  categories.$inject = [ '$rootScope', '$resource'];

  function categories( $rootScope, $resource) {

    'ngInject';

    const s = this;

    s.url = ajaxInfo.api_url + 'categories/';

    s.actions = {
      'categories': {
        'method': 'GET',
        'isArray': true,
        // 'params': { 'verb': 'categories'},
      }
    };

    s.query = $resource(s.url,s.paramDefaults || {} ,s.actions,s.options || {});

    var service = {
      get: get
    };

    return service;

    function get(callback) {
      s.query.categories(function(r) {
        callback(r);
      });
    }
  }
  })();

(function() {
  //'use-strict';

  angular
  .module('vdb-wp')
  .factory('pages', pages);

  pages.$inject = [ '$rootScope', '$resource'];

  function pages( $rootScope, $resource) {

    'ngInject';

    const s = this;

    // s.url = ajaxInfo.api_url + 'pages?orderby=menu_order&order=asc';
    s.url = ajaxInfo.api_url + 'pages';

    s.actions = {
      'pages': {
        'method': 'GET',
        'isArray': true,
        // 'params': { 'orderby': 'menu_order', 'order': 'asc'},
      }
    };

    s.query = $resource(s.url,s.paramDefaults || {} ,s.actions,s.options || {});

    var service = {
      get: get,
      is_parent: is_parent,
      has_children: has_children,
    };

    return service;


    function get(params, callback) {
      var re=/(http[s]?:\/\/)?([^\/\s]+\/)(.*)/;
      s.actions.pages.params = params;
      s.query.pages(function(r) {
        r.forEach(function(e) {
          var path = re.exec(e.link);
          path[3] = path[3].replace(/\/$/, "");
          e.route = path[3].replace(/\//,'.');
          r.forEach(function(p) {
            p.parent == e.id ? e.has_children = true: null;
          });
        });
        callback(r);
      });
    }

    function is_parent(e) {
      return e.parent ? false: true;
    }

    function has_children(parent,pages) {
      //This function simply returns true or false if the parent has a child
      pages.forEach(function(page) {
        console.log(page.parent, parent.id);
        if(page.parent === parent.id) {
          return true;
        }
      });
      return false;
    }

  }
  })();

(function() {
  //'use-strict';

  angular
  .module('vdb-wp')
  .factory('posts', posts);

  posts.$inject = [ '$rootScope', '$resource','categories'];

  function posts( $rootScope, $resource,categories) {

    'ngInject';

    const s = this;

    s.url = ajaxInfo.api_url + 'posts';

    s.actions = {
      'posts': {
        'method': 'GET',
        'isArray': true,
        'params': { '_embed': 'true'},
      },
      'projects': {
        'method': 'GET',
        'isArray': true,
        'params': { '_embed': 'true'},
      },

    };

    s.query = $resource(s.url,s.paramDefaults || {} ,s.actions,s.options || {});

    var service = {
      get: get,
      projects:projects
    };

    return service;

    function get(params,callback) {
      s.actions.posts.params = params;
      s.query.posts(function(r) {
        console.log(r);
        callback(r);
      });
    }
    function projects(callback) {
      var project_id;

      categories.get(function(c) {
        c.forEach(function(e) {
          e.name == 'Projects' ? s.actions.projects.params.categories = e.id: null;
        })
        s.query.projects(function(r) {
          callback(r);
        });
      });

    }


  }
  })();


function d3Bars($window, $timeout, d3v4Service) {
 return {
  restrict: 'AE',
  link: function(scope, element, attrs) {
   d3v4Service.d3().then(function(d3) {

    var margin = parseInt(attrs.margin) || 20,
    barHeight = parseInt(attrs.barHeight) || 20,
    barPadding = parseInt(attrs.barPadding) || 5;

    var svg = d3.select(element[0])
    .append("svg")
    .style('width', '100%');

    // Browser onresize event
    window.onresize = function() {
     scope.$apply();
    };

    // hard-code data
    scope.data = [
     {name: "Greg", score: 98},
     {name: "Ari", score: 96},
     {name: 'Q', score: 75},
     {name: "Loser", score: 48}
    ];

    // Watch for resize event
    scope.$watch(function() {
     return angular.element($window)[0].innerWidth;
    }, function() {
     scope.render(scope.data);
    });

    scope.render = function(data) {
     // remove all previous items before render
     svg.selectAll('*').remove();

     // If we don't pass any data, return out of the element
     if (!data) return;

     // setup variables
     var width = d3.select(element[0]).node().offsetWidth - margin,
     // calculate the height
     height = scope.data.length * (barHeight + barPadding),
     // Use the category20() scale function for multicolor support
     color = d3.scale.category20(),
     // our xScale
     xScale = d3.scale.linear()
     .domain([0, d3.max(data, function(d) {
      return d.score;
     })])
     .range([0, width]);

     // set the height based on the calculations above
     svg.attr('height', height);

     //create the rectangles for the bar chart
     svg.selectAll('rect')
     .data(data).enter()
     .append('rect')
     .attr('height', barHeight)
     .attr('width', 0)
     .attr('x', Math.round(margin/2))
     .attr('y', function(d,i) {
      return i * (barHeight + barPadding);
     })
     .attr('fill', function(d) { return color(d.score); })
     .transition()
     .duration(1000)
     .attr('width', function(d) {
      return xScale(d.score);
     });
     svg.selectAll('text')
     .data(data)
     .enter()
     .append('text')
     .attr('fill', '#fff')
     .attr('y', function(d,i) {
      return i * (barHeight + barPadding) + 15;
     })
     .attr('x', 15)
     .text(function(d) {
      return d.name + " (scored: " + d.score + ")";
     });
    };
   });
  },
 };
}

angular
.module('vdb-d3')
.directive('d3Bars', d3Bars);

(function() {
 'use strict';

 /**
 * @ngdoc directive
 * @name d3Aster
 * @module vdb-d3
 * @restrict EA
 * @description
 *
 * The `d3Aster` directive description.
 *
 */
 angular
 .module('vdb-d3')
 .directive('d3Aster', d3Aster);

 function d3Aster(d3v4Service) {
  const directive = {
   restrict: 'EA',
   scope: {
    csv: '=?',
    demo: '=?'
   },
   link: link,
   controller: Controller,
   controllerAs: 'self',
   // bindToController: true
  };

  return directive;

  ///////////

  function link(scope, iElement, iAttrs) {


  }


  Controller.$inject = ['$scope','d3v4Service','$element'];

  function Controller($scope ,d3v4Service,$element) {
   'ngInject';
   const s = this;

   activate();

   ///////////

   function activate() {
    d3v4Service.d3().then(function(d3) {

     var width = $element.parent()[0].clientWidth ,
     height = $element.parent()[0].clientHeight ,
     radius = Math.min(width, height) / 2,
     innerRadius = 0.3 * radius;

     var pie = d3.pie()
     .sort(null)
     .value(function(d) { return d.width; });

     var color = d3.scaleQuantize()
     // .domain([-.05, .05])
     .domain([0,100])
     .range(d3.range(11).map(function(d) {
      return "q" + d + "-11";
     }));

     var arc = d3.arc()
     .innerRadius(innerRadius)
     .outerRadius(function (d) {
      return (radius - innerRadius) * (d.data.score / 100.0) + innerRadius;
     });

     var outlineArc = d3.arc()
     .innerRadius(innerRadius)
     .outerRadius(radius);



     // var tip = d3.tip()
     // .attr('class', 'd3-tip')
     // .offset([0, 0])
     // .html(function(d) {
     //  return d.data.label + ": <span style='color:orangered'>" + d.data.score + "</span>";
     // });

     if($scope.demo) {
      d3.csv("data/aster_data.csv", function(error, csv) {
       if (error) throw error;
       s.render(csv);
      });
     } else {
      $scope.$watch('csv', function() {
       if($scope.csv) {
        s.render($scope.csv);
       }
      });
     }

     s.render = function(csv) {

      var svg = d3.select("d3-aster").append("svg")
      .attr("class", "aster RdYlGn")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");


       csv.forEach(function(d) {
        d.weight = +d.weight;
        d.score  = +d.score;
        d.width  = +d.weight;
        d.label  =  d.label;
       });
       // for (var i = 0; i < data.score; i++) { console.log(data[i].id) }

       var path = svg.selectAll(".solidArc")
       .data(pie(csv))
       .enter().append("path")
       .attr("class", function(d) { return "solidArc " + color(d.data.score); })
       .attr("stroke", function(d) {return color(d.data.score)})
       .attr("d", arc);

       // .on('mouseover', tip.show)
       // .on('mouseout', tip.hide);

       var outerPath = svg.selectAll(".outlineArc")
       .data(pie(csv))
       .enter().append("path")
       .attr("fill", "none")
       .attr("stroke", "green")
       .attr("class", "outlineArc")
       .attr("d", outlineArc);


       // calculate the weighted mean score
       var score =
       csv.reduce(function(a, b) {
        //console.log('a:' + a + ', b.score: ' + b.score + ', b.weight: ' + b.weight);
        return a + (b.score * b.weight);
       }, 0) /
       csv.reduce(function(a, b) {
        return a + b.weight;
       }, 0);

       svg.append("svg:text")
       .attr("class", "aster-score")
       .attr("dy", ".35em")
       .attr("text-anchor", "middle") // text-align: right
       .text(Math.round(score));
      //
     }


    });
   }//end activate
  }
 }
})();

(function() {
 'use strict';

 /**
 * @ngdoc directive
 * @name d3Calendar
 * @module vdb-d3
 * @restrict EA
 * @description
 *
 * The `d3Calendar` directive description.
 *
 */
 angular
 .module('vdb-d3')
 .directive('d3Calendar', d3Calendar);

 function d3Calendar($window, $timeout, d3v3Service) {
  const directive = {
   restrict: 'EA',
   // templateUrl: '',
   scope: {
    csv: '=?',
    demo: '=?'
   },
   link: link,
   controller: Controller,
   // controllerAs: 'self',
  };

  return directive;

  ///////////

  function link(scope, el, attr, ctrl) {
   window.onresize = function() {
    scope.$apply();
   };
  }

  Controller.$inject = ['$scope','d3v3Service','$element'];

  function Controller($scope ,d3v3Service,$element) {
   'ngInject';
   const s = this;

   activate();

   function activate() {
    d3v3Service.d3().then(function(d3) {

     var width = $element.parent()[0].clientWidth,
     height= $element.parent()[0].clientHeight,
     cellSize = Math.min(width / 52, height/7);

     var percent = d3.format(".1%"),
     format = d3.time.format("%Y-%m-%d");

     var color = d3.scale.quantize()
     // .domain([-.05, .05])
     .domain([0,1])
     .range(d3.range(11).map(function(d) {
      return "q" + d + "-11";
     }));

     if($scope.demo) {
      d3.csv("data/dji.csv", function(error, csv) {
       if (error) throw error;
       s.render(csv);
      });
     } else {
      $scope.$watch('csv', function() {
       if($scope.csv) {
        s.render($scope.csv);
       }
      });
     }

     s.render = function(csv) {

      var svg = d3.select("d3-calendar").selectAll("svg")
      .data(d3.range(2017, 2018))
      .enter().append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("class", "RdYlGn")
      .append("g");

      var svg = d3.select("d3-calendar").selectAll("svg").selectAll("g");

      // svg.append("text")
      // .attr("transform", "translate(-6," + cellSize * 3.5 + ")rotate(-90)")
      // .style("text-anchor", "middle")
      // .text(function(d) { return d; });

      var rect = svg.selectAll(".day")
      .data(function(d) { return d3.time.days(new Date(d, 0, 1), new Date(d + 1, 0, 1)); })
      .enter().append("rect")
      .attr("class", "day")
      .attr("width", cellSize)
      .attr("height", cellSize)
      .attr("x", function(d) { return d3.time.weekOfYear(d) * cellSize; })
      .attr("y", function(d) { return d.getDay() * cellSize; })
      .datum(format);

      rect.append("title")
      .text(function(d) { return d; });

      svg.selectAll(".month")
      .data(function(d) { return d3.time.months(new Date(d, 0, 1), new Date(d + 1, 0, 1)); })
      .enter().append("path")
      .attr("class", "month")
      .attr("d", monthPath);

      var data = d3.nest()
      .key(function(d) { return d.Date; })
      .rollup(function(d) { return d[0].Recieved / d[0].Expected; })
      .map(csv);

      rect.filter(function(d) { return d in data; })
      .attr("class", function(d) { return color(data[d]); })
      .select("title")
      .text(function(d) { return d + ": " + percent(data[d]); });
     }

     function monthPath(t0) {
      var t1 = new Date(t0.getFullYear(), t0.getMonth() + 1, 0),
      d0 = t0.getDay(), w0 = d3.time.weekOfYear(t0),
      d1 = t1.getDay(), w1 = d3.time.weekOfYear(t1);
      return "M" + (w0 + 1) * cellSize + "," + d0 * cellSize
      + "H" + w0 * cellSize + "V" + 7 * cellSize
      + "H" + w1 * cellSize + "V" + (d1 + 1) * cellSize
      + "H" + (w1 + 1) * cellSize + "V" + 0
      + "H" + (w0 + 1) * cellSize + "Z";
     }

    });
   }//end activate
  }

 }
})();

function d3Chord($window, $timeout, d3v4Service,colors) {
 return {
  restrict: 'AE',
  link: function(scope, element, attrs) {
   d3v4Service.d3().then(function(d3) {

    var matrix = [
     [11975,  5871, 8916, 2868],
     [ 1951, 10048, 2060, 6171],
     [ 8010, 16145, 8090, 8045],
     [ 1013,   990,  940, 6907]
    ];

    var width = 420,
    height = 420;

    var svg = d3.select("d3-chord").append("svg")
     .attr("width",width)
     .attr("height", height);

    var outerRadius = Math.min(width, height) * 0.5 - 40,
    innerRadius = outerRadius - 30;

    var formatValue = d3.formatPrefix(",.0", 1e3);

    var chord = d3.chord()
    .padAngle(0.05)
    .sortSubgroups(d3.descending);

    var arc = d3.arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius);

    var ribbon = d3.ribbon()
    .radius(innerRadius);

    var color = d3.scaleOrdinal()
    .domain(d3.range(4))
    .range(colors);

    var g = svg.append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
    .datum(chord(matrix));

    var group = g.append("g")
    .attr("class", "groups")
    .selectAll("g")
    .data(function(chords) {
     return chords.groups;
    })
    .enter().append("g");

    group.append("path")
    .style("fill", function(d) {
     return color(d.index);
     })
    .style("stroke", function(d) {
     return d3.rgb(color(d.index)).darker();
    })
    .attr("d", arc);

    var groupTick = group.selectAll(".group-tick")
    .data(function(d) {
     return groupTicks(d, 1e3);
    })
    .enter().append("g")
    .attr("class", "group-tick")
    .attr("transform", function(d) {
     return "rotate(" + (d.angle * 180 / Math.PI - 90) + ") translate(" + outerRadius + ",0)";
    });

    groupTick.append("line")
    .attr("x2", 6);

    groupTick
    .filter(function(d) {
     return d.value % 5e3 === 0;
    })
    .append("text")
    .attr("x", 8)
    .attr("dy", ".35em")
    .attr("transform", function(d) {
     return d.angle > Math.PI ? "rotate(180) translate(-16)" : null;
    })
    .style("text-anchor", function(d) {
     return d.angle > Math.PI ? "end" : null;
    })
    .text(function(d) {
     return formatValue(d.value);
    });

    g.append("g")
    .attr("class", "ribbons")
    .selectAll("path")
    .data(function(chords) {
     return chords;
    })
    .enter().append("path")
    .attr("d", ribbon)
    .style("fill", function(d) {
     return color(d.target.index);
    })
    .style("stroke", function(d) {
     return d3.rgb(color(d.target.index)).darker();
    });

    // Returns an array of tick angles and values for a given group and step.
    function groupTicks(d, step) {
     var k = (d.endAngle - d.startAngle) / d.value;
     return d3.range(0, d.value, step).map(function(value) {
      return {value: value, angle: value * k + d.startAngle};
     });
    }
   });
  }
 }
}
angular
.module('vdb-d3')
.directive('d3Chord', d3Chord);

function d3CirclePack($window, $timeout, d3v4Service,colors) {
 return {
  restrict: 'AE',
  link: function(scope, element, attrs) {
   d3v4Service.d3().then(function(d3) {
    var svg = d3.select("svg").attr("class", "circle-pack"),
    diameter = +svg.attr("width"),
    g = svg.append("g").attr("transform", "translate(2,2)"),
    format = d3.format(",d");

    var pack = d3.pack()
    .size([diameter - 4, diameter - 4]);

    d3.json("/data/flare.json", function(error, root) {
     if (error) throw error;

     root = d3.hierarchy(root)
     .sum(function(d) { return d.size; })
     .sort(function(a, b) { return b.value - a.value; });

     var node = g.selectAll(".node")
     .data(pack(root).descendants())
     .enter().append("g")
     .attr("class", function(d) { return d.children ? "node" : "leaf node"; })
     .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

     node.append("title")
     .text(function(d) { return d.data.name + "\n" + format(d.value); });

     node.append("circle")
     .attr("r", function(d) { return d.r; });

     node.filter(function(d) { return !d.children; }).append("text")
     .attr("dy", "0.3em")
     .text(function(d) { return d.data.name.substring(0, d.r / 3); });
    });
   });

  }
 }
}
angular
.module('vdb-d3')
.directive('d3CirclePack', d3CirclePack);

angular.module('vdb-d3')
.factory('d3circosService', function($document, $q, $rootScope){

  var d = $q.defer();
  function onScriptLoad() {
   // Load client in the browser
   $rootScope.$apply(function() { d.resolve(window.d3); });
  }

  var scriptTag = $document[0].createElement('script');
  scriptTag.type = 'text/javascript';
  scriptTag.async = true;
  scriptTag.src = 'circosJS/dist/circosJS.js';
  scriptTag.onreadystatechange = function () {
   if (this.readyState == 'complete') onScriptLoad();
  };

  scriptTag.onload = onScriptLoad;

  var s = $document[0].getElementsByTagName('body')[0];
  s.appendChild(scriptTag);

 return {
  cs: function() {
   return d.promise;
  }
 };
});

function d3Circos($window, $timeout, d3v3Service,d3circosService) {
 return {
  restrict: 'AE',
  link: function(scope, element, attrs) {
   d3v3Service.d3().then(function(d3) {
    d3circosService.cs().then(function(cs) {

     var layout_data = [
      { "len": 31, "color": "#8dd3c7", "label": "January", "id": "january" },
      { "len": 28, "color": "#ffffb3", "label": "February", "id": "february" },
      { "len": 31, "color": "#bebada", "label": "March", "id": "march" },
      { "len": 30, "color": "#fb8072", "label": "April", "id": "april" },
      { "len": 31, "color": "#80b1d3", "label": "May", "id": "may" },
      { "len": 30, "color": "#fdb462", "label": "June", "id": "june" },
      { "len": 31, "color": "#b3de69", "label": "July", "id": "july" },
      { "len": 31, "color": "#fccde5", "label": "August", "id": "august" },
      { "len": 30, "color": "#d9d9d9", "label": "September", "id": "september" },
      { "len": 31, "color": "#bc80bd", "label": "October", "id": "october" },
      { "len": 30, "color": "#ccebc5", "label": "November", "id": "november" },
      { "len": 31, "color": "#ffed6f", "label": "December", "id": "december" }
     ];

     var heatmap = [
      ['january',0,1,1368001],
      ['january',1,2,1458583],
      ['january',2,3,1481633],
      ['january',3,4,1408424],
      ['january',4,5,1400597],
      ['january',5,6,1548933],
      ['january',6,7,1537059],
      ['january',7,8,1517383],
      ['january',8,9,1544359],
      ['january',9,10,1580460],
      ['january',10,11,1440710],
      ['january',11,12,1417824],
      ['january',12,13,1597834],
      ['january',13,14,1666670],
      ['january',14,15,1707785],
      ['january',15,16,1656905],
      ['january',16,17,1620539],
      ['january',17,18,1487228],
      ['january',18,19,1418230],
      ['january',19,20,1666497],
      ['january',20,21,1739178],
      ['january',21,22,1755254],
      ['january',22,23,1732520],
      ['january',23,24,1702975],
      ['january',24,25,1546438],
      ['january',25,26,1454228],
      ['january',26,27,1684766],
      ['january',27,28,1759669],
      ['january',28,29,1764844],
      ['january',29,30,1737754],
      ['january',30,31,1749857],
      ['february',0,1,1577419],
      ['february',1,2,1509311],
      ['february',2,3,1688266],
      ['february',3,4,1690517],
      ['february',4,5,1719390],
      ['february',5,6,1693426],
      ['february',6,7,1613806],
      ['february',7,8,1521449],
      ['february',8,9,1473617],
      ['february',9,10,1632787],
      ['february',10,11,1698088],
      ['february',11,12,1702137],
      ['february',12,13,1690878],
      ['february',13,14,1661660],
      ['february',14,15,1445139],
      ['february',15,16,1392075],
      ['february',16,17,1565855],
      ['february',17,18,1622609],
      ['february',18,19,1593628],
      ['february',19,20,1564282],
      ['february',20,21,1569010],
      ['february',21,22,1458216],
      ['february',22,23,1338981],
      ['february',23,24,1495727],
      ['february',24,25,1554400],
      ['february',25,26,1574841],
      ['february',26,27,1643072],
      ['february',27,28,1644590],
      ['march',0,1,1500834],
      ['march',1,2,1424820],
      ['march',2,3,1607011],
      ['march',3,4,1615301],
      ['march',4,5,1559021],
      ['march',5,6,1547753],
      ['march',6,7,1508006],
      ['march',7,8,1309583],
      ['march',8,9,1189917],
      ['march',9,10,1365881],
      ['march',10,11,1403679],
      ['march',11,12,1403001],
      ['march',12,13,1397280],
      ['march',13,14,1367524],
      ['march',14,15,1251964],
      ['march',15,16,1159217],
      ['march',16,17,1334292],
      ['march',17,18,1391104],
      ['march',18,19,1366559],
      ['march',19,20,1342872],
      ['march',20,21,1327773],
      ['march',21,22,1268340],
      ['march',22,23,1276517],
      ['march',23,24,1467731],
      ['march',24,25,1503009],
      ['march',25,26,1496469],
      ['march',26,27,1500094],
      ['march',27,28,1450254],
      ['march',28,29,1240603],
      ['march',29,30,1086657],
      ['march',30,31,1282324],
      ['april',0,1,1283014],
      ['april',1,2,1270569],
      ['april',2,3,1293570],
      ['april',3,4,1293439],
      ['april',4,5,1150461],
      ['april',5,6,1050257],
      ['april',6,7,1209470],
      ['april',7,8,1260725],
      ['april',8,9,1285887],
      ['april',9,10,1266011],
      ['april',10,11,1234722],
      ['april',11,12,1100005],
      ['april',12,13,1034963],
      ['april',13,14,1221402],
      ['april',14,15,1265036],
      ['april',15,16,1279159],
      ['april',16,17,1266882],
      ['april',17,18,1241239],
      ['april',18,19,1153081],
      ['april',19,20,1082812],
      ['april',20,21,1084284],
      ['april',21,22,1245400],
      ['april',22,23,1248887],
      ['april',23,24,1235617],
      ['april',24,25,1229560],
      ['april',25,26,1117336],
      ['april',26,27,1074233],
      ['april',27,28,1249024],
      ['april',28,29,1273337],
      ['april',29,30,1246730],
      ['may',0,1,1036144],
      ['may',1,2,1156135],
      ['may',2,3,1106555],
      ['may',3,4,1041413],
      ['may',4,5,1182786],
      ['may',5,6,1192434],
      ['may',6,7,1193624],
      ['may',7,8,1047831],
      ['may',8,9,1106669],
      ['may',9,10,1043170],
      ['may',10,11,1000001],
      ['may',11,12,1205405],
      ['may',12,13,1247394],
      ['may',13,14,1238560],
      ['may',14,15,1223267],
      ['may',15,16,1199465],
      ['may',16,17,1040418],
      ['may',17,18,952650],
      ['may',18,19,1126219],
      ['may',19,20,1155800],
      ['may',20,21,1173902],
      ['may',21,22,1167218],
      ['may',22,23,1160702],
      ['may',23,24,1034886],
      ['may',24,25,966509],
      ['may',25,26,1156691],
      ['may',26,27,1194054],
      ['may',27,28,1190877],
      ['may',28,29,1016149],
      ['may',29,30,1068529],
      ['may',30,31,993302],
      ['june',0,1,935590],
      ['june',1,2,1119046],
      ['june',2,3,1150676],
      ['june',3,4,1169570],
      ['june',4,5,1162795],
      ['june',5,6,1147372],
      ['june',6,7,1004244],
      ['june',7,8,921713],
      ['june',8,9,968196],
      ['june',9,10,1140341],
      ['june',10,11,1152976],
      ['june',11,12,1165844],
      ['june',12,13,1154469],
      ['june',13,14,999352],
      ['june',14,15,917310],
      ['june',15,16,1106649],
      ['june',16,17,1141077],
      ['june',17,18,1143086],
      ['june',18,19,1149995],
      ['june',19,20,1141059],
      ['june',20,21,1008542],
      ['june',21,22,939065],
      ['june',22,23,1129289],
      ['june',23,24,1161838],
      ['june',24,25,1158130],
      ['june',25,26,1159204],
      ['june',26,27,1146093],
      ['june',27,28,1009897],
      ['june',28,29,928706],
      ['june',29,30,1103970],
      ['july',0,1,1143862],
      ['july',1,2,1150514],
      ['july',2,3,1167512],
      ['july',3,4,1150024],
      ['july',4,5,1008307],
      ['july',5,6,934687],
      ['july',6,7,1106666],
      ['july',7,8,1143473],
      ['july',8,9,1154196],
      ['july',9,10,1167145],
      ['july',10,11,1151100],
      ['july',11,12,1006581],
      ['july',12,13,930137],
      ['july',13,14,941594],
      ['july',14,15,1126558],
      ['july',15,16,1166553],
      ['july',16,17,1187503],
      ['july',17,18,1182767],
      ['july',18,19,1030447],
      ['july',19,20,934780],
      ['july',20,21,1107315],
      ['july',21,22,1147785],
      ['july',22,23,1161849],
      ['july',23,24,1169049],
      ['july',24,25,1131515],
      ['july',25,26,993075],
      ['july',26,27,925852],
      ['july',27,28,1077760],
      ['july',28,29,1095700],
      ['july',29,30,1098378],
      ['july',30,31,1096670],
      ['august',0,1,1071402],
      ['august',1,2,951503],
      ['august',2,3,878472],
      ['august',3,4,996356],
      ['august',4,5,1016188],
      ['august',5,6,1022237],
      ['august',6,7,1027197],
      ['august',7,8,1024299],
      ['august',8,9,922671],
      ['august',9,10,872742],
      ['august',10,11,974684],
      ['august',11,12,988100],
      ['august',12,13,988993],
      ['august',13,14,981883],
      ['august',14,15,893681],
      ['august',15,16,894506],
      ['august',16,17,858478],
      ['august',17,18,991784],
      ['august',18,19,1022889],
      ['august',19,20,1031167],
      ['august',20,21,1038878],
      ['august',21,22,1042880],
      ['august',22,23,951127],
      ['august',23,24,896613],
      ['august',24,25,1078972],
      ['august',25,26,1123401],
      ['august',26,27,1122117],
      ['august',27,28,1129891],
      ['august',28,29,1114953],
      ['august',29,30,986620],
      ['august',30,31,921040],
      ['september',0,1,1103673],
      ['september',1,2,1143909],
      ['september',2,3,1149438],
      ['september',3,4,1157452],
      ['september',4,5,1149054],
      ['september',5,6,1010272],
      ['september',6,7,942892],
      ['september',7,8,1135215],
      ['september',8,9,1163859],
      ['september',9,10,1165798],
      ['september',10,11,1163321],
      ['september',11,12,1142868],
      ['september',12,13,1007248],
      ['september',13,14,938456],
      ['september',14,15,1129580],
      ['september',15,16,1160361],
      ['september',16,17,1166669],
      ['september',17,18,1166135],
      ['september',18,19,1155657],
      ['september',19,20,1013339],
      ['september',20,21,939303],
      ['september',21,22,1115789],
      ['september',22,23,1155790],
      ['september',23,24,1175290],
      ['september',24,25,1171100],
      ['september',25,26,1156096],
      ['september',26,27,1016313],
      ['september',27,28,946015],
      ['september',28,29,1140783],
      ['september',29,30,1171328],
      ['october',0,1,1169047],
      ['october',1,2,1166792],
      ['october',2,3,1151218],
      ['october',3,4,1013653],
      ['october',4,5,961694],
      ['october',5,6,1173529],
      ['october',6,7,1208669],
      ['october',7,8,1218388],
      ['october',8,9,1203597],
      ['october',9,10,1185802],
      ['october',10,11,1047404],
      ['october',11,12,1002951],
      ['october',12,13,1176808],
      ['october',13,14,1209924],
      ['october',14,15,1220987],
      ['october',15,16,1220765],
      ['october',16,17,1193122],
      ['october',17,18,1042063],
      ['october',18,19,960302],
      ['october',19,20,1151448],
      ['october',20,21,1213130],
      ['october',21,22,1255712],
      ['october',22,23,1282461],
      ['october',23,24,1267047],
      ['october',24,25,1115921],
      ['october',25,26,1086010],
      ['october',26,27,1232889],
      ['october',27,28,1282237],
      ['october',28,29,1278848],
      ['october',29,30,1258570],
      ['october',30,31,1225435],
      ['november',0,1,1072746],
      ['november',1,2,1049955],
      ['november',2,3,1272203],
      ['november',3,4,1340860],
      ['november',4,5,1408998],
      ['november',5,6,1451479],
      ['november',6,7,1437583],
      ['november',7,8,1274988],
      ['november',8,9,1210274],
      ['november',9,10,1327675],
      ['november',10,11,1246598],
      ['november',11,12,1396790],
      ['november',12,13,1432484],
      ['november',13,14,1422153],
      ['november',14,15,1275193],
      ['november',15,16,1234596],
      ['november',16,17,1453194],
      ['november',17,18,1484727],
      ['november',18,19,1514655],
      ['november',19,20,1511929],
      ['november',20,21,1462551],
      ['november',21,22,1294247],
      ['november',22,23,1202440],
      ['november',23,24,1404219],
      ['november',24,25,1459282],
      ['november',25,26,1453893],
      ['november',26,27,1454444],
      ['november',27,28,1426951],
      ['november',28,29,1294661],
      ['november',29,30,1287777],
      ['december',0,1,1549272],
      ['december',1,2,1633784],
      ['december',2,3,1684781],
      ['december',3,4,1689624],
      ['december',4,5,1666695],
      ['december',5,6,1545527],
      ['december',6,7,1523315],
      ['december',7,8,1683824],
      ['december',8,9,1754569],
      ['december',9,10,1734975],
      ['december',10,11,1669997],
      ['december',11,12,1641086],
      ['december',12,13,1489854],
      ['december',13,14,1474692],
      ['december',14,15,1633309],
      ['december',15,16,1607862],
      ['december',16,17,1632516],
      ['december',17,18,1536016],
      ['december',18,19,1490975],
      ['december',19,20,1394406],
      ['december',20,21,1387549],
      ['december',21,22,1538557],
      ['december',22,23,1550730],
      ['december',23,24,1469007],
      ['december',24,25,1314160],
      ['december',25,26,1499708],
      ['december',26,27,1508048],
      ['december',27,28,1570757],
      ['december',28,29,1792749],
      ['december',29,30,1770200],
      ['december',30,31,1721354]
     ];

     var days_off = [
      ['january',0,1,2],
      ['january',1,2,0],
      ['january',2,3,0],
      ['january',3,4,1],
      ['january',4,5,1],
      ['january',5,6,0],
      ['january',6,7,0],
      ['january',7,8,0],
      ['january',8,9,0],
      ['january',9,10,0],
      ['january',10,11,1],
      ['january',11,12,1],
      ['january',12,13,0],
      ['january',13,14,0],
      ['january',14,15,0],
      ['january',15,16,0],
      ['january',16,17,0],
      ['january',17,18,1],
      ['january',18,19,1],
      ['january',19,20,0],
      ['january',20,21,0],
      ['january',21,22,0],
      ['january',22,23,0],
      ['january',23,24,0],
      ['january',24,25,1],
      ['january',25,26,1],
      ['january',26,27,0],
      ['january',27,28,0],
      ['january',28,29,0],
      ['january',29,30,0],
      ['january',30,31,0],
      ['february',0,1,1],
      ['february',1,2,1],
      ['february',2,3,0],
      ['february',3,4,0],
      ['february',4,5,0],
      ['february',5,6,0],
      ['february',6,7,0],
      ['february',7,8,1],
      ['february',8,9,1],
      ['february',9,10,0],
      ['february',10,11,0],
      ['february',11,12,0],
      ['february',12,13,0],
      ['february',13,14,0],
      ['february',14,15,1],
      ['february',15,16,1],
      ['february',16,17,0],
      ['february',17,18,0],
      ['february',18,19,0],
      ['february',19,20,0],
      ['february',20,21,0],
      ['february',21,22,1],
      ['february',22,23,1],
      ['february',23,24,0],
      ['february',24,25,0],
      ['february',25,26,0],
      ['february',26,27,0],
      ['february',27,28,0],
      ['march',0,1,1],
      ['march',1,2,1],
      ['march',2,3,0],
      ['march',3,4,0],
      ['march',4,5,0],
      ['march',5,6,0],
      ['march',6,7,0],
      ['march',7,8,1],
      ['march',8,9,1],
      ['march',9,10,0],
      ['march',10,11,0],
      ['march',11,12,0],
      ['march',12,13,0],
      ['march',13,14,0],
      ['march',14,15,1],
      ['march',15,16,1],
      ['march',16,17,0],
      ['march',17,18,0],
      ['march',18,19,0],
      ['march',19,20,0],
      ['march',20,21,0],
      ['march',21,22,1],
      ['march',22,23,1],
      ['march',23,24,0],
      ['march',24,25,0],
      ['march',25,26,0],
      ['march',26,27,0],
      ['march',27,28,0],
      ['march',28,29,1],
      ['march',29,30,1],
      ['march',30,31,0],
      ['april',0,1,0],
      ['april',1,2,0],
      ['april',2,3,0],
      ['april',3,4,0],
      ['april',4,5,1],
      ['april',5,6,1],
      ['april',6,7,0],
      ['april',7,8,0],
      ['april',8,9,0],
      ['april',9,10,0],
      ['april',10,11,0],
      ['april',11,12,1],
      ['april',12,13,1],
      ['april',13,14,0],
      ['april',14,15,0],
      ['april',15,16,0],
      ['april',16,17,0],
      ['april',17,18,0],
      ['april',18,19,1],
      ['april',19,20,1],
      ['april',20,21,2],
      ['april',21,22,0],
      ['april',22,23,0],
      ['april',23,24,0],
      ['april',24,25,0],
      ['april',25,26,1],
      ['april',26,27,1],
      ['april',27,28,0],
      ['april',28,29,0],
      ['april',29,30,0],
      ['may',0,1,2],
      ['may',1,2,0],
      ['may',2,3,1],
      ['may',3,4,1],
      ['may',4,5,0],
      ['may',5,6,0],
      ['may',6,7,0],
      ['may',7,8,2],
      ['may',8,9,0],
      ['may',9,10,1],
      ['may',10,11,1],
      ['may',11,12,0],
      ['may',12,13,0],
      ['may',13,14,0],
      ['may',14,15,0],
      ['may',15,16,0],
      ['may',16,17,1],
      ['may',17,18,1],
      ['may',18,19,0],
      ['may',19,20,0],
      ['may',20,21,0],
      ['may',21,22,0],
      ['may',22,23,0],
      ['may',23,24,1],
      ['may',24,25,1],
      ['may',25,26,0],
      ['may',26,27,0],
      ['may',27,28,0],
      ['may',28,29,2],
      ['may',29,30,0],
      ['may',30,31,1],
      ['june',0,1,1],
      ['june',1,2,0],
      ['june',2,3,0],
      ['june',3,4,0],
      ['june',4,5,0],
      ['june',5,6,0],
      ['june',6,7,1],
      ['june',7,8,1],
      ['june',8,9,2],
      ['june',9,10,0],
      ['june',10,11,0],
      ['june',11,12,0],
      ['june',12,13,0],
      ['june',13,14,1],
      ['june',14,15,1],
      ['june',15,16,0],
      ['june',16,17,0],
      ['june',17,18,0],
      ['june',18,19,0],
      ['june',19,20,0],
      ['june',20,21,1],
      ['june',21,22,1],
      ['june',22,23,0],
      ['june',23,24,0],
      ['june',24,25,0],
      ['june',25,26,0],
      ['june',26,27,0],
      ['june',27,28,1],
      ['june',28,29,1],
      ['june',29,30,0],
      ['july',0,1,0],
      ['july',1,2,0],
      ['july',2,3,0],
      ['july',3,4,0],
      ['july',4,5,1],
      ['july',5,6,1],
      ['july',6,7,0],
      ['july',7,8,0],
      ['july',8,9,0],
      ['july',9,10,0],
      ['july',10,11,0],
      ['july',11,12,1],
      ['july',12,13,1],
      ['july',13,14,2],
      ['july',14,15,0],
      ['july',15,16,0],
      ['july',16,17,0],
      ['july',17,18,0],
      ['july',18,19,1],
      ['july',19,20,1],
      ['july',20,21,0],
      ['july',21,22,0],
      ['july',22,23,0],
      ['july',23,24,0],
      ['july',24,25,0],
      ['july',25,26,1],
      ['july',26,27,1],
      ['july',27,28,0],
      ['july',28,29,0],
      ['july',29,30,0],
      ['july',30,31,0],
      ['august',0,1,0],
      ['august',1,2,1],
      ['august',2,3,1],
      ['august',3,4,0],
      ['august',4,5,0],
      ['august',5,6,0],
      ['august',6,7,0],
      ['august',7,8,0],
      ['august',8,9,1],
      ['august',9,10,1],
      ['august',10,11,0],
      ['august',11,12,0],
      ['august',12,13,0],
      ['august',13,14,0],
      ['august',14,15,2],
      ['august',15,16,1],
      ['august',16,17,1],
      ['august',17,18,0],
      ['august',18,19,0],
      ['august',19,20,0],
      ['august',20,21,0],
      ['august',21,22,0],
      ['august',22,23,1],
      ['august',23,24,1],
      ['august',24,25,0],
      ['august',25,26,0],
      ['august',26,27,0],
      ['august',27,28,0],
      ['august',28,29,0],
      ['august',29,30,1],
      ['august',30,31,1],
      ['september',0,1,0],
      ['september',1,2,0],
      ['september',2,3,0],
      ['september',3,4,0],
      ['september',4,5,0],
      ['september',5,6,1],
      ['september',6,7,1],
      ['september',7,8,0],
      ['september',8,9,0],
      ['september',9,10,0],
      ['september',10,11,0],
      ['september',11,12,0],
      ['september',12,13,1],
      ['september',13,14,1],
      ['september',14,15,0],
      ['september',15,16,0],
      ['september',16,17,0],
      ['september',17,18,0],
      ['september',18,19,0],
      ['september',19,20,1],
      ['september',20,21,1],
      ['september',21,22,0],
      ['september',22,23,0],
      ['september',23,24,0],
      ['september',24,25,0],
      ['september',25,26,0],
      ['september',26,27,1],
      ['september',27,28,1],
      ['september',28,29,0],
      ['september',29,30,0],
      ['october',0,1,0],
      ['october',1,2,0],
      ['october',2,3,0],
      ['october',3,4,1],
      ['october',4,5,1],
      ['october',5,6,0],
      ['october',6,7,0],
      ['october',7,8,0],
      ['october',8,9,0],
      ['october',9,10,0],
      ['october',10,11,1],
      ['october',11,12,1],
      ['october',12,13,0],
      ['october',13,14,0],
      ['october',14,15,0],
      ['october',15,16,0],
      ['october',16,17,0],
      ['october',17,18,1],
      ['october',18,19,1],
      ['october',19,20,0],
      ['october',20,21,0],
      ['october',21,22,0],
      ['october',22,23,0],
      ['october',23,24,0],
      ['october',24,25,1],
      ['october',25,26,1],
      ['october',26,27,0],
      ['october',27,28,0],
      ['october',28,29,0],
      ['october',29,30,0],
      ['october',30,31,0],
      ['november',0,1,1],
      ['november',1,2,1],
      ['november',2,3,0],
      ['november',3,4,0],
      ['november',4,5,0],
      ['november',5,6,0],
      ['november',6,7,0],
      ['november',7,8,1],
      ['november',8,9,1],
      ['november',9,10,0],
      ['november',10,11,2],
      ['november',11,12,0],
      ['november',12,13,0],
      ['november',13,14,0],
      ['november',14,15,1],
      ['november',15,16,1],
      ['november',16,17,0],
      ['november',17,18,0],
      ['november',18,19,0],
      ['november',19,20,0],
      ['november',20,21,0],
      ['november',21,22,1],
      ['november',22,23,1],
      ['november',23,24,0],
      ['november',24,25,0],
      ['november',25,26,0],
      ['november',26,27,0],
      ['november',27,28,0],
      ['november',28,29,1],
      ['november',29,30,1],
      ['december',0,1,0],
      ['december',1,2,0],
      ['december',2,3,0],
      ['december',3,4,0],
      ['december',4,5,0],
      ['december',5,6,1],
      ['december',6,7,1],
      ['december',7,8,0],
      ['december',8,9,0],
      ['december',9,10,0],
      ['december',10,11,0],
      ['december',11,12,0],
      ['december',12,13,1],
      ['december',13,14,1],
      ['december',14,15,0],
      ['december',15,16,0],
      ['december',16,17,0],
      ['december',17,18,0],
      ['december',18,19,0],
      ['december',19,20,1],
      ['december',20,21,1],
      ['december',21,22,0],
      ['december',22,23,0],
      ['december',23,24,0],
      ['december',24,25,2],
      ['december',25,26,0],
      ['december',26,27,1],
      ['december',27,28,1],
      ['december',28,29,0],
      ['december',29,30,0],
      ['december',30,31,0]
     ];

     var circos = new circosJS({
      container: '#chart',
      width: 420,
      height: 420,
     });

     circos
     .layout(
      {
       innerRadius: 160,
       outerRadius: 200,
       ticks: {display: false},
       labels: {
        position: 'center',
        display: true,
        size: 14,
        color: '#000',
        radialOffset: 15,
       }
      },
      layout_data
     )

     .heatmap('temperatures', {
      innerRadius: 115,
      outerRadius: 155,
      logScale: false,
      colorPalette: 'YlOrRd',
     }, heatmap)

     .heatmap('days-off', {
      innerRadius: 105,
      outerRadius: 114,
      logScale: false,
      colorPalette: 'Blues'
     }, days_off)

     .render();
    });

   });
  }
 }
}


angular
.module('vdb-d3')
.directive('d3Circos', d3Circos);

function d3Donut($window, $timeout, d3v4Service,blues) {
 return {
  restrict: 'AE',
  link: function(scope, element, attrs) {
   d3v4Service.d3().then(function(d3) {
    var width = 200,
    height = 215,
    radius = Math.min(width, height) / 2;

var color = d3.scaleOrdinal()
    .range(blues);

var arc = d3.arc()
    .outerRadius(radius - 10)
    .innerRadius(radius - 70);

var pie = d3.pie()
    .sort(null)
    .value(function(d) { return d.population; });

var svg = d3.select("d3-donut").append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

d3.csv("data/d3Pie.csv", type, function(error, data) {
  if (error) throw error;

  var g = svg.selectAll(".arc")
      .data(pie(data))
    .enter().append("g")
      .attr("class", "arc");

  g.append("path")
      .attr("d", arc)
      .style("fill", function(d) { return color(d.data.age); });

  g.append("text")
      .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
      .attr("dy", ".35em")
      .text(function(d) { return d.data.age; });
});

function type(d) {
  d.population = +d.population;
  return d;
}





   });
  }
 }
}


angular
.module('vdb-d3')
.directive('d3Donut', d3Donut);

var CodeFlower = function(selector, w, h) {
  this.w = w;
  this.h = h;

  d3.select(selector).selectAll("svg").remove();

  this.svg = d3.select(selector).append("svg:svg")
    .attr('width', w)
    .attr('height', h);

  this.svg.append("svg:rect")
    .style("stroke", "#f5f5f5")
    .style("fill", "#f5f5f5")
    .attr('width', w)
    .attr('height', h);

  this.force = d3.layout.force()
    .on("tick", this.tick.bind(this))
    .charge(function(d) { return d._children ? -d.size / 100 : -40; })
    .linkDistance(function(d) { return d.target._children ? 80 : 25; })
    .size([h, w]);
};

CodeFlower.prototype.update = function(json) {
  if (json) this.json = json;

  this.json.fixed = true;
  this.json.x = this.w / 2;
  this.json.y = this.h / 2;

  var nodes = this.flatten(this.json);
  var links = d3.layout.tree().links(nodes);
  var total = nodes.length || 1;

  // remove existing text (will readd it afterwards to be sure it's on top)
  this.svg.selectAll("text").remove();

  // Restart the force layout
  this.force
    .gravity(Math.atan(total / 50) / Math.PI * 0.4)
    .nodes(nodes)
    .links(links)
    .start();

  // Update the links
  this.link = this.svg.selectAll("line.link")
    .data(links, function(d) { return d.target.name; });

  // Enter any new links
  this.link.enter().insert("svg:line", ".node")
    .attr("class", "link")
    .attr("x1", function(d) { return d.source.x; })
    .attr("y1", function(d) { return d.source.y; })
    .attr("x2", function(d) { return d.target.x; })
    .attr("y2", function(d) { return d.target.y; });

  // Exit any old links.
  this.link.exit().remove();

  // Update the nodes
  this.node = this.svg.selectAll("circle.node")
    .data(nodes, function(d) { return d.name; })
    .classed("collapsed", function(d) { return d._children ? 1 : 0; });

  this.node.transition()
    .attr("r", function(d) { return d.children ? 3.5 : Math.pow(d.size, 2/5) || 1; });

  // Enter any new nodes
  this.node.enter().append('svg:circle')
    .attr("class", "node")
    .classed('directory', function(d) { return (d._children || d.children) ? 1 : 0; })
    .attr("r", function(d) { return d.children ? 3.5 : Math.pow(d.size, 2/5) || 1; })
    .style("fill", function color(d) {
      return "hsl(" + parseInt(360 / total * d.id, 10) + ",90%,70%)";
    })
    .call(this.force.drag)
    .on("click", this.click.bind(this))
    .on("mouseover", this.mouseover.bind(this))
    .on("mouseout", this.mouseout.bind(this));

  // Exit any old nodes
  this.node.exit().remove();

  this.text = this.svg.append('svg:text')
    .attr('class', 'nodetext')
    .attr('dy', 0)
    .attr('dx', 0)
    .attr('text-anchor', 'middle');

  return this;
};

CodeFlower.prototype.flatten = function(root) {
  var nodes = [], i = 0;

  function recurse(node) {
    if (node.children) {
      node.size = node.children.reduce(function(p, v) {
        return p + recurse(v);
      }, 0);
    }
    if (!node.id) node.id = ++i;
    nodes.push(node);
    return node.size;
  }

  root.size = recurse(root);
  return nodes;
};

CodeFlower.prototype.click = function(d) {
  // Toggle children on click.
  if (d.children) {
    d._children = d.children;
    d.children = null;
  } else {
    d.children = d._children;
    d._children = null;
  }
  this.update();
};

CodeFlower.prototype.mouseover = function(d) {
  this.text.attr('transform', 'translate(' + d.x + ',' + (d.y - 5 - (d.children ? 3.5 : Math.sqrt(d.size) / 2)) + ')')
    .text(d.name + ": " + d.size + " loc")
    .style('display', null);
};

CodeFlower.prototype.mouseout = function(d) {
  this.text.style('display', 'none');
};

CodeFlower.prototype.tick = function() {
  var h = this.h;
  var w = this.w;
  this.link.attr("x1", function(d) { return d.source.x; })
    .attr("y1", function(d) { return d.source.y; })
    .attr("x2", function(d) { return d.target.x; })
    .attr("y2", function(d) { return d.target.y; });

  this.node.attr("transform", function(d) {
    return "translate(" + Math.max(5, Math.min(w - 5, d.x)) + "," + Math.max(5, Math.min(h - 5, d.y)) + ")";
  });
};

CodeFlower.prototype.cleanup = function() {
  this.update([]);
  this.force.stop();
};

angular.module('vdb-d3')
.factory('codeFlowerService', function($document, $q, $rootScope){

  var d = $q.defer();
  function onScriptLoad() {
   // Load client in the browser
   $rootScope.$apply(function() { d.resolve(window.d3); });
  }

  var scriptTag = $document[0].createElement('script');
  scriptTag.type = 'text/javascript';
  scriptTag.async = true;
  scriptTag.src = 'vdb-d3/d3CodeFlower/codeFlower.js';
  scriptTag.onreadystatechange = function () {
   if (this.readyState == 'complete') onScriptLoad();
  };

  scriptTag.onload = onScriptLoad;

  var s = $document[0].getElementsByTagName('body')[0];
  s.appendChild(scriptTag);

 return {
  cf: function() {
   return d.promise;
  }
 };
});

function d3Flower($window, $timeout, d3v3Service,codeFlowerService) {
 return {
  restrict: 'AE',
  link: function(scope, element, attrs) {
   d3v3Service.d3().then(function(d3) {
    codeFlowerService.cf().then(function(cf) {

     var currentCodeFlower;

     var createCodeFlower = function(json) {
      var jsonArray;
      // update the jsonData textarea
       // document.getElementById('jsonData').value = JSON.stringify(json);
      // remove previous flower to save memory
      if (currentCodeFlower) currentCodeFlower.cleanup();
      // adapt layout size to the total number of elements
      // var total = countElements(json);
      var total =  Object.keys(json);
      w = parseInt(Math.sqrt(total) * 30, 10);
      h = parseInt(Math.sqrt(total) * 30, 10);
      // create a new CodeFlower
      currentCodeFlower = new CodeFlower("d3-flower", 300, 300).update(json);
     };

     d3.json('/data/flower.json', createCodeFlower);

     // document.getElementById('project').addEventListener('change', function() {
     //  console.log("Project");
     //  d3.json(this.value, createCodeFlower);
     // });

     // document.getElementById('jsonInput').addEventListener('submit', function(e) {
     //  console.log("jsonInput");
     //  e.preventDefault();
     //  document.getElementById('visualization').scrollIntoView();
     //  var json = JSON.parse(document.getElementById('jsonData').value);
     //  currentCodeFlower.update(json);
     // });

      // document.getElementById('jsonConverter').addEventListener('submit', function(e) {
      //  console.log("jsonConverter");
      //  e.preventDefault();
      //  var origin = this.children[0].children[0].value;
      //  var data = this.children[0].children[1].value;
      //  var json = convertToJSON(data, origin);
      //  document.getElementById('visualization').scrollIntoView();
      //  createCodeFlower(json);
      // });

    });
   });
  }
 }
}
angular
.module('vdb-d3')
.directive('d3Flower', d3Flower);

function d3Gantt($window, $timeout, d3v3Service) {
 return {
  restrict: 'AE',
  link: function(scope, element, attrs) {
   d3v3Service.d3().then(function(d3) {

    d3.gantt = function() {
     var FIT_TIME_DOMAIN_MODE = "fit";
     var FIXED_TIME_DOMAIN_MODE = "fixed";

     var margin = {
      top : 20,
      right : 40,
      bottom : 20,
      left : 50
     };

     var timeDomainStart = d3.time.day.offset(new Date(),-3);
     var timeDomainEnd = d3.time.hour.offset(new Date(),+3);
     var timeDomainMode = FIT_TIME_DOMAIN_MODE;// fixed or fit
     var taskTypes = [];
     var taskStatus = [];
     var height = document.body.clientHeight - margin.top - margin.bottom-5;
     var width = document.body.clientWidth - margin.right - margin.left-5;

     var tickFormat = "%H:%M";

     var keyFunction = function(d) {
      return d.startDate + d.taskName + d.endDate;
     };

     var rectTransform = function(d) {
      return "translate(" + x(d.startDate) + "," + y(d.taskName) + ")";
     };

     var x = d3.time.scale().domain([ timeDomainStart, timeDomainEnd ])
     .range([ 0, width ]).clamp(true);

     var y = d3.scale.ordinal().domain(taskTypes)
     .rangeRoundBands([ 0, height - margin.top - margin.bottom ], .1);

     var xAxis = d3.svg.axis()
     .scale(x)
     .orient("bottom")
     .tickFormat(d3.time.format(tickFormat))
     .tickSubdivide(true)
     .tickSize(8)
     .tickPadding(8);

     var yAxis = d3.svg.axis()
     .scale(y)
     .orient("left")
     .tickSize(0);

     var initTimeDomain = function() {
      if (timeDomainMode === FIT_TIME_DOMAIN_MODE) {
       if (tasks === undefined || tasks.length < 1) {
        timeDomainStart = d3.time.day.offset(new Date(), -3);
        timeDomainEnd = d3.time.hour.offset(new Date(), +3);
        return;
       }
       tasks.sort(function(a, b) {
        return a.endDate - b.endDate;
       });
       timeDomainEnd = tasks[tasks.length - 1].endDate;
       tasks.sort(function(a, b) {
        return a.startDate - b.startDate;
       });
       timeDomainStart = tasks[0].startDate;
      }
     };

     var initAxis = function() {
      x = d3.time.scale()
      .domain([ timeDomainStart, timeDomainEnd ])
      .range([ 0, width ])
      .clamp(true);

      y = d3.scale.ordinal()
      .domain(taskTypes)
      .rangeRoundBands([ 0, height - margin.top - margin.bottom ], .1);

      xAxis = d3.svg.axis()
      .scale(x)
      .orient("bottom")
      .tickFormat(d3.time.format(tickFormat))
      .tickSubdivide(true)
      .tickSize(8).tickPadding(8);

      yAxis = d3.svg.axis()
      .scale(y)
      .orient("left")
      .tickSize(0);
     };

     function gantt(tasks) {

      initTimeDomain();
      initAxis();

      var svg = d3.select("d3-gantt")
      .append("svg")
      .attr("class", "gantt")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("class", "gantt-chart")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

      svg.selectAll(".gantt .chart")
      .data(tasks, keyFunction).enter()
      .append("rect")
      .attr("rx", 0)
      .attr("ry", 0)
      .attr("class", function(d){
       if(taskStatus[d.status] == null){ return "bar";}
       return taskStatus[d.status];
      })
      .attr("y", 0)
      .attr("transform", rectTransform)
      .attr("height", function(d) { return y.rangeBand(); })
      .attr("width", function(d) {
       return (x(d.endDate) - x(d.startDate));
      });

      svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0, " + (height - margin.top - margin.bottom) + ")")
      .transition()
      .call(xAxis);

      svg.append("g")
      .attr("class", "y axis")
      .transition().call(yAxis);

      return gantt;

     };

     gantt.redraw = function(tasks) {

      initTimeDomain();
      initAxis();

      var svg = d3.select("svg");

      var ganttChartGroup = svg.select(".gantt-chart");
      var rect = ganttChartGroup.selectAll("rect").data(tasks, keyFunction);

      rect.enter()
      .insert("rect",":first-child")
      .attr("rx", 0)
      .attr("ry", 0)
      .attr("class", function(d){
       if(taskStatus[d.status] == null){ return "bar";}
       return taskStatus[d.status];
      })
      .transition()
      .attr("y", 0)
      .attr("transform", rectTransform)
      .attr("height", function(d) { return y.rangeBand(); })
      .attr("width", function(d) {
       return (x(d.endDate) - x(d.startDate));
      });

      rect.transition()
      .attr("transform", rectTransform)
      .attr("height", function(d) { return y.rangeBand(); })
      .attr("width", function(d) {
       return (x(d.endDate) - x(d.startDate));
      });

      rect.exit().remove();

      svg.select(".x").transition().call(xAxis);
      svg.select(".y").transition().call(yAxis);

      return gantt;
     };

     gantt.margin = function(value) {
      if (!arguments.length)
      return margin;
      margin = value;
      return gantt;
     };

     gantt.timeDomain = function(value) {
      if (!arguments.length)
      return [ timeDomainStart, timeDomainEnd ];
      timeDomainStart = +value[0], timeDomainEnd = +value[1];
      return gantt;
     };

     gantt.timeDomainMode = function(value) {
      if (!arguments.length)
      return timeDomainMode;
      timeDomainMode = value;
      return gantt;

     };

     gantt.taskTypes = function(value) {
      if (!arguments.length)
      return taskTypes;
      taskTypes = value;
      return gantt;
     };

     gantt.taskStatus = function(value) {
      if (!arguments.length)
      return taskStatus;
      taskStatus = value;
      return gantt;
     };

     gantt.width = function(value) {
      if (!arguments.length)
      return width;
      width = +value;
      return gantt;
     };

     gantt.height = function(value) {
      if (!arguments.length)
      return height;
      height = +value;
      return gantt;
     };

     gantt.tickFormat = function(value) {
      if (!arguments.length)
      return tickFormat;
      tickFormat = value;
      return gantt;
     };

     return gantt;
    };

    var tasks = [
     {
      "startDate":new Date("2017-01"),
      "endDate":new Date("2017-04"),
      "taskName":"Plan","status":"SUCCEEDED"
     },
     {
      "startDate":new Date("2017-04"),
      "endDate":new Date("2017-08"),
      "taskName":"Build","status":"SUCCEEDED"
     },
     {
      "startDate":new Date("2017-08"),
      "endDate":new Date("2021-12"),
      "taskName":"Run","status":"SUCCEEDED"
     },
     {
      "startDate":new Date("2017-04"),
      "endDate":new Date("2021-12"),
      "taskName":"Analysis","status":"FAILED"
     }
    ];

    var taskStatus = {
     "SUCCEEDED" : "bar",
     "FAILED" : "bar-failed",
     "RUNNING" : "bar-running",
     "KILLED" : "bar-killed"
    };

    var taskNames = [ "Plan", "Build", "Run", "Analysis"];

    tasks.sort(function(a, b) {
     return a.endDate - b.endDate;
    });

    var maxDate = tasks[tasks.length - 1].endDate;

    tasks.sort(function(a, b) {
     return a.startDate - b.startDate;
    });

    var minDate = tasks[0].startDate;

    var format = "%M";
    var timeDomainString = "5year";

    var gantt = d3.gantt()
    .taskTypes(taskNames)
    .taskStatus(taskStatus)
    .tickFormat(format)
    .height(190)
    .width(400);

    gantt.timeDomainMode("fixed");
    changeTimeDomain(timeDomainString);

    gantt(tasks);

    function changeTimeDomain(timeDomainString) {
     this.timeDomainString = timeDomainString;
     switch (timeDomainString) {
      case "1hr":
      format = "%H:%M:%S";
      gantt.timeDomain([ d3.time.hour.offset(getEndDate(), -1), getEndDate() ]);
      break;
      case "3hr":
      format = "%H:%M";
      gantt.timeDomain([ d3.time.hour.offset(getEndDate(), -3), getEndDate() ]);
      break;

      case "6hr":
      format = "%H:%M";
      gantt.timeDomain([ d3.time.hour.offset(getEndDate(), -6), getEndDate() ]);
      break;

      case "1day":
      format = "%H:%M";
      gantt.timeDomain([ d3.time.day.offset(getEndDate(), -1), getEndDate() ]);
      break;

      case "1week":
      format = "%a %H:%M";
      gantt.timeDomain([ d3.time.day.offset(getEndDate(), -7), getEndDate() ]);
      break;

      case "1year":
      format = "%MM";
      gantt.timeDomain([ d3.time.day.offset(getEndDate(), -365), getEndDate() ]);
      break;

      case "5year":
      format = "%Y";
      gantt.timeDomain([ d3.time.day.offset(getEndDate(), -(365*5)), getEndDate() ]);
      break;
      default:

     }
     gantt.tickFormat(format);
     gantt.redraw(tasks);
    }

    function getEndDate() {
     var lastEndDate = Date.now();
     if (tasks.length > 0) {
      lastEndDate = tasks[tasks.length - 1].endDate;
     }

     return lastEndDate;
    }

    function addTask() {

     var lastEndDate = getEndDate();
     var taskStatusKeys = Object.keys(taskStatus);
     var taskStatusName = taskStatusKeys[Math.floor(Math.random() * taskStatusKeys.length)];
     var taskName = taskNames[Math.floor(Math.random() * taskNames.length)];

     tasks.push({
      "startDate" : d3.time.hour.offset(lastEndDate, Math.ceil(1 * Math.random())),
      "endDate" : d3.time.hour.offset(lastEndDate, (Math.ceil(Math.random() * 3)) + 1),
      "taskName" : taskName,
      "status" : taskStatusName
     });

     changeTimeDomain(timeDomainString);
     gantt.redraw(tasks);
    };

    function removeTask() {
     tasks.pop();
     changeTimeDomain(timeDomainString);
     gantt.redraw(tasks);
    };

   });

  }
 }
}
angular
.module('vdb-d3')
.directive('d3Gantt', d3Gantt);

function d3GeoAz($window, $timeout, d3v3Service,category8a) {
 return {
  restrict: 'AE',
  link: function(scope, iElement, attrs) {
   var w = iElement.parent()[0].clientWidth;
   var h = iElement.parent()[0].clientHeight;
   d3v3Service.d3().then(function(d3) {
    //Define Arizona map projection
    var projection = d3.geo.albers()
    .translate([w/2, h/2])
    .scale([1800])
    .rotate([108, 0, 0])
    .translate([200, -50]);

    //Define path generator
    var path = d3.geo.path()
    .projection(projection);

    //Define scale to sort data values into buckets of color
    var color = d3.scale.quantize()
    .range(category8a());
    //Create SVG element
    var svg = d3.select("d3-geo-az")
    .append("svg")
    .attr("width", w)
    .attr("height", h);


    d3.csv("data/arizona-counties.csv", function(data) {

				//Set input domain for color scale (customize scale using integers instead of d.value if necessary)
				color.domain([
					d3.min(data, function(d) { return 0; }),
					d3.max(data, function(d) { return 19000; })
				]);

				//Load in GeoJSON data
				d3.json("data/us-arizona-counties.json", function(json) {

					//Merge the pop. data and GeoJSON
					//Loop through once for each pop. data value
					for (var i = 0; i < data.length; i++) {

						//Grab county name
						var dataCountyRetail = data[i].county;

						//Grab data value, and convert from string to float
						var dataValueRetail = parseFloat(data[i].retailSalesperCap);

						//Find the corresponding county inside the GeoJSON
						for (var j = 0; j < json.features.length; j++) {

							var jsonCountyRetail = json.features[j].properties.name;

							if (dataCountyRetail == jsonCountyRetail) {

								//Copy the data value into the JSON
								json.features[j].properties.value = dataValueRetail;

								//Stop looking through the JSON
								break;

							}
						}
					}

					//Bind data and create one path per GeoJSON feature
					svg.selectAll("path")
					   .data(json.features)
					   .enter()
					   .append("path")
					   .attr("d", path)
					   .style("stroke","#ccc")
					   .style("fill", function(d) {
					   		//Get data value
					   		var valueRetail = d.properties.value;

					   		if (valueRetail) {
					   			//If value exists…
						   		return color(valueRetail);
					   		} else {
					   			//If value is undefined…
						   		return "#ccc";
					   		}
					   })
					   .on("mouseover", function(d) {   //Add tooltip on mouseover for each circle

								//Get this county's x/y values, then augment for the tooltip
								var xPosition = d3.select(this).attr("x");
								var yPosition = d3.select(this).attr("y");

								//Update the tooltip position and value
								d3.select("#tooltip2")
									//Show the tooltip above where the mouse triggers the event
									.style("left", (d3.event.pageX) + "px")
                					.style("top", (d3.event.pageY - 70) + "px")
									.select("#countyRetail-label")
									//CSV data has been bound to JSON at this point - so values must be referenced from JSON properties
									.html("<strong>" + d.properties.name + "</strong>" + "<br/>" + "Retail Sales Per Capita: " + d.properties.value)

								//Show the tooltip
								d3.select("#tooltip2").classed("hidden", false);

						   })
						   .on("mouseout", function() {

								//Hide the tooltip
								d3.select("#tooltip2").classed("hidden", true);

						   })

				});

			});











   });//end d3v3service

  }
 }
}
angular
.module('vdb-d3')
.directive('d3GeoAz', d3GeoAz);


function d3Map($window, $timeout, d3v3Service) {
 return {
  restrict: 'AE',
  link: function(scope, element, attrs) {
   d3v3Service.d3().then(function(d3) {

    var mapdata = {};
    var palette = ['#009933','#669900','#99cc00','#cccc00','#c7dc09','#edf933','#ffcc00', '#ff9933', '#ff6600','#ff5050'];

    var width = 500, height = 1200/2;
    var minDocCount = 0, quantiles = {};

    // projection definitions
    var projection = d3.geo.mercator()
    .scale((width + 1) / 2 / Math.PI)
    .translate([width/2, height/2])
    .precision(.1);

    var path = d3.geo.path().projection(projection);
    var graticule = d3.geo.graticule();

    // SVG related definitions
    var svg = d3.select('d3-map').append('svg')
     .attr({'width': 'auto', 'height': height})
     .append('g');

    var filter = svg.append('defs')
     .append('filter')
     .attr({'x':0, 'y':0, 'width':1, 'height':1, 'id':'gray-background'});

    filter.append('feFlood')
     .attr('flood-color', '#f2f2f2')
     .attr('result', 'COLOR');

    filter.append('feMorphology')
    .attr('operator', 'dilate')
    .attr('radius', '.9')
    .attr('in', 'SourceAlpha')
    .attr('result', 'MORPHED');

    filter.append('feComposite')
    .attr('in', 'SourceGraphic')
    .attr('in2', 'MORPHED')
    .attr('result', 'COMP1');
    filter.append('feComposite')
    .attr('in', 'COMP1')
    .attr('in2', 'COLOR');

    svg.append("path")
    .datum(graticule)
    .attr("class", "graticule")
    .attr("d", path);

    d3.json('data/mockelasticdata.json', function(error, mockdata) {
     if (error) return console.error(error);
     // console.log('mockdata',mockdata);
     mapdata = mockdata;
     draw(mockdata)
    });

    function draw(data) {
     // var localstoreWorldData = localStorage.getItem('worldmapData');
     // if (localstoreWorldData && localstoreWorldData.length) {
     //     localstoreWorldData = JSON.parse(localstoreWorldData);
     //     console.log('localstoreWorldData',localstoreWorldData);
     //     if (localstoreWorldData) {
     //         processWorldD(localstoreWorldData, data);
     //         //no need proceed further
     //         return;
     //     }
     // }

     d3.json('data/world.json', function(error, world) {
      if (error) return console.error(error);
      // console.log('world',world);
      processWorldD(world, data);
      //localStorage.setItem('worldmapData', JSON.stringify(world));
     });
    }

    function processWorldD(world, data) {
     for(var idx=0; idx < data.aggregations.world_map.buckets.length; idx++) {
      var cCode = data.aggregations.world_map.buckets[idx].key.toUpperCase();
      var doc_count = data.aggregations.world_map.buckets[idx].doc_count;
      for(var wdx=0; wdx < world.objects.subunits.geometries.length; wdx++) {
       var cName = world.objects.subunits.geometries[wdx].id.toUpperCase();
       if (cCode === cName) {
        world.objects.subunits.geometries[wdx].properties.doc_count = doc_count;
       }
      }
     }
     var subunits = topojson.feature(world, world.objects.subunits);
     subunits.features = subunits.features.filter(function(d){ return d.id !== "ATA"; });
     // console.log('subunits',subunits);

     minDocCount = d3.min(subunits.features, function(d){ return d.properties.doc_count; });
     // console.log('minDocCount',minDocCount);

     var doc_counts = subunits.features.map(function(d){ return d.properties.doc_count; });
     doc_counts = doc_counts.filter(function(d){ return d; }).sort(d3.ascending);
     //console.log('doc_counts',doc_counts);
     quantiles['0.95'] = d3.quantile(doc_counts, '0.95');

     var countries = svg.selectAll('path.subunit')
     .data(subunits.features).enter();
     countries.insert('path', '.graticule')
     .attr('class', function(d) { return 'subunit ca'+d.id; })
     .style('fill', heatColor)
     .attr('d', path)
     .on('mouseover',mouseoverLegend).on('mouseout',mouseoutLegend)
     .on('click', coutryclicked);

     countries.append('svg:text')
     .attr('class', function(d){ return 'subunit-label la'+d.id+d.properties.name.replace(/[ \.#']+/g,''); })
     //.attr('transform', function(d) { return 'translate('+ path.centroid(d) +')'; })
     .attr('transform', function(d) { return 'translate('+(width-(5*d.properties.name.length))+','+(15)+')'; })
     .attr('dy', '.35em')
     .attr('filter', 'url(#gray-background)')
     .append('svg:tspan')
     .attr('x', 0)
     .attr('dy', 5)
     .text(function(d) { return d.properties.name; })
     .append('svg:tspan')
     .attr('x', 0)
     .attr('dy', 20)
     .text(function(d) { return d.properties.doc_count ? d.properties.doc_count : ''; });
    }

    function mouseoverLegend(datum, index) {
     d3.selectAll('.subunit-label.la'+datum.id+datum.properties.name.replace(/[ \.#']+/g,''))
     .style('display', 'inline-block');
     d3.selectAll('.subunit.ca'+datum.id)
     .style('fill', '#cc6699');
    }

    function mouseoutLegend(datum, index) {
     d3.selectAll('.subunit-label.la'+datum.id+datum.properties.name.replace(/[ \.#']+/g,''))
     .style('display', 'none');
     d3.selectAll('.subunit.ca'+datum.id)
     .style('fill', heatColor(datum));
    }

    function coutryclicked(datum, index) {
     //filter event for this country should be applied here
     // console.log('coutryclicked datum', datum);
    }
    function heatColor(d) {
     if (quantiles['0.95'] === 0 && minDocCount === 0) return '#F0F0F0';
     if (!d.properties.doc_count) return '#F0F0F0';
     if (d.properties.doc_count > quantiles['0.95']) return palette[(palette.length - 1)];
     if (quantiles['0.95'] == minDocCount) return palette[(palette.length-1)];
     var diffDocCount = quantiles['0.95'] - minDocCount;
     var paletteInterval = diffDocCount / palette.length;
     var diffDocCountDatum = quantiles['0.95'] - d.properties.doc_count;
     var diffDatumDiffDoc = diffDocCount - diffDocCountDatum;
     var approxIdx = diffDatumDiffDoc / paletteInterval;
     if (!approxIdx || Math.floor(approxIdx) === 0) approxIdx = 0;
     else approxIdx = Math.floor(approxIdx) - 1;
     return palette[approxIdx];
    }
   });
  }
 };
}

angular
.module('vdb-d3')
.directive('d3Map', d3Map);

angular.module('vdb-d3')
.factory('codeFlowerService', function($document, $q, $rootScope){

  var d = $q.defer();
  function onScriptLoad() {
   // Load client in the browser
   $rootScope.$apply(function() { d.resolve(window.d3); });
  }

  var scriptTag = $document[0].createElement('script');
  scriptTag.type = 'text/javascript';
  scriptTag.async = true;
  scriptTag.src = 'vdb-d3/d3Map/topojson.v1.js';
  scriptTag.onreadystatechange = function () {
   if (this.readyState == 'complete') onScriptLoad();
  };

  scriptTag.onload = onScriptLoad;

  var s = $document[0].getElementsByTagName('body')[0];
  s.appendChild(scriptTag);

 return {
  cf: function() {
   return d.promise;
  }
 };
});

// https://github.com/topojson/topojson-client Version 1.8.0. Copyright 2016 Mike Bostock.
(function (global, factory) {
 typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
 typeof define === 'function' && define.amd ? define(['exports'], factory) :
 (factory((global.topojson = global.topojson || {})));
}(this, (function (exports) { 'use strict';

var noop = function() {};

function absolute(transform) {
 if (!transform) return noop;
 var x0,
 y0,
 kx = transform.scale[0],
 ky = transform.scale[1],
 dx = transform.translate[0],
 dy = transform.translate[1];
 return function(point, i) {
  if (!i) x0 = y0 = 0;
  point[0] = (x0 += point[0]) * kx + dx;
  point[1] = (y0 += point[1]) * ky + dy;
 };
}

function relative(transform) {
 if (!transform) return noop;
 var x0,
 y0,
 kx = transform.scale[0],
 ky = transform.scale[1],
 dx = transform.translate[0],
 dy = transform.translate[1];
 return function(point, i) {
  if (!i) x0 = y0 = 0;
  var x1 = Math.round((point[0] - dx) / kx),
  y1 = Math.round((point[1] - dy) / ky);
  point[0] = x1 - x0;
  point[1] = y1 - y0;
  x0 = x1;
  y0 = y1;
 };
}

function reverse(array, n) {
 var t, j = array.length, i = j - n;
 while (i < --j) t = array[i], array[i++] = array[j], array[j] = t;
}

function bisect(a, x) {
 var lo = 0, hi = a.length;
 while (lo < hi) {
  var mid = lo + hi >>> 1;
  if (a[mid] < x) lo = mid + 1;
  else hi = mid;
 }
 return lo;
}

var feature = function(topology, o) {
 return o.type === "GeometryCollection" ? {
  type: "FeatureCollection",
  features: o.geometries.map(function(o) { return feature$1(topology, o); })
 } : feature$1(topology, o);
};

function feature$1(topology, o) {
 var f = {
  type: "Feature",
  id: o.id,
  properties: o.properties || {},
  geometry: object(topology, o)
 };
 if (o.id == null) delete f.id;
 return f;
}

function object(topology, o) {
 var absolute$$1 = absolute(topology.transform),
 arcs = topology.arcs;

 function arc(i, points) {
  if (points.length) points.pop();
  for (var a = arcs[i < 0 ? ~i : i], k = 0, n = a.length, p; k < n; ++k) {
   points.push(p = a[k].slice());
   absolute$$1(p, k);
  }
  if (i < 0) reverse(points, n);
 }

 function point(p) {
  p = p.slice();
  absolute$$1(p, 0);
  return p;
 }

 function line(arcs) {
  var points = [];
  for (var i = 0, n = arcs.length; i < n; ++i) arc(arcs[i], points);
  if (points.length < 2) points.push(points[0].slice());
  return points;
 }

 function ring(arcs) {
  var points = line(arcs);
  while (points.length < 4) points.push(points[0].slice());
  return points;
 }

 function polygon(arcs) {
  return arcs.map(ring);
 }

 function geometry(o) {
  var t = o.type;
  return t === "GeometryCollection" ? {type: t, geometries: o.geometries.map(geometry)}
  : t in geometryType ? {type: t, coordinates: geometryType[t](o)}
  : null;
 }

 var geometryType = {
  Point: function(o) { return point(o.coordinates); },
  MultiPoint: function(o) { return o.coordinates.map(point); },
  LineString: function(o) { return line(o.arcs); },
  MultiLineString: function(o) { return o.arcs.map(line); },
  Polygon: function(o) { return polygon(o.arcs); },
  MultiPolygon: function(o) { return o.arcs.map(polygon); }
 };

 return geometry(o);
}

var stitchArcs = function(topology, arcs) {
 var stitchedArcs = {},
 fragmentByStart = {},
 fragmentByEnd = {},
 fragments = [],
 emptyIndex = -1;

 // Stitch empty arcs first, since they may be subsumed by other arcs.
 arcs.forEach(function(i, j) {
  var arc = topology.arcs[i < 0 ? ~i : i], t;
  if (arc.length < 3 && !arc[1][0] && !arc[1][1]) {
   t = arcs[++emptyIndex], arcs[emptyIndex] = i, arcs[j] = t;
  }
 });

 arcs.forEach(function(i) {
  var e = ends(i),
  start = e[0],
  end = e[1],
  f, g;

  if (f = fragmentByEnd[start]) {
   delete fragmentByEnd[f.end];
   f.push(i);
   f.end = end;
   if (g = fragmentByStart[end]) {
    delete fragmentByStart[g.start];
    var fg = g === f ? f : f.concat(g);
    fragmentByStart[fg.start = f.start] = fragmentByEnd[fg.end = g.end] = fg;
   } else {
    fragmentByStart[f.start] = fragmentByEnd[f.end] = f;
   }
  } else if (f = fragmentByStart[end]) {
   delete fragmentByStart[f.start];
   f.unshift(i);
   f.start = start;
   if (g = fragmentByEnd[start]) {
    delete fragmentByEnd[g.end];
    var gf = g === f ? f : g.concat(f);
    fragmentByStart[gf.start = g.start] = fragmentByEnd[gf.end = f.end] = gf;
   } else {
    fragmentByStart[f.start] = fragmentByEnd[f.end] = f;
   }
  } else {
   f = [i];
   fragmentByStart[f.start = start] = fragmentByEnd[f.end = end] = f;
  }
 });

 function ends(i) {
  var arc = topology.arcs[i < 0 ? ~i : i], p0 = arc[0], p1;
  if (topology.transform) p1 = [0, 0], arc.forEach(function(dp) { p1[0] += dp[0], p1[1] += dp[1]; });
  else p1 = arc[arc.length - 1];
  return i < 0 ? [p1, p0] : [p0, p1];
 }

 function flush(fragmentByEnd, fragmentByStart) {
  for (var k in fragmentByEnd) {
   var f = fragmentByEnd[k];
   delete fragmentByStart[f.start];
   delete f.start;
   delete f.end;
   f.forEach(function(i) { stitchedArcs[i < 0 ? ~i : i] = 1; });
   fragments.push(f);
  }
 }

 flush(fragmentByEnd, fragmentByStart);
 flush(fragmentByStart, fragmentByEnd);
 arcs.forEach(function(i) { if (!stitchedArcs[i < 0 ? ~i : i]) fragments.push([i]); });

 return fragments;
};

var mesh = function(topology) {
 return object(topology, meshArcs.apply(this, arguments));
};

function meshArcs(topology, o, filter) {
 var arcs = [];

 function arc(i) {
  var j = i < 0 ? ~i : i;
  (geomsByArc[j] || (geomsByArc[j] = [])).push({i: i, g: geom});
 }

 function line(arcs) {
  arcs.forEach(arc);
 }

 function polygon(arcs) {
  arcs.forEach(line);
 }

 function geometry(o) {
  if (o.type === "GeometryCollection") o.geometries.forEach(geometry);
  else if (o.type in geometryType) geom = o, geometryType[o.type](o.arcs);
 }

 if (arguments.length > 1) {
  var geomsByArc = [],
  geom;

  var geometryType = {
   LineString: line,
   MultiLineString: polygon,
   Polygon: polygon,
   MultiPolygon: function(arcs) { arcs.forEach(polygon); }
  };

  geometry(o);

  geomsByArc.forEach(arguments.length < 3
   ? function(geoms) { arcs.push(geoms[0].i); }
   : function(geoms) { if (filter(geoms[0].g, geoms[geoms.length - 1].g)) arcs.push(geoms[0].i); });
  } else {
   for (var i = 0, n = topology.arcs.length; i < n; ++i) arcs.push(i);
  }

  return {type: "MultiLineString", arcs: stitchArcs(topology, arcs)};
 }

 function triangleArea(triangle) {
  var a = triangle[0], b = triangle[1], c = triangle[2];
  return Math.abs((a[0] - c[0]) * (b[1] - a[1]) - (a[0] - b[0]) * (c[1] - a[1]));
 }

 function ringArea(ring) {
  var i = -1,
  n = ring.length,
  a,
  b = ring[n - 1],
  area = 0;

  while (++i < n) {
   a = b;
   b = ring[i];
   area += a[0] * b[1] - a[1] * b[0];
  }

  return area / 2;
 }

 var merge = function(topology) {
  return object(topology, mergeArcs.apply(this, arguments));
 };

 function mergeArcs(topology, objects) {
  var polygonsByArc = {},
  polygons = [],
  components = [];

  objects.forEach(function(o) {
   if (o.type === "Polygon") register(o.arcs);
   else if (o.type === "MultiPolygon") o.arcs.forEach(register);
  });

  function register(polygon) {
   polygon.forEach(function(ring) {
    ring.forEach(function(arc) {
     (polygonsByArc[arc = arc < 0 ? ~arc : arc] || (polygonsByArc[arc] = [])).push(polygon);
    });
   });
   polygons.push(polygon);
  }

  function area(ring) {
   return Math.abs(ringArea(object(topology, {type: "Polygon", arcs: [ring]}).coordinates[0]));
  }

  polygons.forEach(function(polygon) {
   if (!polygon._) {
    var component = [],
    neighbors = [polygon];
    polygon._ = 1;
    components.push(component);
    while (polygon = neighbors.pop()) {
     component.push(polygon);
     polygon.forEach(function(ring) {
      ring.forEach(function(arc) {
       polygonsByArc[arc < 0 ? ~arc : arc].forEach(function(polygon) {
        if (!polygon._) {
         polygon._ = 1;
         neighbors.push(polygon);
        }
       });
      });
     });
    }
   }
  });

  polygons.forEach(function(polygon) {
   delete polygon._;
  });

  return {
   type: "MultiPolygon",
   arcs: components.map(function(polygons) {
    var arcs = [], n;

    // Extract the exterior (unique) arcs.
    polygons.forEach(function(polygon) {
     polygon.forEach(function(ring) {
      ring.forEach(function(arc) {
       if (polygonsByArc[arc < 0 ? ~arc : arc].length < 2) {
        arcs.push(arc);
       }
      });
     });
    });

    // Stitch the arcs into one or more rings.
    arcs = stitchArcs(topology, arcs);

    // If more than one ring is returned,
    // at most one of these rings can be the exterior;
    // choose the one with the greatest absolute area.
    if ((n = arcs.length) > 1) {
     for (var i = 1, k = area(arcs[0]), ki, t; i < n; ++i) {
      if ((ki = area(arcs[i])) > k) {
       t = arcs[0], arcs[0] = arcs[i], arcs[i] = t, k = ki;
      }
     }
    }

    return arcs;
   })
  };
 }

 var neighbors = function(objects) {
  var indexesByArc = {}, // arc index -> array of object indexes
  neighbors = objects.map(function() { return []; });

  function line(arcs, i) {
   arcs.forEach(function(a) {
    if (a < 0) a = ~a;
    var o = indexesByArc[a];
    if (o) o.push(i);
    else indexesByArc[a] = [i];
   });
  }

  function polygon(arcs, i) {
   arcs.forEach(function(arc) { line(arc, i); });
  }

  function geometry(o, i) {
   if (o.type === "GeometryCollection") o.geometries.forEach(function(o) { geometry(o, i); });
   else if (o.type in geometryType) geometryType[o.type](o.arcs, i);
  }

  var geometryType = {
   LineString: line,
   MultiLineString: polygon,
   Polygon: polygon,
   MultiPolygon: function(arcs, i) { arcs.forEach(function(arc) { polygon(arc, i); }); }
  };

  objects.forEach(geometry);

  for (var i in indexesByArc) {
   for (var indexes = indexesByArc[i], m = indexes.length, j = 0; j < m; ++j) {
    for (var k = j + 1; k < m; ++k) {
     var ij = indexes[j], ik = indexes[k], n;
     if ((n = neighbors[ij])[i = bisect(n, ik)] !== ik) n.splice(i, 0, ik);
     if ((n = neighbors[ik])[i = bisect(n, ij)] !== ij) n.splice(i, 0, ij);
    }
   }
  }

  return neighbors;
 };

 function compare(a, b) {
  return a[1][2] - b[1][2];
 }

 var minHeap = function() {
  var heap = {},
  array = [],
  size = 0;

  heap.push = function(object) {
   up(array[object._ = size] = object, size++);
   return size;
  };

  heap.pop = function() {
   if (size <= 0) return;
   var removed = array[0], object;
   if (--size > 0) object = array[size], down(array[object._ = 0] = object, 0);
   return removed;
  };

  heap.remove = function(removed) {
   var i = removed._, object;
   if (array[i] !== removed) return; // invalid request
   if (i !== --size) object = array[size], (compare(object, removed) < 0 ? up : down)(array[object._ = i] = object, i);
   return i;
  };

  function up(object, i) {
   while (i > 0) {
    var j = ((i + 1) >> 1) - 1,
    parent = array[j];
    if (compare(object, parent) >= 0) break;
    array[parent._ = i] = parent;
    array[object._ = i = j] = object;
   }
  }

  function down(object, i) {
   while (true) {
    var r = (i + 1) << 1,
    l = r - 1,
    j = i,
    child = array[j];
    if (l < size && compare(array[l], child) < 0) child = array[j = l];
    if (r < size && compare(array[r], child) < 0) child = array[j = r];
    if (j === i) break;
    array[child._ = i] = child;
    array[object._ = i = j] = object;
   }
  }

  return heap;
 };

 var presimplify = function(topology, triangleArea$$1) {
  var absolute$$1 = absolute(topology.transform),
  relative$$1 = relative(topology.transform),
  heap = minHeap();

  if (triangleArea$$1 == null) triangleArea$$1 = triangleArea;

  topology.arcs.forEach(function(arc) {
   var triangles = [],
   maxArea = 0,
   triangle,
   i,
   n,
   p;

   // To store each point’s area, we create a new array rather than extending
   // the passed-in point to workaround a Chrome/V8 bug (getting stuck in smi
   // mode). For midpoints, the initial area of Infinity will be computed in
   // the next step.
   for (i = 0, n = arc.length; i < n; ++i) {
    p = arc[i];
    absolute$$1(arc[i] = [p[0], p[1], Infinity], i);
   }

   for (i = 1, n = arc.length - 1; i < n; ++i) {
    triangle = arc.slice(i - 1, i + 2);
    triangle[1][2] = triangleArea$$1(triangle);
    triangles.push(triangle);
    heap.push(triangle);
   }

   for (i = 0, n = triangles.length; i < n; ++i) {
    triangle = triangles[i];
    triangle.previous = triangles[i - 1];
    triangle.next = triangles[i + 1];
   }

   while (triangle = heap.pop()) {
    var previous = triangle.previous,
    next = triangle.next;

    // If the area of the current point is less than that of the previous
    // point to be eliminated, use the latter’s area instead. This ensures
    // that the current point cannot be eliminated without eliminating
    // previously-eliminated points.
    if (triangle[1][2] < maxArea) triangle[1][2] = maxArea;
    else maxArea = triangle[1][2];

    if (previous) {
     previous.next = next;
     previous[2] = triangle[2];
     update(previous);
    }

    if (next) {
     next.previous = previous;
     next[0] = triangle[0];
     update(next);
    }
   }

   arc.forEach(relative$$1);
  });

  function update(triangle) {
   heap.remove(triangle);
   triangle[1][2] = triangleArea$$1(triangle);
   heap.push(triangle);
  }

  return topology;
 };

 exports.mesh = mesh;
 exports.meshArcs = meshArcs;
 exports.merge = merge;
 exports.mergeArcs = mergeArcs;
 exports.feature = feature;
 exports.neighbors = neighbors;
 exports.presimplify = presimplify;

 Object.defineProperty(exports, '__esModule', { value: true });

})));

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

function d3Pie($window, $timeout, d3v4Service,blues) {
 return {
  restrict: 'AE',
  link: function(scope, element, attrs) {
   d3v4Service.d3().then(function(d3) {

    var pie = d3.pie()
    .sort(null)
    .value(function(d) {
     return d.population;
    });

    var width = 260,
    height = 200,
    radius = Math.min(width, height) / 2;

    var svg = d3.select("d3-pie")
    .append("svg")
    .attr("height", height)
    .attr("width", width)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var color = d3.scaleOrdinal()
    .range(blues);
    var arc = d3.arc()
    .outerRadius(radius - 10)
    .innerRadius(0);

    var labelArc = d3.arc()
    .outerRadius(radius - 40)
    .innerRadius(radius - 40);

    d3.csv("data/d3pie.csv", type, function(error, data) {
     if (error) throw error;

     var g = svg.selectAll(".arc")
     .data(pie(data))
     .enter().append("g")
     .attr("class", "arc");

     g.append("path")
     .attr("d", arc)
     .style("fill", function(d) {
      return color(d.data.age);
     });

     g.append("text")
     .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
     .attr("dy", ".35em")
     .text(function(d) {
      return d.data.age;
     });

    });

    function type(d) {
     d.population = +d.population;
     return d;
    }

   });
  }
 }
}


angular
.module('vdb-d3')
.directive('d3Pie', d3Pie);

function d3rtTree($window, $timeout, d3v3Service) {//d3rt-tree
 return {
  restrict: 'AE',
  link: function(scope, element, attrs) {
   d3v3Service.d3().then(function(d3) {
    var margin = parseInt(attrs.margin) || 20,
     diameter = 630/2;

    var tree = d3.layout.tree()
    .size([360, diameter / 2 -60])
    .separation(function(a, b) { return (a.parent == b.parent ? 1 : 2) / a.depth; });

    var diagonal = d3.svg.diagonal.radial()
    .projection(function(d) { return [d.y, d.x / 180 * Math.PI]; });

    var svg = d3.select("d3rt-tree").append("svg")
    // var svg = d3.select("body").append("svg")
    .attr("width", diameter)
    .attr("height", diameter )
    .append("g")
    .attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");

    d3.json("gruntdata/flare.json", function(error, root) {
     if (error) throw error;
     var nodes = tree.nodes(root),
     links = tree.links(nodes);

     var link = svg.selectAll(".link")
     .data(links)
     .enter().append("path")
     .attr("class", "link")
     .attr("d", diagonal);

     var node = svg.selectAll(".node")
     .data(nodes)
     .enter().append("g")
     .attr("class", "node")
     .attr("transform", function(d) { return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")"; });

     node.append("circle")
     .attr("r", 4.5);

     node.append("text")
     .attr("dy", ".31em")
     .attr("text-anchor", function(d) { return d.x < 180 ? "start" : "end"; })
     .attr("transform", function(d) { return d.x < 180 ? "translate(8)" : "rotate(180)translate(-8)"; })
     .text(function(d) { return d.name; });
    });

    d3.select(self.frameElement).style("height", diameter - 150 + "px");

   });
  }
 };
}

 angular
 .module('vdb-d3')
 .directive('d3rtTree', d3rtTree);

function d3Sankey($window, $timeout, d3v2Service) {
 return {
  restrict: 'AE',
  link: function(scope, element, attrs) {
   d3v2Service.d3().then(function(d3) {


    var margin = {top: 1, right: 1, bottom: 6, left: 1},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

    var formatNumber = d3.format(",.0f"),
    format = function(d) { return formatNumber(d) + " TWh"; },
    color = d3.scale.category20();

    var svg = d3.select("#chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var sankey = d3.sankey()
    .nodeWidth(15)
    .nodePadding(10)
    .size([width, height]);

    var path = sankey.link();

    d3.json("energy.json", function(energy) {

     sankey
     .nodes(energy.nodes)
     .links(energy.links)
     .layout(32);

     var link = svg.append("g").selectAll(".link")
     .data(energy.links)
     .enter().append("path")
     .attr("class", "link")
     .attr("d", path)
     .style("stroke-width", function(d) { return Math.max(1, d.dy); })
     .sort(function(a, b) { return b.dy - a.dy; });

     link.append("title")
     .text(function(d) { return d.source.name + " → " + d.target.name + "\n" + format(d.value); });

     var node = svg.append("g").selectAll(".node")
     .data(energy.nodes)
     .enter().append("g")
     .attr("class", "node")
     .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
     .call(d3.behavior.drag()
     .origin(function(d) { return d; })
     .on("dragstart", function() { this.parentNode.appendChild(this); })
     .on("drag", dragmove));

     node.append("rect")
     .attr("height", function(d) { return d.dy; })
     .attr("width", sankey.nodeWidth())
     .style("fill", function(d) { return d.color = color(d.name.replace(/ .*/, "")); })
     .style("stroke", function(d) { return d3.rgb(d.color).darker(2); })
     .append("title")
     .text(function(d) { return d.name + "\n" + format(d.value); });

     node.append("text")
     .attr("x", -6)
     .attr("y", function(d) { return d.dy / 2; })
     .attr("dy", ".35em")
     .attr("text-anchor", "end")
     .attr("transform", null)
     .text(function(d) { return d.name; })
     .filter(function(d) { return d.x < width / 2; })
     .attr("x", 6 + sankey.nodeWidth())
     .attr("text-anchor", "start");

     function dragmove(d) {
      d3.select(this).attr("transform", "translate(" + d.x + "," + (d.y = Math.max(0, Math.min(height - d.dy, d3.event.y))) + ")");
      sankey.relayout();
      link.attr("d", path);
     }
    });







    var sankey = {},
    nodeWidth = 24,
    nodePadding = 8,
    size = [1, 1],
    nodes = [],
    links = [];

    sankey.nodeWidth = function(_) {
     if (!arguments.length) return nodeWidth;
     nodeWidth = +_;
     return sankey;
    };

    sankey.nodePadding = function(_) {
     if (!arguments.length) return nodePadding;
     nodePadding = +_;
     return sankey;
    };

    sankey.nodes = function(_) {
     if (!arguments.length) return nodes;
     nodes = _;
     return sankey;
    };

    sankey.links = function(_) {
     if (!arguments.length) return links;
     links = _;
     return sankey;
    };

    sankey.size = function(_) {
     if (!arguments.length) return size;
     size = _;
     return sankey;
    };

    sankey.layout = function(iterations) {
     computeNodeLinks();
     computeNodeValues();
     computeNodeBreadths();
     computeNodeDepths(iterations);
     computeLinkDepths();
     return sankey;
    };

    sankey.relayout = function() {
     computeLinkDepths();
     return sankey;
    };

    sankey.link = function() {
     var curvature = .5;

     function link(d) {
      var x0 = d.source.x + d.source.dx,
      x1 = d.target.x,
      xi = d3.interpolateNumber(x0, x1),
      x2 = xi(curvature),
      x3 = xi(1 - curvature),
      y0 = d.source.y + d.sy + d.dy / 2,
      y1 = d.target.y + d.ty + d.dy / 2;
      return "M" + x0 + "," + y0
      + "C" + x2 + "," + y0
      + " " + x3 + "," + y1
      + " " + x1 + "," + y1;
     }

     link.curvature = function(_) {
      if (!arguments.length) return curvature;
      curvature = +_;
      return link;
     };

     return link;
    };

    // Populate the sourceLinks and targetLinks for each node.
    // Also, if the source and target are not objects, assume they are indices.
    function computeNodeLinks() {
     nodes.forEach(function(node) {
      node.sourceLinks = [];
      node.targetLinks = [];
     });
     links.forEach(function(link) {
      var source = link.source,
      target = link.target;
      if (typeof source === "number") source = link.source = nodes[link.source];
      if (typeof target === "number") target = link.target = nodes[link.target];
      source.sourceLinks.push(link);
      target.targetLinks.push(link);
     });
    }

    // Compute the value (size) of each node by summing the associated links.
    function computeNodeValues() {
     nodes.forEach(function(node) {
      node.value = Math.max(
       d3.sum(node.sourceLinks, value),
       d3.sum(node.targetLinks, value)
      );
     });
    }

    // Iteratively assign the breadth (x-position) for each node.
    // Nodes are assigned the maximum breadth of incoming neighbors plus one;
    // nodes with no incoming links are assigned breadth zero, while
    // nodes with no outgoing links are assigned the maximum breadth.
    function computeNodeBreadths() {
     var remainingNodes = nodes,
     nextNodes,
     x = 0;

     while (remainingNodes.length) {
      nextNodes = [];
      remainingNodes.forEach(function(node) {
       node.x = x;
       node.dx = nodeWidth;
       node.sourceLinks.forEach(function(link) {
        nextNodes.push(link.target);
       });
      });
      remainingNodes = nextNodes;
      ++x;
     }

     //
     moveSinksRight(x);
     scaleNodeBreadths((width - nodeWidth) / (x - 1));
    }

    function moveSourcesRight() {
     nodes.forEach(function(node) {
      if (!node.targetLinks.length) {
       node.x = d3.min(node.sourceLinks, function(d) { return d.target.x; }) - 1;
      }
     });
    }

    function moveSinksRight(x) {
     nodes.forEach(function(node) {
      if (!node.sourceLinks.length) {
       node.x = x - 1;
      }
     });
    }

    function scaleNodeBreadths(kx) {
     nodes.forEach(function(node) {
      node.x *= kx;
     });
    }

    function computeNodeDepths(iterations) {
     var nodesByBreadth = d3.nest()
     .key(function(d) { return d.x; })
     .sortKeys(d3.ascending)
     .entries(nodes)
     .map(function(d) { return d.values; });

     //
     initializeNodeDepth();
     resolveCollisions();
     for (var alpha = 1; iterations > 0; --iterations) {
      relaxRightToLeft(alpha *= .99);
      resolveCollisions();
      relaxLeftToRight(alpha);
      resolveCollisions();
     }

     function initializeNodeDepth() {
      var ky = d3.min(nodesByBreadth, function(nodes) {
       return (size[1] - (nodes.length - 1) * nodePadding) / d3.sum(nodes, value);
      });

      nodesByBreadth.forEach(function(nodes) {
       nodes.forEach(function(node, i) {
        node.y = i;
        node.dy = node.value * ky;
       });
      });

      links.forEach(function(link) {
       link.dy = link.value * ky;
      });
     }

     function relaxLeftToRight(alpha) {
      nodesByBreadth.forEach(function(nodes, breadth) {
       nodes.forEach(function(node) {
        if (node.targetLinks.length) {
         var y = d3.sum(node.targetLinks, weightedSource) / d3.sum(node.targetLinks, value);
         node.y += (y - center(node)) * alpha;
        }
       });
      });

      function weightedSource(link) {
       return center(link.source) * link.value;
      }
     }

     function relaxRightToLeft(alpha) {
      nodesByBreadth.slice().reverse().forEach(function(nodes) {
       nodes.forEach(function(node) {
        if (node.sourceLinks.length) {
         var y = d3.sum(node.sourceLinks, weightedTarget) / d3.sum(node.sourceLinks, value);
         node.y += (y - center(node)) * alpha;
        }
       });
      });

      function weightedTarget(link) {
       return center(link.target) * link.value;
      }
     }

     function resolveCollisions() {
      nodesByBreadth.forEach(function(nodes) {
       var node,
       dy,
       y0 = 0,
       n = nodes.length,
       i;

       // Push any overlapping nodes down.
       nodes.sort(ascendingDepth);
       for (i = 0; i < n; ++i) {
        node = nodes[i];
        dy = y0 - node.y;
        if (dy > 0) node.y += dy;
        y0 = node.y + node.dy + nodePadding;
       }

       // If the bottommost node goes outside the bounds, push it back up.
       dy = y0 - nodePadding - size[1];
       if (dy > 0) {
        y0 = node.y -= dy;

        // Push any overlapping nodes back up.
        for (i = n - 2; i >= 0; --i) {
         node = nodes[i];
         dy = node.y + node.dy + nodePadding - y0;
         if (dy > 0) node.y -= dy;
         y0 = node.y;
        }
       }
      });
     }

     function ascendingDepth(a, b) {
      return a.y - b.y;
     }
    }

    function computeLinkDepths() {
     nodes.forEach(function(node) {
      node.sourceLinks.sort(ascendingTargetDepth);
      node.targetLinks.sort(ascendingSourceDepth);
     });
     nodes.forEach(function(node) {
      var sy = 0, ty = 0;
      node.sourceLinks.forEach(function(link) {
       link.sy = sy;
       sy += link.dy;
      });
      node.targetLinks.forEach(function(link) {
       link.ty = ty;
       ty += link.dy;
      });
     });

     function ascendingSourceDepth(a, b) {
      return a.source.y - b.source.y;
     }

     function ascendingTargetDepth(a, b) {
      return a.target.y - b.target.y;
     }
    }

    function center(node) {
     return node.y + node.dy / 2;
    }

    function value(link) {
     return link.value;
    }

    return sankey;
   });
  }
 }
}
angular
.module('vdb-d3')
.directive('d3Sankey', d3Sankey);

function d3Sunburst(d3v3Service,search,color_hash,category20a) {
 return {
  restrict: 'AE',
  scope: {
   data: '='
  },
  link: function(scope, element, attrs) {
   d3v3Service.d3().then(function(d3) {

    var width = 1000/2,
    height = 850/2,
    radius = Math.min(width, height) / 2;

    var x = d3.scale.linear()
    .range([0, 2 * Math.PI]);

    var y = d3.scale.sqrt()
    .range([0, radius]);

    var color = d3.scale.ordinal()
    .range(category20a());

    //Build the initial svg here.
    var svg = d3.select("d3-sunburst").append("svg")
    .attr("class", "sunburst")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + (height / 2 + 10) + ")");

    //https://github.com/d3/d3-3.x-api-reference/blob/master/Partition-Layout.md

    var partition = d3.layout.partition()
    .sort(null)
    .value(function(d) { return 1; });

    //The arc function
    var arc = d3.svg.arc()
    .startAngle(function(d) {
     return Math.max(0, Math.min(2 * Math.PI, x(d.x)));
    })
    .endAngle(function(d) {
     return Math.max(0, Math.min(2 * Math.PI, x(d.x + d.dx)));
    })
    .innerRadius(function(d) {
     return Math.max(0, y(d.y));
    })
    .outerRadius(function(d) {
     return Math.max(0, y(d.y + d.dy));
    });

    // Keep track of the node that is currently being displayed as the root.
    //I think this is main.
    var node;

    d3.json("/data/flare.json", function(error, root) {
     node = root;

     var g = svg.datum(root).selectAll("g")
     .data(partition.nodes)
     .enter().append("g")
     .attr("class", "opacity");

     var path = g.append("path")
     // .data(partition.nodes)
     // .enter().append("path")
     .attr("d", arc)
     .attr("class", function(d) {
      return d.level;
     })
     .style("fill", function(d) {
      //if d has chilndre, return d.name, else return  d.parent.name
      //Then name computes a color.
      return color((d.children ? d : d.parent).name);
     })
     .on("click", click)
     .each(stash);

     var text = g.append("svg:title")
     // .attr("transform", function(d) { return "rotate(" + computeTextRotation(d) + ")"; })
     // .attr("x", function(d) { return y(d.y); })
     // .attr("dx", "6") // margin
     // .attr("dy", ".35em") // vertical-align
     .text(function(d) { return d.name; });

     // svg.append("svg:text")
     // // .attr("class", "aster-score")
     // .attr("dy", ".35em")
     // .attr("text-anchor", "middle") // text-align: right
     // .text("89.54%");

     d3.selectAll("input").on("change", function change() {
      var value = this.value === "count"
      ? function() { return 1; }
      : function(d) { return d.size; };

      path
      .data(partition.value(value).nodes)
      .transition()
      .duration(1000)
      .attrTween("d", arcTweenData);
     });

     function click(d) {
      node = d;
      path.transition()
      .duration(1000)
      .attrTween("d", arcTweenZoom(d));
     }
    });
    //End main

    d3.select(self.frameElement).style("height", height + "px");

    // Setup for switching data: stash the old values for transition.
    function stash(d) {
     d.x0 = d.x;
     d.dx0 = d.dx;
    }
    function computeTextRotation(d) {
     return (x(d.x + d.dx / 2) - Math.PI / 2) / Math.PI * 180;
    }
    // When switching data: interpolate the arcs in data space.
    function arcTweenData(a, i) {
     var oi = d3.interpolate({x: a.x0, dx: a.dx0}, a);
     function tween(t) {
      var b = oi(t);
      a.x0 = b.x;
      a.dx0 = b.dx;
      return arc(b);
     }
     if (i == 0) {
      // If we are on the first arc, adjust the x domain to match the root node
      // at the current zoom level. (We only need to do this once.)
      var xd = d3.interpolate(x.domain(), [node.x, node.x + node.dx]);
      return function(t) {
       x.domain(xd(t));
       return tween(t);
      };
     } else {
      return tween;
     }
    }//End arctweendata function

    // When zooming: interpolate the scales.
    function arcTweenZoom(d) {
     var xd = d3.interpolate(x.domain(), [d.x, d.x + d.dx]),
     yd = d3.interpolate(y.domain(), [d.y, 1]),
     yr = d3.interpolate(y.range(), [d.y ? 20 : 0, radius]);
     return function(d, i) {
      return i
      ? function(t) { return arc(d); }
      : function(t) { x.domain(xd(t)); y.domain(yd(t)).range(yr(t)); return arc(d); };
     };
    }

   });
  }
 }
}


angular
.module('vdb-d3')
.directive('d3Sunburst', d3Sunburst);

function d3Tree($window, $timeout, d3v3Service) {
 return {
  restrict: 'AE',
  link: function(scope, element, attrs) {
   d3v3Service.d3().then(function(d3) {

    /* D3 Tree */
    /* Copyright 2013 Peter Cook (@prcweb); Licensed MIT */
    var branches = [];
    var seed = {i: 0, x: 420, y: 600, a: 0, l: 130, d:0}; // a = angle, l = length, d = depth
    var da = 0.5; // Angle delta
    var dl = 0.8; // Length delta (factor)
    var ar = 0.9; // Randomness
    var maxDepth = 11;

    // Tree creation functions
    function branch(b) {
    	var end = endPt(b), daR, newB;

    	branches.push(b);

    	if (b.d === maxDepth)
    		return;

    	// Left branch
    	daR = ar * Math.random() - ar * 0.5;
    	newB = {
    		i: branches.length,
    		x: end.x,
    		y: end.y,
    		a: b.a - da + daR,
    		l: b.l * dl,
    		d: b.d + 1,
    		parent: b.i
    	};
    	branch(newB);

    	// Right branch
    	daR = ar * Math.random() - ar * 0.5;
    	newB = {
    		i: branches.length,
    		x: end.x,
    		y: end.y,
    		a: b.a + da + daR,
    		l: b.l * dl,
    		d: b.d + 1,
    		parent: b.i
    	};
    	branch(newB);
    }

    function regenerate(initialise) {
    	branches = [];
    	branch(seed);
    	initialise ? create() : update();
    }

    function endPt(b) {
    	// Return endpoint of branch
    	var x = b.x + b.l * Math.sin( b.a );
    	var y = b.y - b.l * Math.cos( b.a );
    	return {x: x, y: y};
    }
    // D3 functions
    function x1(d) {return d.x;}
    function y1(d) {return d.y;}
    function x2(d) {return endPt(d).x;}
    function y2(d) {return endPt(d).y;}
    function highlightParents(d) {
    	var colour = d3.event.type === 'mouseover' ? '#00a0e9' : '#5fb611';
    	var depth = d.d;
    	for(var i = 0; i <= depth; i++) {
    		d3.select('#id-'+parseInt(d.i)).style('stroke', colour);
    		d = branches[d.parent];
    	}
    }

    function create() {
    	d3.select("d3-tree")
      .append("svg")
    		.selectAll('line')
    		.data(branches)
    		.enter()
    		.append('line')
    		.attr('x1', x1)
    		.attr('y1', y1)
    		.attr('x2', x2)
    		.attr('y2', y2)
    		.style('stroke-width', function(d) {
       return parseInt(maxDepth + 1 - d.d) + 'px';
      })
    		.attr('id', function(d) {
       return 'id-'+d.i;
      })
    		.on('mouseover', highlightParents)
    		.on('mouseout', highlightParents);
    }

    function update() {
    	d3.select('svg')
    		.selectAll('line')
    		.data(branches)
    		.transition()
    		.attr('x1', x1)
    		.attr('y1', y1)
    		.attr('x2', x2)
    		.attr('y2', y2);
    }

    d3.selectAll('.regenerate')
    	.on('click', regenerate);

    regenerate(true);

   });
  }
 }
}
angular
.module('vdb-d3')
.directive('d3Tree', d3Tree);

angular.module('vdb-d3')
.factory('treeService', function($document, $q, $rootScope){

  var d = $q.defer();
  function onScriptLoad() {
   // Load client in the browser
   $rootScope.$apply(function() { d.resolve(window.d3); });
  }

  var scriptTag = $document[0].createElement('script');
  scriptTag.type = 'text/javascript';
  scriptTag.async = true;
  scriptTag.src = 'directives/d3/tree.js';
  scriptTag.onreadystatechange = function () {
   if (this.readyState == 'complete') onScriptLoad();
  };

  scriptTag.onload = onScriptLoad;

  var s = $document[0].getElementsByTagName('body')[0];
  s.appendChild(scriptTag);

 return {
  tree: function() {
   return d.promise;
  }
 };
});

(function() {
 // 'use strict';

 angular
 .module('vdb-main')
 .filter('magnitude', magnitude);

 function magnitude() {
  return magnitudeFilter

  ///////////

  function magnitudeFilter(v) {
   if(v<1) return (v*100).toFixed(2).toString()  + "%";
   if(v < 1000)  return v.toFixed(2);
   var exp = parseInt(Math.log(v) / Math.log(1000));
   return ((v / Math.pow(1000, exp)).toFixed(1)+"KMBTPE".charAt(exp-1));
  }
 }
})();

(function() {
 // 'use strict';

 angular
 .module('vdb-main')
 .filter('trust', [
    '$sce',
    function($sce) {
      return function(text, type) {
        return $sce.trustAs(type || 'html', text);
      }
    }
  ])
;


})();

(function() {
 // 'use strict';

 angular
 .module('vdb-main')
 .filter('removeUnderscores', [function() {
  return function(string) {
       if (!angular.isString(string)) {
           return string;
       }
       return string.replace(/_/g, ' ');
   };
 }]);

})();

function iboxTools($timeout) {
 return {
  restrict: 'AE',
  scope: true,
  templateUrl: 'vdb-ui/ibox-tools/ibox_tools.html',
  controller: function ($scope, $element) {

   $scope.showhide = function () {
    var ibox = $element.closest('div.ibox');
    var icon = $element.find('i:first');
    var content = ibox.find('div.ibox-content');
    content.slideToggle(200);
    // Toggle icon from up to down
    icon.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
    ibox.toggleClass('').toggleClass('border-bottom');
    $timeout(function () {
     ibox.resize();
     ibox.find('[id^=map-]').resize();
    }, 50);
   },

   $scope.showhelp = function () {
    var ibox = $element.closest('div.ibox');
    var content = ibox.find('div.ibox-content');
    var data=content.find('#data');
    var help = content.find('#help');
    var settings=content.find('#settings');

    // data.slideToggle(200, function() {
    //  help.toggleClass('hidden');
    // });
    data.toggleClass('hidden');
    help.toggleClass('hidden');
    // settings.toggleClass('hidden');
   },

   $scope.showsettings = function () {
    var ibox = $element.closest('div.ibox');
    var content = ibox.find('div.ibox-content');

    var data=content.find('#data');
    var help = content.find('#help');
    var settings=content.find('#settings');

    data.toggleClass('hidden');
    // help.toggleClass('hidden');
    settings.toggleClass('hidden');

    $timeout(function () {
     ibox.resize();
     ibox.find('[id^=map-]').resize();
    }, 50);
   },
   // Function for close ibox
   $scope.closebox = function () {
    var ibox = $element.closest('div.ibox');
    ibox.remove();
   };
  }
 };
}
angular
.module('vdb-ui')
.directive('iboxTools', iboxTools);


function minimizeFooter($timeout) {
 return {
  restrict: 'E',
  templateUrl: 'vdb-ui/minimize-footer/content.html',
  controller: function ($scope, $element) {
   $scope.showhide = function () {
    var div = angular.element( '#footer' );
    var icon = $element.find('i:first');
    // var content = ibox.find('div.ibox-content');
    div.slideToggle(200);
    // Toggle icon from up to down
    icon.toggleClass('fa-chevron-down').toggleClass('fa-chevron-up');
    // ibox.toggleClass('').toggleClass('border-bottom');
    $timeout(function () {
     div.resize();
     div.find('[id^=map-]').resize();
    }, 50);
   };
  }
 };
}

angular
.module('vdb-ui')
.directive('minimizeFooter', minimizeFooter);


function minimizeSidebar($timeout) {
 return {
  restrict: 'A',
  template: '<a class="navbar-minimize minimize-styl-2 btn btn-primary " href="" ng-click="minimize()"><i class="fa fa-bars"></i></a>',
  controller: function ($scope, $element) {
   $scope.minimize = function () {
    $("body").toggleClass("mini-navbar");
    if (!$('body').hasClass('mini-navbar') || $('body').hasClass('body-small')) {
     // Hide menu in order to smoothly turn on when maximize menu
     $('#side-menu').hide();
     // For smoothly turn on menu
     setTimeout(
      function () {
       $('#side-menu').fadeIn(500);
      }, 100);
     } else if ($('body').hasClass('fixed-sidebar')){
      $('#side-menu').hide();
      setTimeout(
       function () {
        $('#side-menu').fadeIn(500);
       }, 300);
      } else {
       // Remove all inline style from jquery fadeIn function to reset menu state
       $('#side-menu').removeAttr('style');
      }
     };
    }
   };
  }
  angular
  .module('vdb-ui')
  .directive('minimizeSidebar', minimizeSidebar);

function sideNavigation() {
 return {
  restrict: 'A',
  link: function(scope, element) {
   // Call the metsiMenu plugin and plug it to sidebar navigation
   angular.element(document).ready(function() {
    setTimeout(function() {
     element.metisMenu({
     });
    },800);
   });
   // setTimeout(function() {
   //  element.metisMenu({
   //  });
   // },3000);
   // element(document).ready(function() {
   //  element.metisMenu();
   // });
  }
 };
}
angular
.module('vdb-ui')
.directive('sideNavigation', sideNavigation);

function vdbIconCounter($sce) {
 return {
  restrict: 'E',
  templateUrl: 'vdb-ui/vdb-icon-counter/content.html',
  scope: {
   title: '@',
   values: '=',
  },
 };
}

angular
.module('vdb-ui')
.directive('vdbIconCounter', vdbIconCounter);

(function() {
 //'use-strict';

 angular
 .module('vdb-ui')
 .directive('vdbLogin', vdbLogin);

 function vdbLogin() {
  const directive = {
   restrict: 'EA',
   templateUrl: ajaxInfo.template_directory + 'assets/js/ui/vdb-login/content.html',
   link: link,
   controller: controller,
   bindToController: true
  };

  return directive;

  ///////////

  function link(scope, el, attr, ctrl) {

  }
  function controller(user,$scope,$state) {
   const self = this;
   activate();

   function activate() {
    $scope.formData = {
     'username': '',
     'password': '',
    };

   }
   $scope.submit = function() {
    $scope.submitted = !$scope.submitted;
    user.login($scope.formData,function(response) {
     if(response === true) {
      $scope.modalIsOpen ? $scope.modalInstance.close(true) : null;
      $scope.modalInstance.dismiss(true);
      $state.go('home');
     } else {
      $scope.submitted = !$scope.submitted;
     }
    });
   };


  }

 }

})();

(function() {
 //'use-strict';
 /**
  * @ngdoc directive
  * @name vdb-privacy
  * @module vdb-ui
  * @restrict EA
  * @description
  *
  * The `vdb-privacy` directive description.
  *
  */
 angular
 .module('vdb-ui')
 .directive('vdbPrivacy', vdbPrivacy);

 function vdbPrivacy() {
  const directive = {
   restrict: 'EA',
   templateUrl: 'vdb-ui/vdb-privacy/content.html',
   scope: {},
   link: link,
   // controller: controller
   // controller: controller,
   // controllerAs: 'self',
   // controllerAs: 'vm',
   // bindToController: true
  };

  return directive;

  ///////////

  function link(scope, el, attr, ctrl) {

  }
  function controller($scope) {


  }

 }

})();

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

(function() {
 //'use-strict';

 angular
 .module('vdb-ui')
 .directive('vdbRegistration', vdbRegistration);

 function vdbRegistration() {
  const directive = {
   restrict: 'EA',
   templateUrl: 'vdb-ui/vdb-registration/content.html',
   link: link,
   controller: controller,
   bindToController: true
  };

  return directive;

  ///////////

  function link(scope, el, attr, ctrl) {}

  function controller(user,$scope,$state) {
   console.log("Starting new reg controller");
   const self = this;

   activate();

   function activate() {

    const self = this;

    $scope.regParams = {
     userStrong: false,
     passStrength: '',
     mode: 'entropy',
     goal: 96,
     passMatch: false,
     validemail: false
    };

    $scope.regData = {
     username: '',
     password: '',
     confirm:'',
     firstname:'',
     lastname: '',
     email: '',
     company: '',
     terms: false
    };

    $scope.submit = function() {

     $scope.submitted = !$scope.submitted;

     //Now we send this stuff to the server to see if we can register the user.
     //We simplified the code to simply have them check a box to read the terms
     user.register($scope.regData,function(response) {

      if(response.company && response.id && response.token) {
       $scope.modalInstance.close();
       $scope.submitted = !$scope.submitted;

       user.getUser(function(response) {
        response.Account ? $state.go('home') : $state.go('register');
       });

      }

      else if(!response.company && response.id && response.token){
       //We did not create a company but we created a user
       //So we do not need to create a new resource of type index.
       //Log them in, but we need to alert the admin to subscrivve them to services
       $scope.modalInstance.close();
       $scope.submitted = !$scope.submitted;

       user.getUser(function(response) {
        response.Account ? $state.go('home') : $state.go('register');
       });

      }

      else if(response.company && !response.id) {
       //this should not happen. We should not create a company and not a user
      }

      else {
       //The company existed and so did the user.
       //We need to avoid trolls here.
       //Present an error message to contact admin.
       $scope.modalInstance.close();
       $state.go('register');
      }

     });//End User.register
    };
   }
  }
 }
})();

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

(function() {
    //'use-strict';

    angular
        .module('vdb-ui')
        .directive('vdbTabs', vdbTabs);

    function vdbTabs() {
        const directive = {
            restrict: 'EA',
            templateUrl: 'vdb-ui/vdb-tabs/content.html',

            link: link,
            // controller: controller,
            // controllerAs: 'self',
            // controllerAs: 'vm',
            // bindToController: true
        };

        return directive;

        ///////////

        function link(scope, el, attr, ctrl) {

        }

    }

})();

(function() {
 //'use-strict';
 /**
  * @ngdoc directive
  * @name vdb-terms
  * @module vdb-ui
  * @restrict EA
  * @description
  *
  * The `vdb-terms` directive description.
  *
  */
 angular
 .module('vdb-ui')
 .directive('vdbTerms', vdbTerms);


 function vdbTerms() {
  const directive = {
   restrict: 'EA',
   templateUrl: 'vdb-ui/vdb-terms/content.html',
   scope: {},
   link: link,
   // controller: controller
   // controller: controller,
   // controllerAs: 'self',
   // controllerAs: 'vm',
   // bindToController: true
  };

  return directive;

  ///////////

  function link(scope, el, attr, ctrl) {

  }
  function controller($scope) {


  }

 }

})();

function vdbTools($timeout) {
  return {
    restrict: 'AE',
    scope: true,
    templateUrl: 'components/vdb-tools/vdbTools.html',
   };
}
angular
    .module('vdb-ui')
    .directive('vdbTools', vdbTools);

(function() {
 'use strict';

 /**
 * vdb-widget is a small widget that we use to show data
 *
 * @ngdoc directive
 * @name vdbWidget
 * @module vdb-ui
 * @restrict EA
 * @description vdb-widget is a small widget that we use to show data
 *
 *
 */
 angular
 .module('vdb-ui')
 .directive('vdbWidget', vdbWidget);

 function vdbWidget() {
  const directive = {
   restrict: 'EA',
   templateUrl: 'vdb-ui/vdb-widget/content.html',
   //This next line isolates the scope to this directove only
   scope: {
    data: '=?',
    demo: '=?'
   },
   link: link,
   controller: Controller,
   controllerAs: 'self',
   // bindToController: true
  };

  return directive;

  function link(scope, el, attr, ctrl) {
  }

 }

 Controller.$inject = ['$scope','color_kv_array','utilitiesService','magnitudeFilter','$timeout'];

 function Controller($scope,color_kv_array,utilitiesService,magnitudeFilter,$timeout) {
  'ngInject';
  const self = this;
  self.us = utilitiesService;
  $scope.mf = magnitudeFilter;

  self.activate = function() {
   //We only run activate if no data is passed in on scope.
   if($scope.demo) {
    self.magnitude = 1000000;

    //Randomly pick a background color.
    // self.background = colors.red;
    self.background = Object.keys( color_kv_array[Math.floor(Math.random() * color_kv_array.length)])[0];
    if(utilitiesService.flip()) {
     self.previous = Math.random();
     self.value = self.current = Math.random();
     self.trend = utilitiesService.trend(self.previous,self.current);
    } else {
     self.previous = Math.random()* self.magnitude;
     self.value = self.current = Math.random()* self.magnitude;
     self.trend = utilitiesService.trend(self.previous,self.current);
    }

    $scope.data = {
     title: "vdb-widget",
     background: self.background,
     help: "This is an example of the vdb-widget. The help is shown on mouseover.",
     value: self.value,
     icon: "fa-info-circle",
     trend: "fa-chevron-" + self.trend,
     filterTemplate: null
    };
   }

  }

  self.activate();
 }
})();

function admin($stateProvider, $urlRouterProvider) {

 $urlRouterProvider
 // .when('/admin','/admin/docs');

 $stateProvider
 .state('admin', {
  url: '/admin',
  abstract: false,
  data: {
   pageTitle: 'Adminstration',
  },
  views: {
   'header': {
    template: '<vdb-header />',
   },
   'leftbar': {
    template: '<vdb-left-menu-accordian />',
    controller: controller
   },
   'topcontent' : {
    template: '<div />',
   },
   'content' : {
    templateUrl: 'views/admin/content.html',
   },
   'bottomcontent' : {
   },
   'rightbar': {
    template: '<div />',
   },
   'footer': {
    // template: '<vdb-footer />'
   }
  }
});

function controller($scope,$rootScope) {
 $scope.route = 'admin.pages';
 $scope.toggleObject = {item: -1};
 $scope.listGroup = [
  {
    id: "Cluster Admin",
    items: [
     {
      active:true,
      slug: 'cluster',
      icon: "fa fa-adjust",
      title: "Cluster Status"
     }
    ]
  },
  {
    id: "User Mgmt"
  },
  {
    id: "Access Mgmt"
  }
 ];
}

}
angular
.module('vdb')
.config(admin);

function adminPages($stateProvider, $urlRouterProvider) {

 $stateProvider
 .state('admin.pages', {
  onEnter: function(){
  },
  url: '/:slug',
  data: {
   pageTitle: 'Adminstration Pages',
  },
  views: {
   'topcontent@' : {
    templateUrl: function($stateParams) {
     return 'views/admin/accordian-pages/' +
     $stateParams.slug + '.html';
    },
    // controller: clusterCtrl,
    // function($stateParams) {
    //  console.log($stateParams.slug + 'Ctrl');
    //  return $stateParams.slug + 'Ctrl';
    // }
   },
  }
 });
}
angular
.module('vdb')
.config(adminPages);

function home($stateProvider, $urlRouterProvider) {

  $urlRouterProvider
  .when('','/')
  .when('/home', '/');
  // .otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    data: {
      pageTitle: 'Videbligo is Visualization',
    },
    views: {
      'header': {
        template: '<vdb-header />' ,
        //controller is in the directive
      },
      'leftbar': {
        //controller is in the directive
      },
      'topcontent': {
        templateUrl: ajaxInfo.template_directory + 'views/home/slider.html',
        controller: controller
      },
      'content': {
        templateUrl: ajaxInfo.template_directory + 'views/home/content.html',
        controller: contentController
      },
      'bottomcontent': {
      },
      'footer': {
        template: '<vdb-footer />' ,
        //controller is in the directive
      },
    }
  });

  function contentController($scope,posts) {
    posts.projects(function(r) {
      $scope.posts = r;
    });
  }
  function controller($scope) {
    $scope.myInterval = 5000;
    $scope.active = 0;
  }
}


angular
.module('vdb')
.config(home);

function resourcesCtrl($scope) {
  }
angular
.module('vdb')
.controller('resourcesCtrl',resourcesCtrl);

function resources($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home.resources',	{
    abstract: false,
    url: 'resources',
    data: {
      pageTitle: 'Resources',
    },
  });
}
angular
.module('vdb')
.config(resources);

function serviceCtrl($scope,$rootScope) {
 $rootScope.$on('unathorized', function() {
  $scope.$broadcast('unathorized');
 });
}
angular
.module('vdb')
.controller('serviceCtrl',serviceCtrl);

function service($stateProvider, $urlRouterProvider) {

 $urlRouterProvider
 .when('/service','/service/cloud');

 $stateProvider
 .state('service', {
  url: '/service',
  abstract: false,
  data: {
   pageTitle: 'Service',
   bodyClasses: 'dark'
  },
  views: {
   'header': {
    template: '<vdb-header />',
   },
   'leftbar': {
    template: '<div />',
   },
   'topcontent' : {
    template: '<div />',
   },
   'content' : {
    template: '<div />',
    controller: 'serviceCtrl'
   },
   'bottomcontent' : {
    template: '<div />',
   },
   'rightbar': {
    template: '<div />',
   },
   'footer': {
    // template: '<vdb-footer />'
   }
  }

 });

}
angular
.module('vdb')
.config(service);

function services($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home.services',	{
    abstract: false,
    url: 'services',
    data: {
      pageTitle: 'Services',
    },
    views: {
      'topcontent@': {
        templateUrl:ajaxInfo.template_directory + 'views/home/services/topcontent.html',
        controller: top
      },
      'content@' : {
        templateUrl:ajaxInfo.template_directory + 'views/home/services/middlecontent.html',
      },
      'bottomcontent@': {
        templateUrl:ajaxInfo.template_directory + 'views/home/services/bottomcontent.html',
      }
    }

  });

  function top($scope,posts) {
    console.log("Top controller started");
  }

}
angular
.module('vdb')
.config(services);

function accessbottomCtrl($scope) {
    console.log("Default Controller for accessbottomCtrl has started");
  }
angular
.module('vdb')
.controller('accessbottomCtrl',accessbottomCtrl);

(function() {
 'use strict';
 angular
 .module('vdb')
 .controller('accessmiddleCtrl',accessmiddleCtrl);

 accessmiddleCtrl.$inject = ['$scope','admin'];

 function accessmiddleCtrl($scope,admin) {
  console.log("Default Controller for accessmiddleCtrl has started");

  $scope.getCompanies = function() {
   admin.dataService('companies', function(response) {
    $scope.content = response.result;
   });
  };

 }
})();

  function accessroute($stateProvider, $urlRouterProvider) {
     $stateProvider
     .state('admin.access', {
       url: '/acl',
       abstract: false,
       data: {
        pageTitle: 'Access List Management',
       },
       views: {
       'topcontent@': {
        templateUrl: 'views/admin/access/topcontent.html',
        controller: 'accesstopCtrl'

       },
       'content@' : {
         templateUrl: 'views/admin/access/middlecontent.html',
         controller: 'accessmiddleCtrl'
        },
        'bottomcontent@': {
         templateUrl: 'views/admin/access/bottomcontent.html',
         controller: 'accessbottomCtrl'
        },
     }
   });
  }
  angular
  .module('vdb')
  .config(accessroute);

(function() {
 'use strict';
 angular
 .module('vdb')
 .controller('accesstopCtrl',accesstopCtrl);

 accesstopCtrl.$inject = ['$scope','admin'];

 function accesstopCtrl($scope,admin) {
  console.log("Default Controller for accesstopCtrl has started");

  $scope.getRoles = function() {
   admin.dataService('roles', function(response) {
    $scope.content = response.result;
   });
  };
  $scope.getDocuments = function() {
   admin.dataService('documents', function(response) {
    $scope.content = response.result;
   });
  };
  $scope.getServices = function() {
   admin.dataService('services', function(response) {
    $scope.content = response.result;
   });
  };
  $scope.getResources = function() {
   admin.dataService('resources', function(response) {
    $scope.content = response.result;
   });
  };
  $scope.getPermissions = function() {
   admin.dataService('permissions', function(response) {
    $scope.content = response.result;
   });
  };
 }
})();

(function() {
 'use strict';

 angular
 .module('vdb')
 .controller('clusterCtrl',clusterCtrl);

 clusterCtrl.$inject=['$scope','search', '$interval','$resource'];

 function clusterCtrl($scope,search,$interval,$resource) {
  console.log("Starting cluster control");
  /* jshint validthis: true */
  const self=this;

  self.search = search;

  self.initialize = function() {
   self.postParams = {};
   self.promise;

   self.url = '/api/cluster/:verb';
   self.paramDefaults = {};
   self.options = {
    "cancellable": true
   };
   self.actions = {
    'status': {
     'method': 'GET',
     'params': { 'verb': 'status' }
    },
    'performance': {
     'method': 'GET',
     'params': { 'verb': 'performance' }
    }
   };
   self.query = $resource(self.url,self.paramDefaults,self.actions,self.options);
  }

  self.execute = function() {
   self.status = self.query.status(function(response) {
    $scope.status = response;
   });
   self.performance = self.query.performance(function(response) {
    $scope.performance = response;
   });
  }

  self.initialize();
  self.execute();

  self.promise = $interval(function() {
   self.execute();
  },self.search.getRefreshKey());

  $scope.$on('$destroy', function() {
   $interval.cancel(self.promise);
  });

  $scope.$on('unathorized', function() {
   self.status.$cancelRequest();
   self.performance.$cancelRequest();
   $interval.cancel(self.promise);
  });



 }

})();

// function adminblogsCtrl($scope,$templateCache) {
//  console.log("Default Controller for adminblogsCtrl has started");
//
//  $scope.template = 'app/views/admin/blogs/template.html';
//  $scope.options = {
//   height: 250,
//   focus: true,
//   airMode: false,
//   toolbar: [
//    ['edit',['undo','redo'],
//    ['headline', ['style'],
//    ['style', ['bold', 'italic', 'underline', 'superscript', 'subscript', 'strikethrough', 'clear'],
//    ['fontface', ['fontname'],
//    ['textsize', ['fontsize'],
//    ['fontclr', ['color'],
//    ['alignment', ['ul', 'ol', 'paragraph', 'lineheight'],
//    ['height', ['height'],
//    ['table', ['table'],
//    ['insert', ['link','picture','video','hr'],
//    ['view', ['fullscreen', 'codeview'],
//    ['help', ['help']
//   ]
//  };
// }
//
// angular
// .module('vdb')
// .controller('adminblogsCtrl',adminblogsCtrl);

  function adminblogs($stateProvider, $urlRouterProvider) {
     $stateProvider
     .state('admin.blogs', {
       url: '/blogs',
       abstract: false,
       data: {
        pageTitle: 'Blog Publishing',
       },
       views: {

       'content@' : {
         templateUrl: 'views/admin/blogs/content.html',
        },
       
     }
   });
  }
  angular
  .module('vdb')
  .config(adminblogs);

(function() {
 'use strict';

 angular
 .module('vdb')
 .controller('clusterMiddleCtrl',clusterMiddleCtrl);

 clusterMiddleCtrl.$inject=['$scope','search', '$interval','$resource'];

 function clusterMiddleCtrl($scope,search,$interval,$resource) {
  const self=this;

  self.search = search;

  self.initialize = function() {
   self.postParams = {};
   self.promise;

   self.url = '/api/cluster/:verb';
   self.paramDefaults = {};
   self.options = {
    "cancellable": true
   };
   self.actions = {
    'stats': {
     'method': 'GET',
     'params': { 'verb': 'stats' }
    }
   };

   self.query = $resource(self.url,self.paramDefaults,self.actions,self.options);
  }

  self.execute = function() {
   self.stats = self.query.stats(function(response) {
    $scope.stats = response;
   });
  }

  self.initialize();
  self.execute();

  self.promise = $interval(function() {
   self.execute();
  },self.search.getRefreshKey());

  $scope.$on('$destroy', function() {
   $interval.cancel(self.promise);
  });

  $scope.$on('unathorized', function() {
   self.stats.$cancelRequest();
   $interval.cancel(self.promise);
  });
 }
})();



  function userroute($stateProvider, $urlRouterProvider) {
     $stateProvider
     .state('admin.user', {
       url: '/users',
       abstract: false,
       data: {
        pageTitle: 'User Adminstration',
       },
       views: {
       'topcontent@': {
        templateUrl: 'app/views/admin/user/topcontent.html',
        controller: 'usertopCtrl'         
       },
       'content@' : {
         templateUrl: 'app/views/admin/user/middlecontent.html',
         controller: 'usermiddleCtrl'
        },
        'bottomcontent@': {
         templateUrl: 'app/views/admin/user/bottomcontent.html',
         controller: 'userbottomCtrl'

        },
     }
   });
  }
  angular
  .module('vdb')
  .config(userroute);


function art($stateProvider, $urlRouterProvider) {
 $stateProvider
 .state('home.art', {
  url: 'art',
  abstract: false,
  data: {
   pageTitle: 'About Us',
  },
  views: {
   'topcontent@': {
    templateUrl:ajaxInfo.template_directory + 'views/home/art/topcontent.html',
   }
  }
 });
}
angular
.module('vdb')
.config(art);

function helpCtrl($scope) {
    console.info("Default Controller for helpCtrl has started");
  }
angular
.module('vdb')
.controller('helpCtrl',helpCtrl);

function help($stateProvider, $urlRouterProvider) {
 $stateProvider
 .state('home.resources.help', {
  url: '/help',
  abstract: false,
  data: {
   pageTitle: 'Help',
  },
  views: {
   'topcontent@': {
    templateUrl: 'views/home/resources/help/topcontent.html',

   },
   'content@' : {
    templateUrl: 'views/home/resources/help/content.html',
    controller: 'helpCtrl'
   },
  }
 });
}
angular
.module('vdb')
.config(help);

function posts($stateProvider, $urlRouterProvider) {
 $stateProvider
 .state('home.posts', {
   url:'posts/:slug',
   data: {
     pageTitle: 'About Us',
   },
   views: {
     'topcontent@': {
       templateUrl:ajaxInfo.template_directory+'views/home/posts/content.html',
       controller:controller,
     },
     'content@': {
       template: '<div></div>'
     },
     'bottomcontent@': {
       template: '<div></div>'
     },

   }
  });
  function controller($scope,posts,$stateParams) {
    self.params = {'slug': $stateParams.slug};
    posts.get(self.params, function(r) {
      $scope.post = r[0];
    });
  }
}
angular
.module('vdb')
.config(posts);

function supportCtrl($scope) {
    console.info("Default Controller for supportCtrl has started");
  }
angular
.module('vdb')
.controller('supportCtrl',supportCtrl);

function support($stateProvider, $urlRouterProvider) {
 $stateProvider
 .state('home.resources.support', {
  url: '/support',
  abstract: false,
  data: {
   pageTitle: 'Support',
  },
  views: {
   'topcontent@': {

   },
   'content@' : {
    templateUrl: 'views/home/resources/support/content.html',
    controller: 'supportCtrl'
   },
  }
 });
}
angular
.module('vdb')
.config(support);

  function whyCtrl($scope) {
      console.info("Default Controller for why has started");
    }
  angular
  .module('vdb')
  .controller('whyCtrl',whyCtrl);

function why($stateProvider, $urlRouterProvider) {
 $stateProvider
 .state('home.resources.why', {
  url: '/why',
  data: {
   pageTitle: 'Why Videbligo',
  },
  views: {
   'topcontent@' : {
    templateUrl:'views/home/resources/why/topcontent.html'
   },
   'content@' : {
    templateUrl: 'views/home/resources/why/content.html',
    controller: whyCtrl
   },

  }
 });
 function controller($scope){
  $scope.data = {
   title: "Why Videbligo",
   subtitle: "Videbligo Is Superior In Every Specific Performance Category",
   version: "v2"
  };
 }
}
angular
.module('vdb')
.config(why);

function blogCtrl($scope,user) {
 console.log("Starting blog control");
 const self = this;
 self.user = user;
 activate();

 ///////////

 function activate() {

 }
}
angular
.module('vdb-ui')
.controller('blogCtrl', blogCtrl);

function blogPostsCtrl($scope) {
 $scope.blog = {};

 $scope.blog.tco = {
  projectdata: {
   //using vdb-table
   headers: false,
   tableheaders: ['Item','Value'],
   title: "Company and User Information Overview",
   panel: false,
   overview: "ACME Inc. Project Data Overview",
   tabledata:[
    ['Annual Revenues @ Growth','$1B @ 8% Y/Y'],
    ['Number of Employees', 4000],
    ['Number of Business Users', 150],
   ]
  },
  team: {
   headers: true,
   tableheaders: ["Role", "Quantity" ,"Allocation (Plan)", "Allocation (Build)", "Allocation (Run)"],
   "title" :"Project Team Members",
   panel: false,
   tabledata: [
    ["Executive Sponsor",1,"25%", "24%", "10%"],
    ["Project Manager",2, "100%","99%","0%"],
    ["Program Manager",3,"0%", "1%","50%"],
    // ["Enterprise Architects",3 ,,,],
    // ["Enterprise Designers",3,,,],
    // ["IT Technical Leads",3,,,],
    // ["IT Level-1 Engineers",,,,],
    // ["IT Level-2 Engineers",,,,],
    // ["IT Level-3 Engineers",,,,],
   ]
  },
  solution: {
   headers: false,
   "title" :"Solution Requirements",
   tabledata: [
    ["Total Active Users", 150],
    ["Daily Active Users ", 100],
    ["Monthly Active Users", 50],
    ["Unique Data Streams", 15],
    ["Key Performance Indicators", 250],
    ["Required Visualizations", 144],
    ["Hot Data", "35 Days"],
    ["Warm Data", "90 Days"],
    ["Cold Data","396 Days"]
   ]
  }

 }

}
angular
.module('vdb-ui')
.controller('blogPostsCtrl', blogPostsCtrl);

function blogs($stateProvider) {

 $stateProvider
 .state('home.resources.blogs', {
  url: 'blogs',
  abstract: false,
  data: {
   pageTitle: 'Blogs',
  },
  views: {
   'topcontent@': {
   },
   'content@' : {
    templateUrl: 'wp/index.php',
    // templateUrl: 'views/home/blogs/content/index.html',
    controller: 'blogCtrl'
   },
   'bottomcontent@': {
   }
  }
 });
}
angular
.module('vdb')
.config(blogs);


function postss($stateProvider) {

 $stateProvider
 .state('home.blogs.posts', {
  url: '/:cat/:year/:month/:day/:title' + '.html',
  views: {
   'content@': {
    templateUrl: function($stateParams) {
     return 'views/home/blogs/content/' +
      ($stateParams.cat).toLowerCase() + '/' +
      $stateParams.year + '/' +
      $stateParams.month + '/' +
      $stateParams.day + '/' +
      ($stateParams.title).toLowerCase() + '.html';
    },
    controller: blogPostsCtrl
   }
  }
 });
}

angular
.module('vdb')
.config(postss);

function serviceITCtrl($scope,$rootScope) {

 $scope.route = 'service.cloud.pages';
 $scope.listGroup = [
  {
   id: "Basic",
   items: [
    {
     active: true,
     slug: "summary",
     icon: "fa fa-adjust",
     title: "Overview"
    },
    {
     active: false,
     slug:'maps',
     icon: "fa fa-map",
     title: "Explorer"
    }
   ]
  }
 ];

 $rootScope.$on('unathorized', function() {
  $scope.$broadcast('unathorized');
 });
 $rootScope.$on('index', function() {
  $scope.$broadcast('reset');
 });
 $rootScope.$on('window', function() {
  $scope.$broadcast('reset');
 });
}

angular
.module('vdb')
.controller('serviceITCtrl',serviceITCtrl);

 function cloud($stateProvider, $urlRouterProvider) {

  $urlRouterProvider
  .when('/service/cloud','/service/cloud/overview');

   $stateProvider
   .state('service.cloud', {
     url: '/cloud',
     abstract: false,
     data: {
      pageTitle: 'Videbligo for Cloud',
     },
     views: {
      // 'leftbar@' : {
      //  template: '<vdb-left-bar />',
      //  controller: serviceITCtrl
      // },
     }
   });
 }
 angular
    .module('vdb')
    .config(cloud);

function demoCtrl($scope,d3v4Service,colors,$interval,$resource) {

 //This first part is our declarations.
 //It should be pretty consistent across controllers.

 const self = this;

 $scope.calendar = "123";
 // console.log($scope.calendar);
 self.postParams = {};
 self.promise;

 self.url = '/api/test/:verb';
 self.paramDefaults = {};
 self.options = {};

 self.actions = {
  'tweets': {
   'method': 'GET',
   'params': { 'verb': 'tweets' }
  },
  'mytweets': {
   'method': 'GET',
   'params': { 'verb': 'mytweets' }
  },
  'mymentions': {
   'method': 'GET',
   'params': { 'verb': 'mymentions' }
  }
 };

 //The init function should declare all local variables
 function init() {

  $scope.months = ['October', 'November', 'December'];
  $scope.barSeries = ['You', 'Your Competitors'];
  $scope.detailSeries= ['You','Wells Fargo','Prudential','Washington Mutual', 'Chase Bank', 'Bank of America', 'Hartford', 'Allstate', 'Statefarm'];
  $scope.colors = [colors.blue, colors.green];

  $scope.bubbleSeries= $scope.detailSeries;

  $scope.bubbleData = [];
  $scope.bubbleData[0] = [];
  $scope.bubbleColors = [];

  $scope.barData = [];
  $scope.barData[0] =[];
  $scope.barData[1] = [];
  $scope.barData[2] = [];

  $scope.pieSeries = ['Male', 'Female'];
  $scope.pieData = [];

  $scope.pieColors = [colors.blue, colors.red];

  $scope.pieSeries2 = ['Spanish', 'English', 'Other'];
  $scope.pieData2 = [];

  $scope.pieColors2 = [colors.blue, colors.green,colors.gray];

  $scope.hblabels= ['You','Lorem','Ipsum','dolo', 'sit', 'amet'];
  $scope.hbseries = ['Positive', 'Negative'];

  $scope.hbdata = [];
  $scope.hbdata[0] = [];
  $scope.hbdata[1] = [];
 }

 function execute() {

  $scope.pieData[0] = (Math.random() * 100).toFixed(0);
  $scope.pieData[1] = 100 - $scope.pieData[0];
  $scope.pieData2[0] = (Math.random() * 100).toFixed(0);
  $scope.pieData2[1] = (Math.random() * 100).toFixed(0);
  $scope.pieData2[2] = (Math.random() * 100).toFixed(0);

  var query = $resource(self.url,self.paramDefaults,self.actions,self.options);

  query.mymentions(function(response) {
   $scope.mymentions = response;
  });

  query.tweets(function(response) {
   $scope.tweets = response;
   query.mytweets(function(response) {
    $scope.mytweets = {
     hits: {
      total: (Math.random() * 10000).toFixed(0)
     }
    };

    $scope.barData[0][0] = (Math.random() * 5000).toFixed(0);
    $scope.barData[1][0] = (Math.random() * 5000).toFixed(0);

    $scope.barData[0][1] = (Math.random() * 5000).toFixed(0);
    $scope.barData[1][1] = (Math.random() * 5000).toFixed(0);

    $scope.barData[0][2] = $scope.tweets.hits.total;
    $scope.barData[1][2] = $scope.mytweets.hits.total;

    $scope.total = +$scope.tweets.hits.total + +$scope.mytweets.hits.total;

    $scope.myCircle = Circles.create({
     id:                  'circles-1',
     radius:              80,
     value:               ($scope.mytweets.hits.total / $scope.total * 100).toFixed(0),
     maxValue:            100,
     width:               10,
     text:                function(value){return value + '%';},
     colors:              $scope.colors,
     duration:            1000,
     wrpClass:            'circles-wrp',
     textClass:           'circles-text',
     valueStrokeClass:    'circles-valueStroke',
     maxValueStrokeClass: 'circles-maxValueStroke',
     styleWrapper:        true,
     styleText:           true
    });


   });


  });

  for (var i = 0; i< 100; i++) {
   if(i == 0) {
    $scope.bubbleColors[0] = colors.blue;
   } else {
    $scope.bubbleColors[i] = colors.gray;
   }
   $scope.bubbleData[0][i] = {
    x: (Math.random() * 100).toFixed(0),
    y: (Math.random() * 100).toFixed(0),
    r: (Math.random() * 10).toFixed(0)
   }
  }

  for (var x = 0; x < 2; x++) {
   for (var y=0; y < $scope.hblabels.length; y++) {
    $scope.hbdata[x][y] = (Math.random() * 100).toFixed(0);
   }
  }

 }

 init();
 execute();

 self.promise = $interval(function () {
  execute();
 }, 5000);

 $scope.$on('$destroy', function() {
  $interval.cancel(self.promise);
 });

}
angular
.module('vdb')
.controller('demoCtrl',demoCtrl);



// $scope.tabs = [
//  { title: "Maps", content: 'views/service/demo/tab-content/maps.html' },
//
//  { title: "Iconic", content: 'views/service/demo/tab-content/summary.html' },
//
//  { title: "Tree", content: 'views/service/demo/tab-content/tree.html' },
//
//  { title: "Example", content: 'views/service/demo/tab-content/example.html' },
//  { title: "Aster Plots", content: 'views/service/demo/tab-content/aster.html' },
//  { title: "Calendar Views", content:'views/service/demo/tab-content/calendar.html' },
//  { title: "Sunburst Charts", content:'views/service/demo/tab-content/sunburst.html' },
//  { title: "User Commentary", content:'views/service/demo/tab-content/comments.html' },
//
//
//  { title: "Circle Pack", content: 'views/service/demo/tab-content/circlepack.html' },
//
//  { title: "Iconic", content: 'views/service/demo/tab-content/summary.html' },
//  { title: "Basic", content: 'views/service/demo/tab-content/summary.html' },
//
//  { title: "Circos Chart", content: 'views/service/demo/tab-content/circos.html' },
//
//  { title: "Code Flowers", content: 'views/service/demo/tab-content/flowers.html' },
//
//  { title: "Basic Charts", content:'views/service/demo/tab-content/charts.html' },
//  { title: "Pie Charts", content:'views/service/demo/tab-content/pie.html' },
//  { title: "Line Charts", content:'views/service/demo/tab-content/line.html' },
//
//  // { title: "Payment Options", content: 'app/views/home/myProfile/settings/payment.html'},
//  // { title: "Notification Settings", content: 'app/views/home/myProfile/settings/notifications.html'}
// ];

function demomiddleCtrl($scope,d3v4Service,colors,$interval,$resource) {

 const self = this;
 self.postParams = {};
 self.promise;

 self.url = '/api/test/:verb';
 self.paramDefaults = {};
 self.options = {};

 $scope.tabs = [
  { title: "Aster Plots", content: 'views/service/demo/aster.html' },
  { title: "Calendar Views", content:'views/service/demo/calendar.html' },
  { title: "Sunburst Charts", content:'views/service/demo/sunburst.html' },
  { title: "User Commentary", content:'views/service/demo/comments.html' },

  // { title: "Payment Options", content: 'app/views/home/myProfile/settings/payment.html'},
  // { title: "Notification Settings", content: 'app/views/home/myProfile/settings/notifications.html'}
 ];

 function init() {

  $scope.months = ['October', 'November', 'December'];

  $scope.barSeries = ['You', 'Your Competitors'];
  $scope.detailSeries= ['You','Wells Fargo','Prudential','Washington Mutual', 'Chase Bank', 'Bank of America', 'Hartford', 'Allstate', 'Statefarm'];
  $scope.colors = [colors.blue, colors.green];

  $scope.bubbleSeries= ['You','Wells Fargo','Prudential','Washington Mutual', 'Chase Bank', 'Bank of America', 'Hartford', 'Allstate', 'Statefarm'];

  $scope.bubbleData = [];
  $scope.bubbleData[0] = [];
  $scope.bubbleColors = [];


  $scope.barData = [];
  $scope.barData[0] =[];
  $scope.barData[1] = [];
  $scope.barData[2] = [];

  $scope.pieSeries = ['Male', 'Female'];
  $scope.pieData = [];


  $scope.pieColors = [colors.blue, colors.red];

  $scope.pieSeries2 = ['Spanish', 'English', 'Other'];
  $scope.pieData2 = [];

  $scope.pieColors2 = [colors.blue, colors.green,colors.gray];



  // $scope.myCircle = Circles.create({
  //  id:                  'circles-1',
  //  radius:              80,
  //  value:               $scope.barData[0][2],
  //  maxValue:            100,
  //  width:               10,
  //  text:                function(value){return value + '%';},
  //  colors:              $scope.colors,
  //  duration:            1000,
  //  wrpClass:            'circles-wrp',
  //  textClass:           'circles-text',
  //  valueStrokeClass:    'circles-valueStroke',
  //  maxValueStrokeClass: 'circles-maxValueStroke',
  //  styleWrapper:        true,
  //  styleText:           true
  // });


  $scope.hblabels= ['You','Lorem','Ipsum','dolo', 'sit', 'amet'];
  $scope.hbseries = ['Positive', 'Negative'];

  $scope.hbdata = [];
  $scope.hbdata[0] = [];
  $scope.hbdata[1] = [];
 }

 function execute() {
  $scope.pieData[0] = (Math.random() * 100).toFixed(0);
  $scope.pieData[1] = 100 - $scope.pieData[0];

  $scope.pieData2[0] = (Math.random() * 100).toFixed(0);
  $scope.pieData2[1] = (Math.random() * 100).toFixed(0);
  $scope.pieData2[2] = (Math.random() * 100).toFixed(0);

  // for (var j=0; j<2; j++) {
  //  for (var k=0; k<3; k++) {
  //   $scope.barData[j][k] = (Math.random() * 100).toFixed(0);
  //  }
  // }

  var actions = {
   'tweets': {
    'method': 'GET',
    'params': { 'verb': 'tweets' }
   },
   'mytweets': {
    'method': 'GET',
    'params': { 'verb': 'mytweets' }
   },
   'mymentions': {
    'method': 'GET',
    'params': { 'verb': 'mymentions' }
   }
  };

  var query = $resource(self.url,self.paramDefaults,actions,self.options);

  query.mymentions(function(response) {
   $scope.mymentions = response;
  });

  query.tweets(function(response) {
   $scope.tweets = response;
   query.mytweets(function(response) {
    $scope.mytweets = {
     hits: {
      total: (Math.random() * 10000).toFixed(0)
     }
    };

    $scope.barData[0][0] = (Math.random() * 5000).toFixed(0);
    $scope.barData[1][0] = (Math.random() * 5000).toFixed(0);

    $scope.barData[0][1] = (Math.random() * 5000).toFixed(0);
    $scope.barData[1][1] = (Math.random() * 5000).toFixed(0);

    $scope.barData[0][2] = $scope.tweets.hits.total;
    $scope.barData[1][2] = $scope.mytweets.hits.total;

    $scope.total = +$scope.tweets.hits.total + +$scope.mytweets.hits.total;

    $scope.myCircle = Circles.create({
     id:                  'circles-1',
     radius:              80,
     value:               ($scope.mytweets.hits.total / $scope.total * 100).toFixed(0),
     maxValue:            100,
     width:               10,
     text:                function(value){return value + '%';},
     colors:              $scope.colors,
     duration:            1000,
     wrpClass:            'circles-wrp',
     textClass:           'circles-text',
     valueStrokeClass:    'circles-valueStroke',
     maxValueStrokeClass: 'circles-maxValueStroke',
     styleWrapper:        true,
     styleText:           true
    });


   });


  });

  for (var i = 0; i< 100; i++) {
   if(i == 0) {
    $scope.bubbleColors[0] = colors.blue;
   } else {
    $scope.bubbleColors[i] = colors.gray;
   }
   $scope.bubbleData[0][i] = {
    x: (Math.random() * 100).toFixed(0),
    y: (Math.random() * 100).toFixed(0),
    r: (Math.random() * 10).toFixed(0)
   }
  }

  for (var x = 0; x < 2; x++) {
   for (var y=0; y < $scope.hblabels.length; y++) {
    $scope.hbdata[x][y] = (Math.random() * 100).toFixed(0);
   }
  }


 }
 init();
 execute();

 $interval(function () {
  execute();
 }, 5000);

}
angular
.module('vdb')
.controller('demomiddleCtrl',demomiddleCtrl);

function serviceDemonstrationPages($stateProvider, $urlRouterProvider) {

 $stateProvider
 .state('service.demo.pages', {
  onEnter: function(){
  },
  url: '/:slug',
  data: {
   pageTitle: 'Demonstration Pages',
  },
  views: {
   'topcontent@' : {
    templateUrl: function($stateParams) {
     return 'views/service/demo/accordian-pages/' +
     $stateParams.slug + '.html';
    },
   },

  }
 });
}
angular
.module('vdb')
.config(serviceDemonstrationPages);

function serviceDemonstration($stateProvider) {

 $stateProvider
 .state('service.demo', {
  onEnter: function(){
  },
  url: '/demonstration',
  abstract: false,
  data: {
   pageTitle: 'Demonstration Pages',
  },
  views: {
   'leftbar@' : {
    template: '<vdb-left-menu-accordian />',
    controller:controller
   },
   'topcontent@' : {
    templateUrl: '/views/service/demo/topcontent.html',
   },
   'content@' : {
    template: '<div class="view"></div>',
   },
   'bottomcontent@' : {
    template: '<div class="view"></div>',
   },
  }
 });

 function controller($scope,$rootScope) {
  $scope.route = 'service.demo.pages';
  $scope.toggleObject = {item: -1};
  $scope.listGroup = [
   {
    id: "Basic Charts",
    items: [
     // {
     //  active: true,
     //  slug: "counters",
     //  icon: "fa fa-adjust",
     //  title: "Basic Counters"
     // },
     // {
     //  active: false,
     //  slug: "icon",
     //  icon: "fa fa-adjust",
     //  title: "Icon Counters"
     // },
     {
      active: false,
      slug: "widget",
      icon: "fa fa-adjust",
      title: "Widget Counters"
     },
     // {
     //  active: false,
     //  slug:'maps',
     //  icon: "fa fa-map",
     //  title: "Maps"
     // },
     // {
     //  active: false,
     //  slug: "comments",
     //  icon: "fa fa-comment",
     //  title: "User Comments"
     // },
     // {
     //  active: false,
     //  slug: "charts",
     //  icon: "fa fa-pie-chart",
     //  title: "Circle Charts"
     // },
     // {
     //  active: false,
     //  slug: "bubble",
     //  icon: "fa fa-pie-chart",
     //  title: "Bubble Charts"
     // },
     // {
     //  active: false,
     //  slug: "pie",
     //  icon: "fa fa-pie-chart",
     //  title: "Pie Charts"
     // },

    ]
   },
   {
    id: "Advanced Charts",
    items: [
     {
      active: false,
      slug: "aster",
      icon: "fa fa-bar-chart-o",
      title: "Aster Plots"
     },
     // {
     //  active: false,
     //  slug: "circlepack",
     //  icon: "fa fa-bar-chart-o",
     //  title: "Circle Packs"
     // },
     // {
     //  active: false,
     //  slug: "circos",
     //  icon: "fa fa-bar-chart-o",
     //  title: "Circos Graphs"
     // },
     // {
     //  active: false,
     //  slug: "flowers",
     //  icon: "fa fa-bar-chart-o",
     //  title: "Code Flowers"
     // },
     // {
     //  active: false,
     //  slug: "tree",
     //  icon: "fa fa-bar-chart-o",
     //  title: "Binary Trees"
     // },
     // {
     //  active: false,
     //  slug: "sunburst",
     //  icon: "fa fa-bar-chart-o",
     //  title: "Sunbursts"
     // },
     {
      active: false,
      slug: "calendar",
      icon: "fa fa-bar-chart-o",
      title: "Calendars"
     },
    ]
   },
   {
    id: "New",
    items: [
     {
      active: false,
      slug: "resume",
      icon: "fa fa-bar-chart-o",
      title: "Resume"
     },
    ]
   }
  ];

 }

}
angular
.module('vdb')
.config(serviceDemonstration);

function serviceenergy($stateProvider, $urlRouterProvider) {

 $urlRouterProvider
 .when('/service/energy','/service/energy/data');

 $stateProvider
 .state('service.energy', {
  url: '/energy',
  abstract: false,
  data: {
   pageTitle: 'Videbligo for Energy',
  },
  views: {
   'leftbar@' : {
    template: '<vdb-left-menu-accordian />',
    controller: leftcontroller
   },
   'topcontent@': {
    templateUrl: 'views/service/energy/content.html',
    controller: topcontroller
   },
   'content@': {
    templateUrl: 'views/service/energy/topcontent.html',
    controller: controller
   },
   'bottomcontent@': {
    templateUrl: 'views/service/energy/bottomcontent.html',
    controller: bottomcontroller
   }
  }
 });

 function leftcontroller($scope) {
  $scope.route = 'service.energy.pages';
  $scope.toggleObject = {item: -1};
  $scope.listGroup = [
   {
    id: "Overiew",
    items: [
     {
      active: true,
      slug: "data",
      icon: "fa fa-adjust",
      title: "MDM Overview"
     },
     {
      active: true,
      slug: "meteroverview",
      icon: "fa fa-adjust",
      title: "Meters Overview"
     },
     {
      active: true,
      slug: "collectoroverview",
      icon: "fa fa-adjust",
      title: "Collectors Overview"
     },
    ]
   },
   {
    id: "Explorer",
    items: [
     {
      active: true,
      slug: "mexplore",
      icon: "fa fa-adjust",
      title: "Meters Explorer"
     },
     {
      active: true,
      slug: "cexplore",
      icon: "fa fa-adjust",
      title: "Collectors Explorer"
     }
    ]
   },
   {
    id: "Analytics",
    items: [
     {
      active: false,
      slug: "weather",
      icon: "fa fa-adjust",
      title: "Weather"
     },

    ]
   },
   {
    id: "Historicals",
    items: [
     {
      active: false,
      slug: "mhistory",
      icon: "fa fa-adjust",
      title: "Meter Data Historicals"
     },
     {
      active: true,
      slug: "chistory",
      icon: "fa fa-adjust",
      title: "Collector Data Historicals"
     }
    ]
   }
  ];
 }

 function bottomcontroller($scope) {}

 function topcontroller($scope) {}

 function controller($scope) {

 }
}
angular
.module('vdb')
.config(serviceenergy);

function serviceenergypages($stateProvider) {
 $stateProvider
 .state('service.energy.pages', {
  onEnter: function(){
  },
  url: '/:slug',
  data: {
   pageTitle: 'Videbligo for Energy',
  },
  views: {
   'topcontent@' : {
    templateUrl: function($stateParams) {
     return 'views/service/energy/pages/' +
     $stateParams.slug + 'top.html';
    },
    controllerProvider: function($stateParams) {
     return $stateParams.slug + 'topCtrl'
    }
   },
   'content@' : {
    templateUrl: function($stateParams) {
     return 'views/service/energy/pages/' +
     $stateParams.slug + 'middle.html';
    },
    controllerProvider: function($stateParams) {
     return $stateParams.slug + 'middleCtrl'
    }
   },
   'bottomcontent@' : {
    templateUrl: function($stateParams) {
     return 'views/service/energy/pages/' +
     $stateParams.slug + 'bottom.html';
    },
    controllerProvider: function($stateParams) {
     return $stateParams.slug + 'bottomCtrl'
    }
   },

  }
 });
}
angular
.module('vdb')
.config(serviceenergypages);

function serviceMarketingCtrl($scope,d3v4Service,colors,$interval,$resource) {

 const self = this;
 self.postParams = {};
 self.promise;

 self.url = '/api/test/:verb';
 self.paramDefaults = {};
 self.options = {};

 function init() {

  $scope.months = ['October', 'November', 'December'];

  $scope.barSeries = ['You', 'Your Competitors'];
  $scope.detailSeries= ['You','Wells Fargo','Prudential','Washington Mutual', 'Chase Bank', 'Bank of America', 'Hartford', 'Allstate', 'Statefarm'];
  $scope.colors = [colors.blue, colors.green];

  $scope.bubbleSeries= ['You','Wells Fargo','Prudential','Washington Mutual', 'Chase Bank', 'Bank of America', 'Hartford', 'Allstate', 'Statefarm'];

  $scope.bubbleData = [];
  $scope.bubbleData[0] = [];
  $scope.bubbleColors = [];


  $scope.barData = [];
  $scope.barData[0] =[];
  $scope.barData[1] = [];
  $scope.barData[2] = [];

  $scope.pieSeries = ['Male', 'Female'];
  $scope.pieData = [];


  $scope.pieColors = [colors.blue, colors.red];

  $scope.pieSeries2 = ['Spanish', 'English', 'Other'];
  $scope.pieData2 = [];

  $scope.pieColors2 = [colors.blue, colors.green,colors.gray];



  // $scope.myCircle = Circles.create({
  //  id:                  'circles-1',
  //  radius:              80,
  //  value:               $scope.barData[0][2],
  //  maxValue:            100,
  //  width:               10,
  //  text:                function(value){return value + '%';},
  //  colors:              $scope.colors,
  //  duration:            1000,
  //  wrpClass:            'circles-wrp',
  //  textClass:           'circles-text',
  //  valueStrokeClass:    'circles-valueStroke',
  //  maxValueStrokeClass: 'circles-maxValueStroke',
  //  styleWrapper:        true,
  //  styleText:           true
  // });


  $scope.hblabels= ['You','Lorem','Ipsum','dolo', 'sit', 'amet'];
  $scope.hbseries = ['Positive', 'Negative'];

  $scope.hbdata = [];
  $scope.hbdata[0] = [];
  $scope.hbdata[1] = [];
 }

 function execute() {
  $scope.pieData[0] = (Math.random() * 100).toFixed(0);
  $scope.pieData[1] = 100 - $scope.pieData[0];

  $scope.pieData2[0] = (Math.random() * 100).toFixed(0);
  $scope.pieData2[1] = (Math.random() * 100).toFixed(0);
  $scope.pieData2[2] = (Math.random() * 100).toFixed(0);

  // for (var j=0; j<2; j++) {
  //  for (var k=0; k<3; k++) {
  //   $scope.barData[j][k] = (Math.random() * 100).toFixed(0);
  //  }
  // }

  var actions = {
   'tweets': {
    'method': 'GET',
    'params': { 'verb': 'tweets' }
   },
   'mytweets': {
    'method': 'GET',
    'params': { 'verb': 'mytweets' }
   },
   'mymentions': {
    'method': 'GET',
    'params': { 'verb': 'mymentions' }
   }
  };

  var query = $resource(self.url,self.paramDefaults,actions,self.options);

  query.mymentions(function(response) {
   $scope.mymentions = response;
  });

  query.tweets(function(response) {
   $scope.tweets = response;
   query.mytweets(function(response) {
    $scope.mytweets = {
     hits: {
      total: (Math.random() * 10000).toFixed(0)
     }
    };

    $scope.barData[0][0] = (Math.random() * 5000).toFixed(0);
    $scope.barData[1][0] = (Math.random() * 5000).toFixed(0);

    $scope.barData[0][1] = (Math.random() * 5000).toFixed(0);
    $scope.barData[1][1] = (Math.random() * 5000).toFixed(0);

    $scope.barData[0][2] = $scope.tweets.hits.total;
    $scope.barData[1][2] = $scope.mytweets.hits.total;

    $scope.total = +$scope.tweets.hits.total + +$scope.mytweets.hits.total;

    $scope.myCircle = Circles.create({
     id:                  'circles-1',
     radius:              80,
     value:               ($scope.mytweets.hits.total / $scope.total * 100).toFixed(0),
     maxValue:            100,
     width:               10,
     text:                function(value){return value + '%';},
     colors:              $scope.colors,
     duration:            1000,
     wrpClass:            'circles-wrp',
     textClass:           'circles-text',
     valueStrokeClass:    'circles-valueStroke',
     maxValueStrokeClass: 'circles-maxValueStroke',
     styleWrapper:        true,
     styleText:           true
    });


   });


  });

  for (var i = 0; i< 100; i++) {
   if(i == 0) {
    $scope.bubbleColors[0] = colors.blue;
   } else {
    $scope.bubbleColors[i] = colors.gray;
   }
   $scope.bubbleData[0][i] = {
    x: (Math.random() * 100).toFixed(0),
    y: (Math.random() * 100).toFixed(0),
    r: (Math.random() * 10).toFixed(0)
   }
  }

  for (var x = 0; x < 2; x++) {
   for (var y=0; y < $scope.hblabels.length; y++) {
    $scope.hbdata[x][y] = (Math.random() * 100).toFixed(0);
   }
  }


 }
 init();
 execute();

 $interval(function () {
  execute();
 }, 5000);

}
angular
.module('vdb')
.controller('serviceMarketingCtrl',serviceMarketingCtrl);

(function() {
 'use strict';
 angular
  .module('vdb')
  .config(serviceMarketing);

  function serviceMarketing($stateProvider,$urlRouterProvider) {

   $urlRouterProvider

   .when('/service/marketing','/service/marketing/summary');

   $stateProvider
   .state('service.marketing', {
    url: '/marketing',
    abstract: false,
    data: {
     pageTitle: 'Videbligo for marketing',
    },
    views: {
     'leftbar@': {
      template: '<vdb-left-bar />',
      controller: leftControl
     }
    }
   });
  }

  function leftControl($scope) {
   $scope.route = 'service.marketing.pages';
   $scope.listGroup = [
    {
     id: "Basic",
     items: [
      {
       active: true,
       slug: "summary",
       icon: "fa fa-adjust",
       title: "Executive Summary"
      },
      {
       active: false,
       slug:'sentiment',
       icon: "fa fa-map",
       title: "Conversation Sentiment"
      },
       {
       active: false,
       slug: "language",
       icon: "fa fa-comment",
       title: "Language Choice"
      },
      {
       active: false,
       slug: "drivers",
       icon: "fa fa-pie-chart",
       title: "Conversation Drivers"
      },
      {
       active: false,
       slug: "demographics",
       icon: "fa fa-pie-chart",
       title: "Demographics"
      },
      {
       active: false,
       slug: "trends",
       icon: "fa fa-pie-chart",
       title: "Trendline"
      },
      {
       active: false,
       slug: "comparisons",
       icon: "fa fa-pie-chart",
       title: "Comparisons Summary"
      },
      {
       active: false,
       slug: "insights",
       icon: "fa fa-pie-chart",
       title: "Insights"
      },
      {
       active: false,
       slug: "recommendations",
       icon: "fa fa-pie-chart",
       title: "Recommendations"
      },
      {
       active: false,
       slug: "examples",
       icon: "fa fa-pie-chart",
       title: "Examples"
      },

     ]
    },

   ];

  }

})();

(function() {
 'use strict';
 angular
  .module('vdb')
  .config(serviceMarketingPages);

  function serviceMarketingPages($stateProvider,$urlRouterProvider) {

   $urlRouterProvider
   $stateProvider
   .state('service.marketing.pages', {
    url: '/:slug',
    abstract: false,
    data: {
     pageTitle: 'Videbligo for marketing',
    },
    views: {
     'topcontent@': {
      templateUrl: 'views/service/marketing/topcontent.html'
     },
     'content@': {
      templateUrl: function($stateParams) {
       return 'views/service/marketing/pages/' + $stateParams.slug + '.html';
      },
      controller:tabControl

     }
    }
   });
  }

  function tabControl($scope) {
   $scope.route = 'service.marketing.pages';
   $scope.tabs = [
      {
       active: true,
       slug: "sov",
       icon: "fa fa-adjust",
       title: "Share of Voice"
      },
      {
       active: false,
       slug:'demographics',
       icon: "fa fa-map",
       title: "Demographics"
      },
       {
       active: false,
       slug: "trends",
       icon: "fa fa-comment",
       title: "Trends"
      },
      {
       active: false,
       slug: "influencers",
       icon: "fa fa-pie-chart",
       title: "Influencers"
      },
      {
       active: false,
       slug: "recommendations",
       icon: "fa fa-pie-chart",
       title: "Recommendations"
      },
    ];
  }


})();

(function()  {
 'use strict';

 angular
 .module('vdb-blogs', [
 ]);

})();

function ITOperationsExplorerbottomCtrl($scope) {
    console.log("Default Controller for ITOperationsExplorerbottomCtrl has started");
  }
angular
.module('vdb')
.controller('ITOperationsExplorerbottomCtrl',ITOperationsExplorerbottomCtrl);

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

function ITOperationsExplorermiddleCtrl($scope) {
    console.log("Default Controller for ITOperationsExplorermiddleCtrl has started");
  }
angular
.module('vdb')
.controller('ITOperationsExplorermiddleCtrl',ITOperationsExplorermiddleCtrl);

  function ITOperationsExplorer($stateProvider, $urlRouterProvider) {
     $stateProvider
     .state('service.cloud.explorer', {
       url: '/Explorer',
       abstract: false,
       data: {
        pageTitle: 'Device Explorer',
       },
       views: {
        'leftbar@': {
         templateUrl: 'views/service/cloud/Explorer/leftbar.html',
         controller: 'leftExplorerCtrl'
        },
       'topcontent@': {
        templateUrl: 'views/service/cloud/Explorer/topcontent.html',
        controller: 'ITOperationsExplorertopCtrl'
       },
       'content@' : {
         templateUrl: 'views/service/cloud/Explorer/middlecontent.html',
         controller: 'ITOperationsExplorermiddleCtrl'
        },
        'bottomcontent@': {
         templateUrl: 'views/service/cloud/Explorer/bottomcontent.html',
         controller: 'ITOperationsExplorerbottomCtrl'
        },
     }
   });
  }
  angular
  .module('vdb')
  .config(ITOperationsExplorer);

function ITOperationsExplorertopCtrl($scope) {
    console.log("Default Controller for ITOperationsExplorertopCtrl has started");
  }
angular
.module('vdb')
.controller('ITOperationsExplorertopCtrl',ITOperationsExplorertopCtrl);

/*jshint -W030 */

function ITOverviewBottomCtrl() {

}
angular
.module('vdb')
.controller('ITOverviewBottomCtrl',ITOverviewBottomCtrl);

function ITOverviewMiddleCtrl($resource,$scope,$interval,search,jvector) {
 const s = this;
 s.search = search;

 s.initialize = function() {
  s.map = new jvm.Map(jvector.options);

  s.pP = {};
  s.url = '/api/overview/:verb';

  s.actions = {
   'geo_regions': {
    'method': 'POST',
    'params': { 'verb': 'geo_regions' },
    'rparams': { 'library': 'jvectormap', 'type': 'geo_regions'}
   },
   // 'geo_markers_medium': {
   //  'method': 'POST',
   //  'params': { 'verb': 'geo_markers' },
   //  'rparams': { 'library': 'jvectormap', 'type': 'geo_markers','severity': 'Medium'}
   // },
   'geo_markers_high': {
    'method': 'POST',
    'params': { 'verb': 'geo_markers' },
    'rparams': { 'library': 'jvectormap', 'type': 'geo_markers','severity': 'High'}
   },
  };

  s.qs = {};
  $scope.rs = {};

  s.query = $resource(s.url,s.paramDefaults || {}, s.actions || {}, s.search.options);


  s.execute();
  s.promise = $interval(function() {
   s.execute();
  },s.search.getRefreshKey());
 }//end initialize

 s.execute = function() {
  s.markers = [];
  s.values = [];

  s.search.getSearchParams(function(sp) {
   s.pP.searchParams = sp;

   $.each(s.actions, function(k,v) {
    s.pP.responseParams = v.rparams;
    s.qs[k] = s.query[k](s.pP,function(r) {
     $scope.rs[k] = r[v.rparams.type];
     v.rparams.type == 'geo_regions' ? s.map.series.regions[0].setValues($scope.rs[k]) : null;
     if(v.rparams.type == 'geo_markers') {
      $scope.rs[k].forEach(function(e) {
       s.markers.push({'latLng': e.coords, 'name': e.name});
       s.values.push(e.value);
      });
      s.map.addMarkers(s.markers);
     }
    });

   });//end foreach
  });
 }//end execute

s.cleanup = function() {
 $.each(s.qs,function(k,v) {
  v.$cancelRequest();
 });
 $interval.cancel(s.promise);
 s.map.remove();
}

s.initialize();

$scope.$on('reset', function() {
 s.cleanup();
 s.initialize();
});

$scope.$on('unathorized', function() {
 s.cleanup();
});
$scope.$on('$destroy', function() {
 s.cleanup();
});
}

angular
.module('vdb')
.controller('ITOverviewMiddleCtrl',ITOverviewMiddleCtrl);

  function ITOverview($stateProvider, $urlRouterProvider) {

     $stateProvider
     .state('service.cloud.overview', {
       url: '/overview',
       abstract: false,
       data: {
        pageTitle: 'Cloud Overview',
       },
       views: {
       'topcontent@': {
        templateUrl: 'views/service/cloud/Overview/topcontent.html',
        controller: 'ITOverviewTopCtrl'
       },
       'content@' : {
        templateUrl: 'views/service/cloud/Overview/middlecontent.html',
        controller: 'ITOverviewMiddleCtrl'
        },
        'bottomcontent@': {
         templateUrl: 'views/service/cloud/Overview/bottomcontent.html',
         // controller: 'ITOverviewBottomCtrl'
        },
       }
   });
  }
  angular
  .module('vdb')
  .config(ITOverview);

function ITOverviewTopCtrl($scope,$resource,$interval,flot,search) {
 const s = this;
 s.search = search;

 s.initialize = function() {

  s.pP = {};
  s.url = '/api/overview/:verb';

  s.actions = {
   'score': {
    'method': 'POST',
    'params': { 'verb': 'score'},
    'rparams': { 'library': 'vdb', 'type': 'widget'}
   },
   'events': {
    'method': 'POST',
    'params': { 'verb': 'events' },
    'rparams': { 'library': 'vdb', 'type': 'widget'}
   },
   'threats': {
    'method': 'POST',
    'params': { 'verb': 'threats' },
    'rparams': { 'library': 'vdb', 'type': 'widget'}
   },
   'devices': {
    'method': 'POST',
    'params': { 'verb': 'devices' },
    'rparams': { 'library': 'vdb', 'type': 'widget'}
   },
   'sl': {
    'method': 'POST',
    'params': { 'verb': 'sl' },
    'rparams': { 'library': 'vdb', 'type': 'widget'}
   },
   'users': {
    'method': 'POST',
    'params': { 'verb': 'users' },
    'rparams': { 'library': 'vdb', 'type': 'widget'}
   },
   'layers': {
    'method': 'POST',
    'params': {'verb': 'layers'},
    'rparams': {'library': 'vdb', 'type': 'progress'}
   },
   'devicetable': {
    'method': 'POST',
    'params': {'verb': 'devicetable'},
    'rparams': {'library': "vdb", 'type': "table"}
   },
   'timeseries': {
    'method': 'POST',
    'params': { 'verb': 'timeseries' },
    'rparams': {'library': "vdb", 'type': "timeseries" }
   }
  };

  s.qs = {};
  $scope.rs = {};

  s.query = $resource(s.url,s.paramDefaults || {}, s.actions || {}, s.search.options);

  s.execute();

  s.promise = $interval(function() {
   s.execute();
  },s.search.getRefreshKey());
 };

 s.execute = function() {
  s.search.getSearchParams(function(sp) {
   s.pP.searchParams = sp;
   $.each(s.actions, function(k,v) {
    s.qs[k] = s.query[k](s.pP,function(r) {
     $scope.rs[k] = r[v.rparams.type];
    })
   });//end foreach
  });

  $scope.$watch('rs.timeseries', function() {
   if($scope.rs.timeseries) {
    $.plot($("#flot-timeseries"), $scope.rs.timeseries,flot.options);
   }
  });
 }//end of s.execute

 s.initialize();

 s.cleanup = function() {
  $.each(s.qs,function(k,v) {
   v.$cancelRequest();
  });
  $interval.cancel(s.promise);
 }

 $scope.$on('reset', function() {
  s.cleanup();
  s.initialize();
 });

 $scope.$on('unathorized', function() {
  s.cleanup();
 });
 $scope.$on('$destroy', function() {
  s.cleanup();
 });
}
angular
.module('vdb')
.controller('ITOverviewTopCtrl',ITOverviewTopCtrl);

(function() {
    'use strict';

    angular
        .module('vdb')
        .controller('cexploretopCtrl', cexploretopCtrl);

    cexploretopCtrl.$inject = ['$scope'];

    function cexploretopCtrl($scope) {
        'ngInject';
        const self = this;

        activate();

        ///////////

        function activate() {
         console.log("cexploretopCtrl");
        }
    }
})();



(function() {
    'use strict';

    angular
        .module('vdb')
        .controller('cexploremiddleCtrl', cexploremiddleCtrl);

    cexploremiddleCtrl.$inject = ['$scope'];

    function cexploremiddleCtrl($scope) {
        'ngInject';
        const self = this;

        activate();

        ///////////

        function activate() {
         console.log("cexploremiddleCtrl");
        }
    }
})();





(function() {
    'use strict';

    angular
        .module('vdb')
        .controller('cexplorebottomCtrl', cexplorebottomCtrl);

    cexplorebottomCtrl.$inject = ['$scope'];

    function cexplorebottomCtrl($scope) {
        'ngInject';
        const self = this;

        activate();

        ///////////

        function activate() {
         console.log("cexplorebottomCtrl");
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('vdb')
        .controller('collectoroverviewtopCtrl', collectoroverviewtopCtrl);

    collectoroverviewtopCtrl.$inject = ['$scope'];

    function collectoroverviewtopCtrl($scope) {
        'ngInject';
        const self = this;

        activate();

        ///////////

        function activate() {
         console.log("collectoroverviewtopCtrl");
        }
    }
})();



(function() {
    'use strict';

    angular
        .module('vdb')
        .controller('collectoroverviewmiddleCtrl', collectoroverviewmiddleCtrl);

    collectoroverviewmiddleCtrl.$inject = ['$scope'];

    function collectoroverviewmiddleCtrl($scope) {
        'ngInject';
        const self = this;

        activate();

        ///////////

        function activate() {
         console.log("collectoroverviewmiddleCtrl");
        }
    }
})();





(function() {
    'use strict';

    angular
        .module('vdb')
        .controller('collectoroverviewbottomCtrl', collectoroverviewbottomCtrl);

    collectoroverviewbottomCtrl.$inject = ['$scope'];

    function collectoroverviewbottomCtrl($scope) {
        'ngInject';
        const self = this;

        activate();

        ///////////

        function activate() {
         console.log("collectoroverviewbottomCtrl");
        }
    }
})();

(function() {
 'use strict';

 angular
 .module('vdb')
 .controller('datatopCtrl', datatopCtrl);

 datatopCtrl.$inject = ['$scope','$resource','search','$interval','RdYlGn','d3v4Service'];

 function datatopCtrl($scope,$resource,search,$interval,RdYlGn,d3v4Service) {
  'ngInject';
  const s = this;
  s.search = search;

  s.initialize = function() {
   s.pP = {};
   s.url = '/api/energy/:verb';

   s.actions = {
    'meterdata': {
     'method': 'POST',
     'params': { 'verb': 'meterdata'},
     'rparams': { 'widget': true, 'type': 'cal'}
    },
   }
   s.query = $resource(s.url,s.paramDefaults || {}, s.actions || {}, s.search.options);

   s.execute();

   s.promise = $interval(function() {
    s.execute();
   },s.search.getRefreshKey());

   $scope.backgroundColor = [];

   $scope.datasetOverride = [
    {
     label: "Actual Meter Reads",
     borderWidth: 1,
     type: 'bar',
     backgroundColor: $scope.backgroundColor,
     borderColor: $scope.backgroundColor

    },
    {
     label: "Expected Meter Reads",
     borderWidth: 3,
     type: 'line'
    }
   ];
  }

  s.execute = function() {
   s.search.getSearchParams(function(sp) {
    s.pP.searchParams = sp;
    s.pP.rP = s.actions.meterdata.rparams;
    s.qs = s.query.meterdata(s.pP,function(r) {
     console.log(r);
     //Populate the calendar
     $scope.cal = r.data.cal;

     //Populate the bar chart
     $scope.labels = r.data.bar.labels;
     $scope.data = r.data.bar.result;
     //Setup the colors fdr the bars
     d3v4Service.d3().then(function(d3) {

      var color = d3.scaleQuantize()
      .domain([0,1])
      .range(d3.range(RdYlGn().length).map(function(d) {
       return RdYlGn()[d];
      }));

      $scope.labels.forEach(function(m,i) {
       $scope.backgroundColor[i] = color($scope.data[0][i] / $scope.data[1][i]);
      })
     });


    });
   });
  }

  s.initialize();

  s.cleanup = function() {
   s.qs.$cancelRequest();
   $interval.cancel(s.promise);
  }

  $scope.$on('reset', function() {
   s.cleanup();
   s.initialize();
  });

  $scope.$on('unathorized', function() {
   s.cleanup();
  });

  $scope.$on('$destroy', function() {
   s.cleanup();
  });

 }
})();

(function() {
 'use strict';

 angular
 .module('vdb')
 .controller('datamiddleCtrl', datamiddleCtrl);

 datamiddleCtrl.$inject = ['$scope','$resource','search','$interval','colors'];

 function datamiddleCtrl($scope,$resource,search,$interval,colors) {
  'ngInject';
  const s = this;
  s.search = search;


  s.initialize = function() {


  }

  s.execute = function() {

  }
 }
})();





(function() {
 'use strict';

 angular
 .module('vdb')
 .controller('databottomCtrl', databottomCtrl);

 databottomCtrl.$inject = ['$scope','colors'];

 function databottomCtrl($scope,colors) {
  'ngInject';
  const self = this;

  activate();

  ///////////

  function activate() {



  }
 }
})();

(function() {
    'use strict';

    angular
        .module('vdb')
        .controller('mexploretopCtrl', mexploretopCtrl);

    mexploretopCtrl.$inject = ['$scope'];

    function mexploretopCtrl($scope) {
        'ngInject';
        const self = this;

        activate();

        ///////////

        function activate() {
         console.log("mexploretopCtrl");
        }
    }
})();



(function() {
    'use strict';

    angular
        .module('vdb')
        .controller('mexploremiddleCtrl', mexploremiddleCtrl);

    mexploremiddleCtrl.$inject = ['$scope'];

    function mexploremiddleCtrl($scope) {
        'ngInject';
        const self = this;

        activate();

        ///////////

        function activate() {
         console.log("mexploremiddleCtrl");
        }
    }
})();





(function() {
    'use strict';

    angular
        .module('vdb')
        .controller('mexplorebottomCtrl', mexplorebottomCtrl);

    mexplorebottomCtrl.$inject = ['$scope'];

    function mexplorebottomCtrl($scope) {
        'ngInject';
        const self = this;

        activate();

        ///////////

        function activate() {
         console.log("mexplorebottomCtrl");
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('vdb')
        .controller('meteroverviewtopCtrl', meteroverviewtopCtrl);

    meteroverviewtopCtrl.$inject = ['$scope'];

    function meteroverviewtopCtrl($scope) {
        'ngInject';
        const self = this;

        activate();

        ///////////

        function activate() {
         console.log("meteroverviewtopCtrl");
        }
    }
})();



(function() {
    'use strict';

    angular
        .module('vdb')
        .controller('meteroverviewmiddleCtrl', meteroverviewmiddleCtrl);

    meteroverviewmiddleCtrl.$inject = ['$scope'];

    function meteroverviewmiddleCtrl($scope) {
        'ngInject';
        const self = this;

        activate();

        ///////////

        function activate() {
         console.log("meteroverviewmiddleCtrl");
        }
    }
})();





(function() {
    'use strict';

    angular
        .module('vdb')
        .controller('meteroverviewbottomCtrl', meteroverviewbottomCtrl);

    meteroverviewbottomCtrl.$inject = ['$scope'];

    function meteroverviewbottomCtrl($scope) {
        'ngInject';
        const self = this;

        activate();

        ///////////

        function activate() {
         console.log("meteroverviewbottomCtrl");
        }
    }
})();

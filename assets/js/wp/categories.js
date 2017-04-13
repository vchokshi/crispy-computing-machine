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

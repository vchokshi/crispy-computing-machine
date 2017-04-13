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

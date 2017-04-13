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

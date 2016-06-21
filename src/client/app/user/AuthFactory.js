=(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('authFactory', authFactory);

  authFactory.$inject = ['$http', '$q', 'exception', 'logger'];
  /* @ngInject */
  function authFactory($http, $q, exception, logger) {
    var service = {
      login: loginUser,
      logout: getMessageCount
    };

    return service;

    function loginUser() {
      return $http.post('/user/login')
    }
    function getMessageCount() { return $q.when(72); }

    function getPeople() {
      return $http.get('/api/user')
        .then(success)
        .catch(fail);

      function success(response) {
        return response.data;
      }

      function fail(e) {
        return exception.catcher('XHR Failed for getPeople')(e);
      }
    }
  }
})();

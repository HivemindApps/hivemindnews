(function() {
  'use strict';

  angular
    .module('app.user')
    .controller('UserController', UserController);

  UserController.$inject = ['$q', 'dataservice', 'logger'];
  /* @ngInject */
  function UserController($q, dataservice, logger) {
    var vm = this;
    // vm.news = {
    //   title: 'User',
    //   description: 'Hot Towel Angular is a SPA template for Angular developers.'
    // };
    vm.messageCount = 0;
    vm.people = [];
    vm.title = 'User';

    activate();

    function activate() {
      var promises = [getMessageCount(), getPeople()];
      return $q.all(promises).then(function() {
        logger.info('Activated ' + vm.title + ' View');
      });
    }

    function getMessageCount() {
      return dataservice.getMessageCount().then(function(data) {
        vm.messageCount = data;
        return vm.messageCount;
      });
    }

    function getPeople() {
      return dataservice.getPeople().then(function(data) {
        vm.people = data;
        return vm.people;
      });
    }
  }
})();

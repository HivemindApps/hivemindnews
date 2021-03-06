(function() {
  'use strict';

  angular
    .module('app.layout')
    .controller('ShellController', ShellController);

  ShellController.$inject = ['$rootScope', '$timeout', 'config', 'logger', '$mdSidenav'];
  /* @ngInject */
  function ShellController($rootScope, $timeout, config, logger, $mdSidenav) {
    var vm = this;
    vm.busyMessage = 'Loading ...';
    vm.isBusy = true;
    $rootScope.showSplash = true;
    vm.navline = {
      title: config.appTitle,
      text: 'Created by Dylan Lott',
      link: 'http://twitter.com/dylanlott'
    };

    vm.toggleSidenav = function(menuId) {
      logger.info(menuId, "has been triggered.");
      $mdSidenav(menuId).toggle();
    };

    activate();

    function activate() {
      logger.success(config.appTitle + ' loaded!', null);
      hideSplash();
    }

    function hideSplash() {
      //Force a 1 second delay so we can see the splash.
      $timeout(function() {
        $rootScope.showSplash = false;
      }, 1000);
    }
  }
})();

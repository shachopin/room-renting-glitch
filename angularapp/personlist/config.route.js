(function() {
  'use strict';
  
  angular
    .module('app.personlist')
    .config(configFunction);

  function configFunction($routeProvider) {
    $routeProvider.when('/personlist', {  
      templateUrl: '/angularapp/personlist/personlist.html',
      controller: 'PersonlistController',
      controllerAs: 'vm'
    });
  }
  
  
})();
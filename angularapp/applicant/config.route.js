(function() {
  'use strict';
  
  angular
    .module('app.applicant')
    .config(configFunction);

  function configFunction($routeProvider) {
    //$routeProvider.when('/application', {  
    $routeProvider.when('/application', {  
      templateUrl: '/angularapp/applicant/application.html',
      controller: 'ApplicationController',
      controllerAs: 'vm'
    });
  }
  
  
})();
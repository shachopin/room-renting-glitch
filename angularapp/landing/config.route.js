(function() {
  'use strict';
  
  angular
    .module('app.landing')
    .config(configFunction);

  function configFunction($routeProvider, $locationProvider) { //unlike routeProvder, locationProvider is a angular service (just like location), no need to include that library
    $routeProvider.when('/', {  
      templateUrl: '/angularapp/landing/landing.html',
      controller: 'LandingController',
      controllerAs: 'vm'
    })
    .otherwise({
      redirectTo: '/'
    });
    // use the HTML5 History API
    $locationProvider.html5Mode(true);
  }
})();
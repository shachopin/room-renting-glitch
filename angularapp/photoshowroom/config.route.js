(function() {
  'use strict';
  
  angular
    .module('app.photoshowroom')
    .config(configFunction);

  function configFunction($routeProvider) {
    $routeProvider.when('/showroom', {  
      templateUrl: '/angularapp/photoshowroom/photoshowroom.html',
      controller: "PhotoShowRoomController",
      controllerAs: "vm"
    });
  }
})();
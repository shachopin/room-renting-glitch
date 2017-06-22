(function() {
  'use strict';
  
  angular
    .module('app.layout')
    .directive('ddNavbar', ddNavbar);
  
  function ddNavbar() {
    return {
      templateUrl: '/angularapp/layout/navbar.html',
      link: function(scope, element) { 
        //Enable Smooth Scrolling
        var $root = $('html, body');
        $('.navbar a').click(function () {
          var href = $.attr(this, 'href');
          if (href.includes('#')) {
            $root.animate({
                scrollTop: $(href).offset().top
            }, 500, function () {
                window.location.hash = href;
            });
            return false; //click on about, contact and faq link, will not finish the link action (only animation effect), return false. but click on apply, will go though as link action (triggering angular routes)
          }
        });
        $('.navbar-collapse ul li a').click(function () {
          $('.collapse').collapse('hide');
        });
      },
      restrict: 'E',
      scope: {},
      controller: NavbarController,
      controllerAs: "vm"
    };
  }
  
  function NavbarController($location) {//unlike routePovider, location is angular intertal service, no need to include extra library
    var vm = this;
    vm.isShowHouse = isShowHouse;
    //utility functions
    function isShowHouse() {
      return $location.path() === "/";
    }
  }
})();
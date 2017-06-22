(function() {
  'use strict';
  
  angular
    .module('app.landing')
    .factory('LandingService', LandingService); 
  
  function LandingService() {
    var parties = null;
    
    //return an object
    var service = {
      photos : [
        "https://photos.zillowstatic.com/p_f/IS-pnamb5os6xy5.jpg",
        "https://photos.zillowstatic.com/p_f/IS-pnamb1qpytzx.jpg",
        "https://photos.zillowstatic.com/p_f/IS-18fee77k4db31.jpg",
        "https://photos.zillowstatic.com/p_f/IS-pnambdkwn5ul.jpg",
        "https://photos.zillowstatic.com/p_f/IS-tdumkkiwgz19.jpg",
        "https://photos.zillowstatic.com/p_f/IS-tdumhe33xsgt.jpg",
        "https://photos.zillowstatic.com/p_f/IS-14oue133uukil.jpg",
        "https://photos.zillowstatic.com/p_f/IS-tdumhi165wf1.jpg"
      ]
    };
    
    return service;
    
    
    
  }
})();
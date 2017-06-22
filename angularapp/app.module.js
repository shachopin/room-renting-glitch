(function() {
  'use strict';

  angular
    .module('app', [
//       // Angular modules.
       'ngRoute',

//       // Third party modules.
       'firebase',

//       //Cutom module
       'app.applicant',
       'app.personlist',
       'app.landing',
//       'app.core',
       'app.layout',
       'app.photoshowroom'
    ]);
 })();
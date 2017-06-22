(function() {
  'use strict';

  angular
    .module('app.applicant')
    .controller('ApplicationController', ApplicationController);
  
  function ApplicationController($firebaseArray) { 
    var vm = this;  
    var firePersons = firebase.database().ref('persons');
    vm.persons = $firebaseArray(firePersons);
    
    vm.addApplicant = addApplicant;
    //utility function ///////////////////////////////////////////////
    function addApplicant(form) {
      vm.persons.$add(vm.applicant);
      vm.applicant = {}; 
      form.$setPristine(); //without this, the form will still be in a state of submitted
    } 
  }
 })();
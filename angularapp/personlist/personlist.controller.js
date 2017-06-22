(function() {
  'use strict';

  angular
    .module('app.personlist')
    .controller('PersonlistController', PersonlistController);
  
  function PersonlistController($firebaseArray) { 
    var vm = this;  
    var firePersons = firebase.database().ref('persons');
    vm.persons = $firebaseArray(firePersons);
    vm.removePerson = removePerson;
    vm.toggleSelected = toggleSelected;
    //utility function ///////////////////////////////////////////////
    function removePerson(person) {
      vm.persons.$remove(person);
    }
    
    function toggleSelected(person) {
      vm.persons.$save(person);
    }
  }
 })();
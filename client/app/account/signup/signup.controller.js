'use strict';

class SignupController {
  //start-non-standard
  user = {};
  errors = {};
  submitted = false;
  //end-non-standard
  constructor(Auth, $location, $scope, filterFilter) {
    this.Auth = Auth;
    this.$location = $location;
    $scope.special = "none";
    $scope.checkboxes = {
      mobile: {selected: false, id: 'mobile'},
      web: {selected: false, id: 'web'},
      test: {selected: false, id: 'test'},
      software: {selected: false, id: 'software'},
      myClick : function($event) { 
          $scope.special = $event.id;
        }
    };
    // $scope.specials = [
    //   { name: 'Test',    selected: false },
    //   { name: 'Web App',   selected: false },
    //   { name: 'Mobile App',     selected: false },
    //   { name: 'Software', selected: false }
    // ];
    // $scope.selection = [];
    // $scope.selectedFruits = function selectedFruits() {
    //   return filterFilter($scope.specials, { selected: true });
    // };
    // $scope.$watch('specials|filter:{selected:true}', function (nv) {
    //   $scope.selection = nv.map(function (special) {
    //     return special.name;
    //   });
    // }, true);
  }

  register(form) {
    this.submitted = true;

    if (form.$valid) {
      this.Auth.createUser({
        name: this.user.name,
        email: this.user.email,
        password: this.user.password,
        special: this.user.special
      })
      .then(() => {
        // Account created, redirect to home
        this.$location.path('/');
      })
      .catch(err => {
        err = err.data;
        this.errors = {};

        // Update validity of form fields that match the mongoose errors
        angular.forEach(err.errors, (error, field) => {
          form[field].$setValidity('mongoose', false);
          this.errors[field] = error.message;
        });
      });
    }
  }


}

angular.module('crowdSourcingApp')
  .controller('SignupController', SignupController);

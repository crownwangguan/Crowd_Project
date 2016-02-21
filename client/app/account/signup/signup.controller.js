'use strict';

class SignupController {
  //start-non-standard
  user = {};
  errors = {};
  submitted = false;
  // returnSpecial = $scope.special;
  //end-non-standard
  constructor(Auth, $location, $scope, filterFilter) {
    this.Auth = Auth;
    this.$location = $location;
    $scope.special = [];
    $scope.checkboxes = {
      mobile: {selected: false, id: 'mobile'},
      web: {selected: false, id: 'web'},
      test: {selected: false, id: 'test'},
      software: {selected: false, id: 'software'},
      myClick : function($event) { 
        if ($event.selected) {
          $scope.special.push($event.id);
        } else {
          var index = $scope.special.indexOf($event.id);
          this.returnSpecial = $scope.special.splice(index, 1);
          alert(this.returnSpecial);
        }
      }

    };
  }

  register(form) {
    this.submitted = true;
    // this.user.special = this.$scope.special;
    if (form.$valid) {
      this.Auth.createUser({
        name: this.user.name,
        email: this.user.email,
        password: this.user.password,
        special: this.returnSpecial
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

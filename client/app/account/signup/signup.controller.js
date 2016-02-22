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
    // $scope.checkboxModel = {
    //    value1 : true,
    //    value2 : 'YES'
    //  };
    // $scope.specials = [
    //   { name: 'mobile',    selected: false },
    //   { name: 'web',   selected: false },
    //   { name: 'software',     selected: false },
    //   { name: 'test', selected: false }
    // ];

    // // selected fruits
    // $scope.selection = [];

    // // helper method to get selected fruits
    // $scope.selectedSpecials = function selectedFruits() {
    //   return filterFilter($scope.specials, { selected: true });
    // };

    // // watch fruits for changes
    // $scope.$watch('specials|filter:{selected:true}', function (nv) {
    //   $scope.selection = nv.map(function (special) {
    //     return special.name;
    //   });
    // }, true);
    // $scope.showwhos = [];
    // $scope.special = {
    //   mobile: {selected: false, id: 'mobile'},
    //   web: {selected: false, id: 'web'},
    //   test: {selected: false, id: 'test'},
    //   software: {selected: false, id: 'software'},
    //   myClick: function($event){
    //     if ($event.selected) {
    //       $scope.showwhos.push($event.id);
    //     } else {
    //       var index = $scope.showwhos.indexOf($event.id);
    //       $scope.showwhos.splice(index, 1);
    //     }
    //   }
    // };
  }
    // $scope.special = [];
    // $scope.checkboxes = {
    //   mobile: {selected: false, id: 'mobile'},
    //   web: {selected: false, id: 'web'},
    //   test: {selected: false, id: 'test'},
    //   software: {selected: false, id: 'software'},
    //   myClick : function($event) { 
    //     if ($event.selected) {
    //       $scope.special.push($event.id);
    //     } else {
    //       var index = $scope.special.indexOf($event.id);
    //       this.returnSpecial = $scope.special.splice(index, 1);
    //       alert(this.returnSpecial);
    //     }
    //   }


  

  register(form) {
    this.submitted = true;
    // this.user.special = this.$scope.special;
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

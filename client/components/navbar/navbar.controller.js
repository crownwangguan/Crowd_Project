'use strict';
class NavbarController {
  //start-non-standard
  
  //end-non-standard

  constructor($location, $scope, $http, Auth) {
    this.menu = [{
      'title': 'Home',
      'link': '/'
    }];
    this.isCollapsed = true;
    this.$location = $location;
    this.Auth = Auth;
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser();
  }

  isActive(route) {
    return route === this.$location.path();
  }

  isee(){
    this.Auth.changeMessage(this.getCurrentUser._id, false);
    this.$location.path('/');
  }
}

angular.module('crowdSourcingApp')
  .controller('NavbarController', NavbarController);

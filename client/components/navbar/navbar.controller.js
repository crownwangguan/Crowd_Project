'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'link': '/'
  }];

  isCollapsed = true;
  //end-non-standard

  constructor($location, Auth) {
    this.$location = $location;
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
    this.notice = (Auth.getCurrentUser.choosen == true) ? 1 : 0;
  }

  isActive(route) {
    return route === this.$location.path();
  }
}

angular.module('crowdSourcingApp')
  .controller('NavbarController', NavbarController);

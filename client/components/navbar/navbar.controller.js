'use strict';

(function() {

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
    this.users = [];
    $http.get('/api/users').then(response => {
      this.users = response.data;
      socket.syncUpdates('user', this.users);
    });
    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('user');
    });
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
})();
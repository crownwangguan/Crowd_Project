'use strict';

(function() {

class SelectController {

  constructor($http, $scope, $location, Auth, thingService) {
    this.$http = $http;
    this.$location = $location;
    this.thingService = thingService;
    this.isAdmin = Auth.isAdmin;
    this.currentUser = Auth.getCurrentUser();
    this.users = [];
    this.thing = thingService.getThings();
    this.thing.money = thingService.getThings()[0];
    this.thing.tag = thingService.getThings()[1];
    $http.get('/api/users').then(response => {
      this.users = response.data;
      socket.syncUpdates('user', this.users);
    });
  }

  checkUser() {
    
  }

}

angular.module('crowdSourcingApp')
  .controller('SelectCtrl', SelectController);

})();
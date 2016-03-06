'use strict';

(function() {

class SelectController {

  constructor($http, $scope, $location, Auth, thingService) {
    this.$http = $http;
    this.Auth = Auth;
    this.$location = $location;
    this.thingService = thingService;
    this.isAdmin = Auth.isAdmin;
    this.users = [];
    this.currentUser = Auth.getCurrentUser();
    $http.get('/api/users').then(response => {
      this.users = response.data;
    });
    this.selectedUsers = {
      ids: []
    };
    this.checkedUser = [];
    this.thing = thingService.getThings();
    this.thing.money = thingService.getThings()[0];
    this.thing.tag = thingService.getThings()[1];
  }

  informUser() {
    if(this.selectedUsers.ids.length > 0){
      for (var id in this.selectedUsers.ids){
        this.$http.get('/api/users/' + this.selectedUsers.ids[id]).then(response=> {
          this.checkedUser.push(response.data);
        });
        this.Auth.changeMessage(this.selectedUsers.ids[id], true);
      }
    }
    this.$location.path('/');
  }

}

angular.module('crowdSourcingApp')
  .controller('SelectCtrl', SelectController);

})();
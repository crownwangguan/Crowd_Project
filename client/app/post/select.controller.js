'use strict';

(function() {

class SelectController {

  constructor($http, $scope, $location, thingService) {
    this.$http = $http;
    this.$location = $location;
    this.thingService = thingService;
    this.users = [];
    this.thing = thingService.getThings();
    this.thing.money = thingService.getThings()[0];
    this.thing.tag = thingService.getThings()[1];
    $http.get('/api/users').then(response => {
      this.users = response.data;
      socket.syncUpdates('user', this.users);
    });
  }

  isSameSpecailTag(user) {
    return true;
    // alert(user.tag)
    // if(user.tag == this.thing.tag){
    //   return true;
    // } else {
    //   return false;
    // }
  }
}

angular.module('crowdSourcingApp')
  .controller('SelectCtrl', SelectController);

})();
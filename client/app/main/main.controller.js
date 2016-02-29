'use strict';

(function() {

class MainController {

  constructor($http, $scope, socket, Auth) {
    this.$http = $http;
    this.awesomeThings = [];
    this.isAdmin = Auth.isAdmin;
    this.isLoggedIn = Auth.isLoggedIn();
    this.currentUser = Auth.getCurrentUser();
    this.userMail = Auth.getCurrentUser().email;
    $http.get('/api/things').then(response => {
      this.awesomeThings = response.data;
      socket.syncUpdates('thing', this.awesomeThings);
    });
    
    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
    });
  }

  updateThing(thing) {
    thing.taken += 1;
    this.$http.put('/api/things/' + thing._id, { taken: thing.taken });
  }

  deleteThing(thing) {
    this.$http.delete('/api/things/' + thing._id);
  }
}

angular.module('crowdSourcingApp')
  .controller('MainController', MainController);

})();

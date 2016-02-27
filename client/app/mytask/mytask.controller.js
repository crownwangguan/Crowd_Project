'use strict';

(function() {

class MytaskController {

  constructor($http, $scope, $routeParams, $location, socket, Auth) {
    this.$http = $http;
    this.$location = $location;
    this.awesomeThings = [];
    this.isLoggedIn = Auth.isLoggedIn();
    this.isAdmin = Auth.isAdmin();
    this.newMail = Auth.getCurrentUser().email;
    this.total = 1;
    
    $http.get('/api/things').then(response => {
      this.awesomeThings = response.data;
      socket.syncUpdates('thing', this.awesomeThings);
    });
    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
    });
  }
  deleteThing(thing) {
    this.$http.delete('/api/things/' + thing._id);
  }
}

angular.module('crowdSourcingApp')
  .controller('MytaskCtrl', MytaskController);

})();
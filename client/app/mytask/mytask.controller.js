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
    
    $http.get('/api/things').then(response => {
      this.awesomeThings = response.data;
      socket.syncUpdates('thing', this.awesomeThings);
    });
    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
    });
  }
  deleteThing(thing) {
    var r = window.confirm('Warning! Are you sure you want to delete this task?');
    if (r === true) {
        this.$http.delete('/api/things/' + thing._id);
    }
  }
}

angular.module('crowdSourcingApp')
  .controller('MytaskCtrl', MytaskController);

})();
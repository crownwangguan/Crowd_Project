'use strict';

(function() {

class MytaskController {

  constructor($http, $scope, $location, socket, Auth) {
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
}

angular.module('crowdSourcingApp')
  .controller('MytaskCtrl', MytaskController);

})();
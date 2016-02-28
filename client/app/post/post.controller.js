'use strict';

(function() {

class PostController {

  constructor($http, $scope, $location, socket, Auth) {
    this.$http = $http;
    this.$location = $location;
    this.awesomeThings = [];
    this.isAdmin = Auth.isAdmin;
    this.newMail = Auth.getCurrentUser().email;
    this.taken = 0;
    $http.get('/api/things').then(response => {
      this.awesomeThings = response.data;
      socket.syncUpdates('thing', this.awesomeThings);
    });

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
    });
  }

  addThing() {
    if (this.newThing && this.newThingDetail && this.newThingTag) {
      this.$http.post('/api/things', { name: this.newThing, info: this.newThingDetail, 
        tag: this.newThingTag, email: this.newMail, money: this.newThingMoney, 
        position: this.newThingPosition, taken: this.taken });
      this.newThing = '';
      this.newThingDetail = '';
      this.newThingTag = '';
      this.newThingMoney = '';
      this.newThingPosition = '';
      this.$location.path('/');
    }
  }
}

angular.module('crowdSourcingApp')
  .controller('PostCtrl', PostController);

})();
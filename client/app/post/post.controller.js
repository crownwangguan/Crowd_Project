'use strict';

(function() {

class PostController {

  constructor($http, $scope, socket, Auth) {
    this.$http = $http;
    this.awesomeThings = [];
    this.isAdmin = Auth.isAdmin;
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
      this.$http.post('/api/things', { name: this.newThing, info: this.newThingDetail, tag: this.newThingTag });
      this.newThing = '';
      this.newThingDetail = '';
      this.newThingTag = '';
    }
  }
}

angular.module('crowdSourcingApp')
  .controller('PostCtrl', PostController);

})();
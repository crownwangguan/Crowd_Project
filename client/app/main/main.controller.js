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
    // this.$http.put('/api/things' + thing._id, { name: thing.name, info: thing.info, 
    //     tag: thing.tag, email: thing.email, money: thing.money, 
    //     position: thing.position, taken: thing.taken });
    // this.$http.put(function(req, res) {
    //   // Use the Beer model to find a specific beer
    //   thing.findById(req.params.thing._id, function(err, thing) {
    //     if (err)
    //       res.send(err);

    //     // Update the existing beer quantity
    //     thing.taken = req.body.taken;

    //     // Save the beer and check for errors
    //     thing.save(function(err) {
    //       if (err)
    //         res.send(err);

    //       res.json(thing);
    //     });
    //   });
    // });
    // .then(response => {
    //   this.awesomeThings = response.data;
    //   socket.syncUpdates('thing', this.awesomeThings);
    // });
    // .success(function(newthing){
    //   this.awesomeThings[this.awesomeThings.indexOf(thing)] = newthing;
    // });
  }

  deleteThing(thing) {
    this.$http.delete('/api/things/' + thing._id);
  }
}

angular.module('crowdSourcingApp')
  .controller('MainController', MainController);

})();

'use strict';

(function() {

class AdminController {
  constructor(User) {
    // Use the User $resource to fetch all users
    this.users = User.query();
  }

  delete(user) {
  	if (confirm("Are you sure you want to delete this user?") == true) {
        user.$remove();
    	this.users.splice(this.users.indexOf(user), 1);
    }
  }
}

angular.module('crowdSourcingApp.admin')
  .controller('AdminController', AdminController);

})();

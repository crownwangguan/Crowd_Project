'use strict';

angular.module('crowdSourcingApp')
  .service('AuthService', function () {
   	var currentUser;
	return {
		currentUser: function() { return currentUser; }
	};
  });

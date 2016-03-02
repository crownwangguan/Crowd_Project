'use strict';

(function() {

function UserResource($resource) {
  return $resource('/api/users/:id/:controller', {
    id: '@_id'
  }, {
    changePassword: {
      method: 'PUT',
      params: {
        controller:'password'
      }
    },
    changeMessage: {
      method: 'PUT'
      // ,
      // params: {
      //   controller:'message'
      // }
    },
    get: {
      method: 'GET',
      params: {
        id:'me'
      }
    }
  });
}

angular.module('crowdSourcingApp.auth')
  .factory('User', UserResource);

})();

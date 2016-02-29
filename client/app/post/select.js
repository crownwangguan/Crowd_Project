'use strict';

angular.module('crowdSourcingApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/select', {
        templateUrl: 'app/post/select.html',
        controller: 'SelectCtrl',
        controllerAs: 'select'
      });
  });

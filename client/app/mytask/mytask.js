'use strict';

angular.module('crowdSourcingApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/mytask', {
        templateUrl: 'app/mytask/mytask.html',
        controller: 'MytaskCtrl',
        controllerAs: 'mytask'
      });
  });

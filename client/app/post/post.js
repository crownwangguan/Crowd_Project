'use strict';

angular.module('crowdSourcingApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/post', {
        templateUrl: 'app/post/post.html',
        controller: 'PostCtrl',
        controllerAs: 'post'
      });
  });

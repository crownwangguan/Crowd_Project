'use strict';

angular.module('crowdSourcingApp', [
  'crowdSourcingApp.auth',
  'crowdSourcingApp.admin',
  'crowdSourcingApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'btford.socket-io',
  'ui.bootstrap',
  'validation.match',
  'checklist-model'
])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });

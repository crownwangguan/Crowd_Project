'use strict';

angular.module('crowdSourcingApp.auth', [
  'crowdSourcingApp.constants',
  'crowdSourcingApp.util',
  'ngCookies',
  'ngRoute'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });

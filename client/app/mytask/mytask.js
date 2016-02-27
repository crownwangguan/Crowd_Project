'use strict';

angular.module('crowdSourcingApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/mytask', {
        templateUrl: 'app/mytask/mytask.html',
        controller: 'MytaskCtrl',
        controllerAs: 'mytask'
      })
  });

// function MytaskDetailCtrl($http, $scope, $routeParams, $location) {
// 	$scope.keyword = '';
// 	$scope.thingName = $routeParams.thingName;
// 	$scope.SearchData = function () {
        // var parameters = {
        //     keyword: $scope.keyword
        // };
        // var config = {
        //     params: $routeParams
        // };

        // $http.get('/api/things', config)
        // .success(function (data, status, headers, config) {
        //     $scope.Details = data;
        // })
        // .error(function (data, status, header, config) {
        //     $scope.ResponseDetails = "Data: " + data +
        //         "<hr />status: " + status +
        //         "<hr />headers: " + header +
        //         "<hr />config: " + config;
        // });
    //     alert('aaa');
    // };
	// $http.get('/api/things').then(response => {
 //      this.awesomeThings = response.data;
 //      socket.syncUpdates('thing', this.awesomeThings);
 //    });
 //    this.name = $routeParams.name;
 //    this.info = $routeParams.info;
 //    $scope.item = 
  // }
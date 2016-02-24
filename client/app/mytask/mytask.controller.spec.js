'use strict';

describe('Controller: MytaskCtrl', function () {

  // load the controller's module
  beforeEach(module('crowdSourcingApp'));

  var MytaskCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MytaskCtrl = $controller('MytaskCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

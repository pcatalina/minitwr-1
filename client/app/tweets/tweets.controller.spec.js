'use strict';

describe('Controller: TweetsCtrl', function () {

  // load the controller's module
  beforeEach(module('minitwrApp'));

  var TweetsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TweetsCtrl = $controller('TweetsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

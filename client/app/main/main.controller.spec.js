'use strict';

describe('Controller: MainCtrl', function() {

  // load the controller's module
  beforeEach(module('minitwrApp'));
  beforeEach(module('socketMock'));

  var MainCtrl,
    scope,
    $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function(_$httpBackend_, $controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function() {
    expect(' ').toBe(' ');
  });
});

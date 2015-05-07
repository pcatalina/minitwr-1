'use strict';

angular.module('minitwrApp')
  .controller('MainCtrl', function($scope, $location, Auth) {

    $scope.enter = function() {
      if(Auth.isLoggedIn())
        $location.path( "/tweets" );
      else
        $location.path( "/login" );
    }
  });

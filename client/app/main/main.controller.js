'use strict';

angular.module('minitwrApp')
  .controller('MainCtrl', function($scope, $location, Auth) {

    if(Auth.isLoggedIn())
      $location.path( "/tweets" );

    $scope.enter = function() {
      if(Auth.isLoggedIn())
        $location.path( "/tweets" );
      else
        $location.path( "/login" );
    }
  });

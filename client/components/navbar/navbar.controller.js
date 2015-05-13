'use strict';

angular.module('minitwrApp')
  .controller('NavbarCtrl', function($scope, $location, Auth) {

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var brandImages = [
      '/assets/images/bird-red-64.png',
      '/assets/images/bird-black-64.png',
      '/assets/images/bird-green-64.png',
      '/assets/images/bird-yellow-64.png',
      '/assets/images/bird-magenta-64.png',
      '/assets/images/bird-blue-64.png'
    ];

    var index = getRandomInt(0, brandImages.length - 1);
    $scope.brandImage = brandImages[index];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });

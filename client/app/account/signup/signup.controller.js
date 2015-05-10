'use strict';

angular.module('minitwrApp')
  .controller('SignupCtrl', function($scope, Auth, $location, $window) {
    $scope.user = {};
    $scope.errors = {};

    $scope.register = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.createUser({
          name: $scope.user.name,
          email: $scope.user.email,
          password: $scope.user.password
        })
          .then(function() {
            // Account created, redirect to home
            $location.path('/');
          })
          .catch(function(err) {
            err = err.data;
            $scope.errors = {};
          });
      }
    };

    $scope.showNameError = function() {
      return $scope.form.name.$invalid && ($scope.form.name.$touched
        || $scope.submitted);
    };

    $scope.isEmailInvalid = function() {
      return $scope.form.email.$invalid;
    };

    $scope.showEmailError = function() {
      return $scope.isEmailInvalid() && ($scope.form.email.$touched
        || $scope.submitted);
    };

    $scope.isPasswordInvalid = function() {
      return $scope.form.password.$invalid;
    };

    $scope.showPasswordError = function() {
      return $scope.isPasswordInvalid() && $scope.form.password.$touched
        || $scope.isPasswordInvalid() && $scope.submitted;
    };

    $scope.loginOauth = function(provider) {
      $window.location.href = '/auth/' + provider;
    };
  });

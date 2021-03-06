'use strict';

angular.module('minitwrApp')
  .controller('LoginCtrl', function($scope, Auth, $location, $window) {
    $scope.user = {};
    $scope.errors = {};
    $scope.showErrorAlert = false;

    $scope.login = function(form) {
      $scope.submitted = true;
      $scope.showErrorAlert = false;

      if(form.$valid) {
        Auth.login({
          email: $scope.user.email,
          password: $scope.user.password
        })
          .then(function() {
            $location.path('/tweets');
          })
          .catch(function(err) {
            $scope.errors.submitError = err.message;
            $scope.showErrorAlert = true;
          });
      }
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

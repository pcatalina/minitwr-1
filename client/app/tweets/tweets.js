'use strict';

angular.module('minitwrApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tweets', {
        url: '/tweets',
        templateUrl: 'app/tweets/tweets.html',
        controller: 'TweetsCtrl',
        authenticate: true
      });
  });

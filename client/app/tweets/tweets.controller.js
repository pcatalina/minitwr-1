'use strict';

angular.module('minitwrApp')
  .controller('TweetsCtrl', function ($scope, $http, socket) {
    $scope.tweets = [];

    $http.get('/api/tweets').success(function(tweets) {
      $scope.tweets = tweets;
      socket.syncUpdates('tweets', $scope.tweets);
    });

    $scope.addTweet = function() {
      if($scope.newTweet === '') return;
      $http.post('/api/tweets', { text: $scope.newTweet });
      $scope.newTweet = '';
    };

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('tweets');
    });
  });

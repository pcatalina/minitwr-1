'use strict';

angular.module('minitwrApp')
  .controller('TweetsCtrl', function ($scope, $http, socket) {
    $scope.tweets = [];

    $http.get('/api/tweets').success(function(tweets) {
      $scope.tweets = tweets;
      socket.syncUpdates('tweets', $scope.tweets);
    });

    $scope.addTweet = function() {
      if($scope.tweetText === '') return;
      $http.post('/api/tweets', { tweetText: $scope.tweetText });
      $scope.tweetText = '';
    };

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('tweets');
    });
  });

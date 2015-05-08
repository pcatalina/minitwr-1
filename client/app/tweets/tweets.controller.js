'use strict';

angular.module('minitwrApp')
  .controller('TweetsCtrl', function ($scope, $http, socket) {
    $scope.tweets = [];

    $http.get('/api/tweets').success(function(tweets) {
      $scope.tweets = tweets;
      socket.syncUpdates('tweet', $scope.tweets);
    });

    $scope.addTweet = function() {
      if($scope.tweetText === '') return;
      $http.post('/api/tweets', { tweetText: $scope.tweetText });
      $scope.tweetText = '';
    };

    $scope.isTweetValid = function() {
      if($scope.tweetText
        && ($scope.tweetText.length > 2)) {
        return false;
      }
      return true;

    };

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('tweet');
    });
  });

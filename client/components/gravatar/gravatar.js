'use strict';

angular.module('minitwrApp')
  .directive('gravatar', ['Auth', function(Auth) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        var user = Auth.getCurrentUser();
        var email = user.email.trim();
        var hash = md5(email);
        console.log(hash);
        attrs.$set('src', 'http://www.gravatar.com/avatar/' + hash + ".jpg?s=64&r=g");
      }
    };
  }]);


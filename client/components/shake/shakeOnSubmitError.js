angular.module('minitwrApp')
  .directive('shakeOnSubmitError', ['$animate', function($animate) {

    return {
      require: '^form',
      scope: {},
      link: function(scope, element, attrs, form) {

        function shake(element, times, distance, interval) {

          element.css('position', 'relative');

          for(var iter = 0; iter < (times + 1); iter++) {
            element.animate({
              left: ((iter % 2 == 0 ? distance : distance * -1))
            }, interval);
          }
          element.animate({ left: 0 }, interval);
        }

        element.on('submit', function() {
          scope.$apply(function() {
            if(form.$invalid && !scope.shaking) {
              scope.shaking = true;
              shake(element, 4, 10, 100);
              scope.shaking = false;
            }
          });
        });
      }
    };
  }]);

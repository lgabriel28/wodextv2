angular.module('myApp')
.directive('wtWod', [ function() {
  return {
    replace: true,
    restrict: "E",
    templateUrl: "templates/directives/wt-wod.html",
    scope: {
     reps: "@",
     exercise: "@",
     clock: "@"
    }
  };
}]);

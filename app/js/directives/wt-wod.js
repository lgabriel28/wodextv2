angular.module('myApp')
.directive('wtWod', [ function() {
  return {
    replace: true,
    restrict: "E",
    scope: {},
    templateUrl: "templates/directives/wt-wod.html"
  };
}]);

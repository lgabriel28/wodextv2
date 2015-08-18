angular.module('myApp')
.directive('wtSetup', [ function() {
  return {
    replace: true,
    restrict: "E",
    scope: {
      category: "="
    },
    templateUrl: "templates/directives/wt-setup.html"
  };
}]);

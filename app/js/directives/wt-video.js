angular.module('myApp')
.directive('wtVideo', [ function() {
  return {
    replace: true,
    restrict: "E",
    templateUrl: "templates/directives/wt-video.html",
    scope: {
     src: "@",
     video: "@"
    },
    link: function(scope, element, attr){
    	
    }
  };
}]);

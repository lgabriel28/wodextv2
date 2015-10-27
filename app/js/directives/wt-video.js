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
    link: function(scope, element, attrs, controller){
      console.log(element);
      scope.$watch("video", function(value){
        ///console.log(value, element, scope);
        console.log(element["context"]["currentTime"]);
      });
    }
    
  };
}]);

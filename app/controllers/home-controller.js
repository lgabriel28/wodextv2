angular.module('myApp').controller('HomeController', function($scope) {

  $scope.setup = {
    intensity:"",
    focus:"",
    format:""
  };

  $scope.intensity = {
    easy: "easy-edited2.png",
    medium: "medium-edited.png",
    hard: "hard-edited.png"
  };
 
  $scope.focus = {
    cardio: "cardio.png",
    strength: "strength.png",
    both: "both.png"
  };

  $scope.format = {
    fortime: "forTime.png",
    amrap: "amrap.png",
    emotm: "emotm.png"
  };

  // Create function to write setup object.
  $scope.configure = function() {
        
        $scope.myVar = !$scope.myVar;

    };
});
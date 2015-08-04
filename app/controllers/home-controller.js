angular.module('myApp')
.controller('HomeController', function($scope) {

  $scope.setup = {
    intensity:"",
    focus:"",
    format:""
  };

  $scope.intensity = {
    title: "Customize your workout:",
    subtitle: "Let's get started. Select level of intensity below.",
    easy: "easy.png",
    medium: "medium.png",
    hard: "hard.png"
  };

  // Create function hide headline.
  $scope.configure = function() {
        
        $scope.myVar = !$scope.myVar;

    };
});
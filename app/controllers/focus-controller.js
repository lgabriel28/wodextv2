angular.module('myApp')
.controller('FocusController', function($scope) {

$scope.focus = {
	title: "What do you want to focus on?",
	subtitle: "Select between cardio, strenght, or a combination of both.",
    cardio: "cardio.png",
    strength: "strength.png",
    both: "both.png"
  };

});
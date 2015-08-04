angular.module('myApp')
.controller('FormatController', function($scope) {

	$scope.format = {
	title: "Select a workout style.",
	subtitle: "For Time: Description here. | Amrap: Description here. | EMOTM: Description here.",
    fortime: "forTime.png",
    amrap: "amrap.png",
    emotm: "emotm.png"
  };

});
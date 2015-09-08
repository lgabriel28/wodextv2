angular.module('myApp')
.controller('WodController', function($scope, $routeParams, $sce, Wod, Video) {

var settings = $routeParams.id;
settings = settings.replace(/[\[\]']+/g,'');
settings = settings.split(",");
var parameters = "intensity="+settings[0]+"&focus="+settings[1]+"&format="+settings[2];

$scope.wod = Wod.query({id: parameters});

	$scope.wod.$promise.then(function (result) {
	    $scope.wod = result;
	    $scope.reps = $scope.wod[0];
	 	$scope.exercise = $scope.wod[1];
		$scope.clock = $scope.wod[2];
		var exerciseParam = "exercise="+$scope.exercise; 

		$scope.video = Video.query({id: exerciseParam});

		$scope.video.$promise.then(function (result) {
			$scope.video = result;
			var index = Math.floor((Math.random() * ($scope.video.length-1)) + 1);
			$scope.src = $sce.trustAsResourceUrl($scope.video[index]);
		});		
	});
});
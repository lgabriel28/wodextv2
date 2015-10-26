angular.module('myApp')
.controller('WodController', function($scope, $routeParams, $sce, Wod, Video) {

// Extract workout configuration parameters passed in url.
var settings = $routeParams.id;
settings = settings.replace(/[\[\]']+/g,'');
settings = settings.split(",");
var parameters = "intensity="+settings[0]+"&focus="+settings[1]+"&format="+settings[2];

// Call service to obtain WOD (workout of the day) by passing configuration parameters.
$scope.wod = Wod.query({id: parameters});

$scope.wod.$promise.then(function (result) {
    $scope.wod = result;
    $scope.reps = $scope.wod[0];
 	$scope.exercise = $scope.wod[1];
	$scope.clock = $scope.wod[2];

	// Call Video service, pass exercises to use them as hashtags and extract them as videos using Instagram API.
	$scope.video = Video.query({id: "exercise="+$scope.exercise});

	$scope.video.$promise.then(function (result) {
		$scope.video = result;
		$scope.src = $sce.trustAsResourceUrl($scope.video[0]);
	});		
});
 
});
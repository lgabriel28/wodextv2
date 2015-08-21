angular.module('myApp')
.controller('WodController', function($scope, $routeParams, Wod) {

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
});

 
});
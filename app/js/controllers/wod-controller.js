angular.module('myApp')
.controller('WodController', function($scope, $routeParams, Wod) {

var reps;
var exercises;
var clock;

var settings = $routeParams.id;
settings = settings.replace(/[\[\]']+/g,'');
settings = settings.split(",");
var parameters = "intensity="+settings[0]+"&focus="+settings[1]+"&format="+settings[2];

$scope.wod = Wod.query({id: parameters});

$scope.wod.$promise.then(function (result) {
    $scope.wod = result;
});

// var reps = $scope.wod.promise[0];
// var exercises = $scope.wod[1];
// var clock = $scope.wod[2];


});
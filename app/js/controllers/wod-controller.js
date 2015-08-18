angular.module('myApp')
.controller('WodController', function($scope, $routeParams, Wod) {

	var settings = $routeParams.id;
	settings = settings.replace(/[\[\]']+/g,'');
	settings = settings.split(",");
	var parameters = "intensity="+settings[0]+"&focus="+settings[1]+"&format"+settings[2];
	console.log(parameters);

	$scope.wod = Wod.query({id: parameters});


});
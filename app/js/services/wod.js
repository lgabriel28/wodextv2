angular.module("myApp")
.factory("Wod", function WodFactory($resource){
	return $resource("http://ec2-54-68-111-65.us-west-2.compute.amazonaws.com/app/server/wod.php?:id", {}, {});
});
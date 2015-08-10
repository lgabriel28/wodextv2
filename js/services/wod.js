angular.module("myApp")
.factory("Wod", function WodFactory($resource){
	return $resource("http://localhost/wodex-tv/server/wod.php?:id", {}, {});
});
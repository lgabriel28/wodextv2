angular.module("myApp")
.factory("Video", function VideoFactory($resource){
	return $resource("http://ec2-54-68-111-65.us-west-2.compute.amazonaws.com/app/server/video.php?:id", {}, {});
});
<?php 
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$video = array(	"https://scontent.cdninstagram.com/hphotos-xaf1/t50.2887-16/11771373_976216705734822_1766444921_n.mp4",
			    "https://scontent.cdninstagram.com/hphotos-xaf1/t50.2886-16/11912112_1515344128757030_416273830_n.mp4",
			    "https://scontent.cdninstagram.com/hphotos-xaf1/t50.2886-16/11948803_317833761673966_399287553_n.mp4",
			    "https://scontent.cdninstagram.com/hphotos-xfa1/t50.2886-16/11912048_404602509742035_364470107_n.mp4",
			    "https://scontent.cdninstagram.com/hphotos-xaf1/t50.2886-16/11948889_475886349238779_841600827_n.mp4");

$num = rand(0, count($video)-1);
$vid = $video[$num];
echo json_encode($video);

?>
<?php 
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$exercises = $_GET['exercise'];
$exercisesArray = explode("-", $exercises);
$randomExercise = rand(0, count($exercisesArray)-1);
$exercise = trim($exercisesArray[$randomExercise]);
$exercise = str_replace(' ', '', $exercise);

$FILTER_URL = "https://api.instagram.com/v1/tags/";
$uri =  $exercise."/media/recent?count=30&client_id=93daf7f27158410b8a8991ab0d8689c0";
$request = $FILTER_URL.$uri;

$urlArray = array();

//cURL settings
$curl  = curl_init(); // cURL Handle;
curl_setopt($curl, CURLOPT_URL, $request);
curl_setopt($curl,CURLOPT_SSL_VERIFYPEER,false);
curl_setopt($curl,CURLOPT_SSL_VERIFYHOST, FALSE);
curl_setopt($curl,CURLOPT_RETURNTRANSFER,true);
curl_setopt($curl,CURLOPT_TIMEOUT, 30);
//curl_setopt($curl,CURLOPT_HTTPHEADER, $headers);

//Send cURL request and retrieve Intagram response.
$video = curl_exec($curl);
$videoResponse = json_decode($video, true);

$recordCount = count($videoResponse['data']);

for($i = 0;$i < $recordCount; $i++){
    if($videoResponse['data'][$i]['type'] == "video"){
        array_push($urlArray, $videoResponse['data'][$i]['videos']['standard_resolution']['url']);
    }
}

$video = array(	
                        array("https://scontent.cdninstagram.com/hphotos-xaf1/t50.2887-16/11771373_976216705734822_1766444921_n.mp4"),
                        array("https://scontent.cdninstagram.com/hphotos-xaf1/t50.2886-16/11912112_1515344128757030_416273830_n.mp4"),
                        array("https://scontent.cdninstagram.com/hphotos-xaf1/t50.2886-16/11948803_317833761673966_399287553_n.mp4"),
                        array("https://scontent.cdninstagram.com/hphotos-xfa1/t50.2886-16/11912048_404602509742035_364470107_n.mp4"),
                        array("https://scontent.cdninstagram.com/hphotos-xaf1/t50.2886-16/11948889_475886349238779_841600827_n.mp4")
                );

$num = rand(0, count($video)-1);
$vid = $video[$num];
echo json_encode($urlArray);

?>
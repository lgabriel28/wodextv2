<?php 
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
$intensity = $_GET['intensity'];
$test = array('value1,value2,value3',$intensity);
echo json_encode($test);

?>
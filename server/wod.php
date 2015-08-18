<?php 
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$intensity = $_GET['intensity'];
$focus = $_GET['focus'];
$format = $_GET['format'];


$wod = array('21-15-9', 'Air Squats,Burpees,Sit Ups', 'ForTime');
echo json_encode($wod);

?>
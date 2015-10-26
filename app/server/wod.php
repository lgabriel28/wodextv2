<?php 
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$intensity = $_GET['intensity'];
$focus = $_GET['focus'];
$format = $_GET['format'];

$workouts = array(
		array('21-15-9', 'Air Squads - Burpees - Sit Ups', 'For Time'),
		array('7-7-7', 'One legged deadlift - Jumping Jax - Hollow Rocks', 'AMRAP'),
		array('20 min', 'Mountain Climbers - Air Squads - Push ups', 'EMOTM'),
		array('10', 'Burpees - Thrusters', 'EMOTM'),
		array('5-10-20', 'Jumping Air Squad - Jumping Jax - Thrusters', 'For Time'),
		array('15 min', 'Mountain Climbers - Air Squads - Push ups', 'EMOTM')
	);

$num = rand(0, count($workouts)-1);
$wod = $workouts[$num];
echo json_encode($wod);

?>
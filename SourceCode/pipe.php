<?php
require('functions.php');
//commands to be executed through command prompt



$command = $argv[1] ?? "";

try {
	switch ($command) {

		case 'init':
			init();
			break;

		case 'get_places':
			$filter = extract_filter($argv[2] ?? "");
			$places = get_places($filter);
			foreach ($places as $id => $place) {
				echo "ID: " . $id . "\tName: " . $place["name"] . "\n";
			}
			break;
		case 'insert_place':
			$filter = extract_filter($argv[2] ?? "");
			insert_place($filter);
			break;
		/*case 'insert_city';
			insert_city($argv[2] ?? null);
			break;*/
		case 'insert_category';
			insert_category($argv[2] ?? null);
			break;
		/*case 'get_all_cities':
			$cities = get_all_cities();*/
			foreach ($cities as $id => $city) {
				echo "ID: " . $id . "\tName: " . $city . "\n";
			}

			break;
		default:
			echo "You didn't called any command";
			break;
	}
} catch (Exception $e) {
	echo $e->getMessage();
}

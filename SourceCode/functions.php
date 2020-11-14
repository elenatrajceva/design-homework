<?php
define('DATABASE_FILE', "database.json");
//main logic of our project
function init()
{
    $database = [
        "cities" => [],
        "categories" => [],
        "places" => []
    ];
    save($database);
}

function save($json)
{
    $database = fopen(DATABASE_FILE, "w") or die("Unable to open file!");
    fwrite($database, json_encode($json));
    fclose($database);
}
function load()
{
    $database = fopen(DATABASE_FILE, "r") or die("Unable to open file!");
    $content = fread($database, filesize(DATABASE_FILE));
    return json_decode($content, true);
}
/*function get_city_by_id($city_id){
    $cities = get_all_cities();
    return $cities[$city_id];
}*/
function get_category_by_id($category_id){
    $categories = get_all_categories();
    return $categories[$category_id];
}
function insert_place($place){
    if(!isset($place["name"])) throw new Exception("Place name not provided");
    /*if(!isset($place["city_id"]) || !get_city_by_id($place["city_id"]) ) throw new Exception("City not provided or not exists");*/
    if(!isset($place["category_id"]) || !get_category_by_id($place["category_id"])) throw new Exception("Category not provided or not exists");
    $database = load();
    $database["places"][] = $place;
    save($database);
};

/*function insert_city($city){
    if(!isset($city)) throw new Exception("City name not provided");
    $database = load();
    if(in_array($city, $database["cities"]))throw new Exception("City already exists");
    $database["cities"][] = $city;
    save($database);
}*/
function insert_category($category){
    if(!isset($category)) throw new Exception("Category name not provided");
    $database = load();
    if(in_array($category, $database["categories"]))throw new Exception("Category already exists");
    $database["categories"][] = $category;
    save($database);
}
/*function get_all_cities(){
    $database = load();
    return $database["cities"];
}*/
function get_all_categories(){
    $database = load();
    return $database["categories"];
}

function get_places($filter){
    $database = load();
    $places = $database["places"];
    return array_filter($places, function($place){ 
        return true;
    });
}

function extract_filter($string){
    if($string == "") return [];
    $args = explode(";", $string);
    $filter = [];
    foreach($args as $arg){
        $a = explode("=", $arg);
        if(count($a) != 2) throw new Exception("Filter not formatted");
        $filter[$a[0]] = $a[1];
    }
    return $filter;
}

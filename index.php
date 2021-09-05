<?php
include_once("admin_area/functions.php");
$url_param = $_GET['q'];

$url_param = sanitizeString($url_param);
$result = queryMysql("SELECT * FROM links WHERE link_text='$url_param'");


$rows=getRows($result);
$link_text = $rows['link_text'];
$link_dest = $rows['link_destination'];


if ($link_text) {
	header("Location: $link_dest");
}
else{
    header("Location: https://noteandsave.com/short/?err=No_Such_Directory");
}

?>
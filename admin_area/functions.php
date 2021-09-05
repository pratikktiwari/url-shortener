<?php
include("includes/db.php");

if (mysqli_connect_errno()) {
		echo"Faild to Connect to MySQL:".mysqli_connect_error();
	}

function queryMysql($query)
  {
    global $con;
    $result = $con->query($query);
    if (!$result) die($con->error);
    return $result;
  }
function getRows($result){
  	$row = $result->fetch_array(MYSQLI_ASSOC);
  	return $row;
  }


function sanitizeString($var)
  {
    global $con;
    $var = strip_tags($var);
    $var = htmlentities($var);
    $var = stripslashes($var);
    return $con->real_escape_string($var);
  }
<?php
	$con = mysqli_connect("localhost", "dbName", "pass","user");
	if (mysqli_connect_errno()) {
		echo"Failed to Connect to MySQL:".mysqli_connect_error();
	}

?>
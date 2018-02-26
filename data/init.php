<?php
header("Content-Type:application/json");
$conn = mysqli_connect('127.0.0.1','root','','steam',3306);
mysqli_query($conn, "SET NAMES UTF8");
?>
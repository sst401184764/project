<?php
require("../init.php");
$sql="SELECT * FROM steam_banner Limit 0,7";
$result=mysqli_query($conn,$sql);
$rows=mysqli_fetch_all($result,1);
echo json_encode($rows);
?>
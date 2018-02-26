<?php
require("../init.php");
session_start();
@$uid=$_SESSION["uid"];
$sql="SELECT * FROM steam_ulist WHERE uid='$uid'";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_assoc($result);
if($row){
    echo json_encode(["code"=>1,"msg"=>"用户已登录","uname"=>$row["uname"]]);
}else{
    echo json_encode(["code"=>-1,"msg"=>"用户未登录"]);
}
?>
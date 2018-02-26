<?php
require("../init.php");
@$uname=$_REQUEST["uname"];
@$upwd=$_REQUEST["upwd"];
$sql="SELECT * From steam_ulist WHERE uname='$uname' AND upwd='$upwd'";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_assoc($result);
if($row){
    session_start();
    $_SESSION["uid"]=$row["uid"];
    echo json_encode(["code"=>1,"msg"=>"登陆成功"]);
}else{
    echo json_encode(["code"=>-1,"msg"=>"登录失败，用户名或密码错误"]);
}
?>
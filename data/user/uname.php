<?php
require("../init.php");
@$uname=$_REQUEST["uname"];
if($uname){
    $sql="SELECT count(*) FROM steam_ulist WHERE uname='$uname'";
    $result=mysqli_query($conn,$sql);
    $row=mysqli_fetch_row($result);
    if($row[0]==0){
        echo json_encode(["code"=>1,"msg"=>"用户名可用"]);
    }else{
        echo json_encode(["code"=>-1,"msg"=>"用户名重复"]);
    }
}
?>
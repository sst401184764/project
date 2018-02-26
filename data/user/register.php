<?php
require("../init.php");
@$uname=$_REQUEST["uname"];
@$upwd=$_REQUEST["upwd"];
@$mail=$_REQUEST["mail"];
@$phone=$_REQUEST["phone"];
if($uname&&$upwd&&$mail&&$phone){
    $sql="INSERT INTO steam_ulist (uid,uname,upwd,email,phone,gender) VALUES ";
    $sql.=" (null,'$uname','$upwd','$mail','$phone',1)";
    $result=mysqli_query($conn,$sql);
    $row=mysqli_affected_rows($conn);
    if($row){
        echo json_encode(["code"=>1,"msg"=>"注册成功"]);
    }else{
        echo json_encode(["code"=>-1,"msg"=>"注册失败"]);
    }
}else{
    echo json_encode(["code"=>-2,"msg"=>"注册信息不全"]);
}
?>
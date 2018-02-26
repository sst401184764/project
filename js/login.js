$(()=>{
    $(".login_btn").click(()=>{
        var uname=$(".uname").val();
        var upwd=$(".upwd").val();
        $.ajax({
            type:"post",
            url:"data/user/login.php",
            data:{uname,upwd},
            success:data=>{
                alert(data.msg);
                if(data.code>0){
                    location.href="index.html";
                }
            }
        })
    })
    $(".register_btn").click(()=>{
        location.href="register.html";
    })
    onkeydown=e=>{
		if(e.keyCode==13)
            $(".login_btn").click();
    }
})
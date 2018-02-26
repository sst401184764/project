$(()=>{   
    $("#new_uname").focus(e=>{
        $(e.target).next("span").html("用户名长度应在3~12位之间").removeClass();
    })
    $("#new_uname").blur(e=>{
        var $tar=$(e.target);
        var uname=$tar.val();
        var reg=/^[a-z0-9]{3,12}$/ig;
        if(uname.length==0){
            $tar.next("span").html("请输入用户名").addClass("danger");
        }else if(uname.length<3||uname.length>12){
            $tar.next("span").html("用户名长度不符合规范").addClass("danger");
        }else if(!reg.test(uname)){
            $tar.next("span").html("用户名包含非法字符").addClass("danger");
        }else{
            $.ajax({
                type:"post",
                url:"data/user/uname.php",
                data:{uname},
                success:data=>{
                    if(data.code>0){
                        $tar.next("span").html(data.msg).addClass("success");
                    }else{
                        $tar.next("span").html(data.msg).addClass("danger");
                    }
                }
            })
        }0
        canRegister();       
    })
    $("#new_upwd").focus(e=>{
        $(e.target).next("span").html("密码长度应在8~20位之间").removeClass();
    })
    $("#new_upwd").blur(e=>{
        var $tar=$(e.target);
        var upwd=$tar.val();
        var reg=/^[a-z0-9]{8,20}$/ig;
        if(upwd.length==0){
            $tar.next("span").html("请输入密码").addClass("danger");
        }else if(upwd.length<8||upwd.length>20){
            $tar.next("span").html("密码长度不符合规范").addClass("danger");
        }else if(!reg.test(upwd)){
            $(e.target).next("span").html("密码包含非法字符").addClass("danger");
        }else{
            $tar.next("span").html("密码可以使用").addClass("success");
        }
        $("#new_rupwd").blur();
        canRegister();
    })
    $("#new_rupwd").focus(e=>{
        if($("#new_upwd").next("span").is(".danger")||$("#new_upwd").val()==""){
            $(e.target).next("span").html("您的密码不符合规范，请先修改密码").addClass("danger");
        }else{
            $(e.target).next("span").html("请再次确认您的密码").removeClass();
        }
    })
    $("#new_rupwd").blur(e=>{
        var $tar=$(e.target);
        var rupwd=$tar.val();
        if($("#new_upwd").next("span").is(".danger")||$("#new_upwd").val()==""){
            $tar.next("span").html("您的密码不符合规范，请先修改密码").addClass("danger");
        }else if(rupwd!=$("#new_upwd").val()){
            $tar.next("span").html("两次输入的密码不相同").addClass("danger");
        }else{
            $tar.next("span").html("确认成功").addClass("success");  
        }
        canRegister();
    })
    $("#new_mail").focus(e=>{
            $(e.target).next("span").html("请输入您的邮箱").removeClass();
    })
    $("#new_mail").blur(e=>{
        var $tar=$(e.target);
        var mail=$tar.val();
        var reg=/^[a-z0-9]{1,16}@[a-z0-9]{1,15}.(com)|(cn)$/ig;
        if(!reg.test(mail)){
            $tar.next("span").html("邮箱名不符合规范").addClass("danger");
        }else{
            $tar.next("span").html("邮箱可以使用").addClass("success");
        }
        canRegister();
    })
    $("#new_phone").focus(e=>{
            $(e.target).next("span").html("请输入您的电话号码").removeClass();
    })
    $("#new_phone").blur(e=>{
        var $tar=$(e.target);
        var phone=$tar.val();
        var reg=/^[1][34578][0-9]{9}$/g;
        if(!reg.test(phone)){
            $tar.next("span").html("电话号码不符合规范").addClass("danger");
        }else{
            $tar.next("span").html("电话号码可以使用").addClass("success");
        }
        canRegister();
    })
    $(".register_btn").click(()=>{
        var uname=$("#new_uname").val(),
        upwd=$("#new_upwd").val(),
        mail=$("#new_mail").val(),
        phone=$("#new_phone").val();
        $.ajax({
            type:"post",
            url:"data/user/register.php",
            data:{uname,upwd,mail,phone},
            success:data=>{
                alert(data.msg);
                if(data.code>0){
                    location.href="login.html";
                }    
            }
        })
    })
    $(".agreement").change(()=>{
        canRegister();
    })
    function canRegister(){
        if($(".form_input_div>span.success").length==5&&$(".agreement").prop("checked")){
            $(".register_btn").prop("disabled",false);
        }else{
            $(".register_btn").prop("disabled",true);
        }
    }
    onkeydown=e=>{
		if(e.keyCode==13)
            $(".register_btn").click();
    }
})
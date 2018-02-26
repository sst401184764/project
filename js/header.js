$(()=>{
    $.ajax({
        type:"get",
        url:"header.html",
        success:data=>{
            $("header").html(data);
            $(".language_list").click(() => {
                var $tar = $(".language_list")
                var $langs = $(".header_languages");
                if ($tar.hasClass("active")) {
                    $langs.hide();
                    $tar.removeClass("active");
                } else {
                    $langs.show();
                    $tar.addClass("active");
                }
            })
            $(".to_login_btn").click(()=>{
                location.href="login.html";
            })
            $(".user_logout").click(()=>{
                $.ajax({
                    type:"get",
                    url:"data/user/logout.php",
                    success:()=>{
                        location.href="";
                    }
                })
            })
        }
    })
    $.ajax({
        type:"get",
        url:"data/user/isLogin.php",
        dataType:"json",
        success:data=>{
            if(data.code>0){
                $(".login").removeClass("active");
                $(".user").addClass("active");
                $(".login_uname").html(data.uname);
            }else{
                $(".login").addClass("active");
                $(".user").removeClass("active");
            }
        }
    })
})


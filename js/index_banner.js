$(()=>{
    $.ajax({
        type:"get",
        url:"data/index/banner.php",
    }).then(data=>{
//         var html="";
//         for(var item of data){
//             html+=`<div class="banner_content" game="${item.bid}">
//             <div class="banner_pic">
//                 <div class="banner_mian_pic">
//                     <img src="${item.lg}"
//                             data-src="${item.lg}">
//                 </div>
//                 <div class="banner_oth_pic">
//                     <p>${item.game}</p>
//                     <img src="${item.md1}">
//                     <img src="${item.md2}">
//                     <img src="${item.md3}">
//                     <img src="${item.md4}">
//                     <div class="banner_price">
//                         <p>${item.title}</p>
//                         <p><span>${item.tag1}</span>`;
//         if(item.tag2)html+=`<span>${item.tag2}</span>`;
//         if(item.tag3)html+=`<span>${item.tag3}</span>`;
//         html+=`</p>
//         <p>￥${item.price}`
//         if(item.linux==1)html+=`<img src="img/body/banner/icon_platform_linux.png">`
//         if(item.mac==1)html+=`<img src="img/body/banner/icon_platform_mac.png">`
//         if(item.win==1)html+=`<img src="img/body/banner/icon_platform_win.png">`
//         html+=`</p></div></div></div></div>`;
//        }
//         $(".banner>.banner_contents").html(html).children().first().addClass("active");
        $(".banner_content").hover(function(){
            clearInterval(timer);
            timer=null;
        },function(){
            timer=setInterval(banner,4000);
        })
        $(".banner_content[game=1]").click(()=>{
            location.href="game.html";
        })
    })
    var timer=setInterval(banner,4000)
    $(".banner .arrow.left").on("click","",function(){
        clearInterval(timer);
        timer=null;
        banner(-1);
        timer=setInterval(banner,4000)
    });
    $(".banner .arrow.right").on("click","",function(){
        clearInterval(timer);
        timer=null;
        banner();
        timer=setInterval(banner,4000)
    });
    $(".banner").on("mouseenter",".banner_oth_pic>img",function(e){
        $tar=$(e.target);
        $tar.parent().siblings(".banner_mian_pic").children("img").attr("src",$tar.attr("src"));
    }).on("mouseleave",".banner_oth_pic>img",function(e){
        $tar=$(e.target);
        var Src=$tar.parent().siblings(".banner_mian_pic").children("img").data("src");
        $tar.parent().siblings(".banner_mian_pic").children("img").attr("src",Src);
    });
    function banner(){
        var $banner=$(".banner_content.active");
        if(arguments.length>0){
            $banner.removeClass("active");
            if($banner.prev(".banner_content")[0]){
                $banner.prev().addClass("active");
            }else{
                $banner.parent().find(".banner_content").last().addClass("active");
            }
        }else {
            $banner.removeClass("active");
            if ($banner.next(".banner_content")[0]) {
                $banner.next().addClass("active");
            } else {
                $banner.parent().find(".banner_content").first().addClass("active");
            }
        }
        var i=$(".banner_content.active").index();
        $($(".banner .under_list>li")[i]).addClass("active").siblings().removeClass("active")
    }
})

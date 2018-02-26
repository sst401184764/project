$(()=>{
    $.ajax({
        type:"get",
        url:"store_list.html",
        success:data=>{
            $(".store_nav_area").html(data);
            $(".store_nav_area>.store_list>li").on("mouseover",function(e){
                var $tar=$(this);
                if($tar.has(".store_pull_down_list"))
                $tar.children(".store_pull_down_list").addClass("active")
            }).on("mouseleave",function(e){
                var $tar=$(this);
                if($tar.has(".store_pull_down_list"))
                $tar.children(".store_pull_down_list").removeClass("active")
            })
        }
    })
})
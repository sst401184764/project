$(()=>{
    $(".onsale .arrow.left").on("click","",function(){
        onsale(-1);
    });
    $(".onsale .arrow.right").on("click","",function(){
        onsale();
    });
    function onsale(){
        var $onsale=$(".onsale_products.active");
        if(arguments.length>0){
            $onsale.removeClass("active");
            if($onsale.prev(".onsale_products")[0]){
                $onsale.prev().addClass("active");
            }else{
                $onsale.parent().find(".onsale_products").last().addClass("active");
            }
        }else {
            $onsale.removeClass("active");
            if ($onsale.next(".onsale_products")[0]) {
                $onsale.next().addClass("active");
            } else {
                $onsale.parent().find(".onsale_products").first().addClass("active");
            }
        }
        var i=$(".onsale_products.active").index();
        $($(".onsale .under_list>li")[i-1]).addClass("active").siblings().removeClass("active")
    }
})
$(()=>{
    $(".home_ctn .home_ctn_product").on("mouseenter","",e=>{
        $(e.target).parents(".home_ctn_product").addClass("active").siblings().removeClass("active")
    })
})
$(()=>{
    var timer=null;
    var progress_change=false;
    var slider_move=false;
    var video_play=true;
    var banner_scroll_length=$(".highlight_strip_scroll").attr("data-width");
    $(".banner_main").hover(()=>{
        clearInterval(timer);
        timer=null;
        if($(".banner_main>.active").is(".banner_video")){
            $(".control_container").addClass("show");
            timer=setInterval(video_time,20);
            $(".banner_video.active")[0].onpause=()=>{
                $(".play_button").addClass("stop").removeClass("play");
                if($(".banner_main>.active")[0].currentTime==$(".banner_main>.active")[0].duration){
                    video_play=false;
                }
            }
            $(".banner_video.active")[0].onplay=()=>{
                $(".play_button").addClass("play").removeClass("stop");
                video_play=true;
            }
        }
    },()=>{
        $(".control_container").removeClass("show");
    });
    $(".play_button").click(e=>{
        var $tar=$(e.target);
        if($tar.is(".play")){
            $(".banner_main>.active")[0].pause();
            video_play=false;
        }else{
            $(".banner_main>.active")[0].play();
        }
    });
    function video_time(){
        var totalTime=$(".banner_main>.active")[0].duration;
        totalTimeShow=parseInt(totalTime/60)+":"+parseInt(totalTime%60>10?totalTime%60:"0"+totalTime%60);
        var nowTime=$(".banner_main>.active")[0].currentTime;
        nowTimeShow=parseInt(nowTime/60)+":"+(nowTime%60>10?parseInt(nowTime%60):"0"+parseInt(nowTime%60));
        $(".control_container .time").html(nowTimeShow+" / "+totalTimeShow);
        var progress_width=nowTime/totalTime*600;
        $(".progress_bar").css("width",progress_width);
    };
    $(".progress_bar_container").mousedown(e=>{
        $(".banner_main>.active")[0].pause();
        progress_change=true;
        var x=e.offsetX;
        $(".banner_main>.active")[0].currentTime=x/600*$(".banner_main>.active")[0].duration;
        video_time();
    })
    $(".progress_bar_container").mousemove(e=>{
        if(progress_change){
            var x=e.offsetX;
            $(".banner_main>.active")[0].currentTime=x/600*$(".banner_main>.active")[0].duration;
            video_time();
        }
    })
    $(window).mouseup(()=>{
        if(progress_change){
            if(video_play){
                $(".banner_main>.active")[0].play();
            }
            progress_change=false;
        }
        if(slider_move)
        slider_move=false;
    })
    $(".highlight_strip_scroll>img").click(e=>{
        var $tar=$(e.target);
        var i=$tar.index();
        var $active=$(".banner_main>.active");
        banner_video_change()
        $tar.addClass("active").siblings().removeClass("active");
        $active.removeClass("active");
        $($(".banner_main").children()[i]).addClass("active");
    })
    $(".slider_left").click(()=>{
        var $tar=$(".highlight_strip_scroll>.active");
        var i=$tar.index();
        if(i>0){
            var $active=$(".banner_main>.active");
            banner_video_change()
            $tar.removeClass("active").prev().addClass("active");
            $active.removeClass("active");
            $($(".banner_main").children()[i-1]).addClass("active");
            if(i<=3){
                $(".highlight_strip_scroll").css("left",0);
                $(".handle").css("left",0);
            }
        }
    })
    $(".slider_right").click(()=>{
        var $tar=$(".highlight_strip_scroll>.active");
        var i=$tar.index();
        if(i<$(".highlight_strip_scroll>img").length-1){
            var $active=$(".banner_main>.active");
            banner_video_change()
            $tar.removeClass("active").next().addClass("active");
            $active.removeClass("active");
            $($(".banner_main").children()[i+1]).addClass("active");
            if(i>=4){
                $(".highlight_strip_scroll").css("left",$(".highlight_strip_scroll").attr("data-width")*(-1));
                $(".handle").css("left",462);
            }
        }
    })
    $(".slider_background").mousedown(e=>{
            slider_move=true;
            var x=e.offsetX;
            $(".highlight_strip_scroll").css("left",$(".highlight_strip_scroll").attr("data-width")*x/522*-1);
            $(".handle").css("left",x);
        })
    $(".slider_background").mousemove(e=>{
        if(slider_move){
            var x=e.offsetX;
            $(".highlight_strip_scroll").css("left",$(".highlight_strip_scroll").attr("data-width")*x/522*-1);
            $(".handle").css("left",x/522*462);
            
        }
    })
    function banner_video_change(){
        var $active=$(".banner_main>.active");
        if($active.is(".banner_video")){
            $active[0].pause();
            $active[0].currentTime=0;
            video_time();
        }
    }
    if($(".game_language_options tr").length>5){
        for(var i=6;i<$(".game_language_options tr").length;i++){
            $($(".game_language_options tr")[i]).hide();
        }
    }
})
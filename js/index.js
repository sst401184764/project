(()=>{
    var $udrList=$(".under_list");
    for(var i=0;i<$udrList.size();i++)
        $($udrList[i]).css("width",$($udrList[i]).children("li").size()*20)
})()
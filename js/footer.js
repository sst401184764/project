$(()=>{
    $.get("footer.html").then(data=>{
        $("footer").html(data);
    })
})
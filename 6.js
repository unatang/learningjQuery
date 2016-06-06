$(document).ready(function(){
    $("#content > p").each(function(){
        $(this).mouseover(function(){
            $("#placeholder > p > img").attr("src", $(this).attr("source"));
        });
    });
});
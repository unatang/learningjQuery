$(document).ready(function(){
    $("#content > p").on("mouseenter", function(){
        $(this).find("span").slideToggle();
    });
    $("#content > p").on("mouseleave", function(){
        $(this).find("span").slideToggle();
    });
});
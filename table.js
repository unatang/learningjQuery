$(document).ready(function(){
    $("#button").click(function(){
        var $txt = $("<p>" + $("#textarea").val() + "</p>");
        $("#header").append($txt)
    })
});
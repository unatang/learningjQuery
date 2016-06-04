$(document).ready(function(){
    for(var i=1; i<11; i++){
        var $p = $("<p>" + i + "</p>");
        $("#content").append($p);
    }
})
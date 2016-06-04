$(document).ready(function(){
    for(var i=1; i<5; i++){    
    var $p = $("<p><img src=\"images/0" + i + ".jpg\" /></p>");
    var num = i;
    $p.mouseenter(function(){      
        $("#placeholder > img").attr("src", "images/" + num + ".jpg");
    })
    $("#content").append($p);
    }
   
    var img = $("<img src=\"images/0.gif\" />");
    $("#placeholder").append(img);
   
   
   
})
     
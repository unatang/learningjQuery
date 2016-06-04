$(document).ready(function(){
    var $p = $("#content > p");
    for(var i=0; i<$p.length; i++){
        $("#content > p").children().eq(i).mouseenter(function(){
            var source = this.attr("source");
            var $placeholder = $("#placeholder > img");
            $placeholder.attr("src", source);
        });
    }
});
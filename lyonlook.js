$(document).ready(function(){
    $("#lyonlook").css("opacity", "0.5");
    $("#lyonlook").click(function(){
        $(this).animate( {left: "300px"}, 2000)
               .animate( {top: "300px"}, 2000)
               .slideUp("slow");
    })
});
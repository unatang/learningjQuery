$(document).ready(function(){
    $("#cr").on("click", function(){
        if($(this).is(":checked")){
            alert("感谢你的支持!你可以继续操作！");
        }
    });
});

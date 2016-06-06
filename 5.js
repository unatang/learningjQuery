$(document).ready(function(){
    $("#content > p").each(function(){   //选择p元素，对P元素遍历
        $(this).mouseover(function(){    //绑定事件
            $("#placeholder img").attr("src", $(this).attr("source"));
        });
    });
});
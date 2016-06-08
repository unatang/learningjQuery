$(document).ready(function(){
    $(".level1 > a").on("click", function(){
        $(this).addClass("current")  //给当前元素添加"current"样式
        .next().slideToggle()             //给ul添加双态切换
        .parent().siblings().children("a").removeClass("current")  //父元素的兄弟元素的子元素<a>移除"current"样式
        .next().hide();              //他们的下一个元素隐藏
        return false;                
    });
});
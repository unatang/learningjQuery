$(document).ready(function(){
    /*
	在一个id为table的表格的tbody中，如果每行最后一列中的checkbox没有被禁用，
	则把这行的背景设为红色
	*/
    $("#table > tbody >tr:has(td:has(:checkbox:enabled))").css("background", "red");   //checkebox前面为什么还要用冒号
});
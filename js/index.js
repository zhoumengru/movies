/* 
* @Author: Marte
* @Date:   2016-12-07 17:40:59
* @Last Modified by:   Marte
* @Last Modified time: 2016-12-08 18:52:44
*/

$(function(){

    // 首页切换
    $(".content_list li").find("a").hover(function() {
        $(this).find(".hov_hide").css("display","none");
        $(this).find(".hov").css("display","block");
        $(this).parents(".content_list li").siblings().find(".hov").css("display","none");
    },function() {
        $(this).find(".hov_hide").css("display","block");
        $(this).find(".hov").css("display","none");
    });
})



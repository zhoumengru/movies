/**
 * Created by hxsd on 2016/12/14.
 */
var tools={

    //----tab切换----
    "tabs":function(obj,show){
        //电影页切换------
        $(show).eq(0).css("display","block");
        $(obj).mouseover(function(event) {
            /* Act on the event */
            var index = $(this).index()
            $(this).addClass("act_list")
            $(this).siblings().removeClass("act_list")
            $(show).eq(index).css("display","block");
            $(show).eq(index).siblings(show).css("display","none");
        })
    }
}
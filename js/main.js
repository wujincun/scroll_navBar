/**
 * Created by wujincun on 2016/9/14.
 */

$(function(){
    $(window).on('scroll',function () {
        var scrollTop = $(document).scrollTop();
        var $menu = $('#menu');
        var $items = $('#content').find('.item');
        var windowH = $(window).height();

        var currentId = '';
        $items.each(function (key,value) {
            var itemTop = $(value).offset().top;
            if(scrollTop >= itemTop - 200){
                currentId = "#" + $(value).attr("id")
            }else{
                return false
            }
        });
        //给相应楼层的a设置current，取消其他链接的current
        var currentLink = $menu.find('.current');
        if(currentId && currentLink.attr('href') != currentId){
            currentLink.removeClass('current');
            $menu.find('[href='+ currentId +']').addClass('current')
        }
    })
})
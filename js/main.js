/**
 * Created by wujincun on 2016/9/14.
 */

/*
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
})*/
window.onload = function () {
    window.onscroll = function () {
        var scrollTop = document.documentElement ? document.documentElement.scrollTop : document.body.scrollTop;
        var menus = document.getElementById('menu').getElementsByTagName('a');
        var items = getByClassName(document.getElementById('content'),'item');
        var currentId = "";
        for(var i=0;i<items.length;i++){
            var item = items[i];
            if(item.offsetTop - 200 <scrollTop){
                currentId = item.id;
            }else{
                break
            }
        }
        if(currentId){
            for(var j=0;j<menus.length;j++){
                var menu = menus[i];
                var menuHref = menu.href.split('#');// menu.href : http://hhfhfh#item1
                if(menuHref[menuHref.length - 1] != currentId){
                    removeClass(menu,'current')
                }else{
                    addClass(menu,'current')
                }
            }
        }
    }
};
function getByClassName(parent,cls) {
    parent = parent ||document;
    var childNode = parent.getElementsByTagName('*');
    var arr = [];
    for(var i=0;i<childNode.length;i++){
        if(childNode[i] == cls){
            arr.push(childNode[i])
        }
    }
    return arr;
}
function hasClass(obj,cls) {
    return obj.className.match(new RegExp("(\\s|^)" +cls + "(\\s|$)"));
}
function removeClass(obj,cls) {
    if(hasClass(obj,cls)){
        var reg = new RegExp("(\\s|^)" +cls + "(\\s|$)");
        obj.className = obj.className.replace(reg,"");
    }
}
function addClass(obj,cls) {
    if(!hasClass(obj,cls)){
        obj.className += ' ' + cls;
    }
}

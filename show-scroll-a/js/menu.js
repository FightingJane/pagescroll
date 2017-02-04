$(document).ready(function(){
    $(window).scroll(function(){
        var top = $(document).scrollTop();          
        var menu = $("#menu");                      
        var items = $("#content").find(".item");    

        var curId = "";                            

        items.each(function(){
            var m = $(this);                        
            var itemsTop = m.offset().top;      
            if(top > itemsTop-100){
                curId = "#" + m.attr("id");
            }else{
                return false;
            }
        });

        var curLink = menu.find(".cur");
        if( curId && curLink.attr("href") != curId ){
            curLink.removeClass("cur");
            menu.find( "[href=" + curId + "]" ).addClass("cur");
        }
     
    });
});

$(document).ready(function(){
    $("#hide").click(function(){
        $(".links").slideUp();
        $(".icon-hamburger").show();
        $(".logo").show();
      });
    
    $("#show").click(function(){
        $(".icon-hamburger").hide();
        $(".logo").hide();
        $(".links").slideDown();
    });
    
});
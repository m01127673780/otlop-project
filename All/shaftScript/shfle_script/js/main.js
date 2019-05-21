$(document).on('ready', function () {
     "use strict";
	
     var win = $(window);
      win.on("scroll", function () {
      var wScrollTop  = $(window).scrollTop();    
         if (wScrollTop > 150) {
            $("#main-header").addClass("header-colored");
        } else {
            $("#main-header").removeClass("header-colored");
        }
    });
      /* Bootstrap Scroll Spy */
	
       
    $("body").scrollspy({
        target: ".navbar-collapse",
        offset: 70
    });
      /* Collapse navigation on click on nav anchor in Mobile */
     $(".nav a").on('click', function () {
        $("#myNavbar").removeClass("in").addClass("collapse");
    });
      /* navbar Scroll */
    $(".navbar-nav li a, .welcome-area a, .btn-1, .btn-3").on("click", function (e) {
        var hook = $(this);
        $("html, body").stop().animate({
            scrollTop: $(hook.attr("href")).offset().top - 60
        }, 1000);
        e.preventDefault();
    });
	
	 $(".intro .btn-1").on("click", function (e) {
        var hook = $(this);
        $("html, body").stop().animate({
            
            scrollTop: $(hook.attr("href")).offset().top
        }, 1000);
        e.preventDefault();
    });
	
   /* projects section */
   var  scrollButton = $('#scroll-top');
     
    /* Caching The Scroll Top Button  */
     win.on('scroll', function () {
        if ($(this).scrollTop() >= 700) {
            
            scrollButton.show();
            
        } else {
            
            scrollButton.hide();
        }
        
    });
	
     /* Click On Button To Scroll Top */
    
    scrollButton.on('click', function () {
        
        $('html,body').animate({ scrollTop : 0 }, 1100);
        
    });
	 
	
 
});

 
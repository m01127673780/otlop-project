 
$(document).ready(function(){
 
'use strict';
	
	
	
	
	/*start count*/
	
	
//$('.timer').countTo();
	
	   
/*====================================*/
		$("html").niceScroll({
 		cursorcolor:"#7A1B1D",
		cursorwidth: "10px",
//		cursorborder:"5px solid #00f"
		scrollspeed : "60"
		

	});
/*=========================== =========*/
	
//	console.log($(".statistics").offset().top)
	$(window).scroll(function(){
	var sc = $(this).scrollTop();
 	if(sc > 501){
 	$('.timer').countTo();
		
		 
 $('.coutn-one').countTo({
	from:10,
	to :10000,
	speed:12000,
	refreshInterval:80 
});
	 $('.coutn-tow').countTo({
	from:0,
	to :15652,
	speed:13000,
	refreshInterval:80 
});

	 $('.coutn-thre').countTo({
	from:0,
	to :80550,
	speed:12000,
	refreshInterval:80 
});

	 $('.coutn-four').countTo({
	from:0,
	to :75000,
	speed:12500,
	refreshInterval:80 
});
 
		$(window).off("scroll");
		
	}
	
	
	});
	
	
	
//-----	
	
/*start shufil portofile */
$(".buttons button").click(function() {
	
	$(this).addClass("active-btn").siblings().removeClass("active-btn");
	
	var cssFilter = $(this).attr('id');
	
    if( cssFilter === "all" ) {
	$(".images > div").fadeIn();
	$(".red-more").not($(".red-more").fadeIn(".red-more").fadeOut());
 	} else {
 	 $(".images > div ") .fadeOut(500);
		
	 $(".images").contents().filter("." + cssFilter).fadeIn(500);

	}
	

});
	$(".red-more").fadeOut();
 	$(".more").click(function() {
	$(".red-more").fadeToggle(100);
});
/*End shufil portofile */
	
	//--------------//
	
/*start chooseo Us content */
 $(".c-panel li").click(function() {
  var p = $(this).data('role');
	 $(".content > div").hide();
	 $(".content").contents().filter('#' + p).fadeIn();
  	$(this).addClass("active-btn").siblings().removeClass("active-btn");
  });
/*End chooseo Us content */
	
	
	
	/*start mag nfcal puoup  video*/
	$('.video').magnificPopup({
  type: 'iframe',
  iframe: {
    patterns: {
      dailymotion: {
       
        index: 'dailymotion.com',
        
        id: function(url) {        
            var m = url.match(/^.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/);
            if (m !== null) {
                if(m[4] !== undefined) {
                  
                    return m[4];
                }
                return m[2];
            }
            return null;
        },
        
        src: 'https://www.youtube.com/watch?v=0zZtzeXycW4/embed/video/%id%'
        
      }
    }
  }
  
  
});
 /*End mag nfcal puoup  video*/
	
	
 /* start. owlCarousel();*/
$('.owl-carousel.mohamed').owlCarousel({
        
	 
	
    responsive:{
     
        1000:{
            items:10
        }
		
    }
	

}) 
 /* End .owlCarousel();*/
 
 
 /* start. owlCarousel();*/
$('.owl-carousel').owlCarousel({
        
	
    loop:true,
    margin:10,
    nav:false,
 
	
    responsive:{
        0:{
            items:4
        },
        600:{
            items:4
        },
        1000:{
            items:4
        }
		
    }
	

}) 
 /* End .owlCarousel();*/
 
 
	
//--------------//
	
//--------------
		});  
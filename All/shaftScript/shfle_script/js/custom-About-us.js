 "use strict"; // Start of use strict

 
//-----------------End statestk--------------------------//	
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
 /*start chooseo Us content */
 $(".c-panel li").click(function() {
  var p = $(this).data('role');
	 $(".content > div").hide();
	 $(".content").contents().filter('#' + p).fadeIn();
  	$(this).addClass("active-btn").siblings().removeClass("active-btn");
  });
/*End chooseo Us content */
 function priceFilter() {
    if ($('.range-slider-price').length) {
         var priceRange = document.getElementById('range-slider-price');
         noUiSlider.create(priceRange, {
            start: [30, 150],
            limit: 200,
            behaviour: 'drag',
            connect: true,
            range: {
                'min': 10,
                'max': 200
            }
        });
         var limitFieldMin = document.getElementById('min-value-rangeslider');
        var limitFieldMax = document.getElementById('max-value-rangeslider');
         priceRange.noUiSlider.on('update', function(values, handle) {
            (handle ? $(limitFieldMax) : $(limitFieldMin)).text(values[handle]);
        });
    };
 } 













$(document).on('ready', function () {
     "use strict";
 $(window).on("load",function (){
     var $grid = $('.grid').isotope({
      // options
    });
     // filter items on button click
    $('.filtering').on( 'click', 'span', function() {
         var filterValue = $(this).attr('data-filter');
         $grid.isotope({ filter: filterValue });
     });
     $('.filtering').on( 'click', 'span', function() {
         $(this).addClass('active').siblings().removeClass('active');
     });
 });
});
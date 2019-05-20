$(document).on('ready', function () {
    
    "use strict";
    
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
 
			'use strict';
		//--------------start active Chose-us----------------------// 
			$('.aside-what-chase-us').click(function(){
			$(this).addClass('active-aside-min')  ;
			});

			$('.span-waht-this-us ').on("click",function (){

			$(".aside-what-chase-us .icon-pulas ").toggleClass("fa-minus fa-plus ");

			});
			$(".aside-what-chase-us").click(function(){
			$(this).next() .slideToggle(100);
			$(".aside-what-ch-us-p").not($(this).next()) .slideUp(100); 

			});

			$(".aside-what-chase-us").click(function(){
			$(this) .css({
			marginBottom:"12px" 
			});
			$('.aside-what-chase-us').not($('.aside-what-chase-us')).css({
			marginBottom:"3px"
			});

			//--------------End active Chose-us----------------------// 
			$(".poup ").magnificPopup({
			type:'iframe' 
			})




			});

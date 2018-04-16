$(window).on('load',function(){
	$(window).scroll(function (){
		$('.modSection').each(function(){
			var modSectionPosition = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();

			if (scroll > modSectionPosition - windowHeight){
				$(this).css({
					'opacity':'1',
					'transform':'translateY(0)',
					'-webkit-transform':'translateY(0)',
					'-moz-transform':'translateY(0)',
					'-ms-transform':'translateY(0)'
				});
			} else {
				$(this).css({
					'opacity':'0',
					'transform':'translateY(70px)',
					'-webkit-transform':'translateY(70px)',
					'-moz-transform':'translateY(70px)',
					'-ms-transform':'translateY(70px)'
				});
			}
		});
	});
});
// $('.jscmenuBtn').click(function(e) {
// 	e.preventDefault();
// 	if($('.jscglobalNav').is(':animated')){
// 		return;
// 	}
// 	if($('.jscglobalNav a').css("display")=="none"){
// 		$('.jscglobalNav a').css('display','block');
// 	}
// 	if($(this).hasClass("active")){
// 		//close
// 		$(this).removeClass('active');
// 		$('.jscglobalNav').removeClass('active').slideUp();
// 		$('span.jscmenuBtnCircle').css('background-color','rgba(0, 0, 0, 0)');
// 	}else{
// 		//open
// 		$(this).addClass('active');
// 		$('.jscglobalNav').addClass('active').slideDown();
// 		$('span.jscmenuBtnCircle').css('background-color','#FFFFFF');
// 	}
//
// 	$('.jscglobalNav a').click(function() {
// 		$('.jscglobalNav').slideUp(function() {
// 			$('.jscmenuBtn').removeClass("active");
// 			$('.jscglobalNav').removeClass("active");
// 			$('span.jscmenuBtnCircle').css('background-color','rgba(0, 0, 0, 0)');
// 		});
// 	});
// });
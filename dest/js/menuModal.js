var KUBUS = KUBUS || {};
KUBUS.COMMON = {};

KUBUS.COMMON.menuModal = {
	init: function(){
		this.setParameters();
		this.bindEvents();
	},
	setParameters: function() {
		this.$menuBtn = $('.jscMenuBtn');
		this.$globalNav = $('.jscGlobalNav');
		this.$globalNavLink = $('.jscGlobalNav').find('a');
		this.$menuBtnCircleValue = $('span.jscMenuBtnCircle');
	},
	bindEvents: function () {
		var self = this;

		this.$menuBtn.click(function(e) {
			e.preventDefault();
			if(self.$globalNav.is(':animated')){
				return;
			}
			if(self.$globalNav.css("display")=="none"){
				self.$globalNav.css('display','inline');
			}
			if($(this).hasClass("active")){
				//close
				$(this).removeClass('active');
				self.closeModal();
			}else{
				//open
				$(this).addClass('active');
				self.openModal();
			}
		});
		this.$globalNavLink.click(function() {
			self.$globalNav.slideUp(function() {
				self.$menuBtn.removeClass("active");
				self.$globalNav.removeClass("active");
				self.$menuBtnCircleValue.css('background-color','rgba(0, 0, 0, 0)');
			});
		});
	},
	openModal: function() {
		this.$globalNav.addClass('active').slideDown(2000);
		this.$menuBtnCircleValue.css('background-color','#FFFFFF');
	},
	closeModal: function () {
		this.$globalNav.removeClass('active').slideUp();
		this.$menuBtnCircleValue.css('background-color','rgba(0, 0, 0, 0)');
	}
}

$(function () {
	KUBUS.COMMON.menuModal.init();
});
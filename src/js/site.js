var Xigua = {
	init: function(){
		this.bindEvents();
		this.initControls();
		this.pageFunc();
	},
	bindEvents: function(){
		var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		$('#topbar_message').click(function(e){
			e.stopPropagation();
			if($('.message-panel').is(':visible')){
				return;
			}
			$('.message-panel').show().addClass('animated flipInY').one(animationEnd, function(){
				$(this).removeClass('animated flipInY');
			});
		})

		$(document).click(function(){
			if($('.message-panel').is(':hidden')){
				return;
			}
			$('.message-panel').addClass('animated flipOutY').one(animationEnd, function(){
				$(this).removeClass('animated flipOutY').hide();
			});
		})

		$('.message-panel').click(function(e){
			e.stopPropagation();
		})

		if($('.wrapper').length){
			$('body').addClass('body-w');
		}


	},
	initControls: function(){
		$('[data-select]').select2({
		    minimumResultsForSearch: Infinity
		});
		$('.select2-selection__arrow').append('<i class="fa fa-angle-down"></i>');
		$('[data-checkbox]').iCheck({
		    checkboxClass: 'icheckbox_square-green',
		    radioClass: 'iradio_square-green',
		    increaseArea: '20%'
		});
		$('[data-toggle="tooltip"]').tooltip();
	},
//	pageFunc: function(){
//		var $popularLeft = $('.page-popular-list .wrapper-col-left'),
//			$popularRight = $('.page-popular-list .wrapper-col-right');
//		if($popularLeft.height() > $popularRight.height()){
//			$popularLeft.css({position: 'fixed'});
//		} else{
//			$popularLeft.height($popularRight.height());
//		}
//		console.log($('.page-popular-list .wrapper-col-left').height(), $('.page-popular-list .wrapper-col-right').height())
//		
//	}
}

Xigua.init();
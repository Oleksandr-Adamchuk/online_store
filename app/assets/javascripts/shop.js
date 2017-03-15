jQuery(function($) {
	$('html').removeClass('no-js');
	$(document).ready(function($) {
		alert('Slider!')
		var mySwiper = new Swiper('#swiper', {
			effect: 'fade',
			autoplay: 30000,
			loop: true,
			speed: 500,
			autoplayDisableOnInteraction: false,
			paginationClickable: true,
			prevButton: '#swiper_btn_prev',
			nextButton: '#swiper_btn_next',
		});
	});

	// PRELOADER
	// $(window).load(function()
	
	$(document).on('turbolinks:load', function() {
		$('#page_preloader').addClass('off');
		setTimeout(function() {
			$('#page_preloader').hide()
		}, 600);
	});
	
	// IOS HOVER
	if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))) {
		$('a').on("touchstart", function() {});
	};
	
	// PLACEHOLDER JS 
	$('[placeholder]').each(function() {
		if ($(this).val() === '') {
			var hint = $(this).attr('placeholder');
			$(this).val(hint).addClass('hint');
		}
	});
	$('[placeholder]').focus(function() {
		if ($(this).val() === $(this).attr('placeholder')) {
			$(this).val('').removeClass('hint');
		}
	}).blur(function() {
		if ($(this).val() === '') {
			$(this).val($(this).attr('placeholder')).addClass('hint');
		}
	});
	
	// RTE YOUTUBE VIDEO
	$('.rte iframe[src *= youtube]').wrap('<div class="youtube_wrap"></div>');
	
	


	// FORM STYLES   
	$('.address_table form, .customer_address form').addClass('form-horizontal');

	// CUSTOM SELECTS 
	
	$('.jq-selectbox__trigger').append('<i class="fa fa-angle-down"></i>');

	// SEARCH FORMS
	$('.search_form').on('submit', function(e) {
		var searchQuery = $(this).find('input').val().replace(/ /g, '+');
		var placeHolder = $(this).find('input').attr('placeholder').replace(/ /g, '+');
		if (!(searchQuery.length && searchQuery != placeHolder)) {
			e.preventDefault();
			e.stopPropagation();
		};
	});
	
	
	// MAIN PRODUCT LISTING IMAGE CHANGE
		imgChange = function (){
		if ( true )  {
			alert('imsge');
			$(document).on({ mouseenter: function(){$(this).find(".img__2").stop().animate({"opacity": 1});
			    },
			    mouseleave: function(){
			        $(this).find(".img__2").stop().animate({"opacity": 0});
			    }
			}, '.img_change');
		}
	};
	$(window).load( imgChange );

	// BACK TO TOP BUTTON 
	$(document).ready(function() {
		$(document.body).append('<a id="back_top" href="#"></a>');
		$('#back_top').hide();
		$(window).scroll(function() {
			if ($(this).scrollTop() > 300) {
				$('#back_top').fadeIn("slow");
			} else {
				$('#back_top').fadeOut("slow");
			};
		});
		$('#back_top').on('click', function(e) {
			e.preventDefault();
			$('html, body').animate({
				scrollTop: 0
			}, 800);
			$('#back_top').fadeOut("slow").stop();
		});
	});

	// PRODUCT QUANTITY FORM MINI, USED ON:
	// 1. PRODUCT PAGE
	// 2. PRODUCT QUICK VIEW
	// 3. CART PAGE
	$(document).on("focusout", ".quantity_input", function() {
		var t = $(this).val();
		$(this).val(isNaN(parseFloat(t)) && !isFinite(t) || 0 == parseInt(t) || "" == t ? 1 : parseInt(t) < 0 ? parseInt(t) - 2 * parseInt(t) : parseInt(t))
	}), $(document).on("click", ".quantity_up", function() {
		var t = $(this).parent().find(".quantity_input");
		t.val(!isNaN(parseFloat(t.val())) && isFinite(t.val()) ? parseInt(t.val()) + 1 : 1)
	}), $(document).on("click", ".quantity_down", function() {
		var t = $(this).parent().find(".quantity_input");
		t.val(!isNaN(parseFloat(t.val())) && isFinite(t.val()) && t.val() > 1 ? parseInt(t.val()) - 1 : 1)
	});
	
	// MEGAMENU TOGGLE
	var mobFlag = 0;
	megamenuToggle = function() {
		if ($(window).width() > 991) {
			$('#megamenu').removeClass('megamenu_mobile').addClass('megamenu_desktop');
			$('#megamenu .level_1').superfish({
				animation: {
					height: 'show'
				},
				speed: 'fast'
			});
			var path = window.location.pathname.split('/');
			path = path[path.length - 1];
			if (path !== undefined) {
				$(".level_1 > li").children("a[href$='" + path + "']").parents('li').children('a').addClass('active');
			};
			var path2 = window.location.pathname;
			if (path2 == '/' || path == undefined) {
				$(".level_1 > li").children("a[href$='" + path2 + "']").parents('li').children('a').addClass('active');
			};
			$('#megamenu .level_1, #megamenu .level_3').removeAttr('style');
			$('#megamenu_mobile_toggle').unbind('.mobileMenu');
			$('.level_1_trigger').unbind('.mobileMenu');
			$('.level_2_trigger').unbind('.mobileMenu');
			$(document).unbind('.mobileMenu');
			mobFlag = 0;
		} else {
			$('#megamenu').removeClass('megamenu_desktop').addClass('megamenu_mobile');
			$('#megamenu .level_1').superfish('destroy');
			if (mobFlag == 0) {
				menuMobile();
				mobFlag = 1;
			};
		};
	};
	$(window).on('load resize', function() {
		megamenuToggle();
	});
	
	// MEGAMENU MOBILE
	menuMobile = function() {
		$("#megamenu_mobile_toggle").on('click.mobileMenu', function() {
			$(".level_1").stop().slideToggle("slow");
			$(this).toggleClass("active");
		});
		$('.level_1_trigger').on('click.mobileMenu', function() {
			$(this).parent().parent().find('.level_2_wrap').slideToggle('slow');
			$(this).toggleClass('active');
			return false;
		});
		$('.level_2_trigger').on('click.mobileMenu', function() {
			$(this).parent().find('.level_3').slideToggle('slow');
			$(this).toggleClass('active');
			return false;
		});
		$('.megamenu_mobile h2').on('click touchstart', function(e) {
			e.stopPropagation();
		});
		$(document).bind('click.mobileMenu', function() {
			$(".level_1").slideUp("slow");
			$(".megamenu_mobile").find("h2").removeClass("active");
		});
	};
	
	// STICKY MENU
	$.fn.tmStickUp = function() {
		function s() {
			n = parseInt(o.offset().top), f = parseInt(o.outerHeight(!0)), $('<div class="pseudo_sticky_block"></div>').insertAfter(o), e = $(".pseudo_sticky_block"), e.css({
				position: "relative"
			}), t()
		}

		function t() {
			c.on("scroll", function() {
				thisOffsetTopCheck = parseInt(e.offset().top), thisOffsetTopCheck < n && (n = thisOffsetTopCheck), p = parseInt(i.scrollTop()), $(window).width() > 991 && p > n ? (o.addClass("megamenu_stuck").css({
					position: "fixed"
				}), e.css({
					height: f
				})) : (o.removeClass("megamenu_stuck").css({
					position: "relative"
				}), e.css({
					height: 0
				}))
			}).trigger("scroll")
		}
		var e, o = $(this),
			i = $(window),
			c = $(document),
			n = 0,
			f = 0,
			p = 0;
		s()
	};
	$(window).on('load', function() {
		var header_stuck = $('.header_stuck');
		if (header_stuck.length) {
			header_stuck.tmStickUp();
			var widgetHeaderFirst = $(".sidebar").find(".widget_header").first().text();
			if (widgetHeaderFirst) {
				header_stuck.find(".widget_header").html(widgetHeaderFirst);
			}
		};
	});
});
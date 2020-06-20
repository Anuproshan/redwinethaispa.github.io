	$(window).load(function() {

	    'use strict';
	    $("#pageloader").delay(1200).fadeOut("slow");
	    $(".loader-item").delay(700).fadeOut();

		smoothScroll.init();

	});


	/* ==============================================
	Custom Javascript
	=============================================== */
	$(document).ready(function() {

	    'use strict';
		
		if($(window).width()>767){	
								
			function autosize_homepage_image(){
				var height = jQuery( window ).height();
				jQuery('#home .home-header').css('height', height + 'px');
			}
			jQuery( function(){
				autosize_homepage_image();
				jQuery( window ).resize( function(){
					autosize_homepage_image();
				})
			});
			
			
			$(function() {
				var header = $(".navbar "),
					yOffset = 0,
					triggerPoint = 150;
				$(window).scroll(function() {
					yOffset = $(window).scrollTop();
		
					if (yOffset >= triggerPoint) {
						header.addClass("navbar-fixed-top animated fadeInDown");
					} else {
						header.removeClass("navbar-fixed-top animated fadeInDown");
					}
		
				});
			});
		}
		else{
			jQuery(window).resize(function(){
				autosize_homepage_image();
			})
		}
		

	    $('body').scrollspy({
	        target: '.navbar',
	        offest: 0
	    });
		
		// Bootstrap Tooltip
	    $('.social-icons a').tooltip({
	        placement: 'bottom',
	    });

	    //Mobile Nav
	    $('#navbar').on('click', function(e) {
	        $('.navbar-collapse').removeClass('in').addClass("collapse");
	    });
		

	    //Shrink Header
		// var shrinkHeader = 130;
		// $(document).scroll(function() {
		// 	var scroll = getCurrentScroll();
		// 	if (scroll >= shrinkHeader) {
		// 		$('header').addClass('colored');
		// 	} else {
		// 		$('header').removeClass('colored');
		// 	}
		// });

		function getCurrentScroll() {
			return window.pageYOffset || document.documentElement.scrollTop;
		}
		
		// Portfolio Single Slider
		$("#home-servies").owlCarousel({
	        items: 4,
	        margin: 30,
	        loop: true,
	        nav: true,
	        slideBy: 1,
	        dots: false,
	        center: false,
	        autoplay: false,
	        autoheight: true,
	        navText: ['&#xf104;', '&#xf105'],
	        responsive: {
	            320: {
	                items: 1,
	            },
	            480: {
	                items: 1,
	            },
	            600: {
	                items: 2,
	            },
	            1000: {
	                items: 4,
	                loop: true,
	            },
				1200: {
	                items: 4,
	                loop: true,
	            }
	        }
	    });
		
		$("#home-package").owlCarousel({
	        items: 4,
	        margin: 30,
	        loop: true,
	        nav: true,
	        slideBy: 1,
	        dots: false,
	        center: false,
	        autoplay: false,
	        autoheight: true,
	        navText: ['&#xf104;', '&#xf105'],
	        responsive: {
	            320: {
	                items: 1,
	            },
	            480: {
	                items: 1,
	            },
	            600: {
	                items: 3,
	            },
	            1000: {
	                items: 4,
	                loop: true,
	            },
				1200: {
	                items: 4,
	                loop: true,
	            }
	        }
	    });
		
		$("#home-testimonial").owlCarousel({
	        items: 1,
	        margin: 0,
	        loop: true,
	        nav: true,
	        slideBy: 1,
	        dots: false,
	        center: false,
	        autoplay: false,
	        autoheight: true,
	        navText: ['&#xf104;', '&#xf105'],
	    });
		
		$("#home-clients").owlCarousel({
	        items: 1,
	        margin: 30,
	        loop: true,
	        nav: false,
	        slideBy: 1,
	        dots: true,
	        center: false,
	        autoplay: false,
	        autoheight: true,
	        navText: ['&#xf104;', '&#xf105'],
	        responsive: {
	            320: {
	                items: 2,
	            },
	            480: {
	                items: 2,
	            },
	            600: {
	                items: 4,
	            },
	            1000: {
	                items: 5,
	                loop: true,
	            },
				1200: {
	                items: 6,
	                loop: true,
	            }
	        }
	    });	
		
		// Google Map
		$("#map_extended").gMap({
	        markers: [{
	            address: "",
	            html: '<h4>Office</h4>' +
	                '<address>' +
	                '<div>' +
	                '<div><b>Address:</b></div>' +
	                '<div>Envato Pty Ltd, 13/2<br> Elizabeth St Melbourne VIC 3000,<br> Australia</div>' +
	                '</div>' +
	                '<div>' +
	                '<div><b>Phone:</b></div>' +
	                '<div>+1 (408) 786 - 5117</div>' +
	                '</div>' +
	                '<div>' +
	                '<div><b>Fax:</b></div>' +
	                '<div>+1 (408) 786 - 5227</div>' +
	                '</div>' +
	                '<div>' +
	                '<div><b>Email:</b></div>' +
	                '<div><a href="mailto:info@valleta.com">info@info@valleta.com</a></div>' +
	                '</div>' +
	                '</address>',
	            latitude: -33.87695388579145,
	            longitude: 151.22183918952942,
	            icon: {
	                image: "images/pin.png",
	                iconsize: [35, 48],
	                iconanchor: [17, 48]
	            }
	        }, ],
	        icon: {
	            image: "images/pin.png",
	            iconsize: [35, 48],
	            iconanchor: [17, 48]
	        },
	        latitude: -33.87695388579145,
	        longitude: 151.22183918952942,
	        zoom: 16
	    });
		
		// Contact Form
		jQuery("#contact_form").validate({
	        meta: "validate",
	        submitHandler: function(form) {

	            var s_name = $("#name").val();
	            var s_lastname = $("#lastname").val();
	            var s_email = $("#email").val();
	            var s_phone = $("#phone").val();
	            var s_suject = $("#subject").val();
	            var s_comment = $("#comment").val();
	            $.post("contact.php", {
	                    name: s_name,
	                    lastname: s_lastname,
	                    email: s_email,
	                    phone: s_phone,
	                    subject: s_suject,
	                    comment: s_comment
	                },
	                function(result) {
	                    $('#sucessmessage').append(result);
	                });
	            $('#contact_form').hide();
	            return false;
	        },
	        /* */
	        rules: {
	            name: "required",

	            lastname: "required",
	            // simple rule, converted to {required:true}
	            email: { // compound rule
	                required: true,
	                email: true
	            },
	            phone: {
	                required: true,
	            },
	            comment: {
	                required: true
	            },
	            subject: {
	                required: true
	            }
	        },
	        messages: {
	            name: "Please enter your name.",
	            lastname: "Please enter your last name.",
	            email: {
	                required: "Please enter email.",
	                email: "Please enter valid email"
	            },
	            phone: "Please enter a phone.",
	            subject: "Please enter a subject.",
	            comment: "Please enter a comment."
	        },
	    }); 
			
		/* hide #back-top first */
	    $("#back-top").hide();
	    // fade in #back-top
	    $(window).scroll(function() {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#back-top a').on('click', function(e) {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});

	});





// $(function(){
//     $(window).scroll(function() {
//         if ($(this).scrollTop() &gt;= 290) {
//             $('.navbar').addClass('.sticky');
//         }
//         else {
//             $('.navbar').removeClass('.sticky');
//         }
//     });
// });

 jQuery(document).on("load", function($){   
    
    $('#ac-wrapper').show();
   
    });
  
 jQuery(document).ready(function($){   
    $(".close-btn").click(function(){  
    $('#ac-wrapper').hide();
    });
    });
   
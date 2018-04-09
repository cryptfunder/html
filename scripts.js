

$(function(){


    $('.pageh').css({'min-height':$(window).height()});


    $('#myTab a').on('click', function (e) {
        e.preventDefault()
        $(this).tab('show')
    })

	$(document).ready(function(){



        $(window).scroll(function() {
            var scroll = $(window).scrollTop();


            if (scroll >= 100) {
                $("body").addClass("scrolled");
            }
            else {
                $("body").removeClass("scrolled");
            }

        });



	    if ($.fn.owlCarousel) {

			$('.article_slides').owlCarousel({
                nav:true,
                navText:["<i class='fa fa-arrow-left'></i>","<i class='fa fa-arrow-right'></i>"],
                responsiveClass:true,
                autoHeight:true,
                margin: 30,
                responsive:{
                    0:{
                        items:1
                    },
                    575:{
                        items:2
                    },
                    767:{
                        items:3
                    },
                    1600:{
                        items:4
                    }
                }
			});


        }



	})


    $("header a,.top-btn").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    $('.lang-btn').on('click',function() {
       $(this).toggleClass('dropopen');
    });



    $('.list > h3').on('click',function () {

        $(this).next('.accordian-content').slideToggle();


        $(this).parents('.list').prev('.list').find('.accordian-content').slideUp();
        $(this).parents('.list').next('.list').find('.accordian-content').slideUp();

        $(this).parents('.list').prev('.list').removeClass('active')
        $(this).parents('.list').next('.list').removeClass('active')

        $(this).parents('.list').toggleClass('active');

    })

    // custom events ------------------


	//navigation shows
	$('.navbtn').on('click',function () {
		$('body').toggleClass('open-nav');
		return false;
    })

    $('.quantity-box').find('.form-control').val('1');

	$('.quantity-box .up').on('click',function () {
		var plusvalue  = $(this).parents('.quantity-box').find('.form-control').val();

        $(this).parents('.quantity-box').find('.form-control').val(parseInt(plusvalue) + 1);

		return false;

    })

    $('.quantity-box .down').on('click',function () {
        var plusvalue  = $(this).parents('.quantity-box').find('.form-control').val();

        if($(this).parents('.quantity-box').find('.form-control').val()>1){
	        $(this).parents('.quantity-box').find('.form-control').val(parseInt(plusvalue) - 1);
        }

        return false;

    })

});
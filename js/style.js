$(document).ready(function() {
    $(".toggle .toggle-button").click(function() {
        $(".activediv").toggle(".activ-dgn")
    }),
    $(".toggle .toggle-button").on("click", function() {
        $(this).toggleClass("active")
    }),


    $("nav .navbar-toggler").on("click", function() {
        $(".menu-trigger").toggleClass("active")
    })


    // $('nav li.subactive').click(
    //         function(event) {
    //             if (event.stopPropagation) {
    //                 event.stopPropagation();
    //             } else {
    //                 event.cancelBubble = true;
    //             }
    //
    //             if ($('nav div.show').is(':visible')) {
    //                 $(this).find('> ul').toggle();
    //                 $(this).toggleClass('expanded');
    //             }
    //         }
    //     );

    // $("nav .submenu").on("click", function() {
    //     $("nav ul li.mobile .ulsubmenu").toggleClass("submenu-active")
    // })

    // //disable click
    //     document.addEventListener("contextmenu", function(e){
    //     e.preventDefault();
    // }, false);

});

// (function($){
// 	$(document).ready(function(){
// 		$('.mobile .submenu .ulsubmenu').on('click', function(event) {
// 			event.preventDefault();
// 			event.stopPropagation();
// 			$(this).parent().siblings().removeClass('open');
// 			$(this).parent().toggleClass('open');
// 		});
// 	});
// })(jQuery);



// *********************************
    //  Slides Active Code
    // *********************************

    if ($.fn.owlCarousel) {
        var welcomeSlider = $('.welcome-slides');
        welcomeSlider.owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            smartSpeed: 1000,
            autoplayTimeout: 5000,
            nav: true,
            navText: [('<i class="fl-bigmug-line-left148"></i>'), ('<i class="fl-bigmug-line-right154"></i>')]
        })

        welcomeSlider.on('translate.owl.carousel', function () {
            var layer = $("[data-animation]");
            layer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).removeClass('animated ' + anim_name).css('opacity', '0');
            });
        });

        $("[data-delay]").each(function () {
            var anim_del = $(this).data('delay');
            $(this).css('animation-delay', anim_del);
        });

        $("[data-duration]").each(function () {
            var anim_dur = $(this).data('duration');
            $(this).css('animation-duration', anim_dur);
        });

        welcomeSlider.on('translated.owl.carousel', function () {
            var layer = welcomeSlider.find('.owl-item.active').find("[data-animation]");
            layer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).addClass('animated ' + anim_name).css('opacity', '1');
            });
        });
    }

    // ******************************
    // :: 17.0 ScrollDown Active Code
    // ******************************

    $("#scrollDown").on('click', function () {
        $('html, body').animate({
            scrollTop: $("#about").offset().top - 75
        }, 800);
    });


// mobile menu script
    (function($) {
    $.fn.menumaker = function(options) {
     var cssmenu = $(this), settings = $.extend({
       format: "dropdown",
       sticky: false
     }, options);
     return this.each(function() {
       $(this).find(".button").on('click', function(){
         $(this).toggleClass('menu-opened');
         var mainmenu = $(this).next('ul');
         if (mainmenu.hasClass('open')) {
           mainmenu.slideToggle().removeClass('open');
         }
         else {
           mainmenu.slideToggle().addClass('open');
           if (settings.format === "dropdown") {
             mainmenu.find('ul').show();
           }
         }
       });
       cssmenu.find('li ul').parent().addClass('has-sub');
    multiTg = function() {
         cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
         cssmenu.find('.submenu-button').on('click', function() {
           $(this).toggleClass('submenu-opened');
           if ($(this).siblings('ul').hasClass('open')) {
             $(this).siblings('ul').removeClass('open').slideToggle();
           }
           else {
             $(this).siblings('ul').addClass('open').slideToggle();
           }
         });
       };
       if (settings.format === 'multitoggle') multiTg();
       else cssmenu.addClass('dropdown');
       if (settings.sticky === true) cssmenu.css('position', 'fixed');
    resizeFix = function() {
      var mediasize = 1000;
         if ($( window ).width() > mediasize) {
           cssmenu.find('ul').show();
         }
         if ($(window).width() <= mediasize) {
           cssmenu.find('ul').hide().removeClass('open');
         }
       };
       resizeFix();
       return $(window).on('resize', resizeFix);
     });
      };
    })(jQuery);

    (function($){
    $(document).ready(function(){
    $("#cssmenu").menumaker({
       format: "multitoggle"
    });
    });
    })(jQuery);



    $(document).ready(function(){
      $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        autoplayTimeout: 4000,
        nav: false,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            768:{
                items:2
            },
            1292:{
                items:3
            }
        }
      });
    });

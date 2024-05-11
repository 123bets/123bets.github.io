/*---------------------------------------------
Template name:  Bitcon
Version:        1.0
Author:         techydevs
Author Email:   contact@techydevs.com

[Table of Content]

01: Preloader
02: Search box Trigger
03: side-widget-menu
04: Mobile Menu Open Control
05: Mobile Menu Close Control
06: Back to Top Button and Navbar Scrolling Effects
07: back to top button click control
08: Counter up
09: Client logo
10: Client logo 2
11: client-testimonial
12: service-wrap
13: magnificpopup
14: FAQ
15: Nice select
16: bootstrap tooltip
17: Google Map
----------------------------------------------*/

(function ($) {
    "use strict"; //use of strict

    /*==== Preloader =====*/
    $(window).on('load', function(){
        $('.loader-container').delay('500').fadeOut(2000);
    });

    $(document).on('ready', function () {

        /*==== Search box Trigger =====*/
        $(document).on('click', '.main-menu-content ul li .search-button', function () {
            $('.search-option').toggleClass('active');
        });

        /*====  side-widget-menu  =====*/
        $(document).on('click','.side-menu-wrap .side-menu-ul .sidenav__item .menu-plus-icon', function () {
            $(this).closest('.sidenav__item').siblings().removeClass('active').find('.side-sub-menu').slideUp(200);
            $(this).closest('.sidenav__item').toggleClass('active').find('.side-sub-menu').slideToggle(200);
            return false;
        });

        /*=========== Mobile Menu Open Control ============*/
        $(document).on('click','.logo-right-button .side-menu-open', function () {
            $('.side-nav-container').addClass('active');
        });

        /*=========== Mobile Menu Close Control ============*/
        $(document).on('click','.humburger-menu .side-menu-close', function () {
            $(".side-nav-container").removeClass('active');
        });

        /*===== Back to Top Button and Navbar Scrolling Effects ======*/
        $(window).on('scroll', function() {
            //header fixed animation and control
            if($(window).scrollTop() > 100) {
                $('.header-menu-wrapper').addClass('header-fixed');
            }else{
                $('.header-menu-wrapper').removeClass('header-fixed');
            }

            //back to top button control
            if ($(window).scrollTop() > 300) {
                $('#back-to-top').addClass('show-back-to-top');
            } else {
                $('#back-to-top').removeClass('show-back-to-top');
            }
        });

       /*===== back to top button click control ======*/
        $(document).on("click", '#back-to-top', function() {
            $('html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

        /*==== Counter up =====*/
        $('.counter').counterUp({
            delay: 20,
            time: 2000
        });

        /*==== Client logo =====*/
        $('.client-logo').owlCarousel({
            loop: true,
            items: 5,
            nav: false,
            dots: false,
            smartSpeed: 500,
            autoplay: true,
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 1
                },
                // breakpoint from 480 up
                480 : {
                    items: 2
                },
                // breakpoint from 768 up
                991 : {
                    items: 3
                },
                // breakpoint from 1280 up
                1280 : {
                    items: 5
                }
            }
        });

        /*==== Client logo 2 =====*/
        $('.client-logo2').owlCarousel({
            loop: true,
            items: 4,
            nav: false,
            dots: false,
            smartSpeed: 500,
            autoplay: true,
            responsive : {
                // breakpoint from 0 up
                320 : {
                    items: 2
                },
                // breakpoint from 481 up
                481 : {
                    items: 3
                },
                // breakpoint from 768 up
                768 : {
                    items: 4
                }
            }
        });

        /*==== client-testimonial =====*/
        $('.client-testimonial').owlCarousel({
            loop: true,
            items: 1,
            nav: false,
            dots: true,
            smartSpeed: 500,
            autoplay: true
        });

        /*==== service-wrap =====*/
        $('.service-wrap').owlCarousel({
            loop: true,
            items: 3,
            nav: false,
            dots: true,
            smartSpeed: 700,
            autoplay: true,
            margin: 30,
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 1
                },
                // breakpoint from 480 up
                600 : {
                    items: 1
                },
                // breakpoint from 992 up
                992 : {
                    items: 3
                }
            }
        });


        /*==== magnificpopup =====*/
        $('.video-play-btn').magnificPopup({
            type: 'video'
        });

        /*====  FAQ  =====*/
        $(document).on('click', '.faq-heading', function () {
            $(this).closest('.faq-panel').siblings().removeClass('active').find('.faq-content').slideUp(200);
            $(this).closest('.faq-panel').toggleClass('active').find('.faq-content').slideToggle(200);
            return false;
        });

        /*==== Nice select =====*/
        $('select').niceSelect();

        /*==== bootstrap tooltip =====*/
        $('[data-toggle="tooltip"]').tooltip();

        /*** =====================================
         * -12 Google Maps
         * =====================================***/
        if($("#map").length) {
            initMap('map', 40.717499, -74.044113, 'images/map-marker.png');
        }

    });
})(jQuery);


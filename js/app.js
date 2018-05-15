var Layout = function () {
    // detect mobile device
    var isMobileDevice = function() {
        return  ((
            navigator.userAgent.match(/Android/i) ||
            navigator.userAgent.match(/BlackBerry/i) ||
            navigator.userAgent.match(/iPhone|iPad|iPod/i) ||
            navigator.userAgent.match(/Opera Mini/i) ||
            navigator.userAgent.match(/IEMobile/i)
        ) ? true : false);
    }

    var NavbarOnScroll = function() {
        if ($(window).scrollTop() > 60) {
            $(".navbar-theme").addClass("scroll");
        } else {
            $(".navbar-theme").removeClass("scroll");
        }
    }

    return {
        init: function () {
            // initial setup for fixed header
            NavbarOnScroll();
            // handle minimized header on page scroll
            $(window).scroll(function() {
                NavbarOnScroll();
            });
        },

    };
}();


jQuery(document).ready(function() {
    //Smooth Scrolling
    smoothScroll.init();
    //Animations
    new WOW().init();

    //Navbar
    Layout.init();

    //Scroll to top
    $(function(){

        $(document).on( 'scroll', function(){

            if ($(window).scrollTop() > 100) {
                $('.scroll-top-wrapper').addClass('show');
            } else {
                $('.scroll-top-wrapper').removeClass('show');
            }
        });

        $('.scroll-top-wrapper').on('click', scrollToTop);
    });

    function scrollToTop() {
        verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
        element = $('body');
        offset = element.offset();
        offsetTop = offset.top;
        $('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
    }

    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });


});
jQuery(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() >= Math.ceil($('.product-wrap').offset().top)) {
            $("#header").addClass('headerFixed');

        } else {
            $("#header").removeClass('headerFixed');

        }
    });


    jQuery(window).scroll(function () {

        $('.lazy').each(function () {
            var offsetTopPosition = $(this).offset().top - $(window).scrollTop();
            if (offsetTopPosition < 600) {
                $(this).addClass("on")
            }

        });
    });


    // 메인 비쥬얼 배너
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        asNavFor: '.slider-nav-thumbnails',
        prevArrow: '<div class="slider-arrow slider-prev fa fa-chevron-left"></div>',
        nextArrow: '<div class="slider-arrow slider-next fa fa-chevron-right"></div>',
    });

    $('.slider-nav-thumbnails').slick({

        slidesToScroll: 1,
        asNavFor: '.slider',
        // 	dots: true,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
    });


    $('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');


    $('.slider-nav-thumbnails .slick-slide').eq(0).addClass('slick-active');

    $('.slider-nav-thumbnails .slick-slide').eq(1).addClass('logoNone');
    $('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        var mySlideNumber = nextSlide;
        $('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');
        $('.slider-nav-thumbnails .slick-slide').eq(mySlideNumber).addClass('slick-active');
    });


    $('a[data-slide]').click(function (e) {
        e.preventDefault();
        var slideno = $(this).data('slide');
        $('.slider-nav-thumbnails').slick('slickGoTo', slideno - 1);
    });
    // 메인 비쥬얼 배너 end

    // provide 배너
    $('.productList').slick({

        slidesToScroll: 1,
        slidesToShow: 2.8,
        arrows: false,
        focusOnSelect: true,
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 2000,
    });
    // provide 배너 end


    // event배너
    $('.eventSlide').slick({

        slidesToScroll: 1,
        slidesToShow: 3,
        arrows: false,
        variableWidth: true,
        focusOnSelect: true,
        centerMode: true,
        pauseOnHover: false,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    // event배너 end


});
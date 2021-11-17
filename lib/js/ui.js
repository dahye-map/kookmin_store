$(window).on('load', function () {
    $('.loading-wrap .loading').delay("1500").fadeOut();
});




$(document).ready(function () {

    let randomNumber = Math.floor(Math.random() * 3) + 1;
    $('.loading-wrap .loading .info.type0' + randomNumber).addClass('active');

    //네비 2depth
    var _isSlide = false;
    $('.gnb > li > a').click(function () {
        $target = $(this).next('.depth2');
        var allPanels = $('.depth2');
        if (!_isSlide) {
            _isSlide = true;
            if (!$target.hasClass('active')) {
                allPanels.slideUp(500).removeClass('active');
                $target.slideDown(500).addClass('active');
                $('.gnb > li > a').removeClass('active');
                $(this).addClass('active');

            } else {
                $target.slideUp(500).removeClass('active');
                $(this).removeClass('active');
            }
            setTimeout(function () { _isSlide = false; }, 200);
        }
    });


    var swiper_pro = new Swiper('.main-banner-wrap', {
        slidesPerView: 1,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".main-banner-pagination",
            type: "fraction",
        },
    });

    var swiper_event = new Swiper('.event-wrap', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });

    var swiper_insta = new Swiper('.prd-slide-wrap', {
        slidesPerView: 4,
        spaceBetween: 30,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });


    var index = 0;
    var rank_brank = $(".rank-brand > ul > li");
    var rank_sell = $(".rank-sell > ul > li");
    function ranking() {
        rank_brank.removeClass('active').eq(index).addClass('active');
        rank_sell.removeClass('active').eq(index).addClass('active');
        index++;
        if (index >= rank_brank.length) {
            index = 0;
        }
    }
    setInterval(ranking, 1500);



    $('.insta-tab ul li').click(function () {
        var con_idx = $(this).index();

        $('.insta-tab ul li').removeClass('active');
        $(this).addClass('active');

        $('.insta-con .inner').removeClass('active').eq(con_idx).addClass('active');
    });


    var controller = new ScrollMagic.Controller();

    var smaller =
        new TimelineMax().add([
            // hero block animations
            TweenMax.to(".bg-float", 1, { y: -600, ease: Linear.easeNone })
        ])

    var scene = new ScrollMagic.Scene({

        triggerElement: ".magazine-wrap", //트리거 설정
        triggerHook: 0,
        duration: '100%'
    })
        .setTween(smaller)
        .addTo(controller);



});


$(window).scroll(function () {
    var rightSec = $('.clear-fix').offset().top;
    var rightE = rightSec + $('.clear-fix').height();

    var leftBannerH = $(".clear-fix .main-banner-wrap").height();
    var sectionBottom = rightE - leftBannerH

    var scrollTop = $(window).scrollTop()

    if (scrollTop >= rightSec && scrollTop <= rightE) {
        $('.main-banner-wrap').addClass('fixed');
    } else {
        $('.main-banner-wrap').removeClass('fixed');
    }

    if (scrollTop >= sectionBottom) {
        $('.main-banner-wrap').addClass('absolute');
    } else {
        $('.main-banner-wrap').removeClass('absolute');
    }
});



//타임세일 첫번째상품
var start01 = new Date("aug 30, 2021 16:00:00").getTime();
var countDownDate01 = new Date("sep 30, 2021 23:53:25").getTime();

//타임세일 두번째상품
var start02 = new Date("aug 30, 2021 16:00:00").getTime();
var countDownDate02 = new Date("sep 30, 2021 23:53:25").getTime();

var timesale01 = setInterval(function () {
    var now = new Date().getTime();
    var distance01 = countDownDate01 - now;
    var distance02 = countDownDate02 - now;
    var percent01 = Math.round(((now - start01) / (countDownDate01 - start01)) * 100) + '%';
    var percent02 = Math.round(((now - start02) / (countDownDate02 - start02)) * 100) + '%';

    var days01 = Math.floor(distance01 / (1000 * 60 * 60 * 24));
    var hours01 = Math.floor((distance01 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes01 = Math.floor((distance01 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds01 = Math.floor((distance01 % (1000 * 60)) / 1000);

    var days02 = Math.floor(distance02 / (1000 * 60 * 60 * 24));
    var hours02 = Math.floor((distance02 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes02 = Math.floor((distance02 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds02 = Math.floor((distance02 % (1000 * 60)) / 1000);

    $('.timesale.first .time').html(days01 + "일 " + hours01 + ":" + minutes01 + ":" + seconds01 + " 남음");
    $('.timesale.second .time').html(days02 + "일 " + hours02 + ":" + minutes02 + ":" + seconds02 + " 남음");

    setTimeout(function () {
        $('.timesale .bar').addClass('active');
    }, 100);
    setTimeout(function () {
        $('.timesale.first .bar').css('width', percent01);
        $('.timesale.second .bar').css('width', percent02);
    }, 700);
    setTimeout(function () {
        $('.timesale .time').addClass('active');
    }, 1200);


    if (distance01 < 0) {
        clearInterval(timesale01);
        $('.timesale.first .time').html('타임세일 종료');
    }
    if (distance02 < 0) {
        clearInterval(timesale01);
        $('.timesale.second .time').html('타임세일 종료');
    }

}, 1000);

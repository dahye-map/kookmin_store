$(window).on('load', function () {
    $('.loading-wrap .loading').delay("1500").fadeOut();
});


$(document).ready(function () {

    let randomNumber = Math.floor(Math.random() * 3) + 1;
    $('.loading-wrap .loading .info.type0' + randomNumber).addClass('active');


    //하단플로팅
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('#floatingWrap .floating').outerHeight();
    $(window).scroll(function(event){
        didScroll = true;
    });
    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);
    function hasScrolled() {
        var st = $(this).scrollTop();
        if(Math.abs(lastScrollTop - st) <= delta) return;
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('#floatingWrap .floating').removeClass('up').addClass('down');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('#floatingWrap .floating').removeClass('down').addClass('up');
            }
        }
        lastScrollTop = st;
    }


    //햄버거
    $('.btn-menu').click(function(){
        $('#navWrap .nav').addClass('active');
        if($('#navWrap .nav').hasClass('active')){
            $('#navWrap .block').addClass('active')
        }
    });
    $('.btn-nav-close, .block').click(function(){
        $('#navWrap .nav').removeClass('active');
        $('#navWrap .block').removeClass('active');
    });



    //검색창
    $('.btn-search').click(function(){
        $('#searchWrap .search').addClass('active');
    });
    $('.btn-search-close').click(function(){
        $('#searchWrap .search').removeClass('active');
    });
    

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

    var swiper_md = new Swiper('.md-choice-list', {
        slidesPerView: 1,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".md-pagination",
            type: "progressbar",
        },
    });
    swiper_md.on('transitionStart', function() { 
        $('.md-fraction').html('<span>'+(swiper_md.realIndex+1)+'</span>/<span>'+swiper_md.slides.length+'</span>')
    });


    var swiper_maga = new Swiper('.magazine-list', {
        slidesPerView: 1.2,
        spaceBetween: 30,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".magazine-pagination",
            type: "progressbar",
        },
    });
    swiper_maga.on('transitionStart', function() { 
        $('.magazine-fraction').html('<span>'+(swiper_maga.realIndex+1)+'</span>/<span>'+swiper_maga.slides.length+'</span>')
    });

    var swiper_insta = new Swiper('.prd-slide-wrap', {
        slidesPerView: 2.6,
        spaceBetween:20,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".prd-pagination",
            type: "progressbar",
        },
    });
    swiper_insta.on('transitionStart', function() { 
        $('.prd-fraction').html('<span>'+(swiper_insta.realIndex+1)+'</span>/<span>'+swiper_insta.slides.length+'</span>')
    });


    //실시간 랭킹
    var index = 0;
    var rank_sell = $(".kkranking-list > ul > li");
    function ranking() {
        rank_sell.removeClass('active').eq(index).addClass('active');
        $('.active-box').css('top',  $(".kkranking-list > ul > li.active").offset().top - 109);
        $(".kkranking-list > ul > li").next().css('border-top', '');
        $(".kkranking-list > ul > li.active").next().css('border-top', '1px solid transparent');
        index++;
        if (index >= rank_sell.length) {
            index = 0;
        }
    }
    setInterval(ranking, 1500);
    var ticker = function()
    {
        timer = setTimeout(function(){
            $('.rank-sell > ul > li:first').animate( {marginTop: '-20px'}, 400, function()
            {
                $(this).detach().appendTo('.rank-sell > ul').removeAttr('style');
            });
            ticker();
        }, 2000);         
    };
    ticker();
    $('.btn-rank-view').click(function(){
        $('.kkranking-wrap .kkranking').addClass('active');
        $('html, body').animate({
            scrollTop : 0
        }, 400);

    });
    $('.btn-rank-close').click(function(){
        $('.kkranking-wrap .kkranking').removeClass('active');
    });


    //인스타
    $('.insta-tab ul li').click(function () {
        var con_idx = $(this).index();

        $('.insta-tab ul li').removeClass('active');
        $(this).addClass('active');

        $('.insta-con .inner').removeClass('active').eq(con_idx).addClass('active');
    });


    //베스트
    $('.best-tab ul li').click(function () {
        var con_idx = $(this).index();

        $('.best-tab ul li').removeClass('active');
        $(this).addClass('active');

        $('.best-con .inner').removeClass('active').eq(con_idx).addClass('active');
    });


    
    $('.family-select > a, .footer-info .title').click(function () {
        $(this).toggleClass('active');
        $(this).next().slideToggle();
    });



});



$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    // var cateTop = $('.cate-list-wrap').offset().top;
    
    if (scrollTop >= 100) {
        $('#headerWrap .header').addClass('fixed');
    } else {
        $('#headerWrap .header').removeClass('fixed');
    }

    if( scrollTop > 500 ) {
        $('.cate-list-wrap').addClass('fixed');
    } else {
        $('.cate-list-wrap').removeClass('fixed');
    }
});




//타임세일 첫번째상품
var start01 = new Date("aug 30, 2021 16:00:00").getTime();
var countDownDate01 = new Date("sep 15, 2021 17:27:25").getTime();

//타임세일 두번째상품
var start02 = new Date("aug 30, 2021 16:00:00").getTime();
var countDownDate02 = new Date("sep 10, 2021 23:53:25").getTime();

var timesale01 = setInterval(function () {
    var now = new Date().getTime();
    var distance01 = countDownDate01 - now;
    var distance02 = countDownDate02 - now;

    var days01 = Math.floor(distance01 / (1000 * 60 * 60 * 24)) * 24;
    var hours01 = Math.floor((distance01 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes01 = Math.floor((distance01 % (1000 * 60 * 60)) / (1000 * 60));
    if ((minutes01 + "").length < 2) {
        minutes01 = "0" + minutes01;
    }
    var seconds01 = Math.floor((distance01 % (1000 * 60)) / 1000);
    if ((seconds01 + "").length < 2) {
        seconds01 = "0" + seconds01;
    }

    var days02 = Math.floor(distance01 / (1000 * 60 * 60 * 24)) * 24;
    var hours02 = Math.floor((distance02 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes02 = Math.floor((distance02 % (1000 * 60 * 60)) / (1000 * 60));
    if ((minutes02 + "").length < 2) {
        minutes02 = "0" + minutes02;
    }
    var seconds02 = Math.floor((distance02 % (1000 * 60)) / 1000);
    if ((seconds02 + "").length < 2) {
        seconds02 = "0" + seconds02;
    }

    $('.timesale.first .time').html(days01 + hours01 + ":" + minutes01 + ":" + seconds01);
    $('.timesale.second .time').html(days02 + hours02 + ":" + minutes02 + ":" + seconds02);



    if (distance01 < 0) {
        clearInterval(timesale01);
        $('.timesale.first .time').html('타임세일 종료');
    }
    if (distance02 < 0) {
        clearInterval(timesale01);
        $('.timesale.second .time').html('타임세일 종료');
    }

}, 1000);





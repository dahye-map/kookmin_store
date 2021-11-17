$(window).scroll(function(){

    var scrollTop = $(window).scrollTop()
    var infoTop = $('.prd-info-wrap').offset().top;
    var detailTop = $('.prd-detail-wrap').offset().top;
    var detailH = $('.prd-detail-wrap').outerHeight();
    var reviewTop = $('.review-wrap').offset().top;
    var reviewH = $('.review-wrap').outerHeight();
    var recommendTop = $('.recommend-wrap').offset().top;
    var recommendH = $('.recommend-wrap').outerHeight();
    
    if ( scrollTop >= infoTop ) {
        $('.prd-header').addClass('fixed');
        $('.prd-thumb').css(
            { 
                'position':'fixed', 
                'z-index' :'999'
            }
        );
    } else {
        $('.prd-header').removeClass('fixed');
    }

    if( scrollTop >= detailTop ) {
        $('.prd-header').addClass('tab-active');
    } else {
        $('.prd-header').removeClass('tab-active');
    }


    //탭 액티브
    $('.prd-header .prd-tab ul li a').removeClass('on');
    if( scrollTop >= detailTop && scrollTop <= detailTop + detailH ) {
        $('.prd-header .prd-tab ul li:nth-child(1) a').addClass('on');
    }
    if( scrollTop >= reviewTop && scrollTop <= reviewTop + reviewH ) {
        $('.prd-header .prd-tab ul li:nth-child(2) a').addClass('on');
    }
    if( scrollTop >= recommendTop && scrollTop <= recommendTop + recommendH ) {
        $('.prd-header .prd-tab ul li:nth-child(3) a').addClass('on');
    }




    var prdimgTop = $('.prd-thumb').offset().top;
    var prdimgH = $('.prd-thumb').outerHeight();


    //상품 이미지 영역
    if( scrollTop >= prdimgTop && scrollTop <= prdimgTop + prdimgH ) {
        
    }
});



$('.prd-thumb').click(function(){
    $("body,html").animate({scrollTop:0},500);
});
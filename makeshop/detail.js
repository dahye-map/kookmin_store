var now = new Date();   //현재시간
    month = now.getMonth() + 1;   //현재시간 중 달. 달은 0부터 시작하기 때문에 +1 
    
if ((month + "").length < 2) {
    month = "0" + month;   //달의 숫자가 1자리면 앞에 0을 붙임.
}
date = now.getDate();      //현재 시간 중 날짜.
if ((date + "").length < 2) {
    date = "0" + date;
}
hour = now.getHours();   //현재 시간 중 시간.
if ((hour + "").length < 2) {
    hour = "0" + hour;
}
var minutes = now.getMinutes();	// 분
if ((minutes + "").length < 2) {
    minutes = "0" + minutes;
}

var week = ['일', '월', '화', '수', '목', '금', '토'];
var dayOfToday = now.getDay();
var dayOfTodayp1 = now.getDay() + 1;
var dayOfTodayp2 = now.getDay() + 2;
var dayOfTodayp3 = now.getDay() + 3;
var dayOfWeek_tm = week[dayOfTodayp1];
var dayOfWeek_ttm = week[dayOfTodayp2];
var dayOfWeek_tttm = week[dayOfTodayp3];

today = hour + "" + minutes; //오늘 날짜 완성.
console.log(today);


$(document).ready(function () {
    $('.month').text(month);

    // 일반배송
    // 15시 이전
    if (today <= 1500) {

        if (dayOfToday == 5) {
            $('.daily .date').html(date + 3);
            $('.day').text('월');
        } else {
            $('.daily .date').html(date + 1);
            $('.day').text(dayOfWeek_tm);
        }

    }
    //15시 이후
    else {
        if (dayOfToday == 5) {
            $('.daily .date').html(date + 4);
            $('.daily .day').text('화');
        } else {
            $('.daily .date').html(date + 2);
            $('.daily .day').text(dayOfWeek_ttm);
        }

    }



    // 새벽배송
    // 16시 30분 이전
    if (today <= 1630) {
        if (dayOfToday == 5) {
            $('.dawn .date').html(date + 3);
            $('.dawn .day').text('월');
        } else {
            $('.dawn .date').html(date + 1);
            $('.dawn .day').text(dayOfWeek_tm);
        }
    }
    //16시 30분 이후
    else {
        if (dayOfToday == 5) {
            $('.dawn .date').html(date + 4);
            $('.dawn .day').text('화');
        } else {
            $('.dawn .date').html(date + 2);
            $('.dawn .day').text(dayOfWeek_ttm);
        }

    }

});




$(document).ready(function() { 


    var swiper_event = new Swiper('.related-prd-wrap', {
        slidesPerView: '3',
        spaceBetween: 20,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".related-next",
            prevEl: ".related-prev",
        },
    });
    
    

    $('.block').click(function(){
        $('.block').removeClass('active');
        $('.layerpopup').removeClass('active');
    });


    $('.btn-buy-fixed').click(function() {
        $('.detail-info-wrap').toggleClass('on');
    });
        
});


var fixMenu = $('.btn-buy-fixed');
var fixBuy = $('.detail-info-wrap');
fixMenu.hide();    
$(window).scroll(function () {        
    if ($(this).scrollTop() >= $('.detail-con-wrap').offset().top ) {            
        fixMenu.fadeIn(); 
        fixBuy.addClass('fixed'); 
            
    } else {            
        fixMenu.fadeOut();   
        fixBuy.removeClass('fixed');
    }    
});


function scrollToAnchor(aid){
    var aTag = $("div[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'normal');
}

$(".detailtab1").click(function() {
   scrollToAnchor('tab1');
});
$(".detailtab2").click(function() {
    scrollToAnchor('tab2');
});
$(".detailtab3").click(function() {
   scrollToAnchor('tab3');
});
$(".detailtab4").click(function() {
   scrollToAnchor('tab4'); 
   
});
$(".detailtab5").click(function() {
   scrollToAnchor('tab5'); 
   
});




//팝업
function addBlock() {
    $('.block').addClass('active');
}

function deleteBlock(){
    $('.block').removeClass('active');
    //$('.block').detach();
}
function openPopup(id) {
    if (!$('.layerpopup').hasClass('active')) {
        addBlock();
        $('#' + id).addClass('active');
    }
}
function closePopup(id) {
    deleteBlock();
    $('#' + id).removeClass('active');
}




try {
  if ('addEventListener' in window) {
    window.addEventListener('load', function () {
      // 카카오 NPay 연동
      kakaoPixel('5200703171422565836').purchaseNaverCheckout(function () {
        var data = {
          total_quantity: 0,   // 주문 내 상품 개수(optional)
          total_price: 0,      // 주문 총 가격(optional)
          currency: "KRW",     // 주문 가격의 화폐 단위(optional, 기본 값은 KRW)
          products: []
        }

        try {
          data.total_quantity = Number(document.getElementById('MS_amount_basic_0').value);
          data.total_price = document.getElementById('MK_p_price_basic_0').innerText;        
          data.total_price = Number(data.total_price.replace(/,/gi,''))

        } catch (err) {
          console.log(err)
        }
        return data;
      });
    });
  }
} catch (e) {
  /* ignore errors from kakaoPixel */
}



let now = new Date();   //현재시간

month1 = new Date(Date.parse(now) + 1 * 1000 * 60 * 60 *24).getMonth() + 1
month2 = new Date(Date.parse(now) + 2 * 1000 * 60 * 60 *24).getMonth() + 1
month3 = new Date(Date.parse(now) + 3 * 1000 * 60 * 60 *24).getMonth() + 1
month4 = new Date(Date.parse(now) + 4 * 1000 * 60 * 60 *24).getMonth() + 1

date1 = new Date(Date.parse(now) + 1 * 1000 * 60 * 60 *24).getDate()
date2 = new Date(Date.parse(now) + 2 * 1000 * 60 * 60 *24).getDate()
date3 = new Date(Date.parse(now) + 3 * 1000 * 60 * 60 *24).getDate()
date4 = new Date(Date.parse(now) + 4 * 1000 * 60 * 60 *24).getDate()

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
var dayOfWeek_tm = week[dayOfTodayp1];
var dayOfWeek_ttm = week[dayOfTodayp2];

today = hour + "" + minutes; //오늘 날짜 완성.


$(document).ready(function () {

    // 일반배송
    // 15시 이전
    if (today <= 1500) {
        if (dayOfToday == 5) {
            $('.month').html(month3);
            $('.daily .date').html(date3);
            $('.day').text('월');
        } else {
            $('.month').html(month1);
            $('.daily .date').html(date1);
            $('.day').text(dayOfWeek_tm);
        }

    }
    //15시 이후
    else {
        if (dayOfToday == 5) {
            $('.month').html(month4);
            $('.daily .date').html(date4);
            $('.daily .day').text('화');
        } else {
            $('.month').html(month2);
            $('.daily .date').html(date2);
            $('.daily .day').text(dayOfWeek_ttm);
        }

    }



    // 새벽배송
    // 16시 30분 이전
    if (today <= 1630) {
        if (dayOfToday == 5) {
            $('.month').html(month3);
            $('.dawn .date').html(date3);
            $('.dawn .day').text('월');
        } else {
            $('.month').html(month1);
            $('.dawn .date').html(date1);
            $('.dawn .day').text(dayOfWeek_tm);
        }
    }
    //16시 30분 이후
    else {
        if (dayOfToday == 5) {
            $('.month').html(month4);
            $('.dawn .date').html(date4);
            $('.dawn .day').text('화');
        } else {
            $('.month').html(month2);
            $('.dawn .date').html(date2);
            $('.dawn .day').text(dayOfWeek_ttm);
        }
    }

});


$(document).ready(function() { 
    var related_prod = new Swiper('.related-prd', {
      slidesPerView: 2.2,
      spaceBetween:10,
    });
    
    $('.block').click(function(){
        $('.block').removeClass('active');
        $('.layerpopup').removeClass('active');
    });
    
    $('.detail-con-wrap .btn-more').click(function(){
        $('.detail-con-wrap').toggleClass('active');
    });

    //고정영역
    
    $('.btn-fixed-order .prd-btns a').click(function(e){
        e.preventDefault();
        $('.detail-info-wrap').addClass('fixed')
    });
    $(document).mouseup(function (e){
        var LayerPopup = $(".detail-info-wrap.fixed");
        if(LayerPopup.has(e.target).length === 0){
            LayerPopup.removeClass("fixed");
        }
    });


    //장바구니 플로팅
    $('.btn-etc-wrap .btn-open').click(function(){
        $('.btn-etc-wrap .open').addClass('active');
        $('.btn-etc-wrap .btn-open').removeClass('active')
        $('.btn-etc-wrap .btn-close').addClass('active')
    });
    $('.btn-etc-wrap .btn-close').click(function(){
        $('.btn-etc-wrap .open').removeClass('active');
        $('.btn-etc-wrap .btn-close').removeClass('active')
        $('.btn-etc-wrap .btn-open').addClass('active')
    });
})

$(window).scroll(function(){
    var scrollTop = $(window).scrollTop();

    if (scrollTop >= 1000) {
        $('.btn-fixed-order').addClass('fixed');
    } else {
        $('.btn-fixed-order').removeClass('fixed');
    }
});
    
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



var btnShare = $('.btn-share');
btnShare.click(function(){
    var shareTitle = "국민상점"
    var shareText = "국민상점"
    var shareUrl = window.location.href;

    if(navigator.share) {
        navigator.share({
            title:shareTitle,
            text:shareText,
            url:shareUrl
        })
    } else {
        alert("공유하기를 지원하지 않는 환경입니다.")
    }
});




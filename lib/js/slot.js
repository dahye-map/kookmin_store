$(document).ready(function () {

    var machine1 = $("#machine1").slotMachine({
        active: 0,
        delay: 500
    });

    var machine2 = $("#machine2").slotMachine({
        active: 1,
        delay: 500,
        direction: "down"
    });

    var machine3 = $("#machine3").slotMachine({
        active: 2,
        delay: 500,
        direction: "down"
    });

    var results;

    function onComplete(active) {
        switch (this.element[0].id) {
            case "machine1":
                $("#machine1Result").text(this.active);
                results[0] = getMachineResult($('#machine1'), this.active);
                if(results[0]=='하트') {
                    let randomPrd = Math.floor(Math.random() * 7) + 1;
                    setTimeout(function () {
                        $('.prd-list .prd.type0' + randomPrd).addClass('active');
                    }, 1000);
                } else { 
                    let randomCoupon = Math.floor(Math.random() * 8) + 1;
                    setTimeout(function () {
                        $('.coupon-list .coupon.type0' + randomCoupon).addClass('active');
                    }, 1000);
                }
                break;
            case "machine2":
                $("#machine2Result").text(this.active);
                results[1] = getMachineResult($('#machine2'), this.active);
                break;
            case "machine3":
                $("#machine3Result").text(this.active);
                results[2] = getMachineResult($('#machine3'), this.active);
                break;
        }
        // $("#results").text(results.join(", "));
        
        
    }

    function getMachineResult(i_jqMachine, i_iActive) {
        return i_jqMachine.find('span.option > span').eq(i_iActive + 1).text();
    }

    var c_name = $.cookie('vi'); // 기존 저장된 쿠키값을 가져온다.
    var pop_name = $.cookie('_btn'); // 기존 저장된 쿠키값을 가져온다.
    if(c_name){
        $('.machine .once-notice').addClass(c_name)
    }
    if(pop_name){
        $('#randomizeButton').addClass(pop_name)
    }

    $("#randomizeButton").one('click', function(){
        results = [];
        machine1.shuffle(10, onComplete);
        setTimeout(function () {
            machine2.shuffle(5, onComplete);
        }, 500);
        setTimeout(function () {
            machine3.shuffle(5, onComplete);
        }, 1000);

    });

    $('#results a').click(function(){
        alert('쿠폰 다운로드 완료!');
        $(this).parent('p').removeClass('active');
        $('#randomizeButton').addClass('active');
        $('.machine .once-notice').addClass('active');

        var btn_cookie = $('#randomizeButton').attr('class');
        var notice_cookie = $('.machine .once-notice').attr('class');
        $.cookie('_btn', btn_cookie, { expires:1, path: '/'});
        $.cookie('vi', notice_cookie, { expires:1, path: '/'});
    });

});
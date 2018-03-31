/*---------------------
日付取得
---------------------*/

$(window).bind("load", function(){
    var url = location.href;
    if(url == "https://faretoqe.com"){
            document.getElementById("js-date").innerHTML = getDate();

            function getDate(){
                var now = new Date();
                var year = now.getFullYear();
                var mon = now.getMonth()+1;
                var day = now.getDate();

            var s =year + "." + mon + "/" + day;
                return s;
            }        
    }
})



/*--------------------
spメニュー
---------------------*/

$(function(){
    var menu = $('.spnav'),
        menuBtn = $('.js-menuBtn'),
        menuwidth = menu.outerWidth();
    
    menuBtn.on('click', function(){
        menu.toggleClass('open');
            if(menu.hasClass('open')){
                menu.animate({'right' : 0 }, 300);
            } else {
                menu.animate({'right': -menuwidth }, 300);
            }
    });
});

/*--------------------
スムーススクロール
---------------------*/
$(function(){
    $('a[href^="#"]').click(function(){
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - 95;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });
});


/*-------------------
sticky nav
----------------------*/

$(function(){
    var nav = $('#js-nav');
    var navTop = nav.offset().top - 10;
    console.log(navTop);
    $(window).scroll(function(){
        var winTop = $(this).scrollTop();
        if(winTop >= navTop){
            nav.addClass('sticky');
        } else{
            nav.removeClass('sticky');
        }
    })
})

/*--------------------
fbレスポンシブ対応
---------------------*/

$(function() {
    // ページプラグインの埋め込みコードを返す。
    function pagePluginCode(w) {
        return '<div class="fb-page" data-href="https://www.facebook.com/botanic.faretoqe" data-tabs="timeline" data-width="'+w+'" data-height="620" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/botanic.faretoqe" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/botanic.faretoqe">霽れと褻（ハレとケ）</a></blockquote></div>';
    }
 
    // ページプラグインを追加する要素
    var facebookWrap = $('.facebook__wrapper');
    var fbBeforeWidth = ''; // 前回変更したときの幅
    var fbWidth = facebookWrap.width(); // 今回変更する幅
    var fbTimer = false;
    $(window).on('load resize', function() {
        if (fbTimer !== false) {
            clearTimeout(fbTimer);
        }
        fbTimer = setTimeout(function() {
            fbWidth = facebookWrap.width(); // 変更後の幅を取得
            // 前回の幅から変更があった場合のみ処理
            // スマホだとスクロール時にリサイズが発生することがあるため
            if(fbWidth != fbBeforeWidth) {
                facebookWrap.html(pagePluginCode(fbWidth)); // ページプラグインのコード変更
                window.FB.XFBML.parse(); // ページプラグインの再読み込み
                fbBeforeWidth = fbWidth; // 今回変更分を保存しておく
            }
        }, 200);
    });
});
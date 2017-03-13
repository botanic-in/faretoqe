$(function(){
  // ページ内スクロール
  // var headerHight = 140; //ヘッダの高さ
  var headerHeight = $('#menu').height(); //ヘッダー高さ（SP版では0）
  console.log(headerHeight);
  $('a[href^=\\#]').click(function(){
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top-headerHeight; //ヘッダの高さ分位置をずらす
      $("html, body").animate({scrollTop:position}, 550, "swing");
      return false;
  });

  // PC版メニューの固定表示
  var offset = $('#menu').offset().top;
  $(window).on('scroll', function() {
    $('#menu').toggleClass('fixed', $(this).scrollTop() > offset);
  });

  // SP版アコーディオン表示
  var isVisibleAccordion = false;
  $('.btn-accordion').on('click', function(){
    $('.accordion').animate({height: 'toggle'}, 'slow');

    // ボタンテキストの変更
    if(isVisibleAccordion==true){
      $(this).text('さらに詳しく ▼');
      isVisibleAccordion = false;
    }else {
      $(this).text('閉じる ▲');
      isVisibleAccordion = true;
    }
  });

  // SP版メニュー表示
  $('#btn-sp-menu').on('click', function(){
    $('#sp-menu').animate({right: 0});
  });
  $('#sp-menu .close').on('click', function(){
    $('#sp-menu').animate({right: '-90%'});
  });
  $('#sp-menu a').on('click', function(){
    $('#sp-menu').css('right', '-90%');
  });
});

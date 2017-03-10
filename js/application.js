$(function(){
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

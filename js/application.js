$(function(){
  // PC版メニューの固定表示
  var offset = $('#menu').offset().top;
  $(window).on('scroll', function() {
    $('#menu').toggleClass('fixed', $(this).scrollTop() > offset);
  });

  // カレンダーBOXの高さ調整
  // （PC版用。SP版はアコーディオン表示時に再実行）
  adjustCalendar();

  // SP版アコーディオン表示
  var isVisibleAccordion = false;
  $('.btn-accordion').on('click', function(){
    $('.accordion').animate({height: 'toggle'}, setTimeout(function(){adjustCalendar()}, 500));

    // ボタンテキストの変更
    if(isVisibleAccordion==true){
      $(this).text('さらに詳しく ▼');
      isVisibleAccordion = false;
    }else {
      $(this).text('閉じる ▼');
      isVisibleAccordion = true;
    }
  });

  // カレンダーBOXの高さ調整
  function adjustCalendar() {
    var cal_box_width = $('#calendar .box').width();
    $('#calendar .box').height(cal_box_width);
  }

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

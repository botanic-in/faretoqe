$(function(){
  // PC版メニューの固定表示
  var offset = $('#menu').offset().top;
  $(window).on('scroll', function() {
    $('#menu').toggleClass('fixed', $(this).scrollTop() > offset);
  });

  // カレンダーBOXの高さ調整
  var cal_box_width = $('#calendar .box').width();
  $('#calendar .box').height(cal_box_width);
});

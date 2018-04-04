// kozel js/src/b_1_bannerBox.js
(function($){

var bannerBox = $('#bannerBox');
// 배너 올라가는 느낌
$(window).on('scroll',function(){
  var scrollOffset = $(this).scrollTop();
  // console.log(scrollOffset);
  bannerBox.css({top:-scrollOffset/10});
});

// 재생 정지버튼
var video = bannerBox.find('.video_play');
var videoSrc = bannerBox.find('source');
var playBtn = $('.play_btn');
var pauseBtn = $('.pause_btn');

playBtn.on('click',function(e){
  e.preventDefault();
  video[0].play();
});

pauseBtn.on('click',function(e){
  e.preventDefault();
  video[0].pause();
});

// 배너와 배너랩 높이값설정
// var videoH = $('.video_area').height();
// console.log(videoH);
// bannerBox.height(videoH);
// bannerBoxWrap.height(videoH);

  

})(this.jQuery);
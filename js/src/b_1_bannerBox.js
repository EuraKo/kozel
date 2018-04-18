// kozel js/src/b_1_bannerBox.js
(function($){
var mobSize     = 481;
var tabSize     = 768;
var pcSize      = 960;
var pcfullSize  = 1366;

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
var videoBtn = $('.video_btn');
var playBtn = videoBtn.children('.play_btn');
var pauseBtn = videoBtn.children('.pause_btn');

playBtn.on('click',function(e){
  e.preventDefault();
  video[0].play();
});

pauseBtn.on('click',function(e){
  e.preventDefault();
  video[0].pause();
});
// ====================================

var originWinWidth = $(window).width();

// =======================================

var mob = function(){

};

var tablet = function(){
  video.remove();
  videoBtn.remove();
  // $('.video_area').append('<img src="../img/kozel.png">');
  $('.video_area').css({
            backgroundImage:"url(../img/main.gif)",
            backgroundRepeat:"no-repeat",
            backgroundSize:"cover",
            backgroundPosition:"center"
          });

};

var pc = function(){

};

var full = function(){

}
// =======================================
var responsiveWeb = function() {
  if (originWinWidth <= tabSize){
    tablet();
  }else if(originWinWidth < mobSize){
    mob();
  }else if(originWinWidth > tabSize){
    pc();
  }
  else if(originWinWidth  > pcfullSize){
    full();
  }
};

responsiveWeb();

  



})(this.jQuery);
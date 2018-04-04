// kozel src/all_headBox.js
(function($){

var gnbBox = $('#gnbBox');
var gnbDl = gnbBox.find('dl');
var gnbDt = gnbDl.find('dt');
var depth = gnbDl.find('.depth');
depth.hide();

// .depth 위치잡기
var gnbOffset = gnbBox.offset().left;
var headBoxW = $('#headBox').innerWidth();
// console.log(headBoxW);
depth.css({marginLeft:-gnbOffset,width:headBoxW});

// 마우스 올리고 벗어났을떄
// 올리기
gnbDt.on('mouseenter', function(){
  depth = $(this).next('.depth');
  depth.stop().slideDown();
  depth.parent().parent().siblings().find('.depth').stop().slideUp();
});
// 벗어나기
var depthH = depth.outerHeight(true);
var gnbDtH = gnbDt.outerHeight();
var gnbH = depthH + gnbDtH;
// console.log(gnbH);
//랩을 씌워 상자를 만들어 벗어날 범위를 잡아주기
gnbBox.wrap('<div class="gnb_wrap"></div>');
gnbBox.css({top:0});
var gnbWrap = $('.gnb_wrap');
gnbWrap.css({width:'100%',height:gnbH,position:'absolute',bottom:-depthH+30,left:0});

gnbWrap.on('mouseleave', function(){
  depth.stop().slideUp();
});


// ------------------------------------------

// 스크롤올리고 내리고 값은 all_headBox_rwd.js
})(this.jQuery);




























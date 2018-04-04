// kozel src/all_headBox_rwd.js
(function($) {

var originWinWidth = $(window).width();

// =======================================
  var gnb     = $('#gnbBox');
  var gnbWrap = $('.gnb_wrap');
  var menu    = gnb.find('button');
  var bar     = menu.find('.bar');
  var gnbNav  = gnb.find('ul');
  var gnbDd   = gnb.find('dd');
  var gnbA    = gnb.find('dt').find('a');


  var mobSize     = 481;
  var tabSize     = 768;
  var pcSize      = 960;
  var pcfullSize  = 1366;

// 스크롤 뷰 ===================================================
  var ScrollView = function(viewH){
    // headBox 사라졌다 나타나기
    //주소불러오기 
    var lc = $(location).attr('href');
    var cut = lc.split('/').reverse()[0];


    var ifTest = cut == 'b_main.html';
    console.log(cut, ifTest);

    if(ifTest){
      var headBox = $('#headBox');
      var winH;

      // ---------
      if(originWinWidth >= pcSize){
        winH = $(window).outerHeight();
      }else{
        winH = viewH;
      }
      // ---------
      // console.log(winH);

      headBox.hide();
      headBox.css({position:'fixed', zIndex:100});

      $(window).on('scroll',function(){
        var _this = $(this).scrollTop();
        // console.log(_this);
        if (_this >= winH) {
          headBox.slideDown();
          headBox.children('h1').css({backgroundImage:"url('../img/flogo.png')",height:'60px'});
        }else{
          headBox.slideUp();
        }
      });
    }
  };
// ===================================================



// 모바일 ----------------
var mob = function(){
    gnbNav.hide();
  gnbWrap.css({height:"0", bottom:"66px"});
  gnbDd.hide();
  gnbA.removeAttr('href');
  menu.on('click',function(e){
    e.preventDefault();
    gnbNav.slideToggle();
    gnb.css({width:"50vw"});
    gnbDd.css({marginLeft:"-100%", width:"100%"});
    gnbDd.parent().parent().siblings().find('.depth').stop().slideUp();
    bar.toggleClass('active');
  });

  // 메인화면 
  var lc = $(location).attr('href');
var cut = lc.split('/').reverse()[0];


var ifTest = cut == 'b_main.html';
console.log(cut, ifTest);

if(ifTest){
  var headBox = $('#headBox');
  headBox.css({height:"80px", padding:"0 30px"});
  menu.css({marginTop:"50px"});
};

// 내렸을때 나오기

var view = $('body').outerHeight();
ScrollView(view);
};

// 태블릿 ---------------
var tablet = function(){
  gnbNav.hide();
  gnbWrap.css({height:"0", bottom:"66px"});
  gnbDd.hide();
  gnbA.removeAttr('href');
  menu.on('click',function(e){
    e.preventDefault();
    gnbNav.slideToggle();
    gnb.css({width:"50vw"});
    gnbDd.css({marginLeft:"-100%", width:"100%"});
    gnbDd.parent().parent().siblings().find('.depth').stop().slideUp();
    bar.toggleClass('active');
  });

  // 메인화면 
  var lc = $(location).attr('href');
var cut = lc.split('/').reverse()[0];


var ifTest = cut == 'b_main.html';
console.log(cut, ifTest);

if(ifTest){
  var headBox = $('#headBox');
  headBox.css({height:"120px"});
  menu.css({marginTop:"30px"});
}


var view = $('body').outerHeight();
ScrollView(view);

};


// 피씨 -----------------
var pc = function(){
 ScrollView();
};
// 풀 -----------------
var full = function(){
   gnbNav.hide();
  gnbWrap.css({height:"0", bottom:"66px"});
  gnbDd.hide();
  gnbA.removeAttr('href');
  menu.on('click',function(e){
    e.preventDefault();
    gnbNav.slideToggle();
    gnb.css({width:"50vw"});
    gnbDd.css({marginLeft:"-100%", width:"100%"});
    gnbDd.parent().parent().siblings().find('.depth').stop().slideUp();
    bar.toggleClass('active');
  });

  // 메인화면 
  var lc = $(location).attr('href');
var cut = lc.split('/').reverse()[0];


var ifTest = cut == 'b_main.html';
console.log(cut, ifTest);

if(ifTest){
  var headBox = $('#headBox');
  headBox.css({height:"120px"});
  menu.css({marginTop:"30px"});
}


var view = $('body').outerHeight();
ScrollView(view);


}

// =======================================
var responsiveWeb = function() {
  if(originWinWidth < mobSize){
    mob();
  }else if (originWinWidth <= tabSize){
    tablet();
  }else if(originWinWidth > tabSize){
    pc();
  }
  else if(originWinWidth  > pcfullSize){
    full();
  }
};

responsiveWeb();






})(jQuery);
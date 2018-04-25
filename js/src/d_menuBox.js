// kozel d_menuBox.js
(function($) {
var menuTit = $('.menu_title').children('li');
var menuPic = $('.menu_pic').children('li');

menuTit.on('mouseenter',function(e){
  e.preventDefault();
  var index = $(this).index();
  console.log(index);
  menuPic.eq(index).siblings('li').removeClass('view');
  menuPic.eq(index).addClass('view');

})


})(this.jQuery);
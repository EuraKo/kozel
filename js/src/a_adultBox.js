// kozel js/src/a_adultBox.js
(function($) {
var adultBox = $('#adultBox');

var age = adultBox.find('#age');
// console.log(year);
// val()입력값을 가져오는것
var enterBtn = adultBox.find('.enter_area').children('a');

var d = new Date();
var nowYear = d.getFullYear();
// console.log(nowYear);
var yearCut = nowYear-20;


enterBtn.on('click',function(e){
  e.preventDefault();
  var year = age.val();
    console.log('age: '+year);
  if (year>=yearCut){
    window.location = 'https://www.youtube.com/channel/UCPUeGC_AL-OnDQORKhRm6iA';
    //enterBtn.attr({'href':'https://www.youtube.com/channel/UCPUeGC_AL-OnDQORKhRm6iA','target':'_blank'});
   }else{
    window.location = './b_main.html';
   }
});
})(this.jQuery);
// kozel src/b_2_foodBox.js
 (function($) {
  var pc = function(){
     var foodBox = $('#foodBox');
      var foodUl = foodBox.children('ul');
      var foodLi = foodUl.children('li');

      var li1 = {zIndex:300, transform:'translate3d(-10rem,-10rem,-10rem)'};
      var li2 = {zIndex:400, transform:'translate3d(-20rem,0,-5rem)'};
      var li3 = {zIndex:500, transform:'translate3d(0,10rem,0)'};
      var li4 = {zIndex:400, transform:'translate3d(20rem,0,-5rem)'};
      var li5 = {zIndex:300, transform:'translate3d(10rem,-10rem,-10rem)'};


      var i=[0,1,2,3,4];

      foodLi.eq(i[0]).css(li1);
      foodLi.eq(i[1]).css(li2);
      foodLi.eq(i[2]).css(li3);
      foodLi.eq(i[3]).css(li4);
      foodLi.eq(i[4]).css(li5);
  
      var j=0;

      setInterval(function(){
        for(j=0;j<i.length;j++){
          i[j]+=1;
          if(i[j]>=5){
            i[j] -= 5;
          }
            foodLi.eq(i[0]).css(li1);
            foodLi.eq(i[1]).css(li2);
            foodLi.eq(i[2]).css(li3);
            foodLi.eq(i[3]).css(li4);
            foodLi.eq(i[4]).css(li5);
            // console.log(i[j]);
        };
      
      },3000);
}



var originWinWidth = $(window).width();

// =======================================

var mob = function(){

};

var tablet = function(){

};



var full = function(){

}
// =======================================
var responsiveWeb = function() {
  if(originWinWidth < 481){
    mob();
  }else if (originWinWidth <= 768){
    tablet();
  }
  else if(originWinWidth > 768){
    pc();
  }else if(originWinWidth >1366){
    full();
  }
};

responsiveWeb();




    })(this.jQuery);
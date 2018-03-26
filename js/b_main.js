// b_main.js
(function($){
var baseUrl = './src/';
var myHtml = [
              {make:'headBox'         , load: 'all/headBox.html'},
              {make:'bannerBox'       , load: 'b_main/b_1_bannerBox.html'},
              {make:'foodBox'         , load: 'b_main/b_2_foodBox.html'},
              {make:'beerBox'         , load: 'b_main/b_3_beerBox.html'},
              {make:'locationBox'     , load: 'b_main/b_4_locationBox.html'},
              {make:'footBox'         , load: 'all/footBox.html'}
];


for(var i = 0; i < myHtml.length; i++){
  ImportFile(myHtml[i].make, baseUrl+myHtml[i].load);
};


})(this.jQuery);


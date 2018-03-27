// kozel d_1_beer.js
(function($){
var baseUrl = './src/';
var myHtml = [
              {make:'headBox'         , load: 'all/headBox.html'},
              {make:'beerBox'         , load: 'd_menu/d_1_beer/d_1_beerBox.html'},
              {make:'footBox'         , load: 'all/footBox.html'}
];


for(var i = 0; i < myHtml.length; i++){
  ImportFile(myHtml[i].make, baseUrl+myHtml[i].load);
};


})(this.jQuery);


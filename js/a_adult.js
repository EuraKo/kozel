// a_adult.js
(function($){
var baseUrl = './src/';
var myHtml = [
              {make:'adultBox'   , load:'a_adult/adultBox.html'}
];


for(var i = 0; i < myHtml.length; i++){
  ImportFile(myHtml[i].make, baseUrl+myHtml[i].load);
};


})(this.jQuery);


// kozel c_1_introduce.js
(function($){
var baseUrl = './src/';
var myHtml = [
              {make:'headBox'         , load: 'all/headBox.html'},
              {make:'introduceBox'         , load: 'c_1_introduce/c_1_1_introduceBox.html'},
              {make:'videoBox'         , load: 'c_1_introduce/c_1_2_videoBox.html'},
              {make:'footBox'         , load: 'all/footBox.html'}
];


for(var i = 0; i < myHtml.length; i++){
  ImportFile(myHtml[i].make, baseUrl+myHtml[i].load);
};


})(this.jQuery);


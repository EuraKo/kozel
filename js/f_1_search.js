// kozel f_1_search.js
(function($){
var baseUrl = './src/';
var myHtml = [
              {make:'headBox'         , load: 'all/headBox.html'},
              {make:'searchBox'         , load: 'f_store/f_1_1_searchBox.html'},
              {make:'footBox'         , load: 'all/footBox.html'}
];


for(var i = 0; i < myHtml.length; i++){
  ImportFile(myHtml[i].make, baseUrl+myHtml[i].load);
};


})(this.jQuery);


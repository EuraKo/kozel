// kozel src/f_1_1_searchBox.js
(function($){
   var latLng1 ={lat :37.539298,lng : 127.084679};
   var latLng2 =[37.539298,127.084679];
   var map = new GMaps({
          el:'.map',
          lat:latLng1.lat,
          lng: latLng1.lng
        });
  map.addMarker({
    lat: latLng2[0],
    lng: latLng2[1],
    title: '구의점',
    click: function(e) {
     alert('You clicked in this marker');
   }
});
      
})(this.jQuery);
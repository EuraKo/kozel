// template.js
function ImportFile(makeDivName,linkFile,wrapColorBoolean){

  var wrapView = $('body').children('#wrap').length;

  if(!wrapView){
    $('body').prepend('<div id="wrap">');
  }

  var wrap=$('#wrap');
  var wrapDiv = wrap.append('<div class="'+makeDivName+'Wrap"></div>');
  var boxName = makeDivName+'Wrap';
  var select = $('.'+boxName);
  select.load(linkFile,function(){
    var selectChild = select.children();
    selectChild.css({margin:'0 auto'});
    var wrapColorBoo = wrapColorBoolean;

if(wrapColorBoo){
  var selectColor = $('#'+makeDivName).css('backgroundColor');
  select.css({backgroundColor:selectColor});
}

  });
}
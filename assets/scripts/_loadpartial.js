$('document').ready(function(){
  $("[load-partial]").each(function(){
    partialLoad($(this).attr("load-partial"), this)
  })
  // <div load-partial="partials/menu.html"></div>
});

function partialLoad(path, el, oncomplete=function(){}){
  $(el).load(path, function(){
    svgInit()
  })
}

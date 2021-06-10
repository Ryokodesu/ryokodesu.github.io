$('document').ready(function(){
  svgInit()
});

function svgInit(){
  $("[load-svg]").each(function(){
    svgLoad($(this).attr("load-svg"), this)
  })
  // <div load-svg="assets/svg/logo_start.svg"></div>
}

function svgLoad(path, el, oncomplete=function(){}){
  $.get(path, function(data) {
    el.innerHTML = new XMLSerializer().serializeToString(data.documentElement)
    oncomplete()
  })
}

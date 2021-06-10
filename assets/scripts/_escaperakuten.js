$('document').ready(function(){

  window.addEventListener('keydown', moveSelection);
  var w = parseInt($("#canvas").width())
  var h = parseInt($("#canvas").height())
  var rw = parseInt($("#ryoko").width())
  var rh = parseInt($("#ryoko").height())
  var aw = 80
  var ah = 80
  $("#ryoko").css("left", w/2 - rw/2)

  var dropping;
  function startdropping(){
    dropping = setInterval(function(){
      antenna()
    }, 1000);
  }
  startdropping()

  // $(".game").on("click",endgame)
  $("#start").on("click",startgame)

  function endgame(){
    $(".game").hide()
    $(".gameover").css("display","flex")
    clearInterval(dropping)
    $(".antenna").stop();
    $(".antenna").remove()
  }
  function startgame(){
    startdropping()
    $(".game").css("display","flex")
    $(".gameover").hide()
  }
  function leftArrowPressed() {
      var l = parseInt($("#ryoko").css("left"))
      if(l > 0){
        $("#ryoko").css("left", parseInt($("#ryoko").css("left")) - 20)
        $("#ryoko_left").show()
        $("#ryoko_right").hide()
      }
  }
  function rightArrowPressed() {
      var l = parseInt($("#ryoko").css("left"))
      if(l + rw < w){
        $("#ryoko").css("left", parseInt($("#ryoko").css("left")) + 20)
        $("#ryoko_left").hide()
        $("#ryoko_right").show()
      }
  }
  function moveSelection(evt) {
    switch (evt.keyCode) {
      case 37:
      leftArrowPressed();
      break;
      case 39:
      rightArrowPressed();
      break;
    }
  };
  function antenna(){
    var $ant = $("<img class='antenna' src='./assets/imgs/antenna"+parseInt(Math.random()*4)+".svg'></img>")
    $ant.css({
      "left": parseInt(Math.random()*(w-aw)) ,
      "position": "absolute",
      "top": 0,
      "z-index": 950,
      "width": aw
    })
    $("#antennas").append($ant)
    $ant.animate({top: $(".canvas").height()-3*ah/2,}, Math.random() + 5000, function(){
      var _posA = parseInt($(this).css("left"))
      var _posR = parseInt($("#ryoko").css("left"))
      if(((_posA>=_posR)&&(_posA<=_posR+rw))||((_posA+aw>=_posR)&&(_posA+aw<=_posR+rw))){
        endgame()
      } else {
        $(this).remove();
      }
    });
  }

});

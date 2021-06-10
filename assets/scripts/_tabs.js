$( document ).ready(function() {

    var act_tab = 0;
    var tot_tab = $("[tab]").length

    $(".next_tab").on("click", function(){
      nextTab()
    })
    $(".prev_tab").on("click", function(){
      prevTab()
    })

    function nextTab(){
      act_tab = act_tab + 1
      hideTabs()
      showTab(act_tab)
      showButtons()
      if(act_tab == (tot_tab - 1)){
        hideButtonNext()
      }
    }

    function prevTab(){
      act_tab = act_tab - 1
      hideTabs()
      showTab(act_tab)
      showButtons()
      if(act_tab == 0){
        hideButtonPrev()
      }
    }
    
    function hideTabs(){
      $("[tab]").removeClass("active")
    }
    function hideTab(n){
      $("[tab="+n+"]").removeClass("active")
    }
    function showTab(n){
      $("[tab="+n+"]").addClass("active")
    }
    function hideButtons(){
      $(".action").removeClass("active")
    }
    function hideButtonPrev(){
      $(".action.prev_tab").removeClass("active")
    }
    function hideButtonNext(){
      $(".action.next_tab").removeClass("active")
    }
    function showButtons(){
      $(".action").addClass("active")
    }
});

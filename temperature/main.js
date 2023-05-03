$('#menu-toggle').click(function(){
  
    $('#menu').slideToggle(200);
  })
  
  $(window).resize(function() {
    
    if(window.innerWidth > 700) {
  
      $('#menu').show();
    } else {
      $('#menu').hide();
    }
  })
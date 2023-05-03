$('#menu-toggle').click(function(){
  
    $('#menu').slideToggle(200);
  })
  
  $(window).resize(function() {
    
    if(window.innerWidth > 880) {
  
      $('#menu').show();
    } else {
      $('#menu').hide();
    }
  })

  function nightMode() {
    document.getElementById("background").style.backgroundImage = "url(../image/ban.jpeg)";
    document.getElementById("background").style.color = "white";
    document.getElementById("highlight").style.backgroundColor = "darkblue";
 }

 function dayMode() {
  document.getElementById("background").style.backgroundImage = "url(../image/bg.jpg)";
  document.getElementById("background").style.color = "black";
  document.getElementById("highlight").style.backgroundColor = "lightblue";
}
$(document).ready(function(){
$("nav").fadeIn("5000")
 
});

  function animatePictures() {
jQuery('img').each(function(i) {
  jQuery(this).delay(i * 300).fadeIn(3000).slideDown();
});
  }
jQuery(window).load(function($) { animatePictures(); });
    

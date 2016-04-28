$(document).ready(function(){
var text= $("h1,p");
text.hide().fadeIn(3000);




$(window).on('load', function(){
$('.pictures').masonry({
  // options
  itemSelector: '.image',
  columnWidth: ".image"
});
});




});

$(document).ready(function(){
  $('.nav-toggle').on('click', function(e){
    e.preventDefault();
    $('.block-nav').toggleClass('is-open')
  })
})
$(document).ready(function() {
  $('.menu, .drop-menu-link, .drop-menu-wrapper').on('click', function() {
    $('.drop-menu').toggleClass('drop-menu--active drop-down--in');
    $('.menu').toggleClass('menu--close');
    $('.drop-menu-wrapper').toggleClass('drop-menu-wrapper--active');
    $('body').toggleClass('noscroll');
  });
  $('drop-menu').on('click', function(event) {
    if(event.target == this){
      $(this).fadeOut(); 
    }
  });
});
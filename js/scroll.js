$("a").click(function () {
  var elementClick = $(this).attr("href");
  var destination = $(elementClick).offset().top;
  $('html, body').animate({ scrollTop: destination }, 600);
  return false;
});

$(window).scroll(function() {    
  var scroll = $(window).scrollTop();

  if (scroll >= 200) {
    $(".header-padding").addClass("scrolled");
    $(".header--img-logo").addClass("header--img-logo-scrolled");
  } else {
    $(".header-padding").removeClass("scrolled");
    $(".header--img-logo").removeClass("header--img-logo-scrolled");
  }
});
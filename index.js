// navbar appear white when scroll up
function checkScroll() {
  let startY = $(".navbar").height(); //The point where the navbar changes in px

  if ($(window).scrollTop() > startY) {
    $(".navbar").addClass("scrolled");
  } else {
    $(".navbar").removeClass("scrolled");
  }
}
// navbar appear white when scroll up
if ($(".navbar").length > 0) {
  $(window).on("scroll load resize", function() {
    checkScroll();
  });
}

// navbar, while on Home, toggle black and transparent if click the menu btn
$(".navbar-toggler").click(function() {
  $("nav").toggleClass("nav-toggler-black-navbar");
});

// navbar collapse when click any menu list
$(".navbar-nav>li>a").on("click", function() {
  $(".navbar-collapse").collapse("hide");
});

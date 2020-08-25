// Header Section
// navbar appear white when scroll up
function checkScroll() {
  let startY = $(".navbar").height() * 2; //The point where the navbar changes in px

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

// navbar collapse when click any menu list
$(".navbar-nav>li>a").on("click", function() {
  $(".navbar-collapse").collapse("hide");
});

// menu list change color when hover
$(".navbar-nav>li>a").hover(function() {
  $(this).css("color", "#ffcd32");
}, function() {
  $(this).css("color", "#ffffff");
});

// navbar-brand change color when hover
$(".navbar-brand").hover(function() {
  $(this).css("color", "#ffffff");
}, function() {
  $(this).css("color", "#ffcd32");
});

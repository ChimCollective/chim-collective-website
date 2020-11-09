// navbar collapse when click any menu list
$(".navbar-nav>li>a").on("click", function() {
  $(".navbar-collapse").collapse("hide");
});

// navbar collapse when click body
$(window).on("click", function() {
  $(".navbar-collapse").collapse("hide");
});

// navbar collapse when click any menu list
$(".navbar-nav>li>a").on("click", function() {
  $(".navbar-collapse").collapse("hide");
});

// navbar collapse when click body
$(window).on("click", function() {
  $(".navbar-collapse").collapse("hide");
});

// hover bw to cl team img
$(".card-img-top").hover(function() {
  $(this).attr('src', $(this).attr('src').replace("bw/bw-", "cl/"));
}, function() {
  $(this).attr('src', $(this).attr('src').replace("cl/", "bw/bw-"));
});

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
  $(this).attr('src', $(this).attr('src').replace("current/bw-", "current/"));
  $(this).attr('src', $(this).attr('src').replace("former/bw-", "former/"));
}, function() {
  $(this).attr('src', $(this).attr('src').replace("current/", "current/bw-"));
  $(this).attr('src', $(this).attr('src').replace("former/", "former/bw-"));
});

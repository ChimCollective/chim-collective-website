// navbar collapse when click any menu list
$(".navbar-nav>li>a").on("click", function() {
  $(".navbar-collapse").collapse("hide");
});

// navbar collapse when click body
$(window).on("click", function() {
  $(".navbar-collapse").collapse("hide");
});

$(".card-img-top").hover(function() {
  let imgNameBw = $(this).attr('src');
  let imgNameCl = imgNameBw.replace("bw/bw-", "cl/");
  $(this).attr('src', imgNameCl);
}, function() {
  let imgNameCl = $(this).attr('src');
  let imgNameBw = imgNameCl.replace("cl/", "bw/bw-");
  $(this).attr('src', imgNameBw);
});

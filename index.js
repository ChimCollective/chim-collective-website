// Header Section
$(".navbar-nav>li>a").on("click", function(){
    $(".navbar-collapse").collapse("hide");
});

$(".navbar-nav>li>a").hover(function(){
  $(this).css("color", "#ffcd32");
}, function() {
  $(this).css("color", "white");
})

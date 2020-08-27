// Header Section
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

// navbar collapse when click any anywhere on the dropdown
$("#navbar-menus").on("click", function() {
  $(".navbar-collapse").collapse("hide");
});

//ABOUT SECTION
//bullet rotate when hover
$(".btn-xl").click(function() {
  $(this).toggleClass("btn-xl-rotate");
});

if ($(window).width() > 768) {
  // navbar-brand change color when hover
  $(".navbar-brand").hover(function() {
    $(this).css("color", "#ffffff");
  }, function() {
    $(this).css("color", "#ffcd32");
  });

  //TEAM SECTION
  $(".zoom").hover(function() {
    $(".zoom-img", this).addClass("zoom-img-animate");
    $(".btn-group", this).addClass("btn-group-animate");
  }, function() {
    $(".zoom-img", this).removeClass("zoom-img-animate");
    $(".btn-group", this).removeClass("btn-group-animate");
  });
}

// Navigation Bar Section
$(".menu-btn").click(function() {
  $(this).toggleClass("menu-btn-rotate");
  $(".menu-list").toggleClass("menu-list-slide");
});

$(".panel-heading").parent('.panel').hover(function() {
  $(this).children(".collapse").collapse("show");
}, function() {
  $(this).children(".collapse").collapse("hide");
});

$(".team-a").hover(function() {
  $(".team-a").css("color", "white");
}, function() {
  $(".team-a").css("color", "black");
});

$(".panel-body").children('a').hover(function() {
  $(".team-a").css("color", "white");
}, function() {
  $(".team-a").css("color", "black");
});

if ($(window).width() > 768) {
  //TEAM SECTION
  $(".zoom").hover(function() {
    $(".zoom-img", this).addClass("zoom-img-animate");
    $(".btn-group", this).addClass("btn-group-animate");
  }, function() {
    $(".zoom-img", this).removeClass("zoom-img-animate");
    $(".btn-group", this).removeClass("btn-group-animate");
  });
}

//CONTACT SECTION
$('.input-submit').click(function() {
  var name = $('.input-name').val();
  var email = $('.input-email').val();
  var phone = $('.input-phone').val();
  var msg = $('.input-msg').val();

  if (name.length <= 0) {
    alert("Please enter your name");
  }

  if (phone.length < 8) {
    alert("Please enter a valid phone number");
  }

  if (msg.length <= 0) {
    alert("Please leave a message");
  }
});

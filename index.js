// Navigation Bar Section
$(".menu-btn").click(function() {
  $(this).toggleClass("menu-btn-rotate");
  $(".menu-list").toggleClass("menu-list-slide");
})

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

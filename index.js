setInterval(function() {
  let pic1 = "images/" + (Math.floor(Math.random() * 10) + 1) + ".jpg";
  let pic6 = "images/" + (Math.floor(Math.random() * 10) + 1) + ".jpg";
  let pic8 = "images/" + (Math.floor(Math.random() * 10) + 1) + ".jpg";
  let pic9 = "images/" + (Math.floor(Math.random() * 10) + 1) + ".jpg";
  let pic15 = "images/" + (Math.floor(Math.random() * 10) + 1) + ".jpg";

	$("#pic1").fadeTo(400, 0).attr("src", pic1).fadeTo(400, 1).delay(1000).fadeTo(400, 0);
  $("#pic6").fadeTo(400, 0).attr("src", pic6).fadeTo(400, 1).delay(1000).fadeTo(400, 0);
	$("#pic8").fadeTo(400, 0).attr("src", pic8).fadeTo(400, 1).delay(1000).fadeTo(400, 0);
	$("#pic9").fadeTo(400, 0).attr("src", pic9).fadeTo(400, 1).delay(1000).fadeTo(400, 0);
	$("#pic15").fadeTo(400, 0).attr("src", pic15).fadeTo(400, 1).delay(1000).fadeTo(400, 0);
},2300);

// Navigation Bar Section
$(".menu-btn, .menu-list").hover(function() {
  $(".menu-list").addClass("slide");
  $(".feather-plus").addClass("rotate");
}, function() {
  $(".menu-list").removeClass("slide");
  $(".feather-plus").removeClass("rotate");
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

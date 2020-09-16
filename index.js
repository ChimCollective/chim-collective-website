// Yellow Head Box
$(".yellow-head-box").on("click", function() {
  $(this).css("scaleX", "140px");
});

// Team Section
var rand1 = Math.floor(Math.random() * 10) + 1;
var rand6 = Math.floor(Math.random() * 10) + 1;
var rand8 = Math.floor(Math.random() * 10) + 1;
var rand9 = Math.floor(Math.random() * 10) + 1;
var rand15 = Math.floor(Math.random() * 10) + 1;

while (rand6 === rand1) {
  rand6 = Math.floor(Math.random() * 10) + 1;
}

while (rand8 === rand6 || rand8 === rand1) {
  rand8 = Math.floor(Math.random() * 10) + 1;
}

while (rand9 === rand8 || rand9 === rand6 || rand9 === rand1) {
  rand9 = Math.floor(Math.random() * 10) + 1;
}

while (rand15 === rand9 || rand15 === rand8 || rand15 === rand6 || rand15 === rand1) {
  rand15 = Math.floor(Math.random() * 10) + 1;
}

var pic1 = "images/" + rand1 + ".jpg";
var pic6 = "images/" + rand6 + ".jpg";
var pic8 = "images/" + rand8 + ".jpg";
var pic9 = "images/" + rand9 + ".jpg";
var pic15 = "images/" + rand15 + ".jpg";

$("#pic1").attr("src", pic1);
$("#pic6").attr("src", pic6);
$("#pic8").attr("src", pic8);
$("#pic9").attr("src", pic9);
$("#pic15").attr("src", pic15);

setInterval(function() {
  var prevRand1 = rand1;
  var prevRand6 = rand6;
  var prevRand8 = rand8;
  var prevRand9 = rand9;
  var prevRand15 = rand15;

  rand1 = Math.floor(Math.random() * 10) + 1;
  rand6 = Math.floor(Math.random() * 10) + 1;
  rand8 = Math.floor(Math.random() * 10) + 1;
  rand9 = Math.floor(Math.random() * 10) + 1;
  rand15 = Math.floor(Math.random() * 10) + 1;

  while (rand1 === prevRand1) {
    rand1 = Math.floor(Math.random() * 10) + 1;
  }

  while (rand6 === rand1 || rand6 === prevRand6) {
    rand6 = Math.floor(Math.random() * 10) + 1;
  }

  while (rand8 === rand6 || rand8 === rand1 || rand8 === prevRand8) {
    rand8 = Math.floor(Math.random() * 10) + 1;
  }

  while (rand9 === rand8 || rand9 === rand6 || rand9 === rand1 || rand9 === prevRand9) {
    rand9 = Math.floor(Math.random() * 10) + 1;
  }

  while (rand15 === rand9 || rand15 === rand8 || rand15 === rand6 || rand15 === rand1 || rand15 === prevRand15) {
    rand15 = Math.floor(Math.random() * 10) + 1;
  }

  pic1 = "images/" + rand1 + ".jpg";
  pic6 = "images/" + rand6 + ".jpg";
  pic8 = "images/" + rand8 + ".jpg";
  pic9 = "images/" + rand9 + ".jpg";
  pic15 = "images/" + rand15 + ".jpg";

  $("#pic1").attr("src", pic1);
  $("#pic6").attr("src", pic6);
  $("#pic8").attr("src", pic8);
  $("#pic9").attr("src", pic9);
  $("#pic15").attr("src", pic15);
}, 1000);

// Navigation Bar Section
$(".menu-btn, .menu-list").hover(function() {
  $(".menu-list").addClass("slide");
  $(".feather-plus").addClass("rotate");
}, function() {
  $(".menu-list").removeClass("slide");
  $(".feather-plus").removeClass("rotate");
});

let menuBtnClick = false;
if ($(window).width() <= 1366) {
  $(".menu-btn").on("click", function() {
    if (!menuBtnClick) {
      $(".menu-list").addClass("slide");
      $(".feather-plus").addClass("rotate");
      menuBtnClick = true;
    } else {
      $(".menu-list").removeClass("slide");
      $(".feather-plus").removeClass("rotate");
      menuBtnClick = false;
    }
  });

  $(".menu-list>a").on("click", function() {
    $(".menu-list").removeClass("slide");
    $(".feather-plus").removeClass("rotate");
    menuBtnClick = false;
  });

  $(".team-list>a").on("click", function() {
    $(".menu-list").removeClass("slide");
    $(".feather-plus").removeClass("rotate");
    menuBtnClick = false;
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

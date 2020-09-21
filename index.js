// Team Section
var teamPics = ["f-1", "f-2", "f-3",
                "me-1", "me-2", "me-3", "me-4", "me-5", "me-6", "me-7",
                "mk-1", "mk-2", "mk-3", "mk-4",
                "o-1", "o-2", "o-3", "o-4", "o-5",
                "s-1", "s-2", "s-3", "s-4", "s-5"];

var rand1 = teamPics[Math.floor(Math.random() * teamPics.length)];
var rand6 = teamPics[Math.floor(Math.random() * teamPics.length)];
var rand8 = teamPics[Math.floor(Math.random() * teamPics.length)];
var rand9 = teamPics[Math.floor(Math.random() * teamPics.length)];
var rand15 = teamPics[Math.floor(Math.random() * teamPics.length)];

while (rand6 === rand1) {
  rand6 = teamPics[Math.floor(Math.random() * teamPics.length)];
}

while (rand8 === rand6 || rand8 === rand1) {
  rand8 = teamPics[Math.floor(Math.random() * teamPics.length)];
}

while (rand9 === rand8 || rand9 === rand6 || rand9 === rand1) {
  rand9 = teamPics[Math.floor(Math.random() * teamPics.length)];
}

while (rand15 === rand9 || rand15 === rand8 || rand15 === rand6 || rand15 === rand1) {
  rand15 = teamPics[Math.floor(Math.random() * teamPics.length)];
}

var pic1 = "assets/teamSection/" + rand1 + ".jpg";
var pic6 = "assets/teamSection/" + rand6 + ".jpg";
var pic8 = "assets/teamSection/" + rand8 + ".jpg";
var pic9 = "assets/teamSection/" + rand9 + ".jpg";
var pic15 = "assets/teamSection/" + rand15 + ".jpg";

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

  rand1 = teamPics[Math.floor(Math.random() * teamPics.length)];
  rand6 = teamPics[Math.floor(Math.random() * teamPics.length)];
  rand8 = teamPics[Math.floor(Math.random() * teamPics.length)];
  rand9 = teamPics[Math.floor(Math.random() * teamPics.length)];
  rand15 = teamPics[Math.floor(Math.random() * teamPics.length)];

  while (rand1 === prevRand1) {
    rand1 = teamPics[Math.floor(Math.random() * teamPics.length)];
  }

  while (rand6 === rand1 || rand6 === prevRand6) {
    rand6 = teamPics[Math.floor(Math.random() * teamPics.length)];
  }

  while (rand8 === rand6 || rand8 === rand1 || rand8 === prevRand8) {
    rand8 = teamPics[Math.floor(Math.random() * teamPics.length)];
  }

  while (rand9 === rand8 || rand9 === rand6 || rand9 === rand1 || rand9 === prevRand9) {
    rand9 = teamPics[Math.floor(Math.random() * teamPics.length)];
  }

  while (rand15 === rand9 || rand15 === rand8 || rand15 === rand6 || rand15 === rand1 || rand15 === prevRand15) {
    rand15 = teamPics[Math.floor(Math.random() * teamPics.length)];
  }

  pic1 = "assets/teamSection/" + rand1 + ".jpg";
  pic6 = "assets/teamSection/" + rand6 + ".jpg";
  pic8 = "assets/teamSection/" + rand8 + ".jpg";
  pic9 = "assets/teamSection/" + rand9 + ".jpg";
  pic15 = "assets/teamSection/" + rand15 + ".jpg";

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

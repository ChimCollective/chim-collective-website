f<!doctype html>
<?php

if(isset($_POST['email']) && $_POST['email']!= ''){
  if(filter_var($_POST['email'], FILTER_VALIDATE_EMAIL){
  print_r($_POST);
  $userName = $_POST['name'];
  $userEmail = $_POST['email'];
  $Phonenumber = $_POST['Phone'];
  $message = $_POST['message'];

  $to ="sungthongngamkik@gmail.com";
  $body = "";

  $body .= "From: ".$userName. "\r\n";
  $body .= "Email: ".$userEmail. "\r\n";
  $body .= "Message: ".$message. "\r\n";

  mail($to,$message,$body);

  }
}

?>

<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
  <meta name="generator" content="Jekyll v4.1.1">
  <title>Chim Collective</title>

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Quicksand:wght@300;400;500&display=swap" rel="stylesheet">

  <!-- Fontawesome -->
  <script defer src="https://use.fontawesome.com/releases/v5.0.7/js/all.js"></script>

  <!-- Bootstrap core CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
  <link rel="stylesheet" href="css/style.css">

  <!-- AOS CSS -->
  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
</head>

<body class="container-fluid">

  <!-- Header Bar -->
  <nav class="navbar navbar-custom-color pt-5 pb-3 fixed-top">
    <a class="navbar-brand head-font" href="#home"><strong>Chim Collective</strong></a>
    <div class="d-flex justify-content-end">
      <button class="hire-btn btn mr-3 head-font" type="button" name="button">HIRE US</button>
      <button class="navbar-toggler btn mr-5" type="button" data-toggle="collapse" data-target="#navbar-menus" aria-controls="navbar-menus" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
      </button>
      <div class="contact-info head-font">
        <p>Email: email@chim.com</p>
        <p>Phone: +1 987 654-3210</p>
      </div>
    </div>

    <div class="collapse navbar-collapse" id="navbar-menus">
      <ul class="navbar-nav mr-auto head-font" id="navbar-menu-list">
        <li class="nav-item active"><a class="nav-link home-a" href="#home">HOME</a></li>
        <li class="nav-item active"><a class="nav-link about-a" href="#about">ABOUT</a></li>
        <li class="nav-item active"><a class="nav-link works-a" href="#works">WORKS</a></li>
        <li class="nav-item active"><a class="nav-link team-a" href="#team">TEAM</a></li>
        <li class="nav-item active"><a class="nav-link contact-a" href="#contact">CONTACT</a></li>
      </ul>
    </div>
  </nav>

  <!-- Home -->
  <section id="home">
    <div class="g">
      <div class="container home-body">
        <h1 class="heading-big head-font">WE ARE</h1>
        <h1 class="animate-career-heading head-font">
          <span>INNOVATORS</span>
          <span>DEVELOPERS</span>
          <span>PRODUCERS</span>
          <span>PROGRAMMERS</span>
          <span>CREATORS</span>
        </h1>
      </div>
    </div>

  </section>

  <!-- About -->
  <section id="about">
    <div class="row">
      <div class="col">
        <h1 class="text-center heading-big head-font">About Us</h1>
        <hr class="heading-hr">
      </div>
    </div>

    <div class="mission-box row">
      <div class="mission-head-box col-5">
        <h3 class="mission-head head-font">Our Mission</h3>
      </div>
      <div class="mission-desc-box col-7">
        <label>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</label>
      </div>
    </div>

    <div class="wedo-box row">
      <div class="wedo-section col-5">
        <h3 class="wedo-head head-font">What Can We Do</h3>
        <div class="wedo-desc-box">
          <label>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</label>
        </div>
        <button class="hire-btn btn btn-lg mr-3 head-font" href="#contact" type="button" name="button">HIRE US</button>
      </div>

      <div class="about-bullet-container col-7">

        <!-- branding -->
        <div class="bullet-box">
          <div class="row">
            <div class="col-1.5">
              <button class="btn btn-xl" data-toggle="collapse" href="#branding-desc" role="button" aria-expanded="false" aria-controls="branding-desc">
                <i class="fas fa-plus"></i>
              </button>
            </div>
            <div class="col">
              <h3 class="about-bullet-head head-font">Branding & Identity</h3>
            </div>
          </div>

          <div class="collapse" id="branding-desc">
            <div class="card collapse-desc-box">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
            </div>
          </div>
        </div>

        <!-- seo -->
        <div class="bullet-box">
          <div class="row">
            <div class="col-1.5">
              <button class="btn btn-xl" data-toggle="collapse" href="#seo-desc" role="button" aria-expanded="false" aria-controls="seo-desc">
                <i class="fas fa-plus"></i>
              </button>
            </div>
            <div class="col">
              <h3 class="about-bullet-head head-font">SEO & Marketing</h3>
            </div>
          </div>

          <div class="collapse" id="seo-desc">
            <div class="card collapse-desc-box">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
            </div>
          </div>
        </div>

        <!-- ui/ux -->
        <div class="bullet-box">
          <div class="row">
            <div class="col-1.5">
              <button class="btn btn-xl" data-toggle="collapse" href="#uiux-desc" role="button" aria-expanded="false" aria-controls="uiux-desc">
                <i class="fas fa-plus"></i>
              </button>
            </div>
            <div class="col">
              <h3 class="about-bullet-head head-font">UI & UX Design</h3>
            </div>
          </div>

          <div class="collapse" id="uiux-desc">
            <div class="card collapse-desc-box">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
            </div>
          </div>
        </div>

        <!-- full support -->
        <div class="bullet-box">
          <div class="row">
            <div class="col-1.5">
              <button class="btn btn-xl" data-toggle="collapse" href="#fusup-desc" role="button" aria-expanded="false" aria-controls="fusup-desc">
                <i class="fas fa-plus"></i>
              </button>
            </div>
            <div class="col">
              <h3 class="about-bullet-head head-font">Full Support</h3>
            </div>
          </div>

          <div class="collapse" id="fusup-desc">
            <div class="card collapse-desc-box">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- Partner -->
  <section id="partner">
    <div class="row">
      <div class="col">
        <h1 class="text-center heading-big head-font">Our Partner</h1>
        <hr class="heading-hr">
      </div>
    </div>

    <div class="row">
      <div class="col-lg-3 col-md-6">
        <div class="partner-logo">
          <img src="https://static.dezeen.com/uploads/2019/04/ikea-logo-new-sq-1.jpg" alt="">
        </div>
      </div>

      <div class="col-lg-3 col-md-6">
        <div class="partner-logo">
          <img src="https://static.dezeen.com/uploads/2019/04/ikea-logo-new-sq-1.jpg" alt="">
        </div>
      </div>

      <div class="col-lg-3 col-md-6">
        <div class="partner-logo">
          <img src="https://static.dezeen.com/uploads/2019/04/ikea-logo-new-sq-1.jpg" alt="">
        </div>
      </div>

      <div class="col-lg-3 col-md-6">
        <div class="partner-logo">
          <img src="https://static.dezeen.com/uploads/2019/04/ikea-logo-new-sq-1.jpg" alt="">
        </div>
      </div>
    </div>
  </section>

  <!-- Works -->
  <section id="works">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <h1 class="heading-big head-font">Our Work</h1>
          <hr class="heading-hr">
        </div>
      </div>
      <main class="container1">
        <section class="card">
          <img class="works1" src="https://cdn.aarp.net/content/dam/aarp/work/job-search/2020/05/1140-655-sba-loan-jobs.imgcache.rev7b9bde413aca6aa0a942cb94abb341aa.jpg" alt="Card image cap">
          <div>
            <h3>Web Design</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. porro adipisci quisquam!,
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam delectus totam explicabo iusto,
              voluptas dicta ducimus similique consequatur
              enim facilis quasi perspiciatis quae error est consectetur cum id ipsam nam.
              Ipsam recusandae officia facilis ullam. </p>
              <a href="#" class="works1-btn">Hire Now</a>
          </div>
        </section>

        <section class="card" data-aos="fade-left">
          <img class="works1" src="https://cdn.aarp.net/content/dam/aarp/work/job-search/2020/05/1140-655-sba-loan-jobs.imgcache.rev7b9bde413aca6aa0a942cb94abb341aa.jpg" alt="Card image cap">
          <div>
            <h3>Web Design</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. porro adipisci quisquam!,
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam delectus totam explicabo iusto,
              voluptas dicta ducimus similique consequatur
              enim facilis quasi perspiciatis quae error est consectetur cum id ipsam nam.
              Ipsam recusandae officia facilis ullam. </p>
              <a href="#" class="works1-btn">Hire Now</a>
          </div>
        </section>

        <section class="card" data-aos="fade-right">
          <img class="works1" src="https://cdn.aarp.net/content/dam/aarp/work/job-search/2020/05/1140-655-sba-loan-jobs.imgcache.rev7b9bde413aca6aa0a942cb94abb341aa.jpg" alt="Card image cap">
          <div>
            <h3>Web Design</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. porro adipisci quisquam!,
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam delectus totam explicabo iusto,
              voluptas dicta ducimus similique consequatur
              enim facilis quasi perspiciatis quae error est consectetur cum id ipsam nam.
              Ipsam recusandae officia facilis ullam. </p>
              <a href="#" class="works1-btn">Hire Now</a>
          </div>
        </section>

        <section class="card" data-aos="fade-left">
          <img class="works1"src="https://cdn.aarp.net/content/dam/aarp/work/job-search/2020/05/1140-655-sba-loan-jobs.imgcache.rev7b9bde413aca6aa0a942cb94abb341aa.jpg" alt="Card image cap">
          <div>
            <h3>Web Design</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. porro adipisci quisquam!,
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam delectus totam explicabo iusto,
              voluptas dicta ducimus similique consequatur
              enim facilis quasi perspiciatis quae error est consectetur cum id ipsam nam.
              Ipsam recusandae officia facilis ullam. </p>
              <a href="#" class="works1-btn">Hire Now</a>
          </div>
        </section>
            </main>
    </div>
  </section>

    <!-- Team -->
  <section class="text-center" id="team">
    <div class="row">
      <div class="col">
        <h1 class="text-center heading-big head-font">Meet Our Team</h1>
        <hr class="heading-hr">
      </div>
    </div>

    <div class="row mt-5">
      <div class="col">
        <div class="zoom" style="background: red">
          <div class="zoom-img"></div>
        </div>
        <div class="team-desc mt-2">
          <!-- overlay -->
          <h4 class="team-name head-font">Jay Chorpaka</h4>
          <h5 class="team-position">Creative Producer</h5>
        </div>
      </div>

      <div class="col">
        <div class="zoom" style="background: red">
          <div class="zoom-img"></div>
        </div>
        <div class="team-desc mt-2">
          <!-- overlay -->
          <h4 class="team-name head-font">Jay Chorpaka</h4>
          <h5 class="team-position">Creative Producer</h5>
        </div>
      </div>

      <div class="col">
        <div class="zoom" style="background: red">
          <div class="zoom-img"></div>
        </div>
        <div class="team-desc mt-2">
          <!-- overlay -->
          <h4 class="team-name head-font">Jay Chorpaka</h4>
          <h5 class="team-position">Creative Producer</h5>
        </div>
      </div>

      <div class="col">
        <div class="zoom" style="background: red">
          <div class="zoom-img"></div>
        </div>
        <div class="team-desc mt-2">
          <!-- overlay -->
          <h4 class="team-name head-font">Jay Chorpaka</h4>
          <h5 class="team-position">Creative Producer</h5>
        </div>
      </div>

      <div class="col">
        <div class="zoom" style="background: red">
          <div class="zoom-img"></div>
        </div>
        <div class="team-desc mt-2">
          <!-- overlay -->
          <h4 class="team-name head-font">Jay Chorpaka</h4>
          <h5 class="team-position">Creative Producer</h5>
        </div>
      </div>

    </div>
    <!--View All-->
    <div class="view-all mt-3">
      <a href="#">View All >></a>
    </div>
  </section>

    <!-- Contact -->
  <section class="row" id="contact">
    <div class="column left">
      <div class="row">
      <div class="col-md-_4">
        <form class="block form-horizontal">
          <h1 class="block-header head-font"> Let's Get In Touch</h1>
          <hr class="head-hr">
            <div class="col-sm-4">
              <p>Magazine advertising is the most versatile,but this is solely dependent on the size of your ad and how many other ads.</p>
            </div>
            <div class="col-md-4">
            </div>
      <div class="column right">
        <div class="container">
          <form action="index.php" method="POST" class="form">

            <div class="form-group">
                <div class="col-sm-6">
                  <input type="name" class="form-control" id="name" placeholder="Your name">
                </div>
            </div>

          <div class="form-group">
              <div class="col-sm-6">
                <input type="email" class="form-control" id="email" placeholder="Email address">
              </div>
          </div>

          <div class="form-group">
            <div class="col-sm-6">
              <input type="phonenumber" class="form-control" id="Phone" placeholder="Contact Phone">
            </div>
          </div>

          <div class="form-group">
            <div class="col-sm-6">
              <textarea id="message" class="form-control" rows="3" placeholder="Describe your project..."></textarea>
            </div>
          </div>
          <button class="submit-btn head-font">SUBMIT MESSAGE</button>

        </form>
      </div>
      </div>
      </div>
    </div>
  </div>
  </section>
<!--link-->
<section class="row" id="link">
<div class="row">
  <div class="column1">
      <p>Home&nbsp;&nbsp;&nbsp; About&nbsp;&nbsp;&nbsp;  Work&nbsp;&nbsp;&nbsp;  Team &nbsp;&nbsp;&nbsp; Contact</p>
  </div>
  <div class="column2"></div>
    <p>Email:
  <br>Phone:
  <br>Address:</p>
</div>
</section>
  <!-- jQuery -->
  <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>

  <!-- Our Javascript -->
  <script src="index.js" charset="utf-8"></script>

  <!-- Bootstrap Scripts -->
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>

  <!-- AOS Scripts -->
  <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
  <script>
    AOS.init({
      offset: 400,
      duration: 1000
    });
  </script>



</body>

</html>

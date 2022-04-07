import React from 'react'
// CSS IMPORTS
import './assets/css/animations.css'
import './assets/css/bootstrap.min.css'
import './assets/css/font-awesome5.css'
import './assets/css/main.css'
import './assets/css/icomoon.css'
import './assets/css/shop.css'

// FONTS IMPORTS
import './assets/fonts/icomoon/icomoon5691.eot'
import './assets/fonts/icomoon/icomoon5691.svg'
import './assets/fonts/icomoon/icomoon5691.ttf'
import './assets/fonts/icomoon/icomoon5691.woff'
// IMAGES IMPORTS
import './assets/images/slide01.jpg'
import './assets/images/slide02.jpg'
import './assets/images/slide03.jpg'
import './assets/images/slide04.jpg'
import './assets/images/chess.png'
import './assets/images/chess2.png'
import './assets/images/img1.jpg'
import './assets/images/line.png'



function Ui() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<!DOCTYPE html>
    <html>
<head>
<title>Near Stx Chess Game |Home</title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="description" content="">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

<link rel="stylesheet" href="css/bootstrap.min.css">
<link rel="stylesheet" href="css/animations.css">
<link rel="stylesheet" href="css/font-awesome5.css">
<link rel="stylesheet" href="css/icomoon.css">
<link rel="stylesheet" href="css/main.css" class="color-switcher-link">
<link rel="stylesheet" href="css/shop.css" class="color-switcher-link">



</head>

<body>

<!-- wrappers for visual page editor and boxed version of template -->
<div id="canvas">
<div id="box_wrapper">

  <div class="header_absolute ">
    <!-- header with two Bootstrap columns - left for logo and right for navigation -->
    <header class="page_header justify-nav-center s-overlay s-py-10 ">

      <div class="container-fluid">

      </div>
    </header>
  </div>
 
  <!-- Start Section About -->
  <section class="about_us ls s-overlay mobile-overlay s-py-xl-270 s-py-lg-130 s-py-md-90 s-py-60 c-gutter-0 container-px-xl-0">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-lg-6 text-center text-sm-left">
          <div class="special-column-center d-block d-sm-flex">
            <div class="special-class">
              <p class="special-heading text-center big thin color-main">
                <span>01</span>
              </p>
              <p class="special-heading text-center text-uppercase sub-title2 color-darkgrey">
                <span>
                  about us
                </span>
              </p>
              <div class="fw-divider-space divider-30 divider-lg-40"></div>
              <a href="/auth" class="btn btn-maincolor medium-btn">Start now</a>
              <div class="fw-divider-space divider-30 divider-sm-0"></div>
            </div>

            <div class="text-block with-left-space">
              <p class="excerpt">
                Kids Chess Club is a non-profit Company founded.
              </p>
              <p>
                Our goal is to teach children in grades K-12 abstract concepts of planning, analysis and
                strategy through the game of chess.
              </p>
              <p>
                Kids will be excited to understand and amazed by the positive experience that chess offers.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-6">

        </div>
      </div>
    </div>
  </section>
  <!-- End Section About -->

  <!-- Start Section Partners -->
  <section class="ls ms s-py-lg-100 s-py-md-90 s-py-60">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="owl-carousel" data-center="false" data-autoplay="true" data-margin="20" data-loop="true" data-responsive-lg="8" data-responsive-md="4" data-responsive-sm="3" data-responsive-xs="2">
            <a class="text-center d-block" href="#">
              <img src="images/partners/01.png" alt="img">
            </a>
            <a class="text-center d-block" href="#">
              <img src="images/partners/02.png" alt="img">
            </a>
            <a class="text-center d-block" href="#">
              <img src="images/partners/03.png" alt="img">
            </a>
            <a class="text-center d-block" href="#">
              <img src="images/partners/04.png" alt="img">
            </a>
            <a class="text-center d-block" href="#">
              <img src="images/partners/05.png" alt="img">
            </a>
            <a class="text-center d-block" href="#">
              <img src="images/partners/06.png" alt="img">
            </a>
            <a class="text-center d-block" href="#">
              <img src="images/partners/07.png" alt="img">
            </a>
            <a class="text-center d-block" href="#">
              <img src="images/partners/08.png" alt="img">
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Section Partners -->


  <footer class="page_footer footer-1 text-center text-sm-left  ds s-pt-60 s-pb-30 c-mb-30 s-bordertop">
    <div class="container-fluid">
      <div class="row justify-content-center align-items-center">

        <div class="col-xl-2 col-12 text-xl-left text-center  animate" data-animation="fadeInUp">
          <a href="index.html" class="logo">
            <img src={logo} alt="">
          </a>
        </div>

        <div class="col-xl-2 col-12 text-center text-xl-right animate" data-animation="fadeInUp">
          <span class="social-icons">
            <a href="#" class="fab fab fa-facebook-f @@iconClass" title="facebook"></a>
            <a href="#" class="fab fa-telegram-plane @@iconClass" title="telegram"></a>
            <a href="#" class="fab fa-linkedin-in @@iconClass" title="linkedin"></a>
            <a href="#" class="fab fa-instagram @@iconClass" title="instagram"></a>
          </span>
        </div>

      </div>
    </div>
  </footer>


  <section class="page_copyright copyright1 ds s-pt-70 s-pb-60 s-bordertop">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-12">
          <div class="widget widget_mailchimp">


            <form class="signup" action="https://html.modernwebtemplates.com/">

              <i class="far fa-envelope"></i>
              <input name="email" type="email" class="form-control mailchimp_email" placeholder="Email address">

              <button type="submit" class="search-submit">
                <span class="screen-reader-text">
                  Subscribe
                </span>
              </button>
              <div class="response"></div>
            </form>

          </div>
        </div>
        <div class="col-md-12 text-center">

          <p>&copy; Copyright <span class="copyright_year">2019</span> All Rights Reserved</p>
        </div>

      </div>
    </div>
  </section>


</div><!-- eof #box_wrapper -->
</div><!-- eof #canvas -->


<script src="js/compressed.js"></script>
<script src="js/main.js"></script>


</body>


<!-- Mirrored from html.modernwebtemplates.com/chesstar/ by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 25 Mar 2022 01:31:51 GMT -->
</html>` }} />
  )
}

export default Ui
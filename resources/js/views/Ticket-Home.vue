
<template>
    <div>
        <header id="header" class="header d-flex align-items-center fixed-top">
            <div class="container-fluid container-xl position-relative d-flex align-items-center">

                <a class="logo d-flex align-items-center me-auto">
                <router-link to="/home" style="color: #fff !important;">
                    <h1 class="sitename">Ticketing Management System</h1>
                </router-link>
            </a>

            <nav id="navmenu" class="navmenu">
                <ul>
                    <li>
                        <a class="active">
                            <router-link to="/home" style="color: #fff !important;">
                                Home
                            </router-link>
                            <br>
                        </a>
                    </li>
                    <li>
                        <a >
                            <router-link to="/request" style="color: #fff !important;">
                                Create
                            </router-link>
                        </a>
                    </li>
                </ul>
                <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
            </nav>

            <a class="btn-getstarted">

                <router-link to="/followup" style="color: #fff !important;">
                    Track
                </router-link>

            </a>

            </div>
        </header>

        <main class="main">

            <!-- Hero Section -->
            <section id="hero" class="hero section dark-background">

                <img src="logis/assets/img/world-dotted-map.png" alt="" class="hero-bg" data-aos="fade-in">

                <div class="container">
                    <div class="row gy-4 d-flex justify-content-between">
                    <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                        <h2 data-aos="fade-up">Need help? </h2>
                        <p data-aos="fade-up" data-aos-delay="100">Submit your request to our support teams</p>


                        <b-button variant="primary" style="padding: 20px;">
                            <router-link to="/request" style="color: #fff !important;">
                                Submit a Request
                            </router-link>
                        </b-button>


                        <div class="row gy-4" data-aos="fade-up" data-aos-delay="300">

                        <!--
                        <div class="col-lg-3 col-6">
                            <div class="stats-item text-center w-100 h-100">
                            <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="0" class="purecounter">232</span>
                            <p>Clients</p>
                            </div>
                        </div>

                        <div class="col-lg-3 col-6">
                            <div class="stats-item text-center w-100 h-100">
                            <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="0" class="purecounter">521</span>
                            <p>Projects</p>
                            </div>
                        </div>

                        <div class="col-lg-3 col-6">
                            <div class="stats-item text-center w-100 h-100">
                            <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="0" class="purecounter">1453</span>
                            <p>Support</p>
                            </div>
                        </div>

                        <div class="col-lg-3 col-6">
                            <div class="stats-item text-center w-100 h-100">
                            <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="0" class="purecounter">32</span>
                            <p>Workers</p>
                            </div>
                        </div> -->

                        </div>

                    </div>

                    <div class="col-lg-5 order-1 order-lg-2 hero-img" data-aos="zoom-out">
                        <img src="logis/assets/img/hero-img.svg" class="img-fluid mb-3 mb-lg-0" alt="">
                    </div>

                    </div>
                </div>

            </section>

            <!-- Featured Services Section -->
            <section id="featured-services" class="featured-services section">

                <div class="container">

                    <div class="row gy-4">

                        <div class="col-lg-12 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="100">
                            <div class="icon flex-shrink-0"><i class="fa-solid fa-calendar"></i></div>
                            <div>
                            <h4 class="title">Announcements/Events</h4>
                            <p class="description">No Announcements and/or Upcoming events</p>
                            <!-- <a href="#" class="readmore stretched-link"><span>Learn More</span><i class="bi bi-arrow-right"></i></a> -->
                            </div>
                        </div>


                    </div>

                    <!-- <div class="row gy-4">

                        <div class="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="100">
                            <div class="icon flex-shrink-0"><i class="fa-solid fa-cart-flatbed"></i></div>
                            <div>
                            <h4 class="title">Lorem Ipsum</h4>
                            <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                            <a href="#" class="readmore stretched-link"><span>Learn More</span><i class="bi bi-arrow-right"></i></a>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="200">
                            <div class="icon flex-shrink-0"><i class="fa-solid fa-truck"></i></div>
                            <div>
                            <h4 class="title">Dolor Sitema</h4>
                            <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                            <a href="#" class="readmore stretched-link"><span>Learn More</span><i class="bi bi-arrow-right"></i></a>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="300">
                            <div class="icon flex-shrink-0"><i class="fa-solid fa-truck-ramp-box"></i></div>
                            <div>
                            <h4 class="title">Sed ut perspiciatis</h4>
                            <p class="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                            <a href="#" class="readmore stretched-link"><span>Learn More</span><i class="bi bi-arrow-right"></i></a>
                            </div>
                        </div>

                    </div> -->

                </div>

            </section>

            <!-- Contact Us Section -->
            <section id="call-to-action" class="call-to-action section dark-background">
                <img src="logis/assets/img/12.jpg" alt="">

                <div class="container">
                    <div class="row justify-content-center" data-aos="zoom-in" data-aos-delay="100">
                    <div class="col-xl-10">
                        <div class="text-center">
                        <h3>Contact Us</h3>
                        <p>For concerns and/or feedback, you can email us at itu@stii.dost.gov.ph</p>

                        </div>
                    </div>
                    </div>
                </div>
            </section>

            <!-- Faq Section -->
            <!-- <section id="faq" class="faq section">
                <div class="container section-title" data-aos="fade-up">
                    <span>Frequently Asked Questions</span>
                    <h2>Frequently Asked Questions</h2>
                    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                </div>

                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-10">
                            <div class="faq-container">
                                <div class="faq-item faq-active" data-aos="fade-up" data-aos-delay="200">
                                    <i class="faq-icon bi bi-question-circle"></i>
                                    <h3>Non consectetur a erat nam at lectus urna duis?</h3>
                                    <div class="faq-content">
                                    <p>Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.</p>
                                    </div>
                                    <i class="faq-toggle bi bi-chevron-right"></i>
                                </div>
                                <div class="faq-item" data-aos="fade-up" data-aos-delay="300">
                                    <i class="faq-icon bi bi-question-circle"></i>
                                    <h3>Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?</h3>
                                    <div class="faq-content">
                                    <p>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.</p>
                                    </div>
                                    <i class="faq-toggle bi bi-chevron-right"></i>
                                </div>
                                <div class="faq-item" data-aos="fade-up" data-aos-delay="400">
                                    <i class="faq-icon bi bi-question-circle"></i>
                                    <h3>Dolor sit amet consectetur adipiscing elit pellentesque?</h3>
                                    <div class="faq-content">
                                    <p>Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis</p>
                                    </div>
                                    <i class="faq-toggle bi bi-chevron-right"></i>
                                </div>
                                <div class="faq-item" data-aos="fade-up" data-aos-delay="500">
                                    <i class="faq-icon bi bi-question-circle"></i>
                                    <h3>Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?</h3>
                                    <div class="faq-content">
                                    <p>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.</p>
                                    </div>
                                    <i class="faq-toggle bi bi-chevron-right"></i>
                                </div>
                                <div class="faq-item" data-aos="fade-up" data-aos-delay="600">
                                    <i class="faq-icon bi bi-question-circle"></i>
                                    <h3>Tempus quam pellentesque nec nam aliquam sem et tortor consequat?</h3>
                                    <div class="faq-content">
                                    <p>Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in</p>
                                    </div>
                                    <i class="faq-toggle bi bi-chevron-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> -->


            <!-- Testimonials Section -->
            <!-- <section id="testimonials" class="testimonials section dark-background">
                <img src="logis/assets/img/testimonials-bg.jpg" class="testimonials-bg" alt="">

                <div class="container" data-aos="fade-up" data-aos-delay="100">
                    <div class="swiper init-swiper">
                    <script type="application/json" class="swiper-config">
                        {
                        "loop": true,
                        "speed": 600,
                        "autoplay": {
                            "delay": 5000
                        },
                        "slidesPerView": "auto",
                        "pagination": {
                            "el": ".swiper-pagination",
                            "type": "bullets",
                            "clickable": true
                        }
                        }
                    </script>
                    <div class="swiper-wrapper">

                        <div class="swiper-slide">
                        <div class="testimonial-item">
                            <img src="logis/assets/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt="">
                            <h3>Saul Goodman</h3>
                            <h4>Ceo &amp; Founder</h4>
                            <div class="stars">
                            <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                            </div>
                            <p>
                            <i class="bi bi-quote quote-icon-left"></i>
                            <span>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</span>
                            <i class="bi bi-quote quote-icon-right"></i>
                            </p>
                        </div>
                        </div>

                        <div class="swiper-slide">
                        <div class="testimonial-item">
                            <img src="logis/assets/img/testimonials/testimonials-2.jpg" class="testimonial-img" alt="">
                            <h3>Sara Wilsson</h3>
                            <h4>Designer</h4>
                            <div class="stars">
                            <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                            </div>
                            <p>
                            <i class="bi bi-quote quote-icon-left"></i>
                            <span>Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.</span>
                            <i class="bi bi-quote quote-icon-right"></i>
                            </p>
                        </div>
                        </div>

                        <div class="swiper-slide">
                        <div class="testimonial-item">
                            <img src="logis/assets/img/testimonials/testimonials-3.jpg" class="testimonial-img" alt="">
                            <h3>Jena Karlis</h3>
                            <h4>Store Owner</h4>
                            <div class="stars">
                            <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                            </div>
                            <p>
                            <i class="bi bi-quote quote-icon-left"></i>
                            <span>Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.</span>
                            <i class="bi bi-quote quote-icon-right"></i>
                            </p>
                        </div>
                        </div>

                        <div class="swiper-slide">
                        <div class="testimonial-item">
                            <img src="logis/assets/img/testimonials/testimonials-4.jpg" class="testimonial-img" alt="">
                            <h3>Matt Brandon</h3>
                            <h4>Freelancer</h4>
                            <div class="stars">
                            <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                            </div>
                            <p>
                            <i class="bi bi-quote quote-icon-left"></i>
                            <span>Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.</span>
                            <i class="bi bi-quote quote-icon-right"></i>
                            </p>
                        </div>
                        </div>

                        <div class="swiper-slide">
                        <div class="testimonial-item">
                            <img src="logis/assets/img/testimonials/testimonials-5.jpg" class="testimonial-img" alt="">
                            <h3>John Larson</h3>
                            <h4>Entrepreneur</h4>
                            <div class="stars">
                            <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                            </div>
                            <p>
                            <i class="bi bi-quote quote-icon-left"></i>
                            <span>Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.</span>
                            <i class="bi bi-quote quote-icon-right"></i>
                            </p>
                        </div>
                        </div>

                    </div>
                    <div class="swiper-pagination"></div>
                    </div>
                </div>
            </section> -->




        </main>


        <footer id="footer" class="footer dark-background">

            <div class="container footer-top">
                <div class="row gy-4">
                    <div class="col-lg-5 col-md-12 footer-about">
                        <a href="index.html" class="logo d-flex align-items-center">
                            <span class="sitename">Ticketing Management System</span>
                        </a>
                            <p>
                                DOST-STII Building
                                <br />
                                DOST Compound, Gen. Santos Avenue
                                <br />
                                Bicutan 1631, Taguig, Metro Manila
                            </p>
                        <!-- <div class="social-links d-flex mt-4">
                            <a href="https://www.facebook.com/dost.stii" ><i class="bi bi-facebook"></i></a>
                        </div> -->
                    </div>

                    <div class="col-lg-6 col-12 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                            <li><a href="https://stii.dost.gov.ph/">DOST-STII Website</a></li>
                            <li><a href="https://www.facebook.com/dost.stii">DOST-STII Facebook</a></li>
                        </ul>
                    </div>

                    <!-- <div class="col-lg-2 col-6 footer-links">
                        <h4>Our Services</h4>
                        <ul>
                            <li><a href="#">Web Design</a></li>
                            <li><a href="#">Web Development</a></li>
                            <li><a href="#">Product Management</a></li>
                            <li><a href="#">Marketing</a></li>
                            <li><a href="#">Graphic Design</a></li>
                        </ul>
                    </div>

                    <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                        <h4>Contact Us</h4>
                        <p>A108 Adam Street</p>
                        <p>New York, NY 535022</p>
                        <p>United States</p>
                        <p class="mt-4"><strong>Phone:</strong> <span>+1 5589 55488 55</span></p>
                        <p><strong>Email:</strong> <span>info@example.com</span></p>
                    </div> -->

                </div>
            </div>

            <div class="container copyright text-center mt-4">
                <p>© <span>Copyright</span> <strong class="px-1 sitename">DOST-STII</strong> <span>All Rights Reserved</span></p>
                <div class="credits">


                </div>
            </div>

        </footer>





    </div>
  </template>


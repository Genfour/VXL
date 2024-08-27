const Service = () => {
    return (
        <>

        {/* <!-- Navbar Start --> */}
        <nav style={{backgroundColor: '#422f2f'}} class="navbar navbar-expand-lg navbar-light fixed-top shadow py-lg-0 px-4 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
                <a href="/" class="navbar-brand d-block d-lg-none">
                    <h1 class="text-primary fw-bold m-0">VXL</h1>
                </a>
                <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-between py-4 py-lg-0" id="navbarCollapse">
                    <div class="navbar-nav ms-auto py-0">
                        <a href="/" class="nav-item nav-link" style={{color: '#fff'}}>Home</a>
                        <a href="/" class="nav-item nav-link" style={{color: '#fff'}}>About</a>
                        {/* <a href="#skill" class="nav-item nav-link">Skills</a> */}
                        <a href="/service" class="nav-item nav-link" style={{color: '#fff'}}>Services</a>
                    </div>
                    <a href="/" class="navbar-brand bg-secondary py-3 px-4 mx-3 d-none d-lg-block">
                        <h1 class="text-primary fw-bold m-0">VXL</h1>
                    </a>
                    <div class="navbar-nav me-auto py-0">
                        <a href="/" class="nav-item nav-link" style={{color: '#fff'}}>Projects</a>
                        <a href="/" class="nav-item nav-link" style={{color: '#fff'}}>Team</a>
                        {/* <a href="#testimonial" class="nav-item nav-link">Testimonial</a> */}
                        <a href="/" class="nav-item nav-link" style={{color: '#fff'}}>Contact</a>
                    </div>
                </div>
            </nav>
            {/* <!-- Navbar End --> */}

            {/* <!-- Service Start --> */}
            <div class="container-fluid bg-light my-5 py-6" id="service">
                <div class="container">
                    <div class="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="col-lg-6">
                            <h1 class="display-5 mb-0">Our Services</h1>
                        </div>
                        <div class="col-lg-6 text-lg-end">
                            <a class="btn btn-primary py-3 px-5" href="">Hire Us</a>
                        </div>
                    </div>
                    <div class="row g-4">
                        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                                <div class="bg-icon flex-shrink-0 mb-3">
                                    <i class="fa fa-crop-alt fa-2x text-dark"></i>
                                </div>
                                <div class="ms-sm-4">
                                    <h4 class="mb-3">Study Counselling</h4>
                                    <h6 class="mb-3">Start from <span class="text-primary">$199</span></h6>
                                    <span>Stet lorem dolor diam amet vero eos. No stet est diam amet diam ipsum. Clita dolor duo clita sit sed sit dolor eos.</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div class="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                                <div class="bg-icon flex-shrink-0 mb-3">
                                    <i class="fa fa-code-branch fa-2x text-dark"></i>
                                </div>
                                <div class="ms-sm-4">
                                    <h4 class="mb-3">Visa Assistance</h4>
                                    <h6 class="mb-3">Start from <span class="text-primary">$199</span></h6>
                                    <span>Stet lorem dolor diam amet vero eos. No stet est diam amet diam ipsum. Clita dolor duo clita sit sed sit dolor eos.</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                                <div class="bg-icon flex-shrink-0 mb-3">
                                    <i class="fa fa-code fa-2x text-dark"></i>
                                </div>
                                <div class="ms-sm-4">
                                    <h4 class="mb-3">Skilled Migration</h4>
                                    <h6 class="mb-3">Start from <span class="text-primary">$199</span></h6>
                                    <span>Stet lorem dolor diam amet vero eos. No stet est diam amet diam ipsum. Clita dolor duo clita sit sed sit dolor eos.</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div class="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                                <div class="bg-icon flex-shrink-0 mb-3">
                                    <i class="fa fa-laptop-code fa-2x text-dark"></i>
                                </div>
                                <div class="ms-sm-4">
                                    <h4 class="mb-3">Career Counselling</h4>
                                    <h6 class="mb-3">Start from <span class="text-primary">$199</span></h6>
                                    <span>Stet lorem dolor diam amet vero eos. No stet est diam amet diam ipsum. Clita dolor duo clita sit sed sit dolor eos.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Service End --> */}

                        {/* <!-- About Start --> */}
                        <div class="container-xxl py-6" id="about">
                <div class="container">
                    <div class="row g-5">
                        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="d-flex align-items-center mb-5">
                                <div class="years flex-shrink-0 text-center me-4">
                                    <h1 class="display-1 mb-0">15</h1>
                                    <h5 class="mb-0">Years</h5>
                                </div>
                                <h3 class="lh-base mb-0">Stet no et lorem dolor et diam, amet duo ut dolore vero eos.</h3>
                            </div>
                            <p class="mb-4">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos.</p>
                            <p class="mb-3"><i class="far fa-check-circle text-primary me-3"></i>Stet no et lorem dolor</p>
                            <p class="mb-3"><i class="far fa-check-circle text-primary me-3"></i>Stet no et lorem dolor</p>
                            <p class="mb-3"><i class="far fa-check-circle text-primary me-3"></i>Stet no et lorem dolor</p>
                            <a class="btn btn-primary py-3 px-5 mt-3" href="">Read More</a>
                        </div>
                        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div class="row g-3 mb-4">
                                <div class="col-sm-6">
                                    <img class="img-fluid rounded" src="img/about-1.jpg" alt="" />
                                </div>
                                <div class="col-sm-6">
                                    <img class="img-fluid rounded" src="img/about-2.jpg" alt="" />
                                </div>
                            </div>
                            <div class="d-flex align-items-center mb-3">
                                <h5 class="border-end pe-3 me-3 mb-0">Happy Clients</h5>
                                <h2 class="text-primary fw-bold mb-0" data-toggle="counter-up">1234</h2>
                            </div>
                            <p class="mb-4">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam amet diam ipsum clita labore dolor duo clita.</p>
                            <div class="d-flex align-items-center mb-3">
                                <h5 class="border-end pe-3 me-3 mb-0">Projects Completed</h5>
                                <h2 class="text-primary fw-bold mb-0" data-toggle="counter-up">1234</h2>
                            </div>
                            <p class="mb-0">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam amet diam ipsum clita labore dolor duo clita.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- About End --> */}

              {/* <!-- Copyright Start --> */}
              <footer>
                <div class="footer-container">
                    <div class="footer-section">
                        <h3>Company</h3>
                        <p>About us</p>
                        <p>Careers</p>
                        <p>Contact</p>
                    </div>
                    <div class="footer-section">
                        <h3>Quick Links</h3>
                        <p>Home</p>
                        <p>Services</p>
                        <p>Blog</p>
                    </div>
                    <div class="footer-section">
                        <h3>Follow Us</h3>
                        <div class="d-flex pt-2">
                                <a class="btn btn-square btn-primary me-2" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-square btn-primary me-2" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-square btn-primary me-2" href=""><i class="fab fa-youtube"></i></a>
                                <a class="btn btn-square btn-primary me-2" href=""><i class="fab fa-linkedin-in"></i></a>
                            </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; 2024 VXL Education Sri Lanka, All Right Reserved. Designed By <a class="border-bottom text-secondary" href="https://loopyholdings.com">Loopy Holdings</a></p>
                </div>
            </footer>

        </>
    )
}

export default Service;
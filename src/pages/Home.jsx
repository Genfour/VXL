import React, { useState, useEffect, useRef } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "jquery";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import "owl.carousel";
import Faq from "../components/Faq";
import ConfettiComponent from "../components/ConfettiComponent";
import Confetti from "react-confetti";
import iconImage from "../images/mortarboard.png";

const clients = [
  { active: true, image: "img/255.jpg" },
  { active: false, image: "img/8104.jpg" },
  { active: false, image: "img/6515.jpg" },
];

const faqs = [
  {
    question: "Course/Career Counselling for You",
    answer:
      "At BMW Educational Consultancy Sri Lanka, we offer invaluable expertise to help you navigate the vast landscape of study options and select the most suitable universities and institutes that align with your academic and career aspirations. Our guidance is tailored to empower you with the knowledge and resources needed to make informed decisions, ensuring that your educational journey is both fulfilling and successful.",
  },
  {
    question: "Your University Applications",
    answer:
      "Our meticulous approach to document gathering and management is geared towards maximizing your application’s chances of success. We leave no stone unturned in ensuring that your materials are in impeccable order, providing you with the best shot at securing admission to your desired academic institution. Your success is our top priority.",
  },
  {
    question: "Your Visa Applications",
    answer:
      "Our team of experienced visa counselors will take the reins in lodging a robust and comprehensive visa application, and you can count on us to make the process as smooth and successful as possible. Your visa success is our goal, and we’re here to guide you every step of the way with a friendly and expert touch.",
  },
  {
    question: "IELTS/PTE for You",
    answer:
      "Come on board with us and dive into our regular workshops and convenient online classes, tailored to give your EPT test preparations a significant boost. At BMW Educational Consultancy, we provide a complete package of services, ensuring you’re well-prepared for success, from in-house IELTS/PTE training sessions to comprehensive support along every step of your journey.",
  },
  {
    question: "Your OSHC/Insurance",
    answer:
      "Navigating the complexities of student health insurance can indeed be a costly affair. However, the good news is, as a trusted partner of not just one, but two of the largest OSHC providers, we’ve got your back. This means that when you choose BMW Educational Consultancy Sri Lanka, you’re not only getting access to expert guidance but also exclusive access to the best rates and the utmost value for every hard-earned buck you invest in your health and well-being during your academic journey.",
  },
];

const items = [
  {
    text: "Applied for student subsequent entrant visa through BMW Educational Consultancy Sri Lanka. From the very beginning everything in the process was well exaplained and clarified all my doubts. Thank you Mr Ayodhya for guiding from the first stage and for encouraging me to apply. Also many thanks to Ms Surani for advising and correcting all my documents and for lodging my visa at the end. Was able to communication and to contact throughout the lodging procedure easily. Thank you so much BMW Educational Consultancy Sri Lanka.",
    name: "Hashini Loluwagodage",
  },
  {
    text: "Applied for student subsequent entrant visa through BMW Educational Consultancy Sri Lanka. From the very beginning everything in the process was well exaplained and clarified all my doubts. Thank you Mr Ayodhya for guiding from the first stage and for encouraging me to apply. Also many thanks to Ms Surani for advising and correcting all my documents and for lodging my visa at the end. Was able to communication and to contact throughout the lodging procedure easily. Thank you so much BMW Educational Consultancy Sri Lanka.",
    name: "Hashini Loluwagodage",
  },
  {
    text: "Applied for student subsequent entrant visa through BMW Educational Consultancy Sri Lanka. From the very beginning everything in the process was well exaplained and clarified all my doubts. Thank you Mr Ayodhya for guiding from the first stage and for encouraging me to apply. Also many thanks to Ms Surani for advising and correcting all my documents and for lodging my visa at the end. Was able to communication and to contact throughout the lodging procedure easily. Thank you so much BMW Educational Consultancy Sri Lanka.",
    name: "Hashini Loluwagodage",
  },
  {
    text: "Applied for student subsequent entrant visa through BMW Educational Consultancy Sri Lanka. From the very beginning everything in the process was well exaplained and clarified all my doubts. Thank you Mr Ayodhya for guiding from the first stage and for encouraging me to apply. Also many thanks to Ms Surani for advising and correcting all my documents and for lodging my visa at the end. Was able to communication and to contact throughout the lodging procedure easily. Thank you so much BMW Educational Consultancy Sri Lanka.",
    name: "Hashini Loluwagodage",
  },
  {
    text: "Applied for student subsequent entrant visa through BMW Educational Consultancy Sri Lanka. From the very beginning everything in the process was well exaplained and clarified all my doubts. Thank you Mr Ayodhya for guiding from the first stage and for encouraging me to apply. Also many thanks to Ms Surani for advising and correcting all my documents and for lodging my visa at the end. Was able to communication and to contact throughout the lodging procedure easily. Thank you so much BMW Educational Consultancy Sri Lanka.",
    name: "Hashini Loluwagodage",
  },
  {
    text: "Applied for student subsequent entrant visa through BMW Educational Consultancy Sri Lanka. From the very beginning everything in the process was well exaplained and clarified all my doubts. Thank you Mr Ayodhya for guiding from the first stage and for encouraging me to apply. Also many thanks to Ms Surani for advising and correcting all my documents and for lodging my visa at the end. Was able to communication and to contact throughout the lodging procedure easily. Thank you so much BMW Educational Consultancy Sri Lanka.",
    name: "Hashini Loluwagodage",
  },
];

const Home = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const icon = new Image();
  icon.src = iconImage;
  const [loading, setLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const interval = 3000;
  const [isSliding, setIsSliding] = useState(false);
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Multiply by 2 for faster scrolling
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseUpLeave = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setIsSliding(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === clients.length - 1 ? 0 : prevIndex + 1
        );
        setIsSliding(false);
      }, 500); // Match this with the CSS transition duration
    }, interval);

    return () => clearInterval(slideInterval);
  }, [clients.length, interval]);

  // State to manage dropdown visibility
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // State to manage mobile menu collapse
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Functions to handle mouse events for desktop
  const handleMouseEnter = () => {
    if (window.innerWidth > 992) {
      // Only apply hover effect for desktop view
      setDropdownVisible(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 992) {
      // Only apply hover effect for desktop view
      setDropdownVisible(false);
    }
  };

  // Function to handle click for mobile
  const handleDropdownClick = () => {
    if (window.innerWidth <= 992) {
      // Only toggle dropdown on click for mobile view
      setDropdownVisible(!dropdownVisible);
    }
  };

  // Function to handle mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    // setTimeout(() => {
    //   setLoading(false);
    // }, 3500);

    window.$(".about_active").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      dots: false,
      autoplay: true,
      autoplayTimeout: 3000,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 1,
        },
        992: {
          items: 1,
        },
      },
    });

    const timer = setTimeout(() => {
      setIsRunning(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const [filter, setFilter] = useState("*");

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const portfolioItems = [
    { id: 1, category: "Graphic Design", imgSrc: "img/proj.png" },
    { id: 2, category: "UI/UX Design", imgSrc: "img/proj.png" },
    { id: 3, category: "Graphic Design", imgSrc: "img/proj.png" },
    { id: 4, category: "UI/UX Design", imgSrc: "img/proj.png" },
    { id: 5, category: "Graphic Design", imgSrc: "img/proj.png" },
    { id: 6, category: "UI/UX Design", imgSrc: "img/proj.png" },
  ];

  const filteredItems =
    filter === "*"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <>
      {loading ? (
        <div className="loading-container d-flex flex-column align-items-center">
          <div className="loading-wrapper d-flex flex-column justify-content-center align-items-center">
            <div className="loading-text-child loading-text-child-one">
              <h1 className="p-0 m-0">V</h1>
            </div>
            <div className="loading-text-child loading-text-child-two">
              <h1 className="p-0 m-0">X</h1>
            </div>
            <div className="loading-text-child loading-text-child-three">
              <h1 className="p-0 m-0">L</h1>
            </div>
            <div className="loading-text-header">Education</div>
          </div>
        </div>
      ) : (
        <>
          {/* <!-- Navbar Start --> */}
          <nav
            style={{ backgroundColor: "#422f2f" }}
            className="navbar-expand-lg navbar-container navbar-light fixed-top shadow py-lg-0 px-4 px-lg-5 wow fadeIn"
            data-wow-delay="0.1s"
          >
            <a href="/" className="navbar-brand d-block d-lg-none">
              <h1 className="text-primary fw-bold m-0">VXL</h1>
            </a>
            <button
              type="button"
              className="navbar-toggler"
              onClick={toggleMobileMenu}
              aria-controls="navbarCollapse"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation"
            >
              <span
                style={{ marginLeft: "10%" }}
                className="navbar-toggler-icon"
              ></span>
            </button>
            <div
              className={`collapse navbar-collapse justify-content-between py-4 py-lg-0 ${
                isMobileMenuOpen ? "show" : ""
              }`}
              id="navbarCollapse"
            >
              <div className="navbar-nav ms-auto py-0">
                <a
                  href="#home"
                  className="nav-item nav-link"
                  style={{ color: "#fff" }}
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="nav-item nav-link"
                  style={{ color: "#fff" }}
                >
                  About
                </a>

                {/* Services Dropdown */}
                <div
                  className="nav-item nav-link"
                  style={{
                    color: "#fff",
                    position: "relative",
                    cursor: "pointer",
                  }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={handleDropdownClick} // Toggle dropdown on click for mobile
                >
                  Services
                  {/* Dropdown Menu */}
                  {dropdownVisible && (
                    <div
                      className="dropdown-menu show"
                      style={{
                        position: "absolute",
                        top: "100%",
                        left: "0",
                        backgroundColor: "#fff",
                      }}
                    >
                      <a href="/service" className="dropdown-item">
                        Study Counselling
                      </a>
                      <a href="/service" className="dropdown-item">
                        Visa Assistance
                      </a>
                      <a href="/service" className="dropdown-item">
                        Skilled Migration
                      </a>
                      <a href="/service" className="dropdown-item">
                        Career Counselling
                      </a>
                    </div>
                  )}
                </div>
              </div>
              <a
                href="/"
                className="navbar-brand py-3 px-4 mx-3 d-none d-lg-block"
              >
                <h1 className="text-primary fw-bold m-0">VXL</h1>
              </a>
              <div className="navbar-nav me-auto py-0">
                <a
                  href="#project"
                  className="nav-item nav-link"
                  style={{ color: "#fff" }}
                >
                  Institutions
                </a>
                <a
                  href="#blog"
                  className="nav-item nav-link"
                  style={{ color: "#fff" }}
                >
                  Blog
                </a>
                {/* <a
                  href="#team"
                  className="nav-item nav-link"
                  style={{ color: "#fff" }}
                >
                  Team
                </a> */}
                <a
                  href="#contact"
                  className="nav-item nav-link"
                  style={{ color: "#fff" }}
                >
                  Contact
                </a>
              </div>
            </div>
          </nav>
          {/* <!-- Navbar End --> */}

          {/* <!-- Header Start --> */}
          <div class="container-fluid bg-light my-6" id="home">
            <div class="p-3">
              <div class="row g-5 align-items-center p-5">
                <div class="col-lg-6 py-6 pb-0 d-flex flex-column align-items-start pt-lg-0">
                  {isRunning ? (
                    <Confetti
                      style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                      }}
                      drawShape={(ctx) => {
                        ctx.drawImage(icon, -10, -10, 30, 30);
                      }}
                      numberOfPieces={50}
                    />
                  ) : (
                    <></>
                  )}

                  <h3 class="mb-3" style={{ color: "#fe3c66" }}>
                    Realise your
                  </h3>
                  <h1
                    class="display-3 mb-3 text-start"
                    style={{ color: "#0a4c7e" }}
                  >
                    Higher Education Dreams
                  </h1>
                  <p className="text-start">
                    Unlock boundless opportunities for higher studies and
                    skilled migration with BMW Educational Consultancy Sri
                    Lanka, your trusted partner in excellence.{" "}
                  </p>
                  <h2 class="typed-text-output d-inline"></h2>
                  <div class="typed-text d-none">
                    Web Designer, Web Developer, Front End Developer, Apps
                    Designer, Apps Developer
                  </div>
                  <div class="d-flex align-items-center pt-5">
                    <button
                      type="button"
                      class="btn-play"
                      data-bs-toggle="modal"
                      data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                      data-bs-target="#videoModal"
                    >
                      <span></span>
                    </button>
                    <h5 class="ms-4 mb-0 d-none d-sm-block">Play Video</h5>
                  </div>
                </div>
                <div class="col-lg-6">
                  <img
                    class="img-fluid header-right-image"
                    src="img/graduates.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Header End --> */}

          {/* <!-- Video Modal Start --> */}
          <div
            class="modal modal-video fade"
            id="videoModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content rounded-0">
                <div class="modal-header">
                  <h3 class="modal-title" id="exampleModalLabel">
                    Youtube Video
                  </h3>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  {/* <!-- 16:9 aspect ratio --> */}
                  <div class="ratio ratio-16x9">
                    <iframe
                      class="embed-responsive-item"
                      src=""
                      id="video"
                      allowfullscreen
                      allowscriptaccess="always"
                      allow="autoplay"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Video Modal End --> */}

          {/* <!-- About Start --> */}
          <div className="container-fluid clients-container d-flex flex-row p-5">
            <div className="clients-container-left d-flex flex-row">
              <div className="slider">
                {clients.map((image, index) => (
                  <div
                    key={index}
                    className={`slide ${
                      index === currentIndex ? "active" : ""
                    } ${isSliding ? "sliding" : ""}`}
                    style={{
                      backgroundImage: `url(${image.image})`,
                      width: "100%",
                      height: "100%",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                ))}
              </div>
            </div>
            <div className="clients-container-right ps-5 d-flex flex-column justify-content-center">
              <h1 className="p-0 mb-3 wow fadeInUp" data-bs-wow-delay="0.1s">
                Your Happiness
                <br />
                <span style={{ color: "#0a4c7e" }}>Matters To Us</span>
              </h1>
              <p lassName="wow fadeInUp" data-bs-wow-delay="0.2s">
                At VXL Educational Consultancy Sri Lanka, we put your
                satisfaction first, making your migration and higher studies
                dreams a reality. We provide personalised guidance for accessing
                top universities, tailored solutions, and exceptional support
                from our experienced team. Your success is our ultimate reward.
              </p>
              <p className="text-end mt-3">
                Ayodhya Kodagoda (AK)
                <br />
                <i>Managing Director</i>
                <br />
                <i>VXL Educational Consultancy Sri Lanka</i>
              </p>
            </div>
          </div>
          {/* <div class="container-xxl py-6" id="about">
            <div class="container">
              <div class="row g-5">
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div class="d-flex align-items-center mb-5">
                    <div class="years flex-shrink-0 text-center me-4">
                      <h1 class="display-1 mb-0">15</h1>
                      <h5 class="mb-0">Years</h5>
                    </div>
                    <h3 class="lh-base mb-0">
                      Stet no et lorem dolor et diam, amet duo ut dolore vero
                      eos.
                    </h3>
                  </div>
                  <p class="mb-4">
                    Stet no et lorem dolor et diam, amet duo ut dolore vero eos.
                    No stet est diam rebum amet diam ipsum. Clita clita labore,
                    dolor duo nonumy clita sit at, sed sit sanctus dolor eos.
                  </p>
                  <p class="mb-3">
                    <i class="far fa-check-circle text-primary me-3"></i>Stet no
                    et lorem dolor
                  </p>
                  <p class="mb-3">
                    <i class="far fa-check-circle text-primary me-3"></i>Stet no
                    et lorem dolor
                  </p>
                  <p class="mb-3">
                    <i class="far fa-check-circle text-primary me-3"></i>Stet no
                    et lorem dolor
                  </p>
                  <a class="btn btn-primary py-3 px-5 mt-3" href="">
                    Read More
                  </a>
                </div>
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                  <div class="row g-3 mb-4">
                    <div class="col-sm-6">
                      <img
                        class="img-fluid rounded"
                        src="img/about-1.jpg"
                        alt=""
                      />
                    </div>
                    <div class="col-sm-6">
                      <img
                        class="img-fluid rounded"
                        src="img/about-2.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="d-flex align-items-center mb-3">
                    <h5 class="border-end pe-3 me-3 mb-0">Happy Clients</h5>
                    <h2
                      class="text-primary fw-bold mb-0"
                      data-toggle="counter-up"
                    >
                      1234
                    </h2>
                  </div>
                  <p class="mb-4">
                    Stet no et lorem dolor et diam, amet duo ut dolore vero eos.
                    No stet est diam amet diam ipsum clita labore dolor duo
                    clita.
                  </p>
                  <div class="d-flex align-items-center mb-3">
                    <h5 class="border-end pe-3 me-3 mb-0">
                      Projects Completed
                    </h5>
                    <h2
                      class="text-primary fw-bold mb-0"
                      data-toggle="counter-up"
                    >
                      1234
                    </h2>
                  </div>
                  <p class="mb-0">
                    Stet no et lorem dolor et diam, amet duo ut dolore vero eos.
                    No stet est diam amet diam ipsum clita labore dolor duo
                    clita.
                  </p>
                </div>
              </div>
            </div>
          </div> */}
          {/* <!-- About End --> */}

          {/* <!-- Expertise Start --> */}
          {/* <div class="container-xxl py-6 pb-5" id="skill">
                <div class="container">
                    <div class="row g-5">
                        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <h1 class="display-5 mb-5">Skills & Experience</h1>
                            <p class="mb-4">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum clita dolor duo clita sit.</p>
                            <h3 class="mb-4">My Skills</h3>
                            <div class="row align-items-center">
                                <div class="col-md-6">
                                    <div class="skill mb-4">
                                        <div class="d-flex justify-content-between">
                                            <h6 class="font-weight-bold">HTML</h6>
                                            <h6 class="font-weight-bold">95%</h6>
                                        </div>
                                        <div class="progress">
                                            <div class="progress-bar bg-primary" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div class="skill mb-4">
                                        <div class="d-flex justify-content-between">
                                            <h6 class="font-weight-bold">CSS</h6>
                                            <h6 class="font-weight-bold">85%</h6>
                                        </div>
                                        <div class="progress">
                                            <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div class="skill mb-4">
                                        <div class="d-flex justify-content-between">
                                            <h6 class="font-weight-bold">PHP</h6>
                                            <h6 class="font-weight-bold">90%</h6>
                                        </div>
                                        <div class="progress">
                                            <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="skill mb-4">
                                        <div class="d-flex justify-content-between">
                                            <h6 class="font-weight-bold">Javascript</h6>
                                            <h6 class="font-weight-bold">90%</h6>
                                        </div>
                                        <div class="progress">
                                            <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div class="skill mb-4">
                                        <div class="d-flex justify-content-between">
                                            <h6 class="font-weight-bold">Angular JS</h6>
                                            <h6 class="font-weight-bold">95%</h6>
                                        </div>
                                        <div class="progress">
                                            <div class="progress-bar bg-dark" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div class="skill mb-4">
                                        <div class="d-flex justify-content-between">
                                            <h6 class="font-weight-bold">Wordpress</h6>
                                            <h6 class="font-weight-bold">85%</h6>
                                        </div>
                                        <div class="progress">
                                            <div class="progress-bar bg-info" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <ul class="nav nav-pills rounded border border-2 border-primary mb-5">
                                <li class="nav-item w-50">
                                    <button class="nav-link w-100 py-3 fs-5 active" data-bs-toggle="pill" href="#tab-1">Experience</button>
                                </li>
                                <li class="nav-item w-50">
                                    <button class="nav-link w-100 py-3 fs-5" data-bs-toggle="pill" href="#tab-2">Education</button>
                                </li>
                            </ul>
                            <div class="tab-content">
                                <div id="tab-1" class="tab-pane fade show p-0 active">
                                    <div class="row gy-5 gx-4">
                                        <div class="col-sm-6">
                                            <h5>UI Designer</h5>
                                            <hr class="text-primary my-2" />
                                            <p class="text-primary mb-1">2000 - 2045</p>
                                            <h6 class="mb-0">Apex Software Inc</h6>
                                        </div>
                                        <div class="col-sm-6">
                                            <h5>Product Designer</h5>
                                            <hr class="text-primary my-2" />
                                            <p class="text-primary mb-1">2000 - 2045</p>
                                            <h6 class="mb-0">Apex Software Inc</h6>
                                        </div>
                                        <div class="col-sm-6">
                                            <h5>Web Designer</h5>
                                            <hr class="text-primary my-2" />
                                            <p class="text-primary mb-1">2000 - 2045</p>
                                            <h6 class="mb-0">Apex Software Inc</h6>
                                        </div>
                                        <div class="col-sm-6">
                                            <h5>Apps Designer</h5>
                                            <hr class="text-primary my-2" />
                                            <p class="text-primary mb-1">2000 - 2045</p>
                                            <h6 class="mb-0">Apex Software Inc</h6>
                                        </div>
                                    </div>
                                </div>
                                <div id="tab-2" class="tab-pane fade show p-0">
                                    <div class="row gy-5 gx-4">
                                        <div class="col-sm-6">
                                            <h5>UI Design Course</h5>
                                            <hr class="text-primary my-2" />
                                            <p class="text-primary mb-1">2000 - 2045</p>
                                            <h6 class="mb-0">Cambridge University</h6>
                                        </div>
                                        <div class="col-sm-6">
                                            <h5>IOS Development</h5>
                                            <hr class="text-primary my-2" />
                                            <p class="text-primary mb-1">2000 - 2045</p>
                                            <h6 class="mb-0">Cambridge University</h6>
                                        </div>
                                        <div class="col-sm-6">
                                            <h5>Web Design</h5>
                                            <hr class="text-primary my-2" />
                                            <p class="text-primary mb-1">2000 - 2045</p>
                                            <h6 class="mb-0">Cambridge University</h6>
                                        </div>
                                        <div class="col-sm-6">
                                            <h5>Apps Design</h5>
                                            <hr class="text-primary my-2" />
                                            <p class="text-primary mb-1">2000 - 2045</p>
                                            <h6 class="mb-0">Cambridge University</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
          {/* <!-- Expertise End --> */}

          {/* <div
            className={`carousel-container ${isDragging ? "dragging" : ""} `}
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            <div className="carousel p-3 mx-3">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="carousel-item p-5 d-flex flex-column"
                >
                  <p>"{item.text}"</p>
                  <h1 className="mt-3">{item.name}</h1>
                </div>
              ))}
            </div>
          </div> */}

          <div className="d-flex flex-column faq-container p-5">
            <div className="faq-wrapper d-flex flex-column align-items-center">
              <h1>
                How We Can <span style={{ color: "#fe3c66" }}>Assist</span>
              </h1>
              <p className="mt-3">
                VXL Educational Consultancy Sri Lanka is your all-in-one partner
                in your educational journey. From eligibility assessments to
                course and university selection, we guide you. We prepare you
                for IELTS/PTE success. We streamline applications and simplify
                visa processes with expert support. Our vast network helps with
                ticket bookings and accommodation.
              </p>
              <div className="question-wrapper d-flex flex-column container justify-content-center mt-5">
                {faqs.map((faq, index) => {
                  return (
                    <Faq
                      key={index}
                      question={faq.question}
                      answer={faq.answer}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          <div className="track-record-container d-flex flex-row"></div>

          {/* <!-- Service Start --> */}
          <div class="container-fluid bg-light my-5 py-6" id="service">
            <div class="container">
              <div class="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
                <div class="col-lg-6">
                  <h1 class="display-5 mb-0">Our Services</h1>
                </div>
                <div class="col-lg-6 text-lg-end">
                  <a class="btn btn-primary py-3 px-5" href="">
                    Hire Us
                  </a>
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
                      <h6 class="mb-3">
                        Start from <span class="text-primary">$199</span>
                      </h6>
                      <span>
                        Stet lorem dolor diam amet vero eos. No stet est diam
                        amet diam ipsum. Clita dolor duo clita sit sed sit dolor
                        eos.
                      </span>
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
                      <h6 class="mb-3">
                        Start from <span class="text-primary">$199</span>
                      </h6>
                      <span>
                        Stet lorem dolor diam amet vero eos. No stet est diam
                        amet diam ipsum. Clita dolor duo clita sit sed sit dolor
                        eos.
                      </span>
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
                      <h6 class="mb-3">
                        Start from <span class="text-primary">$199</span>
                      </h6>
                      <span>
                        Stet lorem dolor diam amet vero eos. No stet est diam
                        amet diam ipsum. Clita dolor duo clita sit sed sit dolor
                        eos.
                      </span>
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
                      <h6 class="mb-3">
                        Start from <span class="text-primary">$199</span>
                      </h6>
                      <span>
                        Stet lorem dolor diam amet vero eos. No stet est diam
                        amet diam ipsum. Clita dolor duo clita sit sed sit dolor
                        eos.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Service End --> */}

          {/* <!-- Projects Start --> */}
          <div class="container-xxl py-6 pt-5" id="project">
            <div class="container">
              <div
                class="row g-5 mb-5 align-items-center wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div class="col-lg-6">
                  <h1 class="display-5 mb-0">Our Projects</h1>
                </div>
                <div class="col-lg-6 text-lg-end">
                  <ul class="list-inline mx-n3 mb-0" id="portfolio-flters">
                    <li
                      className={`mx-3 ${filter === "*" ? "active" : ""}`}
                      onClick={() => handleFilterChange("*")}
                    >
                      All Projects
                    </li>

                    <li
                      className={`mx-3 ${
                        filter === "UI/UX Design" ? "active" : ""
                      }`}
                      onClick={() => handleFilterChange("UI/UX Design")}
                    >
                      category 1
                    </li>

                    <li
                      className={`mx-3 ${
                        filter === "Graphic Design" ? "active" : ""
                      }`}
                      onClick={() => handleFilterChange("Graphic Design")}
                    >
                      category 2
                    </li>
                  </ul>
                </div>
              </div>
              <div
                class="row g-4 portfolio-container wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <TransitionGroup component={null}>
                  {filteredItems.map((item) => (
                    <CSSTransition
                      key={item.id}
                      timeout={500}
                      classNames="fade"
                    >
                      <div class="col-lg-4 col-md-6 portfolio-item first">
                        <div class="portfolio-img rounded overflow-hidden">
                          <img class="img-fluid" src={item.imgSrc} alt="" />
                          <div class="portfolio-btn">
                            <a
                              class="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                              href="img/project-1.jpg"
                              data-lightbox="portfolio"
                            >
                              <i class="fa fa-eye"></i>
                            </a>
                            <a
                              class="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                              href=""
                            >
                              <i class="fa fa-link"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </CSSTransition>
                  ))}
                </TransitionGroup>
              </div>
            </div>
          </div>
          {/* <!-- Projects End --> */}

          {/* <!-- Team Start --> */}
          <div class="container-xxl py-6 pb-5" id="team">
            <div class="container">
              <div class="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
                <div class="col-lg-6">
                  <h1 class="display-5 mb-0">Team Members</h1>
                </div>
                <div class="col-lg-6 text-lg-end">
                  <a class="btn btn-primary py-3 px-5" href="">
                    Contact Us
                  </a>
                </div>
              </div>
              <div class="row g-4">
                <div
                  class="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div class="team-item position-relative">
                    <img class="img-fluid rounded" src="img/dummy.jpg" alt="" />
                    <div class="team-text bg-white rounded-end p-4">
                      <div>
                        <h5>Full Name</h5>
                        <span>Designation</span>
                      </div>
                      <i class="fa fa-arrow-right fa-2x text-primary"></i>
                    </div>
                  </div>
                </div>
                <div
                  class="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div class="team-item position-relative">
                    <img class="img-fluid rounded" src="img/dummy.jpg" alt="" />
                    <div class="team-text bg-white rounded-end p-4">
                      <div>
                        <h5>Full Name</h5>
                        <span>Designation</span>
                      </div>
                      <i class="fa fa-arrow-right fa-2x text-primary"></i>
                    </div>
                  </div>
                </div>
                <div
                  class="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div class="team-item position-relative">
                    <img class="img-fluid rounded" src="img/dummy.jpg" alt="" />
                    <div class="team-text bg-white rounded-end p-4">
                      <div>
                        <h5>Full Name</h5>
                        <span>Designation</span>
                      </div>
                      <i class="fa fa-arrow-right fa-2x text-primary"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Team End --> */}

          {/* <!-- Testimonial Start --> */}
          {/* <div class="container-fluid bg-light py-5 my-5" id="testimonial">
                <div class="container-fluid py-5">
                    <h1 class="display-5 text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Testimonial</h1>
                    <div class="row justify-content-center">
                        <div class="col-lg-3 d-none d-lg-block">
                            <div class="testimonial-left h-100">
                                <img class="img-fluid wow fadeIn" data-wow-delay="0.1s" src="img/testimonial-1.jpg" alt="" />
                                <img class="img-fluid wow fadeIn" data-wow-delay="0.3s" src="img/testimonial-2.jpg" alt="" />
                                <img class="img-fluid wow fadeIn" data-wow-delay="0.5s" src="img/testimonial-3.jpg" alt="" />
                            </div>
                        </div>
                        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div class="about_active owl-carousel testimonial-carousel">
                                <div class="testimonial-item text-center">
                                    <div class="position-relative mb-5">
                                        <img class="img-fluid rounded-circle border border-secondary p-2 mx-auto" src="img/testimonial-1.jpg" alt="" />
                                        <div class="testimonial-icon">
                                            <i class="fa fa-quote-left text-primary"></i>
                                        </div>
                                    </div>
                                    <p class="fs-5 fst-italic">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                                    <hr class="w-25 mx-auto" />
                                    <h5>Client Name</h5>
                                    <span>Profession</span>
                                </div>
                                <div class="testimonial-item text-center">
                                    <div class="position-relative mb-5">
                                        <img class="img-fluid rounded-circle border border-secondary p-2 mx-auto" src="img/testimonial-2.jpg" alt="" />
                                        <div class="testimonial-icon">
                                            <i class="fa fa-quote-left text-primary"></i>
                                        </div>
                                    </div>
                                    <p class="fs-5 fst-italic">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                                    <hr class="w-25 mx-auto" />
                                    <h5>Client Name</h5>
                                    <span>Profession</span>
                                </div>
                                <div class="testimonial-item text-center">
                                    <div class="position-relative mb-5">
                                        <img class="img-fluid rounded-circle border border-secondary p-2 mx-auto" src="img/testimonial-3.jpg" alt="" />
                                        <div class="testimonial-icon">
                                            <i class="fa fa-quote-left text-primary"></i>
                                        </div>
                                    </div>
                                    <p class="fs-5 fst-italic">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                                    <hr class="w-25 mx-auto" />
                                    <h5>Client Name</h5>
                                    <span>Profession</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 d-none d-lg-block">
                            <div class="testimonial-right h-100">
                                <img class="img-fluid wow fadeIn" data-wow-delay="0.1s" src="img/testimonial-1.jpg" alt="" />
                                <img class="img-fluid wow fadeIn" data-wow-delay="0.3s" src="img/testimonial-2.jpg" alt="" />
                                <img class="img-fluid wow fadeIn" data-wow-delay="0.5s" src="img/testimonial-3.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
          {/* <!-- Testimonial End --> */}

          {/* <!-- Contact Start --> */}
          <div class="container-xxl pb-5" id="contact">
            <div class="container py-5">
              <div class="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
                <div class="col-lg-6">
                  <h1 class="display-5 mb-0">Let's Work Together</h1>
                </div>
              </div>
              <div class="row g-5">
                <div
                  class="col-lg-5 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <p class="mb-2">My office:</p>
                  <h3 class="fw-bold">123 Street, New York, USA</h3>
                  <hr class="w-100" />
                  <p class="mb-2">Call me:</p>
                  <h3 class="fw-bold">+012 345 6789</h3>
                  <hr class="w-100" />
                  <p class="mb-2">Mail me:</p>
                  <h3 class="fw-bold">info@example.com</h3>
                  <hr class="w-100" />
                </div>
                <div
                  class="col-lg-7 col-md-6 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <p class="mb-4">The contact form is currently inactive.</p>
                  <form>
                    <div class="row g-3">
                      <div class="col-md-6">
                        <div class="form-floating">
                          <input
                            type="text"
                            class="form-control"
                            id="name"
                            placeholder="Your Name"
                          />
                          <label for="name">Your Name</label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-floating">
                          <input
                            type="email"
                            class="form-control"
                            id="email"
                            placeholder="Your Email"
                          />
                          <label for="email">Your Email</label>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-floating">
                          <input
                            type="text"
                            class="form-control"
                            id="subject"
                            placeholder="Subject"
                          />
                          <label for="subject">Subject</label>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-floating">
                          <textarea
                            class="form-control"
                            placeholder="Leave a message here"
                            id="message"
                            style={{ height: "100px" }}
                          ></textarea>
                          <label for="message">Message</label>
                        </div>
                      </div>
                      <div class="col-12">
                        <button class="btn btn-primary py-3 px-5" type="submit">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Contact End --> */}

          {/* <!-- Map Start --> */}
          <div
            class="container-xxl pt-5 px-0 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div class="container-xxl pt-5 pb-5 px-0">
              <div class="bg-dark">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d31688.763831189957!2d79.8911059!3d6.8791639!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x8182fa4d3bb55987%3A0xcceb2b744ad3617!2sVXL%20Education%20Sri%20Lanka%20-%20Study%2FVisa%20for%20Australia%2C%20Canada%2C%20UK%2C%20USA%2C%20NZ%2C%20Malaysia%2C%20Malta%2C%20Germany%2C%20France%2C%20Spain%2C%20UAE%20Level%206%20Nugegoda%20Business%20Centre%20(RDB%20Building%2C%2080%20Nawala%20Rd%20Nugegoda%2010250!3m2!1d6.8791639!2d79.8911059!5e0!3m2!1sen!2slk!4v1724744005710!5m2!1sen!2slk"
                  width="600"
                  height="450"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  frameborder="0"
                  style={{ width: "100%", height: "450px", border: "0" }}
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
              </div>
            </div>
          </div>
          {/* Map Ends */}

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
                  <a class="btn btn-square btn-primary me-2" href="">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a class="btn btn-square btn-primary me-2" href="">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a class="btn btn-square btn-primary me-2" href="">
                    <i class="fab fa-youtube"></i>
                  </a>
                  <a class="btn btn-square btn-primary me-2" href="">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="footer-bottom">
              <p>
                &copy; 2024 VXL Education Sri Lanka, All Right Reserved.
                Designed By{" "}
                <a
                  class="border-bottom text-secondary"
                  href="https://loopyholdings.com"
                >
                  Loopy Holdings
                </a>
              </p>
            </div>
          </footer>
          {/* <!-- Back to Top --> */}
          <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top">
            <i class="bi bi-arrow-up"></i>
          </a>
        </>
      )}
    </>
  );
};

export default Home;

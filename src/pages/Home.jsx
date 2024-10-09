import React, { useState, useEffect, useRef } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "jquery";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import "owl.carousel";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Faq from "../components/Faq";
import ConfettiComponent from "../components/ConfettiComponent";
import Confetti from "react-confetti";
import iconImage from "../images/mortarboard.png";
import TrackRecord from "../components/TrackRecord";
import {
  faArrowRight,
  faChevronLeft,
  faChevronRight,
  faEarthAmericas,
  faGlobe,
  faGraduationCap,
  faHandsHoldingCircle,
  faLightbulb,
  faLocationDot,
  faNewspaper,
  faPlaneDeparture,
  faUserGraduate,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../images/VXL_new_logo.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { TypeAnimation } from "react-type-animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import signature from "../images/signature.png";
import about_bg from "../images/about_bg.png";

const clients = [
  { active: true, image: "img/family.jpg" },
  { active: false, image: "img/couple.jpg" },
  { active: false, image: "img/6515.jpg" },
];

const faqs = [
  {
    question: "Course/Career Counselling for You",
    answer:
      "At VXL Educational Consultancy Sri Lanka, we offer invaluable expertise to help you navigate the vast landscape of study options and select the most suitable universities and institutes that align with your academic and career aspirations. Our guidance is tailored to empower you with the knowledge and resources needed to make informed decisions, ensuring that your educational journey is both fulfilling and successful.",
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
      "Come on board with us and dive into our regular workshops and convenient online classes, tailored to give your EPT test preparations a significant boost. At VXL Educational Consultancy, we provide a complete package of services, ensuring you’re well-prepared for success, from in-house IELTS/PTE training sessions to comprehensive support along every step of your journey.",
  },
  {
    question: "Your OSHC/Insurance",
    answer:
      "Navigating the complexities of student health insurance can indeed be a costly affair. However, the good news is, as a trusted partner of not just one, but two of the largest OSHC providers, we’ve got your back. This means that when you choose VXL Educational Consultancy Sri Lanka, you’re not only getting access to expert guidance but also exclusive access to the best rates and the utmost value for every hard-earned buck you invest in your health and well-being during your academic journey.",
  },
  {
    question: "Accommodation",
    answer:
      "At BMW Educational Consultancy Sri Lanka, our commitment to providing the most comprehensive and long-term support for our clients is unwavering. One prime example is our unique access to an extensive network of student accommodation properties spanning across Australia, courtesy of our esteemed partner providers. This means that when you partner with us, you’re not only securing competitive rental rates but also gaining access to a vast selection of accommodations tailored to your preferences. From prime locations to unparalleled facilities, we’re dedicated to ensuring that your accommodation needs are met with excellence throughout your academic journey. Your comfort and convenience are our priorities.",
  },
];

const items = [
  {
    text: "Applied for student subsequent entrant visa through VXL Educational Consultancy Sri Lanka. From the very beginning everything in the process was well exaplained and clarified all my doubts. Thank you Mr Ayodhya for guiding from the first stage and for encouraging me to apply. Also many thanks to Ms Surani for advising and correcting all my documents and for lodging my visa at the end. Was able to communication and to contact throughout the lodging procedure easily. Thank you so much VXL Educational Consultancy Sri Lanka.",
    name: "Hashini Loluwagodage",
  },
  {
    text: "Applied for student subsequent entrant visa through VXL Educational Consultancy Sri Lanka. From the very beginning everything in the process was well exaplained and clarified all my doubts. Thank you Mr Ayodhya for guiding from the first stage and for encouraging me to apply. Also many thanks to Ms Surani for advising and correcting all my documents and for lodging my visa at the end. Was able to communication and to contact throughout the lodging procedure easily. Thank you so much VXL Educational Consultancy Sri Lanka.",
    name: "Hashini Loluwagodage",
  },
  {
    text: "Applied for student subsequent entrant visa through VXL Educational Consultancy Sri Lanka. From the very beginning everything in the process was well exaplained and clarified all my doubts. Thank you Mr Ayodhya for guiding from the first stage and for encouraging me to apply. Also many thanks to Ms Surani for advising and correcting all my documents and for lodging my visa at the end. Was able to communication and to contact throughout the lodging procedure easily. Thank you so much VXL Educational Consultancy Sri Lanka.",
    name: "Hashini Loluwagodage",
  },
  {
    text: "Applied for student subsequent entrant visa through VXL Educational Consultancy Sri Lanka. From the very beginning everything in the process was well exaplained and clarified all my doubts. Thank you Mr Ayodhya for guiding from the first stage and for encouraging me to apply. Also many thanks to Ms Surani for advising and correcting all my documents and for lodging my visa at the end. Was able to communication and to contact throughout the lodging procedure easily. Thank you so much VXL Educational Consultancy Sri Lanka.",
    name: "Hashini Loluwagodage",
  },
  {
    text: "Applied for student subsequent entrant visa through VXL Educational Consultancy Sri Lanka. From the very beginning everything in the process was well exaplained and clarified all my doubts. Thank you Mr Ayodhya for guiding from the first stage and for encouraging me to apply. Also many thanks to Ms Surani for advising and correcting all my documents and for lodging my visa at the end. Was able to communication and to contact throughout the lodging procedure easily. Thank you so much VXL Educational Consultancy Sri Lanka.",
    name: "Hashini Loluwagodage",
  },
  {
    text: "Applied for student subsequent entrant visa through VXL Educational Consultancy Sri Lanka. From the very beginning everything in the process was well exaplained and clarified all my doubts. Thank you Mr Ayodhya for guiding from the first stage and for encouraging me to apply. Also many thanks to Ms Surani for advising and correcting all my documents and for lodging my visa at the end. Was able to communication and to contact throughout the lodging procedure easily. Thank you so much VXL Educational Consultancy Sri Lanka.",
    name: "Hashini Loluwagodage",
  },
];

const testimonials = [
  {
    image: "img/team1.png",
    name: "John Doe",
    description:
      "VXL provided excellent guidance and resources, helping me achieve my career goals.",
  },
  {
    image: "img/team2.png",
    name: "Jane Smith",
    description:
      "The instructors at VXL were knowledgeable and supportive, creating a positive learning environment.",
  },
  {
    image: "img/team3.png",
    name: "Alice Johnson",
    description:
      "I highly recommend VXL for their comprehensive courses and personalized attention.",
  },
  {
    image: "img/team4.png",
    name: "Bob Brown",
    description:
      "VXL's flexible learning options and industry partnerships were invaluable to my professional development.",
  },
  {
    image: "img/team5.png",
    name: "Emily Davis",
    description:
      "The career counseling at VXL helped me identify the right path and land my dream job.",
  },
  {
    image: "img/team6.png",
    name: "Charlie Baker",
    description:
      "VXL's focus on practical skills and real-world experience prepared me for success in my field.",
  },
];

const services = [
  {
    title:
      "Your <span style='color: #EE3457;'>Courses and Career Counseling</span>",
    image: "img/2149325446.jpg",
    description:
      "VXL provides excellent guidance on navigating the vast landscape of options to find the one that aligns best with your academic and career aspirations, and your financial capabilities. <br/><br/>Our guidance is tailored to empower you with the knowledge and resources needed to make informed decisions ensuring that your educational journey is fulfilling and successful.",
  },
  {
    title: "Your <span style='color: #EE3457;'>University Applications</span>",
    image: "img/2148950541.jpg",
    description:
      "Our meticulous approach to document gathering in managing applications is designed to maximize your chances of excelling in achieving your dreams. We leave no stone unturned to ensure your application is in impeccable order, providing you with the best shot at securing admission to your desired academic institution.",
  },
  {
    title: "Your <span style='color: #EE3457;'>Visa Applications</span>",
    image: "img/2149117765.jpg",
    description:
      "The VXL team has built a solid reputation with a 99% success rate – and that’s no easy feat. We do our due diligence to make sure that your application is successful, and we provide guidance for visit visas, student visas and even subsequent-entrant/dependent visas. For a full list of the supported countries and the visa categories, please click here.",
  },
  {
    title: "<span style='color: #EE3457;'>IELTS and PTE</span> for You",
    image: "img/14155.jpg",
    description:
      "VXL is an authorized registration centre for British Council IELTS – and we provide training sessions specifically tailored to you. Convenient timing, easy to reach location, virtual learning portal access, face-to-face personalized coaching sessions are just some of the reasons which make IELTS with VXL such an easy decision. Please click here for more information.",
  },
];

const onshoreServices = [
  {
    title: "Your <span style='color: #EE3457;'>OSHC/Insurance</span>",
    image: "img/853.jpg",
    description:
      "The student health insurance process is tricky as is – this is why we have partnered with two of the largest OSHC providers to help you access expert guidance plus exclusive access to the best rates and features to ensure the best of health and well-being for you during your academic journey.",
  },
  {
    title: "<span style='color: #EE3457;'>Accommodation</span>",
    image: "img/2148925877.jpg",
    description:
      "VXL is committed to providing the most comprehensive and long-term support for you. This is why we have partnered with third parties to facilitate access to a network of properties spanning across Australia. We are dedicated to ensuring that your accommodation needs are met with excellence throughout your academic journey.",
  },
];

const trackrecords = [
  { image: faHandsHoldingCircle, subcontent: "Establised", content: "2019" },
  { image: faUsers, subcontent: "Satisfied Clients", content: "1234+" },
  { image: faNewspaper, subcontent: "Visa Grants", content: "567+" },
  { image: faGraduationCap, subcontent: "Sccholarships", content: "89+" },
  { image: faLocationDot, subcontent: "Global Offices", content: "14" },
  { image: faGlobe, subcontent: "Global Locations", content: "4" },
];

const partners = [
  "img/partners/p1.png",
  "img/partners/p2.png",
  "img/partners/p3.png",
  "img/partners/p4.png",
  "img/partners/p5.jpg",
  "img/partners/p6.png",
  "img/partners/p7.jpg",
  "img/partners/p8.jpg",
  "img/partners/p9.jpg",
  "img/partners/p10.jpg",
  "img/partners/p11.png",
  "img/partners/p12.png",
  "img/partners/p13.png",
  "img/partners/p14.jpg",
  "img/partners/p15.png",
  "img/partners/p16.jpeg",
  "img/partners/p17.jpg",
  "img/partners/p18.png",
  "img/partners/p19.jpg",
  "img/partners/p20.jpg",
  "img/partners/p21.jpg",
  "img/partners/p22.jpg",
  "img/partners/p23.png",
  "img/partners/p24.png",
  "img/partners/p25.png",
  "img/partners/p26.png",
  "img/partners/p27.png",
  "img/partners/p28.jpg",
  "img/partners/p29.jpg",
  "img/partners/p30.jpg",
  "img/partners/p31.png",
  "img/partners/p32.jpg",
  "img/partners/p33.jpg",
  "img/partners/p34.png",
  "img/partners/p35.jpg",
  "img/partners/p36.png",
  "img/partners/p37.png",
  "img/partners/p38.jpg",
  "img/partners/p39.jpg",
  "img/partners/p40.jpg",
  "img/partners/p41.png",
  "img/partners/p42.jpg",
  "img/partners/p43.jpg",
  "img/partners/p44.png",
  "img/partners/p45.png",
  "img/partners/p46.jpg",
  "img/partners/p47.jpg",
  "img/partners/p48.png",
  "img/partners/p49.jpg",
  "img/partners/p50.jpg",
  "img/partners/p51.jpg",
  "img/partners/p52.jpg",
  "img/partners/p53.png",
  "img/partners/p54.png",
  "img/partners/p55.png",
  "img/partners/p56.jpg",
  "img/partners/p57.png",
  "img/partners/p58.png",
  "img/partners/p59.jpg",
  "img/partners/p60.png",
  "img/partners/p61.jpg",
  "img/partners/p62.jpg",
  "img/partners/p63.png",
];

const Home = () => {
  const icon = new Image();
  icon.src = iconImage;
  const [loading, setLoading] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const scrollRef = useRef(null);
  const [scrollInterval, setScrollInterval] = useState(null);
  const [clickedLeft, setClickedLeft] = useState(false);
  const [clickedRight, setClickedRight] = useState(false);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 200;
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 200;
    }
  };

  const handleMouseDown = (scrollFunc, dir) => {
    dir === "left" ? setClickedLeft(true) : setClickedRight(true);
    const interval = setInterval(scrollFunc, 100);
    setScrollInterval(interval);
  };

  const handleMouseUp = () => {
    setClickedLeft(false);
    setClickedRight(false);
    if (scrollInterval) {
      clearInterval(scrollInterval);
    }
  };

  const options = {
    items: 4,
    loop: true,
    // nav: true,
    // navText: [
    //   "<i class='fa fa-angle-left'></i>",
    //   "<i class='fa fa-angle-right'></i>",
    // ],
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1300: {
        items: 4,
      },
    },
  };

  const brandsOptions = {
    items: 4,
    loop: true,
    // nav: true,
    // navText: [
    //   "<i class='fa fa-angle-left'></i>",
    //   "<i class='fa fa-angle-right'></i>",
    // ],
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1300: {
        items: 6,
      },
    },
  };

  useEffect(() => {
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

    // const timer = setTimeout(() => {
    //   setIsRunning(false);
    // }, 5000);
    // return () => clearTimeout(timer);
  }, []);

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
          <Navbar />

          {/* <!-- Header Start --> */}
          <div
            class="container-fluid bg-light user-select-none px-0"
            id="home"
            style={{ marginTop: "70px" }}
          >
            <div class="hero-container row align-items-center p-0 m-0 d-flex">
              <div class="col-lg-6 col-md-12 hero-left d-flex flex-column align-items-start flex-grow-1">
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

                <h3 class="mb-3 hero-sub-title" style={{ color: "#fe3c66" }}>
                  VXL Education Sri Lanka
                </h3>
                <h1
                  class="display-3 mb-3 text-start hero-title"
                  style={{ color: "#0a4c7e" }}
                >
                  You <span style={{ color: "#fe3c66" }}>Excel</span> With VXL
                </h1>
                <p className="text-start hero-para">
                  Want to study abroad?{" "}
                  <span style={{ color: "#fe3c66" }}>
                    Having trouble deciding where or how?
                  </span>{" "}
                  We <span style={{ color: "#fe3c66" }}>excel</span> around the
                  world in helping students achieve their higher education
                  goals.
                </p>
                <button className="hero-button py-2 px-3 mt-2">
                  Book My Free Session
                  <span className="bg-white rounded-circle ms-3 ">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      color="#18548a"
                      width={16}
                    />
                  </span>
                </button>
              </div>
              <div class="col-lg-6 col-md-12 hero-right flex-grow-1">
                {/* <img
                  class="img-fluid header-right-image"
                  src="img/graduates.png"
                  alt=""
                /> */}
              </div>
            </div>
          </div>
          {/* <!-- Header End --> */}

          {/* <!-- About Start --> */}
          <div className="container-fluid clients-container p-0 m-0 d-flex flex-row user-select-none">
            <div className="clients-container-left m-0 p-0">
              {/* <img className="m-0 p-0" src={about_bg} alt="about" /> */}
            </div>
            <div className="clients-container-right m-0 d-flex flex-column justify-content-center">
              <h1 className="p-0 mb-3 wow fadeInUp" data-bs-wow-delay="0.1s">
                We Excel <span style={{ color: "#18548A" }}>When</span> You
                Excel
              </h1>
              <p lassName="wow fadeInUp" data-bs-wow-delay="0.5s">
                At VXL Education Sri Lanka, we put your dreams first.{" "}
                <span style={{ color: "#18548A" }}>
                  We want to see you excel in turning your migration and higher
                  studies dreams into reality.
                  <br />
                  <br />
                  With personalized guidance for accessing top universities,
                  tailored solutions and exceptional visa and counselling
                  support from the VXL team, your success is our promise.
                </span>
                <br />
                <br />
                Our 99% visa success rate is a testament to our brand promise.
              </p>
              <img src={signature} alt="signature" />
              <p className="text-start mt-3">
                <span style={{ color: "#18548A" }}>
                  <strong>Ayodhya Kodagoda</strong>
                </span>
                <br />
                Global COO
                <br />
                VXL Education and Migration Consultants
              </p>
            </div>
          </div>

          <div className="testimonial-container w-100 h-auto p-5 d-flex flex-column align-items-center user-select-none">
            <h1 className="wow fadeInUp text-center" data-bs-wow-delay="0.1s">
              They <span style={{ color: "#fe3c66" }}>Excelled</span> with VXL
            </h1>

            <div className="testimonial-carousel mt-3 d-flex flex-row justify-content-between align-items-center w-100">
              <button
                className="testimonial-btn-left"
                style={{
                  transform: clickedLeft ? `scale(0.7)` : `scale(1)`,
                  boxShadow: clickedLeft
                    ? `rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px`
                    : `rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px`,
                }}
                onMouseDown={() => handleMouseDown(scrollLeft, "left")}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
              >
                <FontAwesomeIcon icon={faChevronLeft} color="#FFB1B1" />
              </button>
              <div
                className="testimonial-slider d-flex flex-row"
                ref={scrollRef}
              >
                {testimonials.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="testimonial-item d-fex flex-column p-3"
                    >
                      <div className="d-flex flex-row h-auto align-items-center justify-content-start align-items-center">
                        <div
                          className="testimonial-image m-0 p-0"
                          style={{ backgroundImage: `url(${item.image})` }}
                        ></div>
                        <h1 className="ms-3">{item.name}</h1>
                      </div>
                      <p className="mt-3">
                        {'"'}
                        {item.description}
                        {'"'}
                      </p>
                    </div>
                  );
                })}
              </div>
              <button
                className="testimonial-btn-right"
                style={{
                  transform: clickedRight ? `scale(0.7)` : `scale(1)`,
                  boxShadow: clickedRight
                    ? `rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px`
                    : `rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px`,
                }}
                onMouseDown={() => handleMouseDown(scrollRight, "right")}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
              >
                <FontAwesomeIcon icon={faChevronRight} color="#FFB1B1" />
              </button>
            </div>
          </div>

          <div className="track-record-container d-flex flex-column w-100 h-auto p-5 justify-content-center align-items-center">
            <h1 className="wow fadeInUp text-center" data-bs-wow-delay="0.1s">
              We <span style={{ color: "#fe3c66" }}>Excel</span> around the
              world
            </h1>
            <div className="track-record-wrapper d-flex flex-row justify-content-center mt-3">
              {trackrecords.map((record, index) => {
                return (
                  <div
                    key={index}
                    className="track-record-item p-3 d-flex flex-column justify-content-center align-items-center"
                  >
                    <FontAwesomeIcon
                      icon={record.image}
                      style={{ width: "40px", height: "40px" }}
                      color="#18548A"
                    />
                    <h1 className="mt-3">{record.content}</h1>
                    <p className="m-0 text-center">{record.subcontent}</p>
                  </div>
                );
              })}
            </div>
            <p className="mt-3">
              It took years for us to get where we are today. Over the years we
              have perfected our processes, checks ​and due-diligence to bring
              you a <span>true experience of excellence</span>.<br />
              Talk to us today. <span>You Excel with VXL</span>.
            </p>
            <button className="hero-button py-2 px-3 mt-2">
              Experience Excellence
              <span className="bg-white rounded-circle ms-3 ">
                <FontAwesomeIcon
                  icon={faChevronRight}
                  color="#18548a"
                  width={16}
                />
              </span>
            </button>
          </div>

          <div className="services-container d-flex flex-column w-100 h-auto p-5 justify-content-center align-items-center">
            <h1 className="wow fadeInUp text-center" data-bs-wow-delay="0.1s">
              We <span style={{ color: "#fe3c66" }}>Excel</span> around the
              world
            </h1>
            <p className="services-container-desc">
              VXL is your one-stop partner during every step of your educational
              journey.
              <br />
              <br />
              We guide you with everything from the eligibility assessments to
              course and university selections, prepare you for IELTS/PTE
              success, streamline applications and simplify visa processes with
              expert assistance, and even provide on-shore assistance – all so
              that you can focus on realizing your dreams.
              <br />
              <br />
              We also have a ready-to-use network to assist in ticket bookings
              and accommodation.
            </p>
            <div className="services-carousel">
              <OwlCarousel
                className="carousel-cause owl-carousel d-flex g-0"
                {...options}
              >
                {services.map((service, index) => {
                  return (
                    <div className="service-item d-flex flex-column py-4">
                      <h1
                        className="px-4"
                        dangerouslySetInnerHTML={{ __html: service.title }}
                      />
                      <div
                        className="service-item-image"
                        style={{ backgroundImage: `url(${service.image})` }}
                      ></div>
                      <div className="service-para-wrapper d-flex flex-column justify-content-between">
                        <p
                          className="px-4 pt-3"
                          dangerouslySetInnerHTML={{
                            __html: service.description,
                          }}
                        />
                        <button className="hero-button py-2 px-3 my-3 mx-auto">
                          Book my free session
                          <span className="bg-white rounded-circle ms-3 ">
                            <FontAwesomeIcon
                              icon={faChevronRight}
                              color="#18548a"
                              width={16}
                            />
                          </span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </OwlCarousel>
            </div>
            <div className="service-onshore-container p-5">
              <h1 className="wow fadeInUp text-center" data-bs-wow-delay="0.1s">
                How you <span style={{ color: "#fe3c66" }}>Excel</span> Onshore
              </h1>
              <div
                className="w-100 d-flex flex-column mt-5"
                style={{ rowGap: "50px" }}
              >
                {onshoreServices.map((service, index) => {
                  return (
                    <div className="onshore-service-item d-flex">
                      <div
                        className="onshore-service-left"
                        style={{ backgroundImage: `url(${service.image})` }}
                      ></div>
                      <div className="onshore-service-right ms-5 d-flex">
                        <h1
                          className="text-start"
                          dangerouslySetInnerHTML={{
                            __html: service.title,
                          }}
                        />
                        <p
                          dangerouslySetInnerHTML={{
                            __html: service.description,
                          }}
                        />
                        <button className="hero-button py-2 px-3 mt-3 me-auto">
                          Book my free session
                          <span className="bg-white rounded-circle ms-3 ">
                            <FontAwesomeIcon
                              icon={faChevronRight}
                              color="#18548a"
                              width={16}
                            />
                          </span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="partner-container d-flex flex-column w-100 h-auto p-5 justify-content-center align-items-center">
            <h1
              className="wow fadeInUp text-center mb-4"
              data-bs-wow-delay="0.1s"
            >
              <span style={{ color: "#fe3c66" }}>Excel</span>lence in Global
              <br />
              ​Partnerships
            </h1>
            <p className="partner-container-desc">
              VXL is partnered with a vast global network of prestigious
              educational institutes. Our network spans{" "}
              <span style={{ color: "#fe3c66" }}>
                ​Australia, UK, Canada, USA, France, Germany, Spain, Malta, UAE,
                Singapore and Malaysia.
              </span>
              <br />
              <br />
              This extensive global network ensures that our clients get
              unparalleled access to the best universities ​and institutes,
              facilitating well-informed decisions for their academic and
              professional aspirations.
              <br />
              <br />
              Our commitment to excellence extends beyond guidance, providing
              you with the resources and ​expertise necessary to transform your
              educational aspirations into reality.
              <br />
              <br />
              We excel in helping you navigate the world of higher education.
              <span style={{ color: "#fe3c66" }}>You Excel with VXL.</span>
            </p>
            <div className="partner-carousel mt-4">
              <OwlCarousel
                className="carousel-cause owl-carousel d-flex g-0"
                {...brandsOptions}
              >
                {partners.map((partner, index) => {
                  return (
                    <div
                      key={index}
                      className="partner-item d-flex flex-column p-4 align-items-center justify-content-center"
                    >
                      <img src={`${partner}`} alt="partner-logo" />
                    </div>
                  );
                })}
              </OwlCarousel>
            </div>
          </div>

          <div className="team-container d-flex flex-column w-100 h-auto p-5 justify-content-center align-items-center m-0">
            <h1
              className="wow fadeInUp text-center mb-4"
              data-bs-wow-delay="0.1s"
            >
              Meet the Team
            </h1>
            <p>
              We excel in providing exceptional assistance through all aspects
              of the student journey all the way from getting a thorough
              understanding of the career outcomes linked to the courses they
              select, entry requirements and how to meet them, collecting the
              right information and presenting it the right way for the
              applications and most importantly- preparing for the journey in a
              new country.
            </p>
            <a href="/team">
              <button className="hero-button py-2 px-3 mt-3">
                Meet the Team
                <span className="bg-white rounded-circle ms-3 ">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    color="#18548a"
                    width={16}
                  />
                </span>
              </button>
            </a>
          </div>

          {/* <div className="d-flex flex-column faq-container p-5 user-select-none">
            <div className="faq-wrapper d-flex flex-column align-items-center">
              <h1 className="wow fadeInUp" data-bs-wow-delay="0.1s">
                How We Can <span style={{ color: "#fe3c66" }}>Assist</span>
              </h1>
              <p className="mt-3 wow fadeInUp" data-bs-wow-delay="0.5s">
                VXL Educational Consultancy Sri Lanka is your all-in-one partner
                in your educational journey. From eligibility assessments to
                course and university selection, we guide you. We prepare you
                for IELTS/PTE success. We streamline applications and simplify
                visa processes with expert support. Our vast network helps with
                ticket bookings and accommodation.
              </p>
              <div
                className="question-wrapper d-flex flex-column container justify-content-center mt-5 wow fadeInUp"
                data-bs-wow-delay="0.8s"
              >
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
          </div> */}

          {/* <!-- Service Start --> */}
          {/* <div class="container-fluid bg-light my-5 py-6" id="service">
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
          </div> */}
          {/* <!-- Service End --> */}

          {/* <!-- Projects Start --> */}
          {/* <div class="container-xxl py-6 pt-5" id="project">
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
          </div> */}
          {/* <!-- Projects End --> */}

          {/* <!-- Team Start --> */}
          {/* <div class="container-xxl py-6 pb-5" id="team">
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
          </div> */}
          {/* <!-- Team End --> */}

          {/* <!-- Contact Start --> */}
          {/* <div class="container-xxl pb-5" id="contact">
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
          </div> */}
          {/* <!-- Contact End --> */}

          {/* <!-- Map Start --> */}
          {/* <div
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
          </div> */}
          {/* Map Ends */}

          {/* <!-- Copyright Start --> */}
          {/* <footer>
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
          </footer> */}
          {/* <!-- Back to Top --> */}
          {/* <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top">
            <i class="bi bi-arrow-up"></i>
          </a> */}
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;

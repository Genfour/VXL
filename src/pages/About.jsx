import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../components/Navbar";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

export default function About() {
  const [side, setSide] = useState("left");

  useEffect(() => {
    console.log(side);
  }, [side]);
  return (
    <>
      <div className="container-fluid d-flex flex-column about-container my-6 p-5">
        <Navbar />
        <div className="about-wrapper d-flex flex-column px-4">
          <div className="about-heading d-flex flex-row">
            <h1 className="text-start">
              About <span style={{ color: "#fe3c66" }}>Us</span>
            </h1>
            <div className="d-flex flex-row align-items-center ms-5 about-small-navigation">
              <a href="/">Home</a>
              <FontAwesomeIcon
                className="mx-2"
                icon={faAngleRight}
                color="#5A5A5A"
                width={15}
                height={15}
              />
              <a href="/about">About</a>
            </div>
          </div>
          <div className="d-flex flex-column about-body">
            <h2 className="mb-2 mt-5 text-start">
              VXL Education Consultants Pty. Ltd.
            </h2>
            <p className="text-start">
              Established in 2009, VXL Educational Consultancy is a globally
              recognized brand with a strong presence, including offices in
              Australia, Nepal, and Sri Lanka. In 2022, we expanded our services
              to Sri Lanka, with a mission to empower students to pursue higher
              education in renowned institutions in Australia, the UK, Canada,
              and Malaysia. Our commitment to excellence, personalized guidance,
              and comprehensive support sets us apart.
              <br />
              <br />
              At VXL Educational Consultancy Sri Lanka, our dedicated
              professionals ensure a seamless journey for every student, from
              initial consultations to application assistance. We are your
              trusted partner in turning your aspirations into achievements.
              Contact us today and let&apos;s embark on your educational journey
              together.
            </p>
          </div>

          <div
            className="d-flex flex-row about-mid-section mt-5 wow fadeInUp"
            data-bs-wow-delay="0.1s"
          >
            <div
              className="about-mid-section-left p-5"
              style={{
                backgroundColor: side === "left" ? "#0a4c7e" : "white",
                borderWidth: side === "left" ? "0px" : "0px 0px 5px 0px",
              }}
              onMouseEnter={() => setSide("left")}
            >
              <h1
                style={{
                  color: side === "left" ? "#fe3c66" : "	#474747",
                }}
              >
                Vision
              </h1>
              <p
                className="mt-3"
                style={{ color: side === "left" ? "white" : "#5A5A5A" }}
              >
                Envisioning a future where every student achieves their full
                potential, our consultancy is dedicated to guiding students
                towards courses and institutions that best suit their long-term
                interests. We are committed to delivering top-quality services
                and upholding the highest standards of professionalism. Our aim
                is to excel in higher education, forging robust partnerships
                with students, global educational institutions, and affiliated
                organizations to collectively achieve our common goals.
              </p>
            </div>
            <div
              className="about-mid-section-right p-5"
              style={{
                backgroundColor: side === "right" ? "#fe3c66" : "white",
                borderWidth: side === "right" ? "0px" : "0px 0px 5px 0px",
              }}
              onMouseEnter={() => setSide("right")}
            >
              <h1
                style={{
                  color: side === "right" ? "#0a4c7e" : "	#474747",
                }}
              >
                Mission
              </h1>
              <p
                className="mt-3"
                style={{ color: side === "right" ? "white" : "#5A5A5A" }}
              >
                Our mission is to match education-focused students with genuine
                providers, setting industry standards with exceptional service.
                We aim to promote excellence in higher education by providing
                comprehensive, expert support to students and educational
                institutions, ensuring a brighter future for all.
              </p>
            </div>
          </div>

          {/* <div className="team-container d-flex flex-column">
            <h1 className="wow fadeInUp" data-bs-wow-delay="0.1s">
              Our <span style={{ color: "#fe3c66" }}>Team</span>
            </h1>
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
}

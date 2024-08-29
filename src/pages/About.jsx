import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../components/Navbar";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";

export default function About() {
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
              It gives us immense pleasure to introduce VXL Migration &
              Education Consultants Pty. Ltd. We have assisted international
              students within Australia and offshore students from the
              Philippines, Sri Lanka, India, and Nepal to study in Australia.We
              are an Australian-based business established with the primary
              purpose of providing professional, transparent, and friendly
              service to our client base. We have offices in Australia,
              Philippines, Sri Lanka and Nepal. We strictly follow ESOS Act and
              National Code of Practice to ensure transparent service to
              international students and recruit genuine, high-quality students
              to our partner education providers. Our aim is sustainable growth
              through a symbiotic relationship with education providers in
              Abroad. We assist genuine international students who intend to
              attain internationally recognised degrees from Australia and have
              the desire to achieve their dream careers. Our purpose is to
              liaise a smooth transition of international students from their
              home countries into the education providers. We guide them in
              different aspects such as understanding the career outcomes of the
              course they select, entry requirements, collecting required
              documents, and preparing for the journey in a new country.
            </p>
          </div>

          <div className="d-flex flex-row about-mid-section">
            <div className="about-mid-section-left"></div>
            <div className="about-mid-section-right"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {
  faAngleRight,
  faEnvelope,
  faLocation,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import map from "../images/cropped-map.svg";
import { useState } from "react";

export default function Contact() {
  const [section, setSection] = useState(0);
  return (
    <>
      <div className="container-fluid d-flex flex-column about-container my-6 p-5">
        <Navbar />
        <div className="about-wrapper d-flex flex-column px-4">
          <div className="about-heading d-flex flex-row">
            <h1 className="text-start">
              Contact <span style={{ color: "#fe3c66" }}>Us</span>
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
              <a href="/about">Contact</a>
            </div>
          </div>

          <div className="contact-map d-flex flex-row">
            <div className="contact-map-left">
              <div className="contact-form p-5">
                <h1>Get in touch</h1>
                <p className="mb-5">We are here for you! How can we help?</p>
                <div className="contact-input-row">
                  <h1>Name</h1>
                  <input type="text" className="contact-form-input" />
                </div>
                <div className="contact-input-row">
                  <h1>Email</h1>
                  <input type="text" className="contact-form-input" />
                </div>
                <div className="contact-input-row">
                  <h1>Message</h1>
                  <textarea className="contact-form-input" />
                </div>
                <div className="contact-input-row align-items-end">
                  <button type="submit">SEND</button>
                </div>
              </div>
              {/* <div className="popup-map-location map-location-1">
                <h1>Colombo</h1>
              </div>
              <div className="popup-map-location map-location-2">
                <h1>Galle</h1>
              </div>

              <div className="map-header map-header-1"></div>
              <div className="map-header map-header-2"></div> */}
              {/* <img src={map} alt="User Icon" /> */}
            </div>
            <div className="contact-map-right">
              <div
                className="office-container office-1"
                onMouseEnter={() => setSection(1)}
                onMouseLeave={() => setSection(0)}
              >
                <h1>Galle</h1>
                <div className="d-flex flex-row align-items-center">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    style={{
                      width: "20px",
                      height: "20px",
                      transition: "0.7s ease-in-out",
                      color: section === 1 ? "white" : "#5A5A5A",
                    }}
                  />
                  <p className="p-0 m-0 ms-2">Galle, Sri Lanka.</p>
                </div>
                <div className="d-flex flex-row align-items-center mt-2">
                  <FontAwesomeIcon
                    icon={faPhone}
                    style={{
                      width: "15px",
                      height: "15px",
                      transition: "0.7s ease-in-out",
                      color: section === 1 ? "white" : "#5A5A5A",
                    }}
                  />
                  <p className="p-0 m-0 ms-2">+9477 123 1234</p>
                </div>
                <div className="d-flex flex-row align-items-center mt-2">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{
                      width: "15px",
                      height: "15px",
                      transition: "0.7s ease-in-out",
                      color: section === 1 ? "white" : "#5A5A5A",
                    }}
                  />
                  <p className="p-0 m-0 ms-2">info@gmail.com</p>
                </div>
              </div>
              <div
                className="office-container office-2"
                onMouseEnter={() => setSection(2)}
                onMouseLeave={() => setSection(0)}
              >
                <h1>Colombo</h1>
                <div className="d-flex flex-row align-items-center">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    style={{
                      width: "20px",
                      height: "20px",
                      transition: "0.7s ease-in-out",
                      color: section === 2 ? "white" : "#5A5A5A",
                    }}
                  />
                  <p className="p-0 m-0 ms-2">Colombo, Sri Lanka.</p>
                </div>
                <div className="d-flex flex-row align-items-center mt-2">
                  <FontAwesomeIcon
                    icon={faPhone}
                    style={{
                      width: "15px",
                      height: "15px",
                      transition: "0.7s ease-in-out",
                      color: section === 2 ? "white" : "#5A5A5A",
                    }}
                  />
                  <p className="p-0 m-0 ms-2">+9477 123 1234</p>
                </div>
                <div className="d-flex flex-row align-items-center mt-2">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{
                      width: "15px",
                      height: "15px",
                      transition: "0.7s ease-in-out",
                      color: section === 2 ? "white" : "#5A5A5A",
                    }}
                  />
                  <p className="p-0 m-0 ms-2">info@gmail.com</p>
                </div>
              </div>
              <div
                className="office-container office-3"
                onMouseEnter={() => setSection(3)}
                onMouseLeave={() => setSection(0)}
              >
                <h1>Australia</h1>
                <div className="d-flex flex-row align-items-center">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    style={{
                      width: "20px",
                      height: "20px",
                      transition: "0.7s ease-in-out",
                      color: section === 3 ? "white" : "#5A5A5A",
                    }}
                  />
                  <p className="p-0 m-0 ms-2">Melbourn, Australia.</p>
                </div>
                <div className="d-flex flex-row align-items-center mt-2">
                  <FontAwesomeIcon
                    icon={faPhone}
                    style={{
                      width: "15px",
                      height: "15px",
                      transition: "0.7s ease-in-out",
                      color: section === 3 ? "white" : "#5A5A5A",
                    }}
                  />
                  <p className="p-0 m-0 ms-2">+9477 123 1234</p>
                </div>
                <div className="d-flex flex-row align-items-center mt-2">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{
                      width: "15px",
                      height: "15px",
                      transition: "0.7s ease-in-out",
                      color: section === 3 ? "white" : "#5A5A5A",
                    }}
                  />
                  <p className="p-0 m-0 ms-2">info@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

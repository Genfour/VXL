import {
  faFacebookSquare,
  faInstagramSquare,
  faLinkedin,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <>
      <footer>
        <div class="footer-container">
          <div class="footer-section d-flex flex-column justify-content-start">
            <h3 className="me-auto">
              Our
              <br />
              Services
            </h3>
            <ul className="p-3">
              <li>Courses and Career Counselling</li>
              <li>University Applications</li>
              <li>Visa Applications</li>
              <li>IELTS/PTE courses/registration</li>
              <li>OSHC/Insurance</li>
              <li>Onshore Accommodation</li>
            </ul>
          </div>
          <div class="footer-section d-flex flex-column justify-content-start">
            <h3 className="me-auto">
              Global
              <br />
              Destinations
            </h3>
            <ul className="p-3 footer-destinations-list">
              <li>Australia</li>
              <li>UK</li>
              <li>USA</li>
              <li>Canada</li>
              <li>Germany</li>
              <li>France</li>
              <li>Spain</li>
              <li>UAE</li>
              <li>Malta</li>
              <li>Malaysia</li>
            </ul>
          </div>
          <div class="footer-section">
            <h3>Reach out to us: 0117 699 749</h3>
            <div class="flex-grow-1 d-flex flex-row footer-maps-container">
              <div class="d-flex flex-column flex-grow-1">
                <p>Colombo Office</p>
                <div class="map-1"></div>
                <p className="map-address">
                  Level 6, Nugegoda ​Business Centre (RDB ​Building, 80 Nawala
                  Rd, ​Nugegoda 10250
                </p>
              </div>
              <div class="d-flex flex-column flex-grow-1">
                <p>Galle Office</p>
                <div class="map-2"></div>
                <p className="map-address">
                  Shop No 214, 2nd Floor, ​Sanvik Shopping Complex, ​No. 10
                  Wakwella Rd, Galle ​80000
                </p>
              </div>

              <div class="d-flex flex-column" style={{ gap: "10px" }}>
                <FontAwesomeIcon
                  icon={faFacebookSquare}
                  color="white"
                  style={{ width: "25px", height: "25px" }}
                />
                <FontAwesomeIcon
                  icon={faInstagramSquare}
                  color="white"
                  style={{ width: "25px", height: "25px" }}
                />
                <FontAwesomeIcon
                  icon={faTiktok}
                  color="white"
                  style={{ width: "25px", height: "25px" }}
                />
                <FontAwesomeIcon
                  icon={faLinkedin}
                  color="white"
                  style={{ width: "25px", height: "25px" }}
                />
              </div>
            </div>
            {/* <div class="d-flex pt-2">
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
            </div> */}
          </div>
        </div>
        <div class="footer-bottom d-flex flex-row">
          <div className="d-flex flex-row align-items-center justify-content-center p-3 w-100">
            <img src="img/VXL_new_logo.png" className="my-0 py-0" alt="logo" />
            <p className="text-center">
              Copyright © 2024 VXL Education Sri Lanka
              <br />
              <span style={{ fontSize: "0.8rem", color: "#EE3457" }}>
                Powered by Loopy Holdings
              </span>
            </p>
          </div>
          {/* <p>
            &copy; 2024 VXL Education Sri Lanka, All Right Reserved. Designed By{" "}
            <a
              class="border-bottom text-secondary"
              href="https://loopyholdings.com"
            >
              Loopy Holdings
            </a>
          </p> */}
        </div>
      </footer>
      {/* <!-- Back to Top --> */}
      <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i class="bi bi-arrow-up"></i>
      </a>
    </>
  );
}

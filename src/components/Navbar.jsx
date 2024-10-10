import { useEffect, useState } from "react";
import logo from "../images/VXL_new_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [mobileView, setMobileView] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    console.log(isMobileMenuOpen);
  }, [isMobileMenuOpen]);

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

  const handleDropdownClick = () => {
    if (window.innerWidth <= 992) {
      // Only toggle dropdown on click for mobile view
      setDropdownVisible(!dropdownVisible);
    }
  };

  useEffect(() => {
    windowWidth <= 768 ? setMobileView(true) : setMobileView(false);
  }, [windowWidth]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* <nav
        style={{ backgroundColor: "#FAFAFB" }}
        className="navbar-expand-lg navbar-container navbar-light fixed-top shadow py-lg-0 px-4 px-lg-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
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
          className={`collapse navbar-collapse justify-content-between py-2 ${
            isMobileMenuOpen ? "show" : ""
          }`}
          id="navbarCollapse"
        >
          <div className="navbar-nav m-0 p-0">
            <img
              className="brand-logo"
              src={logo}
              style={{ width: "auto", height: "50px" }}
              alt="brand-logo"
              loading="lazy"
            />

            <a href="/" className="nav-item nav-link">
              Home
            </a>
            <a href="/about" className="nav-item nav-link">
              About
            </a>

            <div
              className="nav-item nav-link"
              style={{
                position: "relative",
                cursor: "pointer",
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleDropdownClick}
            >
              Services
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
          <div className="navbar-nav me-auto py-0">
            <a href="#project" className="nav-item nav-link">
              Institutions
            </a>
            <a href="#blog" className="nav-item nav-link">
              Blog
            </a>
            <a href="/contact" className="nav-item nav-link">
              Contact
            </a>
          </div>
        </div>
      </nav> */}

      <div
        className="d-flex flex-row shadow-sm py-3 px-5 w-100 h-auto align-items-center justify-content-between fixed-top bg-white z-100"
        style={{ height: "70px" }}
      >
        <div className="d-flex flex-row">
          <a href="/">
            <img
              className="brand-logo"
              src={logo}
              style={{ width: "auto", height: "40px", marginRight: "50px" }}
              alt="brand-logo"
              loading="lazy"
            />
          </a>
          <ul
            className={`navbar-link-list ${
              mobileView && isMobileMenuOpen ? `mobile` : ``
            } flex-row p-0 m-0 show me-auto`}
          >
            <a href="#study-abroad" className="m-0 p-0">
              <li>Study Abroad</li>
            </a>
            <a href="#visa-services" className="m-0 p-0">
              <li>Visa Services</li>
            </a>
            <a href="#partners" className="m-0 p-0">
              <li>Global Partners</li>
            </a>
            <a href="#presence" className="m-0 p-0">
              <li>Global Presence</li>
            </a>
            <a href="#footer" className="m-0 p-0">
              <li>Contact</li>
            </a>
            <li className="navbar-search-bar">
              <input type="text" placeholder="Search..." />
              <button>
                <FontAwesomeIcon icon={faSearch} color="white" />
              </button>
            </li>
          </ul>
        </div>
        <button
          className="bg-white navbar-mobile-menu-btn hide"
          onClick={() => toggleMobileMenu()}
        >
          <FontAwesomeIcon
            icon={isMobileMenuOpen ? faXmark : faBars}
            height={35}
            color="#5a5a5a"
          />
        </button>
      </div>
    </>
  );
}

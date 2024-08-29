import { useState } from "react";
import logo from "../images/VXL_new_logo.png";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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

  return (
    <>
      {/* <!-- Navbar Start --> */}
      <nav
        style={{ backgroundColor: "#FAFAFB" }}
        /*#422f2f*/
        className="navbar-expand-lg navbar-container navbar-light fixed-top shadow py-lg-0 px-4 px-lg-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        {/* <a href="/" className="navbar-brand d-block d-lg-none">
        <h1 className="text-primary fw-bold m-0">VXL</h1>
      </a> */}
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
              href="/"
              className="nav-item nav-link"
              // style={{ color: "#fff" }}
            >
              Home
            </a>
            <a
              href="/about"
              className="nav-item nav-link"
              // style={{ color: "#fff" }}
            >
              About
            </a>

            {/* Services Dropdown */}
            <div
              className="nav-item nav-link"
              style={{
                // color: "#fff",
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
          <img
            className="m-3"
            src={logo}
            style={{ width: "auto", height: "70px" }}
            alt="brand-logo"
          />
          {/* <a
          href="/"
          className="navbar-brand py-3 px-4 mx-3 d-none d-lg-block"
        >
          <h1 className="text-primary fw-bold m-0">VXL</h1>
        </a> */}
          <div className="navbar-nav me-auto py-0">
            <a
              href="#project"
              className="nav-item nav-link"
              // style={{ color: "#fff" }}
            >
              Institutions
            </a>
            <a
              href="#blog"
              className="nav-item nav-link"
              // style={{ color: "#fff" }}
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
              // style={{ color: "#fff" }}
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
      {/* <!-- Navbar End --> */}
    </>
  );
}

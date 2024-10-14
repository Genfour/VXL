import { useEffect, useState } from "react";
import logo from "../images/VXL_new_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import { HashLink } from "react-router-hash-link";

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
      <div
        className="d-flex flex-row navbar-wrapper shadow-sm py-3 px-5 w-100 h-auto align-items-center justify-content-between fixed-top bg-white z-100"
        style={{ height: "70px" }}
      >
        <div className="d-flex flex-row">
          <HashLink smooth to="/" onClick={() => setIsMobileMenuOpen(false)}>
            <img
              className="brand-logo"
              src={logo}
              style={{ width: "auto", height: "40px", marginRight: "50px" }}
              alt="brand-logo"
              loading="lazy"
            />
          </HashLink>
          <ul
            className={`navbar-link-list ${
              mobileView && isMobileMenuOpen ? `mobile` : ``
            } flex-row p-0 m-0 show me-auto`}
          >
            <li>
              <HashLink
                smooth
                to="/#study-abroad"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Study Abroad
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="/#visa-services"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Visa Services
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="/#partners"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Global Partners
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="/#presence"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Global Presence
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="/#footer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </HashLink>
            </li>
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

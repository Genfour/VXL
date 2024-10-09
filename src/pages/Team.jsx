import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Team() {
  return (
    <>
      <Navbar />
      <div className="team-page-container w-100 h-auto container-fluid user-select-none d-flex flex-column p-0 m-0">
        <div className="a-team-container w-100 d-flex flex-row">
          <div className="a-team-left-container d-flex flex-column align-items-start justify-content-center p-5">
            <h3 class="mb-3 hero-sub-title" style={{ color: "#fe3c66" }}>
              VXL Education Sri Lanka
            </h3>
            <h1
              class="display-3 mb-3 text-start hero-title"
              style={{ color: "#0a4c7e" }}
            >
              The <span style={{ color: "#fe3c66" }}>A</span> Team
            </h1>
            <p className="text-start hero-para">
              Want to study abroad?{" "}
              <span style={{ color: "#fe3c66" }}>
                Having trouble deciding where or how?
              </span>{" "}
              VXL is ready to help you along every step of your study abroad
              ​journey. Meet the team behind the scenes.
            </p>
            <button className="hero-button py-2 px-3 mt-2 me-auto">
              Who is VXL?
              <span className="bg-white rounded-circle ms-3 ">
                <FontAwesomeIcon
                  icon={faChevronRight}
                  color="#18548a"
                  width={16}
                />
              </span>
            </button>
          </div>
          <div className="a-team-right-container d-flex flex-column position-relative">
            <div className="a-team-image-1"></div>
            <div className="a-team-image-2"></div>
            <div className="a-team-image-3"></div>
            <div className="a-team-image-4"></div>
          </div>
        </div>
        <div className="quote-container w-100 d-flex flex-column p-5"></div>
      </div>
      <Footer />
    </>
  );
}

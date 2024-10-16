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
            <h3
              class="wow fadeInUp mb-3 hero-sub-title"
              style={{ color: "#fe3c66" }}
              data-bs-wow-delay="0.1s"
            >
              VXL Education Sri Lanka
            </h3>
            <h1
              class="wow fadeInUp display-3 mb-3 text-start hero-title"
              style={{ color: "#0a4c7e" }}
              data-bs-wow-delay="0.2s"
            >
              The <span style={{ color: "#fe3c66" }}>A</span> Team
            </h1>
            <p
              className="wow fadeInUp text-start hero-para"
              data-bs-wow-delay="0.3s"
            >
              Want to study abroad?{" "}
              <span style={{ color: "#fe3c66" }}>
                Having trouble deciding where or how?
              </span>{" "}
              VXL is ready to help you along every step of your study abroad
              ​journey. Meet the team behind the scenes.
            </p>
            <button
              className="wow fadeInUp hero-button py-2 px-3 mt-2 me-auto"
              data-bs-wow-delay="0.5s"
            >
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
          <div
            className="a-team-right-container wow fadeInUp d-flex flex-column position-relative"
            data-bs-wow-delay="0.5s"
          >
            {/* <div
              className="wow fadeInUp a-team-image-1"
              data-bs-wow-delay="0.1s"
            ></div>
            <div
              className="wow fadeInUp a-team-image-2"
              data-bs-wow-delay="0.2s"
            ></div>
            <div
              className="wow fadeInUp a-team-image-3"
              data-bs-wow-delay="0.3s"
            ></div>
            <div
              className="wow fadeInUp a-team-image-4"
              data-bs-wow-delay="0.4s"
            ></div> */}
          </div>
        </div>
        <div className="quote-container w-100 d-flex flex-row">
          <div
            className="wow fadeInUp quote-left-container d-flex p-5 justify-content-start align-items-center"
            data-bs-wow-delay="0.1s"
          >
            <h1 className="text-start">
              "Coming together is the beginning;
              <br />
              ​staying together is progress; working ​together is success."
              <br />
              <br />- Henry Ford
            </h1>
          </div>
          <div
            className="wow fadeInUp quote-right-container"
            data-bs-wow-delay="0.2s"
          ></div>
        </div>
        <div className="staff-container d-flex flex-column px-5 w-100 h-auto">
          <h1
            className="wow fadeInUp text-start mb-4 staff-container-title"
            data-bs-wow-delay="0.1s"
          >
            <span style={{ color: "#fe3c66" }}>VXL</span> Education Sri Lanka
          </h1>
          <div
            className="wow fadeInUp directors-container d-flex flex-column"
            data-bs-wow-delay="0.2s"
          >
            <div className="directors-row d-flex flex-row">
              <div className="directors-left-container d-flex flex-row align-items-center justify-content-start position-relative">
                <div
                  className="director-image"
                  style={{ backgroundImage: "url(img/staff/team1.png)" }}
                ></div>
                <div className="directors-details-container d-flex flex-column align-items-start justify-content-center py-3 ps-5 pe-3 my-auto">
                  <h1 className="text-start m-0">Ayodhya Kodagoda</h1>
                  <p className="text-start p-0 m-0">
                    Chief Operating Officer (Global) / Country Director - Sri
                    Lanka
                  </p>
                </div>
              </div>
              <div className="directors-right-container d-flex flex-row align-items-center justify-content-start position-relative">
                <div
                  className="director-image"
                  style={{ backgroundImage: "url(img/staff/team2.png)" }}
                ></div>
                <div className="directors-details-container d-flex flex-column align-items-start justify-content-center py-3 ps-5 pe-3 my-auto">
                  <h1 className="text-start m-0">Nihal Kodagoda</h1>
                  <p className="text-start p-0 m-0">Chief Financial Officer</p>
                </div>
              </div>
            </div>
            <div className="directors-row d-flex flex-row">
              <div className="directors-left-container d-flex flex-row align-items-center justify-content-start position-relative">
                <div
                  className="director-image"
                  style={{ backgroundImage: "url(img/staff/team3.png)" }}
                ></div>
                <div className="directors-details-container d-flex flex-column align-items-start justify-content-center py-3 ps-5 pe-3 my-auto">
                  <h1 className="text-start m-0">Surani Fernando</h1>
                  <p className="text-start p-0 m-0">
                    Head of Visas - VXL Education Sri Lanka
                  </p>
                </div>
              </div>
              <div className="directors-right-container d-flex flex-row align-items-center justify-content-start position-relative">
                <div
                  className="director-image"
                  style={{ backgroundImage: "url(img/staff/team4.png)" }}
                ></div>
                <div className="directors-details-container d-flex flex-column align-items-start justify-content-center py-3 ps-5 pe-3 my-auto">
                  <h1 className="text-start m-0">Sithira Kumarapperuma</h1>
                  <p className="text-start p-0 m-0">
                    Student Counsellor - VXL Education Sri Lanka
                  </p>
                </div>
              </div>
            </div>
            <div className="directors-row d-flex flex-row">
              <div className="directors-left-container d-flex flex-row align-items-center justify-content-start position-relative">
                <div
                  className="director-image"
                  style={{ backgroundImage: "url(img/staff/team5.png)" }}
                ></div>
                <div className="directors-details-container d-flex flex-column align-items-start justify-content-center py-3 ps-5 pe-3 my-auto">
                  <h1 className="text-start m-0">Damayanthi Wijenayake</h1>
                  <p className="text-start p-0 m-0">
                    Head of Admissions - VXL Education Sri Lanka
                  </p>
                </div>
              </div>
              <div className="directors-right-container d-flex flex-row align-items-center justify-content-start position-relative">
                <div
                  className="director-image"
                  style={{ backgroundImage: "url(img/staff/team6.png)" }}
                ></div>
                <div className="directors-details-container d-flex flex-column align-items-start justify-content-center py-3 ps-5 pe-3 my-auto">
                  <h1 className="text-start m-0">Hasintha Munasinghe</h1>
                  <p className="text-start p-0 m-0">
                    Visa Counsellor - VXL Education Sri Lanka
                  </p>
                </div>
              </div>
            </div>
            <div className="directors-row d-flex flex-row">
              <div className="directors-left-container d-flex flex-row align-items-center justify-content-start position-relative">
                <div
                  className="director-image"
                  style={{ backgroundImage: "url(img/staff/team7.png)" }}
                ></div>
                <div className="directors-details-container d-flex flex-column align-items-start justify-content-center py-3 ps-5 pe-3 my-auto">
                  <h1 className="text-start m-0">Iroshini Rupasinghe</h1>
                  <p className="text-start p-0 m-0">
                    Chief Operating Officer (Global) / Country Director - Sri
                    Lanka
                  </p>
                </div>
              </div>
              <div className="directors-right-container d-flex flex-row align-items-center justify-content-start position-relative">
                <div
                  className="director-image"
                  style={{
                    backgroundImage: "url(img/girl.png)",
                    borderRadius: "50%",
                    backgroundColor: "#eeeded",
                    border: "5px solid #EE3457",
                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  }}
                ></div>
                <div className="directors-details-container d-flex flex-column align-items-start justify-content-center py-3 ps-5 pe-3 my-auto">
                  <h1 className="text-start m-0">Rashmika Sewwandi</h1>
                  <p className="text-start p-0 m-0">
                    Junior Executive - Student Placements VXL Education Sri
                    Lanka
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="directors-row d-flex flex-row">
              <div className="directors-left-container d-flex flex-row align-items-center justify-content-start position-relative">
                <div
                  className="director-image"
                  style={{
                    backgroundImage: "url(img/boy.png)",
                    borderRadius: "50%",
                    backgroundColor: "#eeeded",
                    border: "5px solid #EE3457",
                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  }}
                ></div>
                <div className="directors-details-container d-flex flex-column align-items-start justify-content-center py-3 ps-5 pe-3 my-auto">
                  <h1 className="text-start m-0">Omar Anees</h1>
                  <p className="text-start p-0 m-0">
                    Business Development Manager - VXL Education Sri Lanka
                  </p>
                </div>
              </div>
              <div className="directors-right-container d-flex flex-row align-items-center justify-content-start position-relative"></div>
            </div> */}
          </div>
        </div>

        <div className="join-container d-flex flex-column px-5 w-100 h-auto">
          <h1
            class="wow fadeInUp display-3 mb-3 text-start"
            style={{ color: "#0a4c7e" }}
            data-bs-wow-delay="0.1s"
          >
            Want to be a part of{" "}
            <span style={{ color: "#fe3c66" }}>excellence?</span>
          </h1>
          <p
            className="wow fadeInUp text-start hero-para"
            data-bs-wow-delay="0.2s"
          >
            We are always on the lookout for people with the drive to{" "}
            <span style={{ color: "#fe3c66" }}>excel</span>. Talk to us about
            how you could be a part of ​one of Sri Lanka’s best study
            abroad/visa consulting teams!
          </p>
          <button
            className="wow fadeInUp hero-button py-2 px-3 mt-2 me-auto"
            data-bs-wow-delay="0.5s"
          >
            Get in touch!
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
      <Footer />
    </>
  );
}

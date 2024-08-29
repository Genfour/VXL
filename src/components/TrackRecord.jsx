import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CountUp from "react-countup";

export default function TrackRecord({ icon, color, count, heading }) {
  return (
    <div className="d-flex flex-column track-record-item-wrapper">
      <div
        className="d-flex track-record-item flex-column align-items-center mb-3"
        style={{ borderColor: color }}
      >
        <div
          style={{
            borderStyle: "dotted",
            borderWidth: "1px",
            borderRadius: "50%",
            padding: "3px",
            width: "auto",
            height: "auto",
          }}
        >
          <div
            className="track-circle d-flex justify-content-center align-items-center"
            style={{ backgroundColor: color }}
          >
            <FontAwesomeIcon
              icon={icon}
              style={{ width: "35px", height: "35px" }}
              color="white"
            />
          </div>
        </div>
        <div
          className="track-space-bar"
          style={{ backgroundColor: color }}
        ></div>
      </div>
      <h2 style={{ color: color }} className="text-center">
        <CountUp duration={3} end={count} />
        {heading === "Satisfied Clients" || heading === "Visas" ? (
          <FontAwesomeIcon icon={faPlus} width={15} height={15} />
        ) : (
          ""
        )}
      </h2>
      <p>{heading}</p>
    </div>
  );
}

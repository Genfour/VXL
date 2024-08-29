import { useEffect, useState } from "react";

export default function Faq({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  return (
    <>
      <div className="faq-item px-3 py-3">
        <div
          className="d-flex flex-row faq-clicker justify-content-between"
          onClick={() => setIsOpen(!isOpen)}
        >
          {question}
          <i
            className={isOpen ? "bi bi-dash-lg" : "bi bi-plus-lg"}
            style={{ color: "#0a4c7e", width: "25px", height: "25px" }}
          ></i>
        </div>
        {/* <span
          className={`d-flex faq-space-holder ${isOpen ? `unWrap` : `wrap`}`}
          style={{ width: "100%" }}
        ></span> */}
        <div
          className={`text-start faq-answer ${
            isOpen ? `d-flex unWrap` : `wrap`
          }`}
        >
          {answer}
        </div>
      </div>
    </>
  );
}

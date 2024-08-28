/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

export default function CarouselItem({ image, index, currentIndex, active }) {
  return (
    <div
      className={`slide ${index === currentIndex ? "active" : ""} bg-white col`}
      style={{
        height: "100%",
      }}
    >
      <div
        className="d-flex flex-column p-0 m-0"
        style={{
          width: "100%",
          height: "100%",
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* <img
          className="helping-brand-icon"
          style={{ width: title == "Madeena Hotel" ? "100px" : "150px" }}
          src={image}
          alt="Image"
        /> */}
        {/* <h1 className="h1 mt-3 my-4 helping-brands-title">{title}</h1>
        <p className="helping-brands-content">{content}</p> */}
      </div>
    </div>
  );
}

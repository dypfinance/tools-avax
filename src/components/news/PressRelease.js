import React from "react";
import Clock from "./assets/clock.svg";

const PressRealease = ({ title, image, date, link }) => {
  return (
    <div className="single-press-wrapper">
      <div className="row m-0" style={{ gap: 20 }}>
        <img src={image} alt="" className="press-image" />
        <div className="date-wrapper-press">
          <a href={link} target="_blank">
            <h6 className="press-title">{title}</h6>
          </a>

          <div className="d-flex align-items-center" style={{ gap: 10 }}>
            <img src={Clock} alt="" style={{ width: "auto" }} />
            <h6 className="press-date-content">{date}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressRealease;

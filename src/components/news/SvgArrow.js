import React from "react";
import Arrow from "../../assets/arrow.svg";

const SvgArrow = () => {
  return (
    <div>
      <img src={Arrow} alt="" style={{ position: "relative", top: "4rem", cursor: 'pointer', marginLeft: 10 }} />
    </div>
  );
};

export default SvgArrow;

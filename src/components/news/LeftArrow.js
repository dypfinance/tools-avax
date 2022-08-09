import React from "react";
import Arrow from "../../assets/arrow.svg";

const LeftArrow = () => {
  return (
    <div>
      <img src={Arrow} alt="" style={{ position: "relative", top: "4rem", cursor: 'pointer', transform: 'rotate(180deg)', marginRight: 10 }} />
    </div>
  );
};

export default LeftArrow;

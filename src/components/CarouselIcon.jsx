import React from "react";

function CarouselIcon({ size = 14, name = "fa-chevron-circle-right" }) {
  return (
    <div style={{ fontSize: `${size}px`, color: "black" }}>
      <i className={`fa ${name}`}></i>
    </div>
  );
}
export default CarouselIcon;

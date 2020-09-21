import React from "react";
import { Carousel } from "react-bootstrap";
import { connect } from "react-redux";

const CarouselIcon = ({ size = 14, name = "fa-chevron-circle-right" }) => (
  <div style={{ fontSize: `${size}px`, color: "black" }}>
    <i className={`fa ${name}`}></i>
  </div>
);

function Banner({ banners }) {
  return (
    <Carousel
      interval={null}
      nextIcon={<CarouselIcon size={50} name="fa-chevron-circle-right" />}
      prevIcon={<CarouselIcon size={50} name="fa-chevron-circle-left" />}
    >
      {banners.map((banner, index) => {
        return (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 h-100 carousel-img-item"
              src={banner.img}
              alt={`slide ke-${index}`}
            />
            <Carousel.Caption className="custom-caption">
              <h3>{banner.title}</h3>
              <p>{banner.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

const mapStateToProps = (state) => {
  return {
    banners: state.banners,
  };
};

export default connect(mapStateToProps)(Banner);

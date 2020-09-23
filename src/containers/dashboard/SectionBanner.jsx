import React from "react";
import { Carousel } from "react-bootstrap";
import { connect } from "react-redux";
import CarouselIcon from "../../components/CarouselIcon";

function Banner({ banners }) {
  return (
    <Carousel
      nextIcon={<CarouselIcon size={50} name="fa-chevron-circle-right" />}
      prevIcon={<CarouselIcon size={50} name="fa-chevron-circle-left" />}
    >
      {banners.map((banner, index) => {
        return (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 banner-img"
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

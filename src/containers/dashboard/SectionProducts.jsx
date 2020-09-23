import React from "react";
import { Button, Carousel } from "react-bootstrap";
import { connect } from "react-redux";
import CarouselIcon from "../../components/CarouselIcon";

function Products({ products }) {
  return (
    <div className="section-padd">
      <h2 className="line">Produk Kami</h2>
      <Carousel
        interval={null}
        nextIcon={<CarouselIcon size={50} name="fa-chevron-circle-right" />}
        prevIcon={<CarouselIcon size={50} name="fa-chevron-circle-left" />}
      >
        {products.map((product, index) => {
          return (
            <Carousel.Item key={index}>
              <div className="product-container">
                <div className="left">
                  <img src={product.picture} alt={`slide ke-${index}`} />
                </div>
                <div className="right ">
                  <div className="card">
                    <div className="card-header">{product.productName}</div>
                    <div className="card-body">
                      {product.description}
                    </div>
                    <div className="card-footer">
                      <Button variant="light" className="btn-main" size="sm">
                        Detail Produk
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps)(Products);

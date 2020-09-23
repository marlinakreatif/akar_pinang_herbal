import React from "react";
import { Carousel } from "react-bootstrap";
import { connect } from "react-redux";
import CarouselIcon from "../../components/CarouselIcon";

const renderCarouselItem = (testimoni_comment) => {
  if (!testimoni_comment) return null;
  let columns = testimoni_comment.map((data, index) => {
    return `<div class="col-4">
              <div class="card testimoni">
                <div class="card-header">${data.name}</div>
                <div class="card-body">
                  <img src=${data.picture} alt="" />
                  <p>${data.comment}</p>
                </div>
              </div>
            </div>`;
  });

  let combinedColumns = "";
  let newColumns = [];
  for (let i = 0; i < columns.length; i++) {
    combinedColumns += columns[i];

    if ((i !== 0 && i % 3 === 2) || i === columns.length - 1) {
      newColumns.push(combinedColumns);
      combinedColumns = "";
    }
  }

  console.log("NEW COLUMN", newColumns);
  return newColumns.map((column, index) => {
    return (
      <Carousel.Item key={index}>
        <div
          className="row justify-content-center"
          style={{ minHeight: "70vh",padding:"20px 125px" }}
          dangerouslySetInnerHTML={{ __html: column }}
        ></div>
      </Carousel.Item>
    );
  });
};

function Testimoni({ testimoni_comment }) {
  return (
    <div className="section-padd">
      <h2 className="line black">Testimoni</h2>
      <Carousel
        interval={5000}
        nextIcon={<CarouselIcon size={50} name="fa-chevron-circle-right" />}
        prevIcon={<CarouselIcon size={50} name="fa-chevron-circle-left" />}
      >
        {renderCarouselItem(testimoni_comment)}
      </Carousel>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    testimoni_comment: state.testimoni_comment,
  };
};

export default connect(mapStateToProps)(Testimoni);

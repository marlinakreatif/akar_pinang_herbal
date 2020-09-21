import React from "react";
import { Media } from "react-bootstrap";
import { connect } from "react-redux";

function Biografi({ biografi }) {
  if (!biografi) {
    return <span>loading....</span>;
  }
  return (
    <div className="section-padd">
      <div className="container">
        <div className="row">
          <div className="col-10 offset-1">
            <Media>
              <img
                width={300}
                height={400}
                className="mr-3"
                src={biografi.profile_picture}
                alt="Generic placeholder"
              />
              <Media.Body>
                <h1>{`Biografi ${biografi.name}`}</h1>
                <p>{biografi.history}</p>
              </Media.Body>
            </Media>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    biografi: state.biografi,
  };
};

export default connect(mapStateToProps)(Biografi);

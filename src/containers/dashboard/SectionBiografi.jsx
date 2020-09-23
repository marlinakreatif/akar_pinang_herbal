import React from "react";
import { Media } from "react-bootstrap";
import { connect } from "react-redux";

function Biografi({ biografi }) {
  if (!biografi) {
    return <span>loading....</span>;
  }
  return (
    <div className="section-padd">
      <h2 className="line black">Biografi</h2>

      <Media className="biografi-media">
        <img src={biografi.profile_picture} alt="Generic placeholder" />
        <Media.Body>
          <h4>{biografi.name}</h4>
          <p>{biografi.history}</p>
        </Media.Body>
      </Media>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    biografi: state.biografi,
  };
};

export default connect(mapStateToProps)(Biografi);

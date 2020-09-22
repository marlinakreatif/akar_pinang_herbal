import React from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
function News({ news }) {
  return (
    <div className="section-padd">
      <h2 className="line black">News</h2>
      <div className="container">
        <div className="row">
          {news.slice(0, 3).map((data, index) => {
            return (
              <div className="col-4" key={index}>
                <div className="card news">
                  <div className="card-header">
                    <h4>{data.title}</h4>
                  </div>
                  <div className="card-body ">
                    <img src={data.picture} alt="news_picture" />
                    <div className="preview_content">
                      <p>{data.content}</p>
                    </div>
                  </div>
                  <div className="card-footer">
                    <Button variant="light" className="btn-main">
                      Detail News
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    news: state.news,
  };
};

export default connect(mapStateToProps)(News);

import React from "react";
import { Media } from "react-bootstrap";

export default function Biografi(props) {
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
                src="/assets/biografi.png"
                alt="Generic placeholder"
              />
              <Media.Body>
                <h1>Biografi H. Andi Muhammad</h1>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin commodo. Cras purus odio,
                  vestibulum in vulputate at, tempus viverra turpis. Fusce
                  condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                  congue felis in faucibus.
                </p>
              </Media.Body>
            </Media>
          </div>
        </div>
      </div>
    </div>
  );
}

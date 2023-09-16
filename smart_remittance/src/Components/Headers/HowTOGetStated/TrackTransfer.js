import React, { Component } from "react";
import "./ThirdPart.css";
import first from "./first.png";
import second from "./second.png";
import third from "./third.png";

import { Row, Col, Container } from "react-bootstrap";

class TrackTransfer extends Component {
  render() {
    return (
      <div className="how_to_get_started">
       
        <Container fluid>
          <Row>
            <Col md={4}>
              <div className="third_part">
                <img className="images" src={first} alt="first_image" />
                <h4>Create your Account</h4>
              </div>
            </Col>
            <Col md={4}>
              <div className="third_part">
                <img className="images" src={second} alt="second_image" />
                <h4>Add your Recepient</h4>
              </div>
            </Col>
            <Col md={4}>
              <div className="third_part">
                <img className="images" src={third} alt="third_image" />
                <h4>Transfer your Money</h4>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default TrackTransfer;

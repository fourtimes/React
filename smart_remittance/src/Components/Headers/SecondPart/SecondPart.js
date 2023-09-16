import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import sm from "./sm.png";
import aus from "./aus.png";
import india from "./india.png";
import "./SecondPart.css";
const SecondPart = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col md={6}>
            <div className="secondPart_left">
              <Carousel controls={false}>
                <Carousel.Item interval={5000}>
                  <div className="d-block w-100">
                    <div className="carousel_heading">
                      <h4>Send money abroad with Smart</h4>
                    </div>
                    <div className="carousel_heading">
                      <h4>Rem.</h4>
                    </div>
                    <h6>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do
                      <br /> eiusmod tempor
                    </h6>
                    <div className="learn_secondPart">
                      Learn more &nbsp; <span>&#10132;</span>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                  <div className="d-block w-100">
                    <div className="carousel_heading">
                      <h4>Make you Money Recieve Faster.</h4>
                    </div>
                    <h6>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do
                      <br /> eiusmod tempor
                    </h6>
                    <div className="learn_secondPart">
                      Learn more &nbsp; <span>&#10132;</span>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                  <div className="d-block w-100">
                    <div className="carousel_heading">
                      <h4>Secure way to Track Money with </h4>
                    </div>
                    <div className="carousel_heading">
                      <h4>Smart Rem</h4>
                    </div>
                    <h6>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do
                      <br /> eiusmod tempor
                    </h6>
                    <div className="learn_secondPart">
                      Learn more &nbsp;<span>&#10132;</span>
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
              <div className="sitting_logo">
                <img className="logo" src={sm} alt="Logo" />
              </div>
            </div>
          </Col>
          <Col md={6} className="right">
            <form className="secondPart_form">
              <div>
                <label>
                  <span>When you send</span>
                </label>
                <input className="input100" type="text" value="1000" />
                <div className="aus_logo">
                  <img src={aus} alt="ausFlag" />
                  <b style={{ fontSize: "12px" }}> AUD</b>
                </div>
              </div>
              <div>
                <label>
                  <span>Recepient gets</span>
                </label>
                <input
                  className="input100"
                  type="text"
                  name="email"
                  value="49005.00"
                />
                <div className="aus_logo">
                  <img className="india_logo" src={india} alt="indiaFlag" />
                  <b style={{ fontSize: "12px" }}> IND</b>
                </div>
              </div>
              <button style={{ width: "350px" }} type="button" className="btn">
                Get Started
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default SecondPart;

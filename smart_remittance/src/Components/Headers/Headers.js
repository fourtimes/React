import React from "react";
import { Navbar, Container, Row, Col } from "react-bootstrap";
import SecondPart from "./SecondPart/SecondPart";
import headerLogoo from "./headerLogoo.png";
import ThirdPart from "./HowTOGetStated/ThirdPart";
import "./Headers.css";

const Headers = () => {
  return (
    <div className="home_page">
      <Navbar>
        <Container className="heading">
          <Row>
            <Col md={6}>
              <div className="mainlogo">
                <img src={headerLogoo} alt="logo" />
              </div>
            </Col>
            <Col md={6}>
              <ul className="justify-content-end">
                <li>
                  <a href="/moneytransfer">Money Transfer</a>
                  <a href="/register">Register</a>
                  <a href="/login">Login</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Navbar>
      <SecondPart />
      <ThirdPart />
    </div>
  );
};

export default Headers;

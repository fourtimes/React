import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { MDBCloseIcon } from "mdbreact";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import aus from "../Headers/SecondPart/aus.png";
import "./Register.css";
import axios from "axios";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      mobile_number: "",
    };
  }

  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/register/registerLogin", this.state)
      .then((response) => {
        console.log("The registration details inserted");
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const { email, mobile_number } = this.state;
    console.log(this.state);
    return (
      <div className="loginn">
        <Container fluid className="login_page">
          <Row>
            <Col md={6} className="welcome_message">
              <div>
                <Container>
                  <Row>
                    <Col md={6}>
                      <img src={logo} alt="logo" />
                    </Col>
                    <Col className="mount_logo" md={6}>
                      {/* <img src={mount} alt=""mount/> */}
                    </Col>
                  </Row>
                </Container>

                <h5>Welcome Aboard!</h5>
                <h5>to Smart Rem.</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur <br />
                  adipisicing elit, sed do eiusmod tempor
                </p>
                <div className="learn">
                  Learn more <span>&#10132;</span>
                </div>
              </div>
            </Col>
            <Col md={6} className="register_page">
              <div>
                <form className="register_form" onSubmit={this.submitHandler}>
                  <Container>
                    <Row>
                      <Col md={6}>
                        <h4>Registration</h4>
                      </Col>
                      <Col className="remove_icon" md={6}>
                        {/* <i  className="glyphicon glyphicon-remove"></i> */}
                        <MDBCloseIcon
                          onClick={(event) => (window.location.href = "/")}
                        />
                      </Col>
                    </Row>
                  </Container>
                  <Container>
                    <Row>
                      <Col md={4} className="reg_details">
                        <div className="number">
                          <span>1</span>
                        </div>
                        <div className="authentication">Authentication</div>
                      </Col>
                      {/* <hr style={{ color: "#060668", backgroundColor: "#060668", height: 1}}/> */}
                      <Col md={4} className="reg_details">
                        <div className="number">
                          <span>2</span>
                        </div>
                        <div className="authentication">Personal Details</div>
                      </Col>
                      {/* <hr style={{ color: "#060668", backgroundColor: "#060668", height: 1}}/> */}
                      <Col md={4} className="reg_details">
                        <div className="number">
                          <span>3</span>
                        </div>
                        <div
                          className="authentication"
                          style={{ paddingRight: "10px" }}
                        >
                          Approvals
                        </div>
                      </Col>
                    </Row>
                  </Container>
                  <div className="choose_your_country">
                    {/* <label>
                       <span>When you send</span>
                    </label> */}
                    <input
                      className="input100"
                      type="text"
                      value="Choose your Country"
                    />
                    <div className="aus_logo">
                      <img src={aus} alt="ausFlag" />
                      <b style={{ fontSize: "12px" }}> AUD</b>
                    </div>
                  </div>
                  <div className="email">
                    <label>
                      Your Email Address <span>*</span>
                    </label>
                    <div className="verify">
                      <button style={{ fontSize: "11px" }}> Verify</button>
                    </div>
                    <input
                      className="input100"
                      type="email"
                      name="email"
                      value={email}
                      onChange={this.onChangeHandler}
                    />
                  </div>
                  <br />
                  <br />
                  <div className="email">
                    <label for="mobile_number">
                      <img src={aus} alt="ausFlag" /> AUS(+61) Your Mobile
                      Number <span>*</span>
                    </label>
                    <div className="verify">
                      <button style={{ fontSize: "11px" }}> Verify</button>
                    </div>
                    <input
                      className="input100"
                      type="tel"
                      id="mobile_number"
                      name="mobile_number"
                      value={mobile_number}
                      onChange={this.onChangeHandler}
                    />
                  </div>
                  <button
                    style={{ margin: "30px 20px 10px 30px" }}
                    type="submit"
                    className="btn"
                  >
                    Authentication
                  </button>
                </form>
                <div className="another_login">
                  <ul>
                    If you are already a Register User{" "}
                    <Link to="/login" style={{ textDecoration: "underline" }}>
                      Login
                    </Link>{" "}
                    here
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Register;

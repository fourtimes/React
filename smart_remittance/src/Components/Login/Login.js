import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./Login.css";
import { MDBCloseIcon } from "mdbreact";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/login/loginRegistration", this.state)

      .then((response) => {
        console.log("The successfylly logined");
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const { username, password } = this.state;
    console.log(this.state);
    return (
      <div className="loginn">
        <Container fluid className="login_page">
          <Row>
            <Col md={6} className="login_welcome_message">
              <div className="login_welcome_message">
                <h4>Smart Remittance</h4>
                <h5>Welcome Aboard!</h5>
                <h5> to Smart Rem.</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur <br />
                  adipisicing elit, sed do eiusmod tempor
                </p>
                <div className="learn">
                  Learn more <span>&#10132;</span>
                </div>
              </div>
            </Col>
            <Col md={6} className="login_form">
              <form className="login_form">
                <Container>
                  <Row>
                    <Col md={6}>
                      <h4>Login to Continue</h4>
                    </Col>
                    <Col className="remove_icon" md={6}>
                      {/* <i  className="glyphicon glyphicon-remove"></i> */}
                      <MDBCloseIcon
                        onClick={(event) => (window.location.href = "/")}
                      />
                    </Col>
                  </Row>
                </Container>
                <div className="form-group">
                  <div
                    className="wrap-input100 validate-input"
                    data-validate="Valid email is required: ex@abc.xyz"
                  >
                    <input
                      className="input100"
                      type="text"
                      name="username"
                      value={username}
                      onChange={this.onChangeHandler}
                    />
                    <span className="focus-input100"></span>
                    <span className="label-input100">Username</span>
                  </div>
                  <div className="form-details">
                    Your Registered Email Address
                  </div>
                </div>

                <div className="form-group">
                  <div
                    className="wrap-input100 validate-input"
                    data-validate="Password is required"
                  >
                    <input
                      className="input100"
                      type="password"
                      name="password"
                      value={password}
                      onChange={this.onChangeHandler}
                    />
                    <span className="focus-input100"></span>
                    <span className="label-input100">Password</span>
                  </div>
                  <Container>
                    <Row className="help-details">
                      <Col md={6}>Need help?</Col>
                      <Col md={6}>Forgot Password?</Col>
                    </Row>
                  </Container>
                </div>
                <button type="login" className="btn btn-primary btn-block">
                  Login
                </button>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Login;

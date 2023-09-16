import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Headers from "./Components/Headers/Headers";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.scss';
function App() {
  return (
    <Router>
      <Container>
        <Switch>
          <Headers exact path="/" />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Register" component={Register} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;

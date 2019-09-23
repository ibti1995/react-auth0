import React, { Component } from "react";
import Section from "./Section";
import Body from "./Body";
import "./body.css";
import "bootstrap/dist/css/bootstrap.css";
class Home extends Component {
  render() {
    return (
      <div>
        <Section />
        <Body />
      </div>
    );
  }
}

export default Home;

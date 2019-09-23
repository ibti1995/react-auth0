import React, { Component } from "react";
import "./body.css";
import "bootstrap/dist/css/bootstrap.css";
class Section extends Component {
  render() {
    return (
      <div>
        <section className="jumbotron text-center">
          <div className="container">
            <h1 className="jumbotron-heading">AutoAgency</h1>
            <p className="lead text-muted">
              Welcome to AutoAgency <br />
              Here you can Learn AutoCode for Free
            </p>
          </div>
        </section>
      </div>
    );
  }
}

export default Section;

import React, { Component } from "react";
import "./body.css";
import "bootstrap/dist/css/bootstrap.css";

import { Link } from "react-router-dom";
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
            <p>
              <Link to="/Login" class="btn btn-primary my-2">
                Sign in
              </Link>
              <Link to="/Subscribe" class="btn btn-secondary my-2">
                Sign up
              </Link>
            </p>
          </div>
        </section>
      </div>
    );
  }
}

export default Section;

import React, { Component } from "react";
import { Link } from "react-router-dom";
class Nav extends Component {
  render() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Profile">Profile</Link>
        </li>

        <li>
          <Link to="/Admin">Admin</Link>
        </li>
        <li>
          <Link to="/Subscribe">Subscribe</Link>
        </li>
        <li>
          <Link to="/firstPage">fisrt Page</Link>
        </li>
        <li>
          <Link to="/SecondPage">Secod page</Link>
        </li>
        <li>
          <Link to="/TrainingCrud">Training Crud</Link>
        </li>
      </ul>
    );
  }
}

export default Nav;

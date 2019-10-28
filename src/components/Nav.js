import React, { Component } from "react";
import { Link } from "react-router-dom";
class Nav extends Component {
  render() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        {localStorage.getItem("user") ? (
          <ul>
            <li>
              <Link to="/firstPage">Cours</Link>
            </li>
            <li>
              <Link to="/SecondPage">Forfaits</Link>
            </li>
            <li>
              <Link to="/Profile">Profile</Link>
            </li>
            <li>
              <Link to="/logout">logout</Link>
            </li>
          </ul>
        ) : (
          <></>
        )}

        {localStorage.getItem("Admin") ? (
          <ul>
            <li>
              <Link to="/Admin">Admin</Link>
            </li>
            <li>
              <Link to="/TrainingCrud">Training Crud</Link>
            </li>
            <li>
              <Link to="/logout">logout</Link>
            </li>
          </ul>
        ) : (
          <></>
        )}
      </ul>
    );
  }
}

export default Nav;

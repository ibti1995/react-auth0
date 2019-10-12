import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import UserService from "../../services/UserService";
import "bootstrap/dist/css/bootstrap.css";
import "./Login.css";
import { Link } from "react-router-dom";
export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

/*  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }*/

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let user = {
      email: this.state.email,
      password: this.state.password
    };
    UserService.login(user).then(res => {
      console.log("res", res.status);
      if (res.status === 200) {
        console.log("res.status", res.status);
        this.props.history.push("/");
      } else {
        console.log("erreuur");
      }
    });
  };

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bssize="large">
            <FormLabel>Email</FormLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bssize="large">
            <FormLabel>Password</FormLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button block type="submit">
            Login
          </Button>
        </form>
        <div className="Login">
          <form>
            <label>Vous n'avez pas encore de compte ?</label>
            <Link
              className="c1"
              to="/Subscribe"
              className="btn btn-sm bg-warning"
            >
              Subscribe
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

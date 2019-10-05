import React, { Component } from "react";
import UserService from "../../services/UserService";
class Subscribe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      lastName: "",
      email: "",
      dateOfBirth: "",
      password: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeEmai = this.onChangeEmai.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
  }

  onSubmit(values) {
    values.preventDefault();
    let user = {
      nom: this.state.name,
      prenom: this.state.lastName,
      date_naiss: this.state.dateOfBirth,
      email: this.state.email,
      password: this.state.password
    };

    UserService.subscribe(user).then(response => {
      console.log("response heeeeeeeeere", response);
    });
  }
  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 4 &&
      this.state.name > 2 &&
      this.state.lastName > 2
    );
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }
  onChangeLastName(e) {
    this.setState({
      lastName: e.target.value
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }
  onChangeEmai(e) {
    this.setState({
      email: e.target.value
    });
  }
  onChangeDate(e) {
    this.setState({
      dateOfBirth: e.target.value
    });
  }
  /* handleSubmit = event => {
    event.preventDefault();
  };
*/
  render() {
    return (
      <div className="Login">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name : </label>
            <input
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>
          <div className="form-group">
            <label>Last name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.lastName}
              onChange={this.onChangeLastName}
            />
          </div>
          <div className="form-group">
            <label>Date of Birth: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.dateOfBirth}
              onChange={this.onChangeDate}
            />
          </div>
          <div className="form-group">
            <label>E-mail: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmai}
            />
          </div>
          <div className="form-group">
            <label>Password: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Subscribe"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
export default Subscribe;

/*




<Formik
initialValues={this.initialValues}
validate={this.validate}
onSubmit={this.onSubmit}
>
{props => (
  <Form>
    <fieldset className="form-group">
      <label>Name</label>
      <Field className="form-control" type="text" name="name" />
    </fieldset>
    <fieldset className="form-group">
      <label> Last name</label>
      <Field className="form-control" type="text" name="lastName" />
    </fieldset>
    <fieldset className="form-group">
      <label>Date of birth</label>

      <Field
        className="form-control"
        type="text"
        name="dateOfBirth"
      />
    </fieldset>
    <fieldset className="form-group">
      <label>Email</label>

      <Field className="form-control" type="text" name="email" />
    </fieldset>
    <fieldset className="form-group">
      <label>Password</label>

      <Field className="form-control" type="text" name="password" />
    </fieldset>
    <button className="btn btn-success" type="submit">
      Save
    </button>
  </Form>
)}
</Formik>*/

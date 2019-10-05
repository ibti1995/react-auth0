import React, { Component } from "react";
import PermisAutoService from "../../services/PermisAutoService";

class AddPermis extends Component {
  constructor(props) {
    super(props);
    this.state = { desc: "", prix: "", titre: "" };
    this.onChangeDesc = this.onChangeDesc.bind(this);
    this.onChangePrix = this.onChangePrix.bind(this);
    this.onChangeTitre = this.onChangeTitre.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(values) {
    values.preventDefault();
    let permis = {
      titre: this.state.titre,
      prix: this.state.prix,
      description: this.state.desc
    };
    console.log("userrrr", permis);
    PermisAutoService.addPermisAuto(permis).then(response => {
      console.log("response heeeeeeeeere", response);
    });
  }
  onChangeDesc(e) {
    this.setState({
      desc: e.target.value
    });
  }

  onChangeTitre(e) {
    this.setState({
      titre: e.target.value
    });
  }
  onChangePrix(e) {
    this.setState({
      prix: e.target.value
    });
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <tr>
          {console.log("je suis laaaa")}
          <td></td>
          <td>
            <input
              type="text"
              className="form-control"
              value={this.state.titre}
              onChange={this.onChangeTitre}
            />
          </td>
          <td>
            <input
              type="text"
              className="form-control"
              value={this.state.desc}
              onChange={this.onChangeDesc}
            />
          </td>
          <td>
            <input
              type="text"
              className="form-control"
              value={this.state.prix}
              onChange={this.onChangePrix}
            />
          </td>
          <td>
            <button className="btn btn-warning" type="submit">
              Add
            </button>
          </td>
        </tr>
      </form>
    );
  }
}
export default AddPermis;

import React from "react";
import "./popupStyle.css";
import PermisAutoService from "../../services/PermisAutoService";
class Popup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      titre: "",
      description: "",
      prix: ""
    };
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
      <div className="popup">
        <div className="popup\_inner">
          <h1>{this.props.text}</h1>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Titre : </label>
              <input
                type="text"
                className="form-control"
                value={this.state.titre}
                onChange={this.onChangeTitre}
              />
            </div>
            <div className="form-group">
              <label>Description: </label>
              <input
                type="text"
                className="form-control"
                value={this.state.desc}
                onChange={this.onChangeDesc}
              />
            </div>
            <div className="form-group">
              <label>Prix: </label>
              <input
                type="text"
                className="form-control"
                value={this.state.prix}
                onChange={this.onChangePrix}
              />
            </div>
            <button className="btn btn-warning" type="submit">
              Ajouter
            </button>
          </form>
          <button onClick={this.props.closePopup}>close me</button>
        </div>
      </div>
    );
  }
}

export default Popup;

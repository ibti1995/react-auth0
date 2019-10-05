import React, { Component } from "react";
import TrainingService from "../../services/TrainingService";

class AddTraining extends Component {
  constructor(props) {
    super(props);

    this.state = {
      titre: "",
      description: "",
      type: "",
      url: ""
    };
    this.onChangeDesc = this.onChangeDesc.bind(this);
    this.onChangeType = this.onChangeType.bind(this);
    this.onChangeUrl = this.onChangeUrl.bind(this);
    this.onChangeTitre = this.onChangeTitre.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(values) {
    values.preventDefault();
    let training = {
      desc_entrainement: this.state.description,
      titre_entrainement: this.state.titre,
      type_entrainement: this.state.type,
      url: this.state.url
    };

    TrainingService.addTraining(training).then(response => {
      console.log("response heeeeeeeeere", response);
    });
  }
  onChangeDesc(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeTitre(e) {
    this.setState({
      titre: e.target.value
    });
  }
  onChangeUrl(e) {
    this.setState({
      url: e.target.value
    });
  }
  onChangeType(e) {
    this.setState({
      type: e.target.value
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
                value={this.state.description}
                onChange={this.onChangeDesc}
              />
            </div>
            <div className="form-group">
              <label>Type: </label>
              <input
                type="text"
                className="form-control"
                value={this.state.type}
                onChange={this.onChangeType}
              />
            </div>
            <div className="form-group">
              <label>url: </label>
              <input
                type="text"
                className="form-control"
                value={this.state.url}
                onChange={this.onChangeUrl}
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

export default AddTraining;

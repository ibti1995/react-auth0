import React, { Component, Fragment } from "react";
import TrainingService from "../../services/TrainingService";
import AddTraining from "./AddTraining";
import { MDBBtn } from "mdbreact";
import "./popupStyle.css";

class TrainingCrud extends Component {
  constructor(props) {
    super(props);
    this.state = { trainingList: [], inputs: [], showPopup: false };
    this.refreshTrainingList = this.refreshTrainingList.bind(this);
    this.deleteTrainingClicked = this.deleteTrainingClicked.bind(this);
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  componentDidMount() {
    this.refreshTrainingList();
  }
  refreshTrainingList() {
    TrainingService.showTrainingList().then(response => {
      let newTraining = [...this.state.trainingList];
      newTraining.push(response.data);
      this.setState({ trainingList: newTraining });
    });
  }
  deleteTrainingClicked(id) {
    TrainingService.deleteTraining("admin".then)(resp => {});
  }
  render() {
    return (
      <div className="container">
        <h3>Entrainements</h3>
        <div className="container">
          <button onClick={this.togglePopup.bind(this)}>
            Ajouter entrainement
          </button>
          {this.state.showPopup ? (
            <AddTraining
              text="Ajouter Entrainement"
              closePopup={this.togglePopup.bind(this)}
            />
          ) : null}

          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Titre</th>
                <th>Type</th>
                <th>Description</th>

                <th>Image</th>
              </tr>
            </thead>

            <tbody>
              {this.state.trainingList.map(lists =>
                lists.content.map((list, i) => (
                  <tr key={i}>
                    {console.log("je suis laaaa", list.id, i)}
                    <td>{i + 1}</td>
                    <td>{list.titre}</td>
                    <td>{list.type}</td>
                    <td>{list.description}</td>
                    <td>
                      <button
                        className="btn btn-warning"
                        onClick={() =>
                          this.deleteTrainingClicked(lists.content[i].id)
                        }
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
            {this.state.inputs.map(node => (
              <AddTraining />
            ))}
          </table>
        </div>
      </div>
    );
  }
}

export default TrainingCrud;

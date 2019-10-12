import React, { Component } from "react";
import TrainingService from "../../services/TrainingService";

import { Link } from "react-router-dom";
class Cours extends Component {
  constructor(props) {
    super(props);
    this.state = { trainingList: [] };
    this.refreshTrainingList = this.refreshTrainingList.bind(this);
  }
  componentDidMount() {
    this.refreshTrainingList();
  }
  refreshTrainingList() {
    TrainingService.showTrainingList("admin").then(response => {
      let newTraining = [...this.state.trainingList];
      newTraining.push(response.data);
      this.setState({ trainingList: newTraining });
    });
  }
  render() {
    return (
      <div>
        {this.state.trainingList.map(lists =>
          lists.content.map((list, i) => (
            <div className="album py-5 bg-light">
              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <div className="card mb-4 shadow-sm">
                      <svg
                        className="bd-placeholder-img card-img-top"
                        width="100%"
                        height="225"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                        role="img"
                        aria-label="Placeholder: Thumbnail"
                      >
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#55595c" />
                        <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                          Entrainement
                        </text>
                      </svg>
                      <div className="card-body">
                        <p className="card-text">kkkk</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <Link
                              to="/FirstCourse"
                              className="btn btn-sm btn-outline-secondary"
                            >
                              Commencer l'entrainement
                            </Link>
                          </div>
                          <small className="text-muted">9 mins</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    );
  }
}
export default Cours;

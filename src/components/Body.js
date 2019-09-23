import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./body.css";
import PermisAutoService from "../services/PermisAutoService";
class body extends Component {
  constructor(props) {
    super(props);
    this.state = { listePermis: [] };
    this.refreshPermisList = this.refreshPermisList.bind(this);
  }
  componentDidMount() {
    this.refreshPermisList();
  }
  refreshPermisList() {
    PermisAutoService.autoPermisListPermis("admin").then(response => {
      let newProducts = [...this.state.listePermis];
      newProducts.push(response.data);
      this.setState({ listePermis: newProducts });
      console.log("5raaaaaaa m5orri 55", this.state);
    });
  }
  render() {
    return (
      <div>
        <div className="album py-5 bg-light">
          <div className="container">
            {this.state.listePermis.map(lists =>
              lists.content.map((list, i) => (
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
                          {list.titre}
                        </text>
                      </svg>
                      <div className="card-body">
                        <p className="card-text">
                          {list.description}
                          <br />
                          price : {list.prix}
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                            >
                              View
                            </button>
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                            >
                              Buy
                            </button>
                          </div>
                          <small className="text-muted">9 mins</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default body;

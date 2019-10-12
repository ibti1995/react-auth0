import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./firstPage.css";
import "bootstrap/dist/css/bootstrap.css";
class FirstPage extends Component {
  render() {
    return (
      <div>
        <h2>Code de la route </h2>

        <div className="row">
          <div className="column1">
            <h2>Entrainement</h2>
            <p>
              Votre access est ilimité à la plateforme de revision du code de la
              route comprend
            </p>
            <p>
              plus de 1600 question et de nomreuxmodes d'entrainement pour
              réviser de chez vous en toute autonomie{" "}
            </p>

            <Link to="/Cours" className="btn btn-sm bg-warning">
              Commencer l'entrainement
            </Link>
          </div>
          <div className="column2">
            <h2>Examen</h2>
            <p>
              Depuis le 1er janvier , l'examen du code de la route la routeest
              organisé par des entreprise privées telle que la poste ou SGS au
              tarif fixe de 30E
            </p>
            <Link
              className="c1"
              to="/SecondPage"
              className="btn btn-sm bg-warning"
            >
              Reserver ma place d'examen
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default FirstPage;

/* <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="card mb-6 shadow-sm">
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
                      
                      </div>
                      <small className="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="card mb-6 shadow-sm">
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
                      Examen
                    </text>
                  </svg>
                  <div className="card-body">
                    <p className="card-text">yyyy</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Reserver ma place d'examen
                        </button>
                        <Link
                          to="/SecondPage"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Reserver ma place d'examen
                        </Link>
                      </div>
                      <small className="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>*/

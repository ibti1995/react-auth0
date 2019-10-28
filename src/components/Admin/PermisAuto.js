import React, { Component, Fragment } from "react";
import PermisAutoService from "../../services/PermisAutoService";
import { MDBBtn } from "mdbreact";
import Popup from "./Popup";

class PermisAuto extends Component {
  constructor(props) {
    super(props);
    this.state = { listePermis: [], inputs: [], showPopup: false };

    this.refreshPermisList = this.refreshPermisList.bind(this);
    this.deletePermisClicked = this.deletePermisClicked.bind(this);
  }
  /*  addInput = ev => {
    this.setState(prev => ({ inputs: [...prev.inputs, "Hi"] }));
  };*/
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  componentDidMount() {
    this.refreshPermisList();
  }
  deletePermisClicked(id) {
    PermisAutoService.deletePermis("admin", id).then(response => {});
  }
  refreshPermisList() {
    PermisAutoService.autoPermisListPermis("admin").then(response => {
      let newProducts = [...this.state.listePermis];
      newProducts.push(response.data);
      this.setState({ listePermis: newProducts });
    });
  }
  onSubmit(values) {
    console.log("helloooooo");
  }

  render() {
    return (
      <div className="container">
        <h3>Types de permis auto</h3>
        <div className="container">
          <Fragment>
            <MDBBtn color="warning" onClick={this.addInput}>
              Add
            </MDBBtn>
          </Fragment>
          <button onClick={this.togglePopup.bind(this)}>
            Click To Launch Popup
          </button>
          {this.state.showPopup ? (
            <Popup text="Add Permis" closePopup={this.togglePopup.bind(this)} />
          ) : null}
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Titre</th>
                <th>Description</th>

                <th>Prix</th>
              </tr>
            </thead>

            <tbody>
              {this.state.listePermis.map(lists =>
                lists.content.map((list, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{list.titre}</td>
                    <td>{list.description}</td>
                    <td>{list.prix}</td>
                    <td>
                      <button
                        className="btn btn-warning"
                        onClick={() =>
                          this.deletePermisClicked(lists.content[i].id)
                        }
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default PermisAuto;
/* <div>
            <form>
              <div></div>
              <table className="table">
                {this.state.inputs.map(node => (
                  <tr>
                    <td></td>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                    <td>
                      <button className="btn btn-warning" type="submit">
                        Add
                      </button>
                    </td>
                  </tr>
                ))}
              </table>
            </form>
          </div>*/

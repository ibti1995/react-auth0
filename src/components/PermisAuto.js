import React, { Component, Fragment } from "react";
import PermisAutoService from "../services/PermisAutoService";
import { MDBBtn } from "mdbreact";

class PermisAuto extends Component {
  constructor(props) {
    super(props);
    this.state = { listePermis: [], inputs: [] };
    this.refreshPermisList = this.refreshPermisList.bind(this);
    this.deletePermisClicked = this.deletePermisClicked.bind(this);
  }
  addInput = ev => {
    this.setState(prev => ({ inputs: [...prev.inputs, "Hi"] }));
  };
  componentDidMount() {
    this.refreshPermisList();
  }
  deletePermisClicked(id) {
    PermisAutoService.deletePermis("admin", id).then(response => {
      console.log("am heeeeere");
    });
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
      <div className="container">
        <h3>Types de permis auto</h3>
        <div className="container">
          <Fragment>
            <MDBBtn color="warning" onClick={this.addInput}>
              Add
            </MDBBtn>
          </Fragment>

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
                    {console.log("je suis laaaa", list.id, i)}
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
            {this.state.inputs.map(node => (
              <tr>
                {console.log("je suis laaaa")}
                <td />
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <button className="btn btn-warning">Add</button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    );
  }
}
export default PermisAuto;

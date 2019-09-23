import React, { Component } from "react";

class TableRow extends Component {
  render() {
    return (
      <tr>
        {console.log("je suis laaaa", list.id, i)}
        <td>{i + 1}</td>
        <td>{list.titre}</td>
        <td>{list.description}</td>
        <td>{list.prix}</td>
        <td>
          <button
            className="btn btn-warning"
            onClick={() => this.deletePermisClicked(lists.content[i].id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default TableRow;

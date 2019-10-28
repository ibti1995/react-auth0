import React, { Component } from "react";
class Logout extends Component {
  logout = () => {
    localStorage.clear();
  };
  render() {
    return (
      <div>
        {localStorage.getItem("user") || localStorage.getItem("Admin") ? (
          (this.logout(), this.props.history.push("/"))
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default Logout;

import React from "react";
import { Route, Redirect } from "react-router-dom";

const UserRoutes = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("user") ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export default UserRoutes;

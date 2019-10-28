import React from "react";
import { Route, Redirect } from "react-router-dom";

const AdminRoutes = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("Admin") ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export default AdminRoutes;

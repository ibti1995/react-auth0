import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Nav from "./components/Nav";
import Login from "./components/login";
import Admin from "./components/Admin";
function App() {
  return (
    <>
      <Nav />
      <Route path="/" exact component={Home} />
      <Route path="/Profile" component={Profile} />
      <Route path="/Login" component={Login} />
      <Route path="/Admin" component={Admin} />
    </>
  );
}

export default App;

import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Nav from "./components/Nav";
import Login from "./components/user/login";
import Admin from "./components/Admin/Admin";
import Subscribe from "./components/user/Subscribe";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import FirstCourse from "./components/CoursesFolder/FisrtCourse";
import TrainingCrud from "./components/Admin/TrainingCrud";
function App() {
  return (
    <>
      <Nav />
      <Route path="/" exact component={Home} />
      <Route path="/Profile" component={Profile} />
      <Route path="/Login" component={Login} />
      <Route path="/Admin" component={Admin} />
      <Route path="/Subscribe" component={Subscribe} />
      <Route path="/firstPage" component={FirstPage} />
      <Route path="/SecondPage" component={SecondPage} />

      <Route path="/FistCourse" component={FirstCourse} />

      <Route path="/TrainingCrud" component={TrainingCrud} />
    </>
  );
}

export default App;

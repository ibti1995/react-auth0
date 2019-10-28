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
import Cours from "./components/CoursesFolder/Cours";
import AdminRoutes from "./components/AdminRoutes";
import UserRoutes from "./components/user/UserRoutes";
import Logout from "./components/user/Logout";

const App = () => (
  <>
    <Nav />
    <Route path="/" exact component={Home} />
    <AdminRoutes path="/TrainingCrud" component={TrainingCrud} />
    <AdminRoutes path="/Admin" component={Admin} />
    <UserRoutes path="/firstPage" component={FirstPage} />
    <UserRoutes path="/SecondPage" component={SecondPage} />
    <UserRoutes path="/Cours" component={Cours} />
    <UserRoutes path="/Profile" component={Profile} />
    <Route path="/Subscribe" component={Subscribe} />
    <Route path="/logout" component={Logout} />
    <Route path="/FistCourse" component={FirstCourse} />
    <Route path="/Login" component={Login} />
  </>
);

export default App;

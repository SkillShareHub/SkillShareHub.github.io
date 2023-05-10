import React from "react";
import { Route, Routes, Redirect } from "react-router-dom";
import Contact from "./Contact";
import About from "./About";


const Routes = props => {
  return (
    <Routes>
      <Route exact path={"/home"} render={() => <Contact {...props} />} />
      <Route exact path={"/About/:aboutName"} render={() => <About {...props} />} />
      <Route path="*" render={() => <Redirect to={"/home"} />} />
    </Routes>
  );
};

export default Routes;
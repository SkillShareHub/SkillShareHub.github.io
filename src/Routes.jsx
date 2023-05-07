import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";


const Routes = props => {
  return (
    <Switch>
      <Route exact path={"/home"} render={() => <Contact {...props} />} />
      <Route exact path={"/categories/:categoryName"} render={() => <About {...props} />} />
      <Route path="*" render={() => <Redirect to={"/home"} />} />
    </Switch>
  );
};

export default Routes;
import React from "react";

import Landing from "./landingpage";
import AboutMe from "./aboutme";
import Contact from "./contact";
import Project from "./projects";
import Resume from "./resume";
// import { Switch, Route } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

const Main = () => (
  <Switch>
    <Route exact path="/" components={Landing} />
    <Route path="/aboutme" components={AboutMe} />
    <Route path="/contact" components={Contact} />
    <Route path="/projects" components={Project} />
    <Route path="/resume" components={Resume} />
  </Switch>
);

export default Main;

import React, { Component } from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { Link } from "react-router-dom";
import Main from "./components/main";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header
            title={
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/"
                scroll
              >
                Brook
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link to="/resume" style={{ fontSize: "20px" }}>
                Resume
              </Link>
              <Link to="/aboutme" style={{ fontSize: "20px" }}>
                About Me
              </Link>
              <Link to="/projects" style={{ fontSize: "20px" }}>
                Projects
              </Link>
              <Link to="/contact" style={{ fontSize: "20px" }}>
                Contact
              </Link>
            </Navigation>
          </Header>
          <Drawer title="Brook">
            <Navigation>
              <Link to="/resume">Resume </Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />

            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;

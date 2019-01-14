import React, { Component } from "react";

class AboutMe extends Component {
  render() {
    return (
      <div>
        <div className="aboutMeTitle">
          {" "}
          <h2>About Me</h2>
        </div>
        <div className="aboutmeWrapper">
          <div className="aboutPic">
            {" "}
            <img
              style={{ marginTop: "100px" }}
              src="https://cdn1.iconfinder.com/data/icons/social-messaging-productivity-1-1/128/gender-male2-512.png"
              alt="avatar"
              className="avatar-img"
            />
          </div>
          <div className="aboutMeContent">
            <p>
              {" "}
              Junior Front End Web Developer using HTML,CSS, Javascript,
              Self-thought in React . I am currently enrolled in college
              studying Computer Information Systems on my last year. Common use
              of UI libraries: Bootstrap 4, React-Bootstrap, MaterializeCSS,
              Material-UI and version Control.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;

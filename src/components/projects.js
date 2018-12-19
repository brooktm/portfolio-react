import React, { Component } from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activetab: 0
    };
  }
  render() {
    return (
      <div className="projects-list">
        {/* <Tabs
          activetab={this.state.activetab}
          onChange={tabId => this.setState({ activetab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>React</Tab>
          <Tab>React</Tab>
          <Tab>React</Tab>
        </Tabs> */}
        <Card shadow={0} style={{ width: "512px", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background:
                "url(http://web.cut.ac.cy/cutingedge/wp-content/uploads/sites/34/2016/03/comingsoon.png) center / cover"
            }}
          >
            Welcome
          </CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            sagittis pellentesque lacus eleifend lacinia...
          </CardText>
          <CardActions border>
            <a href="/" rel="noopener noreferrer" target="_blank">
              <i
                style={{ fontSize: "28px" }}
                className="fa fa-github-square"
                aria-hidden="true"
              />
            </a>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        <Card shadow={0} style={{ width: "512px", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background:
                "url(http://web.cut.ac.cy/cutingedge/wp-content/uploads/sites/34/2016/03/comingsoon.png) center / cover"
            }}
          >
            Welcome
          </CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            sagittis pellentesque lacus eleifend lacinia...
          </CardText>
          <CardActions border>
            <a href="/" rel="noopener noreferrer" target="_blank">
              <i
                style={{ fontSize: "28px" }}
                className="fa fa-github-square"
                aria-hidden="true"
              />
            </a>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        <Card shadow={0} style={{ width: "512px", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background:
                "url(http://web.cut.ac.cy/cutingedge/wp-content/uploads/sites/34/2016/03/comingsoon.png) center / cover"
            }}
          >
            Welcome
          </CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            sagittis pellentesque lacus eleifend lacinia...
          </CardText>
          <CardActions border>
            <a href="/" rel="noopener noreferrer" target="_blank">
              <i
                style={{ fontSize: "28px" }}
                className="fa fa-github-square"
                aria-hidden="true"
              />
            </a>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      </div>
    );
  }
}

export default Projects;

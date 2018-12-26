import React, { Component } from "react";
import axios from "axios";

const API_PATH =
  "http://localhost:3000/react-contact-form/api/contact/index.php";
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      message: "",
      mailSent: false,
      error: null
    };
  }
  handleFormSubmit(e) {
    e.preventDefault();
    axios({
      method: "post",
      url: `${API_PATH}`,
      headers: { "content-type": "application/json" },
      data: this.state
    })
      .then(result => {
        this.setState({ mailSent: result.data.sent });
      })
      .catch(error => this.setState({ error: error.message }));
  }

  render() {
    return (
      <div className="contact-section">
        <h2 className="form-header">Contact Me</h2>
        <div>
          <form action="/action_page.php">
            <label>First Name</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
              value={this.state.fname}
              onChange={e => this.setState({ fname: e.target.value })}
            />
            <label>Last Name</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
              value={this.state.lname}
              onChange={e => this.setState({ lname: e.target.value })}
            />

            <label>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
            />

            <label>Subject</label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
              onChange={e => this.setState({ message: e.target.value })}
              value={this.state.message}
            />
            <input
              type="submit"
              value="Submit"
              onClick={e => this.handleFormSubmit(e)}
              value="Submit"
            />

            <div>
              {this.state.mailSent && <div>Thank you for contcting us.</div>}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;

import React, { Component } from "react";

class Contact extends Component {
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
            />
            <label>Last Name</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
            />

            <label>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
            />

            <label>Subject</label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;

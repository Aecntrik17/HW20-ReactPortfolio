import React from "react";
import profilePic from "../assets/AaronSims.jpg";
import resume from "../assets/resume.pdf";

// the html display for the about page
function About() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <h1>About Me</h1>
          <img alt="Aaron Sims" src={profilePic} />
          <p>Content</p>
          <div>
            <a className="nav-link" href={resume} target="_blank">
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
// allows for this data in About to be accessed in other files
export default About;

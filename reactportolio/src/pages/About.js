import React from "react";
import profilePic from "../assets/AaronSims.jpg";

function About() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <h1>About Me</h1>
          <img alt="Aaron Sims" src={profilePic} />
          <p>Content</p>
          <div>
          <a
              className="nav-link"
              href="assets/2020 Sept A Sims Resume.pdf"
              target="_blank"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

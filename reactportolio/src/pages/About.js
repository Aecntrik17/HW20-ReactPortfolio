import React, { useEffect } from "react";
import profilePic from "../assets/AaronSims.jpg";

function About() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <h1>About Me</h1>
          <img alt="Aaron Sims" src={profilePic} />
          <p>Content</p>
        </div>
      </div>
    </div>
  );
}

export default About;

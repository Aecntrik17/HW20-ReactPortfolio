import React from "react";
import resume from "../../assets/resume.pdf";

function Footer() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <span className="navbar-brand mb-1 h1"></span>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="nav navbar-nav navbar-right">
          <li className="nav-item">
            <a className="nav-link" href={resume} target="_blank">
              Resume
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.linkedin.com/in/aarondsims"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://github.com/Aecntrik17"
              target="_blank"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Footer;

import React from "react";
import "./project.css";

// html for Project page, template
// props are necessary dynamically generate the content of different cards
function Project(props) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={props.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
        <a href={props.github} target="*" className="btn btn-primary">
          Github
        </a>
        <a href={props.deployed} target="*" className="btn btn-primary">
          Deployed
        </a>
      </div>
    </div>
  );
}
// provides for Project to be accesible in other files
export default Project;

import React from "react";
import Project from "../components/Project/Project";
import ProjectsArray from "../projects";
import Welcome from "../components/Welcome/Welcome";
import "./portfolio.css";

// will display the portfolio page of the project
function Portfolio() {
  return (
    <div className="welcome">
      <div>
        <Welcome />
      </div>
      <div className="portfolioContainer">
        {/* <div className="project"> */}
        {/* looping through the projects array and pulling information based on the appropriate keys */}
        {ProjectsArray.map((project) => (
          // generating project component based on data in projects array
          <Project
            id={project.id}
            key={project.id}
            image={project.image}
            title={project.title}
            github={project.github}
            deployed={project.deployed}
          />
        ))}
      </div>
      {/* </div> */}
    </div>
  );
}

export default Portfolio;

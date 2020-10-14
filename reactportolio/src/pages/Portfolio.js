import React from "react";
import Project from "../components/Project/Project";
import ProjectsArray from "../projects";

// will display the portfolio page of the project
function Portfolio() {
  return (
    <div>
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
  );
}

export default Portfolio;

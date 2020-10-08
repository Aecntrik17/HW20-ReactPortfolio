import React from "react";
import Project from "../components/Project/Project";
import ProjectsArray from "../projects";

function Portfolio() {
  return (
    <div>
      {ProjectsArray.map((project) => (
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

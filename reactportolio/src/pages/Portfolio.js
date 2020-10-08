import React from "react";
import Project from "../components/Project/Project";
import ProjectsArray from "../projects.json";

function Portfolio() {
  return (
    <container>
      {ProjectsArray.map((project) => (
        <Project
          id={project.id}
          image={project.image}
          title={project.title}
          github={project.github}
          deployed={project.deployed}
        />
      ))}
    </container>
  );
}

export default Portfolio;

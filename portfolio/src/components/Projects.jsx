import React from "react";

const projects = [
    {
    name: "MANCEG_PROYECT",
    description: "Proyecto web con funcionalidades avanzadas en JavaScript y manejo de datos dinámicos.",
    tech: "React, Node.js, MongoDB, Express",
    github: "https://github.com/Nelson-Sosa/MANCEG_PROYECT",
    //demo: "#"
  },
  {
    name: "GameMasters",
    description: "E-commerce para gamers con login, CRUD de productos y generación de facturas en PDF.",
    tech: "React, Node.js, MongoDB, Express",
    github: "https://github.com/Nelson-Sosa/GameMasters",
    //demo: "#" // si tienes demo online
  }

];

const Projects = () => {
  return (
    <section id="projects">
      <h2>Proyectos</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p><strong>Tecnologías:</strong> {project.tech}</p>
            <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
            {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Demo</a>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
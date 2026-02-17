import React from "react";

const projects = [
    {
    name: "MANCEG_PROYECT",
    description: "Sistema Full Stack MERN para gestión empresarial con autenticación JWT, CRUD completo y API REST.",
    tech: "React, Node.js, MongoDB, Express",
    github: "https://github.com/Nelson-Sosa/MANCEG_PROYECT",
    //demo: "#"
  },
  {
    name: "GameMasters",
    description: "App Full Stack MERN para venta de productos gamers, con JWT, CRUD, carga de imágenes, buscador por categorías y API REST.",
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
import React from "react";

const projects = [
    {
    name: "MANCEG_PROYECT",
    description: "Sistema Full Stack MERN con JWT, APIs REST y CRUD completos para módulos de gestión empresarial, integrando frontend, backend y base de datos con MongoDB.",
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

            {/* Contenido (crece) */}
            <div className="project-content">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <p><strong>Tecnologías:</strong> {project.tech}</p>
            </div>

            {/* Botones (se quedan abajo) */}
            <div className="project-actions">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                GitHub
              </a>

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  Demo
                </a>
              )}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};


export default Projects;
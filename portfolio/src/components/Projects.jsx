import React from "react";

const projects = [
  {
    name: "PuraTech",
    description: "Plataforma de e-commerce Full Stack MERN avanzada. Implementa autenticación segura JWT, control de acceso basado en roles (RBAC), y un innovador sistema jerárquico de categorías de 3 niveles. Incluye un completo panel de administración de productos e inventario, integración de Stripe para pagos en producción y optimización de imágenes con Cloudinary.",
    tech: "React 18, Node.js, Express.js, MongoDB, JWT, Stripe, Cloudinary, Tailwind CSS.",
    github: "https://github.com/Nelson-Sosa/PuraTech",
    demo: "https://puratech-store.vercel.app/"
  },
  {
    name: "MANCEG_PROYECT",
    description: "Sistema Full Stack MERN con JWT, APIs REST y CRUD completos para módulos de gestión empresarial, integrando frontend, backend y base de datos con MongoDB.",
    tech: "React, Node.js, MongoDB, Express",
    github: "https://github.com/Nelson-Sosa/MANCEG_PROYECT"
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
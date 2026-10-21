// src/components/Projects.jsx
import React from 'react';
import { projects } from '../data/projects.js';
import './Projects.css';

/* SVG Icons */
const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const VideoIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="23 7 16 12 23 17 23 7" />
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
  </svg>
);

/* Project color → gradient backgrounds for placeholder */
const PLACEHOLDER_BG = {
  '#3b82f6': 'linear-gradient(135deg, rgba(59,130,246,0.12) 0%, rgba(29,78,216,0.08) 100%)',
  '#8b5cf6': 'linear-gradient(135deg, rgba(139,92,246,0.12) 0%, rgba(109,40,217,0.08) 100%)',
  '#10b981': 'linear-gradient(135deg, rgba(16,185,129,0.12) 0%, rgba(5,150,105,0.08) 100%)',
  '#f59e0b': 'linear-gradient(135deg, rgba(245,158,11,0.12) 0%, rgba(217,119,6,0.08) 100%)',
  '#eab308': 'linear-gradient(135deg, rgba(234,179,8,0.12) 0%, rgba(202,138,4,0.08) 100%)',
  '#22d3ee': 'linear-gradient(135deg, rgba(34,211,238,0.12) 0%, rgba(6,182,212,0.08) 100%)',
  '#ec4899': 'linear-gradient(135deg, rgba(236,72,153,0.12) 0%, rgba(219,39,119,0.08) 100%)',
};

const PLACEHOLDER_EMOJI = {
  codigopy: '🏪',
  tiendaonline: '🛍️',
  'sistema-comercial': '🏬',
  barberpro: '💈',
  patynails: '💅',
  puratech: '🛒',
  manceg: '📊',
};

const ProjectCard = ({ project, index }) => {
  const delayClass = `reveal-delay-${(index % 3) + 1}`;
  const displayHost = project.demo
    ? project.demo.replace(/^https?:\/\//, '').replace(/\/.*$/, '')
    : `${project.id}.local`;

  return (
    <article
      className={`project-card reveal ${delayClass}`}
      aria-label={`Proyecto: ${project.name}`}
    >
      {/* Mock Browser Frame */}
      <div className="project-browser-frame">
        <div className="project-browser-header">
          <div className="browser-dots" aria-hidden="true">
            <span className="browser-dot dot-red" />
            <span className="browser-dot dot-yellow" />
            <span className="browser-dot dot-green" />
          </div>
          <div className="browser-address-bar" title={project.demo || `${project.name} (local)`}>
            <svg className="browser-lock-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span className="browser-address-text">{displayHost}</span>
          </div>
        </div>

        {/* Image / Placeholder */}
        <div className="project-image-wrapper">
          {project.image ? (
            <>
              <img
                src={project.image}
                alt={project.imageAlt || `Captura de pantalla de ${project.name}`}
                className={`project-image ${project.imageFit ? `project-image-${project.imageFit}` : ''}`}
                loading="lazy"
                width="640"
                height="360"
              />
              <div className="project-image-overlay" aria-hidden="true">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-overlay-btn"
                    aria-label={`${project.demoLabel || 'Ver demo'} de ${project.name}`}
                    tabIndex={-1}
                  >
                    {project.demoLabel || 'Demo'}
                  </a>
                )}
                {project.video && (
                  <a
                    href={project.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-overlay-btn project-overlay-btn-video"
                    aria-label={`Ver video de ${project.name}`}
                    tabIndex={-1}
                  >
                    Video
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-overlay-btn"
                    aria-label={`Ver repositorio de ${project.name} en GitHub`}
                    tabIndex={-1}
                  >
                    GitHub
                  </a>
                )}
              </div>
            </>
          ) : (
            <div
              className="project-image-placeholder"
              style={{ background: PLACEHOLDER_BG[project.color] || PLACEHOLDER_BG['#3b82f6'] }}
              role="img"
              aria-label={`Ícono representativo de ${project.name}`}
            >
              <span role="presentation">{PLACEHOLDER_EMOJI[project.id] || '💻'}</span>
              <span className="project-image-placeholder-label">{project.name}</span>
            </div>
          )}

          {/* Category badge */}
          <div className="project-category-badge" aria-label={`Categoría: ${project.category}`}>
            {project.category}
          </div>

          {/* Real Business / Status badge */}
          {project.badge && (
            <div className="project-status-badge" aria-label={`Estado: ${project.badge}`}>
              <span className="project-status-dot" aria-hidden="true" />
              {project.badge}
            </div>
          )}
        </div>
      </div>

      {/* Card body */}
      <div className="project-body">
        <div className="project-header">
          <h3 className="project-name">{project.name}</h3>
          <p className="project-tagline">{project.tagline}</p>
        </div>

        <p className="project-description">{project.description}</p>

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <ul className="project-highlights" aria-label={`Características de ${project.name}`}>
            {project.highlights.slice(0, 4).map((h) => (
              <li key={h} className="project-highlight-item">
                <span className="project-highlight-dot" aria-hidden="true" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tech tags */}
        <div className="project-tech-tags" aria-label={`Tecnologías usadas en ${project.name}`}>
          {project.tech.map((t) => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>

        {/* Actions */}
        <div className="project-actions">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn project-btn-demo"
              aria-label={`Abrir ${project.demoLabel ? project.demoLabel.toLowerCase() : 'demo'} de ${project.name}`}
            >
              <ExternalLinkIcon />
              {project.demoLabel || 'Demo'}
            </a>
          )}
          {project.video && (
            <a
              href={project.video}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn project-btn-video"
              aria-label={`Ver video de ${project.name}`}
            >
              <VideoIcon />
              Video
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn project-btn-github"
              aria-label={`Ver código de ${project.name} en GitHub`}
            >
              <GitHubIcon />
              Código
            </a>
          )}
          {!project.demo && !project.video && !project.github && (
            <span className="project-no-demo" aria-label="Demo no disponible actualmente">
              Sin demo disponible
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <section id="projects" aria-labelledby="projects-title">
      <div className="projects-inner">

        {/* Header */}
        <div className="section-header reveal">
          <div className="section-label">Portafolio</div>
          <h2 id="projects-title" className="section-title">Proyectos destacados</h2>
          <p className="section-subtitle">
            Aplicaciones reales construidas con tecnologías modernas, desde la interfaz hasta el servidor.
          </p>
          <div className="divider" aria-hidden="true" />
        </div>

        {/* Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View all on GitHub */}
        <div className="section-header" style={{ marginTop: 'var(--space-12)', marginBottom: 0 }}>
          <a
            href="https://github.com/Nelson-Sosa"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            aria-label="Ver todos los repositorios de Nelson Sosa en GitHub"
          >
            Ver más en GitHub
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
// src/components/Skills.jsx
import React from 'react';
import { skillCategories } from '../data/skills.js';
import './Skills.css';

/* Color map for icon backgrounds */
const ICON_BG = {
  '#3b82f6': 'rgba(59, 130, 246, 0.12)',
  '#8b5cf6': 'rgba(139, 92, 246, 0.12)',
  '#22d3ee': 'rgba(34, 211, 238, 0.10)',
  '#f59e0b': 'rgba(245, 158, 11, 0.10)',
  '#10b981': 'rgba(16, 185, 129, 0.10)',
  '#f97316': 'rgba(249, 115, 22, 0.10)',
};

/* Category emoji icons */
const CATEGORY_ICONS = {
  frontend:   '⚛',
  backend:    '⚙',
  databases:  '🗄',
  languages:  '{ }',
  tools:      '🔧',
  deployment: '🚀',
};

const Skills = () => {
  return (
    <section id="skills" aria-labelledby="skills-title">
      <div className="skills-inner">

        {/* Header */}
        <div className="section-header reveal">
          <div className="section-label">Stack tecnológico</div>
          <h2 id="skills-title" className="section-title">Habilidades técnicas</h2>
          <p className="section-subtitle">
            Tecnologías que utilizo para construir soluciones completas, desde el frontend hasta el despliegue.
          </p>
          <div className="divider" aria-hidden="true" />
        </div>

        {/* Categories grid */}
        <div className="skills-categories" role="list" aria-label="Categorías de habilidades técnicas">
          {skillCategories.map((category, catIdx) => (
            <article
              key={category.id}
              className={`skill-category-card reveal reveal-delay-${(catIdx % 4) + 1}`}
              role="listitem"
              aria-label={`Categoría: ${category.label}`}
            >
              {/* Card header */}
              <div className="skill-category-header">
                <div
                  className="skill-category-icon"
                  style={{ background: ICON_BG[category.color] || 'rgba(255,255,255,0.06)', color: category.color }}
                  aria-hidden="true"
                >
                  {CATEGORY_ICONS[category.id] || '◈'}
                </div>
                <span className="skill-category-name">{category.label}</span>
              </div>

              {/* Skill chips */}
              <ul className="skill-chips" aria-label={`Habilidades de ${category.label}`}>
                {category.skills.map((skill) => (
                  <li key={skill.name}>
                    <span className="skill-chip">
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
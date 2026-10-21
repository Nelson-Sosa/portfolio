// src/components/About.jsx
import React from 'react';
import './About.css';

const INFO_CARDS = [
  {
    icon: '🎓',
    colorClass: 'blue',
    title: 'Formación',
    body: 'Estudiante de 4.º año de Licenciatura en Informática. Aprendizaje continuo combinando formación académica con proyectos prácticos.',
  },
  {
    icon: '💻',
    colorClass: 'violet',
    title: 'Stack principal',
    body: 'React · TypeScript · Node.js · Express · MongoDB. Desarrollo completo desde interfaces hasta APIs y bases de datos.',
  },
  {
    icon: '🚀',
    colorClass: 'cyan',
    title: 'Proyectos propios',
    body: 'Construyo aplicaciones reales como CodigoPy y PuraTech: desde la idea hasta el despliegue en producción.',
  },
  {
    icon: '🎯',
    colorClass: 'amber',
    title: 'Objetivo',
    body: 'Contribuir a un equipo tecnológico donde pueda aportar valor, seguir creciendo y construir software que impacte positivamente.',
  },
];

const About = () => {
  return (
    <section id="about" aria-labelledby="about-title">
      <div className="about-inner">

        <div className="about-grid">
          {/* ---- Text side ---- */}
          <div className="about-text-side reveal">
            <div className="section-label" aria-hidden="true">Sobre mí</div>

            <h2 id="about-title" className="about-title">
              Desarrollador apasionado por construir
              {' '}<span className="gradient-text">soluciones reales</span>
            </h2>

            <div className="about-paragraphs">
              <p>
                Soy desarrollador <strong>Full Stack</strong> y estudiante de Licenciatura en Informática.
                Me interesa construir aplicaciones web que resuelvan problemas reales, combinando interfaces
                intuitivas, lógica de negocio sólida, APIs bien diseñadas y bases de datos eficientes.
              </p>
              <p>
                Desarrollo proyectos propios para mejorar mis habilidades y convertir ideas en soluciones
                funcionales, mantenibles y preparadas para su despliegue. Cada proyecto es una oportunidad
                para aplicar buenas prácticas, explorar nuevas tecnologías y profundizar en patrones de
                arquitectura de software.
              </p>
              <p>
                Me motiva la posibilidad de contribuir a un equipo donde el código sea limpio, los procesos
                sean ágiles y el producto tenga impacto real en sus usuarios.
              </p>
            </div>

            <div className="about-cta">
              <a
                href="/CV-Nelson-Sosa.pdf"
                download="CV-Nelson-Sosa.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
                aria-label="Descargar CV de Nelson Sosa"
              >
                Descargar CV
              </a>
              <a
                href="#contact"
                className="btn btn-secondary"
                aria-label="Ir a la sección de contacto"
              >
                Contactar
              </a>
            </div>
          </div>

          {/* ---- Cards side ---- */}
          <div className="about-cards-side">
            {INFO_CARDS.map((card, i) => (
              <div
                key={card.title}
                className={`about-info-card reveal reveal-delay-${i + 1}`}
              >
                <div className="about-info-card-header">
                  <div className={`about-info-icon ${card.colorClass}`} aria-hidden="true">
                    {card.icon}
                  </div>
                  <h3>{card.title}</h3>
                </div>
                <p>{card.body}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
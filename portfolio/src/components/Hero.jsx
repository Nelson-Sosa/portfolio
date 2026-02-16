import React from "react";

const Hero = () => {
  return (
    <section id="hero">
      <img 
        src="img/Foto.png"  /* ojo: la ruta comienza con / para public */
        alt="Nelson Sosa" 
        className="hero-photo"
      />
      <h1>Nelson Sosa</h1>
      <p>Desarrollador Fullstack MERN | Frontend & Backend</p>
      <a href="#projects" className="btn">Ver proyectos</a>
      <a
  href="/CV_Nelson_Sosa.pdf"
  download
  target="_blank"
  rel="noreferrer"
  className="cv-btn"
>
  Descargar CV
</a>

    </section>
  );
};

export default Hero;
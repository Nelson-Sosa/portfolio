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
    </section>
  );
};

export default Hero;
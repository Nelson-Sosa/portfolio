import React, { useState } from "react";

const Contact = () => {
 
   return (
    <section id="contact">
      <h2>Contacto</h2>
      <p>¿Quieres hablar conmigo? contáctame directamente:</p>
      <div className="contact-buttons">
         <a href="mailto:ns5389188@gmail.com" target="_blank" rel="noreferrer">
    Email
  </a>
        <a href="https://wa.me/595983986775?text=Hola%20Nelson,%20quiero%20contactarte" target="_blank" rel="noreferrer">WhatsApp</a>
        <a href="https://www.linkedin.com/in/nelson-sosa-b9b901398/" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </section>
  );
};

export default Contact;
import React from "react";

const skills = [
  "Lenguajes: JavaScript, TypeScript, SQL, Java, C#, Ruby",
  "Frontend: React, HTML5, CSS3, Tailwind CSS, Bootstrap, Vite",
  "Backend: Node.js, Express, Ruby on Rails",
  "Bases de Datos: MongoDB, MySQL, PostgreSQL",
  "Herramientas: Git, GitHub, Postman",
  "Deployment: Vercel, Render, MongoDB Atlas"
];

const Skills = () => {
  return (
    <section id="skills">
      <h2>Habilidades</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
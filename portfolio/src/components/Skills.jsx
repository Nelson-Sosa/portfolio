import React from "react";

const skills = [
  "Frontend: HTML5, CSS3, React.js, Bootstrap",
  "Backend: Node.js, Express.js, Ruby on Rails",
  "Bases de datos: MongoDB, MySQL, PostgreSQL",
  "Herramientas: Git/GitHub, Postman"
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
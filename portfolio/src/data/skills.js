// src/data/skills.js
// Datos centralizados de habilidades técnicas

export const skillCategories = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: '⬡',
    color: '#3b82f6',
    skills: [
      { name: 'React', icon: 'react' },
      { name: 'TypeScript', icon: 'ts' },
      { name: 'JavaScript', icon: 'js' },
      { name: 'HTML5', icon: 'html' },
      { name: 'CSS3', icon: 'css' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
      { name: 'Bootstrap', icon: 'bootstrap' },
      { name: 'Vite', icon: 'vite' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: '⬡',
    color: '#8b5cf6',
    skills: [
      { name: 'Node.js', icon: 'node' },
      { name: 'Express.js', icon: 'express' },
      { name: 'Ruby on Rails', icon: 'rails' },
    ],
  },
  {
    id: 'databases',
    label: 'Bases de Datos',
    icon: '⬡',
    color: '#22d3ee',
    skills: [
      { name: 'MongoDB', icon: 'mongo' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'PostgreSQL', icon: 'postgres' },
    ],
  },
  {
    id: 'languages',
    label: 'Lenguajes',
    icon: '⬡',
    color: '#f59e0b',
    skills: [
      { name: 'SQL', icon: 'sql' },
      { name: 'Java', icon: 'java' },
      { name: 'C#', icon: 'csharp' },
      { name: 'Ruby', icon: 'ruby' },
    ],
  },
  {
    id: 'tools',
    label: 'Herramientas',
    icon: '⬡',
    color: '#10b981',
    skills: [
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
      { name: 'Postman', icon: 'postman' },
    ],
  },
  {
    id: 'deployment',
    label: 'Despliegue',
    icon: '⬡',
    color: '#f97316',
    skills: [
      { name: 'Vercel', icon: 'vercel' },
      { name: 'Render', icon: 'render' },
      { name: 'MongoDB Atlas', icon: 'atlas' },
    ],
  },
];

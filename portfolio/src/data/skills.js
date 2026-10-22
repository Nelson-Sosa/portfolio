// src/data/skills.js
// Datos centralizados de habilidades técnicas

export const skillCategories = [
  {
    id: 'languages',
    label: 'Lenguajes de Programación',
    icon: '⬡',
    color: '#f59e0b',
    skills: [
      { name: 'JavaScript', icon: 'js' },
      { name: 'TypeScript', icon: 'ts' },
      { name: 'SQL', icon: 'sql' },
      { name: 'Java', icon: 'java' },
      { name: 'C#', icon: 'csharp' },
      { name: 'Ruby', icon: 'ruby' },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    icon: '⬡',
    color: '#3b82f6',
    skills: [
      { name: 'React', icon: 'react' },
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
      { name: 'Express', icon: 'express' },
      { name: 'REST APIs', icon: 'api' },
      { name: 'JWT', icon: 'jwt' },
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
      { name: 'Firestore', icon: 'firestore' },
    ],
  },
  {
    id: 'tools',
    label: 'Herramientas de Desarrollo',
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
    label: 'Deployment / Cloud',
    icon: '⬡',
    color: '#f97316',
    skills: [
      { name: 'Vercel', icon: 'vercel' },
      { name: 'Render', icon: 'render' },
      { name: 'Firebase Hosting', icon: 'firebase' },
      { name: 'Firebase Auth', icon: 'firebase-auth' },
      { name: 'MongoDB Atlas', icon: 'atlas' },
    ],
  },
];

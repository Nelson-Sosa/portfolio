// App.jsx
import Navbar  from './components/Navbar.jsx';
import Hero    from './components/Hero.jsx';
import About   from './components/About.jsx';
import Skills  from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer  from './components/Footer.jsx';
import { useScrollReveal } from './hooks/useScrollReveal.js';

function App() {
  // Initialize scroll-reveal animations for all .reveal elements
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
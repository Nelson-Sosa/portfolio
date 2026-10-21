// src/components/Navbar.jsx
import React, { useState, useEffect, useCallback } from 'react';
import './Navbar.css';

const NAV_LINKS = [
  { href: '#hero',     label: 'Inicio' },
  { href: '#about',    label: 'Sobre mí' },
  { href: '#skills',   label: 'Habilidades' },
  { href: '#projects', label: 'Proyectos' },
  { href: '#contact',  label: 'Contacto' },
];

const Navbar = () => {
  const [isOpen, setIsOpen]       = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const [activeSection, setActive] = useState('hero');

  /* Scroll listener — sticky shadow + active section detection */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map((l) => l.href.slice(1));
      let current = 'hero';

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          current = id;
        }
      });

      setActive(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Close mobile menu on resize to desktop */
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setIsOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height') || '68', 10);
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    closeMenu();
  }, [closeMenu]);

  return (
    <>
      <header className={`navbar${scrolled ? ' scrolled' : ''}`} role="banner">
        <div className="navbar-inner">
          {/* Logo */}
          <a
            href="#hero"
            className="navbar-logo"
            onClick={(e) => handleNavClick(e, '#hero')}
            aria-label="Nelson Sosa — inicio"
          >
            Nelson<span>.</span>
          </a>

          {/* Desktop navigation */}
          <nav className="navbar-links" aria-label="Navegación principal">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`nav-link${activeSection === href.slice(1) ? ' active' : ''}`}
                onClick={(e) => handleNavClick(e, href)}
                aria-current={activeSection === href.slice(1) ? 'page' : undefined}
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="nav-cta"
            onClick={(e) => handleNavClick(e, '#contact')}
            aria-label="Contactar a Nelson Sosa"
          >
            Hablemos
          </a>

          {/* Hamburger button */}
          <button
            className={`hamburger${isOpen ? ' open' : ''}`}
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <nav
        id="mobile-menu"
        className={`mobile-menu${isOpen ? ' open' : ''}`}
        aria-label="Menú de navegación móvil"
        aria-hidden={!isOpen}
      >
        {NAV_LINKS.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className={`mobile-nav-link${activeSection === href.slice(1) ? ' active' : ''}`}
            onClick={(e) => handleNavClick(e, href)}
            aria-current={activeSection === href.slice(1) ? 'page' : undefined}
            tabIndex={isOpen ? 0 : -1}
          >
            {label}
          </a>
        ))}
        <a
          href="#contact"
          className="mobile-menu-cta"
          onClick={(e) => handleNavClick(e, '#contact')}
          tabIndex={isOpen ? 0 : -1}
        >
          Hablemos
        </a>
      </nav>
    </>
  );
};

export default Navbar;
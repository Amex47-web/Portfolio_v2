// src/components/Header.jsx
import React from 'react';
import ThemeToggle from './ThemeToggle';
import './Header.css';

// 1. Change this URL to point to your new logo in the /public folder
const logoUrl = '/logo.png';

const Header = () => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-inner">
        <div className="logo">
          <a href="/">
            <img src={logoUrl} alt="Ameya Balange Logo" />
          </a>
        </div>
        <nav className="main-nav">
          <ul>
            <li><a onClick={() => scrollToSection('hero-section')}>// home</a></li>
            <li><a onClick={() => scrollToSection('expertise')}>// expertise</a></li>
            <li><a onClick={() => scrollToSection('skills')}>// skills</a></li>
            <li><a onClick={() => scrollToSection('work')}>// work</a></li>
            <li><a onClick={() => scrollToSection('experience')}>// experience</a></li>
            <li><a onClick={() => scrollToSection('contact')}>// contact</a></li>
            <li><ThemeToggle /></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
// src/components/Hero.jsx
import React from 'react';
import './Hero.css';

const personalImageUrl = '/profile.png';

const Hero = () => {
  const scrollToContact = () => {
    const section = document.getElementById('contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero-section" className="hero-section page-container">

      <div className="hero-content">
        <div className="hero-background-image">
          <img src={personalImageUrl} alt="Ameya Balange" />
        </div>

        <h2 className="hero-title-small">Hello, I'm</h2>

        <h1 className="hero-name">
          Ameya Balange
        </h1>

        <p className="hero-description">
          Software Engineer, Full Stack & ML Developer.
          <br />
          Building digital experiences with modern technologies.
        </p>

        <div className="hero-button-container">
          <button className="btn-get-in-touch" onClick={scrollToContact}>
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
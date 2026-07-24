import React from 'react';
import brandImage from '../../photo_2025-06-30_05-12-32.jpg';

const Hero = ({ content }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-brand-background" aria-hidden="true">
        <img src={brandImage} alt="" />
      </div>
      <div className="container hero-layout">
        <div className="hero-content">
          <p className="hero-eyebrow">{content.eyebrow}</p>
          <h1>{content.title}</h1>
          <p className="hero-intro">{content.intro}</p>
          <div className="hero-meta">
            {content.highlights.map((highlight) => (
              <span key={highlight}>{highlight}</span>
            ))}
          </div>
          <p className="hero-location">
            <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
            {content.location}
          </p>
        </div>
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
            {content.primaryCta}
          </button>
          <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
            {content.secondaryCta}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

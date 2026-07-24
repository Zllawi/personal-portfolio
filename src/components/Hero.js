import React, { useEffect, useState } from 'react';
import brandImage from '../../photo_2025-06-30_05-12-32.jpg';
import profileImage from '../assets/profile.jpg';

const Hero = ({ content }) => {
  const [typedTitle, setTypedTitle] = useState('');

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setTypedTitle(content.title);
      return undefined;
    }

    setTypedTitle('');
    let index = 0;
    let typingTimer;
    const startDelay = window.setTimeout(() => {
      typingTimer = window.setInterval(() => {
        index += 1;
        setTypedTitle(content.title.slice(0, index));

        if (index >= content.title.length) {
          window.clearInterval(typingTimer);
        }
      }, 72);
    }, 350);

    return () => {
      window.clearTimeout(startDelay);
      window.clearInterval(typingTimer);
    };
  }, [content.title]);

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
          <h1 className="typing-title" aria-label={content.title}>
            <span className="typing-sizer" aria-hidden="true">{content.title}</span>
            <span className="typing-live" aria-hidden="true">
              {typedTitle}
              <span className="typing-cursor"></span>
            </span>
          </h1>
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
        <figure className="hero-portrait">
          <img src={profileImage} alt={content.profileAlt} />
        </figure>
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
            {content.primaryCta}
          </button>
          <a
            className="btn btn-social btn-github"
            href={content.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github" aria-hidden="true"></i>
            {content.githubCta}
          </a>
          <a
            className="btn btn-social btn-linkedin"
            href={content.linkedinUrl}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin-in" aria-hidden="true"></i>
            {content.linkedinCta}
          </a>
          <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
            {content.secondaryCta}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React, { useState } from 'react';

const Header = ({ activeSection, content, sections, language, onToggleLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <button
            type="button"
            onClick={() => scrollToSection('home')}
            aria-label={content.logo}
          >
            {content.logo}
          </button>
        </div>
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul>
            {sections.map((sectionId) => (
              <li key={sectionId}>
                <a
                  href={`#${sectionId}`}
                  className={activeSection === sectionId ? 'active' : ''}
                  onClick={(e) => { e.preventDefault(); scrollToSection(sectionId); }}
                >
                  {content.nav[sectionId]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          type="button"
          className="language-toggle"
          onClick={onToggleLanguage}
          aria-label={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
        >
          {content.languageToggle}
        </button>
        <button
          type="button"
          className={`menu-toggle ${isMenuOpen ? 'menu-toggle-open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;

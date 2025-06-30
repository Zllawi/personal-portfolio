import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Portfolio</h3>
            <p>Creating amazing web experiences with modern technologies.</p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p><i className="fas fa-envelope"></i> amdyamad1@gmail.com</p>
              <p><i className="fas fa-phone"></i> +218 94 436 4216</p>
              <p><i className="fas fa-map-marker-alt"></i> Benghazi, Libya</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} John Doe. All rights reserved.</p>
          <p>Built with React & ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;